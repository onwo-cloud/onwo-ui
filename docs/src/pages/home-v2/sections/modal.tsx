import { XIcon } from '@onwo/icons';
import { Button, Modal } from '@onwo/ui';
import type { BoxedComp, Section } from '.';

const defaultModal: BoxedComp = {
  title: 'Default',
  display: () => (
    <Modal.Root>
      <Modal.Trigger class="block mx-auto">
        <Button as="div">Open Modal</Button>
      </Modal.Trigger>
      <Modal.Panel>
        <Modal.Header class="flex justify-between">
          <Modal.Title class="font-medium">Opened a modal</Modal.Title>
          <Modal.Close>
            <Button as="div" size="xs" variant="ghost">
              <XIcon size="xs" />
            </Button>
          </Modal.Close>
        </Modal.Header>
        <Modal.Description>
          You can try typing in this input on mobile to check repositioning.
          <input class="border border-line" name="text-input" />
        </Modal.Description>
        <Modal.Footer class="flex gap-4 justify-between">
          <Modal.Close>
            <Button as="div" size="sm" variant="ghost">
              Cancel
            </Button>
          </Modal.Close>
          <Modal.Close>
            <Button as="div" size="sm">
              Save changes
            </Button>
          </Modal.Close>
        </Modal.Footer>
      </Modal.Panel>
    </Modal.Root>
  ),
  code: `
<Modal.Root>
  <Modal.Trigger>
    <Button>Open Modal</Button>
  </Modal.Trigger>
  <Modal.Panel>
    <Modal.Header class="flex justify-between">
      <Modal.Title class="font-medium">Opened a modal</Modal.Title>
      <Modal.Close>
        <Button size="xs" variant="ghost">
          <XIcon size="xs" />
        </Button>
      </Modal.Close>
    </Modal.Header>
    <Modal.Description>
      You can try typing in this input on mobile to check repositioning.
      <input class="border border-line" name="text-input" />
    </Modal.Description>
    <Modal.Footer class="flex gap-4 justify-between">
      <Modal.Close>
        <Button size="sm" variant="ghost">
          Cancel
        </Button>
      </Modal.Close>
      <Modal.Close>
        <Button size="sm">
          Save changes
        </Button>
      </Modal.Close>
    </Modal.Footer>
  </Modal.Panel>
</Modal.Root>
`,
};

export const section: Section = {
  title: 'Modal',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/modal',
  description: 'Display a Modal component',
  components: [defaultModal],
};
