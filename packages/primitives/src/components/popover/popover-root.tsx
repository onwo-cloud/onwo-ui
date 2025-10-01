import type { PropsOf, Signal } from '@builder.io/qwik';
import { Slot, component$, useId, useSignal } from '@builder.io/qwik';
import type { DeepPartial } from '~/types/utils';
import type { FloatingOptions, PopoverContextData } from './popover-context';
import { PopoverContext } from './popover-context';

export type PopoverRootProps = {
  mode?: 'manual' | 'auto';
  ref?: Signal<HTMLElement | undefined>;
  // A floating panel will re-arrange it's position automatically
  // depending on the trigger location in the window
  floating?: boolean | DeepPartial<FloatingOptions>;
  /** @deprecated Use the tooltip instead, which adheres to the WAI-ARIA design pattern. */
  hover?: boolean;
  id?: string;
  'bind:anchor'?: Signal<HTMLElement | undefined>;
  'bind:panel'?: Signal<HTMLElement | undefined>;
};

export type FloatingProps = {
  ancestorScroll?: boolean;
  ancestorResize?: boolean;
  elementResize?: boolean;
  layoutShift?: boolean;
  animationFrame?: boolean;
  inline?: boolean;
  transform?: string;
};

export type TPlacement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export type PopoverProps = PopoverRootProps & {
  floating?: boolean | TPlacement;
} & FloatingProps &
  PropsOf<'div'>;

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

  // refs
  const anchorRef = givenAnchorRef;
  const rootRef = useSignal<HTMLElement | undefined>();
  const defaultPanelRef = useSignal<HTMLElement | undefined>();
  const panelRef = givenPanelRef ?? defaultPanelRef;
  const triggerRef = useSignal<HTMLElement | undefined>();
  const arrowRef = useSignal<HTMLElement | undefined>();

  // state
  const isOpenSig = useSignal(false);

  // id's
  const localId = useId();
  const compId = id ?? localId;
  const rootId = `${compId}-root`;

  const floating =
    floatingP === true ? ({} as DeepPartial<FloatingOptions>) : floatingP || undefined;

  const context: PopoverContextData = {
    anchorRef,
    compId,
    floating: floating && {
      placement: floating.placement ?? 'bottom',
      updateOn: {
        ancestorScroll: floating.updateOn?.ancestorScroll ?? true,
        ancestorResize: floating.updateOn?.ancestorResize ?? true,
        elementResize: floating.updateOn?.elementResize ?? true,
        layoutShift: floating.updateOn?.layoutShift ?? true,
        animationFrame: floating.updateOn?.animationFrame ?? false,
      },
      layoutShift: floating.layoutShift ?? true,
      gutter: floating.gutter ?? 0,
      shift: floating.shift ?? true,
      flip: floating.flip ?? true,
      size: floating.size ?? true,
      arrow: floating.arrow ?? true,
      hide: floating.hide ?? 'referenceHidden',
      inline: floating.inline ?? true,
      transform: floating.transform,
    },
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
