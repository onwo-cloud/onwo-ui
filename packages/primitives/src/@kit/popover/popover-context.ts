import type { Signal } from '@qwik.dev/core';
import { initContext } from '~primitives/utils/context-utils';
import { FloatingOptions } from '../floating';

export type PopoverContextData = {
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
};

export const PopoverContext = initContext<PopoverContextData>('popover');
