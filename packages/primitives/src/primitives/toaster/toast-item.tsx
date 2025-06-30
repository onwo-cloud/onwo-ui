import {
  component$,
  useSignal,
  $,
  useVisibleTask$,
  useComputed$,
  useTask$,
} from '@builder.io/qwik';
import {
  ControlsCloseSmallIcon,
  GenericCheckRoundedIcon,
  NotificationsErrorIcon,
  NotificationsQuestionMarkIcon,
  SoftwareBugIcon,
} from '@onwo/icons';
import type { Toast, ToastType } from './context';
import { useToasterContext } from './context';
import { useTimer } from './use-timer';
import { useToastDismiss } from './index';

interface ToastItemProps {
  isOpenedToast: boolean;
  toast: Toast;
}

export const ToastItem = component$<ToastItemProps>(({ isOpenedToast, toast }) => {
  const ctx = useToasterContext();
  const absRef = useSignal<HTMLLIElement>();
  const toastDismiss = useToastDismiss();
  const mounted = useSignal(false);
  const removed = useSignal(false);

  const dismiss$ = $(() => {
    if (removed.value === true) return;
    removed.value = true;
    ctx.heights[toast.id] = 0;
    setTimeout(() => toastDismiss(toast.id), 400);
  });

  const dismissTimer = useTimer(dismiss$, toast.duration);

  const toastIndex = useComputed$(() => ctx.toasts.value.findIndex(({ id }) => id === toast.id));

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async ({ track }) => {
    const ref = track(() => absRef.value);
    if (!ref) return;
    requestAnimationFrame(() => {
      mounted.value = true;
      const baseHeight = ref.offsetHeight;
      ref.style.setProperty('--base-height', `${baseHeight}`);
      ctx.heights[toast.id] = baseHeight;
    });
    await dismissTimer.start();
  });

  useTask$(({ track }) => {
    const idx = track(() => toastIndex.value);
    const toastsLength = track(() => ctx.toasts.value.length);
    if (toastsLength > 3 && idx < toastsLength - 3) dismiss$();
  });

  useTask$(({ track }) => {
    const hovered = track(() => isOpenedToast);
    if (hovered === true) dismissTimer.pause();
    else dismissTimer.resume();
  });

  const yPlacement = useComputed$(() => {
    const toasts = ctx.toasts.value;
    const before = toasts.slice(toastIndex.value + 1);
    return before
      .map((a) => ctx.heights[a.id])
      .filter(Boolean)
      .reduce((a, b) => a + b + ctx.options.gap, 0);
  });

  return (
    <li
      ref={absRef}
      data-onwo-toast
      data-mounted={mounted.value}
      data-removed={removed.value}
      data-type={toast.type}
      class="bg-paper border border-line flex items-start text-sm py-3 px-4 rounded-md shadow-sm w-full gap-1"
      style={{
        '--base-y': yPlacement.value + 'px',
        '--index': `${toastIndex.value}`,
      }}
    >
      <ToastIconByType toastType={toast.type} />
      <div>
        <h4 class="font-semibold mt-[1px]">{toast.title}</h4>
        {toast.description && <p>{toast.description}</p>}
      </div>
      <button
        class="absolute top-2 right-2 text-graphite w-[20px] h-[20px] flex items-center justify-center rounded-sm hover:bg-parchment"
        onClick$={dismiss$}
      >
        <ControlsCloseSmallIcon size="sm" />
      </button>
    </li>
  );
});

type ToastIconByTypeProps = {
  toastType: ToastType;
};

const ToastIconByType = (props: ToastIconByTypeProps) => {
  return (
    <div class="w-[24px]">
      {props.toastType === 'success' && <GenericCheckRoundedIcon class="text-success-80" />}
      {props.toastType === 'error' && <NotificationsErrorIcon class="text-error-80" />}
      {props.toastType === 'info' && <NotificationsQuestionMarkIcon class="text-[blue]" />}
      {props.toastType === 'warning' && <SoftwareBugIcon class="text-warn" />}
    </div>
  );
};
