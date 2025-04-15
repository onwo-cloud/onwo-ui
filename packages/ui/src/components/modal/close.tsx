import type { PropsOf } from '@builder.io/qwik';
import { Icons } from '@onwo/icons';
import { Modal } from '@onwo/primitives';

export const Close = ({ className, ...props }: PropsOf<typeof Modal.Close>) => (
  <Modal.Close {...props}>
    <Icons.ControlsClose />
  </Modal.Close>
);
