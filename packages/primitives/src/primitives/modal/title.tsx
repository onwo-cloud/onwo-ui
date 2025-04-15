import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';
import { useModalContext } from './context';

export type ModalTitleProps = PropsOf<'h2'>;

export const Title = component$((props: ModalTitleProps) => {
  const context = useModalContext();

  const titleId = `${context.id}-title`;

  return (
    <h2 id={titleId} {...props}>
      <Slot />
    </h2>
  );
});
