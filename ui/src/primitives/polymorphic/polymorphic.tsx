import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import type { FunctionComponent } from '@builder.io/qwik/jsx-runtime';

/**
 *  We can use polymorphic components to render different elements based on the type of the `as` prop.
 */
export const Polymorphic = component$(
  <C extends string | FunctionComponent = 'div'>({
    as,
    ...props
  }: { as?: C } & PropsOf<string extends C ? 'div' : C>) => {
    const Cmp = (as || 'div') as C;
    return (
      <Cmp {...props}>
        <Slot />
      </Cmp>
    );
  },
);
