import { component$, useSignal, useTask$, useContext } from '@qwik.dev/core';
import { isBrowser } from '@qwik.dev/core/build';
import { Link } from '@qwik.dev/router';
import { CollapsibleTrigger } from '~primitives/@kit/collapsible';

import { Icon } from '~/utils/icon';

import { ChangelogContext } from '.';

export const ChangelogTrigger = component$(() => {
  const ctx = useContext(ChangelogContext);
  const latest = ctx.latestItem;

  const hasInteracted = useSignal(false);

  useTask$(({ track }) => {
    track(() => ctx.isExpanded.value);
    if (isBrowser) {
      hasInteracted.value = true;
    }
  });

  const animationClass = hasInteracted.value ? 'animate-in-place' : '';

  return (
    <span
      class={[
        'w-full relative flex-shrink-0 h-[44px] z-30',
        !ctx.isExpanded.value &&
        'flex items-center justify-between bg-transparent rounded-[19.5px]',
      ]}
    >
      <style>{`
        @keyframes blurIn {
          from { opacity: 0; filter: blur(4px); }
          to { opacity: 1; filter: blur(0px); }
        }
        .animate-in-place {
          animation: blurIn var(--duration-slower) var(--ease-spring-slow) forwards;
        }
      `}</style>

      <Link
        href={latest.href}
        class={[
          'group/item flex-1 items-center justify-start pl-6 pr-4 h-full outline-none rounded-l-[19.5px] cursor-pointer focus-visible:ring-1 focus-visible:ring-separator focus-visible:bg-canvas-hover transition-colors overflow-hidden leading-[1] gap-2',
          'spring-slower-exit',
          `group-hover/item:spring-slower`,
          !ctx.isExpanded.value ? 'flex' : 'hidden',
          !ctx.isExpanded.value && animationClass,
        ]}
      >
        <p
          class={[
            'relative text-ink-tertiary leading-[1] z-10 group-hover/item:text-ink group-focus-visible/item:text-ink transition-colors text-sm',
            'spring-slower-exit',
            `group-hover/item:spring-slower`,
          ]}
        >
          {latest.version}
        </p>

        <p
          class={[
            'flex items-center gap-2 font-fvs text-sm tracking-wide group-hover/item:fvs-medium group-focus-visible/item:fvs-medium group-hover/item:underline font-synthesis-none transition-all',
            'spring-slower-exit',
            `group-hover/item:spring-slower`,
          ]}
        >
          {latest.title}
          <Icon
            i="arrow-up-right"
            class={[
              'text-ink-tertiary opacity-0 scale-90 -translate-x-1 translate-y-1 group-hover/item:opacity-100 group-hover/item:scale-100 group-hover/item:translate-x-0 group-hover/item:translate-y-0 transition-all shrink-0',
              'spring-slower-exit',
              `group-hover/item:spring-slower`,
            ]}
            size="sm"
          />
        </p>

        {latest.newBadge && (
          <span class="px-2 rounded-md ml-auto py-1 bg-canvas-contrast text-macro text-ink-contrast tracking-tight font-semibold">
            NEW
          </span>
        )}
      </Link>

      {/* Vertical Separator */}
      <span
        class={[
          'w-[1px] h-[20px] bg-separator-box shrink-0',
          !ctx.isExpanded.value ? 'block' : 'hidden',
        ]}
      />

      <CollapsibleTrigger
        class={[
          'outline-none cursor-pointer focus-visible:ring-1 focus-visible:ring-separator focus-visible:bg-canvas-hover',
          ctx.isExpanded.value
            ? 'w-full h-full flex items-center justify-between px-6 bg-transparent hover:bg-canvas-hover rounded-[19.5px]'
            : 'group/trigger flex items-center gap-1 pr-6 pl-4 h-full rounded-r-[19.5px] text-ink-tertiary hover:text-ink hover:underline',
        ]}
      >
        {/* Expanded Content View (Hidden when collapsed) */}
        <span
          class={[
            'items-center justify-between w-full h-full',
            ctx.isExpanded.value ? 'flex' : 'hidden',
          ]}
        >
          <span class={['flex items-center gap-2', ctx.isExpanded.value && animationClass]}>
            <span class="text-sm text-ink-secondary">Changelog</span>
          </span>
          <Icon
            i="chevron-down"
            class={[
              'text-ink-tertiary transition-transform rotate-180',
              'spring-slower-exit',
              'pointer-events-none',
              `group-hover/trigger:spring-slower`,
            ]}
            size="sm"
          />
        </span>

        {/* Collapsed Content View (Hidden when expanded) */}
        <span class={['items-center gap-1 h-full', !ctx.isExpanded.value ? 'flex' : 'hidden']}>
          <span class="text-xs font-medium">View more</span>
          <Icon
            i="chevron-down"
            class={[
              'transition-transform group-hover/trigger:translate-y-[2px]',
              'spring-slower-exit',
              'pointer-events-none',
              `group-hover/trigger:spring-slower`,
            ]}
            size="sm"
          />
        </span>
      </CollapsibleTrigger>
    </span>
  );
});
