import { type PropsOf, Slot, component$ } from '@builder.io/qwik';

const Root = component$<PropsOf<'div'>>(({ ...props }) => {
  return (
    <div class={['grid gap-2', props.class]} {...props}>
      <Slot />
    </div>
  );
});

const Item = component$<PropsOf<'input'>>(({ ...props }) => {
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
