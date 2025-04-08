import type { DocumentHead } from '@builder.io/qwik-city';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Table"
      description="Display a Table component"
      breadcrumbs={[{ label: 'Table', to: '/components/table' }]}
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
  title: 'Table - Onwo UI',
  description:
    'Customizable table components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
