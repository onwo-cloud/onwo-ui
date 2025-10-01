import type { PropsOf } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { PopoverContext } from './popover-context';

export const HPopoverPanelArrow = component$((props: PropsOf<'div'>) => {
  const context = PopoverContext.use();

  return <div ref={context.arrowRef} {...props} />;
});
