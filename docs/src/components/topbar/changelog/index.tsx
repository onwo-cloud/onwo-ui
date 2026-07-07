import {
  component$,
  Slot,
  useSignal,
  useVisibleTask$,
  useTask$,
  createContextId,
  useContextProvider,
  useContext,
  useId,
  type Signal,
  useOnWindow,
  $,
} from '@qwik.dev/core';
import { Link } from '@qwik.dev/router';
import { Collapsible, CollapsibleContent } from '~primitives/@kit/collapsible';

import { Icon } from '~/utils/icon';

import { List, ListItem, ListContext } from './list';
import { Scrollarea, ScrollareaCues, ScrollareaViewport, ScrollareaBar } from './scrollarea';
import { ChangelogTrigger } from './trigger';

export interface ChangelogConfig {
  itemHeight: string;
  width: string;
  expandedMaxHeight: string;
  borderRadius: string;
  safeZone: string;
  transitionDuration: number;
  staggerBase: number;
  staggerStep: number;
}

interface ChangelogContextState {
  isExpanded: Signal<boolean>;
  scrollRef: Signal<HTMLElement | undefined>;
  scrollId: string;
  showScrollarea: Signal<boolean>;
  config: ChangelogConfig;
  latestItem: Omit<ChangelogItemProps, 'index'>;
}

export const ChangelogContext = createContextId<ChangelogContextState>('changelog.context');

export interface ChangelogRootProps { }

export const ChangelogRoot = component$(() => {
  const ctx = useContext(ChangelogContext);

  useOnWindow(
    'scroll',
    $((e) => {
      if (ctx.isExpanded.value === false) return;
      const target = e.target as HTMLElement | null;
      if (!target || !target.closest || target.closest(`#${ctx.scrollId}`)) return;
      ctx.isExpanded.value = false;
    }),
  );

  useVisibleTask$(({ track, cleanup }) => {
    const expanded = track(() => ctx.isExpanded.value);
    if (expanded) {
      const handleWheel = (e: WheelEvent) => {
        const target = e.target as HTMLElement | null;
        if (target && target.closest(`#${ctx.scrollId}`)) {
          const el = ctx.scrollRef.value;
          if (el) {
            const isScrollingUp = e.deltaY < 0;
            const isScrollingDown = e.deltaY > 0;
            const isAtTop = el.scrollTop <= 0;
            const isAtBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight - 1;

            if ((isScrollingUp && isAtTop) || (isScrollingDown && isAtBottom)) {
              e.preventDefault();
            }
          }
        } else {
          e.preventDefault();
        }
      };

      window.addEventListener('wheel', handleWheel, { passive: false });
      cleanup(() => window.removeEventListener('wheel', handleWheel));
    }
  });

  useTask$(({ track, cleanup }) => {
    const expanded = track(() => ctx.isExpanded.value);
    if (expanded) {
      ctx.showScrollarea.value = true;
    } else {
      ctx.showScrollarea.value = false;

      const el = ctx.scrollRef.value;
      if (typeof window !== 'undefined' && el && el.scrollTop > 0) {
        const startScroll = el.scrollTop;
        const baseDuration = ctx.config.transitionDuration;
        const extraMs = Math.max(0, startScroll - 40) * 2;
        const duration = Math.min(baseDuration + extraMs, 850);
        const startTime = performance.now();
        let frameId = 0;

        const animate = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = progress * (2 - progress);
          el.scrollTop = startScroll * (1 - ease);

          if (progress < 1) {
            frameId = requestAnimationFrame(animate);
          } else {
            el.scrollTop = 0;
          }
        };
        frameId = requestAnimationFrame(animate);
        cleanup(() => {
          if (frameId) cancelAnimationFrame(frameId);
        });
      }
    }
  });

  return (
    <Collapsible
      isExpanded={ctx.isExpanded}
      class="relative z-50 flex items-start justify-center outline-none rounded-[19.5px]"
      style={{
        height: ctx.config.itemHeight,
        width: ctx.config.width,
        borderRadius: ctx.config.borderRadius,
      }}
    >
      <div class="absolute top-0 left-0 w-full z-50 pointer-events-none">
        {ctx.isExpanded.value && (
          <div
            class="absolute pointer-events-auto z-10"
            style={{
              top: `-${ctx.config.safeZone}`,
              bottom: `-${ctx.config.safeZone}`,
              left: `-${ctx.config.safeZone}`,
              right: `-${ctx.config.safeZone}`,
            }}
          />
        )}

        <div
          class={[
            'relative w-full bg-canvas-secondary ring ring-inset ring-separator-box flex flex-col leading-[1] justify-start items-stretch text-base transition-shadow pointer-events-auto z-20',
            ctx.isExpanded.value ? 'shadow-8' : 'shadow-2',
          ]}
          style={{
            borderRadius: ctx.config.borderRadius,
            transitionDuration: `${ctx.config.transitionDuration}ms`,
          }}
        >
          <Slot />
        </div>
      </div>
    </Collapsible>
  );
});

export interface ChangelogScrollAreaProps {
  smoothScroll?: boolean;
}

