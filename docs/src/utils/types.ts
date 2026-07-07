import { type PropsOf, CSSProperties } from "@qwik.dev/core";

export type StringLiteral<Type> = Type extends string
  ? string extends Type
    ? never
    : Type
  : never;

declare const __OPAQUE_TYPE__: unique symbol;

export type WithOpaque<Token extends string> = {
  readonly [__OPAQUE_TYPE__]: Token;
};

export type Opaque<Type, Token extends string> =
  Token extends StringLiteral<Token> ? Type & WithOpaque<Token> : never;

/**
 * Extracts the event handler properties from a component's props,
 * We need to apply the OnlyQRL utility here since the qwik engine won't
 * be able to inline it.
 */
export type OnEvents<T> = {
  [K in keyof T as K extends `on${string}$` ? K : never]: T[K];
};


// export declare type PropsOf<COMP> = COMP extends string ? COMP extends keyof QwikIntrinsicElements ? QwikIntrinsicElements[COMP] : QwikIntrinsicElements['span'] : NonNullable<COMP> extends never ? never : COMP extends FunctionComponent<infer PROPS> ? PROPS extends Record<any, infer V> ? IsAny<V> extends true ? never : ObjectProps<PROPS> : COMP extends Component<infer OrigProps> ? ObjectProps<OrigProps> : PROPS : never;

export type OwPropsOf<COMP> = "style" extends keyof PropsOf<COMP>
  ? Omit<PropsOf<COMP>, "style"> & { style?: CSSProperties }
  : PropsOf<COMP>;
