import { $, component$, useOnDocument, useStore, useSignal, useVisibleTask$ } from '@qwik.dev/core';
import type { DocumentHead } from '@qwik.dev/router';
import { SECTIONS_MAP } from '~/kit';
import { buildHead } from '~/utils/build-head';

// Central Design System styling variables
import { rootStyling } from '~/generated/root-styling';

const componentKeys: string[] = Object.keys(SECTIONS_MAP);

// ---------------------------------------------------------------------------
// HTML Reconstruction Helpers
// ---------------------------------------------------------------------------
function escapeHtml(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

function escapeHtmlAttrs(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function stylesToCssString(styles: Record<string, string>): string {
  return Object.entries(styles).map(([k, v]) => `${k}: ${v};`).join(' ');
}

function convertGraphToHtml(node: any): string {
  if (!node) return '';
  if (node.type === 'text') {
    return escapeHtml(node.text || '');
  }

  const tagName = node.tagName || 'div';
  const childHtml = node.children
    ? node.children.map((child: any) => convertGraphToHtml(child)).join('')
    : '';

  const finalAttrs: string[] = [];

  if (node.attributes) {
    for (const [key, value] of Object.entries(node.attributes)) {
      finalAttrs.push(`${key}="${escapeHtmlAttrs(value as string)}"`);
    }
  }

  if (node.styles && Object.keys(node.styles).length > 0) {
    const inlineStyle = stylesToCssString(node.styles);
    finalAttrs.push(`style="${escapeHtmlAttrs(inlineStyle)}"`);
  }

  const attrsStr = finalAttrs.length > 0 ? ' ' + finalAttrs.join(' ') : '';
  return `<${tagName}${attrsStr}>${childHtml}</${tagName}>`;
}

export default component$(() => {
  // Stores holding compiled HTML representation of components & full-scale document pages
  const renderedComponents = useStore<Record<string, Record<string, string>>>({});
  const renderedPages = useStore<Record<string, string>>({});

  // View state signals
  const filterQuery = useSignal('');
  const viewMode = useSignal<'all' | 'components' | 'pages'>('all');

  // Load centralized styling custom variables client-side
  useOnDocument(
    'DOMContentLoaded',
    $(() => {
      const rootStyle = document.documentElement.style;
      for (const [name, val] of Object.entries(rootStyling)) {
        rootStyle.setProperty(name, val);
      }
    })
  );

  // Dynamically load all component modules and page graph structures
  useVisibleTask$(async () => {
    for (const key of componentKeys) {
      try {
        // 1. Fetch pre-generated variant graphs
        const compModule = await import(`../../generated/components/${key}`);
        if (compModule && compModule.variants) {
          const htmlVariants: Record<string, string> = {};
          for (const [vKey, vGraph] of Object.entries(compModule.variants)) {
            htmlVariants[vKey] = convertGraphToHtml(vGraph);
          }
          renderedComponents[key] = htmlVariants;
        }

        // 2. Fetch pre-generated full-scale page graph
        const pageModule = await import(`../../generated/pages/${key}`);
        if (pageModule && pageModule.graph) {
          renderedPages[key] = convertGraphToHtml(pageModule.graph);
        }
      } catch (err) {
        console.error(`Failed to dynamically load compiled files for: ${key}`, err);
      }
    }
  });

  // Calculate filtered components list
  const filteredKeys = componentKeys.filter((key) =>
    key.toLowerCase().includes(filterQuery.value.toLowerCase())
  );

  return (
    <div class="bg-[#FCFCFC] min-h-screen w-full px-[48px] py-[60px] flex flex-col gap-[48px] font-sans antialiased overflow-y-auto">
      
      {/* --- FILTER & TOGGLE CONTROL BAR --- */}
      <div class="border-b border-[#0000000D] border-solid pb-[32px] flex flex-wrap items-center justify-between gap-[24px]">
        
        {/* Search input field matching design system parameters */}
        <div class="relative w-full max-w-[320px]">
          <input
            type="text"
            placeholder="FILTER COMPONENTS..."
            bind:value={filterQuery}
            class="w-full bg-[#FFFFFF] border border-[#0000000D] border-solid px-[16px] py-[10px] text-[11px] tracking-[var(--tracking-eyebrow)] text-slate-800 placeholder-slate-400 focus:outline-none focus:border-slate-300 rounded-sm uppercase font-sans"
          />
          {filterQuery.value && (
            <button
              type="button"
              onClick$={$(() => { filterQuery.value = ''; })}
              class="absolute right-[12px] top-[50%] -translate-y-[50%] text-slate-400 hover:text-slate-600 text-xs font-sans uppercase tracking-wider"
            >
              Clear
            </button>
          )}
        </div>

        {/* View toggle segments */}
        <div class="flex bg-slate-100/80 p-[4px] rounded-sm border border-[#0000000D] border-solid select-none">
          <button
            type="button"
            onClick$={$(() => { viewMode.value = 'all'; })}
            class={`px-[16px] py-[8px] text-[9px] font-bold uppercase tracking-[var(--tracking-eyebrow)] transition-all rounded-sm ${
              viewMode.value === 'all'
                ? 'bg-[#FFFFFF] text-slate-800 shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Show All
          </button>
          <button
            type="button"
            onClick$={$(() => { viewMode.value = 'components'; })}
            class={`px-[16px] py-[8px] text-[9px] font-bold uppercase tracking-[var(--tracking-eyebrow)] transition-all rounded-sm ${
              viewMode.value === 'components'
                ? 'bg-[#FFFFFF] text-slate-800 shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Components Only
          </button>
          <button
            type="button"
            onClick$={$(() => { viewMode.value = 'pages'; })}
            class={`px-[16px] py-[8px] text-[9px] font-bold uppercase tracking-[var(--tracking-eyebrow)] transition-all rounded-sm ${
              viewMode.value === 'pages'
                ? 'bg-[#FFFFFF] text-slate-800 shadow-[0_1px_2px_rgba(0,0,0,0.05)]'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Pages Only
          </button>
        </div>

      </div>

      {/* --- LIVE WORKSPACE GRID --- */}
      {filteredKeys.length === 0 ? (
        <div class="text-[11px] tracking-[var(--tracking-eyebrow)] uppercase text-slate-400 font-sans py-12">
          No matching components found.
        </div>
      ) : (
        filteredKeys.map((key) => {
          const variants = renderedComponents[key];
          const pageHtml = renderedPages[key];
          if (!variants || Object.keys(variants).length === 0) return null;

          return (
            <div key={key} class="flex flex-col gap-[48px] pb-[64px] border-b border-[#0000000D] border-solid last:border-0">
              
              {/* --- 1. COMPONENTS SECTION --- */}
              {(viewMode.value === 'all' || viewMode.value === 'components') && (
                <div class="flex flex-col gap-[16px]">
                  {/* Component Section Header Label */}
                  <div class="box-border text-[var(--color-foreground)] font-sans text-[var(--text-eyebrow)] font-bold tracking-[var(--tracking-eyebrow)] leading-[14px] uppercase select-none">
                    components/{key}
                  </div>

                  {/* Grid of variant cards minmaxed between 380px and 480px, using a 3:2 aspect ratio */}
                  <div class="grid grid-cols-[repeat(auto-fill,minmax(380px,480px))] gap-[24px] w-full">
                    {Object.entries(variants).map(([vKey, htmlMarkup]) => (
                      <div
                        key={vKey}
                        class="relative bg-[#FFFFFF] border border-[#0000000D] border-solid box-border aspect-[3/2] overflow-hidden flex items-center justify-center p-[42px] pt-[48px] rounded-sm"
                      >
                        {/* Variant watermark label matching custom typography */}
                        <div class="absolute top-[12px] left-[16px] text-[#0A0A0A66] font-sans text-[9px] tracking-[var(--tracking-eyebrow)] leading-[12px] uppercase select-none pointer-events-none">
                          variant/{vKey}
                        </div>

                        {/* Component HTML element */}
                        <div class="relative flex w-full h-full items-center justify-center" dangerouslySetInnerHTML={htmlMarkup} />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* --- 2. PAGES SECTION (FULL SCALE) --- */}
              {(viewMode.value === 'all' || viewMode.value === 'pages') && (
                <div class="flex flex-col gap-[16px]">
                  {/* Page Section Header Label */}
                  <div class="box-border text-[var(--color-foreground)] font-sans text-[var(--text-eyebrow)] font-bold tracking-[var(--tracking-eyebrow)] leading-[14px] uppercase select-none">
                    Pages/{key}
                  </div>

                  {/* High Fidelity Full-Scale Page Canvas (styled to match your specifications) */}
                  {pageHtml ? (
                    <div 
                      class="relative bg-[#FFFFFF] border border-[#0000000D] border-solid box-border w-full overflow-hidden shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
                      dangerouslySetInnerHTML={pageHtml}
                    />
                  ) : (
                    <div class="text-[11px] tracking-[var(--tracking-eyebrow)] uppercase text-slate-400 font-sans py-4 select-none">
                      Loading page layout graph...
                    </div>
                  )}
                </div>
              )}

            </div>
          );
        })
      )}
    </div>
  );
});

export const head: DocumentHead = buildHead({
  title: 'Onwo-ui - components board',
  description: 'Design system board featuring integrated variant filtering and layout toggles.',
  shareImage: '/share.png',
});