export const ChangelogScrollArea = component$<ChangelogScrollAreaProps>((props) => {
  const ctx = useContext(ChangelogContext);
  const isVisible = ctx.showScrollarea.value;

  return (
    <Scrollarea
      smoothScroll={props.smoothScroll}
      class="w-full relative min-h-0 h-full max-h-[inherit]"
    >
      <ScrollareaCues
        maxHeight={44}
        class={[
          'transition-opacity duration-[160ms] ease-in-out',
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none',
        ]}
        topClass={[isVisible ? 'translate-y-0' : '-translate-y-4']}
        bottomClass={[isVisible ? 'translate-y-0' : 'translate-y-4']}
      />

      <ScrollareaViewport
        id={ctx.scrollId}
        elementRef={ctx.scrollRef}
        class={[
          'transition-[max-height]',
          ctx.isExpanded.value ? 'spring-moderate' : 'spring-moderate-exit',
        ]}
        style={{
          maxHeight: ctx.isExpanded.value ? ctx.config.expandedMaxHeight : '0px',
        }}
      >
        <Slot />
      </ScrollareaViewport>

      <ScrollareaBar
        smoothScroll
        orientation="vertical"
        class={[
          'w-[13px] right-0 top-[4px] bottom-[4px] transition-opacity duration-[160ms] ease-in-out',
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none',
        ]}
      />
    </Scrollarea>
  );
});

export const AnimatedReveal = component$((props: { index: number }) => {
  const ctx = useContext(ChangelogContext);

  return (
    <ListItem
      index={props.index}
      class={[
        'transition-[opacity]',
        ctx.isExpanded.value
          ? 'opacity-100 spring-slow [transition-delay:var(--stagger)]'
          : 'opacity-0 spring-moderate-exit',
      ]}
    >
      <Slot />
    </ListItem>
  );
});

export type ChangelogItemProps = {
  index: number;
  title: string;
  version: string;
  href: string;
  date?: string;
  newBadge?: boolean;
};

export const ChangelogItem = component$((props: ChangelogItemProps) => {
  const listCtx = useContext(ListContext);

  const isFocusable = listCtx.activeIndex.value === props.index;

  return (
    <Link
      href={props.href}
      tabIndex={isFocusable ? 0 : -1}
      data-list-item=""
      class="text-sm w-full relative group/item pl-6 pr-6 rounded-full py-3 flex items-center gap-2 leading-[1] justify-start transition-colors hover:bg-canvas-hover outline-none focus-visible:bg-canvas-hover focus-visible:ring-1 focus-visible:ring-separator"
    >
      <p class="relative text-ink-tertiary text-base leading-[1] z-10 group-hover/item:text-ink group-focus-visible/item:text-ink transition-colors duration-200 text-sm">
        {props.version}
      </p>
      <p class="font-fvs w-full tracking-wide spring-moderate group-hover/item:fvs-medium group-focus-visible/item:fvs-medium font-synthesis-none transition-all duration-200">
        {props.title}
      </p>
      {props.newBadge && (
        <span class="ml-2 px-2 rounded-md py-1 bg-canvas-contrast group-hover/item:bg-canvas-contrast-hover text-macro text-ink-contrast tracking-tight font-semibold">
          NEW
        </span>
      )}
      <Icon
        i="arrow-up-right"
        class="text-ink-tertiary group-hover/item:text-ink group-focus-visible/item:text-ink transition-colors duration-200"
        size="sm"
      />
    </Link>
  );
});

// ==========================================
// Final Orchestrated Component
// ==========================================
export interface ChangelogProps extends Partial<ChangelogConfig> {
  items?: Omit<ChangelogItemProps, 'index'>[];
}
export const Changelog = component$((props: ChangelogProps) => {
  const isExpanded = useSignal(false);
  const scrollRef = useSignal<HTMLElement>();
  const showScrollarea = useSignal(false);
  const activeIndex = useSignal(0);
  const scrollId = `${useId()}-changelog-scroll`;

  const config: ChangelogConfig = {
    itemHeight: props.itemHeight ?? '44px',
    width: props.width ?? '420px',
    expandedMaxHeight: props.expandedMaxHeight ?? '220px',
    borderRadius: props.borderRadius ?? '19.5px',
    safeZone: props.safeZone ?? '32px',
    transitionDuration: props.transitionDuration ?? 160,
    staggerBase: props.staggerBase ?? 25,
    staggerStep: props.staggerStep ?? 37,
  };

  const defaultItems: Omit<ChangelogItemProps, 'index'>[] = [
    { href: '#', version: '0.0.5', date: '12 Jan', title: 'Added dark mode', newBadge: true },
    { href: '#', version: '0.0.4', date: '05 Jan', title: 'Added 250+ iconset' },
    { href: '#', version: '0.0.3', date: '28 Dec', title: 'Added more stuff' },
    { href: '#', version: '0.0.2', date: '15 Dec', title: 'Added 5 components' },
    { href: '#', version: '0.0.1', date: '01 Dec', title: 'Initial Release' },
    { href: '#', version: '0.0.0', date: 'Beta', title: 'Pre-Release v3' },
    { href: '#', version: '0.0.0', date: 'Alpha', title: 'Pre-Release v2' },
    { href: '#', version: '0.0.0', date: 'Concept', title: 'Pre-Release v1' },
  ];

  const items = props.items || defaultItems;

  useContextProvider(ChangelogContext, {
    isExpanded,
    scrollRef,
    scrollId,
    showScrollarea,
    config,
    latestItem: items[0],
  });

  useTask$(({ track }) => {
    track(() => isExpanded.value);
    if (!isExpanded.value) activeIndex.value = 0;
  });

  return (
    <ChangelogRoot>
      <ChangelogTrigger />

      <CollapsibleContent class="flex flex-col min-h-0">
        <ChangelogScrollArea>
          <List
            staggerBase={config.staggerBase}
            staggerStep={config.staggerStep}
            activeIndex={activeIndex}
            disabled={!isExpanded.value}
            class="flex flex-col pb-2"
          >
            {items.map((item, i) => (
              <AnimatedReveal key={`${item.version}-${i}`} index={i}>
                <ChangelogItem {...item} index={i} />
              </AnimatedReveal>
            ))}
          </List>
        </ChangelogScrollArea>
      </CollapsibleContent>
    </ChangelogRoot>
  );
});
