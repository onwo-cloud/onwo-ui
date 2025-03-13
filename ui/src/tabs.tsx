import { component$, useSignal, Slot, type QwikIntrinsicElements } from '@builder.io/qwik';

// Finish coding the implementations. AI!
export type TabsProps = QwikIntrinsicElements['div'] & {
  id: string;
  testid?: string;
  class?: string;
  selected?: number;
  onChange$?: (index: number) => void;
};

export const Tabs = component$<TabsProps>(
  ({ id, testid, class: className, selected = 0, onChange$, ...props }) => {
    const selectedIndex = useSignal(selected);

    return (
      <div id={id} data-testid={testid} class={className} {...props}>
        <Slot />
      </div>
    );
  },
);

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
}

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
}

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
    return (
      <div
        id={id}
        data-testid={testid}
        class={cn('flex justify-around gap-2', className)}
        role="tablist"
        {...props}
      >
        <Slot />
      </div>
    );
  },
);

export type PillProps = TabProps & {
  unselectedClass?: string;
  selectedClass?: string;
}

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

export type PanelsProps = QwikIntrinsicElements['div'] & {
  id?: string;
  testid?: string;
  class?: string;
  selected?: number;
}

export const Panels = component$<PanelsProps>(
  ({ id, testid, class: className, selected, ...props }) => {
    return (
      <div id={id} data-testid={testid} class={className} {...props}>
        <Slot />
      </div>
    );
  },
);

export type PanelProps = QwikIntrinsicElements['div'] & {
  id?: string;
  testid?: string;
  class?: string;
  selected?: boolean;
}

export const Panel = component$<PanelProps>(
  ({ id, testid, class: className, selected = false, ...props }) => {
    return (
      <div
        id={id}
        data-testid={testid}
        class={cn(selected ? 'block' : 'hidden', className)}
        role="tabpanel"
        {...props}
      >
        <Slot />
      </div>
    );
  },
);
