import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Dropdown"
      breadcrumbs={[{ label: 'dropdown', url: '/components/dropdown' }]}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Dropdown - Onwo UI',
  description:
    'Customizable dropdown components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
