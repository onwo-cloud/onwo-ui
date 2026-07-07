import {
  $,
  noSerialize,
  useSignal,
  type NoSerialize,
  type QRL,
  type Signal,
} from '@qwik.dev/core';
import { animate } from 'motion';

export type FlickController = {
  currentProgress: Signal<number>;
  targetProgress: Signal<number>;
  activeTarget: Signal<number | null>;
  isDragging: Signal<boolean>;
  snapTo$: any;
  finalizeActiveTransition$: any;
  dragProps: {
    ref: Signal<HTMLDivElement | undefined>;
    onPointerDown$: any;
    onPointerMove$: any;
    onPointerUp$: any;
    onPointerCancel$: any;
    style: { touchAction: string };
    class: string;
  };
};

export type UseFlickParams = {
  orientation?: 'horizontal' | 'vertical';
  currentProgress?: Signal<number>;
  onTransitionEnd$: QRL<(direction: 1 | -1) => void>;
};

export const useFlick = ({
  orientation = 'horizontal',
  currentProgress: externalProgress,
  onTransitionEnd$,
}: UseFlickParams): FlickController => {
  const currentProgress = externalProgress ?? useSignal(0);
  const targetProgress = useSignal(0);
  const activeTarget = useSignal<number | null>(null);

  const containerRef = useSignal<HTMLDivElement>();
  const containerDimension = useSignal(288);
  const dragStartPos = useSignal(0);
  const dragStartTime = useSignal(0);

  const isPointerDown = useSignal(false);
  const isDragging = useSignal(false);

  const initialPrimary = useSignal(0);
  const initialCross = useSignal(0);

  // dragVelocity now tracks the stable average velocity (px/ms)
  const dragVelocity = useSignal(0);

  const animControls = useSignal<NoSerialize<any>>(undefined);

  const finalizeActiveTransition$ = $(async () => {
    if (animControls.value) {
      animControls.value.stop();
      animControls.value = undefined;
    }
    const target = activeTarget.value;
    if (target !== null && Math.abs(target) === 1) {
      activeTarget.value = null;
      await onTransitionEnd$(target === 1 ? -1 : 1);
      currentProgress.value = 0;
      targetProgress.value = 0;
    }
  });

  const snapTo$ = $(async (target: number, initialVelocityPxPerMs: number = 0) => {
    if (animControls.value) animControls.value.stop();

    activeTarget.value = target;

    const velocityPxPerSec = initialVelocityPxPerMs * 1000;
    const velocityProgressPerSec = velocityPxPerSec / (containerDimension.value || 1);

    const animation = animate(currentProgress.value, target, {
      type: 'spring',
      stiffness: 400,
      damping: 40,
      velocity: velocityProgressPerSec,
      onUpdate: (latest) => (currentProgress.value = latest),
    });

    animControls.value = noSerialize(animation);

    try {
      await animation.finished;

      if (Math.abs(target) === 1) {
        if (activeTarget.value === target) {
          activeTarget.value = null;
          await onTransitionEnd$(target === 1 ? -1 : 1);

          currentProgress.value = 0;
          targetProgress.value = 0;
        }
      }
    } catch (e) {
      // Swallowed safely if animation is stopped early
    }
  });

  const onPointerDown$ = $((e: PointerEvent) => {
    finalizeActiveTransition$();

    if (animControls.value) {
      animControls.value.stop();
      animControls.value = undefined;
    }

    isPointerDown.value = true;
    isDragging.value = false;
    initialPrimary.value = orientation === 'horizontal' ? e.clientX : e.clientY;
    initialCross.value = orientation === 'horizontal' ? e.clientY : e.clientX;
  });

  const onPointerMove$ = $((e: PointerEvent, el: Element) => {
    if (!isPointerDown.value) return;

    const currentPos = orientation === 'horizontal' ? e.clientX : e.clientY;
    const currentCross = orientation === 'horizontal' ? e.clientY : e.clientX;

    if (!isDragging.value) {
      const dPrimary = Math.abs(currentPos - initialPrimary.value);
      const dCross = Math.abs(currentCross - initialCross.value);

      if (dPrimary > 5 && dPrimary > dCross) {
        isDragging.value = true;
        dragStartTime.value = performance.now();

        const dimension = containerRef.value
          ? (orientation === 'horizontal' ? containerRef.value.offsetWidth : containerRef.value.offsetHeight)
          : 288;
        containerDimension.value = dimension;

        targetProgress.value = currentProgress.value;
        const maxDrag = containerDimension.value * 1;
        dragStartPos.value = currentPos - currentProgress.value * maxDrag;

        dragVelocity.value = 0;

        el.setPointerCapture(e.pointerId);
      } else if (dCross > 5 && dCross > dPrimary) {
        isPointerDown.value = false;
        return;
      } else {
        return;
      }
    }

    const dragOffset = currentPos - dragStartPos.value;
    const maxDrag = containerDimension.value * 1;
    targetProgress.value = Math.max(-1, Math.min(1, dragOffset / maxDrag));

    // Calculate stable average velocity over the entire duration of the drag
    const duration = performance.now() - dragStartTime.value;
    dragVelocity.value = duration > 0 ? (currentPos - initialPrimary.value) / duration : 0;

    // Early Snap Detection
    const flickVelocityThreshold = 0.8; // px/ms
    const minFlickDistance = 25; // Minimum drag distance to allow a fast flick

    const absOffset = Math.abs(currentPos - initialPrimary.value);
    let earlyTarget = 0;

    if (absOffset > minFlickDistance) {
      // Only triggers flick snap if average speed over the whole gesture is fast
      if (dragVelocity.value > flickVelocityThreshold) {
        earlyTarget = 1;
      } else if (dragVelocity.value < -flickVelocityThreshold) {
        earlyTarget = -1;
      }
    }

    console.log(earlyTarget);
    if (earlyTarget !== 0) {
      isPointerDown.value = false;
      isDragging.value = false;
      if (el.hasPointerCapture(e.pointerId)) {
        el.releasePointerCapture(e.pointerId);
      }
      snapTo$(earlyTarget, dragVelocity.value);
    }
  });

  const onPointerUp$ = $((e: PointerEvent, el: Element) => {
    if (!isPointerDown.value) return;
    isPointerDown.value = false;

    if (!isDragging.value) {
      if (currentProgress.value !== 0) {
        let target = 0;
        if (currentProgress.value > 0.5) target = 1;
        else if (currentProgress.value < -0.5) target = -1;
        snapTo$(target, 0);
      }
      return;
    }

    isDragging.value = false;
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);

    const velocityThreshold = 0.4;
    const distanceThreshold = 0.4;

    let target = 0;
    if (targetProgress.value > distanceThreshold || dragVelocity.value > velocityThreshold) {
      target = 1;
    } else if (
      targetProgress.value < -distanceThreshold ||
      dragVelocity.value < -velocityThreshold
    ) {
      target = -1;
    }

    snapTo$(target, dragVelocity.value);
  });

  return {
    currentProgress,
    targetProgress,
    activeTarget,
    isDragging,
    snapTo$,
    finalizeActiveTransition$,
    get dragProps() {
      return {
        ref: containerRef,
        onPointerDown$,
        onPointerMove$,
        onPointerUp$,
        onPointerCancel$: onPointerUp$,
        style: {
          touchAction: orientation === 'horizontal' ? 'pan-y' : 'pan-x',
        },
        class: isDragging.value ? 'cursor-grabbing' : 'cursor-grab',
      };
    }
  };
};
