import { OwPropsOf } from '~primitives/index';
import { Button as ButtonPrimitive } from '../button';
import { Slot, component$, $ } from '@qwik.dev/core';

import { useModalContext } from './context';

export type TriggerProps = OwPropsOf<'div'>;

export const Trigger = component$((props: TriggerProps) => {
  const context = useModalContext();

  return (
    <ButtonPrimitive
      as="div"
      {...props}
      data-modal-trigger=""
      aria-haspopup="dialog"
      aria-expanded={context.control.opened.value}
      data-open={context.control.opened.value ? '' : undefined}
      data-closed={context.control.opened.value ? undefined : ''}
      onClick$={[context.control.show$, props.onClick$]}
    >
      <Slot />
    </ButtonPrimitive>
  );
});
