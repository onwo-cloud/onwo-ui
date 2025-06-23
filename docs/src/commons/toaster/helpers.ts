import { $ } from '@builder.io/qwik';
import type { Toast } from './context';
import { useToasterContext } from './context';
import { TOAST_LIFETIME } from './toaster';

type ToastOptions = Partial<Omit<Toast, 'id'>>;

export const useToastCreate = () => {
  const toasterCtx = useToasterContext();

  const custom = $((title: string, options: ToastOptions = {}) => {
    // eslint-disable-next-line sonarjs/pseudo-random
    const id = Date.now() + Math.random();
    const newToast: Toast = {
      id,
      title,
      type: 'normal',
      duration: TOAST_LIFETIME,
      ...options,
    };
    const toasts = toasterCtx.toasts;
    toasts.value = [...toasts.value, newToast];
    return id;
  });

  return {
    custom,
    success: $((title: string, options?: ToastOptions) =>
      custom(title, { ...options, type: 'success' }),
    ),
    info: $((title: string, options?: ToastOptions) => custom(title, { ...options, type: 'info' })),
    warning: $((title: string, options?: ToastOptions) =>
      custom(title, { ...options, type: 'warning' }),
    ),
    error: $((title: string, options?: ToastOptions) =>
      custom(title, { ...options, type: 'error' }),
    ),
  };
};

export const useToastDismiss = () => {
  const toasterCtx = useToasterContext();
  return $((id: number) => {
    toasterCtx.toasts.value = toasterCtx.toasts.value.filter((t) => t.id !== id);
  });
};

export const useToastUpdate = () => {
  const toasterCtx = useToasterContext();
  return $((id: number, options: ToastOptions) => {
    toasterCtx.toasts.value = toasterCtx.toasts.value.map((t) =>
      t.id === id ? { ...t, ...options } : t,
    );
  });
};
