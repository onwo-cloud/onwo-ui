import type { Prettify } from './colors.js';

type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export function typedEntries<V extends Record<any, any>>(v: V): Prettify<Entries<V>> {
  return Object.entries(v) as Entries<V>;
}
