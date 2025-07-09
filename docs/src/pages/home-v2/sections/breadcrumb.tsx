import { ArrowRightIcon } from '@onwo/icons';
import { Breadcrumb } from '@onwo/ui';
import type { BoxedComp, Section } from '.';

const links = [
  { to: '/', label: 'Home' },
  { to: '/hello', label: 'Hello' },
  { to: '/world', label: 'World' },
] as const;

const defaultBreadcrumb: BoxedComp = {
  title: 'Default',
  display: () => (
    <Breadcrumb.Root>
      <Breadcrumb.Link to="#/" label="Home" />
      <Breadcrumb.Link to="#/hello" label="Hello" />
      <Breadcrumb.Link to="#/hello/world" label="World" />
    </Breadcrumb.Root>
  ),
  code: `<Breadcrumb>
  <Breadcrumb.Link to="/" label="Home" />
  <Breadcrumb.Link to="/hello" label="Hello" />
  <Breadcrumb.Link to="/hello/world" label="World" />
</Breadcrumb>`,
};

const customSeparatorBreadcrumb: BoxedComp = {
  title: 'Custom separator icon',
  display: () => (
    <div class="flex flex-col gap-4">
      <Breadcrumb.Root separator={ArrowRightIcon}>
        {Breadcrumb.Link.fromList(links)}
      </Breadcrumb.Root>
    </div>
  ),
  code: `<Breadcrumb separator={ArrowRightIcon}>
  {Breadcrumb.Link.fromList(links)}
</Breadcrumb>`,
};

export const section: Section = {
  title: 'Breadcrumb',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/breadcrumb',
  description: 'Easy hierarchical navigation',
  components: [defaultBreadcrumb, customSeparatorBreadcrumb],
};
