import { component$, Slot } from '@qwik.dev/core';
import { buildHead } from '~/utils/build-head';

import './typography.css';
import './prism-theme-dark.css';
import type { DocumentHead} from '@qwik.dev/router';
import { useDocumentHead } from '@qwik.dev/router';
import { Sidebar } from '~/components/sidebar';
import { Topbar } from '~/components/topbar';

export default component$(() => {
  const {
    frontmatter: { data },
  } = useDocumentHead();

  return (
    <div class="flex h-screen overflow-hidden">
      <Sidebar class="fixed" />
      <div class="flex flex-col w-full h-full ml-56 overflow-y-auto">
        <Topbar />

        {/* Main Layout Container */}
        <div class="w-full flex flex-col pt-[80px] pb-[96px] px-6 max-w-[980px] mx-64 gap-[32px]">

          {/* Header block with metadata decorations */}
          <div class="flex flex-col gap-[8px] font-sans">

            {/* Navigation & Category Tag Row */}
            <div class="flex items-center gap-[8px] pb-[4px] text-[13px] leading-[1]">
              {/* Highlight Tag */}
              <span class="px-2 py-0.5 rounded-md bg-canvas-secondary border border-separator text-ink text-[11px] font-medium tracking-wide">
                {data.tag || 'Troubleshooting'}
              </span>

              {/* Version Identifier */}
              {data.version && (
                <>
                  <span class="text-ink-secondary opacity-30 select-none">•</span>
                  <span class="text-ink-secondary text-[13px] font-mono">{data.version}</span>
                </>
              )}

              {/* Read Time Info */}
              {data.readTime && (
                <>
                  <span class="text-ink-secondary opacity-30 select-none">•</span>
                  <span class="text-ink-secondary text-[13px]">{data.readTime}</span>
                </>
              )}
            </div>

            {/* Main Title and Description */}
            <h1 class="text-ink text-balance text-4xl tracking-[-0.01em] leading-[1.5]">
              {data.title}
            </h1>
            {data.description && (
              <p class="leading-[1.8] text-lg text-ink-secondary mt-4">
                {data.description}
              </p>
            )}
          </div>

          {/* Rendered Markdown Area */}
          <section class="typography w-full pt-12">
            <Slot />
          </section>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = ({
  head: {
    frontmatter: { data },
  },
}: any) =>
  buildHead({
    title: data.title,
    description: data.description,
    shareImage: data.shareImageUrl,
  });
