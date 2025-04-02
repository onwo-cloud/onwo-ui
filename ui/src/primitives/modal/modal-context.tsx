import type { QRL, Signal } from '@builder.io/qwik';
import { createContextId } from '@builder.io/qwik';

export const modalContextId = createContextId<ModalContext>('qui-modal');

export type ModalContext = {
  // core state
  localId: string;
  showSig: Signal<boolean>;
  onShow$?: QRL<() => void>;
  onClose$?: QRL<() => void>;
  closeOnBackdropClick?: boolean;
  alert?: boolean;
};
