import { Slot, component$ } from '@qwik.dev/core';
import type { OwPropsOf } from '~primitives/utils/as';

import { TabsContext } from './use-tabs-context';

export type TabsRootProps = OwPropsOf<'div'> & {
  defaultSelected?: string;
  /**
   * Determines whether tabs are activated automatically when focused with the keyboard.
   * - `false`: The user must press `Space` or `Enter` to activate the tab.
   * - `true`: The tab activates and displays its panel immediately on focus.
   * @default false
   */
  selectOnFocus?: boolean;
};

export const TabsRoot = component$((props: TabsRootProps) => {
  // Pass the new prop into the provider
  const ctx = TabsContext.useProvider({
    defaultSelected: props.defaultSelected,
    activationMode: props.selectOnFocus ? 'automatic' : 'manual'
  });

  return (
    <div id={ctx.name} {...props}>
      <Slot />
    </div>
  );
});
