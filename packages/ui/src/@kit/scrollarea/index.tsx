import {
  component$,
  useStylesScoped$,
  $,
  useVisibleTask$,
  useTask$,
  useSignal,
  Slot,
  type Signal,
  type PropsOf
} from "@qwik.dev/core";
import { initContext } from '~primitives/utils/context-utils';
import { UiIcon } from "~ui/commons";

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
  maskHeight: Signal<number>;
  enableMask: Signal<boolean>;
};

export const ScrollareaContext = initContext<ScrollareaData>('scrollbar-data');

export interface ScrollareaProps extends PropsOf<'div'> {
  as?: any;
  smoothScroll?: boolean;
  maskHeight?: number;
  enableMask?: boolean;
}

export const Scrollarea = component$<ScrollareaProps>(({
  as,
  smoothScroll = false,
  maskHeight = 32,
  enableMask = true,
  ...props
}) => {
  const viewportRef = useSignal<HTMLElement>();
  const isAtTop = useSignal(true);
  const isAtBottom = useSignal(true);
  const isScrollable = useSignal(false);
  const scrollTopDistance = useSignal(0);
  const scrollBottomDistance = useSignal(0);
  const maskHeightSig = useSignal(maskHeight);
  const enableMaskSig = useSignal(enableMask);

  ScrollareaContext.useProvider({
    viewportRef,
    isAtTop,
    isAtBottom,
    isScrollable,
    scrollTopDistance,
    scrollBottomDistance,
    smoothScroll,
    maskHeight: maskHeightSig,
    enableMask: enableMaskSig,
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
  maskHeight?: number;
  enableMask?: boolean;
}

export const ScrollareaViewport = component$<ScrollareaViewportProps>(({
  elementRef,
  class: className,
  style,
  maskHeight: propMaskHeight,
  enableMask: propEnableMask,
  ...props
}) => {
  const ctx = ScrollareaContext.use();
  const internalRef = useSignal<HTMLElement>();
  const ref = elementRef || internalRef;

  useTask$(({ track }) => {
    if (propMaskHeight !== undefined) {
      track(() => propMaskHeight);
      ctx.maskHeight.value = propMaskHeight;
    }
    if (propEnableMask !== undefined) {
      track(() => propEnableMask);
      ctx.enableMask.value = propEnableMask;
    }
  });

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
    ctx.isScrollable.value = sh - ch > 1;

    ctx.scrollTopDistance.value = Math.max(0, st);
    ctx.scrollBottomDistance.value = Math.max(0, sh - ch - st);
  });

  useVisibleTask$(({ cleanup, track }) => {
    const el = track(() => ref.value);
    if (!el) return;

    let rafId: number | null = null;

    // FPS-debounced update handler to prevent state updates faster than the display frame rate
    const scheduledUpdate = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        updateScrollState(el);
      });
    };

    const resizeObserver = new ResizeObserver(scheduledUpdate);
    resizeObserver.observe(el);

    const observeChildren = () => {
      Array.from(el.children).forEach((child) => {
        resizeObserver.observe(child);
      });
    };
    observeChildren();

    const mutationObserver = new MutationObserver(() => {
      observeChildren();
      scheduledUpdate();
    });
    mutationObserver.observe(el, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    window.addEventListener("resize", scheduledUpdate, { passive: true });
    el.addEventListener("scroll", scheduledUpdate, { passive: true });

    // Initial calculation without delay
    updateScrollState(el);

    cleanup(() => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("resize", scheduledUpdate);
      el.removeEventListener("scroll", scheduledUpdate);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
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

  // Dynamically calculate CSS mask gradient based on scroll distances
  const maskHeight = propMaskHeight ?? ctx.maskHeight.value;
  const isMaskEnabled = propEnableMask ?? ctx.enableMask.value;

  const topDistance = ctx.scrollTopDistance.value;
  const bottomDistance = ctx.scrollBottomDistance.value;
  const isScrollable = ctx.isScrollable.value;

  const currentTopHeight = isScrollable ? Math.min(maskHeight, topDistance) : 0;
  const currentBottomHeight = isScrollable ? Math.min(maskHeight, bottomDistance) : 0;

  const hasMask = isMaskEnabled && isScrollable && (currentTopHeight > 0 || currentBottomHeight > 0);

  const maskImageValue = hasMask
    ? `linear-gradient(to bottom, transparent 0px, black ${currentTopHeight}px, black calc(100% - ${currentBottomHeight}px), transparent 100%)`
    : undefined;

  const maskStyles = maskImageValue
    ? {
        WebkitMaskImage: maskImageValue,
        maskImage: maskImageValue,
      }
    : {};

  const mergedStyle = typeof style === 'object' && style !== null
    ? { ...style, ...maskStyles }
    : typeof style === 'string'
      ? `${style}; ${maskImageValue ? `-webkit-mask-image: ${maskImageValue}; mask-image: ${maskImageValue};` : ''}`
      : maskStyles;

  return (
    <div
      ref={ref}
      style={mergedStyle}
      class={["no-scrollbar overflow-y-auto w-full relative z-10", className]}
      {...props}
    >
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

  useTask$(({ track }) => {
    if (props.maxHeight !== undefined) {
      track(() => props.maxHeight);
      ctx.maskHeight.value = props.maxHeight;
    }
    if (props.noGradient !== undefined) {
      track(() => props.noGradient);
      ctx.enableMask.value = !props.noGradient;
    }
  });

  const maxHeight = props.maxHeight ?? ctx.maskHeight.value;

  const topDistance = ctx.scrollTopDistance.value;
  const bottomDistance = ctx.scrollBottomDistance.value;
  const isScrollable = ctx.isScrollable.value;

  const currentTopHeight = isScrollable ? Math.min(maxHeight, topDistance) : 0;
  const currentBottomHeight = isScrollable ? Math.min(maxHeight, bottomDistance) : 0;

  const topOpacity = maxHeight > 0 ? currentTopHeight / maxHeight : 0;
  const bottomOpacity = maxHeight > 0 ? currentBottomHeight / maxHeight : 0;

  if (props.noArrows) return null;

  return (
    <div
      aria-hidden="true"
      data-scrollable={isScrollable}
      class={[
        "pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[inherit]",
        !isScrollable && "hidden",
        props.class
      ]}
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
        <UiIcon i="chevron-up" class="text-ink-tertiary absolute left-1/2 top-0 -translate-x-1/2" />
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
        <UiIcon i="chevron-down" class="text-ink-tertiary absolute left-1/2 bottom-0 -translate-x-1/2" />
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

    if (sh - ch <= 1) {
      thumbHeight.value = 0;
      thumbTop.value = 0;
      return;
    }

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

    let rafId: number | null = null;

    // FPS-debounced update handler for scrollbar thumb calculations
    const scheduledUpdate = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        updateScrollarea();
      });
    };

    const resizeObserver = new ResizeObserver(scheduledUpdate);
    resizeObserver.observe(vp);

    const observeChildren = () => {
      Array.from(vp.children).forEach((child) => {
        resizeObserver.observe(child);
      });
    };
    observeChildren();

    const mutationObserver = new MutationObserver(() => {
      observeChildren();
      scheduledUpdate();
    });
    mutationObserver.observe(vp, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    window.addEventListener("resize", scheduledUpdate, { passive: true });
    vp.addEventListener("scroll", scheduledUpdate, { passive: true });

    updateScrollarea();

    cleanup(() => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("resize", scheduledUpdate);
      vp.removeEventListener("scroll", scheduledUpdate);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
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

    let rafId: number | null = null;
    let lastEvent: PointerEvent | null = null;

    // FPS-debounced pointermove listener for high-polling-rate mice (e.g. 1000Hz+)
    const handlePointerMove = (e: PointerEvent) => {
      lastEvent = e;
      if (rafId !== null) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;
        if (!lastEvent) return;

        const rect = trackRef.value?.getBoundingClientRect();
        if (!rect) return;

        const dx = Math.max(rect.left - lastEvent.clientX, 0, lastEvent.clientX - rect.right);
        const dy = Math.max(rect.top - lastEvent.clientY, 0, lastEvent.clientY - rect.bottom);
        const distance = Math.sqrt(dx * dx + dy * dy);

        isMouseNear.value = distance <= (props.hoverDistance ?? 50);
        isHoveringTrack.value = distance === 0;
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    cleanup(() => {
      window.removeEventListener("pointermove", handlePointerMove);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    });
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
        !ctx.isScrollable.value && "hidden",
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
