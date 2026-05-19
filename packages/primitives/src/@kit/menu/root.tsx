import { $, component$, PropsOf, Slot, useSignal } from '@builder.io/qwik';
import { useOutsideClick } from '~primitives/hooks/use-outside-click';

import { MenuContext, MenuContextData } from './dropdown-context';

export const MenuRoot = component$((props: PropsOf<'div'>) => {
  const isOpen = useSignal(false);
  const containerRef = useSignal<HTMLDivElement>();
  const itemIds = useSignal<string[]>([]);
  const activeIndex = useSignal(-1);

  const registerItem = $((id: string, _node: HTMLElement) => {
    itemIds.value = itemIds.value.includes(id) ? itemIds.value : [...itemIds.value, id];
  });

  const unregisterItem = $((id: string) => {
    itemIds.value = [...itemIds.value.filter((itemId) => itemId !== id)];
  });

  const closeAll = $(() => {
    isOpen.value = false;
  });

  useOutsideClick(containerRef, closeAll);

  const contextValue: MenuContextData = {
    isOpen,
    triggerRef: useSignal(),
    registerItem,
    unregisterItem,
    activeIndex,
    itemIds,
    closeAll,
    isSubmenu: false,
  };

  MenuContext.useProvider(contextValue);

  return (
    <div
      ref={containerRef}
      style={{ width: '100%', position: 'relative', display: 'inline-block' }}
      {...props}
    >
      <Slot />
    </div>
  );
});
