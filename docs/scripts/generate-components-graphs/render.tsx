import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

import { renderToString } from '@qwik.dev/core/server';
import { chromium } from 'playwright';

import { PageLayoutMarkup, ComponentLayoutMarkup } from './layout';

// Register global error interceptors so background errors cannot terminate the run.
process.on('uncaughtException', (err) => {
  console.log(`⚠️  Background Uncaught Exception trapped: ${err.message}`);
});

process.on('unhandledRejection', (reason: any) => {
  console.log(`⚠️  Background Unhandled Rejection trapped: ${reason?.message || reason}`);
});

function findSystemChromiumPath(): string | undefined {
  try {
    const systemPath = execSync('which chromium').toString().trim();
    if (systemPath) return systemPath;
  } catch { }
  try {
    const systemPath = execSync('which google-chrome').toString().trim();
    if (systemPath) return systemPath;
  } catch { }
  return undefined;
}

// ---------------------------------------------------------------------------
// Execution Process Runner
// ---------------------------------------------------------------------------
export async function run(
  viteRoot: string,
  options: {
    devServerUrl: string;
    sharedState: { renderHtml: string };
    loadModule: (p: string) => Promise<any>;
  },
) {
  const { devServerUrl, sharedState, loadModule } = options;

  console.log('Rendering Qwik components to static markup...');

  const generatedDir = path.resolve(process.cwd(), 'src/generated');
  const componentsDir = path.resolve(generatedDir, 'components');
  const pagesDir = path.resolve(generatedDir, 'pages');

  if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir, { recursive: true });
  if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });

  const executablePath = findSystemChromiumPath();
  const browser = await chromium.launch({ executablePath, headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Forward browser console logs to the Node terminal to help debug live asset loading
  page.on('console', (msg) => {
    console.log(`[Browser Console] ${msg.type().toUpperCase()}: ${msg.text()}`);
  });
  page.on('pageerror', (err) => {
    console.error(`[Browser Error] ${err.message}`);
  });
  page.on('requestfailed', (request) => {
    console.error(`[Browser Request Failed] ${request.url()}: ${request.failure()?.errorText}`);
  });

  const kitIndexRel = './src/kit/index.tsx';

  let kitModule: any;
  try {
    kitModule = await loadModule(kitIndexRel);
  } catch (err: any) {
    console.error(`❌ Failed to load kit index module from ${kitIndexRel}:`, err.message);
    await browser.close();
    return;
  }

  //const SECTIONS_MAP = kitModule.SECTIONS_MAP;
  const SECTIONS_MAP = {
    button: kitModule.SECTIONS_MAP.button,
    calendar: kitModule.SECTIONS_MAP.calendar,
  };
  if (!SECTIONS_MAP) {
    console.error('❌ SECTIONS_MAP could not be found in kit/index.tsx');
    await browser.close();
    return;
  }

  const globalCollectedVars = new Map<string, string>();

  for (const [componentName, section] of Object.entries(SECTIONS_MAP)) {
    if (!section) continue;

    const boxedComps: any[] = [];
    if (section.default) boxedComps.push(section.default);
    if (Array.isArray(section.others)) boxedComps.push(...section.others);

    const componentGraphs: Record<string, any> = {};

    // --- PART 1: EXTRACT INDIVIDUAL COMPONENT VARIANT GRAPHS ---
    for (const boxed of boxedComps) {
      if (!boxed.title || !boxed.display) continue;

      const slug = boxed.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');

      try {
        let renderResult;
        const DisplayComponent = boxed.display;

        try {
          renderResult = await renderToString(
            <ComponentLayoutMarkup>
              <DisplayComponent />
            </ComponentLayoutMarkup>,
            {
              containerTagName: 'div',
              qwikLoader: {
                include: 'always',
              },
            },
          );
        } catch (renderError: any) {
          throw new Error(`Markup Render Error: ${renderError.message}`);
        }

        const pageContentHtml = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <script type="module" src="/src/kit/index.tsx"></script>
          </head>
          <body style="margin: 0; padding: 0;">
            <div id="export-root" style="display: inline-block;">${renderResult.html}</div>
          </body>
          </html>
        `;

        // Update HTML state using the sandbox-safe state reference
        sharedState.renderHtml = pageContentHtml;
        await page.goto(`${devServerUrl}render-component`, { waitUntil: 'networkidle' });

        // Dispatch immediate initialization events to trigger the visible task execution safely
        await page.evaluate(() => {
          document.dispatchEvent(new CustomEvent('qinit'));
          const els = document.querySelectorAll('[on\\:qvisible], [on-qvisible]');
          els.forEach((el) => {
            el.dispatchEvent(new CustomEvent('qvisible'));
          });
        });

        // Wait for client-side useVisibleTask$ task inside ExportGraph to run and set the global graph
        await page.waitForFunction(() => (window as any).__HTML_GRAPH !== undefined, {
          timeout: 15000,
        });
        const extractedData = await page.evaluate(() => (window as any).__HTML_GRAPH);

        if (extractedData && extractedData.root) {
          componentGraphs[slug] = extractedData.root;
          if (extractedData.variables) {
            for (const [key, val] of Object.entries(extractedData.variables)) {
              globalCollectedVars.set(key, val as string);
            }
          }
        }
      } catch (error: any) {
        console.log(`❌ ${componentName}-${slug} - Error: ${error.message}`);
      }
    }

    // --- PART 2: GENERATE THE FULL-PAGE GRAPH USING INTERACTIVE JSX ---
    if (Object.keys(componentGraphs).length > 0) {
      const tsFileName = `${componentName}.ts`;
      const outputPath = path.join(componentsDir, tsFileName);

      const defaultExportSlug = Object.keys(componentGraphs)[0];

      const tsContent = `// Generated automatically. Do not edit directly.
import type { SerializedNode } from '~/lib/copy-to-html';

export const graph: SerializedNode = ${JSON.stringify(componentGraphs[defaultExportSlug], null, 2)};

export const variants: Record<string, SerializedNode> = {
${Object.entries(componentGraphs)
          .map(([slug, graphData]) => `  "${slug}": ${JSON.stringify(graphData, null, 4)}`)
          .join(',\n')}
};
`;

      fs.writeFileSync(outputPath, tsContent, 'utf-8');
      console.log(`✅ Generated component graph: src/generated/components/${tsFileName}`);

      const pageFileName = `${componentName}.ts`;
      const pageOutputPath = path.join(pagesDir, pageFileName);

      const capitalizedName = componentName.charAt(0).toUpperCase() + componentName.slice(1);
      const cleanedTitle = section.title || capitalizedName;
      const cleanedDesc =
        section.description ||
        `A beautiful collection of visual configurations for the ${componentName} element.`;

      try {
        let pageRenderResult;
        try {
          pageRenderResult = await renderToString(
            <PageLayoutMarkup
              title={cleanedTitle}
              description={cleanedDesc}
              boxedComps={boxedComps}
            />,
            {
              containerTagName: 'div',
              qwikLoader: {
                include: 'always',
              },
            },
          );
        } catch (pageRenderError: any) {
          throw new Error(`Page Markup Render Error: ${pageRenderError.message}`);
        }

        const pageContentHtml = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <script type="module" src="/src/kit/index.tsx"></script>
          </head>
          <body style="margin: 0; padding: 0;">
            <div id="export-root" style="display: inline-block;">${pageRenderResult.html}</div>
          </body>
          </html>
        `;

        sharedState.renderHtml = pageContentHtml;
        await page.goto(`${devServerUrl}render-component`, { waitUntil: 'networkidle' });

        // Trigger immediate hydration
        await page.evaluate(() => {
          document.dispatchEvent(new CustomEvent('qinit'));
          const els = document.querySelectorAll('[on\\:qvisible], [on-qvisible]');
          els.forEach((el) => {
            el.dispatchEvent(new CustomEvent('qvisible'));
          });
        });

        await page.waitForFunction(() => (window as any).__HTML_GRAPH !== undefined, {
          timeout: 15000,
        });
        const pageExtractedData = await page.evaluate(() => (window as any).__HTML_GRAPH);

        if (pageExtractedData && pageExtractedData.root) {
          const pageContent = `// Generated automatically. Do not edit directly.
import type { SerializedNode } from '~/lib/copy-to-html';

export const graph: SerializedNode = ${JSON.stringify(pageExtractedData.root, null, 2)};
`;

          fs.writeFileSync(pageOutputPath, pageContent, 'utf-8');
          console.log(`✅ Generated page layout graph: src/generated/pages/${pageFileName}`);
        }
      } catch (pageError: any) {
        console.log(`❌ ${componentName} Page Generation - Error: ${pageError.message}`);
      }
    }
  }

  // Write all gathered CSS Variables dynamically into a centralized file
  const rootStylingPath = path.join(generatedDir, 'root-styling.ts');
  const rootStylingContent = `// Generated automatically. Do not edit directly.
export const rootStyling: Record<string, string> = ${JSON.stringify(
    Object.fromEntries(globalCollectedVars.entries()),
    null,
    2,
  )};
`;
  fs.writeFileSync(rootStylingPath, rootStylingContent, 'utf-8');
  console.log(`✅ Generated central root styling: src/generated/root-styling.ts`);

  await browser.close();
  console.log('🎉 Graph Generation process loop completed successfully!');
}
