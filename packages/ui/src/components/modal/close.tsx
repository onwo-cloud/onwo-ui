import { type PropsOf } from '@builder.io/qwik';
import { Modal } from '@onwo/primitives';

export const Close = ({ className, ...props }: PropsOf<typeof Modal.Close>) => (
  <Modal.Close {...props}>{props.children}</Modal.Close>
);
