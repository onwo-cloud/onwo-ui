import type { BoxedComp, Section } from '.';

const defaultBottomSheet: BoxedComp = {
  title: 'Default',
  display: () => <div />,
  code: ``,
};

export const section: Section = {
  title: 'Menu item',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/menu-item',
  description: '',
  components: [defaultBottomSheet],
};
