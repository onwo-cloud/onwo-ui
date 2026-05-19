import type { PropsOf, Signal } from '@builder.io/qwik';
import { Slot, component$, useId, useSignal } from '@builder.io/qwik';
import type { DeepPartial } from '~primitives/types/utils';
import type { Placement } from '@floating-ui/dom';

import type { PopoverContextData } from './popover-context';
import { PopoverContext } from './popover-context';
import type { FloatingOptions } from '../floating';

export type PopoverRootProps = {
  mode?: 'manual' | 'auto';
  ref?: Signal<HTMLElement | undefined>;
  floating?: boolean | DeepPartial<FloatingOptions>;
  /** @deprecated Use the tooltip instead, which adheres to the WAI-ARIA design pattern. */
  hover?: boolean;
  id?: string;
  'bind:anchor'?: Signal<HTMLElement | undefined>;
  'bind:panel'?: Signal<HTMLElement | undefined>;
};

export type TPlacement = Placement;

export type PopoverProps = PopoverRootProps & PropsOf<'div'>;

export const HPopoverRoot = component$((props: PopoverProps) => {
  const {
    id,
    'bind:anchor': givenAnchorRef,
    'bind:panel': givenPanelRef,
    floating: floatingP,
    mode,
    hover = false,
    ...rest
  } = props;

  const anchorRef = givenAnchorRef;
  const rootRef = useSignal<HTMLElement | undefined>();
  const defaultPanelRef = useSignal<HTMLElement | undefined>();
  const panelRef = givenPanelRef ?? defaultPanelRef;
  const triggerRef = useSignal<HTMLElement | undefined>();
  const arrowRef = useSignal<HTMLElement | undefined>();

  const isOpenSig = useSignal(false);

  const localId = useId();
  const compId = id ?? localId;
  const rootId = `${compId}-root`;

  const floatingOpts = floatingP === true ? {} : floatingP || undefined;

  const context: PopoverContextData = {
    anchorRef,
    compId,
    floating: floatingOpts as FloatingOptions | undefined,
    hover,
    panelRef,
    triggerRef,
    arrowRef,
    isOpenSig,
    localId,
    mode: mode ?? 'auto',
  };

  PopoverContext.useProvider(context);

  return (
    <div ref={rootRef} id={rootId} {...rest}>
      <Slot />
    </div>
  );
});
