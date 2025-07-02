import type { DocumentHead } from '@builder.io/qwik-city';
import { MusicIcon } from '@onwo/icons';
import { Chip } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Chip"
      description="Display a Chip component"
      breadcrumbs={[{ label: 'Chip', to: '/components/chip' }]}
    />

    <div class="onwo-format"></div>

    <Anatomy
      variants={{
        Default: `import { Chip } from '@onwo/ui';

<Chip>Default</Chip>`,
      }}
    />

    <Showcase
      title="Default"
      component={
        <div class="flex justify-center">
          <Chip>Default</Chip>
        </div>
      }
      code={`<Chip>Default</Chip>`}
    />

    <Showcase
      title="Sizes"
      component={
        <div class="flex items-center justify-around">
          <Chip size="sm">Small</Chip>
          <Chip>Medium</Chip>
        </div>
      }
      code={`<Chip size="small">Small</Chip>
<Chip>Medium</Chip>`}
    />

    <Showcase
      title="Variants"
      component={
        <div class="flex gap-2 flex-wrap items-center justify-around">
          <Chip variant="ghost">Ghost variant</Chip>
          <Chip variant="stroke">Stroke variant</Chip>
          <Chip>Default variant</Chip>
        </div>
      }
      code={`<Chip variant="ghost">Ghost variant</Chip>
<Chip>Default variant</Chip>`}
    />

    <Showcase
      title="Status"
      component={
        <div class="flex gap-2 flex-wrap items-center justify-around">
          <Chip active>Active</Chip>
          <Chip variant="stroke" active>
            Active
          </Chip>
          <Chip disabled>Disabled</Chip>
          <Chip variant="ghost" disabled>
            Disabled
          </Chip>
        </div>
      }
      code={`<Chip active>Active</Chip>
<Chip variant="stroke" active>Active</Chip>
<Chip disabled>Disabled</Chip>
<Chip variant="ghost" disabled>Disabled</Chip>`}
    />

    <Showcase
      title="With icons"
      component={
        <div class="flex  gap-2 flex-wrap items-center justify-around">
          <Chip variant="stroke">
            <MusicIcon />
            Left Icon
          </Chip>
          <Chip variant="stroke">
            Right Icon
            <MusicIcon />
          </Chip>
          <Chip variant="stroke">
            <MusicIcon />
          </Chip>
        </div>
      }
      code={`<Chip variant="stroke">
  <MusicIcon />
  Left Icon
</Chip>
<Chip variant="stroke">
  Right Icon
  <MusicIcon />
</Chip>
<Chip variant="stroke">
  <MusicIcon />
</Chip>`}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Chip - Onwo UI',
  description:
    'Customizable chip components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
