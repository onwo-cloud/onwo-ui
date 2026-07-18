import { Slot, component$ } from '@qwik.dev/core';
import type { OwPropsOf } from '~primitives/utils/as';

export type TabsPanelsProps = OwPropsOf<'div'> & {
  id?: string;
  selected?: number;
};

export const TabsPanels = component$<TabsPanelsProps>(({ id, class: className, ...props }) => {
  return (
    <div id={id} class={className} {...props}>
      <Slot />
    </div>
  );
});
