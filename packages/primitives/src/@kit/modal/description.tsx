import { OwPropsOf } from '~primitives/index';
import { Slot, component$ } from '@qwik.dev/core';

import { useModalContext } from './context';

export type ModalDescriptionProps = OwPropsOf<'p'>;

export const Description = component$((props: ModalDescriptionProps) => {
  const context = useModalContext();

  const descriptionId = `${context.id}-description`;

  return (
    <p id={descriptionId} {...props}>
      <Slot />
    </p>
  );
});
