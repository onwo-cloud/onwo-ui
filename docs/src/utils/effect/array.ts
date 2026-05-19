import { Array } from 'effect';
import { dual } from 'effect/Function';

export const forEach: {
  <T, U>(f: (value: T, index: number, array: readonly T[]) => U): (self: readonly T[]) => U[];
  <T, U>(self: readonly T[], f: (value: T, index: number, array: readonly T[]) => U): U[];
} = dual(
  2,
  <T, U>(self: readonly T[], f: (value: T, index: number, array: readonly T[]) => U): U[] =>
    self.map(f),
);

/**
 * Returns the item located at the specified index.
 * A negative index will count back from the last item.
 *
 * @example
 * at([1, 2, 3], -1) // 3
 */
export const at: {
  (index: number): <T>(self: readonly T[]) => T | undefined;
  <T>(self: readonly T[], index: number): T | undefined;
} = dual(2, <T>(self: readonly T[], index: number): T | undefined => self.at(index));

/**
 * Combines two or more arrays. Returns a new array.
 */
export const concat: {
  <T, S extends readonly any[]>(...items: S): (self: readonly T[]) => T[] | S[number];
  <T, S extends readonly any[]>(self: readonly T[], ...items: S): T[] | S[number];
} = dual(
  (args) => Array.isArray(args[0]),
  <T>(self: readonly T[], ...items: any[]): any[] => self.concat(...items),
);

/**
 * Determines whether an array includes a certain element.
 */
export const includes: {
  <T>(searchElement: T, fromIndex?: number): (self: readonly T[]) => boolean;
  <T>(self: readonly T[], searchElement: T, fromIndex?: number): boolean;
} = dual(2, <T>(self: readonly T[], searchElement: T, fromIndex?: number): boolean =>
  self.includes(searchElement, fromIndex),
);

/**
 * Returns the index of the first occurrence of a value, or -1 if not present.
 */
export const indexOf: {
  <T>(searchElement: T, fromIndex?: number): (self: readonly T[]) => number;
  <T>(self: readonly T[], searchElement: T, fromIndex?: number): number;
} = dual(2, <T>(self: readonly T[], searchElement: T, fromIndex?: number): number =>
  self.indexOf(searchElement, fromIndex),
);

/**
 * Returns the index of the last occurrence of a value, or -1 if not present.
 */
export const lastIndexOf: {
  <T>(searchElement: T, fromIndex?: number): (self: readonly T[]) => number;
  <T>(self: readonly T[], searchElement: T, fromIndex?: number): number;
} = dual(2, <T>(self: readonly T[], searchElement: T, fromIndex?: number): number =>
  self.lastIndexOf(searchElement, fromIndex),
);

/**
 * Adds all elements of an array into a string, separated by the specified separator.
 */
export const join: {
  (separator?: string): (self: readonly any[]) => string;
  (self: readonly any[], separator?: string): string;
} = dual(
  (args) => Array.isArray(args[0]),
  (self: readonly any[], separator?: string): string => self.join(separator),
);

/**
 * Returns a copy of a section of an array.
 */
export const slice: {
  (start?: number, end?: number): <T>(self: readonly T[]) => T[];
  <T>(self: readonly T[], start?: number, end?: number): T[];
} = dual(
  (args) => Array.isArray(args[0]),
  <T>(self: readonly T[], start?: number, end?: number): T[] => self.slice(start, end),
);

export const some: {
  <T>(
    predicate: (value: T, index: number, array: readonly T[]) => unknown,
  ): (self: readonly T[]) => boolean;
  <T>(
    self: readonly T[],
    predicate: (value: T, index: number, array: readonly T[]) => unknown,
  ): boolean;
} = dual(
  2,
  <T>(
    self: readonly T[],
    predicate: (value: T, index: number, array: readonly T[]) => unknown,
  ): boolean => self.some(predicate as any),
);

export const filter: {
  <T, S extends T>(
    predicate: (value: T, index: number, array: readonly T[]) => value is S,
  ): (self: readonly T[]) => S[];
  <T>(
    predicate: (value: T, index: number, array: readonly T[]) => unknown,
  ): (self: readonly T[]) => T[];
  <T, S extends T>(
    self: readonly T[],
    predicate: (value: T, index: number, array: readonly T[]) => value is S,
  ): S[];
  <T>(
    self: readonly T[],
    predicate: (value: T, index: number, array: readonly T[]) => unknown,
  ): T[];
} = dual(
  2,
  <T>(
    self: readonly T[],
    predicate: (value: T, index: number, array: readonly T[]) => unknown,
  ): T[] => self.filter(predicate as any),
);

export const find: {
  <T, S extends T>(
    predicate: (value: T, index: number, obj: readonly T[]) => value is S,
  ): (self: readonly T[]) => S | undefined;
  <T>(
    predicate: (value: T, index: number, obj: readonly T[]) => unknown,
  ): (self: readonly T[]) => T | undefined;
  <T, S extends T>(
    self: readonly T[],
    predicate: (value: T, index: number, obj: readonly T[]) => value is S,
  ): S | undefined;
  <T>(
    self: readonly T[],
    predicate: (value: T, index: number, obj: readonly T[]) => unknown,
  ): T | undefined;
} = dual(
  2,
  <T>(
    self: readonly T[],
    predicate: (value: T, index: number, obj: readonly T[]) => unknown,
  ): T | undefined => self.find(predicate as any),
);

