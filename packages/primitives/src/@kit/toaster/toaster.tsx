import type { JSXOutput, QRL } from '@qwik.dev/core';
import {
  component$,
  $,
  Slot,
  useSignal,
  useStore,
  useComputed$,
} from '@qwik.dev/core';
import { OwPropsOf } from '~primitives/index';
import { useDebounced } from '~primitives/hooks';

import type { Toast, ToastPosition, XPosition, YPosition } from './context';
import { ToasterContext } from './context';
import { useToasterStyles } from './styles';
import type { ToastItemProps } from './toast-item';

export const TOAST_LIFETIME = 3000;
export const TOAST_WIDTH = 356;
export const TOAST_GAP = 14;
export const TOAST_OFFSET = 32;

export type ToasterProps = {
  render$: QRL<(data: ToastItemProps) => JSXOutput>;
  position?: ToastPosition;
  duration?: number;
  width?: number;
  gap?: number;
  offset?: number;
  display?: 'fixed' | 'absolute';
} & OwPropsOf<'section'>;

type ToastRenderProps = {
  render$: QRL<(data: ToastItemProps) => JSXOutput>;
  toast: Toast;
};

const ToastRender = component$(({ render$, toast }: ToastRenderProps) => {
  const toastItem = useComputed$(async () => {
    console.log('in computed');
    try {
      console.log('there');
      return await render$({ toast });
    } catch (error: any) {
      return <div>Error: {error?.message ?? String(error)}</div>;
    }
  });

  return <p>{toastItem.value}</p>;
});

export const Toaster = component$<ToasterProps>(({
  render$,
  width,
  offset,
  duration,
  gap,
  display = 'fixed',
  style,
  ...props
}) => {
  useToasterStyles();
  const isOpenedToasts = useSignal<boolean>(false);
  const [yPosition, xPosition] = (props.position ?? 'bottom-right').split('-');
  const contextData = ToasterContext.useProvider({
    isOpenedToasts,
    toasts: useSignal([]),
    heights: useStore({}),
    options: {
      position: { y: yPosition as YPosition, x: xPosition as XPosition },
      duration: duration ?? TOAST_LIFETIME,
      width: width ?? TOAST_WIDTH,
      gap: gap ?? TOAST_GAP,
      offset: offset ?? TOAST_OFFSET,
    },
  });

  const [onHoverEnd$, cancel$] = useDebounced(
    $(() => (isOpenedToasts.value = false)),
    100,
  );

  // "mouse-over" area of the toast.
  const totalHeight = useComputed$(() => {
    const toasts = contextData.toasts.value;
    const heights = contextData.heights;
    if (isOpenedToasts.value) {
      return toasts.map((a) => heights[a.id]).reduce((a, b) => a + b + contextData.options.gap, 0);
    } else {
      const toast = toasts.at(-1);
      if (!toast) return 0;
      const flatHeight = heights[toast.id];
      return flatHeight + (toasts.length - 1) * 8;
    }
  });

  return (
    <>
      <section
        aria-label="Notifications"
        tabIndex={-1}
        onMouseEnter$={() => {
          cancel$();
          isOpenedToasts.value = true;
        }}
        onMouseLeave$={onHoverEnd$}
        data-onwo-toaster
        data-y-position={yPosition}
        data-x-position={xPosition}
        data-hover={isOpenedToasts.value}
        {...props}
        style={{
          position: display,
          '--width': `${width || TOAST_WIDTH}px`,
          '--margin': `${offset || TOAST_OFFSET}px`,
          '--toast-count': String(contextData.toasts.value.length),
          zIndex: 999_999,
          height: totalHeight.value + 'px',
          ...style
        }}
      >
        <ol>
          {contextData.toasts.value.map((toast) => (
            <ToastRender key={toast.id} render$={render$} toast={toast} />
          ))}
        </ol>
      </section>
      <Slot />
    </>
  );
});
