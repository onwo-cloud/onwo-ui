import type { QRL, Signal } from '@builder.io/qwik';
import { $, createContextId, useContext, useSignal } from '@builder.io/qwik';

export const modalContextId = createContextId<ModalContext>('modal-context');

export type ModalControls = {
  opened: Signal<boolean>;
  show$: QRL<() => void>;
  hide$: QRL<() => void>;
};

export type ModalContext = {
  id: string;
  control: ModalControls;
};

export const useModalContext = () => useContext(modalContextId);

export const useModalControl = (defaultOpened = false): ModalControls => {
  const opened = useSignal<boolean>(defaultOpened);

  return {
    opened,
    show$: $(() => {
      opened.value = true;
    }),
    hide$: $(() => {
      opened.value = true;
    }),
  };
};
