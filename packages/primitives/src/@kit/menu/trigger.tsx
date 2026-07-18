import { $, component$, Slot } from '@qwik.dev/core';
import { OwPropsOf } from '~primitives/index';
import { PopoverTrigger } from '../popover/popover-trigger';
import { MenuContext } from './dropdown-context';

export const MenuTrigger = component$((props: OwPropsOf<'button'>) => {
  const ctx = MenuContext.use();

  return (
    <PopoverTrigger
      aria-haspopup="menu" // 👈 Overrides popover default for proper Menu A11y
      ref={ctx.triggerRef}
      onKeyDown$={[
        $((e: KeyboardEvent) => {
          if (e.key === 'ArrowDown') {
            e.preventDefault();
            ctx.isOpen.value = true;
            ctx.activeIndex.value = 0; // Highlight first menu item on open
          }
        }),
        props.onKeyDown$,
      ]}
      {...props}
    >
      <Slot />
    </PopoverTrigger>
  );
});
