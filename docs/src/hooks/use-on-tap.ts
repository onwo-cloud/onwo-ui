import { $, QRL, useSignal } from '@builder.io/qwik';

type OnTapOptions = {
  /**
   * Allowed delay between pointer down and up events to trigger a tap.
   * Defaults to 200ms.
   */
  delayMs?: number;

  /**
   * The maximum distance in pixels the pointer can move between down and up
   * for the interaction to be considered a tap.
   * Defaults to 10px.
   */
  moveThreshold?: number;
};

export const useOnTap = (cb: QRL<(event: PointerEvent) => void>, options: OnTapOptions = {}) => {
  const { delayMs = 300, moveThreshold = 6 } = options;

  const startState = useSignal<{
    time: number;
    x: number;
    y: number;
  }>();

  // Changed event type from TouchEvent to PointerEvent
  const onPointerDown$ = $((event: PointerEvent) => {
    startState.value = {
      time: Date.now(),
      x: event.clientX,
      y: event.clientY,
    };
  });

  // Changed event type from TouchEvent to PointerEvent
  const onPointerUp$ = $(async (event: PointerEvent) => {
    if (!startState.value) {
      return;
    }

    const timeElapsed = Date.now() - startState.value.time;
    const distanceMoved = Math.sqrt(
      Math.pow(event.clientX - startState.value.x, 2) +
        Math.pow(event.clientY - startState.value.y, 2),
    );

    if (timeElapsed <= delayMs && distanceMoved <= moveThreshold) {
      await cb(event);
    }

    // Reset state for the next interaction
    startState.value = undefined;
  });

  const onPointerLeave$ = $(() => {
    // If the pointer leaves the element, it's not a tap.
    startState.value = undefined;
  });

  // Using pointer events is more universal
  const eventHandlers = {
    onPointerDown$: onPointerDown$,
    onPointerUp$: onPointerUp$,
    onPointerLeave$: onPointerLeave$,
  };

  return eventHandlers;
};
