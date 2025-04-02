import { Slot, component$ } from '@builder.io/qwik';
import type { Primitive } from '~/utils/types';

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
