import type { PropsOf } from '@qwik.dev/core';
import { Button as ButtonPrimitive } from '../button';
import { Slot, component$, $ } from '@qwik.dev/core';

import { useModalContext } from './context';

export type TriggerProps = PropsOf<'div'>;

export const Trigger = component$((props: PropsOf<'div'>) => {
  const context = useModalContext();

  const handleClick$ = $(() => {
    if (context.control.opened.value) return;
    context.control.opened.value = !context.control.opened.value;
  });

  return (
    <ButtonPrimitive
      as="div"
      aria-haspopup="dialog"
      aria-expanded={context.control.opened.value}
      data-open={context.control.opened.value ? '' : undefined}
      data-closed={context.control.opened.value ? undefined : ''}
      onClick$={[handleClick$, props.onClick$]}
      {...props}
    >
      <Slot />
    </ButtonPrimitive>
  );
});
