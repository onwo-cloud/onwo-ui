import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection title="Breadcrumb" breadcrumbs={[{ label: 'breadcrumb', url: '/components/breadcrumb' }]} />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Breadcrumb - Onwo UI',
  description:
    'Customizable breadcrumb components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
