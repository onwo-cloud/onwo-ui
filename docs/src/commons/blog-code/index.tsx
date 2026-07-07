import { $, Slot, component$, useSignal, useVisibleTask$ } from '@qwik.dev/core';
import { BlogCodeHeader } from '../blog-code-header';
import type { CodeViewType } from '../blog-code-header';

import './styles.css';

type BlogCodeProps = {
  language: string;
  disableExpand?: boolean;
};

export const BlogCode = component$((props: BlogCodeProps) => {
  const viewType = useSignal<CodeViewType>('default');

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => viewType.value);
    if (viewType.value !== 'fullscreen') return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <div
      class={[
        'lg:transition-[width]',
        viewType.value !== 'fullscreen' &&
        'w-[940px]! mt-8 shadow-sm blog-code-rounding bg-[#191D24]',
        viewType.value === 'expanded' && 'w-[1280px]! shadow-xl',
        viewType.value === 'fullscreen' && 'w-screen! fixed top-0 left-0 w-[100%] h-screen z-50',
      ]}
      style={{
        maxWidth: '100% !important',
      }}
    >
      <BlogCodeHeader
        language={props.language}
        view={viewType.value}
        onViewChange$={$((newViewType: CodeViewType): void => {
          viewType.value = newViewType;
        })}
        disableExpand={props.disableExpand}
      />
      <div class="blog-code-container h-full">
        <Slot />
      </div>
    </div>
  );
});
