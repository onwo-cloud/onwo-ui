import { $, useOnDocument, useSignal, type QRL } from '@builder.io/qwik';

export type FocusOutsideEvent = CustomEvent<{ originalEvent: FocusEvent }>;

type FocusOutsideRet = {
  onFocus$: QRL<() => void>;
  onBlur$: QRL<() => void>;
};

export function useFocusOutside(
  onFocusOutside?: QRL<(event: FocusOutsideEvent) => void>,
): FocusOutsideRet {
  const isFocusInsideTreeRef = useSignal<boolean>(false);

  useOnDocument(
    'focusin',
    $((event: FocusEvent) => {
      if (event.target && !isFocusInsideTreeRef.value) {
        const eventDetail = { originalEvent: event };
        handleAndDispatchCustomEvent('focus-outside', onFocusOutside, eventDetail);
      }
    }),
  );

  return {
    // eslint-disable-next-line sonarjs/no-nested-assignment, sonarjs/void-use
    onFocus$: $(() => void (isFocusInsideTreeRef.value = true)),
    // eslint-disable-next-line sonarjs/no-nested-assignment, sonarjs/void-use
    onBlur$: $(() => void (isFocusInsideTreeRef.value = false)),
  };
}

export function handleAndDispatchCustomEvent<E extends CustomEvent, OriginalEvent extends Event>(
  name: string,
  handler: ((event: E) => void) | undefined,
  detail: { originalEvent: OriginalEvent } & (E extends CustomEvent<infer D> ? D : never),
) {
  const target = detail.originalEvent.target;
  const event = new CustomEvent(name, { bubbles: false, cancelable: true, detail });
  if (handler) target.addEventListener(name, handler as EventListener, { once: true });

  target.dispatchEvent(event);
}
