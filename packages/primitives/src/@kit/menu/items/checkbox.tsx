import { $, component$, PropsOf, QRL, Signal, Slot, useSignal, useTask$ } from '@qwik.dev/core';

import { useMenuAndRegisterItem } from '../dropdown-context';

type CheckboxItemProps = PropsOf<'div'> & {
  ['bind:checked']?: Signal<boolean>;
  disabled?: boolean;
  onCheckedChange$?: QRL<(checked: boolean) => void>;
};

export const MenuCheckboxItem = component$(
  ({
    ['bind:checked']: __opt_checked,
    disabled,
    onCheckedChange$,
    ...props
  }: CheckboxItemProps) => {
    const checked = __opt_checked ?? useSignal();
    const { ctx, itemRef, id, isActive } = useMenuAndRegisterItem();

    // 2. Handle Focus
    useTask$(({ track }) => {
      track(() => isActive.value);
      if (isActive.value && itemRef.value) {
        itemRef.value.focus();
      }
    });

    // 3. Toggle Logic
    const handleSelect = $(() => {
      if (disabled) return;

      const newValue = !checked;

      if (onCheckedChange$) {
        onCheckedChange$!(newValue);
      }

      // TODO: Note: Standard dropdowns usually close on selection.
      // ctx.closeAll();
    });

    return (
      <div
        {...props}
        ref={itemRef}
        role="menuitemcheckbox"
        aria-checked={!!checked.value}
        aria-disabled={disabled}
        data-is-active={isActive.value}
        tabIndex={isActive.value ? 0 : -1}
        onClick$={[handleSelect, props.onClick$]}
        onMouseEnter$={[
          $(() => {
            const index = ctx.itemIds.value.indexOf(id) ?? -1;
            ctx.activeIndex.value = index;
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
  },
);
