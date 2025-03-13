import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Loader"
      breadcrumbs={[{ label: 'loader', url: '/components/loader' }]}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Loader - Onwo UI',
  description:
    'Customizable loader components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
