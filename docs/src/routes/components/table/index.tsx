import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection title="Table" breadcrumbs={[{ label: 'Table', url: '/components/table' }]} />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Table - Onwo UI',
  description:
    'Customizable table components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
