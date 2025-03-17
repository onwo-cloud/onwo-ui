import { Slot, component$, useComputed$, type QwikIntrinsicElements } from '@builder.io/qwik';
import type { ValidName } from '~/types/case-control';
import { cn } from '~/utils/cn';
import { useTabsContext } from './use-tabs-context';

export type PanelProps<TabName extends string> = QwikIntrinsicElements['div'] & {
  class?: string;
  for?: ValidName<TabName>;
};

export const Panel = component$(
  <N extends string>({ class: className, for: forTab, ...props }: PanelProps<N>) => {
    const context = useTabsContext();

    const tabName = useComputed$(() => forTab ?? String(++context.panelIndex));

    return (
      <div
        id={'panel' + tabName.value}
        class={cn('order-4 w-full focus:outline-none', className)}
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
