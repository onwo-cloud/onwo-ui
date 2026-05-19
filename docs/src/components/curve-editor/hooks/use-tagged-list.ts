import { useStore, useTask$, type Signal } from '@builder.io/qwik';

export type WithId<T> = T & { id: string };

/**
 * Transforms a Signal of items into a Store Map (Record<id, item>).
 * Generates IDs for items automatically.
 */
export const useTaggedList = <T extends object>(
  source: Signal<readonly T[]>,
): Record<string, WithId<T>> => {
  const store = useStore<Record<string, WithId<T>>>({});

  useTask$(({ track }) => {
    const rawItems = track(() => source.value);

    // 1. Clear current map
    for (const key in store) {
      delete store[key];
    }

    // 2. Repopulate with new IDs
    for (const item of rawItems) {
      const id = crypto.randomUUID();
      store[id] = { ...item, id } as WithId<T>;
    }
  });

  return store;
};
