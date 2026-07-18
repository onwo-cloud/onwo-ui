import type { Signal, QRL } from '@qwik.dev/core';
import {
  component$,
  Slot,
  useSignal,
  useStore,
  $,
  sync$,
  useVisibleTask$,
} from '@qwik.dev/core';
import { initContext, OwPropsOf, withAs } from '~primitives/index';
import { Button } from '~primitives/@kit/button';
import { Floating } from '~primitives/@kit/floating';
import type { FloatingOptions } from '~primitives/@kit/floating';

export interface FloatingActionButtonControls {
  isOpen: Signal<boolean>;
  isDragging: Signal<boolean>;
  position: { x: number; y: number };
  isCenter: Signal<boolean>;
  isInitialized: Signal<boolean>;
}

export interface FloatingActionButtonPhysics {
  type: 'spring' | 'linear';
  stiffness?: number;
  damping?: number;
}

export type SnapAxisConfig = boolean | { threshold?: number; treshold?: number };
export type SnapConfig =
  | boolean
  | {
    x?: SnapAxisConfig;
    y?: SnapAxisConfig;
  };

export interface FloatingActionButtonRootProps {
  value?: Signal<string>;
  controls?: FloatingActionButtonControls;
  anchorOrigin?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  draggable?: boolean;
  snapToEdges?: SnapConfig;
  physics?: FloatingActionButtonPhysics;
  boundaryPadding?: number;
}

export interface FloatingActionButtonContextStore {
  controls: FloatingActionButtonControls;
  config: FloatingActionButtonRootProps;
  triggerRef: Signal<HTMLElement | undefined>;
  rootRef: Signal<HTMLElement | undefined>;
  relativeRatio: { x: number; y: number };
  onDragEnd$: QRL<() => void>;
  cancelAnimation$: QRL<() => void>;
}

export interface DragOffset {
  x: number;
  y: number;
}

export interface UseDragOnOptions {
  timeThreshold?: number;
  distanceThreshold?: number;
}

// --- Helpers ---

const resolveSnapConfig = (config: SnapConfig, axis: 'x' | 'y') => {
  const fallback = 1;
  if (config === true) return { enabled: true, threshold: fallback };
  if (typeof config === 'object' && config !== null) {
    const axisConfig = config[axis];
    if (axisConfig === true) return { enabled: true, threshold: fallback };
    if (typeof axisConfig === 'object' && axisConfig !== null) {
      const t = axisConfig.threshold ?? (axisConfig as any).treshold;
      return { enabled: true, threshold: t !== undefined ? t : fallback };
    }
  }
  return { enabled: false, threshold: fallback };
};

const applySnapAndClamp = (
  rawLeft: number,
  rawTop: number,
  boundW: number,
  boundH: number,
  buttonW: number,
  buttonH: number,
  padding: number,
  snapConfig?: SnapConfig
) => {
  const minX = padding;
  const maxX = Math.max(minX, boundW - buttonW - padding);
  const minY = padding;
  const maxY = Math.max(minY, boundH - buttonH - padding);

  let actualLeft = Math.min(Math.max(rawLeft, minX), maxX);
  let actualTop = Math.min(Math.max(rawTop, minY), maxY);

  if (snapConfig) {
    const snapX = resolveSnapConfig(snapConfig, 'x');
    const snapY = resolveSnapConfig(snapConfig, 'y');

    const travelX = maxX - minX;
    if (travelX > 0 && snapX.enabled) {
      const halfX = travelX / 2;
      const thresholdDistX = halfX * snapX.threshold;

      if (actualLeft - minX < thresholdDistX) actualLeft = minX;
      else if (maxX - actualLeft < thresholdDistX) actualLeft = maxX;
    }

    const travelY = maxY - minY;
    if (travelY > 0 && snapY.enabled) {
      const halfY = travelY / 2;
      const thresholdDistY = halfY * snapY.threshold;

      if (actualTop - minY < thresholdDistY) actualTop = minY;
      else if (maxY - actualTop < thresholdDistY) actualTop = maxY;
    }
  }

  return { left: actualLeft, top: actualTop };
};

// --- Context & Hooks ---

export const FloatingActionButtonContext = initContext<FloatingActionButtonContextStore>('fam-context');

export const useFloatingActionButtonControls = (initialOpen = false): FloatingActionButtonControls => {
  const isOpen = useSignal(initialOpen);
  const isDragging = useSignal(false);
  const isCenter = useSignal(false);
  const isInitialized = useSignal(false);
  const position = useStore({ x: 0, y: 0 });

  return { isOpen, isDragging, position, isCenter, isInitialized };
};

