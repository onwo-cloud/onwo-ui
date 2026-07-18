import { Slot, component$, $ } from '@qwik.dev/core';
import { OwPropsOf } from '~primitives/index';
import { useModalContext } from './context';
import { Button } from '../button';

export type CloseProps = OwPropsOf<'div'>;

export const Close = component$((props: CloseProps) => {
  const context = useModalContext();

  const handleClick$ = $(() => {
    context.control.hide$();
  });

  return (
    <Button as="div" onClick$={[handleClick$, props.onClick$]} {...props}>
      <Slot />
    </Button>
  );
});
