import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$, $ } from '@builder.io/qwik';
import { useModalContext } from './context';

export const Close = component$((props: PropsOf<'button'>) => {
  const context = useModalContext();

  const handleClick$ = $(() => {
    context.opened.value = false;
  });

  return (
    <button onClick$={[handleClick$, props.onClick$]} {...props}>
      <Slot />
    </button>
  );
});
