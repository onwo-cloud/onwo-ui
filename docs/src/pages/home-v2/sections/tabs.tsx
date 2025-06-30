import type { BoxedComp, Section } from '.';

const defaultTabs: BoxedComp = {
  title: 'Default',
  display: () => <div />,
  code: ``,
};

export const section: Section = {
  title: 'Tabs',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/tabs',
  description: '',
  components: [defaultTabs],
};
