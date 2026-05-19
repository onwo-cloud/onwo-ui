import { Slot, component$, useId, useSignal } from '@builder.io/qwik';
import type { Primitive } from '~primitives/utils/as';
import type { DisplayStyles } from '~primitives/utils/display-styles';
import { withDisplayStyle } from '~primitives/utils/display-styles';

import { RadioContext } from './use-radio-context';

export type OptionProps = Omit<Primitive<'div'>, 'class'> & {
  defaultSelected?: string;
  value: string;
  checked?: boolean;
  ds?: DisplayStyles<'root' | 'input' | 'label'>;
};

export const Option = component$(({ value, checked, ds, ...props }: OptionProps) => {
  const ctx = RadioContext.use();
  const inputRef = useSignal<HTMLInputElement>();
  const id = useId();
  const wds = withDisplayStyle(ds);

  return (
    <div
      data-balise-name="hello"
      {...props}
      {...wds('root')}
      onClick$={() => {
        if (inputRef.value) {
          inputRef.value.checked = true;
          inputRef.value.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }}
    >
      <input
        ref={inputRef}
        type="radio"
        id={id}
        name={ctx.name}
        value={value}
        checked={checked}
        {...wds('input')}
      />
      <label for={id} {...wds('label')}>
        <Slot />
      </label>
    </div>
  );
});
