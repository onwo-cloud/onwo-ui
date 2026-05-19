import { Micro } from 'effect';
import { dual } from 'effect/Function';
import type { Concurrency } from 'effect/Types';

// Re-export all of the original Micro functionality
export * from 'effect/Micro';

export type Failable<T> = Micro.Micro<T, unknown, never>;

/**
 * For each element of the provided iterable, run the effect and collect the
 * results.
 *
 * If the `discard` option is set to `true`, the results will be discarded and
 * the effect will return `void`.
 *
 * The `concurrency` option can be set to control how many effects are run
 * concurrently. By default, the effects are run sequentially.
 *
 * @since 3.4.0
 * @experimental
 * @category collecting & elements
 */
export const forEach: {
  <A, B, E, R>(
    f: (a: A, index: number) => Micro.Micro<B, E, R>,
    options?: {
      readonly concurrency?: Concurrency | undefined;
      readonly discard?: false | undefined;
    },
  ): (iterable: Iterable<A>) => Micro.Micro<Array<B>, E, R>;
  <A, B, E, R>(
    f: (a: A, index: number) => Micro.Micro<B, E, R>,
    options: {
      readonly concurrency?: Concurrency | undefined;
      readonly discard: true;
    },
  ): (iterable: Iterable<A>) => Micro.Micro<void, E, R>;
  <A, B, E, R>(
    iterable: Iterable<A>,
    f: (a: A, index: number) => Micro.Micro<B, E, R>,
    options?: {
      readonly concurrency?: Concurrency | undefined;
      readonly discard?: false | undefined;
    },
  ): Micro.Micro<Array<B>, E, R>;
  <A, B, E, R>(
    iterable: Iterable<A>,
    f: (a: A, index: number) => Micro.Micro<B, E, R>,
    options: {
      readonly concurrency?: Concurrency | undefined;
      readonly discard: true;
    },
  ): Micro.Micro<void, E, R>;
} = dual(
  (args) => Symbol.iterator in Object(args[0]),
  <A, B, E, R>(
    iterable: Iterable<A>,
    f: (a: A, index: number) => Micro.Micro<B, E, R>,
    options?: {
      readonly concurrency?: Concurrency | undefined;
      readonly discard?: boolean | undefined;
    },
  ): Micro.Micro<any, E, R> => Micro.forEach(iterable, f, options as any),
);

export const catchTags: {
  /**
   * Handles multiple errors in a single block of code using their `_tag` field for Micro.
   */
  <
    E,
    Cases extends {
      [K in Extract<E, { _tag: string }>['_tag']]+?: (
        error: Extract<E, { _tag: K }>,
      ) => Micro.Micro<any, any, any>;
    },
  >(
    cases: Cases,
  ): <A, R>(
    self: Micro.Micro<A, E, R>,
  ) => Micro.Micro<
    | A
    | {
        [K in keyof Cases]: Cases[K] extends (...args: any[]) => Micro.Micro<infer A, any, any>
          ? A
          : never;
      }[keyof Cases],
    | Exclude<E, { _tag: keyof Cases }>
    | {
        [K in keyof Cases]: Cases[K] extends (...args: any[]) => Micro.Micro<any, infer E, any>
          ? E
          : never;
      }[keyof Cases],
    | R
    | {
        [K in keyof Cases]: Cases[K] extends (...args: any[]) => Micro.Micro<any, any, infer R>
          ? R
          : never;
      }[keyof Cases]
  >;

  <
    A,
    E,
    R,
    Cases extends {
      [K in Extract<E, { _tag: string }>['_tag']]+?: (
        error: Extract<E, { _tag: K }>,
      ) => Micro.Micro<any, any, any>;
    },
  >(
    self: Micro.Micro<A, E, R>,
    cases: Cases,
  ): Micro.Micro<
    | A
    | {
        [K in keyof Cases]: Cases[K] extends (...args: any[]) => Micro.Micro<infer A, any, any>
          ? A
          : never;
      }[keyof Cases],
    | Exclude<E, { _tag: keyof Cases }>
    | {
        [K in keyof Cases]: Cases[K] extends (...args: any[]) => Micro.Micro<any, infer E, any>
          ? E
          : never;
      }[keyof Cases],
    | R
    | {
        [K in keyof Cases]: Cases[K] extends (...args: any[]) => Micro.Micro<any, any, infer R>
          ? R
          : never;
      }[keyof Cases]
  >;
} = dual(
  2,
  <A, E, R, Cases extends Record<string, (e: any) => Micro.Micro<any, any, any>>>(
    self: Micro.Micro<A, E, R>,
    cases: Cases,
  ): Micro.Micro<any, any, any> =>
    Micro.catchIf(
      self,
      // Predicate: check if error is an object with a _tag that exists in our cases
      (e): e is Extract<E, { _tag: keyof Cases }> =>
        typeof e === 'object' &&
        e !== null &&
        '_tag' in e &&
        typeof (e as any)._tag === 'string' &&
        (e as any)._tag in cases,
      // Handler: invoke the specific case
      (e) => cases[(e as any)._tag](e),
    ),
);
