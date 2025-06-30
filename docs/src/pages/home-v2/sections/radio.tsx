import { Radio, RadioOption } from '@onwo/ui';
import type { BoxedComp, Section } from '.';

const defaultRadio: BoxedComp = {
  title: 'Default',
  display: () => (
    <div>
      <Radio name="n1">
        <RadioOption value="v1">Option 1</RadioOption>
        <RadioOption value="v2">Option 2</RadioOption>
        <RadioOption value="v3">Option 3</RadioOption>
      </Radio>
    </div>
  ),
  code: ``,
};

export const section: Section = {
  title: 'Radio',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/radio',
  description: '',
  components: [defaultRadio],
};
