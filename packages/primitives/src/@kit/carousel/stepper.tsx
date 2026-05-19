import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';

export const Stepper = component$((props: PropsOf<'div'>) => {
  return (
    <div role="navigation" {...props}>
      <Slot />
    </div>
  );
});
