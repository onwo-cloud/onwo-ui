import type { JSXOutput, QRL } from '@builder.io/qwik';
import {
  component$,
  $,
  Slot,
  useSignal,
  useStore,
  useComputed$,
  useResource$,
  Resource,
} from '@builder.io/qwik';
import { useDebounced } from '~/hooks';
import type { Toast, ToastPosition, XPosition, YPosition } from './context';
import { ToasterContext } from './context';
import { useToasterStyles } from './styles';
import type { ToastItemProps } from './toast-item';

export const TOAST_LIFETIME = 3000;
export const TOAST_WIDTH = 356;
export const TOAST_GAP = 14;
export const TOAST_OFFSET = 32;

export interface ToasterProps {
  render$: QRL<(data: ToastItemProps) => JSXOutput>;
  position?: ToastPosition;
  duration?: number;
  width?: number;
  gap?: number;
  offset?: number;
}

type ToastRenderProps = {
  render$: QRL<(data: ToastItemProps) => JSXOutput>;
  toast: Toast;
};

const ToastRender = component$(({ render$, toast }: ToastRenderProps) => {
  const child = useResource$(() => render$({ toast }));
  return <Resource value={child} onResolved={(data) => <>{data}</>} />;
});

export const Toaster = component$<ToasterProps>(({ render$, ...props }) => {
  useToasterStyles();
  const isOpenedToasts = useSignal<boolean>(false);
  const [yPosition, xPosition] = (props.position ?? 'bottom-right').split('-');
  const contextData = ToasterContext.useProvider({
    isOpenedToasts,
    toasts: useSignal([]),
    heights: useStore({}),
    options: {
      position: { y: yPosition as YPosition, x: xPosition as XPosition },
      duration: props.duration ?? TOAST_LIFETIME,
      width: props.width ?? TOAST_WIDTH,
      gap: props.gap ?? TOAST_GAP,
      offset: props.offset ?? TOAST_OFFSET,
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
        style={{
          '--width': `${props.width || TOAST_WIDTH}px`,
          '--margin': `${props.offset || TOAST_OFFSET}px`,
          '--toast-count': String(contextData.toasts.value.length),
          zIndex: 999_999,
          height: totalHeight.value + 'px',
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
