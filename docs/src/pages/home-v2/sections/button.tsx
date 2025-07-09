import { SettingsIcon, ShipWheelIcon } from '@onwo/icons';
import type { IconProps } from '@onwo/primitives/svg-icon';
import { Button } from '@onwo/ui';
import type { BoxedComp, Section } from '.';

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
      <Button size="sm" start={SettingsIcon}>
        Size SM
      </Button>
      <Button size="lg" start={SettingsIcon}>
        Size LG
      </Button>
    </div>
  ),
  code: `import { Button } from '@onwo/ui';

<Button size="xs" start={GenericSettingsIcon}>Size XS</Button>
<Button size="sm" start={GenericSettingsIcon}>Size SM</Button>
<Button size="md" start={GenericSettingsIcon}>Size MD</Button>
<Button size="lg" start={GenericSettingsIcon}>Size LG</Button>
<Button size="xl" start={GenericSettingsIcon}>Size XL</Button>
`,
};

const buttonIcons: BoxedComp = {
  title: 'Icons',
  display: () => (
    <div class="flex flex-col gap-4 items-center justify-around">
      <Button start={ShipWheelIcon}>Button start</Button>
      <Button end={ShipWheelIcon}>Button end</Button>
    </div>
  ),
  code: `
import { Button } from '@onwo/ui';

<Button start={GenericSettingsIcon}>Button start</Button>
<Button end={GenericSettingsIcon}>Button end</Button>
`,
};

const customIcons: BoxedComp = {
  title: 'Custom icons',
  display: () => (
    <div class="flex gap-4 items-center justify-around">
      <Button variant="outline" end={(_: IconProps) => <b>🚀</b>}>
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
  components: [buttonDefault, buttonVariants, buttonSizes, buttonIcons, customIcons],
};
