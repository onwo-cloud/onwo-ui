import { Slot, component$ } from '@builder.io/qwik';
import type { Primitive } from '~primitives/utils/as';

import { useTabsContextProvider } from './use-tabs-context';

export type RootProps = Primitive<'div'> & {
  defaultSelected?: string;
  /**
   * Determines whether tabs are activated automatically when focused with the keyboard.
   * - `false`: The user must press `Space` or `Enter` to activate the tab.
   * - `true`: The tab activates and displays its panel immediately on focus.
   * @default false
   */
  selectOnFocus?: boolean;
};

export const Root = component$((props: RootProps) => {
  // Pass the new prop into the provider
  const ctx = useTabsContextProvider(props.defaultSelected, props.selectOnFocus ? 'automatic' : 'manual');

  return (
    <div id={ctx.name} {...props}>
      <Slot />
    </div>
  );
});
