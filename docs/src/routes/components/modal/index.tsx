import type { DocumentHead } from '@builder.io/qwik-city';
import { primitives as P } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection title="Modal" breadcrumbs={[{ label: 'Modal', url: '/components/modal' }]} />

    <div class="onwo-format"></div>

    <Anatomy
      variants={{
        Default: `<P.Modal.Root>
  <P.Modal.Trigger class="modal-trigger">Open Modal</P.Modal.Trigger>
  <P.Modal.Panel class="modal-panel">
    <P.Modal.Title>Edit Profile</P.Modal.Title>
    <P.Modal.Description>
      You can update your profile here. Hit the save button when finished.
    </P.Modal.Description>
    <footer>
      <P.Modal.Close class="modal-close">Cancel</P.Modal.Close>
      <P.Modal.Close class="modal-close">Save Changes</P.Modal.Close>
    </footer>
  </P.Modal.Panel>
</P.Modal.Root>`,
      }}
    />

    <Showcase
      title="Default"
      component={
        <P.Modal.Root>
          <P.Modal.Trigger class="modal-trigger">Open Modal</P.Modal.Trigger>
          <P.Modal.Panel class="modal-panel">
            <P.Modal.Title>Edit Profile</P.Modal.Title>
            <P.Modal.Description>
              You can update your profile here. Hit the save button when finished.
            </P.Modal.Description>
            <footer>
              <P.Modal.Close class="modal-close">Cancel</P.Modal.Close>
              <P.Modal.Close class="modal-close">Save Changes</P.Modal.Close>
            </footer>
          </P.Modal.Panel>
        </P.Modal.Root>
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
