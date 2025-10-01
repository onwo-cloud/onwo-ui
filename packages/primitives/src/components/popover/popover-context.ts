import type { Signal } from '@builder.io/qwik';
import type { AutoUpdateOptions } from '@floating-ui/dom';
import { initContext } from '~/utils/context-utils';
import type { TPlacement } from './popover-root';

export type FloatingOptions = {
  placement: TPlacement;
  updateOn: AutoUpdateOptions;
  layoutShift: boolean;
  gutter: number;
  shift: boolean;
  flip: boolean;
  size: boolean;
  arrow: boolean;
  hide: 'referenceHidden' | 'escaped';
  inline: boolean;
  transform?: string;
};

export type PopoverContextData = {
  // core state
  compId: string;
  isOpenSig: Signal<boolean>;
  floating?: FloatingOptions;
  localId: string;
  mode: 'manual' | 'auto';
  hover?: boolean;
  anchorRef?: Signal<HTMLElement | undefined>;

  // refs
  panelRef?: Signal<HTMLElement | undefined>;
  triggerRef?: Signal<HTMLElement | undefined>;
  arrowRef?: Signal<HTMLElement | undefined>;

  // floating props
};

export const PopoverContext = initContext<PopoverContextData>('popover');
