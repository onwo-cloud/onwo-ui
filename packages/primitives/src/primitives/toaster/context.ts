import type { QRL, Signal } from '@builder.io/qwik';
import { initContext } from '~/utils/context-utils';

export type YPosition = 'top' | 'bottom';
export type XPosition = 'left' | 'right' | 'center';
export type ToastPosition = `${YPosition}-${XPosition}`;

type ToastId = number;

export type Toast = {
  id: ToastId;
  duration: number;
};

export type ToasterContextDataOption = {
  position: { y: YPosition; x: XPosition };
  duration: number;
  width: number;
  gap: number;
  offset: number;
};

export type ToasterContextData = {
  isOpenedToasts: Signal<boolean>;
  toasts: Signal<Toast[]>;
  heights: Record<ToastId, number> /* id -> toast height */;
  options: ToasterContextDataOption;
};

export const ToasterContext = initContext<ToasterContextData>('toaster-context');

type ToastItemContextData = {
  dismiss$: QRL<() => void>;
};

export const ToastItemContext = initContext<ToastItemContextData>('toaster-item-context');
