import { Icon } from '~/utils/icon'
import { Button } from '@onwo/ui/button';

import type { BoxedComp, Section } from '.';
import type { BaseIconProps } from '~primitives/@kit/svg-icon';

const buttonDefault: BoxedComp = {
  title: 'Default',
  display: () => (
    <div class="flex justify-center">
      <Button> Default </Button>
    </div>
  ),
  code: `
import { Button } from '@onwo/ui';

<Button> Button </Button>
`,
};

const buttonVariants: BoxedComp = {
  title: 'Variants',
  display: () => (
    <div class="flex flex-col gap-4 items-center justify-around">
      <Button> Default </Button>
      <Button variant="outline"> Outline </Button>
      <Button variant="ghost"> Ghost </Button>
    </div>
  ),
  code: `import { Button } from '@onwo/ui';

<Button> Default </Button>
<Button variant="outline"> Outline </Button>
<Button variant="ghost"> Ghost </Button>
`,
};

const buttonSizes: BoxedComp = {
  title: 'Sizes (xs-xl)',
  display: () => (
    <div class="flex flex-col gap-4 items-center justify-around">
      <Button size="sm" start={Icon.named('settings')}>
        Size SM
      </Button>
      <Button size="lg" start={Icon.named('settings')}>
        Size LG
      </Button>
    </div>
  ),
  code: `import { Button } from '@onwo/ui';

<Button size="xs" start={GenericIcon.named('settings')}>Size XS</Button>
<Button size="sm" start={GenericIcon.named('settings')}>Size SM</Button>
<Button size="md" start={GenericIcon.named('settings')}>Size MD</Button>
<Button size="lg" start={GenericIcon.named('settings')}>Size LG</Button>
<Button size="xl" start={GenericIcon.named('settings')}>Size XL</Button>
`,
};

const buttonIcons: BoxedComp = {
  title: 'Icons',
  display: () => (
    <div class="flex flex-col gap-4 items-center justify-around">
      <Button start={Icon.named('ship-wheel')}>Button start</Button>
      <Button end={Icon.named('ship-wheel')}>Button end</Button>
    </div>
  ),
  code: `
import { Button } from '@onwo/ui';

<Button start={GenericIcon.named('settings')}>Button start</Button>
<Button end={GenericIcon.named('settings')}>Button end</Button>
`,
};

const customIcons: BoxedComp = {
  title: 'Custom icons',
  display: () => (
    <div class="flex gap-4 items-center justify-around">
      <Button variant="outline" end={(_: BaseIconProps) => <b>🚀</b>}>
        Custom
      </Button>
    </div>
  ),
  code: `
import { Button } from '@onwo/ui';

<div class="flex gap-4 items-center justify-around">
  <Button size="md" variant="outline" end={(_: IconProps) => <b>🚀</b>}>
    Custom
  </Button>
</div>
`,
};

export const section: Section = {
  title: 'Button',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/button',
  description: 'Multi-variants button element',
  default: buttonDefault,
  others: [buttonVariants, buttonSizes, buttonIcons, customIcons],
};
