import type { Signal } from '@builder.io/qwik';
import { createContextId, useContext } from '@builder.io/qwik';

export const modalContextId = createContextId<ModalContext>('modal-context');

type PanelControl = {
  opened: Signal<boolean>;
};

export type ModalContext = {
  id: string;
  panel: Signal<PanelControl | undefined>;
};

export const useModalContext = () => useContext(modalContextId);
