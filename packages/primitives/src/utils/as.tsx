import {
  type Component,
  type CSSProperties,
  type JSXOutput,
  type PropsOf,
  type QwikHTMLElements,
  type QwikIntrinsicElements,
} from '@qwik.dev/core';

export type JSXChildren = QwikIntrinsicElements['div']['children'];
export type As = keyof QwikHTMLElements;

type IsEqual<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false;

type Override<T, U> = IsEqual<Pick<T, keyof U & keyof T>, U> extends true
  ? T
  : Omit<T, keyof U> & U;

type PatchStyle<Props> = "style" extends keyof Props
  ? Override<Props, { style?: CSSProperties }>
  : Props;

type PatchChildren<Props, COMP> = COMP extends Component<any> | ((props: any) => JSXOutput)
  ? Override<Props, { children?: JSXChildren }>
  : Props;

export type WithPropsOfHotfix<T> = T extends (props: infer P) => JSXOutput
  ? P
  : never;


export type OwPropsOf<COMP> = PatchChildren<PatchStyle<
  [PropsOf<COMP>] extends [never]
  ? WithPropsOfHotfix<COMP>
  : PropsOf<COMP>
>, COMP> & Record<`data-${string}`, any>;

export type WithAsProps<V, T extends As = As> = V &
  Omit<OwPropsOf<T>, keyof V> & {
    as?: T;
  };

export type CompProps<V, R extends As> = V &
  Omit<OwPropsOf<R>, keyof V> & {
    As: Component<OwPropsOf<R>>;
  };

export interface PolymorphicComponent<V, R extends As> extends Component<WithAsProps<V, R>> {
  <T extends As = R>(props: WithAsProps<V, T>): JSXOutput;
}

export interface WithAsRunner<R extends As> {
  (TargetComponent: Component<CompProps<{}, R>>): PolymorphicComponent<{}, R>;
  <V extends Record<string, any>>(
    TargetComponent: Component<CompProps<V, R>>
  ): PolymorphicComponent<V, R>;
}

export const withAs = function <R extends As>(defaultTag: R): WithAsRunner<R> {
  return function <V extends Record<string, any> = {}>(
    TargetComponent: Component<CompProps<V, R>>
  ): PolymorphicComponent<V, R> {
    return ((props: WithAsProps<V, any>) => {
      const { as, children, ...restProps } = props;
      const Tag = (as ?? defaultTag) as any;
      return <TargetComponent As={Tag} {...(restProps as any)}>{children}</TargetComponent>;
    }) as any;
  } as WithAsRunner<R>;
};
