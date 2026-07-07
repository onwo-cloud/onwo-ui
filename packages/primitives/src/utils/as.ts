import type {
  Component,
  CSSProperties,
  FunctionComponent,
  JSXOutput,
  QwikHTMLElements,
  QwikIntrinsicElements,
} from '@qwik.dev/core';

export type Primitive<T extends keyof QwikHTMLElements> = Omit<QwikHTMLElements[T], 'style'> & {
  style?: CSSProperties;
};

export type JSXChildren = QwikIntrinsicElements['div']['children'];
export type As = keyof QwikHTMLElements;

type Comp<V, T extends As> = (
  props: V & Omit<Primitive<T>, keyof V> & { As: FunctionComponent<Primitive<T>> },
) => JSXOutput;

export type WithAsProps<V, T extends As = As> = V &
  Omit<Primitive<T>, keyof V> & {
    as?: T;
  };

declare const _props: unique symbol;

export type PolymorphicComponent<V, R extends As> = (<T extends As = R>(
  props: WithAsProps<V, T>,
) => JSXOutput) & {
  [_props]?: WithAsProps<V, R>;
};

// prettier-ignore
export type AsProps<T> =
  T extends Component<infer P> ? P :
  T extends { [key in typeof _props]?: any } ? NonNullable<T[typeof _props]> :
  never;

export const withAs =
  <R extends As>(defaultTag: R) =>
  <V extends Record<string, any>>(comp: Comp<V, R>): PolymorphicComponent<V, R> => {
    return (props: WithAsProps<V>) => {
      const { as, ...restProps } = props;
      const Tag = (as ?? defaultTag) as any;
      return comp({ As: Tag, ...restProps } as any);
    };
  };
