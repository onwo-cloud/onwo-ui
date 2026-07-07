import {
  component$,
  useStylesScoped$,
  $,
  useVisibleTask$,
  useSignal,
  Slot,
  type Signal,
  type PropsOf
} from "@qwik.dev/core";
import { initContext } from '~primitives/utils/context-utils';
import { Icon } from '~/utils/icon';

export interface SmoothScrollOptions {
  lerpFactor?: number;
  minStep?: number;
}

export function useSmoothScroll(
  viewportRef: Signal<HTMLElement | undefined>,
  triggerRef: Signal<HTMLElement | undefined>,
  enabled: boolean | Signal<boolean> = true,
  options: SmoothScrollOptions = {}
) {
  useVisibleTask$(({ track, cleanup }) => {
    const triggerEl = track(() => triggerRef.value);
    const isEnabled = track(() => typeof enabled === "boolean" ? enabled : enabled.value);

    if (!triggerEl || !isEnabled) return;

    let animationFrameId: number | null = null;
    let targetTop = 0;
    let targetLeft = 0;
    let currentTop = 0;
    let currentLeft = 0;

    const lerpFactor = options.lerpFactor ?? 0.25;
    const minStep = options.minStep ?? 1.0;

    const handleWheel = (e: WheelEvent) => {
      const vp = viewportRef.value;
      if (!vp) return;

      e.preventDefault();
      e.stopPropagation();

      const maxScrollTop = vp.scrollHeight - vp.clientHeight;
      const maxScrollLeft = vp.scrollWidth - vp.clientWidth;

      if (animationFrameId === null) {
        currentTop = vp.scrollTop;
        currentLeft = vp.scrollLeft;
        targetTop = vp.scrollTop;
        targetLeft = vp.scrollLeft;
      }

      targetTop += e.deltaY;
      targetLeft += e.deltaX;

      targetTop = Math.max(0, Math.min(targetTop, maxScrollTop));
      targetLeft = Math.max(0, Math.min(targetLeft, maxScrollLeft));

      const animate = () => {
        const distY = targetTop - currentTop;
        const distX = targetLeft - currentLeft;

        let stepY = distY * lerpFactor;
        let stepLeft = distX * lerpFactor;

        if (Math.abs(distY) < minStep) {
          currentTop = targetTop;
        } else if (Math.abs(stepY) < minStep) {
          currentTop += Math.sign(distY) * minStep;
        } else {
          currentTop += stepY;
        }

        if (Math.abs(distX) < minStep) {
          currentLeft = targetLeft;
        } else if (Math.abs(stepLeft) < minStep) {
          currentLeft += Math.sign(distX) * minStep;
        } else {
          currentLeft += stepLeft;
        }

        vp.scrollTo({ top: currentTop, left: currentLeft });

        if (currentTop === targetTop && currentLeft === targetLeft) {
          animationFrameId = null;
        } else {
          animationFrameId = requestAnimationFrame(animate);
        }
      };

      if (animationFrameId === null) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    triggerEl.addEventListener("wheel", handleWheel, { passive: false });

    cleanup(() => {
      triggerEl.removeEventListener("wheel", handleWheel);
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    });
  });
}

export type ScrollareaData = {
  viewportRef: Signal<HTMLElement | undefined>;
  isAtTop: Signal<boolean>;
  isAtBottom: Signal<boolean>;
  isScrollable: Signal<boolean>;
  scrollTopDistance: Signal<number>;
  scrollBottomDistance: Signal<number>;
  smoothScroll: boolean;
};

export const ScrollareaContext = initContext<ScrollareaData>('scrollbar-data');

export interface ScrollareaProps extends PropsOf<'div'> {
  as?: any;
  smoothScroll?: boolean;
}

export const Scrollarea = component$<ScrollareaProps>(({ as, smoothScroll = false, ...props }) => {
  const viewportRef = useSignal<HTMLElement>();
  const isAtTop = useSignal(true);
  const isAtBottom = useSignal(true);
  const isScrollable = useSignal(false);
  const scrollTopDistance = useSignal(0);
  const scrollBottomDistance = useSignal(0);

  ScrollareaContext.useProvider({
    viewportRef,
    isAtTop,
    isAtBottom,
    isScrollable,
    scrollTopDistance,
    scrollBottomDistance,
    smoothScroll,
  });

  const Tag = as || 'div';

  return (
    <Tag {...props}>
      <Slot />
    </Tag>
  );
});

// ==========================================
// 4. Scrollarea Viewport (The Scrolling Area)
// ==========================================
export interface ScrollareaViewportProps extends PropsOf<'div'> {
  elementRef?: Signal<HTMLElement | undefined>;
}

export const ScrollareaViewport = component$<ScrollareaViewportProps>(({ elementRef, class: className, ...props }) => {
  const ctx = ScrollareaContext.use();
  const internalRef = useSignal<HTMLElement>();
  const ref = elementRef || internalRef;

  useVisibleTask$(({ track }) => {
    const el = track(() => ref.value);
    if (el) ctx.viewportRef.value = el;
  });

  const updateScrollState = $((el: HTMLElement) => {
    const sh = el.scrollHeight;
    const ch = el.clientHeight;
    const st = el.scrollTop;

    ctx.isAtTop.value = st <= 0;
    ctx.isAtBottom.value = Math.ceil(st + ch) >= sh - 1;
    ctx.isScrollable.value = sh > ch;

    ctx.scrollTopDistance.value = Math.max(0, st);
    ctx.scrollBottomDistance.value = Math.max(0, sh - ch - st);
  });

  useVisibleTask$(({ cleanup, track }) => {
    const el = track(() => ref.value);
    if (!el) return;

    const observer = new ResizeObserver(() => updateScrollState(el));
    observer.observe(el);

    const handleScroll = () => updateScrollState(el);
    el.addEventListener("scroll", handleScroll, { passive: true });

    updateScrollState(el);

    cleanup(() => {
      observer.disconnect();
      el.removeEventListener("scroll", handleScroll);
    });
  });

  useStylesScoped$(`
    .no-scrollbar::-webkit-scrollbar {
      display: none !important;
      width: 0 !important;
      height: 0 !important;
    }
    .no-scrollbar {
      scrollbar-width: none !important;
      -ms-overflow-style: none !important;
      -webkit-overflow-scrolling: touch;
    }
  `);

  return (
    <div ref={ref} class={["no-scrollbar overflow-y-auto w-full relative z-10", className]} {...props}>
      <Slot />
    </div>
  );
});

// ==========================================
// 5. Scrollarea Cues (Edge indicators)
// ==========================================
export interface ScrollareaCuesProps {
  noGradient?: boolean;
  noArrows?: boolean;
  class?: string | any[];
  topClass?: string | any[];
  bottomClass?: string | any[];
  maxHeight?: number;
}

export const ScrollareaCues = component$<ScrollareaCuesProps>((props) => {
  const ctx = ScrollareaContext.use();
  const maxHeight = props.maxHeight ?? 32;

  const topDistance = ctx.scrollTopDistance.value;
  const bottomDistance = ctx.scrollBottomDistance.value;
  const isScrollable = ctx.isScrollable.value;

  const currentTopHeight = isScrollable ? Math.min(maxHeight, topDistance) : 0;
  const currentBottomHeight = isScrollable ? Math.min(maxHeight, bottomDistance) : 0;

  const topOpacity = maxHeight > 0 ? currentTopHeight / maxHeight : 0;
  const bottomOpacity = maxHeight > 0 ? currentBottomHeight / maxHeight : 0;

  return (
    <div
      aria-hidden="true"
      data-scrollable={isScrollable}
      class={["pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[inherit]", props.class]}
    >
      <div
        class={["absolute left-0 right-0 top-0 overflow-hidden", props.topClass]}
        style={{
          height: `${currentTopHeight}px`,
          opacity: topOpacity,
        }}
        data-visible={topOpacity > 0}
        data-at-edge={ctx.isAtTop.value}
      >
        {!props.noGradient && (
          <div
            class="absolute left-0 right-0 top-0"
            style={{
              height: `${maxHeight}px`,
              background: 'linear-gradient(to top, transparent 0%, color-mix(in srgb, var(--color-canvas-secondary) 75%, transparent) 65%, var(--color-canvas-secondary) 100%)'
            }}
          />
        )}
        {!props.noArrows && (
          <Icon i="chevron-up" class="text-ink-tertiary absolute left-1/2 top-0 -translate-x-1/2" />
        )}
      </div>

      <div
        class={["absolute left-0 right-0 bottom-0 overflow-hidden", props.bottomClass]}
        style={{
          height: `${currentBottomHeight}px`,
          opacity: bottomOpacity,
        }}
        data-visible={bottomOpacity > 0}
        data-at-edge={ctx.isAtBottom.value}
      >
        {!props.noGradient && (
          <div
            class="absolute left-0 right-0 bottom-0"
            style={{
              height: `${maxHeight}px`,
              background: 'linear-gradient(to bottom, transparent 0%, color-mix(in srgb, var(--color-canvas-secondary) 75%, transparent) 65%, var(--color-canvas-secondary) 100%)'
            }}
          />
        )}
        {!props.noArrows && (
          <Icon i="chevron-down" class="text-ink-tertiary absolute left-1/2 bottom-0 -translate-x-1/2" />
        )}
      </div>
    </div>
  );
});

// ==========================================
// 6. Scrollarea Track & Thumb Primitive
// ==========================================
export interface ScrollareaBarProps {
  orientation?: 'vertical' | 'horizontal';
  class?: string | any[];
  hoverDistance?: number;
  smoothScroll?: boolean;
}

export const ScrollareaBar = component$<ScrollareaBarProps>((props) => {
  const ctx = ScrollareaContext.use();
  const trackRef = useSignal<HTMLElement>();

  const thumbHeight = useSignal(0);
  const thumbTop = useSignal(0);

  const hasHoverSupport = useSignal(true);
  const isHoveringTrack = useSignal(false);
  const isMouseNear = useSignal(false);
  const isDragging = useSignal(false);

  const dragStartMouseY = useSignal(0);
  const dragStartScrollTop = useSignal(0);

  // Hook Instance 1: Always polyfill the scrollbar track elements to forward wheel ticks
  useSmoothScroll(ctx.viewportRef, trackRef, true);

  // Hook Instance 2: Apply smooth scrolling polyfill to the whole viewport if requested
  useSmoothScroll(ctx.viewportRef, ctx.viewportRef, props.smoothScroll ?? ctx.smoothScroll);

  const updateScrollarea = $(() => {
    const vp = ctx.viewportRef.value;
    const track = trackRef.value;
    if (!vp || !track) return;

    const sh = vp.scrollHeight;
    const ch = vp.clientHeight;
    const st = vp.scrollTop;

    if (sh <= ch) return;

    const trackHeight = track.clientHeight;
    const calculatedHeight = Math.max((trackHeight / sh) * trackHeight, 30);
    thumbHeight.value = calculatedHeight;

    const maxScrollTop = sh - ch;
    const maxThumbTop = trackHeight - calculatedHeight;
    thumbTop.value = maxScrollTop > 0 ? (st / maxScrollTop) * maxThumbTop : 0;
  });

  useVisibleTask$(({ track, cleanup }) => {
    const vp = track(() => ctx.viewportRef.value);
    if (!vp) return;

    const observer = new ResizeObserver(() => updateScrollarea());
    observer.observe(vp);

    const handleScroll = () => updateScrollarea();
    vp.addEventListener("scroll", handleScroll, { passive: true });

    updateScrollarea();

    cleanup(() => {
      observer.disconnect();
      vp.removeEventListener("scroll", handleScroll);
    });
  });

  useVisibleTask$(() => {
    hasHoverSupport.value = window.matchMedia("(any-hover: hover)").matches;
  });

  useVisibleTask$(({ track, cleanup }) => {
    const active = track(() => ctx.isScrollable.value);
    const hasHover = track(() => hasHoverSupport.value);

    if (!active || !hasHover) {
      isMouseNear.value = false;
      isHoveringTrack.value = false;
      return;
    }

    const handlePointerMove = (e: PointerEvent) => {
      const rect = trackRef.value?.getBoundingClientRect();
      if (!rect) return;

      const dx = Math.max(rect.left - e.clientX, 0, e.clientX - rect.right);
      const dy = Math.max(rect.top - e.clientY, 0, e.clientY - rect.bottom);
      const distance = Math.sqrt(dx * dx + dy * dy);

      isMouseNear.value = distance <= (props.hoverDistance ?? 50);
      isHoveringTrack.value = distance === 0;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    cleanup(() => window.removeEventListener("pointermove", handlePointerMove));
  });

  const handlePointerDown = $((e: PointerEvent) => {
    if (!ctx.viewportRef.value) return;
    if (e.button !== 0) return;

    e.stopPropagation();

    isDragging.value = true;
    dragStartMouseY.value = e.clientY;
    dragStartScrollTop.value = ctx.viewportRef.value.scrollTop;
  });

  useVisibleTask$(({ cleanup, track }) => {
    track(() => isDragging.value);
    const el = ctx.viewportRef.value;
    const trackEl = trackRef.value;

    if (!isDragging.value || !el || !trackEl) return;

    const sh = el.scrollHeight;
    const ch = el.clientHeight;
    const maxScrollTop = sh - ch;

    const trackHeight = trackEl.clientHeight;
    const maxThumbTop = trackHeight - thumbHeight.value;

    const originalUserSelect = document.body.style.userSelect;
    const originalCursor = document.body.style.cursor;

    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";

    // Drag smoothing variables
    let dragAnimationFrameId: number | null = null;
    let targetScrollTop = el.scrollTop;
    let currentScrollTop = el.scrollTop;

    const isSmooth = props.smoothScroll ?? ctx.smoothScroll;
    const dragLerpFactor = 0.7; // from 0 to 1

    const handlePointerMove = (e: PointerEvent) => {
      const deltaY = e.clientY - dragStartMouseY.value;
      const scrollDelta = (deltaY / maxThumbTop) * maxScrollTop;
      const destination = dragStartScrollTop.value + scrollDelta;

      if (isSmooth) {
        // Clamp the moving target destination
        targetScrollTop = Math.max(0, Math.min(destination, maxScrollTop));

        const animateDrag = () => {
          const distY = targetScrollTop - currentScrollTop;

          // Apply dampening steps
          if (Math.abs(distY) < 0.5) {
            currentScrollTop = targetScrollTop;
          } else {
            currentScrollTop += distY * dragLerpFactor;
          }

          el.scrollTop = currentScrollTop;

          // Continue the loop if we haven't caught up to the mouse position
          if (currentScrollTop !== targetScrollTop) {
            dragAnimationFrameId = requestAnimationFrame(animateDrag);
          } else {
            dragAnimationFrameId = null;
          }
        };

        if (dragAnimationFrameId === null) {
          dragAnimationFrameId = requestAnimationFrame(animateDrag);
        }
      } else {
        // Fallback to standard instant positioning if smooth scroll is disabled
        el.scrollTop = destination;
      }
    };

    const handlePointerUp = () => {
      isDragging.value = false;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointercancel", handlePointerUp);

    cleanup(() => {
      document.body.style.userSelect = originalUserSelect;
      document.body.style.cursor = originalCursor;

      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointercancel", handlePointerUp);

      if (dragAnimationFrameId !== null) {
        cancelAnimationFrame(dragAnimationFrameId);
      }
    });
  });

  const isExpandedState = !hasHoverSupport.value || isDragging.value || isMouseNear.value;

  return (
    <div
      ref={trackRef}
      style={{ touchAction: "none", WebkitTouchCallout: "none" }}
      class={[
        "absolute z-50 flex flex-col items-stretch select-none pointer-events-none",
        props.class
      ]}
      data-scrollable={ctx.isScrollable.value}
      data-near={isMouseNear.value}
      data-hover={isHoveringTrack.value}
      data-dragging={isDragging.value}
      data-expanded={isExpandedState}
    >
      <div class="relative w-full h-full flex flex-col items-center px-[8px]">
        <div
          class={[
            "absolute w-[2px] h-full rounded-full z-10 transition-opacity spring-moderate bg-scroll-line pointer-events-none",
            isExpandedState ? "opacity-100" : "opacity-0"
          ]}
          data-expanded={isExpandedState}
        />

        <div
          onPointerDown$={handlePointerDown}
          preventdefault:pointerdown={true}
          style={{
            height: `${thumbHeight.value}px`,
            transform: `translateY(${thumbTop.value}px)`,
            willChange: "transform",
          }}
          class={[
            "relative rounded-full pointer-events-auto cursor-grab active:cursor-grabbing z-20 transition-[width,background-color] spring-moderate",
            isExpandedState ? "w-1" : "w-[2px]",
            isDragging.value
              ? "bg-scroll-thumb-dragging"
              : (isHoveringTrack.value ? "bg-scroll-thumb-expanded" : "bg-scroll-thumb-folded")
          ]}
          data-dragging={isDragging.value}
          data-hover={isHoveringTrack.value}
        >
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[16px] h-full bg-transparent" />
        </div>
      </div>
    </div>
  );
});
