import { $, type QRL, type QwikHTMLElements } from '@builder.io/qwik';

type ButtonElement = QwikHTMLElements['button'];
export type ClickExtensionProps = Pick<ButtonElement, 'onClick$' | 'onPointerDown$'>;

export const clickExtension = (props: ClickExtensionProps | null, cb: QRL<() => void>) => ({
  onPointerDown$: $((event: PointerEvent) => {
    cb();
    (props?.onPointerDown$ as any)?.(event);
  }),
  onClick$: $((event: PointerEvent) => {
    const isKeyboardEvent =
      // Main check: click events from keyboard have detail=0
      event.detail === 0 &&
      // Double-check: mouse clicks have screen coordinates
      event.screenX === 0 &&
      event.screenY === 0;

    if (isKeyboardEvent) {
      cb();
    }
    (props?.onClick$ as any)?.(event);
  }),
});
