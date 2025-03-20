import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Progress"
      breadcrumbs={[{ label: 'Progress', url: '/components/progress' }]}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Progress - Onwo UI',
  description:
    'Customizable progress components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
