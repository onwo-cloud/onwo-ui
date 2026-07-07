import { $, component$, Slot, useSignal, useTask$ } from '@qwik.dev/core';

import { MenuContext, MenuContextData } from '../../dropdown-context';

export const MenuSubRoot = component$(() => {
  const parentCtx = MenuContext.use();
  const isOpen = useSignal(false);
  const itemIds = useSignal<string[]>([]);
  const activeIndex = useSignal(-1);
  const closeTimer = useSignal<number | undefined>(undefined);

  const registerItem = $((id: string, _node: HTMLElement) => {
    itemIds.value = itemIds.value.includes(id) ? itemIds.value : [...itemIds.value, id];
  });

  const unregisterItem = $((id: string) => {
    itemIds.value = [...itemIds.value.filter((itemId) => itemId !== id)];
  });

  useTask$(({ track }) => {
    const parentIsOpen = track(() => parentCtx.isOpen.value);
    if (!parentIsOpen) {
      isOpen.value = false;
    }
  });

  const submenuCtx: MenuContextData = {
    isOpen,
    triggerRef: useSignal(),
    registerItem,
    unregisterItem,
    activeIndex,
    itemIds,
    closeAll: parentCtx.closeAll,
    isSubmenu: true,
    parentContext: parentCtx,
  };

  MenuContext.useProvider(submenuCtx);

  // 2. Logic: Wait 150ms before closing
  const startClose = $(() => {
    // Clear any existing timer first
    if (closeTimer.value) clearTimeout(closeTimer.value);

    // Start new timer
    closeTimer.value = window.setTimeout(() => {
      isOpen.value = false;
    }, 150);
  });

  // 3. Logic: Cancel closing if mouse comes back (or enters popup)
  const stopClose = $(() => {
    if (closeTimer.value) {
      clearTimeout(closeTimer.value);
      closeTimer.value = undefined;
    }
    // Ensure it's open (in case we re-entered just as it was closing)
    isOpen.value = true;
  });

  return (
    <div
      style={{ position: 'relative' }}
      // Apply the bridge logic to the wrapper
      onMouseLeave$={startClose}
      onMouseEnter$={stopClose}
    >
      <Slot />
    </div>
  );
});
