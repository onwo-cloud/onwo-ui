import { Slot, component$ } from '@builder.io/qwik';
import type { Primitive } from '~primitives/utils/as';

import { RadioContext } from './use-radio-context';

export type RootProps = Primitive<'fieldset'> & {
  defaultSelected?: string;
  legend?: string;
  name: string;
};

export const Root = component$(({ name, ...props }: RootProps) => {
  RadioContext.useProvider({ name });

  return (
    <fieldset {...props}>
      {props.legend !== undefined && <legend>{props.legend}</legend>}
      <Slot />
    </fieldset>
  );
});
