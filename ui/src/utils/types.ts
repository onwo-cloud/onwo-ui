import type { CSSProperties, JSXOutput, PropsOf, QwikHTMLElements } from '@builder.io/qwik';

export type Classes<T extends string> = Partial<Record<T, string>>;

// eslint-disable-next-line sonarjs/no-useless-intersection
export type Prettify<T> = { [K in keyof T]: T[K] } & {};

export type ExactlyOne<T, K extends keyof T = keyof T> = Prettify<
  {
    [P in K]: { [Q in P]: T[P] } & { [Q in Exclude<K, P>]?: never };
  }[K]
>;

export type Props<T extends (props: unknown) => JSXOutput> = Parameters<T>[0];

export type Primitive<T extends keyof QwikHTMLElements> = Omit<QwikHTMLElements[T], 'style'> & {
  style?: CSSProperties;
};
