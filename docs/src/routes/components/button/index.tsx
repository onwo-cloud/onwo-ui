import type { DocumentHead } from '@builder.io/qwik-city';
import { Button } from '@onwo/ui';
import { PageHeadSection } from '~/commons/page-head-section';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Button"
      breadcrumbs={[{ label: 'button', url: '/components/button' }]}
    />
    <Button> Default </Button>
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Button - Onwo UI',
  description:
    'Customizable button components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
