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
        Default: `import { Spinner } from '@onwo/ui';

<Spinner />`,
      }}
    />

    <Showcase
      title="Default"
      component={
        <div class="flex justify-center">
          <Spinner />
        </div>
      }
      code={`<Spinner />`}
    />

    <Showcase
      title="Sizes"
      component={
        <div class="flex gap-2 flex-wrap items-center justify-around">
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner />
          <Spinner size="lg" />
          <Spinner size="xl" />
          <Spinner size={48} />
        </div>
      }
      code={`<Spinner size="xs" />
<Spinner size="sm" />
<Spinner />
<Spinner size="lg" />
<Spinner size="xl" />
<Spinner size={48} />`}
    />

    <Showcase
      title="Colors"
      component={
        <div class="flex gap-2 flex-wrap items-center justify-around">
          <Spinner class="text-roshi" />
          <Spinner class="text-krillin" />
          <Spinner class="text-dodoria" />
          <Spinner class="text-whis" />
        </div>
      }
      code={`<Spinner class="text-roshi" />
<Spinner class="text-krillin" />
<Spinner class="text-dodoria" />
<Spinner class="text-whis" />`}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Spinner - Onwo UI',
  description:
    'Customizable spinner components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
