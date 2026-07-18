import type { QRL, Signal } from '@qwik.dev/core';
import { $, createContextId, createSignal, useContext, useSignal } from '@qwik.dev/core';

export const modalContextId = createContextId<ModalContext>('modal-context');

export type TriggerEvent = {
  clientX: number;
  clientY: number;
  targetRect: {
    left: number;
    top: number;
    width: number;
    height: number;
  } | null;
};

export type ModalControls = {
  opened: Readonly<Signal<boolean>>;
  panelRef: Signal<HTMLDialogElement | undefined>;
  triggerEvent: Signal<TriggerEvent | null>;
  show$: QRL<(event?: MouseEvent) => void>;
  hide$: QRL<() => void>;
};

export type ModalContext = {
  id: string;
  control: ModalControls;
};

export const useModalContext = () => useContext(modalContextId);

export const useModalControl = (defaultOpened = false): ModalControls => {
  const opened = useSignal<boolean>(defaultOpened);
  const triggerEvent = useSignal<TriggerEvent | null>(null);

  return {
    opened,
    panelRef: createSignal(undefined),
    triggerEvent,
    show$: $((event?: MouseEvent) => {
      if (event) {
        let targetRect: { left: number; top: number; width: number; height: number } | null = null;

        try {
          const rawTarget = event.currentTarget || event.target;
          if (rawTarget && typeof (rawTarget as HTMLElement).getBoundingClientRect === 'function') {
            const rect = (rawTarget as HTMLElement).getBoundingClientRect();
            targetRect = {
              left: rect.left,
              top: rect.top,
              width: rect.width,
              height: rect.height,
            };
          }
        } catch {
          targetRect = null;
        }

        triggerEvent.value = {
          clientX: event?.clientX ?? 0,
          clientY: event?.clientY ?? 0,
          targetRect,
        };
      } else {
        triggerEvent.value = null;
      }

      if (opened.value) return;
      opened.value = true;
    }),
    hide$: $(() => {
      opened.value = false;
    }),
  };
};
