import { Slot, component$ } from '@builder.io/qwik';
import type { Primitive } from '~/utils/types';
import { useModalContext } from './context';

export type ModalTitleProps = Primitive<'h2'>;

export const Title = component$((props: ModalTitleProps) => {
  const context = useModalContext();

  const titleId = `${context.id}-title`;

  return (
    <h2 id={titleId} {...props}>
      <Slot />
    </h2>
  );
});
