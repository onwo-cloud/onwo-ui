import type { PropsOf, QRL, Signal } from '@builder.io/qwik';
import { Slot, component$, useContextProvider, useId, useSignal } from '@builder.io/qwik';
import type { ModalContext } from './context';
import { modalContextId } from './context';

type ModalRootProps = {
  onShow$?: QRL<() => void>;
  onClose$?: QRL<() => void>;
  'bind:show'?: Signal<boolean>;
  closeOnBackdropClick?: boolean;
  alert?: boolean;
} & PropsOf<'div'>;

export const Root = component$((props: ModalRootProps) => {
  const localId = useId();

  const { 'bind:show': givenShowSig, closeOnBackdropClick, onShow$, onClose$, alert } = props;

  const defaultShowSig = useSignal<boolean>(false);
  const showSig = givenShowSig ?? defaultShowSig;

  const context: ModalContext = {
    id: localId,
    opened: showSig,
    closeOnBackdropClick,
    onShow$,
    onClose$,
    alert,
  };

  useContextProvider(modalContextId, context);

  return (
    <div {...props}>
      <Slot />
    </div>
  );
});
