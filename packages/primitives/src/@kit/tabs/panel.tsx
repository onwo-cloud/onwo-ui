import { Slot, component$, useComputed$ } from '@qwik.dev/core';
import type { OwPropsOf } from '~primitives/utils/as';

import { TabsContext } from './use-tabs-context';

export type TabsPanelProps = OwPropsOf<'div'> & {
  for?: string;
};

export const TabsPanel = component$(
  ({ class: className, for: forTab, ...props }: TabsPanelProps) => {
    const context = TabsContext.use();
    const tabName = useComputed$(() => forTab ?? String(++context.panelIndex));
    const isActive = useComputed$(() => tabName.value === context.selected.value);

    return (
      <div
        // 1. Exact match to the Tab `aria-controls`
        id={`${context.name}-panel-${tabName.value}`}
        // 2. Exact match to the Tab `id`
        aria-labelledby={`${context.name}-tab-${tabName.value}`}
        class={['order-4 w-full outline-none focus-visible:shadow-focus', className]}
        role="tabpanel"
        tabIndex={0}
        data-active={isActive.value}
        // 3. Hide unselected panels natively from screen readers and visual layout
        hidden={!isActive.value}
        {...props}
      >
        <Slot />
      </div>
    );
  },
);