export const useDragOn = (
  options: UseDragOnOptions,
  callback: QRL<
    (event: PointerEvent, kind: 'start' | 'dragging' | 'end', initialDragOffset: DragOffset) => void
  >
) => {
  const state = useStore({
    isDown: false,
    isDragging: false,
    isClickPrevented: false,
    startX: 0,
    startY: 0,
    offsetX: 0,
    offsetY: 0,
  });

  const timerRef = useSignal<any>();

  const onPointerDown$ = $((e: PointerEvent, el: Element) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;

    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    state.isDown = true;
    state.isDragging = false;
    state.isClickPrevented = false;
    state.startX = e.clientX;
    state.startY = e.clientY;
    state.offsetX = e.clientX - centerX;
    state.offsetY = e.clientY - centerY;

    timerRef.value = setTimeout(() => {
      if (state.isDown && !state.isDragging) {
        state.isDragging = true;
        state.isClickPrevented = true;
        callback(e, 'start', { x: state.offsetX, y: state.offsetY });
      }
    }, options.timeThreshold ?? 250);
  });

  const onPointerMove$ = $((e: PointerEvent) => {
    if (!state.isDown) return;

    if (!state.isDragging) {
      const distance = Math.hypot(e.clientX - state.startX, e.clientY - state.startY);
      if (distance > (options.distanceThreshold ?? 5)) {
        clearTimeout(timerRef.value);
        state.isDragging = true;
        state.isClickPrevented = true;
        callback(e, 'start', { x: state.offsetX, y: state.offsetY });
      }
    }

    if (state.isDragging) {
      callback(e, 'dragging', { x: state.offsetX, y: state.offsetY });
    }
  });

  const onPointerUp$ = $((e: PointerEvent) => {
    if (!state.isDown) return;
    state.isDown = false;
    clearTimeout(timerRef.value);

    if (state.isDragging) {
      callback(e, 'end', { x: state.offsetX, y: state.offsetY });
      state.isDragging = false;

      setTimeout(() => {
        state.isClickPrevented = false;
      }, 50);
    }
  });

  return { state, onPointerDown$, onPointerMove$, onPointerUp$ };
};

