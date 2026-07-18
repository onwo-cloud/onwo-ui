import { Slot, component$, $ } from '@qwik.dev/core';
import type { PopoverPanelProps } from '~primitives/@kit/popover';
import { PopoverPanel, usePopoverContext } from '~primitives/@kit/popover';

export type TooltipPanelProps = PopoverPanelProps & {
  /**
   * If true, enables mouse interaction inside the tooltip (e.g., selectable text/links).
   * Defaults to `false` so the tooltip panel doesn't interfere with cursor movements.
   */
  interactive?: boolean;
};

export const TooltipPanel = component$((props: TooltipPanelProps) => {
  const context = usePopoverContext();
  const {
    role = 'tooltip',
    side = 'top',
    interactive = false,
    onMouseLeave$,
    class: className,
    ...restProps
  } = props;

  const isOpen = context.control.opened.value;

  const handleMouseLeave$ = [
    $((e: MouseEvent) => {
      const relatedTarget = e.relatedTarget as HTMLElement | null;
      if (
        relatedTarget &&
        (context.control.panelRef.value?.contains(relatedTarget) ||
          context.control.triggerRef.value?.contains(relatedTarget))
      ) {
        return;
      }
      context.control.hide$();
    }),
    onMouseLeave$,
  ];

  return (
    <PopoverPanel
      role={role}
      side={side}
      aria-hidden={!isOpen}
      onMouseLeave$={handleMouseLeave$}
      class={[
        // Ensure closed or non-interactive tooltips never capture mouse events
        isOpen && interactive ? 'pointer-events-auto' : 'pointer-events-none',
        className,
      ]}
      {...restProps}
    >
      <Slot />
    </PopoverPanel>
  );
});
