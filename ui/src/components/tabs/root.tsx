import { component$, useSignal, type QwikIntrinsicElements, useTask$, $, Slot } from '@builder.io/qwik';
import { cn } from '~/utils/cn';

export type TabsProps = QwikIntrinsicElements['div'] & {
  id: string;
  testid?: string;
  class?: string;
  selected?: number;
  onChange$?: (index: number) => void;
};

export const Root = component$<TabsProps>(
  ({ id, testid, class: className, selected = 0, onChange$, ...props }) => {
    const selectedIndex = useSignal(selected);

    // Sync selected prop with internal state
    useTask$(({ track }) => {
      track(() => selected);
      selectedIndex.value = selected;
    });

    // Handle tab change
    const handleChange = $((index: number) => {
      selectedIndex.value = index;
      onChange$?.(index);
    });

    return (
      <div id={id} data-testid={testid} class={cn('flex flex-col', className)} {...props}>
        <Slot />
      </div>
    );
  },
);
