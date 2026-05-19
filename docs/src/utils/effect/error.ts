export type Equals<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;

export const Builder: new <A extends Record<string, any> = {}>(
  args: Equals<A, {}> extends true ? void : { readonly [P in keyof A]: A[P] },
) => Readonly<A> = (function () {
  const plainArgsSymbol = Symbol.for('effect/Data/Error/plainArgs');
  const O = {
    BaseEffectError: class {
      constructor(args: any) {
        if (args) {
          Object.assign(this, args);
          // @effect-diagnostics-next-line floatingEffect:off
          Object.defineProperty(this, plainArgsSymbol, { value: args, enumerable: false });
        }
      }
      toJSON() {
        return { ...(this as any)[plainArgsSymbol], ...this };
      }
    } as any,
  };
  return O.BaseEffectError;
})();

export class ParseError extends Builder<{ message: string }> {}
