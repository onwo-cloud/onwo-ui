import type { Signal } from '@builder.io/qwik';
import { createContextId, useContext, useContextProvider } from '@builder.io/qwik';

export type YPosition = 'top' | 'bottom';
export type XPosition = 'left' | 'right' | 'center';
export type ToastPosition = `${YPosition}-${XPosition}`;

export type ToastType = 'normal' | 'success' | 'info' | 'warning' | 'error' | 'promise';

type ToastId = number;

export interface Toast {
  id: ToastId;
  type: ToastType;
  title: string;
  description?: string;
  duration: number;
}

// Partial Toast for creation/updates
export type ToasterContextDataOption = {
  position: { y: YPosition; x: XPosition };
  duration: number;
  width: number;
  gap: number;
  offset: number;
};

export type ToasterContextData = {
  toasts: Signal<Toast[]>;
  heights: Record<ToastId, number> /* id -> toast height */;
  options: ToasterContextDataOption;
};

const toasterContextId = createContextId<ToasterContextData>('toaster-context');

export const useToasterContext = () => useContext(toasterContextId);
export const useToasterContextProvider = (data: ToasterContextData) => {
  useContextProvider(toasterContextId, data);
  return data;
};
