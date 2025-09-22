import { Slot, component$, useId } from '@builder.io/qwik';
import type { Primitive } from '~/utils/types';
import { RadioContext } from './use-radio-context';

export type OptionProps = Primitive<'div'> & {
  defaultSelected?: string;
  legend: string;
  name: string;
  value: string;
  checked?: boolean;
};

export const Option = component$(({ name, value, checked, ...props }: OptionProps) => {
  const ctx = RadioContext.use();
  const id = useId();

  return (
    <div {...props}>
      <input type="radio" id={id} name={ctx.name} value={value} checked={checked} />
      <label for={id}>
        <Slot />
      </label>
    </div>
  );
});
