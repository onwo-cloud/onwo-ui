import { Slot, component$ } from '@qwik.dev/core';
import type { PopoverRootProps } from '~primitives/@kit/popover';
import { PopoverRoot } from '~primitives/@kit/popover';

export type TooltipRootProps = PopoverRootProps;

export const TooltipRoot = component$((props: TooltipRootProps) => {
  return (
    <PopoverRoot {...props}>
      <Slot />
    </PopoverRoot>
  );
});
