import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$, $ } from '@builder.io/qwik';
import { useModalContext } from './context';

export const Close = component$((props: PropsOf<'button'>) => {
  const context = useModalContext();

  const handleClick$ = $(() => {
    if (!context.panel.value) return;
    context.panel.value.opened.value = false;
  });

  return (
    <button onClick$={[handleClick$, props.onClick$]} {...props}>
      <Slot />
    </button>
  );
});
