import type { CSSProperties, JSXOutput, QwikHTMLElements } from '@builder.io/qwik';

export type Classes<T extends string> = Partial<Record<T, string>>;

export type Prettify<T> = { [K in keyof T]: T[K] } & {};

export type Props<T extends (props: unknown) => JSXOutput> = Parameters<T>[0];

export type Primitive<T extends keyof QwikHTMLElements> = Omit<QwikHTMLElements[T], 'style'> & {
  // styles merging is not easy so we enforce it to be an object usage
  style?: CSSProperties;
};

export type OneKeyOfInner<T, K extends keyof T = keyof T> = {
  [P in K]: { [Q in P]: T[P] } & { [Q in Exclude<K, P>]?: never };
}[K];

export type OneKeyOf<T> = OneKeyOfInner<T>;

// Helper types
type KeysOfUnion<T> = T extends any ? keyof T : never;

export type OneObjectOf<T extends Record<any, unknown>[]> = {
  [K in keyof T]: T[K] & {
    [P in Exclude<KeysOfUnion<T[number]>, keyof T[K]>]?: never;
  };
}[number];
