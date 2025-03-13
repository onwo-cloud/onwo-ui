import { component$, type QwikIntrinsicElements } from '@builder.io/qwik';
import { cn } from '~/utils/cn';

export type TabProps = QwikIntrinsicElements['button'] & {
  id?: string;
  disabled?: boolean;
  class?: string;
  testid?: string;
  unselectedClass?: string;
  selectedClass?: string;
  tabindex?: number;
  isSelected?: boolean;
  size?: 'sm' | 'md';
  onChange$?: (index: number) => void;
};

export const Tab = component$<TabProps>(
  ({
    id,
    disabled = false,
    class: className,
    testid,
    unselectedClass = 'after:scale-x-0 text-bulma',
    selectedClass = 'after:scale-x-100 text-piccolo',
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
          'relative px-2 py-1 text-sm font-medium transition-colors duration-200',
          'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-piccolo after:transition-transform after:duration-300',
          isSelected ? selectedClass : unselectedClass,
          disabled && 'opacity-50 cursor-not-allowed',
          className,
        )}
        disabled={disabled}
        tabIndex={tabindex}
        onClick$={() => onChange$?.(tabindex ?? 0)}
        role="tab"
        aria-selected={isSelected}
        {...props}
      >
        <Slot />
      </button>
    );
  },
);
