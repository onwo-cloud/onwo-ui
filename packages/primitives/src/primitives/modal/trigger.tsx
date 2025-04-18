import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$, $ } from '@builder.io/qwik';
import { Button } from '../button';
import { useModalContext } from './context';

export const Trigger = component$((props: PropsOf<'button'>) => {
  const context = useModalContext();

  const handleClick$ = $(() => {
    if (!context.panel.value) return;
    context.panel.value.opened.value = !context.panel.value.opened.value;
  });

  return (
    <Button
      aria-haspopup="dialog"
      aria-expanded={context.panel.value?.opened.value}
      data-open={context.panel.value?.opened.value ? '' : undefined}
      data-closed={context.panel.value?.opened.value ? undefined : ''}
      onClick$={[handleClick$, props.onClick$]}
      {...props}
    >
      <Slot />
    </Button>
  );
});
