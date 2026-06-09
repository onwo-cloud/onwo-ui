import { Slot, component$, useComputed$ } from '@builder.io/qwik';
import type { ValidName } from '~primitives/types/case-control';
import type { Primitive } from '~primitives/utils/as';

import { useTabsContext } from './use-tabs-context';

export type PanelProps<TabName extends string> = Primitive<'div'> & {
  for?: ValidName<TabName>;
};

export const Panel = component$(
  <N extends string>({ class: className, for: forTab, ...props }: PanelProps<N>) => {
    const context = useTabsContext();
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
