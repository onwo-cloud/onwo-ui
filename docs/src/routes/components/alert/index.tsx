import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection title="Alert" breadcrumbs={[{ label: 'Alert', url: '/components/alert' }]} />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Alert - Onwo UI',
  description:
    'Customizable alert components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
