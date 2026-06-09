import { component$, useTask$, useVisibleTask$ } from '@builder.io/qwik';
import type { CSSProperties, JSXOutput, QRL, Signal } from '@builder.io/qwik';
import { useFlick } from './use-flick';

export type InfiniteCarouselProps = {
  prevView: JSXOutput;
  currView: JSXOutput;
  nextView: JSXOutput;
  actionSignal: Signal<{ direction: 1 | -1; id: number }>;
  currentProgress: Signal<number>;
  onTransitionEnd$: QRL<(direction: 1 | -1) => void>;
};

export const InfiniteCarousel = component$((props: InfiniteCarouselProps) => {
  const { currentProgress, onTransitionEnd$ } = props;

  // Initialize the flick hook directly inside the component using the parent's progress signal
  const flick = useFlick({
    orientation: 'horizontal',
    currentProgress,
    onTransitionEnd$,
  });

  const dragProps = flick.dragProps;

  // 1. DRAG SMOOTHING (Lerping): Only active while dragging
  useVisibleTask$(({ cleanup }) => {
    let frameId: number;
    const loop = () => {
      if (flick.isDragging.value) {
        const diff = flick.targetProgress.value - flick.currentProgress.value;
        if (Math.abs(diff) > 0.001) {
          flick.currentProgress.value += diff * 0.35;
        }
      }
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    cleanup(() => cancelAnimationFrame(frameId));
  });

  useTask$(({ track }) => {
    const action = track(() => props.actionSignal.value);
    if (action.id > 0) {
      const target = action.direction === -1 ? 1 : -1;
      flick.finalizeActiveTransition$().then(() => {
        flick.snapTo$(target, 0);
      });
    }
  });

  const getPaneStyle = (type: 'prev' | 'curr' | 'next'): CSSProperties => {
    const p = currentProgress.value;

    switch (type) {
      case 'curr': {
        const absP = Math.abs(p);
        return {
          opacity: Math.min(1, 1 - (absP - 0.5) * 2),
          filter: `blur(${Math.max((absP - 0.5) * 2, 0) * 4}px)`,
          transform: `translateX(${p * 100}%)`,
          pointerEvents: p === 0 ? 'auto' : 'none',
          zIndex: 1,
        };
      }

      case 'prev': {
        const isActive = p > 0;
        return {
          opacity: isActive ? p : 0,
          transform: `translateX(${isActive ? (-1 + p) * 100 : -100}%)`,
          pointerEvents: 'none',
          zIndex: isActive ? 2 : 0,
          visibility: isActive ? 'visible' : ('hidden' as const),
        };
      }

      case 'next': {
        const isActive = p < 0;
        const absP = Math.abs(p);
        return {
          opacity: isActive ? absP : 0,
          transform: `translateX(${isActive ? (1 + p) * 100 : 100}%)`,
          pointerEvents: 'none',
          zIndex: isActive ? 2 : 0,
          visibility: isActive ? 'visible' : ('hidden' as const),
        };
      }
    }
  };

  return (
    <div
      {...dragProps}
      class={[
        'grid w-full relative select-none', 
        dragProps.class
      ]}
    >
      <div class="col-start-1 row-start-1 will-change-transform" style={getPaneStyle('prev')}>
        {props.prevView}
      </div>

      <div class="col-start-1 row-start-1 will-change-transform" style={getPaneStyle('curr')}>
        {props.currView}
      </div>

      <div class="col-start-1 row-start-1 will-change-transform" style={getPaneStyle('next')}>
        {props.nextView}
      </div>
    </div>
  );
});
