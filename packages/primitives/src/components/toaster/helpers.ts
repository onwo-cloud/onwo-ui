import { $ } from '@builder.io/qwik';
import { ToasterContext, type Toast } from './context';
import { TOAST_LIFETIME } from './toaster';

export type ToastOptions<T extends Record<string, unknown>> = Partial<Omit<Toast, 'id'>> & T;

export const useToastCreateCustom = <T extends Record<string, unknown>>() => {
  const toasterCtx = ToasterContext.use();

  return $((options: ToastOptions<T>) => {
    // eslint-disable-next-line sonarjs/pseudo-random
    const id = Date.now() + Math.random();
    const newToast: Toast = {
      id,
      duration: TOAST_LIFETIME,
      ...(options as any),
    };
    const toasts = toasterCtx.toasts;
    toasts.value = [...toasts.value, newToast];
    return id;
  });
};

export const useToastDismiss = () => {
  const toasterCtx = ToasterContext.use();
  return $((id: number) => {
    toasterCtx.toasts.value = toasterCtx.toasts.value.filter((t) => t.id !== id);
  });
};

export const useToastUpdate = <T extends Record<string, unknown>>() => {
  const toasterCtx = ToasterContext.use();
  return $((id: number, options: Partial<ToastOptions<T>>) => {
    toasterCtx.toasts.value = toasterCtx.toasts.value.map((t) =>
      t.id === id ? { ...t, ...options } : t,
    );
  });
};
