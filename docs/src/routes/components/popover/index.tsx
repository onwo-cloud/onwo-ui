import type { DocumentHead } from '@builder.io/qwik-city';
import { primitives as P } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Popover"
      breadcrumbs={[{ label: 'Popover', to: '/components/popover' }]}
    />

    <div class="onwo-format"></div>

    <Anatomy
      variants={{
        Default: `<P.Popover.Root gutter={4}>
  <P.Popover.Trigger class="popover-trigger">Click me</P.Popover.Trigger>
  <P.Popover.Panel class="popover-panel">
    I am anchored to the popover trigger!
  </P.Popover.Panel>
</P.Popover.Root>`,
      }}
    />

    <Showcase
      title="Default"
      component={
        <P.Popover.Root gutter={4}>
          <P.Popover.Trigger class="popover-trigger">Click me</P.Popover.Trigger>
          <P.Popover.Panel class="popover-panel">
            I am anchored to the popover trigger!
          </P.Popover.Panel>
        </P.Popover.Root>
      }
      code={``}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Popover - Onwo UI',
  description:
    'Customizable popover components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
