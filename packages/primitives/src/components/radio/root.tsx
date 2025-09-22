import { Slot, component$ } from '@builder.io/qwik';
import type { Primitive } from '~/utils/types';
import { RadioContext } from './use-radio-context';

export type RootProps = Primitive<'fieldset'> & {
  defaultSelected?: string;
  legend?: string;
  name: string;
};

export const Root = component$((props: RootProps) => {
  RadioContext.useProvider({ name: props.name });

  return (
    <fieldset>
      {props.legend !== undefined && <legend>Select a maintenance drone:</legend>}
      <Slot />
    </fieldset>
  );
});
