import type { DocumentHead } from '@builder.io/qwik-city';
import { Spinner } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Spinner"
      description="Display a Spinner component"
      breadcrumbs={[{ label: 'Spinner', to: '/components/spinner' }]}
    />

    <div class="onwo-format"></div>

    <Anatomy
      variants={{
        Default: ``,
      }}
    />

    <Showcase
      title="Default"
      component={
        <div class="flex justify-center">
          <Spinner />
        </div>
      }
      code={``}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Spinner - Onwo UI',
  description:
    'Customizable spinner components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
