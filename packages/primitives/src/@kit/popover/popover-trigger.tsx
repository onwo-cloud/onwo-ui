import type { PropsOf } from '@qwik.dev/core';
import { Slot, component$, $ } from '@qwik.dev/core';
import { PopoverContext } from './popover-context';
import { usePopover } from './use-popover';

export type HPopoverTriggerProps = PropsOf<'button'>;

export const HPopoverTrigger = component$<HPopoverTriggerProps>((props: HPopoverTriggerProps) => {
  const context = PopoverContext.use();

  const triggerId = `${context.compId}-trigger`;
  const panelId = `${context.compId}-panel`;

  const { showPopover, hidePopover } = usePopover(context.compId);

  const handlePointerOver$ = $(async () => {
    if (!context.hover) return;
    await showPopover();
  });

  const handlePointerOut$ = $(async () => {
    if (!context.hover) return;
    await hidePopover();
  });

  return (
    <button
      {...props}
      ref={context.triggerRef}
      id={triggerId}
      popovertarget={panelId}
      onPointerOver$={[handlePointerOver$, props.onPointerOver$]}
      onPointerOut$={[handlePointerOut$, props.onPointerOut$]}
      popoverTargetAction={context.hover ? 'show' : undefined}
    >
      <Slot />
    </button>
  );
});
