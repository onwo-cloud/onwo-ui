import type { FunctionComponent, JSXOutput, QwikHTMLElements } from '@builder.io/qwik';
import type { Primitive } from './types';

export type As = keyof QwikHTMLElements;

type Comp<V, T extends As> = (
  props: V & Primitive<T> & { As: FunctionComponent<Primitive<T>> },
) => JSXOutput;

export type WithAsProps<V, T extends As = As> = V &
  Omit<Primitive<T>, keyof V> & {
    as?: T;
  };

export const withAs =
  <R extends As>(defaultTag: R) =>
  <V extends Record<string, any>>(
    comp: Comp<V, R>,
  ): (<T extends As = R>(props: WithAsProps<V, T>) => JSXOutput) => {
    return ((props: WithAsProps<V>) => {
      const { as, ...restProps } = props;
      const Tag = (as ?? defaultTag) as any;
      // NB: we could auto compose refs here instead
      // of doing it in every components
      return comp({ As: Tag, ...restProps } as any);
    }) as <T extends As = R>(props: WithAsProps<V, T>) => JSXOutput;
  };
