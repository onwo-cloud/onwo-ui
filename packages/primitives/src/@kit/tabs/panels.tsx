import { Slot, component$ } from '@qwik.dev/core';
import type { Primitive } from '~primitives/utils/as';

export type PanelsProps = Primitive<'div'> & {
  id?: string;
  selected?: number;
};

export const Panels = component$<PanelsProps>(({ id, class: className, ...props }) => {
  return (
    <div id={id} class={className} {...props}>
      <Slot />
    </div>
  );
});
