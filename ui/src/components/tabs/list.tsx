import { Slot, component$, type QwikIntrinsicElements } from '@builder.io/qwik';
import { cn } from '~/utils/cn';

export type ListProps = QwikIntrinsicElements['div'] & {
  id?: string;
  testid?: string;
  class?: string;
  size?: 'sm' | 'md';
  selected?: number;
  value?: number;
  tabTitles?: string[];
  tabModule?: any;
  onChange$?: (index: number) => void;
};

export const List = component$<ListProps>(
  ({
    id,
    testid,
    class: className,
    size = 'md',
    selected,
    value,
    tabTitles = [],
    tabModule,
    onChange$,
    ...props
  }) => {
    const sizeClasses = {
      sm: 'text-sm',
      md: 'text-base',
    };

    return (
      <div
        id={id}
        data-testid={testid}
        class={cn('flex justify-around gap-2 border-b border-beerus', sizeClasses[size], className)}
        role="tablist"
        {...props}
      >
        <Slot />
      </div>
    );
  },
);
