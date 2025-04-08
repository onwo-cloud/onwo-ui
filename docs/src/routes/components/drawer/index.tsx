import type { DocumentHead } from '@builder.io/qwik-city';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Drawer"
      description="Display a Drawer component"
      breadcrumbs={[{ label: 'Drawer', to: '/components/drawer' }]}
    />

    <div class="onwo-format"></div>

    <Anatomy
      variants={{
        Default: ``,
      }}
    />

    <Showcase title="Default" component={<div />} code={``} />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Drawer - Onwo UI',
  description:
    'Customizable drawer components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
