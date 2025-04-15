import type { QRL, Signal } from '@builder.io/qwik';
import { createContextId, useContext } from '@builder.io/qwik';

export const modalContextId = createContextId<ModalContext>('modal-context');

export type ModalContext = {
  id: string;
  opened: Signal<boolean>;
  onShow$?: QRL<() => void>;
  onClose$?: QRL<() => void>;
  closeOnBackdropClick?: boolean;
  alert?: boolean;
};

export const useModalContext = () => useContext(modalContextId);
