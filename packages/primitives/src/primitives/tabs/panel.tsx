import { Slot, component$, useComputed$ } from '@builder.io/qwik';
import type { ValidName } from '~/types/case-control';
import { cn } from '~/utils/cn';
import type { Primitive } from '~/utils/types';
import { useTabsContext } from './use-tabs-context';

export type PanelProps<TabName extends string> = Primitive<'div'> & {
  for?: ValidName<TabName>;
};

export const Panel = component$(
  <N extends string>({ class: className, for: forTab, ...props }: PanelProps<N>) => {
    const context = useTabsContext();

    const tabName = useComputed$(() => forTab ?? String(++context.panelIndex));

    return (
      <div
        id={'panel' + tabName.value}
        class={cn('order-4 w-full outline-none focus-visible:shadow-focus', className)}
        role="tabpanel"
        tabIndex={0}
        data-active={tabName.value === context.selected.value}
        aria-labelledby={tabName.value}
        {...props}
      >
        <Slot />
      </div>
    );
  },
);
