import { Slot, component$, useContext } from '@qwik.dev/core';

import { Panel as PopoverPanel, type HPopoverPanelProps } from '../popover/popover-panel';

import { TooltipContextId } from './tooltip-context';

export type PanelProps = HPopoverPanelProps;

/**
 * HTooltipPanel is the panel component for the Tooltip.
 */
export const Panel = component$((props: PanelProps) => {
  const context = useContext(TooltipContextId);

  return (
    <PopoverPanel
      {...props}
      role="tooltip"
      onToggle$={(e) => context.onOpenChange$(e.newState as 'open' | 'closed')}
      id={context.localId}
    >
      <Slot />
    </PopoverPanel>
  );
});
