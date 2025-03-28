import type { DocumentHead } from '@builder.io/qwik-city';
import { Icons } from '@onwo/icons';
import type { primitives as P } from '@onwo/ui';
import { Button } from '@onwo/ui';
import IconMarginDemo from '~/assets/icon-margin-demo.png?jsx';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Button"
      description="Display a text button with or without: icons, loaders, redirects"
      breadcrumbs={[{ label: 'Button', url: '/components/button' }]}
    />

    <p>
      Contrary to html standards, by defaults buttons type will be `button` even if it's used inside
      a form. Make sure to set the type to submit when needed
    </p>
    <Anatomy
      variants={{
        Default: `import { Button } from '@onwo/ui';

<Button> Default </Button>`,
      }}
    />

    <Showcase
      title="Default"
      component={
        <div class="flex justify-center">
          <Button> Default </Button>
        </div>
      }
      code={`<Button> Default </Button>`}
    />

    <Showcase
      title="Variants"
      component={
        <div class="flex gap-4 justify-around">
          <Button> Default </Button>
          <Button variant="outline"> Outline </Button>
          <Button variant="ghost"> Ghost </Button>
        </div>
      }
      code={`<Button> Default </Button>
<Button variant="outline"> Outline </Button>
<Button variant="ghost"> Ghost </Button>`}
    />

    <Showcase
      title="Sizes"
      component={
        <div class="flex gap-4 items-center justify-around">
          <Button size="xs" start={Icons.GenericSettings}>
            Size XS
          </Button>
          <Button size="sm" start={Icons.GenericSettings}>
            Size SM
          </Button>
          <Button size="md" start={Icons.GenericSettings}>
            Size MD
          </Button>
          <Button size="lg" start={Icons.GenericSettings}>
            Size LG
          </Button>
          <Button size="xl" start={Icons.GenericSettings}>
            Size XL
          </Button>
        </div>
      }
      code={`<Button size="xs" start={Icons.GenericSettings}>Size XS</Button>
<Button size="sm" start={Icons.GenericSettings}>Size SM</Button>
<Button size="md" start={Icons.GenericSettings}>Size MD</Button>
<Button size="lg" start={Icons.GenericSettings}>Size LG</Button>
<Button size="xl" start={Icons.GenericSettings}>Size XL</Button>`}
    />

    <div class="flex gap-6 mt-6 items-center">
      <p>
        Icons will scale up alongside buttons, spacing will also differ when a button is added
        through the `start` or `end` props as shown in the following figure, it is generally advised
        to use them.
      </p>
      <IconMarginDemo class="border border-beerus h-[64px] contrast-120 hue-rotate-290" />
    </div>

    <Showcase
      title="Icon position"
      component={
        <div class="flex gap-4 items-center justify-around">
          <Button size="md" start={Icons.GenericSettings}>
            Button start
          </Button>
          <Button size="md" end={Icons.GenericSettings}>
            Button end
          </Button>
        </div>
      }
      code={`<Button size="md" start={Icons.GenericSettings}>Button start</Button>
<Button size="md" end={Icons.GenericSettings}>Button end</Button>`}
    />

    <Showcase
      title="Custom icons"
      component={
        <div class="flex gap-4 items-center justify-around">
          <Button size="md" variant="outline" end={(_: P.IconProps) => <b>🚀</b>}>
            Custom
          </Button>
        </div>
      }
      code={`import { primitives as P } from '@onwo/ui';
const CustomIcon = (_: P.IconProps) => <b>🚀</b>;
<Button size="md" variant="outline" end={CustomIcon}>Custom</Button>`}
    />

    <Showcase
      title="Dynamic tags"
      component={
        <div class="flex justify-center">
          <Button as="a" href="/" target="_blank">
            Default
          </Button>
        </div>
      }
      code={`<Button as="a" href="/" target="_blank">
  Default
</Button>`}
    />
    <p class="mt-6">
      Changing which tag is rendered is trivial, but rather than changing the tag to an `a` element
      it is instead advised to wrap button element inside Link elements as you won't benefit from
      qwik.js cross-page optimizations otherwise.
    </p>
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Button - Onwo UI',
  description:
    'Customizable button components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
