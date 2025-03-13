import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Snackbar"
      breadcrumbs={[{ label: 'snackbar', url: '/components/snackbar' }]}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Snackbar - Onwo UI',
  description:
    'Customizable snackbar components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
