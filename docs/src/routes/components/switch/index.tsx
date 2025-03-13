import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Switch"
      breadcrumbs={[{ label: 'switch', url: '/components/switch' }]}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Switch - Onwo UI',
  description:
    'Customizable switch components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
