import { component$, $ } from '@qwik.dev/core';
import { Spinner } from '@onwo/ui/spinner';

import type { BoxedComp, ControlSchema, Section } from '.';

const spinnerControls = {
  size: {
    type: 'segmented',
    label: 'Size',
    default: 'md',
    options: [
      { label: 'XS', value: 'xs' },
      { label: 'SM', value: 'sm' },
      { label: 'MD', value: 'md' },
      { label: 'LG', value: 'lg' },
      { label: 'XL', value: 'xl' },
    ],
  },
} as const satisfies ControlSchema;

const defaultSpinner: BoxedComp<typeof spinnerControls> = {
  title: 'Default Playground',
  controls: spinnerControls,
  display: component$(({ controls }) => (
    <div class="flex justify-center">
      <Spinner size={controls.size as any} />
    </div>
  )),
  code: $((values) => {
    const sizeProp = values.size !== 'md' ? ` size="${values.size}"` : '';
    return `import { Spinner } from '@onwo/ui/spinner';\n\n<Spinner${sizeProp} />`;
  }),
};

const spinnerSizes: BoxedComp = {
  title: 'Sizes',
  display: component$(() => (
    <div class="flex gap-2 flex-wrap items-center justify-around">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
      <Spinner size="xl" />
      <Spinner size={48} />
    </div>
  )),
  code: $(() => `import { Spinner } from '@onwo/ui/spinner';

<Spinner size="xs" />
<Spinner size="sm" />
<Spinner />
<Spinner size="lg" />
<Spinner size="xl" />
<Spinner size={48} />`),
};

const spinnerColors: BoxedComp = {
  title: 'Colors',
  display: component$(() => (
    <div class="flex gap-2 flex-wrap items-center justify-around">
      <Spinner class="text-success" />
      <Spinner class="text-warn" />
      <Spinner class="text-scarab" />
      <Spinner class="text-neutron" />
    </div>
  )),
  code: $(() => `import { Spinner } from '@onwo/ui/spinner';

<Spinner class="text-success" />
<Spinner class="text-warn" />
<Spinner class="text-scarab" />
<Spinner class="text-neutron" />`),
};

export const section: Section = {
  title: 'Spinner',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/spinner',
  description: 'Display a Spinner component',
  default: defaultSpinner,
  others: [spinnerSizes, spinnerColors],
};
