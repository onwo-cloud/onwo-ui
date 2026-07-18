import { component$, $ } from '@qwik.dev/core';
import { Radio, RadioOption } from '@onwo/ui/radio';

import type { BoxedComp, ControlSchema, Section } from '.';

const radioControls = {
  name: {
    type: 'text',
    label: 'Name',
    default: 'options',
  },
  defaultValue: {
    type: 'segmented',
    label: 'Default Selected',
    default: 'v1',
    options: [
      { label: 'Option 1', value: 'v1' },
      { label: 'Option 2', value: 'v2' },
      { label: 'Option 3', value: 'v3' },
    ],
  },
} as const satisfies ControlSchema;

const defaultRadio: BoxedComp<typeof radioControls> = {
  title: 'Default Playground',
  controls: radioControls,
  display: component$(({ controls }) => (
    <div>
      <Radio name={controls.name} defaultValue={controls.defaultValue}>
        <RadioOption value="v1">Option 1</RadioOption>
        <RadioOption value="v2">Option 2</RadioOption>
        <RadioOption value="v3">Option 3</RadioOption>
      </Radio>
    </div>
  )),
  code: $((values) => `import { Radio, RadioOption } from '@onwo/ui/radio';

<Radio name="${values.name}" defaultValue="${values.defaultValue}">
  <RadioOption value="v1">Option 1</RadioOption>
  <RadioOption value="v2">Option 2</RadioOption>
  <RadioOption value="v3">Option 3</RadioOption>
</Radio>`),
};

export const section: Section = {
  title: 'Radio',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/radio',
  description: 'Radio buttons for single option selection',
  default: defaultRadio,
  others: [],
};
