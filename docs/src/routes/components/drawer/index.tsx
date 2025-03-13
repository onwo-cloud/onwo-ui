import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection title="Drawer" breadcrumbs={[{ label: 'drawer', url: '/components/drawer' }]} />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Drawer - Onwo UI',
  description:
    'Customizable drawer components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
