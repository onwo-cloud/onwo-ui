import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot } from '@builder.io/qwik';
import { FloatingPopover } from './floating';
import { PopoverContext } from './popover-context';
import { HPopoverPanelImpl } from './popover-panel-impl';

export const HPopoverPanel = component$((props: PropsOf<'div'>) => {
  const context = PopoverContext.use();

  if (context.floating) {
    return (
      <FloatingPopover floating={context.floating} {...props}>
        <Slot />
      </FloatingPopover>
    );
  }

  return (
    <HPopoverPanelImpl {...props}>
      <Slot />
    </HPopoverPanelImpl>
  );
});
