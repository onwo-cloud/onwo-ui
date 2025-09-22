import { ArrowRightIcon } from '@onwo/icons';
import { Breadcrumb, BreadcrumbLink } from '@onwo/ui';
import type { BoxedComp, Section } from '.';

const links = [
  { to: '/', label: 'Home' },
  { to: '/hello', label: 'Hello' },
  { to: '/world', label: 'World' },
] as const;

const defaultBreadcrumb: BoxedComp = {
  title: 'Default',
  display: () => (
    <Breadcrumb>
      <BreadcrumbLink to="#/" label="Home" />
      <BreadcrumbLink to="#/hello" label="Hello" />
      <BreadcrumbLink to="#/hello/world" label="World" />
    </Breadcrumb>
  ),
  code: `<Breadcrumb>
  <BreadcrumbLink to="/" label="Home" />
  <BreadcrumbLink to="/hello" label="Hello" />
  <BreadcrumbLink to="/hello/world" label="World" />
</Breadcrumb>`,
};

const customSeparatorBreadcrumb: BoxedComp = {
  title: 'Custom separator icon',
  display: () => (
    <div class="flex flex-col gap-4">
      <Breadcrumb separator={ArrowRightIcon}>{BreadcrumbLink.fromList(links)}</Breadcrumb>
    </div>
  ),
  code: `<Breadcrumb separator={ArrowRightIcon}>
  {BreadcrumbLink.fromList(links)}
</Breadcrumb>`,
};

export const section: Section = {
  title: 'Breadcrumb',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/breadcrumb',
  description: 'Easy hierarchical navigation',
  components: [defaultBreadcrumb, customSeparatorBreadcrumb],
};
