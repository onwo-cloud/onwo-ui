import { Slot, component$ } from '@qwik.dev/core';
import type { PopoverTriggerProps } from '~primitives/@kit/popover';
import { PopoverTrigger, usePopoverContext } from '~primitives/@kit/popover';

export type TooltipTriggerProps = PopoverTriggerProps;

export const TooltipTrigger = component$((props: TooltipTriggerProps) => {
  const context = usePopoverContext();
  const { hover = true, ...restProps } = props;

  return (
    <PopoverTrigger
      hover={hover}
      aria-describedby={`${context.id}-panel`}
      {...restProps}
    >
      <Slot />
    </PopoverTrigger>
  );
});
