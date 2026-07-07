import { component$, Slot } from '@qwik.dev/core';
import type { HToggleGroupItemProps, HToggleGroupProps } from '@onwo/primitives/toggle-group';
import { HToggleGroup, HToggleGroupItem } from '@onwo/primitives/toggle-group';

import type { ToggleSize, ToggleLook } from '../toggle';

const Root = component$<HToggleGroupProps>(({ ...props }) => {
  return (
    <HToggleGroup {...props} class={['flex items-center gap-1', props.class]}>
      <Slot />
    </HToggleGroup>
  );
});

export type ToggleGroupItemProps = HToggleGroupItemProps & {
  size?: ToggleSize;
  look?: ToggleLook;
};

const Item = component$(({ size, look, class: className, ...props }: ToggleGroupItemProps) => {
  return (
    <HToggleGroupItem
      {...props}
      class={[
        'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 aria-pressed:bg-primary aria-pressed:text-primary-foreground',
        {
          sm: 'h-9 px-2.5',
          md: 'h-10 px-3',
          lg: 'h-11 px-5',
        }[size ?? 'md'],
        {
          default: 'border border-[blue] bg-transparent',
          outline: 'border border-[blue] bg-transparent hover:bg-[blue] hover:text-[blue]',
        }[look ?? 'default'],
        className,
      ]}
    >
      <Slot />
    </HToggleGroupItem>
  );
});

export const ToggleGroup = {
  Root,
  Item,
};
