import type { JSXOutput } from '@qwik.dev/core';

export type Prettify<T> = { [K in keyof T]: T[K] } & {};

export type Props<T extends (props: unknown) => JSXOutput> = Parameters<T>[0];

type KeysOfUnion<T> = T extends any ? keyof T : never;

/* Produces a discriminated union type between an object key.
 *
 * EXAMPLE:
 *
 * OneKeyOf<{ a: A, b: B }>
 *  ^? { a: A, b?: undefined } | { a?: undefined, b: B }
 */
export type OneKeyOf<T, K extends keyof T = keyof T> = Prettify<
  {
    [P in K]: { [Q in P]: T[P] } & { [Q in Exclude<K, P>]?: never };
  }[K]
>;

/* Produces a discriminated union type between a tuple of objects.
 *
 * EXAMPLE:
 *
 * OneObjectOf<[{ a: A, c: C }, { b: B, c: C }]>
 *  ^? { a: A, c: C, b?: undefined } |
 *     { b: B, c: C, a?: undefined }
 */
export type OneObjectOf<T extends Record<any, unknown>[]> = Prettify<
  {
    [K in keyof T]: T[K] & {
      [P in Exclude<KeysOfUnion<T[number]>, keyof T[K]>]?: never;
    };
  }[number]
>;

export type OptionalKeys<Type> = Type extends object
  ? keyof {
      [Key in keyof Type as Type extends Required<Pick<Type, Key>> ? never : Key]: never;
    }
  : never;

export type MarkOptional<Type, Keys extends keyof Type> = Type extends Type
  ? Prettify<Partial<Type> & Required<Omit<Type, Keys | OptionalKeys<Type>>>>
  : never;

/* Opaque */
type StringLiteral<Type> = Type extends string ? (string extends Type ? never : Type) : never;

declare const __OPAQUE_TYPE__: unique symbol;

export type WithOpaque<Token extends string> = {
  readonly [__OPAQUE_TYPE__]: Token;
};

export type Opaque<Type, Token extends string> =
  Token extends StringLiteral<Token> ? Type & WithOpaque<Token> : never;
