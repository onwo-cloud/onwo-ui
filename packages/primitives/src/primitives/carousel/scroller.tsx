import {
  component$,
  type PropsOf,
  useContext,
  $,
  useTask$,
  useOnWindow,
  Slot,
  useSignal,
  sync$,
} from '@builder.io/qwik';
import { useStyles$ } from '@builder.io/qwik';
import { isServer } from '@builder.io/qwik/build';
import { useDebounced } from '~/hooks/use-debouncer';
import styles from './carousel.css?inline';
import { carouselContextId } from './context';
import { useCarousel } from './use-carousel';
import { useScroller } from './use-scroller';

export const Scroller = component$((props: PropsOf<'div'>) => {
  useStyles$(styles);
  const context = useContext(carouselContextId);

  const { onMouseDown$, onTouchStart$, onTouchMove$, onTouchEnd$, ...rest } = props;

  const isMouseMovingSig = useSignal(false);
  const isTouchMovingSig = useSignal(true);
  const isTouchStartSig = useSignal(false);
  const initialLoadSig = useSignal(true);
  const isNewPosOnLoadSig = useSignal(false);

  const { validIndexesSig } = useCarousel(context);

  const {
    startPosSig,
    transformSig,
    boundariesSig,
    isMouseDownSig,
    isTouchDeviceSig,
    orientationProps,
    getSlidePosition,
    setBoundaries,
    setTransform,
    setTransition,
    setInitialSlidePos,
  } = useScroller(context);

  const { direction, pagePosition, clientPosition } =
    orientationProps[context.orientationSig.value];

  const handleMouseMove = $(async (e: MouseEvent) => {
    if (!isMouseDownSig.value || startPosSig.value === undefined) return;
    if (!context.scrollerRef.value || !boundariesSig.value) return;

    const pos = e[pagePosition];
    const dragSpeed = context.sensitivitySig.value.mouse;
    const walk = (startPosSig.value - pos) * dragSpeed;
    const newTransform = transformSig.value[direction] - walk;

    if (newTransform >= boundariesSig.value.min && newTransform <= boundariesSig.value.max) {
      transformSig.value[direction] = newTransform;

      await setTransition(false);
      await setTransform();
    }

    startPosSig.value = pos;
    isMouseMovingSig.value = true;
  });

  const handleDragSnap = $(async () => {
    if (!context.scrollerRef.value) return;

    const slides = context.slideRefsArray.value;
    const currentPosition = -transformSig.value[direction];

    let closestIndex = 0;
    let minDistance = Infinity;

    for (const [i, slide_] of slides.entries()) {
      const slide = slide_.value;
      if (!slide) continue;

      const slidePosition = await getSlidePosition(i);
      const distance = Math.abs(slidePosition - currentPosition);

      if (distance < minDistance) {
        closestIndex = i;
        minDistance = distance;
      }
    }

    const dragSnapPosition = await getSlidePosition(closestIndex);

    await setTransition(true);
    transformSig.value[direction] = -dragSnapPosition;
    await setTransform();

    context.currentIndexSig.value = closestIndex;
    isMouseDownSig.value = false;
    isMouseMovingSig.value = false;
    isTouchMovingSig.value = false;
    isTouchStartSig.value = false;
    globalThis.removeEventListener('mousemove', handleMouseMove);
  });

  const handleMouseDown = $(async (e: MouseEvent) => {
    if (!context.isDraggableSig.value) return;
    if (!context.scrollerRef.value) return;
    await setTransition(true);

    if (context.startIndexSig.value && context.scrollStartRef.value) {
      context.scrollStartRef.value.style.setProperty('--scroll-snap-align', 'none');
    }

    await setBoundaries();

    isMouseDownSig.value = true;
    startPosSig.value = e.pageX;
    globalThis.addEventListener('mousemove', handleMouseMove);
    globalThis.addEventListener('mouseup', handleDragSnap);
    isMouseMovingSig.value = false;
  });

  useTask$(async function nonDragSnap({ track }) {
    track(() => context.currentIndexSig.value);

    if (isMouseMovingSig.value) {
      isMouseMovingSig.value = false;
      return;
    }

    if (isTouchDeviceSig.value && isTouchMovingSig.value) return;

    if (!context.scrollerRef.value || isServer) return;

    context.scrollStartRef.value?.style.setProperty('--scroll-snap-align', 'none');

    if (isMouseDownSig.value) return;

    const currentIndex = context.currentIndexSig.value;
    const snapPosition = await getSlidePosition(currentIndex);
    await setTransition(true);
    transformSig.value[direction] = -snapPosition;
    await setTransform();

    globalThis.removeEventListener('mousemove', handleMouseMove);
  });

  const handleResize = $(async () => {
    const isCoarsePointer = globalThis.matchMedia('(pointer: coarse)').matches;

    if (isCoarsePointer) return;

    await setTransition(true);

    if (!context.scrollerRef.value) return;

    const newPosition = await getSlidePosition(context.currentIndexSig.value);
    transformSig.value.x = -newPosition;

    await setTransform();
    context.scrollerRef.value.style.transition = 'none';
  });

  const handleTouchStart = $(async (e: TouchEvent) => {
    if (!context.isDraggableSig.value || !context.scrollerRef.value) return;

    if (context.startIndexSig.value && context.scrollStartRef.value) {
      context.scrollStartRef.value.style.setProperty('--scroll-snap-align', 'none');
    }

    startPosSig.value = e.touches[0][clientPosition];
    isTouchStartSig.value = true;
    isTouchMovingSig.value = false;

    await setBoundaries();
    await setTransition(false);
  });

  const [debouncedUpdate] = useDebounced(setTransform, 1);
  const handleTouchMove = $(async (e: TouchEvent) => {
    if (isMouseDownSig.value || startPosSig.value === undefined) return;
    if (!context.scrollerRef.value || !boundariesSig.value) return;

    const pos = e.touches[0][clientPosition];
    const dragSpeed = context.sensitivitySig.value.touch;

    const walk = (startPosSig.value - pos) * dragSpeed;
    const newTransform = transformSig.value[direction] - walk;

    if (newTransform >= boundariesSig.value.min && newTransform <= boundariesSig.value.max) {
      transformSig.value[direction] = newTransform;
      await debouncedUpdate();
    }

    startPosSig.value = pos;
    isTouchMovingSig.value = true;
  });

  useOnWindow('resize', handleResize);

  useTask$(() => {
    if (!initialLoadSig.value) return;
    isNewPosOnLoadSig.value =
      context.startIndexSig.value !== 0 &&
      context.startIndexSig.value !== undefined &&
      context.currentIndexSig.value !== 0;
  });

  const handleWheel = $(async (e: WheelEvent) => {
    if (!context.isDraggableSig.value || !context.scrollerRef.value) return;
    if (!context.isMouseWheelSig.value) return;

    const validIndexes = validIndexesSig.value;
    const currentIndex = context.currentIndexSig.value;
    const currentPosition = validIndexes.indexOf(currentIndex);
    const direction = e.deltaY > 0 ? 1 : -1;

    // check if in bounds
    const newPosition = Math.max(0, Math.min(currentPosition + direction, validIndexes.length - 1));
    context.currentIndexSig.value = validIndexes[newPosition];
  });

  useTask$(() => {
    initialLoadSig.value = false;
  });

  // This only works because we don't need to serialize refs or signals
  let touchStartX = 0;
  let touchStartY = 0;
  let activeCarousel: HTMLElement | null = null;
  let carouselOrientation: string | null = null;

  const preventTouchStart = sync$((e: TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;

    const target = e.target as HTMLElement;
    // eslint-disable-next-line qwik/valid-lexical-scope
    activeCarousel = target.closest('[data-qui-carousel-scroller]');
    if (!activeCarousel) return;

    // eslint-disable-next-line qwik/valid-lexical-scope
    carouselOrientation = activeCarousel.dataset.orientation ?? null;
    // eslint-disable-next-line qwik/valid-lexical-scope
    touchStartX = touch.clientX;
    // eslint-disable-next-line qwik/valid-lexical-scope
    touchStartY = touch.clientY;
  });

  const preventTouchMove = sync$((e: TouchEvent) => {
    if (!activeCarousel || !carouselOrientation) return;

    const touch = e.touches[0];
    if (!touch) return;

    const deltaX = Math.abs(touch.clientX - touchStartX);
    const deltaY = Math.abs(touch.clientY - touchStartY);

    if (carouselOrientation === 'horizontal' && deltaX > deltaY && deltaX > 5) {
      e.preventDefault();
      // eslint-disable-next-line sonarjs/no-duplicated-branches
    } else if (carouselOrientation === 'vertical' && deltaY > deltaX && deltaY > 5) {
      e.preventDefault();
    }
  });

  return (
    <div
      data-qui-carousel-viewport
      onMouseDown$={[handleMouseDown, onMouseDown$]}
      onTouchStart$={[preventTouchStart, handleTouchStart, onTouchStart$]}
      onTouchMove$={[preventTouchMove, handleTouchMove, onTouchMove$]}
      onTouchEnd$={[handleDragSnap, onTouchEnd$]}
      onQVisible$={isNewPosOnLoadSig.value ? setInitialSlidePos : undefined}
      onWheel$={handleWheel}
      preventdefault:wheel={context.isMouseWheelSig.value}
    >
      <div
        ref={context.scrollerRef}
        data-qui-carousel-scroller
        data-draggable={context.isDraggableSig.value ? '' : undefined}
        data-align={context.alignSig.value}
        data-initial-touch={isTouchStartSig.value ? '' : undefined}
        data-initial={isNewPosOnLoadSig.value ? '' : undefined}
        data-orientation={context.orientationSig.value}
        {...rest}
      >
        <Slot />
      </div>
    </div>
  );
});
