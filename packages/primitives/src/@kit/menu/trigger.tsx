import { component$, PropsOf, Slot } from '@qwik.dev/core';

import { Button } from '../button';

import { MenuContext } from './dropdown-context';

export const MenuTrigger = component$((props: PropsOf<'div'>) => {
  const ctx = MenuContext.use();

  return (
    <Button
      as="div"
      aria-haspopup="menu"
      aria-expanded={ctx.isOpen.value}
      ref={ctx.triggerRef}
      onClick$={() => {
        ctx.isOpen.value = !ctx.isOpen.value;
      }}
      onKeyDown$={(e) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          ctx.isOpen.value = true;
          ctx.activeIndex.value = 0;
        }
      }}
      {...props}
    >
      <Slot />
    </Button>
  );
});
