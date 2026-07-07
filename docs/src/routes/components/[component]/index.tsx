import type { Component, JSXOutput } from '@qwik.dev/core';
import { component$, useStore, useSignal, $ } from '@qwik.dev/core';
import type { StaticGenerateHandler } from '@qwik.dev/router';
import { Link, useLocation } from '@qwik.dev/router';
import { BaseIconProps, SvgIcon } from '~primitives/@kit/svg-icon';

import { updateRootVariables, generateRawHtml, copyHtmlToClipboard } from '~/lib/copy-to-html';
import { Icon } from '~/utils/icon';

import { SECTIONS_MAP, type BoxedComp } from '../../../kit';

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const componentKeys = Object.keys(SECTIONS_MAP);

  return {
    params: componentKeys.map((component) => ({
      component,
    })),
  };
};

interface CardState {
  activeTabs: Record<string, 'preview' | 'code'>;
  reloadKeys: Record<string, number>;
}

// --- Lightweight Sub-components ---

export const ComponentNotFound = () => (
  <div class="max-w-4xl w-full mx-auto px-6 py-24 text-center font-sans">
    <h1 class="text-3xl font-medium text-ink">Component Not Found</h1>
    <p class="text-ink-secondary mt-2">The component page you are looking for does not exist.</p>
  </div>
);

export const Breadcrumbs = ({ componentParam }: { componentParam: string }) => (
  <div class="flex items-center gap-1 pb-9 w-fit font-sans leading-5">
    <Link href="/" class="text-ink-secondary hover:text-ink cursor-pointer">
      home
    </Link>
    <ChevronRightIcon />
    <Link href="/components" class="text-ink-secondary hover:text-ink cursor-pointer">
      components
    </Link>
    <ChevronRightIcon />
    <span class="text-ink capitalize">{componentParam.replace(/-/g, ' ').toLowerCase()}</span>
  </div>
);

export const PaginationControls = ({
  prevComponent,
  nextComponent,
}: {
  prevComponent: string | null;
  nextComponent: string | null;
}) => (
  <div class="flex items-center gap-2.5 overflow-clip">
    {prevComponent ? (
      <Link
        href={`/components/${prevComponent}`}
        title={`Go to ${prevComponent}`}
        class="p-1 hover:bg-canvas rounded-md cursor-pointer transition-colors"
      >
        <ArrowLeftIcon />
      </Link>
    ) : (
      <div class="p-1 opacity-20 cursor-not-allowed">
        <ArrowLeftIcon />
      </div>
    )}
    {nextComponent ? (
      <Link
        href={`/components/${nextComponent}`}
        title={`Go to ${nextComponent}`}
        class="p-1 hover:bg-canvas rounded-md cursor-pointer transition-colors"
      >
        <ArrowRightIcon />
      </Link>
    ) : (
      <div class="p-1 opacity-20 cursor-not-allowed">
        <ArrowRightIcon />
      </div>
    )}
  </div>
);

