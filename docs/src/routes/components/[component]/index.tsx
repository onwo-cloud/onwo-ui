import { component$, useStore, $ } from '@builder.io/qwik';
import { Link, StaticGenerateHandler, useLocation } from '@builder.io/qwik-city';

import { SECTIONS_MAP, type BoxedComp } from '../../../kit';

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const componentKeys = Object.keys(SECTIONS_MAP);

  return {
    params: componentKeys.map((component) => ({
      component,
    })),
  };
};

export default component$(() => {
  const loc = useLocation();
  const componentParam = loc.params.component;

  const state = useStore({
    activeTabs: {} as Record<string, 'preview' | 'code'>,
    copiedFigma: false,
    reloadKeys: {} as Record<string, number>,
  });

  const section = SECTIONS_MAP[componentParam as keyof typeof SECTIONS_MAP];

  if (!section) {
    return (
      <div class="max-w-[896px] w-full mx-auto px-6 py-24 text-center font-sans">
        <h1 class="text-3xl font-medium text-[#050505]">Component Not Found</h1>
        <p class="text-[#525252] mt-2">The component page you are looking for does not exist.</p>
      </div>
    );
  }

  // Find previous and next components to enable visual back/forward navigation arrows
  const SECTIONS_KEYS = Object.keys(SECTIONS_MAP);
  const currentIndex = SECTIONS_KEYS.indexOf(componentParam);
  const prevComponent = currentIndex > 0 ? SECTIONS_KEYS[currentIndex - 1] : null;
  const nextComponent =
    currentIndex < SECTIONS_KEYS.length - 1 ? SECTIONS_KEYS[currentIndex + 1] : null;

  const handleCopyFigma = $(() => {
    navigator.clipboard.writeText(`https://figma.com/file/onwo-ui-${componentParam}`);
    state.copiedFigma = true;
    setTimeout(() => {
      state.copiedFigma = false;
    }, 2000);
  });

  const renderBoxCard = (item: BoxedComp) => {
    const itemTitle = item.title;
    const itemCode = item.code;
    const isCodeOpen = state.activeTabs[itemTitle] === 'code';
    const Display = item.display;
    const reloadKey = state.reloadKeys[itemTitle] || 0;

    return (
      <div key={itemTitle} class="flex flex-col gap-[12px] font-sans">
        <div class="text-[#050505] text-[16px] font-medium leading-[150%]">{itemTitle}</div>
        <div class="bg-[#FDFDFD] border border-[#05050515] rounded-[12px] flex flex-col overflow-clip w-full relative">
          <div class="relative flex flex-col items-center justify-center min-h-[144px] h-[225px] pb-[48px] pt-[64px] px-[32px] bg-[#FDFDFD]">
            <div class="flex flex-wrap gap-2.5 justify-center items-center w-full">
              <Display key={reloadKey} />
            </div>

            {/* Mockup Floating Action bar */}
            <div class="absolute top-[11px] right-[11px] bg-[#F6F6F6] rounded-full py-1 px-1.5 flex gap-1.5 items-center select-none z-10">
              <button
                type="button"
                onClick$={$(() => {
                  navigator.clipboard.writeText(itemCode);
                })}
                title="Copy snippet"
                class="flex items-center justify-center w-6 h-6 rounded-full hover:bg-[#EAEAEA] active:scale-95 transition-all text-[#050505] cursor-pointer"
              >
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
                    fill="#050505"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick$={$(() => {
                  state.reloadKeys[itemTitle] = (state.reloadKeys[itemTitle] || 0) + 1;
                })}
                title="Reload preview"
                class="flex items-center justify-center w-6 h-6 rounded-full hover:bg-[#EAEAEA] active:scale-95 transition-all text-[#050505] cursor-pointer"
              >
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
                    fill="#050505"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick$={$(() => {
                  state.activeTabs[itemTitle] = isCodeOpen ? 'preview' : 'code';
                })}
                title="Toggle code"
                class={`flex items-center justify-center w-6 h-6 rounded-full transition-all text-[#050505] cursor-pointer ${isCodeOpen ? 'bg-[#EAEAEA]' : 'hover:bg-[#EAEAEA]'
                  }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  class="flex-shrink-0"
                >
                  <path d="M4 4.5L1 8L4 11.5" fill="none" stroke="#050505" stroke-width="1.5" />
                  <path d="M12 4.5L15 8L12 11.5" fill="none" stroke="#050505" stroke-width="1.5" />
                  <path d="M7.448 15.006H5.922L8.547 1.006H10.074L7.448 15.006Z" fill="#050505" />
                </svg>
              </button>
            </div>
          </div>

          {isCodeOpen && (
            <div class="border-t border-[#05050515] bg-[#F8F8F9] p-4 font-mono text-[14px] overflow-x-auto text-[#050505]">
              <pre class="m-0 font-mono leading-[150%] whitespace-pre">{itemCode}</pre>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div class="w-full flex flex-col items-center bg-[#FDFDFD] pt-[80px] pb-[96px] min-h-screen">
      <div class="w-full max-w-[896px] flex flex-col gap-[32px]">
        {/* Title, Breadcrumb & Links block wrapper (with 12px horizontal padding) */}
        <div class="flex flex-col px-[12px]">
          {/* Breadcrumb Navigation */}
          <div class="flex items-center gap-[4px] pb-[36px] w-fit font-sans text-[14px] leading-[18px]">
            <Link href="/" class="text-[#525252] hover:text-[#000000] cursor-pointer ">
              home
            </Link>
            <svg
              class="flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <path
                d="M5.25 10.5l3.5-3.5-3.5-3.5"
                fill="none"
                stroke="#525252"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <Link href="/components" class="text-[#525252] hover:text-[#000000] cursor-pointer">
              components
            </Link>
            <svg
              class="flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
            >
              <path
                d="M5.25 10.5l3.5-3.5-3.5-3.5"
                fill="none"
                stroke="#525252"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="text-[#000000] capitalize">{componentParam.replace(/-/g, ' ')}</span>
          </div>

          {/* Title, Description & Page Navigation Arrows */}
          <div class="flex items-center justify-between gap-6 w-full">
            <div class="flex flex-col gap-[4px] font-sans">
              <h1 class="text-[#050505] text-[28px] font-medium tracking-[-0.01em] leading-[120%]">
                {section.title}
              </h1>
              <p class="text-[#525252] text-[16px] leading-[150%]">{section.description}</p>
            </div>
            <div class="flex items-center gap-[10px] overflow-clip">
              {prevComponent ? (
                <Link
                  href={`/components/${prevComponent}`}
                  title={`Go to ${prevComponent}`}
                  class="p-1 hover:bg-[#F3F3F3] rounded-md cursor-pointer transition-colors"
                >
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
                </Link>
              ) : (
                <div class="p-1 opacity-20 cursor-not-allowed">
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
                </div>
              )}
              {nextComponent ? (
                <Link
                  href={`/components/${nextComponent}`}
                  title={`Go to ${nextComponent}`}
                  class="p-1 hover:bg-[#F3F3F3] rounded-md cursor-pointer transition-colors"
                >
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
                </Link>
              ) : (
                <div class="p-1 opacity-20 cursor-not-allowed">
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
                </div>
              )}
            </div>
          </div>

          {/* View source & Copy for Figma Links Row */}
          <div class="flex items-center gap-[14px] pt-[14px]">
            {section.link && (
              <a
                href={section.link}
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-[2px] text-[#050505] hover:text-[#525252] font-sans text-[14px] font-medium cursor-pointer transition-colors"
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
                    fill="#000000"
                  />
                </svg>
                <span>View source</span>
              </a>
            )}
            <button
              type="button"
              onClick$={handleCopyFigma}
              class="flex items-center gap-[1px] text-[#050505] hover:text-[#525252] font-sans text-[14px] font-medium cursor-pointer transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 12 12"
                class="flex-shrink-0"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.333 4.708a1.292 1.292 0 1 0 0 2.583h1.292V4.708z m1.292-0.75H4.333a1.292 1.292 0 0 1 0-2.583h1.292z m0.75-2.583v2.583h1.291a1.292 1.292 0 0 0 0-2.583z m1.291 3.333a1.292 1.292 0 0 0-1.291 1.271v0.041a1.292 1.292 0 1 0 1.291-1.312m-3.333 3.333a1.292 1.292 0 1 0 1.292 1.292v-1.292z"
                  clip-rule="evenodd"
                  fill="#000000"
                />
              </svg>
              <span>{state.copiedFigma ? 'Copied to clipboard!' : 'Copy for figma'}</span>
            </button>
          </div>
        </div>

        {/* Basic Package Usage Snippet container - Stretches fully (alignSelf: 'stretch', no px-3 wrapper padding!) */}
        <div class="bg-[#F8F8F9] rounded-[12px] shadow-[inset_0_0_0_1px_rgba(5,5,5,0.04)] py-[16px] px-[12px] flex flex-col gap-[4px] justify-center overflow-clip self-stretch">
          <pre class="w-full text-[#050505] font-mono text-[14px] leading-[110%] whitespace-pre-wrap m-0">
            {`import { ${section.title.replace(/\s+/g, '')} } from '@onwo/ui';\n\n<${section.title.replace(/\s+/g, '')} />`}
          </pre>
        </div>

        {/* Fluid Inspiration Line (with 12px horizontal padding) */}
        <div class="flex flex-wrap items-center gap-[3px] px-[12px] h-fit font-sans text-[14px] text-[#050505] leading-[150%]">
          <span>A beautiful {section.title.toLowerCase()} inspired by</span>
          <a
            href="https://fluidsystem.design"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center cursor-pointer hover:opacity-80 transition-opacity"
          >
            <span class="underline decoration-1 underline-offset-[2px]">fluidsystem</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              class="flex-shrink-0 -ml-[2px]"
            >
              <path
                d="M3.5 3.499h5v5.001"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.5 8.5L8.5 3.499"
                fill="none"
                stroke="#000000"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <span>look and feel.</span>
        </div>

        {/* Displays Wrapper (with 12px horizontal padding & 16px vertical padding) */}
        <div class="flex flex-col gap-[48px] py-[16px] px-[12px]">
          {/* Default Component */}
          {renderBoxCard(section.default)}

          {/* Other Variants/Sizes */}
          {section.others.map((item) => renderBoxCard(item))}
        </div>
      </div>
    </div>
  );
});
