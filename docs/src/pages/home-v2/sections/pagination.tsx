import type { BoxedComp, Section } from '.';

const defaultBottomSheet: BoxedComp = {
  title: 'Default',
  display: () => <div />,
  code: ``,
};

export const section: Section = {
  title: 'Pagination',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/pagination',
  description: '',
  components: [defaultBottomSheet],
};
