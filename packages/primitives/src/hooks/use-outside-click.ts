import { $, QRL, Signal, useOnDocument } from "@qwik.dev/core";

export const useOutsideClick = (
  ref: Signal<HTMLElement | undefined>,
  handler: QRL<(e: MouseEvent | TouchEvent) => void>,
) =>
  useOnDocument(["mousedown", 'touchstart'], $((event) => {
    if (!ref.value || ref.value.contains(event.target as Node)) {
      return;
    }
    handler(event);
  }));
