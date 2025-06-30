import type { DocumentHead } from '@builder.io/qwik-city';
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
        Default: `<Modal>
  <ModalTrigger class="modal-trigger">Open Modal</ModalTrigger>
  <ModalPanel class="modal-panel">
    <ModalTitle>Edit ofile</ModalTitle>
    <ModalDescription>
      You can update your profile here. Hit the save button when finished.
    </ModalDescription>
    <footer>
      <ModalClose class="modal-close">Cancel</ModalClose>
      <ModalClose class="modal-close">Save Changes</ModalClose>
    </footer>
  </ModalPanel>
</Modal>`,
      }}
    />

    <Showcase
      title="Default"
      component={
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
