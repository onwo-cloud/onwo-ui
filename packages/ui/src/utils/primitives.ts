import type { QRLEventHandlerMulti, QRL } from '@builder.io/qwik';
import { $ } from '@builder.io/qwik';

type EventFn<E extends Event> =
  | QRL<(event: E, elem: Element) => void>
  | QRLEventHandlerMulti<E, any>;

export const composeEventHandlers = <E extends Event>(
  originalEventHandler?: EventFn<E>,
  ourEventHandler?: EventFn<E>,
  { checkForDefaultPrevented = true } = {},
) =>
  $(async (event: E, elem: Element) => {
    await callHandler(event, elem, originalEventHandler);

    if (checkForDefaultPrevented === false || !(event as unknown as Event).defaultPrevented) {
      await callHandler(event, elem, ourEventHandler);
    }
  });

const callHandler = async <E extends Event>(
  event: E,
  elem: Element,
  handler: QRLEventHandlerMulti<E, any>,
) => {
  if (Array.isArray(handler)) {
    await Promise.all(handler.map((handle) => callHandler(event, elem, handle)));
  } else if (handler) {
    await handler(event, elem);
  }
};
