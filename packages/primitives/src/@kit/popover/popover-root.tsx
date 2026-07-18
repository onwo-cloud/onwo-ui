import type { Signal } from '@qwik.dev/core';
import { Slot, component$, useId, useContextProvider } from '@qwik.dev/core';
import { popoverContextId, PopoverControls, usePopoverControl } from './context';
import type { FloatingOptions } from '../floating';

export type PopoverRootProps = {
  'bind:open'?: Signal<boolean>;
  ignoreCloseEvents?: boolean;
  controls?: PopoverControls;
  floating?: FloatingOptions;
};

export const PopoverRoot = component$((props: PopoverRootProps) => {
  const id = useId();
  const defaultControls = usePopoverControl(props['bind:open'], {
    ignoreCloseEvents: props.ignoreCloseEvents,
  });
  const control = props.controls ?? defaultControls;

  useContextProvider(popoverContextId, {
    id,
    control,
    floating: props.floating,
  });

  return <Slot />;
});
