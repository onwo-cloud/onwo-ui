import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection title="Tag" breadcrumbs={[{ label: 'Tag', url: '/components/tag' }]} />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Tag - Onwo UI',
  description:
    'Customizable tag components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
