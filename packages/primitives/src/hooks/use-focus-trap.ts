import type { Signal } from '@builder.io/qwik';
import { $, useSignal } from '@builder.io/qwik';
import type { FocusTrap } from 'focus-trap';
import { createFocusTrap } from 'focus-trap';

export const useFocusTrap = (modal: Signal<HTMLDialogElement | undefined>) => {
  const focusTrap = useSignal<FocusTrap | null>(null);

  return {
    activate: $(async () => {
      if (!modal.value) return;
      try {
        const ft = createFocusTrap(modal.value, { escapeDeactivates: false });
        ft.activate();
        focusTrap.value = ft;
      } catch {
        // Activating the focus trap throws if no tabbable elements are inside
        // the container. If this is the case we are fine with not activating
        // the focus trap. That's why we ignore the thrown error.
      }
    }),
    deactivate: $(async () => {
      try {
        if (focusTrap.value !== null) {
          focusTrap.value.deactivate();
          focusTrap.value = null;
        }
      } catch {
        //
      }
    }),
  };
};
