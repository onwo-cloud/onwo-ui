import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Bottom Sheet"
      breadcrumbs={[{ label: 'bottom-sheet', url: '/components/bottom-sheet' }]}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Bottom Sheet - Onwo UI',
  description:
    'Customizable bottom-sheet components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
