import type { Signal } from '@qwik.dev/core';
import {
  useId,
  useSignal,
} from '@qwik.dev/core';
import { initContext } from '~primitives/utils/context-utils';

type TabContext = {
  name: string;
  currentIndex: number;
  panelIndex: number;
  selected: Signal<string | undefined>;
  activationMode: 'automatic' | 'manual';
};

type TabsContextOptions = {
   defaultSelected?: string,
   activationMode?: 'automatic' | 'manual',
};

export const TabsContext = initContext<TabContext, TabsContextOptions>('tabs-context', (options): TabContext => ({
    name: 'tabs--' + useId(),
    currentIndex: 0,
    panelIndex: 0,
    selected: useSignal(options.defaultSelected ?? '1'),
    activationMode: options.activationMode ?? 'manual',
}));
