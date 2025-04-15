import type { DocumentHead } from '@builder.io/qwik-city';
import { Modal } from '@onwo/ui';
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
          <Modal.Trigger>Open Modal</Modal.Trigger>
          <Modal.Panel id="bg-[red]">
            <Modal.Header>
              <Modal.Title>Edit ofile</Modal.Title>
            </Modal.Header>
            <Modal.Description>
              You can update your profile here. Hit the save button when finished.
            </Modal.Description>
            <Modal.Footer>
              <Modal.Close class="modal-close">Cancel</Modal.Close>
              <Modal.Close class="modal-close">Save Changes</Modal.Close>
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
