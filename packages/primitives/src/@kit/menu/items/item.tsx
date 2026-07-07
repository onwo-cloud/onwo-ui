import { $, component$, PropsOf, Slot, useTask$ } from '@qwik.dev/core';

import { useMenuAndRegisterItem } from '../dropdown-context';

type ItemProps = PropsOf<'div'> & { disabled?: boolean };

export const MenuItem = component$(({ disabled = false, ...props }: ItemProps) => {
  const { ctx, itemRef, id, isActive } = useMenuAndRegisterItem();

  useTask$(({ track }) => {
    track(() => isActive.value);
    if (isActive.value && itemRef.value) {
      itemRef.value.focus();
    }
  });

  return (
    <div
      {...props}
      role="menuitem"
      ref={itemRef}
      tabIndex={isActive.value ? 0 : -1}
      data-is-active={isActive.value}
      aria-disabled={disabled}
      onClick$={[
        $(() => {
          if (disabled) return;
          ctx?.closeAll();
        }),
        props.onClick$,
      ]}
      onMouseEnter$={[
        $(() => {
          const index = ctx.itemIds.value.indexOf(id) ?? -1;
          ctx.activeIndex.value = index;
        }),
        props.onMouseEnter$,
      ]}
    >
      <Slot />
    </div>
  );
});
