import type { PropsOf } from '@qwik.dev/core';
import { component$, Slot } from '@qwik.dev/core';

export const Stepper = component$((props: PropsOf<'div'>) => {
  return (
    <div role="navigation" {...props}>
      <Slot />
    </div>
  );
});
