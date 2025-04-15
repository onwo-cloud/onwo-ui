import type { Signal } from '@builder.io/qwik';
import { $, useSignal } from '@builder.io/qwik';
import type { FocusTrap } from 'focus-trap';
import { createFocusTrap } from 'focus-trap';

export const useFocusTrap = (modal: Signal<HTMLDialogElement | undefined>) => {
  const focusTrap = useSignal<FocusTrap | null>(null);

  const activate = $(async () => {
    if (!modal.value) return;
    try {
      focusTrap.value = createFocusTrap(modal.value, { escapeDeactivates: false });
      focusTrap.value.activate();
    } catch {
      // Activating the focus trap throws if no tabbable elements are inside
      // the container. If this is the case we are fine with not activating
      // the focus trap. That's why we ignore the thrown error.
    }
  });

  const deactivate = $(async () => {
    if (focusTrap.value !== null) {
      focusTrap.value.deactivate();
      focusTrap.value = null;
    }
  });

  return {
    activate,
    deactivate,
  };
};
