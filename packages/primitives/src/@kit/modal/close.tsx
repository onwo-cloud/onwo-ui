import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$, $ } from '@builder.io/qwik';
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
