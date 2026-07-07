import { component$ } from '@qwik.dev/core';
import type { BoxedComp, Section } from '.';

const defaultBottomSheet: BoxedComp = {
  title: 'Default',
  display: component$(() => <div />),
  code: ``,
};

export const section: Section = {
  title: 'Switch',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/switch',
  description: '',
  default: defaultBottomSheet,
  others: [],
};
