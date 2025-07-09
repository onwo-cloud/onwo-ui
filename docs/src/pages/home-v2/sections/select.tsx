import type { BoxedComp, Section } from '.';

const defaultBottomSheet: BoxedComp = {
  title: 'Default',
  display: () => <div />,
  code: ``,
};

export const section: Section = {
  title: 'Select',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/select',
  description: '',
  components: [defaultBottomSheet],
};
