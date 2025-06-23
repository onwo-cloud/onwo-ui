import {
  component$,
  type Signal,
  type PropFunction,
  useComputed$,
  useStore,
} from '@builder.io/qwik';
import { cn } from '@onwo/ui';
import { HoverBox } from './hover-box';

export interface SimpleTabsProps {
  tabs: string[];
  'bind:selected': Signal<string>;
  onSelected$?: PropFunction<(tab: string) => void>;
  class?: string;
}

export const SimpleTabs = component$<SimpleTabsProps>(
  ({ tabs, 'bind:selected': selected, onSelected$, ...props }) => {
    const tabRefs = useStore<Record<string, HTMLButtonElement>>({});
    const activeElement = useComputed$(() => tabRefs[selected.value]);

    return (
      <div class={cn('w-fit', props.class)}>
        <div class="flex items-center gap-4 relative">
          <HoverBox activeElement={activeElement} />
          {tabs.map((tab) => (
            <button
              key={tab}
              ref={(el) => {
                if (el) {
                  tabRefs[tab] = el;
                }
              }}
              onClick$={() => {
                selected.value = tab;
                onSelected$?.(tab);
              }}
              class={cn(
                'px-4 py-1 border border-line rounded-full text-sm font-medium relative z-10',
                selected.value === tab
                  ? 'transition-colors duration-200 text-ink'
                  : 'text-graphite hover:text-ink',
                selected.value === tab && !activeElement.value && 'bg-papyrus',
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    );
  },
);
