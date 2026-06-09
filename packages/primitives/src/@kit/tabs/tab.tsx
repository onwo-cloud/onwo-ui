import type { QRL, QwikHTMLElements } from '@builder.io/qwik';
import { Slot, component$, useComputed$ } from '@builder.io/qwik';
import type { ValidName } from '~primitives/types/case-control';
import { useTabsContext } from './use-tabs-context';

export type TabProps<Name extends string> = QwikHTMLElements['button'] & {
  disabled?: boolean;
  name?: ValidName<Name>;
  onSelected$?: QRL<(name: string) => void>;
};

export const Tab = component$(
  <Name extends string>({
    disabled = false,
    onSelected$,
    name: defaultName,
    ...props
  }: TabProps<Name>) => {
    const context = useTabsContext();
    const name = useComputed$(() => defaultName ?? String(++context.tabIndex));
    const isSelected = useComputed$(() => name.value === context.selected.value);

    return (
      <button
        disabled={disabled}
        role="tab"
        tabIndex={isSelected.value ? 0 : -1}
        data-selected={isSelected.value}
        aria-selected={isSelected.value}
        aria-controls={`${context.name}-panel-${name.value}`}
        id={`${context.name}-tab-${name.value}`}
        onClick$={() => {
          context.selected.value = name.value;
          onSelected$?.(name.value);
        }}
        onKeyDown$={(e, el) => {
          const tabList = el.closest('[role="tablist"]');
          if (!tabList) return;

          const tabs = Array.from(tabList.querySelectorAll<HTMLElement>('[role="tab"]:not([disabled])'));
          const currentIndex = tabs.indexOf(el);
          let nextIndex = currentIndex;

          if (e.key === 'ArrowRight') {
            nextIndex = (currentIndex + 1) % tabs.length;
          } else if (e.key === 'ArrowLeft') {
            nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
          } else if (e.key === 'Home') {
            nextIndex = 0;
          } else if (e.key === 'End') {
            nextIndex = tabs.length - 1;
          }

          if (nextIndex !== currentIndex) {
            e.preventDefault();
            tabs[nextIndex].focus();

            // Check the context to determine behavior
            if (context.activationMode === 'automatic') {
              tabs[nextIndex].click();
            }
          }
        }}
        {...props}
      >
        <Slot />
      </button>
    );
  },
);
