import type { QRL } from '@builder.io/qwik';
import { $, useOnDocument } from '@builder.io/qwik';

/** Listens for escape key press */
export function useEscapeKeydown(onEscapeKeyDown: QRL<(event: KeyboardEvent) => void>) {
  useOnDocument(
    'keydown',
    $((event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      onEscapeKeyDown(event);
    }),
  );
}
