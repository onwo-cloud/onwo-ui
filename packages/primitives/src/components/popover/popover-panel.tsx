import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot, useContext } from '@builder.io/qwik';
import { FloatingPopover } from './floating';
import { popoverContextId } from './popover-context';
import { HPopoverPanelImpl } from './popover-panel-impl';

export const HPopoverPanel = component$((props: PropsOf<'div'>) => {
  const context = useContext(popoverContextId);

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
