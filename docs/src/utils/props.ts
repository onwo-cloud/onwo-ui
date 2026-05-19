import type { IntrinsicElements, PropsOf, QRL } from '@builder.io/qwik';

import { OnEvents } from './types';

/**
 * An edge-case utility utility type that removes raw functions from a type union.
 *
 * It works by checking if a function type T has the '__brand__QRL__' property.
 * If it does, it's a QRL and is kept. If it's a function without that brand,
 * it's a raw function and is replaced with `never`, effectively removing it.
 * Non-function types are preserved.
 */
type OnlyQRL<T> = T extends (...args: any[]) => any
  ? '__brand__QRL__' extends keyof T
    ? T // It's a function with the QRL brand, so keep it.
    : never // It's a raw function, so exclude it.
  : T; // It's not a function (e.g., array, null, undefined), so keep it.

type MapOnlyQRL<T> = { [K in keyof T]: OnlyQRL<T[K]> };

type CompEvents<C extends keyof IntrinsicElements> = Partial<MapOnlyQRL<OnEvents<PropsOf<C>>>>;

/**
 * Merges two sets of component event handlers.
 * If an event exists in both sets, the handlers are combined into an array.
 */
export const mergeOnEvents = <C extends keyof IntrinsicElements>(
  left: CompEvents<C>,
  right: CompEvents<C>,
): CompEvents<C> => {
  const mergedEvents = { ...left };

  for (const key in right) {
    if (Object.prototype.hasOwnProperty.call(right, key)) {
      const leftEvent = mergedEvents[key as keyof CompEvents<C>];
      const rightEvent = right[key as keyof CompEvents<C>];

      if (leftEvent) {
        const leftArray = Array.isArray(leftEvent) ? leftEvent : [leftEvent];
        const rightArray = Array.isArray(rightEvent) ? rightEvent : [rightEvent];
        (mergedEvents as any)[key] = [...leftArray, ...rightArray];
      } else {
        (mergedEvents as any)[key] = rightEvent;
      }
    }
  }

  return mergedEvents;
};
