import { $, component$, QRL, Signal, Slot, useSignal } from "@qwik.dev/core";
import { OwPropsOf } from '~primitives/index';
import { RadioGroupContext, RadioGroupContextData } from "./radio-group-context";

type RadioGroupProps = OwPropsOf<'div'> & {
  ['bind:value']?: Signal<string>;
  onValueChange$?: QRL<(value: string) => void>;
};

export const MenuRadioGroup = component$(({ ["bind:value"]: __opt_value, onValueChange$, ...props }: RadioGroupProps) => {
  const value = __opt_value ?? useSignal();

  const setValue$ = $((newVal: string) => {
    value.value = newVal;
    onValueChange$?.(newVal);
  });

  const context: RadioGroupContextData = {
    value: value,
    setValue$,
  };

  RadioGroupContext.useProvider(context);

  return (
    <div role="group" {...props}>
      <Slot />
    </div>
  );
});
