import type { PropsOf } from '@builder.io/qwik';
import { component$, Slot, $ } from '@builder.io/qwik';

import { PopoverContext } from './popover-context';
import { Floating } from '../floating';

export type HPopoverPanelProps = Omit<PropsOf<'div'>, 'style'>;

export const Panel = component$((props: HPopoverPanelProps) => {
  const context = PopoverContext.use();
  const panelId = `${context.compId}-panel`;

  const handleToggle$ = $((e: any) => {
    context.isOpenSig.value = e.newState === 'open';
  });

  if (context.floating) {
    return (
      <Floating
        id={panelId}
        anchorRef={context.anchorRef ?? context.triggerRef!}
        floating={context.floating}
        onToggle$={[handleToggle$, props.onToggle$]}
        {...props}
      >
        <Slot />
      </Floating>
    );
  }

  return (
    <div
      {...props}
      id={panelId}
      ref={context.panelRef}
      popover={context.mode}
      onToggle$={[handleToggle$, props.onToggle$]}
    >
      <Slot />
    </div>
  );
});
