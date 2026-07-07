import type { PropsOf } from '@qwik.dev/core';
import { Slot, component$, useContextProvider, useId } from '@qwik.dev/core';

import type { ModalContext, ModalControls } from './context';
import { modalContextId, useModalControl } from './context';

export type ModalRootProps = {
  control?: ModalControls;
} & PropsOf<'div'>;

export const Root = component$((props: ModalRootProps) => {
  const localId = useId();

  const context: ModalContext = {
    id: localId,
    control: props.control ?? useModalControl(),
  };

  useContextProvider(modalContextId, context);

  return (
    <div {...props}>
      <Slot />
    </div>
  );
});