export const FloatingActionButtonRoot = component$((props: FloatingActionButtonRootProps) => {
  const defaultControls = useFloatingActionButtonControls();
  const controls = props.controls || defaultControls;

  const rootRef = useSignal<HTMLElement>();
  const triggerRef = useSignal<HTMLElement>();
  const relativeRatio = useStore({ x: 1, y: 1 });

  const animFrameId = useSignal<number>();

  const cancelAnimation$ = $(() => {
    if (animFrameId.value) {
      cancelAnimationFrame(animFrameId.value);
      animFrameId.value = undefined;
    }
  });

  const startAnimation$ = $((targetX: number, targetY: number) => {
    if (animFrameId.value) {
      cancelAnimationFrame(animFrameId.value);
    }

    let x = controls.position.x;
    let y = controls.position.y;
    let vx = 0;
    let vy = 0;

    const physics = props.physics;
    const type = physics?.type ?? 'linear';
    let lastTime = performance.now();

    const step = (now: number) => {
      let dt = (now - lastTime) / 1000;
      if (dt > 0.1) dt = 0.1; // Cap dt to prevent spring explosions on frameskip
      lastTime = now;

      if (type === 'spring') {
        const stiffness = physics?.stiffness ?? 150;
        const dampingRatio = physics?.damping ?? 0.75;
        const c = dampingRatio * 2 * Math.sqrt(stiffness);

        const ax = -stiffness * (x - targetX) - c * vx;
        const ay = -stiffness * (y - targetY) - c * vy;

        vx += ax * dt;
        vy += ay * dt;

        x += vx * dt;
        y += vy * dt;

        controls.position.x = x;
        controls.position.y = y;

        // Finish threshold criteria
        if (
          Math.abs(x - targetX) < 0.05 &&
          Math.abs(y - targetY) < 0.05 &&
          Math.abs(vx) < 0.5 &&
          Math.abs(vy) < 0.5
        ) {
          controls.position.x = targetX;
          controls.position.y = targetY;
          animFrameId.value = undefined;
          return;
        }
      } else {
        // Fast, smooth linear/ease fallback step
        const dx = targetX - x;
        const dy = targetY - y;

        if (Math.hypot(dx, dy) < 0.5) {
          controls.position.x = targetX;
          controls.position.y = targetY;
          animFrameId.value = undefined;
          return;
        }

        x += dx * 0.18;
        y += dy * 0.18;
        controls.position.x = x;
        controls.position.y = y;
      }

      animFrameId.value = requestAnimationFrame(step);
    };

    animFrameId.value = requestAnimationFrame(step);
  });

  const onDragEnd$ = $(() => {
    const el = rootRef.value;
    const triggerEl = triggerRef.value;
    if (!el || !triggerEl) return;

    const rootRect = el.getBoundingClientRect();
    const triggerRect = triggerEl.getBoundingClientRect();

    const boundW = rootRect.width;
    const boundH = rootRect.height;
    const BUTTON_W = triggerEl.offsetWidth || 56;
    const BUTTON_H = triggerEl.offsetHeight || 56;
    const PADDING = props.boundaryPadding ?? 16;

    const currentLeft = triggerRect.left - rootRect.left;
    const currentTop = triggerRect.top - rootRect.top;

    const { left: targetLeft, top: targetTop } = applySnapAndClamp(
      currentLeft,
      currentTop,
      boundW,
      boundH,
      BUTTON_W,
      BUTTON_H,
      PADDING,
      props.snapToEdges
    );

    const cssOffsetX = triggerEl.offsetLeft;
    const cssOffsetY = triggerEl.offsetTop;

    const targetX = targetLeft - cssOffsetX;
    const targetY = targetTop - cssOffsetY;

    // Trigger JS controlled transition
    startAnimation$(targetX, targetY);

    relativeRatio.x = targetLeft / (boundW || 1);
    relativeRatio.y = targetTop / (boundH || 1);
  });

  FloatingActionButtonContext.useProvider({
    controls,
    config: props,
    triggerRef,
    rootRef,
    relativeRatio,
    onDragEnd$,
    cancelAnimation$,
  });

  useVisibleTask$(() => {
    const el = rootRef.value;
    const triggerEl = triggerRef.value;
    if (!el || !triggerEl) return;

    const rootRect = el.getBoundingClientRect();
    const boundW = rootRect.width;
    const boundH = rootRect.height;

    const BUTTON_W = triggerEl.offsetWidth || 56;
    const BUTTON_H = triggerEl.offsetHeight || 56;
    const PADDING = props.boundaryPadding ?? 16;

    const cssOffsetX = triggerEl.offsetLeft;
    const cssOffsetY = triggerEl.offsetTop;

    let rawLeft = cssOffsetX;
    let rawTop = cssOffsetY;

    switch (props.anchorOrigin ?? 'bottom-right') {
      case 'top-left': rawLeft = PADDING; rawTop = PADDING; break;
      case 'top-right': rawLeft = boundW - BUTTON_W - PADDING; rawTop = PADDING; break;
      case 'bottom-left': rawLeft = PADDING; rawTop = boundH - BUTTON_H - PADDING; break;
      case 'bottom-right': rawLeft = boundW - BUTTON_W - PADDING; rawTop = boundH - BUTTON_H - PADDING; break;
    }

    const { left: targetLeft, top: targetTop } = applySnapAndClamp(
      rawLeft,
      rawTop,
      boundW,
      boundH,
      BUTTON_W,
      BUTTON_H,
      PADDING,
      props.snapToEdges
    );

    // Initial positioning is rendered instantly to avoid movement flashes
    controls.position.x = targetLeft - cssOffsetX;
    controls.position.y = targetTop - cssOffsetY;

    relativeRatio.x = targetLeft / (boundW || 1);
    relativeRatio.y = targetTop / (boundH || 1);

    requestAnimationFrame(() => {
      controls.isInitialized.value = true;
    });

    const resizeObserver = new ResizeObserver((entries) => {
      if (controls.isDragging.value) return;
      const contentRect = entries[0].contentRect;

      const newBoundW = contentRect.width;
      const newBoundH = contentRect.height;

      const nextLeft = relativeRatio.x * newBoundW;
      const nextTop = relativeRatio.y * newBoundH;

      const { left: clampedLeft, top: clampedTop } = applySnapAndClamp(
        nextLeft,
        nextTop,
        newBoundW,
        newBoundH,
        triggerEl.offsetWidth || 56,
        triggerEl.offsetHeight || 56,
        props.boundaryPadding ?? 16,
        props.snapToEdges
      );

      // Instantly position during window resize to prevent drag/snap latency
      controls.position.x = clampedLeft - triggerEl.offsetLeft;
      controls.position.y = clampedTop - triggerEl.offsetTop;
    });

    resizeObserver.observe(el);
    return () => {
      resizeObserver.disconnect();
      if (animFrameId.value) cancelAnimationFrame(animFrameId.value);
    };
  });

  return (
    <div
      ref={rootRef}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: controls.isOpen.value ? 'auto' : 'none',
        zIndex: 9999,
        overflow: 'clip',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: controls.isInitialized.value ? 1 : 0,
          transform: `translate(${controls.position.x}px, ${controls.position.y}px)`,
          pointerEvents: 'none',
        }}
      >
        <Slot />
      </div>
    </div>
  );
});

