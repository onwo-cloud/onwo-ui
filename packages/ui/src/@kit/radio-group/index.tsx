import { Slot, component$ } from '@qwik.dev/core';
import { OwPropsOf } from '~primitives/index';

const Root = component$<OwPropsOf<'div'>>(({ ...props }) => {
  return (
    <div class={['grid gap-2', props.class]} {...props}>
      <Slot />
    </div>
  );
});

const Item = component$<OwPropsOf<'input'>>(({ ...props }) => {
  return (
    <input
      type="radio"
      {...props}
      class={[
        'h-4 w-4 accent-primary disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      ]}
    />
  );
});

export const RadioGroup = {
  Root,
  Item,
};
