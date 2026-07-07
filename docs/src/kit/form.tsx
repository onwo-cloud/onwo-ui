import { component$ } from '@qwik.dev/core';
import type { BoxedComp, Section } from '.';

const defaultBottomSheet: BoxedComp = {
  title: 'Default',
  display: component$(() => <div />),
  code: ``,
};

export const section: Section = {
  title: 'Form',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/form',
  description: '',
  default: defaultBottomSheet,
  others: [],
};
