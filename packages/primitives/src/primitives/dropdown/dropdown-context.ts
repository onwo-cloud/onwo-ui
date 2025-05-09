import type { Signal } from '@builder.io/qwik';
import { createContextId } from '@builder.io/qwik';

import type { TItemsMap } from './dropdown-root';

export const dropdownContextId = createContextId<DropdownContext>('qui-dropdown');

export type DropdownContext = {
  // core state
  isOpenSig: Signal<boolean>;
  itemsMapSig: Readonly<Signal<TItemsMap>>;
  highlightedIndexSig: Signal<number | null>;
  currDisplayValueSig: Signal<string | string[] | undefined>;
  isMouseOverPopupSig: Signal<boolean>;
  localId: string;

  // refs
  triggerRef: Signal<HTMLButtonElement | undefined>;
  panelRef: Signal<HTMLElement | undefined>;
  highlightedItemRef: Signal<HTMLLIElement | undefined>;

  // user configurable
  scrollOptions?: ScrollIntoViewOptions;
  loop: boolean;
};

export const dropdownRadioGroupContextId = createContextId<DropdownRadioGroupContext>(
  'qui-dropdown-radio-group',
);

export type DropdownRadioGroupContext = {
  valueSig: Signal<string>;
  disabled: boolean;
};

export const dropdownGroupContextId = createContextId<DropdownGroupContext>('qui-dropdown-group');

export type DropdownGroupContext = {
  groupLabelId: string;
};
