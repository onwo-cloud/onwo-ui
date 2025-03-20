import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Pagination"
      breadcrumbs={[{ label: 'Pagination', url: '/components/pagination' }]}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Pagination - Onwo UI',
  description:
    'Customizable pagination components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
