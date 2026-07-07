import type { PropsOf } from '@qwik.dev/core';
import { Slot, component$, $ } from '@qwik.dev/core';
import { useModalContext } from './context';

export type CloseProps = PropsOf<'button'>;

export const Close = component$((props: CloseProps) => {
  const context = useModalContext();

  const handleClick$ = $(() => {
    context.control.opened.value = false;
  });

  return (
    <button onClick$={[handleClick$, props.onClick$]} {...props}>
      <Slot />
    </button>
  );
});
