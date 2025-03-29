import type { FunctionComponent, JSXOutput, QwikHTMLElements } from '@builder.io/qwik';

export type As = keyof QwikHTMLElements;

type Comp<V, T extends As> = (
  props: V & QwikHTMLElements[T] & { As: FunctionComponent<QwikHTMLElements[T]> },
) => JSXOutput;

export type WithAsProps<V, T extends As = As> = V &
  QwikHTMLElements[T] & {
    as?: T;
  };

export const withAs =
  <R extends As>(defaultTag: R) =>
  <V extends Record<string, any>>(comp: Comp<V, R>) => {
    return ((props: WithAsProps<V>) => {
      const { as, ...restProps } = props;
      const Tag = (as ?? defaultTag) as any;
      return comp({ As: Tag, ...restProps } as any);
    }) as <T extends As = R>(props: WithAsProps<V, T>) => JSXOutput;
  };
