import { dual } from 'effect/Function';

/**
 * Returns an array of names of the enumerable own properties of an object.
 *
 * @example
 * keys({ a: 1, b: 2 }) // ["a", "b"]
 */
export const keys: <T extends object>(self: T) => Array<Extract<keyof T, string>> =
  Object.keys as any;

/**
 * Returns an array of values of the enumerable own properties of an object.
 *
 * @example
 * values({ a: 1, b: 2 }) // [1, 2]
 */
export const values: <T extends object>(self: T) => Array<T[keyof T]> = Object.values as any;

/**
 * Returns an array of key/value pairs of the enumerable own properties of an object.
 *
 * @example
 * entries({ a: 1, b: 2 }) // [["a", 1], ["b", 2]]
 */
export const entries: <T extends object>(self: T) => Array<[Extract<keyof T, string>, T[keyof T]]> =
  Object.entries as any;

/**
 * Returns an object created by key-value entries.
 *
 * @example
 * fromEntries([["a", 1], ["b", 2]]) // { a: 1, b: 2 }
 */
export const fromEntries: {
  <K extends PropertyKey, V>(entries: Iterable<readonly [K, V]>): { [P in K]: V };
  (entries: Iterable<readonly any[]>): any;
} = Object.fromEntries;

/**
 * Determines whether an object has a property with the specified name.
 *
 * @example
 * hasOwn({ a: 1 }, "a") // true
 * pipe({ a: 1 }, hasOwn("a"))
 */
export const hasOwn: {
  (v: PropertyKey): (self: object) => boolean;
  (self: object, v: PropertyKey): boolean;
} = dual(2, (self: object, v: PropertyKey): boolean => Object.hasOwn(self, v));

/**
 * Groups members of an iterable according to the return value of the passed callback.
 *
 * @example
 * groupBy([1, 2, 3, 4], (n) => n % 2 === 0 ? "even" : "odd")
 * // { odd: [1, 3], even: [2, 4] }
 */
export const groupBy: {
  <T, K extends PropertyKey>(
    keySelector: (item: T, index: number) => K,
  ): (items: Iterable<T>) => Partial<Record<K, T[]>>;
  <T, K extends PropertyKey>(
    items: Iterable<T>,
    keySelector: (item: T, index: number) => K,
  ): Partial<Record<K, T[]>>;
} = dual(
  2,
  <T, K extends PropertyKey>(
    items: Iterable<T>,
    keySelector: (item: T, index: number) => K,
  ): Partial<Record<K, T[]>> => (Object as any).groupBy(items, keySelector),
);
