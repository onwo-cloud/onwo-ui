import { $, component$, Signal, Slot, useSignal } from '@qwik.dev/core';
import { PopoverRoot } from '../popover/popover-root';
import { MenuContext, MenuContextData } from './dropdown-context';
import type { FloatingOptions } from '../floating';
import { withAs } from '~primitives/index';

type MenuRootProps = {
  'bind:open'?: Signal<boolean>;
  floating?: FloatingOptions;
};

export const MenuRoot = withAs('div')<MenuRootProps>(
  component$(({ As, 'bind:open': givenOpen, floating, ...props }) => {
    const localOpen = useSignal(false);
    const isOpen = givenOpen ?? localOpen;

    const itemIds = useSignal<string[]>([]);
    const activeIndex = useSignal(-1);
    const triggerRef = useSignal<HTMLElement>();

    const registerItem = $((id: string) => {
      itemIds.value = itemIds.value.includes(id) ? itemIds.value : [...itemIds.value, id];
    });

    const unregisterItem = $((id: string) => {
      itemIds.value = itemIds.value.filter((itemId) => itemId !== id);
    });

    const closeAll = $(() => {
      isOpen.value = false;
    });

    const menuContextValue: MenuContextData = {
      isOpen,
      triggerRef,
      registerItem,
      unregisterItem,
      activeIndex,
      itemIds,
      closeAll,
      isSubmenu: false,
    };

    MenuContext.useProvider(menuContextValue);

    return (
      <PopoverRoot 
        as={As as unknown as 'div'} 
        bind:open={isOpen} 
        bind:trigger={triggerRef} // 👈 LINKS TRIGGER SIGNAL TO POPOVER
        floating={floating} 
        {...props}
      >
        <Slot />
      </PopoverRoot>
    );
  })
);
