import { $ } from '@builder.io/qwik';
import type { ToastOptions } from '@onwo/primitives/toaster';
import { useToastCreateCustom } from '@onwo/primitives/toaster';

export type ToastType = 'normal' | 'success' | 'info' | 'warning' | 'error' | 'promise';

export type ToastData = {
  title: string;
  description?: string;
  type: ToastType;
};

export const useToastCreate = () => {
  type T = Omit<ToastOptions<ToastData>, 'type' | 'title'>;
  const custom = useToastCreateCustom<ToastData>();

  return {
    custom,
    success: $((title: string, options: T = {}) => custom({ ...options, title, type: 'success' })),
    info: $((title: string, options: T = {}) => custom({ ...options, title, type: 'info' })),
    warning: $((title: string, options: T = {}) => custom({ ...options, title, type: 'warning' })),
    error: $((title: string, options: T = {}) => custom({ ...options, title, type: 'error' })),
  };
};
