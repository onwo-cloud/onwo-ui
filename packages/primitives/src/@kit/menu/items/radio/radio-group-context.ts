import { QRL, Signal } from '@qwik.dev/core';
import { initContext } from '~primitives/index';

export type RadioGroupContextData = {
  value: Signal<string | undefined>;
  setValue$: QRL<(val: string) => void>;
};

export const RadioGroupContext = initContext<RadioGroupContextData>('menu-radio-group');
