import { Slot, component$ } from '@qwik.dev/core';
import {
  TooltipPanel as TooltipPanelPrimitive,
  TooltipRoot,
  TooltipTrigger,
} from '~primitives/@kit/tooltip';
import { OwPropsOf } from '~primitives/index';

export { TooltipRoot, TooltipTrigger };

export const TooltipPanel = component$((props: OwPropsOf<typeof TooltipPanelPrimitive>) => {
  const { class: className, ...restProps } = props;

  return (
    <TooltipPanelPrimitive
      class={[
        'z-30 block rounded-md bg-shade-900 px-2 py-1 text-[11px] font-medium text-shade-0 tabular-nums whitespace-nowrap shadow-md',
        className,
      ]}
      {...restProps}
    >
      <Slot />
    </TooltipPanelPrimitive>
  );
});
