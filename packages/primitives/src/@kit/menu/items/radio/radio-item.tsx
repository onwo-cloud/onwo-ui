import { $, component$, PropsOf, Slot, useComputed$, useTask$ } from '@builder.io/qwik';


import { useMenuAndRegisterItem } from '../../dropdown-context';
import { RadioGroupContext } from './radio-group-context';

type MenuRadioItemProps = PropsOf<'div'> & {
  value: string;
  disabled?: boolean;
};

export const MenuRadioItem = component$(({ value, disabled, ...props }: MenuRadioItemProps) => {
  const { ctx: menuCtx, itemRef, id, isActive } = useMenuAndRegisterItem();
  const radioCtx = RadioGroupContext.use();

  const isChecked = useComputed$(() => radioCtx.value.value === value);

  useTask$(({ track }) => {
    track(() => isActive.value);
    if (isActive.value && itemRef.value) {
      itemRef.value.focus();
    }
  });

  const handleSelect = $(() => {
    if (disabled) return;
    radioCtx.setValue$(value);
  });

  return (
    <div
      {...props}
      ref={itemRef}
      role="menuitemradio"
      aria-checked={isChecked.value}
      aria-disabled={disabled}
      data-is-active={isActive.value}
      tabIndex={isActive.value ? 0 : -1}
      onClick$={[handleSelect, props.onClick$]}
      onMouseEnter$={[
        $(() => {
          const index = menuCtx.itemIds.value.indexOf(id) ?? -1;
          menuCtx.activeIndex.value = index;
        }),
        props.onMouseEnter$,
      ]}
      onKeyDown$={[
        $((e: KeyboardEvent) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleSelect();
          }
        }),
        props.onKeyDown$,
      ]}
    >
      <Slot />
    </div>
  );
});
