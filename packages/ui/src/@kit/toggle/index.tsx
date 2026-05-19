import { component$, type PropsOf, Slot } from '@builder.io/qwik';
import { Toggle as HeadlessToggle } from '@onwo/primitives/toggle';

export type ToggleSize = 'sm' | 'md' | 'lg';
export type ToggleLook = 'default' | 'outline';

export type ToggleProps = PropsOf<typeof HeadlessToggle> & {
  size?: ToggleSize;
  look?: ToggleLook;
};

export const Toggle = component$<ToggleProps>(({ size, look, ...props }) => {
  return (
    <HeadlessToggle
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
        props.class,
      ]}
    >
      <Slot />
    </HeadlessToggle>
  );
});
