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
  // will be used to label tab's if `name` prop is missing
  tabIndex: number;
  // will be used to label panel's if `for` prop is missing
  panelIndex: number;
  selected: Signal<string | undefined>;
};

export const TabsContext = createContextId<TabContext>('tabs-context');

export const useTabsContext = () => useContext(TabsContext);

export const useTabsContextProvider = (defaultSelected?: string): TabContext => {
  const data: TabContext = {
    name: 'tabs--' + useId(),
    tabIndex: 0,
    panelIndex: 0,
    selected: useSignal(defaultSelected ?? '1'),
  };
  useContextProvider(TabsContext, data);
  return data;
};
