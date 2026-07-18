import { Slot, component$, useId, useContextProvider } from '@qwik.dev/core';
import { modalContextId, ModalControls, useModalControl } from './context';

type RootProps = {
  controls?: ModalControls;
}

export const Root = component$((props: RootProps) => {
  const id = useId();
  const control = props.controls ?? useModalControl();

  useContextProvider(modalContextId, {
    id,
    control,
  });

  return <Slot />;
});
