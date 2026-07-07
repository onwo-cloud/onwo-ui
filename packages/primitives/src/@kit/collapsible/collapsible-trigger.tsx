import { component$, Slot, useContext, $, sync$, type PropsOf } from '@qwik.dev/core';

import { Button as ButtonPrimitive } from '../button';

import { CollapsibleContext } from './collapsible-context';

// Synchronously prevents ArrowDown from scrolling the whole page
export const triggerKeyDownSync = sync$((e: KeyboardEvent) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
  }
});

export const CollapsibleTrigger = component$<PropsOf<'div'>>(
  ({ onClick$, onKeyDown$, ...props }) => {
    const ctx = useContext(CollapsibleContext);

    const handleClick = $(() => {
      console.debug('handle click in trigger');
      ctx.isExpanded.value = !ctx.isExpanded.value;
    });

    const handleKeyDown = $((e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        if (!ctx.isExpanded.value) {
          ctx.isExpanded.value = true;
        }
        requestAnimationFrame(() => {
          const list = document.getElementById(ctx.contentId);
          const firstItem = list?.querySelector('[data-list-item]') as HTMLElement;
          firstItem?.focus();
        });
      }
    });

    return (
      <ButtonPrimitive
        as="div"
        onClick$={[onClick$, handleClick]}
        onKeyDown$={[onKeyDown$, triggerKeyDownSync, handleKeyDown]}
        aria-expanded={ctx.isExpanded.value}
        aria-controls={ctx.contentId}
        data-state={ctx.isExpanded.value ? 'open' : 'closed'}
        {...props}
      >
        <Slot />
      </ButtonPrimitive>
    );
  },
);
