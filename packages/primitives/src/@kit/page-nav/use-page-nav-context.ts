import type { QRL,  Signal } from '@qwik.dev/core';
import { $, useId, useSignal } from '@qwik.dev/core';
import { initContext } from '~primitives/utils/context-utils';

type PageNavContext = {
  name: string;
  linkIndex: number;
  selected: Readonly<Signal<string>>;
  select$: QRL<(newValue: string) => void>;
  activationMode: 'automatic' | 'manual';
};

type PageNavContextOptions = {
  onSelected$?: QRL<(newValue: string) => void>;
  value?: Signal<string>;
  defaultValue?: string;
  activationMode?: 'automatic' | 'manual';
};

export const PageNavContext = initContext<PageNavContext, PageNavContextOptions>('nav-context', (options): PageNavContext => {
  const selected = options.value ??  useSignal(options.defaultValue ?? '');
  return {
    name: 'nav--' + useId(),
    linkIndex: 0,
    selected,
    activationMode: options.activationMode ?? 'manual',
    select$: $((newValue: string) => {
      selected.value = newValue;
      options.onSelected$?.(newValue);
    })
  };
});
