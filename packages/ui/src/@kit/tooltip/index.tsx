import { Slot, component$ } from '@qwik.dev/core';
import type { PanelProps, RootProps } from '@onwo/primitives/tooltip';
import { Root, Trigger, Panel } from '@onwo/primitives/tooltip';

export const TooltipRoot = component$(({ ...props }: RootProps) => {
  return (
    <Root {...props}>
      <Slot />
    </Root>
  );
});

// eslint-disable-next-line unicorn/prefer-export-from
export const TooltipTrigger = Trigger;

export const TooltipPanel = component$(({ ...props }: PanelProps) => {
  return (
    <Panel
      {...props}
      class={[
        'w-fit animate-in rounded-md border bg-background px-3 py-1.5 text-xs text-balance text-foreground shadow-sm fade-in-0 zoom-in-95',
        'data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        props.class,
      ]}
    >
      <Slot />
    </Panel>
  );
});
