import { component$, PropsOf, Slot } from '@qwik.dev/core';

export const TopBar = component$(({ class: className, ...props }: PropsOf<'div'>) => (
  <div class={['items-center h-12.5 flex relative', className]} {...props}>
    <div class="items-center flex w-full justify-between gap-2 mx-auto h-full">
      <Slot name="left" />
      <Slot name="middle" />
      <Slot name="right" />
    </div>
  </div>
));

export const SubTopBar = component$(({ class: className, ...props }: PropsOf<'div'>) => (
  <div
    class={[
      'flex items-center w-full mx-auto h-11 overflow-x-auto no-scrollbar',
      className,
    ]}
    {...props}
  >
    <Slot />
  </div>
));
