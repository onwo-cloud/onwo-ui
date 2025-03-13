import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Carousel"
      breadcrumbs={[{ label: 'carousel', url: '/components/carousel' }]}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Carousel - Onwo UI',
  description:
    'Customizable carousel components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
