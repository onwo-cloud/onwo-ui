import { Slot, component$ } from '@qwik.dev/core';
import type { HPopoverPanelProps } from '@onwo/primitives/popover';
import { Panel, Root, Trigger } from '@onwo/primitives/popover';

export const PopoverRoot = Root;

export const PopoverTrigger = Trigger;

export const PopoverPanel = component$(({ class: className, ...props }: HPopoverPanelProps) => {
  return (
    <Panel
      class={[
        'my-transition w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-hidden',
        'data-closing:animate-out data-closing:zoom-out-95 data-closing:fade-out data-open:animate-in data-open:zoom-in-95 data-open:fade-in',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        className,
      ]}
      {...props}
    >
      <Slot />
    </Panel>
  );
});