export const findIndex: {
  <T>(
    predicate: (value: T, index: number, obj: readonly T[]) => unknown,
  ): (self: readonly T[]) => number;
  <T>(
    self: readonly T[],
    predicate: (value: T, index: number, obj: readonly T[]) => unknown,
  ): number;
} = dual(
  2,
  <T>(
    self: readonly T[],
    predicate: (value: T, index: number, obj: readonly T[]) => unknown,
  ): number => self.findIndex(predicate as any),
);

export const reduce: {
  <T, U>(
    initialValue: U,
    callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U,
  ): (self: readonly T[]) => U;
  <T, U>(
    self: readonly T[],
    initialValue: U,
    callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U,
  ): U;
} = dual(
  3,
  <T, U>(
    self: readonly T[],
    initialValue: U,
    callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: readonly T[]) => U,
  ): U => self.reduce(callbackfn, initialValue),
);

export const flat: {
  <D extends number = 1>(depth?: D): <T>(self: readonly T[]) => FlatArray<T[], D>[];
  <T, D extends number = 1>(self: readonly T[], depth?: D): FlatArray<T[], D>[];
} = dual(
  (args) => Array.isArray(args[0]),
  <T, D extends number = 1>(self: readonly T[], depth?: D): FlatArray<T[], D>[] =>
    self.flat(depth) as any,
);

export const flatMap: {
  <T, U>(
    callback: (value: T, index: number, array: readonly T[]) => U | ReadonlyArray<U>,
  ): (self: readonly T[]) => U[];
  <T, U>(
    self: readonly T[],
    callback: (value: T, index: number, array: readonly T[]) => U | ReadonlyArray<U>,
  ): U[];
} = dual(
  2,
  <T, U>(
    self: readonly T[],
    callback: (value: T, index: number, array: readonly T[]) => U | ReadonlyArray<U>,
  ): U[] => self.flatMap(callback),
);

// -----------------------------------------------------------------------------
// ES2023 Polyfilled Methods (Immutable / Change by Copy)
// -----------------------------------------------------------------------------

/**
 * Returns the value of the last element in the array where predicate is true.
 */
export const findLast: {
  <T, S extends T>(
    predicate: (value: T, index: number, array: readonly T[]) => value is S,
  ): (self: readonly T[]) => S | undefined;
  <T>(
    predicate: (value: T, index: number, array: readonly T[]) => unknown,
  ): (self: readonly T[]) => T | undefined;
  <T, S extends T>(
    self: readonly T[],
    predicate: (value: T, index: number, array: readonly T[]) => value is S,
  ): S | undefined;
  <T>(
    self: readonly T[],
    predicate: (value: T, index: number, array: readonly T[]) => unknown,
  ): T | undefined;
} = dual(
  2,
  <T>(
    self: readonly T[],
    predicate: (value: T, index: number, array: readonly T[]) => unknown,
  ): T | undefined => {
    if ('findLast' in self) return (self as any).findLast(predicate);
    for (let i = self.length - 1; i >= 0; i--) {
      if (predicate(self[i], i, self)) return self[i];
    }
    return undefined;
  },
);

/**
 * Returns the index of the last element where predicate is true, and -1 otherwise.
 */
export const findLastIndex: {
  <T>(
    predicate: (value: T, index: number, array: readonly T[]) => unknown,
  ): (self: readonly T[]) => number;
  <T>(
    self: readonly T[],
    predicate: (value: T, index: number, array: readonly T[]) => unknown,
  ): number;
} = dual(
  2,
  <T>(
    self: readonly T[],
    predicate: (value: T, index: number, array: readonly T[]) => unknown,
  ): number => {
    if ('findLastIndex' in self) return (self as any).findLastIndex(predicate);
    for (let i = self.length - 1; i >= 0; i--) {
      if (predicate(self[i], i, self)) return i;
    }
    return -1;
  },
);

/**
 * Immutable: Returns a copy of an array with its elements reversed.
 */
export const toReversed = <T>(self: readonly T[]): T[] => {
  if ('toReversed' in self) return (self as any).toReversed();
  return [...self].reverse();
};

/**
 * Immutable: Returns a copy of an array with its elements sorted.
 */
export const toSorted: {
  <T>(compareFn?: (a: T, b: T) => number): (self: readonly T[]) => T[];
  <T>(self: readonly T[], compareFn?: (a: T, b: T) => number): T[];
} = dual(
  (args) => Array.isArray(args[0]),
  <T>(self: readonly T[], compareFn?: (a: T, b: T) => number): T[] => {
    if ('toSorted' in self) return (self as any).toSorted(compareFn);
    return [...self].sort(compareFn);
  },
);

/**
 * Immutable: Copies an array and removes/inserts elements.
 */
export const toSpliced: {
  (start: number, deleteCount?: number, ...items: any[]): <T>(self: readonly T[]) => T[];
  <T>(self: readonly T[], start: number, deleteCount?: number, ...items: T[]): T[];
} = dual(
  (args) => Array.isArray(args[0]),
  <T>(self: readonly T[], start: number, deleteCount?: number, ...items: T[]): T[] => {
    if ('toSpliced' in self) return (self as any).toSpliced(start, deleteCount, ...items);
    const copy = [...self];
    copy.splice(start, deleteCount ?? 0, ...items);
    return copy;
  },
);

/**
 * Immutable: Copies an array, then overwrites the value at the provided index.
 */
export const withAt: {
  <T>(index: number, value: T): (self: readonly T[]) => T[];
  <T>(self: readonly T[], index: number, value: T): T[];
} = dual(3, <T>(self: readonly T[], index: number, value: T): T[] => {
  if ('with' in self) return (self as any).with(index, value);
  const copy = [...self];
  const i = index < 0 ? copy.length + index : index;
  copy[i] = value;
  return copy;
});
