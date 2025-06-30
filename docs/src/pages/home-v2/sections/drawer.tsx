import type { BoxedComp, Section } from '.';

const defaultDrawer: BoxedComp = {
  title: 'Default',
  display: () => <div />,
  code: ``,
};

export const section: Section = {
  title: 'Drawer',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/drawer',
  description: 'Display a Drawer component',
  components: [defaultDrawer],
};
