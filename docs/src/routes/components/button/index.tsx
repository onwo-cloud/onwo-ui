import type { DocumentHead } from '@builder.io/qwik-city';
import { Button } from '@onwo/ui';
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
        Default: `<Button> Default </Button>`,
      }}
    />

    <Showcase
      title="Default"
      component={<Button> Default </Button>}
      code={`<Button> Default </Button>`}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Button - Onwo UI',
  description:
    'Customizable button components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
