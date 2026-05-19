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
