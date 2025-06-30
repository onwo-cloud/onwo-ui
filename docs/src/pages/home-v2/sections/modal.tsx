import { XIcon } from '@onwo/icons';
import {
  Button,
  Modal,
  ModalClose,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalPanel,
  ModalTitle,
  ModalTrigger,
} from '@onwo/ui';
import type { BoxedComp, Section } from '.';

const defaultModal: BoxedComp = {
  title: 'Default',
  display: () => (
    <Modal>
      <ModalTrigger class="block mx-auto">
        <Button as="div">Open Modal</Button>
      </ModalTrigger>
      <ModalPanel>
        <ModalHeader class="flex justify-between">
          <ModalTitle class="font-medium">Opened a modal</ModalTitle>
          <ModalClose>
            <Button as="div" size="xs" variant="ghost">
              <XIcon size="xs" />
            </Button>
          </ModalClose>
        </ModalHeader>
        <ModalDescription>
          You can try typing in this input on mobile to check repositioning.
          <input class="border border-line" name="text-input" />
        </ModalDescription>
        <ModalFooter class="flex gap-4 justify-between">
          <ModalClose>
            <Button as="div" size="sm" variant="ghost">
              Cancel
            </Button>
          </ModalClose>
          <ModalClose>
            <Button as="div" size="sm">
              Save changes
            </Button>
          </ModalClose>
        </ModalFooter>
      </ModalPanel>
    </Modal>
  ),
  code: `
<Modal>
  <ModalTrigger>
    <Button>Open Modal</Button>
  </ModalTrigger>
  <ModalPanel>
    <ModalHeader class="flex justify-between">
      <ModalTitle class="font-medium">Opened a modal</ModalTitle>
      <ModalClose>
        <Button size="xs" variant="ghost">
          <XIcon size="xs" />
        </Button>
      </ModalClose>
    </ModalHeader>
    <ModalDescription>
      You can try typing in this input on mobile to check repositioning.
      <input class="border border-line" name="text-input" />
    </ModalDescription>
    <ModalFooter class="flex gap-4 justify-between">
      <ModalClose>
        <Button size="sm" variant="ghost">
          Cancel
        </Button>
      </ModalClose>
      <ModalClose>
        <Button size="sm">
          Save changes
        </Button>
      </ModalClose>
    </ModalFooter>
  </ModalPanel>
</Modal>
`,
};

export const section: Section = {
  title: 'Modal',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/modal',
  description: 'Display a Modal component',
  components: [defaultModal],
};
