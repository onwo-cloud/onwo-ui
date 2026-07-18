import { Slot, component$, $ } from '@qwik.dev/core';
import type { OwPropsOf } from '~primitives/index';
import { Button as ButtonPrimitive } from '../button';
import { usePopoverContext } from './context';

export type PopoverTriggerProps = OwPropsOf<'div'> & {
  hover?: boolean;
};

export const PopoverTrigger = component$((props: PopoverTriggerProps) => {
  const context = usePopoverContext();
  const {
    hover,
    onClick$,
    onMouseEnter$,
    onMouseLeave$,
    onFocus$,
    onBlur$,
    class: className,
    ...restProps
  } = props;

  const handleClick$ = hover ? onClick$ : [context.control.toggle$, onClick$];

  const handleMouseEnter$ = hover
    ? [$((_: MouseEvent) => context.control.show$()), onMouseEnter$]
    : onMouseEnter$;

  const handleMouseLeave$ = hover
    ? [
        $((e: MouseEvent) => {
          const relatedTarget = e.relatedTarget as HTMLElement | null;
          if (
            relatedTarget &&
            context.control.panelRef.value?.contains(relatedTarget)
          ) {
            return;
          }
          context.control.hide$();
        }),
        onMouseLeave$,
      ]
    : onMouseLeave$;

  const handleFocus$ = hover
    ? [$((_: FocusEvent) => context.control.show$()), onFocus$]
    : onFocus$;

  const handleBlur$ = hover
    ? [
        $((e: FocusEvent) => {
          const relatedTarget = e.relatedTarget as HTMLElement | null;
          if (
            relatedTarget &&
            context.control.panelRef.value?.contains(relatedTarget)
          ) {
            return;
          }
          context.control.hide$();
        }),
        onBlur$,
      ]
    : onBlur$;

  return (
    <ButtonPrimitive
      as="div"
      {...restProps}
      class={['inline-block w-fit', className]}
      ref={context.control.triggerRef}
      data-popover-trigger=""
      aria-haspopup="dialog"
      aria-expanded={context.control.opened.value}
      data-open={context.control.opened.value ? '' : undefined}
      data-closed={context.control.opened.value ? undefined : ''}
      onClick$={handleClick$}
      onMouseEnter$={handleMouseEnter$}
      onMouseLeave$={handleMouseLeave$}
      onFocus$={handleFocus$}
      onBlur$={handleBlur$}
    >
      <Slot />
    </ButtonPrimitive>
  );
});
