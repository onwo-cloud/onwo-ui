import type { QRL } from '@qwik.dev/core';
import { $, useOnDocument } from '@qwik.dev/core';

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
