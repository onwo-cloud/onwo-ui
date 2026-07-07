import type { QRL} from '@qwik.dev/core';
import { type Signal, useSignal, useVisibleTask$ } from '@qwik.dev/core';

// Helper types to unwrap Signal<T> to T
type Unwrapped<T> = T extends Signal<infer U> ? U : never;

type UnwrapDeps<T> = T extends readonly Signal<any>[]
  ? { [K in keyof T]: Unwrapped<T[K]> } // Handle Arrays/Tuples
  : T extends Record<string, Signal<any>>
    ? { [K in keyof T]: Unwrapped<T[K]> } // Handle Objects
    : never;

export const useOnChange = <T extends Record<string, Signal<any>> | readonly Signal<any>[]>(
  deps: T,
  fn: QRL<(values: UnwrapDeps<T>) => void>,
) => {
  const isInit = useSignal(false);

  useVisibleTask$(
    ({ track }) => {
      // Track and Unwrap values
      let values: any;

      if (Array.isArray(deps)) {
        values = deps.map((sig) => track(() => sig.value));
      } else {
        values = {};
        for (const key in deps) {
          // @ts-ignore
          values[key] = track(() => deps[key].value);
        }
      }

      // Skip mount
      if (!isInit.value) {
        console.info(values);
        isInit.value = true;
        return;
      }

      fn(values);
    },
    { strategy: 'document-idle' },
  );
};
