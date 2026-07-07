/* eslint-disable unicorn/prefer-export-from */
import { type PropsOf, Slot, component$ } from '@qwik.dev/core';
import { UiIcon } from '~ui/icon-provider';
import {
  HSelectRoot,
  HSelectLabel,
  HSelectTrigger,
  HSelectDisplayValue,
  HSelectPopover,
  HSelectGroup,
  HSelectGroupLabel,
  HSelectItem,
  HSelectItemLabel,
  HSelectItemIndicator,
  HSelectDescription,
  HHiddenNativeSelect,
  HSelectErrorMessage,
} from '@onwo/primitives/select';

export const Select = (props: PropsOf<typeof HSelectRoot>) => (
  <HSelectRoot
    {...props}
    selectItemComponent={SelectItem}
    selectItemLabelComponent={SelectItemLabel}
    selectErrorMessageComponent={SelectErrorMessage}
  />
);

export const SelectHiddenNativeSelect = HHiddenNativeSelect;
export const SelectDescription = HSelectDescription;

export const SelectLabel = component$<PropsOf<typeof HSelectLabel>>(({ ...props }) => {
  return (
    <>
      <HSelectLabel {...props} class={['px-2 py-1.5 text-sm font-semibold', props.class]}>
        <Slot />
      </HSelectLabel>
    </>
  );
});

export const SelectTrigger = component$<PropsOf<typeof HSelectTrigger>>(({ ...props }) => {
  return (
    <HSelectTrigger
      {...props}
      class={[
        'flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-sm ring-offset-background placeholder:text-muted-foreground focus:ring-1 focus:ring-ring focus:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        props.class,
      ]}
    >
      <Slot />
      <UiIcon name="chevron-down" class="h-4 w-4 opacity-50" />
    </HSelectTrigger>
  );
});

export const SelectDisplayValue = HSelectDisplayValue;

export const SelectPopover = component$<PropsOf<typeof HSelectPopover>>(({ ...props }) => {
  return (
    <>
      <HSelectPopover
        {...props}
        class={[
          'w-full max-w-60 min-w-32 rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-closing:animate-out data-closing:fade-out-0 data-closing:zoom-out-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          props.class,
        ]}
      >
        <Slot />
      </HSelectPopover>
    </>
  );
});

export const SelectGroup = HSelectGroup;

export const SelectGroupLabel = HSelectGroupLabel;

export const SelectErrorMessage = HSelectErrorMessage;

export const SelectItem = component$<PropsOf<typeof HSelectItem>>(({ ...props }) => {
  return (
    <HSelectItem
      {...props}
      class={[
        'relative flex w-full cursor-default items-center rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50',
        'data-highlighted:border-base data-highlighted:bg-accent data-highlighted:text-accent-foreground',
        props.class,
      ]}
    >
      <Slot />
    </HSelectItem>
  );
});

export const SelectItemIndicator = component$<PropsOf<typeof HSelectItemIndicator>>(
  ({ ...props }) => {
    return (
      <span class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        <HSelectItemIndicator {...props}>
          <UiIcon name="check"  class="h-4 w-4"  />
        </HSelectItemIndicator>
      </span>
    );
  },
);

export const SelectItemLabel = component$<PropsOf<typeof HSelectItemLabel>>(({ ...props }) => {
  return (
    <HSelectItemLabel {...props}>
      <Slot />
    </HSelectItemLabel>
  );
});
