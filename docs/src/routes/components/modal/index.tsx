import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection title="Modal" breadcrumbs={[{ label: 'Modal', url: '/components/modal' }]} />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Modal - Onwo UI',
  description:
    'Customizable modal components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
