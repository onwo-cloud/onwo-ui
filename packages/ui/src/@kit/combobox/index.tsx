import { type PropsOf } from '@builder.io/qwik';
import { UiIcon } from '~ui/icon-provider';
import {
  Root,
  Label,
  Trigger,
  Popover,
  Item,
  Inline,
  ItemLabel,
  ItemIndicator,
  Control,
  Input,
  Empty,
} from '@onwo/primitives/combobox';

export const ComboboxRoot = ({ class: className, children, ...props }: PropsOf<typeof Root>) => (
  <Root
    {...props}
    class={[
      'flex h-full w-48 flex-col overflow-hidden bg-popover text-popover-foreground',
      className,
    ]}
    comboboxItemComponent={ComboboxItem}
    comboboxItemLabelComponent={ComboboxItemLabel}
  >
    {children}
  </Root>
);

export const ComboboxLabel = ({ class: className, children, ...props }: PropsOf<typeof Label>) => (
  <Label {...props} class={['text-sm', className]}>
    {children}
  </Label>
);

export const ComboboxItemLabel = ({
  class: className,
  children,
  ...props
}: PropsOf<typeof ItemLabel>) => (
  <ItemLabel {...props} class={['text-sm', className]}>
    {children}
  </ItemLabel>
);

export const ComboboxItemIndicator = ({
  class: className,
  children,
  ...props
}: PropsOf<typeof ItemIndicator>) => (
  <ItemIndicator {...props} class={['text-sm', className]}>
    {children}
  </ItemIndicator>
);

export const ComboboxControl = ({
  class: className,
  children,
  ...props
}: PropsOf<typeof Control>) => (
  <Control {...props} class={['rounded-base relative flex items-center', className]}>
    {children}
  </Control>
);

export const ComboboxInput = ({ class: className, ...props }: PropsOf<typeof Input>) => (
  <Input
    {...props}
    class={[
      'rounded-base flex h-12 w-full border border-input bg-background px-3 py-1 text-sm text-foreground shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:ring-1 focus-visible:ring-ring focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
      className,
    ]}
  />
);

export const ComboboxTrigger = ({ class: className, ...props }: PropsOf<typeof Trigger>) => (
  <Trigger {...props} class={['group absolute right-0 h-6 w-6', className]}>
    <UiIcon name="chevron-down"  class="stroke-foreground transition-transform duration-500 group-aria-expanded:-rotate-180"  />
  </Trigger>
);

export const ComboboxPopover = ({
  class: className,
  children,
  ...props
}: PropsOf<typeof Popover>) => (
  <Popover {...props} class={['rounded-base w-48 border bg-background p-2', className]}>
    {children}
  </Popover>
);

export const ComboboxItem = ({ class: className, children, ...props }: PropsOf<typeof Item>) => (
  <Item
    {...props}
    class={[
      'group flex justify-between gap-4 rounded-sm px-2 text-foreground aria-disabled:font-light aria-disabled:text-muted-foreground data-highlighted:cursor-pointer data-highlighted:bg-accent',
      className,
    ]}
  >
    {children}
  </Item>
);

export const ComboboxInline = ({
  class: className,
  children,
  ...props
}: PropsOf<typeof Inline>) => (
  <Inline {...props} class={className}>
    {children}
  </Inline>
);

export const ComboboxEmpty = ({ class: className, children, ...props }: PropsOf<typeof Empty>) => (
  <Empty {...props} class={className}>
    {children}
  </Empty>
);
