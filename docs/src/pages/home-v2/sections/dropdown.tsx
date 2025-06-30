import type { BoxedComp, Section } from '.';

const defaultDropdown: BoxedComp = {
  title: 'Default',
  display: () => <></>,
  code: ``,
};

export const section: Section = {
  title: 'Dropdown',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/dropdown',
  description: 'Display a Dropdown component',
  components: [defaultDropdown],
};
