import type { QRL, Signal } from '@builder.io/qwik';
import { useSignal, $ } from '@builder.io/qwik';

export const useDebounced = (
  fn: QRL<(args: any) => unknown>,
  delay: number | QRL<() => number>,
) => {
  const timeoutId = useSignal<number>();

  const call = $(async (args?: any) => {
    clearTimeout(timeoutId.value);
    let d: number;

    console.info('In call');
    if (typeof delay === 'number') {
      d = delay;
    } else {
      d = await delay();
    }
    timeoutId.value = Number(setTimeout(() => fn(args), d));
  });

  const cancel = $(() => {
    clearTimeout(timeoutId.value);
  });

  return [call, cancel];
};

export const useDebouncedSignal = (delay: number): [Signal<boolean>, QRL<() => void>] => {
  const timeoutId = useSignal<number>();
  const active = useSignal<boolean>(false);

  const call = $(() => {
    active.value = true;
    clearTimeout(timeoutId.value);
    timeoutId.value = Number(
      setTimeout(() => {
        active.value = false;
      }, delay),
    );
  });

  return [active, call];
};
