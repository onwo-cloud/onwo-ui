import type { QRL } from '@qwik.dev/core';
import { OwPropsOf } from '~primitives/index';
import { $, Slot, component$, useComputed$ } from '@qwik.dev/core';
import { TabsContext } from './use-tabs-context';
import { Button } from '../button';

export type TabsItemProps = OwPropsOf<'div'> & {
  disabled?: boolean;
  name?: string;
  onSelected$?: QRL<(name: string) => void>;
};

export const TabsItem = component$(({
  disabled = false,
  onSelected$,
  name: defaultName,
  ...props
}: TabsItemProps) => {
  const context = TabsContext.use();
  const name = useComputed$(() => defaultName ?? String(++context.currentIndex));
  const isSelected = useComputed$(() => name.value === context.selected.value);

  return (
    <Button
      as="div"
      disabled={disabled}
      role="tab"
      tabIndex={isSelected.value ? 0 : -1}
      data-selected={isSelected.value}
      aria-selected={isSelected.value}
      aria-controls={`${context.name}-panel-${name.value}`}
      id={`${context.name}-tab-${name.value}`}
      {...props}
      onClick$={[$(() => {
          context.selected.value = name.value;
          onSelected$?.(name.value);
        }),
        props.onClick$,
      ]}
      onKeyDown$={[$((e: KeyboardEvent, el: HTMLDivElement) => {
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
      }),
      props.onKeyDown$,
      ]}
    >
      <Slot />
    </Button>
  );
},
);
