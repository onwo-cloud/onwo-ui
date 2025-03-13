import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection title="Menu Item" breadcrumbs={[{ label: 'menu-item', url: '/components/menu-item' }]} />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Menu Item - Onwo UI',
  description:
    'Customizable menu-item components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
