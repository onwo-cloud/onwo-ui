import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Tooltip"
      breadcrumbs={[{ label: 'tooltip', url: '/components/tooltip' }]}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Tooltip - Onwo UI',
  description:
    'Customizable tooltip components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
