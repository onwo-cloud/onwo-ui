import type { DocumentHead } from '@builder.io/qwik-city';
import { XIcon } from '@onwo/icons';
import { Button, Modal } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Modal"
      description="Display a Modal component"
      breadcrumbs={[{ label: 'Modal', to: '/components/modal' }]}
    />

    <div class="onwo-format"></div>

    <Anatomy
      variants={{
        Default: `<Modal.Root>
  <Modal.Trigger class="modal-trigger">Open Modal</Modal.Trigger>
  <Modal.nel class="modal-panel">
    <Modal.Title>Edit ofile</Modal.Title>
    <Modal.Description>
      You can update your profile here. Hit the save button when finished.
    </Modal.Description>
    <footer>
      <Modal.Close class="modal-close">Cancel</Modal.Close>
      <Modal.Close class="modal-close">Save Changes</Modal.Close>
    </footer>
  </Modal.nel>
</Modal.Root>`,
      }}
    />

    <Showcase
      title="Default"
      component={
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
      }
      code={``}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Modal - Onwo UI',
  description:
    'Customizable modal components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
