import { $, createContextId, useContext, useSignal } from '@qwik.dev/core';
import type { Signal, QRL } from '@qwik.dev/core';
import type { FloatingOptions } from '../floating';

export type PopoverControls = {
  opened: Signal<boolean>;
  panelRef: Signal<HTMLElement | undefined>;
  triggerRef: Signal<HTMLElement | undefined>;
  show$: QRL<() => void>;
  hide$: QRL<() => void>;
  toggle$: QRL<() => void>;
};

type PopoverControlOptions = {
  ignoreCloseEvents: boolean;
}

export const usePopoverControl = (givenOpen?: Signal<boolean>, options?: PopoverControlOptions): PopoverControls => {
  const localOpen = useSignal(false);
  const opened = givenOpen ?? localOpen;

  const panelRef = useSignal<HTMLElement>();
  const triggerRef = useSignal<HTMLElement>();

  const show$ = $(() => {
    opened.value = true;
  });

  const hide$ = $(() => {
    if (options?.ignoreCloseEvents) return;
    opened.value = false;
  });

  const toggle$ = $(() => {
    if (opened.value && options?.ignoreCloseEvents) return;
    opened.value = !opened.value;
  });

  return {
    opened,
    panelRef,
    triggerRef,
    show$,
    hide$,
    toggle$,
  };
};

export type PopoverContextData = {
  id: string;
  control: PopoverControls;
  floating?: FloatingOptions;
};

export const popoverContextId = createContextId<PopoverContextData>('popover');

export const usePopoverContext = () => useContext(popoverContextId);