export const ComponentCard = component$(
  ({
    item,
    state,
    componentParam,
  }: {
    item: BoxedComp;
    state: CardState;
    componentParam: string;
  }) => {
    const itemTitle = item.title;
    const itemCode = item.code;
    const isCodeOpen = state.activeTabs[itemTitle] === 'code';
    const Display = item.display;
    const reloadKey = state.reloadKeys[itemTitle] || 0;

    const copiedHtml = useSignal(false);
    const containerId = `variant-${itemTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

    // Dynamically imports the variant graph from components/[comp].ts & copies to clipboard
    const handleCopyVariantHtml = $(async () => {
      try {
        // 1. Load the pre-compiled graph for this component module
        console.log(componentParam);
        const module = await import(`../../../generated/components/${componentParam}`);
        if (!module || !module.variants) return;

        // Locate specific variant graph using the formatted slug
        const slug = itemTitle
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        const variantGraph = module.variants[slug] || module.graph;
        if (!variantGraph) return;

        // 2. Fetch the shared central design system root style variables
        const { rootStyling } = await import(`../../../generated/root-styling`);

        // 3. Assemble structural graph wrapper with global custom properties
        const fullGraph = {
          root: variantGraph,
          variables: rootStyling,
        };

        updateRootVariables(fullGraph);

        // 4. Reconstruct raw HTML
        const rawHtml = generateRawHtml(fullGraph);

        // 5. Copy raw HTML payload directly to clipboard
        const success = await copyHtmlToClipboard(rawHtml);

        if (success) {
          copiedHtml.value = true;
          setTimeout(() => {
            copiedHtml.value = false;
          }, 2000);
        }
      } catch (err) {
        console.error('Failed to copy variant html from pre-compiled graph:', err);
      }
    });

    return (
      <div class="flex flex-col gap-3 font-sans">
        <div class="px-6 text-ink font-medium leading-relaxed">{itemTitle}</div>
        <div class="border border-separator rounded-xl flex flex-col overflow-clip w-full relative">
          <div class="relative flex flex-col items-center justify-center min-h-36 h-[225px] pb-12 pt-16 px-8">
            {/* Target Wrapper element evaluated dynamically */}
            <div id={containerId} class="flex flex-wrap gap-2.5 justify-center items-center w-full">
              <Display key={reloadKey} />
            </div>

            {/* Floating Action Bar */}
            <div class="absolute top-3 left-3 rounded-full py-1 px-3 flex gap-1.5 items-center select-none z-10 bg-canvas/80 backdrop-blur-sm border border-separator/50 shadow-sm">
              <button
                type="button"
                onClick$={$(() => {
                  navigator.clipboard.writeText(itemCode);
                })}
                title="Copy snippet"
                class="flex items-center justify-center w-6 h-6 rounded-full hover:bg-canvas-hover active:scale-95 transition-all text-ink cursor-pointer"
              >
                <Icon i="clipboard" />
              </button>
              <button
                type="button"
                onClick$={handleCopyVariantHtml}
                title="Copy computed HTML"
                class={`flex items-center justify-center w-6 h-6 rounded-full hover:bg-canvas-hover active:scale-95 transition-all cursor-pointer ${copiedHtml.value ? 'text-green-600 bg-green-50' : 'text-ink'
                  }`}
              >
                {copiedHtml.value ? <CheckIcon /> : <Icon i="clipboard" />}
              </button>
              <button
                type="button"
                onClick$={$(() => {
                  state.reloadKeys[itemTitle] = (state.reloadKeys[itemTitle] || 0) + 1;
                })}
                title="Reload preview"
                class="flex items-center justify-center w-6 h-6 rounded-full hover:bg-canvas-hover active:scale-95 transition-all text-ink cursor-pointer"
              >
                <ReloadIcon />
              </button>
              <button
                type="button"
                onClick$={$(() => {
                  state.activeTabs[itemTitle] = isCodeOpen ? 'preview' : 'code';
                })}
                title="Toggle code"
                class={`flex items-center justify-center w-6 h-6 rounded-full transition-all text-ink cursor-pointer ${isCodeOpen ? 'bg-canvas-hover' : 'hover:bg-canvas'
                  }`}
              >
                <CodeIcon />
              </button>
            </div>
          </div>

          {isCodeOpen && (
            <div class="border-t border-separator p-4 font-mono text-sm overflow-x-auto text-ink">
              <pre class="m-0 font-mono leading-relaxed whitespace-pre">{itemCode}</pre>
            </div>
          )}
        </div>
      </div>
    );
  },
);

// --- Icons ---

const ChevronRightIcon = () => (
  <svg
    class="flex-shrink-0 text-ink-secondary"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
  >
    <path
      d="M5.25 10.5l3.5-3.5-3.5-3.5"
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    class="flex-shrink-0"
  >
    <path
      d="M12 18.999l-6.999-6.999 6.999-7"
      fill="none"
      stroke="#525252"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19 12H5.001"
      fill="none"
      stroke="#525252"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    class="flex-shrink-0"
  >
    <path
      d="M5 12h14"
      fill="none"
      stroke="#525252"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12 5l7 7-7 6.999"
      fill="none"
      stroke="#525252"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const CopyIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    class="flex-shrink-0"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M6 2.5V1H5.8C4.12 1 3.28 1 2.638 1.327C2.074 1.615 1.615 2.074 1.327 2.638C1 3.28 1 4.12 1 5.8V6H2.5V5.8C2.5 4.935 2.501 4.377 2.536 3.952C2.569 3.544 2.626 3.393 2.663 3.319C2.807 3.037 3.037 2.807 3.319 2.663C3.393 2.626 3.544 2.569 3.952 2.536C4.377 2.501 4.935 2.5 5.8 2.5H6ZM13.5 6V5.8C13.5 4.935 13.499 4.377 13.464 3.952C13.431 3.544 13.374 3.393 13.336 3.319C13.193 3.037 12.963 2.807 12.681 2.663C12.607 2.626 12.456 2.569 12.048 2.536C11.623 2.501 11.065 2.5 10.2 2.5H10V1H10.2C11.88 1 12.72 1 13.362 1.327C13.927 1.615 14.385 2.074 14.673 2.638C15 3.28 15 4.12 15 5.8V6H13.5ZM10 13.5H10.2C11.065 13.5 11.623 13.499 12.048 13.464C12.456 13.431 12.607 13.374 12.681 13.336C12.963 13.193 13.193 12.963 13.336 12.681C13.374 12.607 13.431 12.456 13.464 12.048C13.499 11.623 13.5 11.065 13.5 10.2V10H15V10.2C15 11.88 15 12.72 14.673 13.362C14.385 13.927 13.927 14.385 13.362 14.673C12.72 15 11.88 15 10.2 15H10V13.5ZM2.5 10V10.2C2.5 11.065 2.501 11.623 2.536 12.048C2.569 12.456 2.626 12.607 2.663 12.681C2.807 12.963 3.037 13.193 3.319 13.336C3.393 13.375 3.544 13.431 3.952 13.464C4.377 13.499 4.935 13.5 5.8 13.5H6V15H5.8C4.12 15 3.28 15 2.638 14.673C2.073 14.385 1.615 13.927 1.327 13.362 1 12.72 1 11.88 1 10.2V10H2.5Z"
      fill="currentColor"
    />
  </svg>
);

const PaperIcon = (props: BaseIconProps) => (
  <SvgIcon viewBox="-10 -5 50 50" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M39 24H24V6H6V24H24V39H0V6H6V0H39V24Z" fill="currentColor" />
  </SvgIcon>
);

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="flex-shrink-0"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ReloadIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    class="flex-shrink-0"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 2.5C4.962 2.5 2.5 4.962 2.5 8C2.5 11.038 4.962 13.5 8 13.5C10.869 13.5 13.225 11.303 13.478 8.5H14.982C14.726 12.133 11.698 15 8 15C4.134 15 1 11.866 1 8C1 4.134 4.134 1 8 1C10.231 1 12.218 2.044 13.5 3.669V1H15V5.75V6.5H14.25H9.5V5H12.611C11.629 3.495 9.931 2.5 8 2.5Z"
      fill="currentColor"
    />
  </svg>
);

const CodeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    class="flex-shrink-0"
  >
    <path d="M4 4.5L1 8L4 11.5" fill="none" stroke="currentColor" stroke-width="1.5" />
    <path d="M12 4.5L15 8L12 11.5" fill="none" stroke="currentColor" stroke-width="1.5" />
    <path d="M7.448 15.006H5.922L8.547 1.006H10.074L7.448 15.006Z" fill="currentColor" />
  </svg>
);

export default component$(() => {
  const loc = useLocation();
  const componentParam = loc.params.component;

  const state = useStore<CardState>({
    activeTabs: {},
    reloadKeys: {},
  });

  const copiedPaper = useSignal(false);
  const section = SECTIONS_MAP[componentParam as keyof typeof SECTIONS_MAP];

  // Dynamically imports the pre-generated pages graph & shared styles (skipping live DOM traversal)
  const handleCopyRawHtml = $(async () => {
    try {
      // 1. Dynamic import of the pre-generated pages graph
      const module = await import(`../../../generated/pages/${componentParam}`);
      if (!module || !module.graph) {
        alert('Failed to locate page graph.');
        return;
      }

      // 2. Fetch the shared global design system root style variables
      const { rootStyling } = await import(`../../../generated/root-styling`);

      // 3. Assemble structural graph wrapper with global custom properties
      const fullGraph = {
        root: module.graph,
        variables: rootStyling,
      };

      //updateRootVariables(fullGraph);

      // 4. Generate standard HTML layout
      const rawHtml = generateRawHtml(fullGraph);

      // 5. Copy raw HTML payload directly to clipboard
      const success = await copyHtmlToClipboard(rawHtml);

      if (success) {
        copiedPaper.value = true;
        setTimeout(() => {
          copiedPaper.value = false;
        }, 2000);
      } else {
        alert('Failed to copy to clipboard.');
      }
    } catch (err) {
      console.error('Failed to dynamically load page graph module:', err);
      alert('Failed to copy raw HTML.');
    }
  });

  if (!section) {
    return <ComponentNotFound />;
  }

  const SECTIONS_KEYS = Object.keys(SECTIONS_MAP);
  const currentIndex = SECTIONS_KEYS.indexOf(componentParam);
  const prevComponent = currentIndex > 0 ? SECTIONS_KEYS[currentIndex - 1] : null;
  const nextComponent =
    currentIndex < SECTIONS_KEYS.length - 1 ? SECTIONS_KEYS[currentIndex + 1] : null;

  const renderAside = (Aside: (() => JSXOutput) | Component) => {
    return <Aside />;
  };

  return (
    <div class="w-full flex flex-col items-center pt-20 pb-24 min-h-screen">
      <div id="component-page" class="w-full max-w-screen-xl flex flex-col gap-8">
        {/* Title, Breadcrumb & Links */}
        <div class="flex flex-col px-6">
          <Breadcrumbs componentParam={componentParam} />

          <div class="flex items-center justify-between gap-6 w-full">
            <div class="flex flex-col font-sans">
              <h1 class="text-ink text-3xl tracking-[-0.01em] leading-snug">{section.title}</h1>
              <p class="text-ink-secondary text-lg">{section.description}</p>
            </div>
            <PaginationControls prevComponent={prevComponent} nextComponent={nextComponent} />
          </div>

          <div class="flex items-center gap-3.5 pt-3.5">
            {section.link && (
              <a
                href={section.link}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-0.5 text-ink hover:text-ink-secondary font-sans text-sm font-medium cursor-pointer transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 12 12"
                  class="flex-shrink-0"
                >
                  <path
                    d="M6 1A5 5 0 0 0 1 6c0 2.21 1.435 4.085 3.419 4.749 0.25 0.04 0.33-0.115 0.331-0.249v-0.845c-1.385 0.301-1.68-0.67-1.68-0.67-0.23-0.579-0.555-0.735-0.555-0.735-0.455-0.31 0.035-0.301 0.035-0.301 0.501 0.035 0.765 0.515 0.765 0.516 0.435 0.76 1.17 0.535 1.455 0.415 0.045-0.325 0.175-0.545 0.315-0.67-1.11-0.125-2.275-0.555-2.275-2.461 0-0.555 0.19-1 0.515-1.354-0.05-0.125-0.225-0.645 0.05-1.32 0 0 0.419-0.135 1.375 0.51 0.395-0.11 0.825-0.165 1.25-0.165s0.855 0.055 1.25 0.165c0.955-0.645 1.375-0.51 1.375-0.51 0.275 0.675 0.101 1.195 0.05 1.32 0.325 0.355 0.515 0.8 0.515 1.354 0 1.91-1.17 2.33-2.285 2.455 0.181 0.155 0.345 0.461 0.345 0.926V10.5c0 0.135 0.08 0.295 0.335 0.249C9.57 10.08 11 8.21 11 6A5 5 0 0 0 6 1"
                    fill="currentColor"
                  />
                </svg>
                <span>View source</span>
              </a>
            )}
            <button
              type="button"
              onClick$={handleCopyRawHtml}
              class="flex items-center gap-0.5 text-ink hover:text-ink-secondary font-sans text-sm font-medium cursor-pointer transition-colors"
            >
              <Icon i="clipboard" />
              <span>{copiedPaper.value ? 'Copied to clipboard!' : 'Copy raw html'}</span>
            </button>

            <button
              type="button"
              onClick$={handleCopyRawHtml}
              class="flex items-center gap-1 text-ink hover:text-ink-secondary font-sans text-sm font-medium cursor-pointer transition-colors"
            >
              <PaperIcon />
              <span>{copiedPaper.value ? 'Copied to clipboard!' : 'Copy for paper'}</span>
            </button>
          </div>
        </div>

        {/* Basic Package Usage */}
        <div class="rounded-xl shadow-[inset_0_0_0_1px_rgba(5,5,5,0.04)] py-4 px-6 flex flex-col gap-1 justify-center overflow-clip self-stretch">
          <pre class="w-full text-ink font-mono text-sm leading-tight whitespace-pre-wrap m-0">
            {`import { ${section.title.replace(/\s+/g, '')} } from '@onwo/ui';\n\n<${section.title.replace(/\s+/g, '')} />`}
          </pre>
        </div>

        {/* Fluid Inspiration Line */}
        <div class="flex flex-wrap items-center gap-1 px-6 h-fit font-sans text-ink">
          {section.aside ? (
            renderAside(section.aside)
          ) : (
            <>
              <span>A beautiful {section.title.toLowerCase()} inspired by</span>
              <a
                href="https://fluidsystem.design"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
              >
                <span class="underline decoration-1 underline-offset-2">fluidsystem</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  class="flex-shrink-0 -ml-0.5"
                >
                  <path
                    d="M3.5 3.499h5v5.001"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.5 8.5L8.5 3.499"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <span>look and feel.</span>
            </>
          )}
        </div>

        {/* Displays Wrapper */}
        <div class="flex flex-col gap-12 py-4">
          <ComponentCard item={section.default} state={state} componentParam={componentParam} />
          {section.others.map((item) => (
            <ComponentCard
              key={item.title}
              item={item}
              state={state}
              componentParam={componentParam}
            />
          ))}
        </div>
      </div>
    </div>
  );
});
