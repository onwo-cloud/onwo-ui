import type { Signal } from '@builder.io/qwik';
import {
  createContextId,
  useContext,
  useContextProvider,
  useId,
  useSignal,
} from '@builder.io/qwik';

type TabContext = {
  name: string;
  tabIndex: number;
  panelIndex: number;
  selected: Signal<string | undefined>;
  activationMode: 'automatic' | 'manual'; // <-- Add this
};

export const TabsContext = createContextId<TabContext>('tabs-context');

export const useTabsContext = () => useContext(TabsContext);

export const useTabsContextProvider = (
  defaultSelected?: string,
  activationMode: 'automatic' | 'manual' = 'manual'
): TabContext => {
  const data: TabContext = {
    name: 'tabs--' + useId(),
    tabIndex: 0,
    panelIndex: 0,
    selected: useSignal(defaultSelected ?? '1'),
    activationMode,
  };
  useContextProvider(TabsContext, data);
  return data;
};
