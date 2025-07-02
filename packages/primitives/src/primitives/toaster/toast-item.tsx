import {
  component$,
  useSignal,
  $,
  useVisibleTask$,
  useComputed$,
  useTask$,
  Slot,
} from '@builder.io/qwik';
import type { Toast } from './context';
import { ToastItemContext, ToasterContext } from './context';
import { useTimer } from './use-timer';
import { useToastDismiss } from './index';

export interface ToastItemProps {
  toast: Toast;
}

export const ToastItem = component$(({ toast }: ToastItemProps) => {
  const toasterCtx = ToasterContext.use();
  const absRef = useSignal<HTMLLIElement>();
  const toastDismiss = useToastDismiss();
  const mounted = useSignal(false);
  const removed = useSignal(false);

  const dismiss$ = $(() => {
    if (removed.value === true) return;
    removed.value = true;
    toasterCtx.heights[toast.id] = 0;
    setTimeout(() => toastDismiss(toast.id), 400);
  });

  ToastItemContext.useProvider({ dismiss$ });

  const dismissTimer = useTimer(dismiss$, toast.duration);

  const toastIndex = useComputed$(() =>
    toasterCtx.toasts.value.findIndex(({ id }) => id === toast.id),
  );

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async ({ track }) => {
    console.info('in nested');
    const ref = track(() => absRef.value);
    if (!ref) return;
    requestAnimationFrame(() => {
      mounted.value = true;
      const baseHeight = ref.offsetHeight;
      ref.style.setProperty('--base-height', `${baseHeight}`);
      toasterCtx.heights[toast.id] = baseHeight;
    });
    await dismissTimer.start();
  });

  useTask$(({ track }) => {
    const idx = track(() => toastIndex.value);
    const toastsLength = track(() => toasterCtx.toasts.value.length);
    if (toastsLength > 3 && idx < toastsLength - 3) dismiss$();
  });

  useTask$(({ track }) => {
    const hovered = track(() => toasterCtx.isOpenedToasts.value);
    if (hovered === true) dismissTimer.pause();
    else dismissTimer.resume();
  });

  const yPlacement = useComputed$(() => {
    const toasts = toasterCtx.toasts.value;
    const before = toasts.slice(toastIndex.value + 1);
    return before
      .map((a) => toasterCtx.heights[a.id])
      .filter(Boolean)
      .reduce((a, b) => a + b + toasterCtx.options.gap, 0);
  });

  return (
    <li
      ref={absRef}
      data-onwo-toast
      data-mounted={mounted.value}
      data-removed={removed.value}
      class="bg-paper border border-line flex items-start text-sm py-3 px-4 rounded-md shadow-sm w-full gap-1"
      style={{
        '--base-y': yPlacement.value + 'px',
        '--index': `${toastIndex.value}`,
      }}
    >
      <Slot />
    </li>
  );
});
