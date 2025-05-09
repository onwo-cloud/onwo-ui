import { useSignal, useTask$, $, useComputed$ } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';
import type { CarouselContext } from './context';

export function useCarousel(context: CarouselContext) {
  const validIndexesSig = useComputed$(() => {
    const totalSlides = context.numSlidesSig.value;
    const slidesPerView = context.slidesPerViewSig.value;
    const move = context.moveSig.value;
    const lastScrollableIndex = totalSlides - slidesPerView;

    const indexes = [];
    for (let i = 0; i <= lastScrollableIndex; i += move) {
      indexes.push(i);
    }
    if (lastScrollableIndex % move !== 0) {
      indexes.push(lastScrollableIndex);
    }
    return indexes;
  });

  return {
    validIndexesSig,
  };
}

export function useAutoplay(context: CarouselContext) {
  const intervalIdSig = useSignal<number>();
  const isReducedMotionSig = useSignal(false);
  const hasChangeListenerSig = useSignal(false);

  const checkReducedMotion$ = $(async (e: MediaQueryListEvent) => {
    isReducedMotionSig.value = e.matches;
    if (e.matches) {
      context.isAutoplaySig.value = false;
      clearInterval(intervalIdSig.value);
    }
  });

  useTask$(function handleReducedMotion({ track }) {
    track(() => context.currentIndexSig.value);

    if (isServer) return;

    const mediaQueryList = globalThis.matchMedia('(prefers-reduced-motion: reduce)');
    isReducedMotionSig.value = mediaQueryList.matches;

    if (!hasChangeListenerSig.value) {
      mediaQueryList.addEventListener('change', checkReducedMotion$);
      hasChangeListenerSig.value = true;
    }
  });

  useTask$(function handleAutoplayProgress({ track }) {
    track(() => context.isAutoplaySig.value);

    if (isReducedMotionSig.value) return;

    if (!context.isAutoplaySig.value) {
      clearInterval(intervalIdSig.value);
      return;
    }

    const advanceSlideIndex$ = $(() => {
      context.currentIndexSig.value =
        (context.currentIndexSig.value + 1) % context.numSlidesSig.value;
    });

    intervalIdSig.value = setInterval(advanceSlideIndex$, context.autoPlayIntervalMsSig.value);
  });
}
