import { $, component$, PropsOf, Slot, useComputed$, useId, useTask$ } from '@qwik.dev/core';

import { MenuContext } from '../../dropdown-context';

export const MenuSubTrigger = component$((props: PropsOf<'div'>) => {
  const ctx = MenuContext.use();
  const id = useId();

  useTask$(({ track, cleanup }) => {
    const parentCtx = track(() => ctx.parentContext);
    const element = track(() => ctx.triggerRef.value);

    if (!element || !parentCtx) return;
    parentCtx.registerItem(id, element);
    cleanup(() => parentCtx?.unregisterItem(id));
  });

  const index = useComputed$(() => {
    return ctx.parentContext?.itemIds.value.indexOf(id) ?? -1;
  });

  const isActive = useComputed$(() => index.value === ctx.parentContext?.activeIndex.value);

  // 3. Updated Focus Task: Use ctx.triggerRef
  useTask$(({ track }) => {
    track(() => isActive.value);
    if (isActive.value && ctx.triggerRef.value) {
      ctx.triggerRef.value.focus();
    }
  });

  const handleKeyDown = $((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      e.stopPropagation();
      ctx.isOpen.value = true;
      ctx.activeIndex.value = 0;
    }
  });

  return (
    <div
      ref={ctx.triggerRef}
      role="menuitem"
      aria-haspopup="true"
      aria-expanded={ctx.isOpen.value}
      data-is-opened={ctx.isOpen.value}
      tabIndex={isActive.value ? 0 : -1}
      data-is-active={isActive.value}
      onMouseEnter$={() => {
        if (ctx.parentContext) {
          ctx.parentContext.activeIndex.value = index.value;
        }
        ctx.isOpen.value = true;
      }}
      onClick$={(e) => {
        e.stopPropagation();
        ctx.isOpen.value = true;
      }}
      onKeyDown$={handleKeyDown}
      {...props}
    >
      <Slot />
    </div>
  );
});
