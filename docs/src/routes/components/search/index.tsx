import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Search"
      breadcrumbs={[{ label: 'search', url: '/components/search' }]}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Search - Onwo UI',
  description:
    'Customizable search components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
