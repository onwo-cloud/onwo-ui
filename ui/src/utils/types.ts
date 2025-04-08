import type { CSSProperties, JSXOutput, QwikHTMLElements } from '@builder.io/qwik';

export type Classes<T extends string> = Partial<Record<T, string>>;

// eslint-disable-next-line sonarjs/no-useless-intersection
export type Prettify<T> = { [K in keyof T]: T[K] } & {};

export type Props<T extends (props: unknown) => JSXOutput> = Parameters<T>[0];

export type Primitive<T extends keyof QwikHTMLElements> = Omit<QwikHTMLElements[T], 'style'> & {
  // styles merging is not easy so we enforce it to be an object usage
  style?: CSSProperties;
};

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void
  ? I
  : never;

export type OneKeyOf<T, K extends keyof T = keyof T> = Prettify<
  {
    [P in K]: { [Q in P]: T[P] } & { [Q in Exclude<K, P>]?: never };
  }[K]
>;

export type OneObjectOf<T extends Record<any, unknown>[]> = {
  [K in keyof T]: T[K] & {
    [P in Exclude<keyof UnionToIntersection<T[number]>, keyof T[K]>]?: undefined;
  };
}[number];
