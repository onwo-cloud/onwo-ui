import type { DocumentHead } from '@builder.io/qwik-city';
import { ArrowRightIcon, ChevronRightIcon } from '@onwo/icons';
import { Breadcrumb } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

const links = [
  { to: '/', label: 'Home' },
  { to: '/hello', label: 'Hello' },
  { to: '/world', label: 'World' },
] as const;

export default () => (
  <div>
    <PageHeadSection
      title="Breadcrumb"
      description="Easy hierarchical navigation"
      breadcrumbs={[{ label: 'Breadcrumb', to: '/components/breadcrumb' }]}
    />

    <div class="onwo-format">
      <p>
        Breadcrumb navigation assists users in recognizing their position within a website
        hierarchy, by offering a trail of breadcrumbs leading back to the homepage.
      </p>
    </div>

    <Anatomy
      variants={{
        Default: `<Breadcrumb.Root>
  <Breadcrumb.Link to="/" label="Home" />
  <Breadcrumb.Link to="/hello" label="Hello" />
  <Breadcrumb.Link to="/hello/world" label="World" />
</Breadcrumb.Root>`,
        'From List': `const links = [
  { to: '/', label: 'Home' },
  { to: '/hello', label: 'Hello' },
  { to: '/world', label: 'World' }
] as const;

<Breadcrumb.Root>
  {Breadcrumb.Link.fromList(links)}
</Breadcrumb.Root>`,
      }}
    />

    <Showcase
      title="Default"
      component={
        <Breadcrumb.Root>
          <Breadcrumb.Link to="#/" label="Home" />
          <Breadcrumb.Link to="#/hello" label="Hello" />
          <Breadcrumb.Link to="#/hello/world" label="World" />
        </Breadcrumb.Root>
      }
      code={`<Breadcrumb>
  <Breadcrumb.Link to="/" label="Home" />
  <Breadcrumb.Link to="/hello" label="Hello" />
  <Breadcrumb.Link to="/hello/world" label="World" />
</Breadcrumb>`}
    />

    <Showcase
      title="Custom separator icon"
      component={
        <div class="flex flex-col gap-4">
          <Breadcrumb.Root separator={ArrowRightIcon}>
            {Breadcrumb.Link.fromList(links)}
          </Breadcrumb.Root>
        </div>
      }
      code={`<Breadcrumb separator={ArrowRightIcon}>
  {Breadcrumb.Link.fromList(links)}
</Breadcrumb>
`}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Breadcrumb - Onwo UI',
  description:
    'Customizable breadcrumb components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
