import { Slot, component$ } from '@builder.io/qwik';
import { cn } from '~/utils/cn';
import type { TabProps } from './tab';

export type PillProps = TabProps & {
  unselectedClass?: string;
  selectedClass?: string;
};

export const Pill = component$<PillProps>(
  ({
    id,
    disabled = false,
    class: className,
    testid,
    unselectedClass = '',
    selectedClass = 'bg-goku',
    tabindex,
    isSelected = false,
    size,
    onChange$,
    ...props
  }) => {
    return (
      <button
        id={id}
        data-testid={testid}
        class={cn(
          'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
          isSelected ? selectedClass : unselectedClass,
          className,
        )}
        disabled={disabled}
        tabIndex={tabindex}
        onClick$={() => onChange$?.(tabindex ?? 0)}
        {...props}
      >
        <Slot />
      </button>
    );
  },
);
