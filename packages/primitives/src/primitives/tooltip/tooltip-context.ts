import type { QRL, Signal } from '@builder.io/qwik';
import { createContextId } from '@builder.io/qwik';

export const TooltipContextId = createContextId<TooltipContext>('Tooltip');

export type TooltipContext = {
  compId: string;
  localId: string;

  delayDuration: number;

  triggerRef: Signal<HTMLButtonElement | undefined>;

  state: Signal<TriggerDataState>;

  onOpenChange$: QRL<(state: 'open' | 'closed') => void>;
};

export type TriggerDataState = 'closing' | 'closed' | 'opening' | 'open';
