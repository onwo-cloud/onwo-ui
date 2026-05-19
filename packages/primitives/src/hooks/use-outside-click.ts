import { $, QRL, Signal, useOnDocument } from "@builder.io/qwik";

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
