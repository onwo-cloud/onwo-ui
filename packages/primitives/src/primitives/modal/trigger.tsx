import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$, $ } from '@builder.io/qwik';
import { useModalContext } from './context';

export const Trigger = component$((props: PropsOf<'button'>) => {
  const context = useModalContext();

  const handleClick$ = $(() => {
    context.opened.value = !context.opened.value;
  });

  return (
    <button
      aria-haspopup="dialog"
      aria-expanded={context.opened.value}
      data-open={context.opened.value ? '' : undefined}
      data-closed={context.opened.value ? undefined : ''}
      onClick$={[handleClick$, props.onClick$]}
      {...props}
    >
      <Slot />
    </button>
  );
});
