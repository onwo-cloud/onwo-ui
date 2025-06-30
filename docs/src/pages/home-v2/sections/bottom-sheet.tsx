import type { BoxedComp, Section } from '.';

const defaultBottomSheet: BoxedComp = {
  title: 'Default',
  display: () => <div />,
  code: ``,
};

export const section: Section = {
  title: 'Bottom Sheet',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/bottom-sheet',
  description: 'Display a Bottom Sheet component',
  components: [defaultBottomSheet],
};
