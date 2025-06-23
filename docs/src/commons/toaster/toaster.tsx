import { component$, $, Slot, useSignal, useStore, useComputed$ } from '@builder.io/qwik';
import { useDebounced } from '@onwo/primitives';
import type { ToastPosition, XPosition, YPosition } from './context';
import { useToasterContextProvider } from './context';
import { useToasterStyles } from './styles';
import { ToastItem } from './toast-item';

export const TOAST_LIFETIME = 3000;
export const TOAST_WIDTH = 356;
export const TOAST_GAP = 14;
export const TOAST_OFFSET = 32;

export interface ToasterProps {
  position?: ToastPosition;
  duration?: number;
  width?: number;
  gap?: number;
  offset?: number;
}

export const Toaster = component$<ToasterProps>((props) => {
  useToasterStyles();
  const isOpenedToasts = useSignal<boolean>(false);
  const [yPosition, xPosition] = (props.position ?? 'bottom-right').split('-');
  const contextData = useToasterContextProvider({
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
          {contextData.toasts.value.map((t) => (
            <ToastItem
              key={t.id}
              isOpenedToast={!!isOpenedToasts.value}
              toast={{
                ...t,
                duration: t.duration ?? props.duration ?? TOAST_LIFETIME,
              }}
            >
              {typeof t.title !== 'string' && <div q:slot="title">{t.title}</div>}
              {typeof t.description !== 'string' && <div q:slot="description">{t.description}</div>}
            </ToastItem>
          ))}
        </ol>
      </section>
      <Slot />
    </>
  );
});
