import type { QRL } from '@builder.io/qwik';
import { $, component$, Slot } from '@builder.io/qwik';
import { Button } from '@onwo/ui/button';
import {
  Modal,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalPanel,
  ModalTitle,
  useModalControl,
} from '@onwo/ui/modal';

type SaveThemeModalProviderProps = {
  themeName: string;
  onSave$: QRL<() => void>;
};

export const SaveThemeModalProvider = component$(
  ({ themeName, onSave$ }: SaveThemeModalProviderProps) => {
    const control = useModalControl();

    const handleSave = $(async () => {
      await onSave$();
      control.hide$();
    });

    return (
      <Modal control={control}>
        <Slot />
        <ModalPanel>
          <ModalHeader>
            <ModalTitle>Save Theme</ModalTitle>
            <ModalDescription>
              Save "{themeName}" to your custom themes. This will overwrite if a theme with this
              name already exists.
            </ModalDescription>
          </ModalHeader>
          <ModalFooter>
            <Button onClick$={handleSave}>Confirm Save</Button>
          </ModalFooter>
        </ModalPanel>
      </Modal>
    );
  },
);
