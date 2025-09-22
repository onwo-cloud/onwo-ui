import type { PropsOf } from '@builder.io/qwik';
import { Slot, component$, useContextProvider, useId, useSignal } from '@builder.io/qwik';
import type { ModalContext } from './context';
import { modalContextId } from './context';

type ModalRootProps = PropsOf<'div'>;

export const Root = component$((props: ModalRootProps) => {
  const localId = useId();
  const context: ModalContext = { id: localId, panel: useSignal() };

  useContextProvider(modalContextId, context);

  return (
    <div {...props}>
      <Slot />
    </div>
  );
});
