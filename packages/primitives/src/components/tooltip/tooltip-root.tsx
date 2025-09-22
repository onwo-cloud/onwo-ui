import type { PropsOf, QRL, Signal } from '@builder.io/qwik';
import { Slot, component$, useContextProvider, useId, useSignal, $ } from '@builder.io/qwik';
import type { TPlacement } from '../popover/popover-root';
import { HPopoverRoot } from '../popover/popover-root';
import type { TooltipContext, TriggerDataState } from './tooltip-context';
import { TooltipContextId } from './tooltip-context';

/**
 * TooltipRootProps defines the properties for the Tooltip Root component.
 */
export type TooltipRootProps = {
  /**
   * A value that determines whether the tooltip is open.
   */
  open?: boolean;

  /** A signal that controls the current open state (controlled). */
  'bind:open'?: Signal<boolean>;

  /**
   * QRL handler that runs when the tooltip opens or closes.
   * @param open The new state of the tooltip.
   */
  onOpenChange$?: QRL<(state: 'open' | 'closed') => void>;

  /**
   * A value that determines how long before the tooltip will
   * be opened once triggered in milliseconds.
   */
  delayDuration?: number;

  /**
   * The default position of the tooltip.
   */
  placement?: TPlacement;

  id?: string;
};

/**
 * TooltipProps combines TooltipRootProps and the properties of a div element.
 */
export type TooltipProps = TooltipRootProps & Exclude<PropsOf<'div'>, 'ref'>;

/**
 * HTooltipRoot is the root component for the Tooltip.
 */
export const HTooltipRoot = component$(
  ({ placement, id, delayDuration = 0, onOpenChange$, ...rest }: TooltipProps) => {
    const triggerRef = useSignal<HTMLButtonElement>();
    const tooltipState = useSignal<TriggerDataState>('closed');

    const localId = useId();
    const compId = id ?? localId;

    const context: TooltipContext = {
      compId,
      localId,
      triggerRef,
      delayDuration,
      state: tooltipState,
      onOpenChange$: $((e) => onOpenChange$?.(e)),
    };

    useContextProvider(TooltipContextId, context);

    return (
      <HPopoverRoot
        mode="manual"
        hover
        bind:anchor={triggerRef}
        floating={placement ?? 'top'}
        id={localId}
      >
        <div id={localId} {...rest}>
          <Slot />
        </div>
      </HPopoverRoot>
    );
  },
);
