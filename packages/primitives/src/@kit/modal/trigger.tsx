import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$, $ } from '@builder.io/qwik';
import { useModalContext } from './context';

export type TriggerProps = PropsOf<'button'>;

export const Trigger = component$((props: PropsOf<'button'>) => {
  const context = useModalContext();

  const handleClick$ = $(() => {
    if (context.control.opened.value) return;
    context.control.opened.value = !context.control.opened.value;
  });

  return (
    <button
      aria-haspopup="dialog"
      aria-expanded={context.control.opened.value}
      data-open={context.control.opened.value ? '' : undefined}
      data-closed={context.control.opened.value ? undefined : ''}
      onClick$={[handleClick$, props.onClick$]}
      {...props}
    >
      <Slot />
    </button>
  );
});