export const FloatingActionButtonTrigger = component$((props: OwPropsOf<'div'>) => {
  const ctx = FloatingActionButtonContext.use();
  const dragState = useStore({ startX: 0, startY: 0, clientX: 0, clientY: 0 });

  const drag = useDragOn(
    { timeThreshold: 200, distanceThreshold: 5 },
    $((e, kind) => {
      if (!ctx.config.draggable || !ctx.triggerRef.value || !ctx.rootRef.value) return;

      if (kind === 'start') {
        ctx.controls.isOpen.value = false;
        ctx.controls.isDragging.value = true;
        ctx.cancelAnimation$(); // Cancel active snap/physics animations immediately on interaction

        dragState.startX = ctx.controls.position.x;
        dragState.startY = ctx.controls.position.y;
        dragState.clientX = e.clientX;
        dragState.clientY = e.clientY;
      } else if (kind === 'dragging') {
        const dx = e.clientX - dragState.clientX;
        const dy = e.clientY - dragState.clientY;

        ctx.controls.position.x = dragState.startX + dx;
        ctx.controls.position.y = dragState.startY + dy;
      } else if (kind === 'end') {
        ctx.controls.isDragging.value = false;
        ctx.onDragEnd$();
      }
    })
  );

  const handleClick = $(() => {
    if (drag.state.isClickPrevented) return;
    ctx.controls.isOpen.value = !ctx.controls.isOpen.value;
  });

  return (
    <Button
      as="div"
      class="select-none"
      {...props}
      preventdefault:click
      stoppropagation:click
      preventdefault:dblclick
      stoppropagation:dblclick
      preventdefault:mousedown
      ref={ctx.triggerRef}
      onPointerDown$={[
        sync$((e: PointerEvent, el: HTMLElement) => {
          try { el.setPointerCapture(e.pointerId); } catch (_err) { }
        }),
        drag.onPointerDown$,
      ]}
      onPointerMove$={drag.onPointerMove$}
      onPointerUp$={[
        sync$((e: PointerEvent, el: HTMLElement) => {
          try { if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId); } catch (_err) { }
        }),
        drag.onPointerUp$,
      ]}
      onPointerCancel$={drag.onPointerUp$}
      onClick$={handleClick}
      style={{ pointerEvents: 'auto', touchAction: 'none', ...props.style }}
    >
      <Slot />
    </Button>
  );
});

export const FloatingActionButtonPanel = withAs('div')(component$(({ As, ...props }) => {
  const ctx = FloatingActionButtonContext.use();

  const updateOn = ctx.controls.isDragging.value ? 'animationFrame' : 'layoutShift';

  const rX = ctx.relativeRatio.x;
  const rY = ctx.relativeRatio.y;

  const position = rX < 0.33 ? 'left' : rX > 0.66 ? 'right' : 'center';
  const side = rY < 0.5 ? 'bottom' : 'top';
  const align = position === 'left' ? '-start' : position === 'right' ? '-end' : '';

  const placement = `${side}${align}` as any;

  const floatingOptions: FloatingOptions = {
    placement,
    strategy: 'absolute',
    updateOn,
    gutter: 12,
    flip: true,
    shift: true,
  };

  return (
    <Floating
      as={As as unknown as 'div'}
      anchorRef={ctx.triggerRef}
      floating={floatingOptions}
      data-position={position}
      {...props}
      style={{
        pointerEvents: ctx.controls.isOpen.value ? 'auto' : 'none',
        backgroundColor: 'transparent',
        border: 'none',
        boxShadow: 'none',
        padding: 0,
        margin: 0,
        overflow: 'visible',
        ...props.style,
      }}
    >
      <Slot />
    </Floating>
  );
}));
