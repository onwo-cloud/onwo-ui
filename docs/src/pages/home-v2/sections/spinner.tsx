import { Spinner } from '@onwo/ui';
import type { BoxedComp, Section } from '.';

const defaultSpinner: BoxedComp = {
  title: 'Default',
  display: () => (
    <div class="flex justify-center">
      <Spinner />
    </div>
  ),
  code: `<Spinner />`,
};

const spinnerSizes: BoxedComp = {
  title: 'Sizes',
  display: () => (
    <div class="flex gap-2 flex-wrap items-center justify-around">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner />
      <Spinner size="lg" />
      <Spinner size="xl" />
      <Spinner size={48} />
    </div>
  ),
  code: `import { Spinner } from '@onwo/ui';

<Spinner size="xs" />
<Spinner size="sm" />
<Spinner />
<Spinner size="lg" />
<Spinner size="xl" />
<Spinner size={48} />`,
};

const spinnerColors: BoxedComp = {
  title: 'Colors',
  display: () => (
    <div class="flex gap-2 flex-wrap items-center justify-around">
      <Spinner class="text-success" />
      <Spinner class="text-warn" />
      <Spinner class="text-scarab" />
      <Spinner class="text-neutron" />
    </div>
  ),
  code: `import { Button } from '@onwo/ui';

<Spinner class="text-success" />
<Spinner class="text-warn" />
<Spinner class="text-scarab" />
<Spinner class="text-neutron" />`,
};

export const section: Section = {
  title: 'Spinner',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/spinner',
  description: 'Display a Spinner component',
  components: [defaultSpinner, spinnerSizes, spinnerColors],
};
