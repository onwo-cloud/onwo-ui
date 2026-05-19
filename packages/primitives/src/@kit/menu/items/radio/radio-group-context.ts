import { QRL, Signal } from '@builder.io/qwik';
import { initContext } from '~primitives/index';

export type RadioGroupContextData = {
  value: Signal<string | undefined>;
  setValue$: QRL<(val: string) => void>;
};

export const RadioGroupContext = initContext<RadioGroupContextData>('menu-radio-group');
