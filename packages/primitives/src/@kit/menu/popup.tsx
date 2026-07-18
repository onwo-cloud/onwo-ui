import { $, component$, Slot } from '@qwik.dev/core';
import { MenuContext } from './dropdown-context';
import { PopoverPanel } from '../popover/popover-panel';
import { PositionProps } from '../popover/popover-types';
import { OwPropsOf, withAs } from '~primitives/index';

export type MenuPopupProps = OwPropsOf<'div'> & PositionProps;

export const MenuPopup = withAs('div')<OwPropsOf<typeof PopoverPanel>>(component$((props) => {
  const ctx = MenuContext.use();

  const handleKeyDown = $((e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        e.stopPropagation();
        ctx.activeIndex.value = (ctx.activeIndex.value + 1) % ctx.itemIds.value.length;
        break;
      case 'ArrowUp':
        e.preventDefault();
        e.stopPropagation();
        ctx.activeIndex.value =
          (ctx.activeIndex.value - 1 + ctx.itemIds.value.length) % ctx.itemIds.value.length;
        break;
      case 'ArrowLeft':
        if (ctx.isSubmenu && ctx.parentContext) {
          e.preventDefault();
          e.stopPropagation();
          ctx.isOpen.value = false;
        }
        break;
      case 'Tab':
        ctx.closeAll();
        break;
    }
  });

  return (
    <PopoverPanel
      role="menu"
      tabIndex={-1}
      collisionAvoidance={props.collisionAvoidance ?? true}
      onKeyDown$={[handleKeyDown, props.onKeyDown$]}
      {...props}
    >
      <Slot />
    </PopoverPanel>
  );
}));
