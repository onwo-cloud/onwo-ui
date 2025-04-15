import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';
import { useModalContext } from './context';

export type ModalDescriptionProps = PropsOf<'p'>;

export const Description = component$((props: ModalDescriptionProps) => {
  const context = useModalContext();

  const descriptionId = `${context.id}-description`;

  return (
    <p id={descriptionId} {...props}>
      <Slot />
    </p>
  );
});
