import type { QRL } from '@builder.io/qwik';
import { $, useSignal, useVisibleTask$ } from '@builder.io/qwik';
import { handleAndDispatchCustomEvent } from './use-focus-outside';

export type PointerDownOutsideEvent = CustomEvent<{ originalEvent: PointerEvent }>;

/**
 * Listens for `pointerdown` outside a react subtree. We use `pointerdown` rather than `pointerup`
 * to mimic layer dismissing behaviour present in OS.
 * Returns props to pass to the node we want to check for outside events.
 */
export function usePointerDownOutside(
  name: string,
  onPointerDownOutside?: QRL<(event: PointerDownOutsideEvent) => void>,
) {
  const isPointerInsideTreeRef = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => isPointerInsideTreeRef.value);
    const handleClickRef = { current: () => {} };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.target && !isPointerInsideTreeRef.value) {
        const eventDetail = { originalEvent: event };
        const handleAndDispatchPointerDownOutsideEvent = () => {
          handleAndDispatchCustomEvent(name, onPointerDownOutside, eventDetail);
        };

        /**
         * On touch devices, we need to wait for a click event because browsers implement
         * a ~350ms delay between the time the user stops touching the display and when the
         * browser executres events. We need to ensure we don't reactivate pointer-events within
         * this timeframe otherwise the browser may execute events that should have been prevented.
         *
         * Additionally, this also lets us deal automatically with canmintations when a click event
         * isn't raised because the page was considered scrolled/drag-scrolled, long-pressed, etc.
         *
         * This is why we also continuously remove the previous listener, because we cannot be
         * certain that it was raised, and therefore cleaned-up.
         */
        if (event.pointerType === 'touch') {
          document.removeEventListener('click', handleClickRef.current);
          handleClickRef.current = handleAndDispatchPointerDownOutsideEvent;
          document.addEventListener('click', handleClickRef.current, { once: true });
        } else {
          handleAndDispatchPointerDownOutsideEvent();
        }
      } else {
        // We need to remove the event listener in case the outside click has been canceled.
        // See: https://github.com/radix-ui/primitives/issues/2171
        document.removeEventListener('click', handleClickRef.current);
      }
      isPointerInsideTreeRef.value = false;
    };
    /**
     * if this hook executes in a component that mounts via a `pointerdown` event, the event
     * would bubble up to the document and trigger a `pointerDownOutside` event. We avoid
     * this by delaying the event listener registration on the document.
     * This is not React specific, but rather how the DOM works, ie:
     * ```
     * button.addEventListener('pointerdown', () => {
     *   console.log('I will log');
     *   document.addEventListener('pointerdown', () => {
     *     console.log('I will also log');
     *   })
     * });
     */
    const timerId = globalThis.setTimeout(() => {
      document.addEventListener('pointerdown', handlePointerDown);
    }, 0);
    return () => {
      globalThis.clearTimeout(timerId);
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('click', handleClickRef.current);
    };
  });

  // eslint-disable-next-line sonarjs/void-use, sonarjs/no-nested-assignment
  return $(() => void (isPointerInsideTreeRef.value = true));
}
