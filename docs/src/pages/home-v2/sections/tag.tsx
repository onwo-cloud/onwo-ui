import type { BoxedComp, Section } from '.';

const defaultBottomSheet: BoxedComp = {
  title: 'Default',
  display: () => <div />,
  code: ``,
};

export const section: Section = {
  title: 'Tag',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/tag',
  description: '',
  components: [defaultBottomSheet],
};
