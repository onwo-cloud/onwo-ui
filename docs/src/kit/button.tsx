import { Button } from '@onwo/ui/button';
import { component$ } from '@qwik.dev/core';
import { Link } from '@qwik.dev/router';
import type { BaseIconProps } from '~primitives/@kit/svg-icon';

import { Icon } from '~/utils/icon';

import type { BoxedComp, Section } from '.';

const buttonDefault: BoxedComp = {
  title: 'Default',
  display: component$(() => (
    <div class="flex justify-center">
      <Button> Default </Button>
    </div>
  )),
  code: `
import { Button } from '@onwo/ui';

<Button> Button </Button>
`,
};

const buttonVariants: BoxedComp = {
  title: 'Variants',
  display: component$(() => (
    <div class="flex flex-col gap-4 items-center justify-around">
      <Button> Default </Button>
      <Button variant="outline"> Outline </Button>
      <Button variant="ghost"> Ghost </Button>
    </div>
  )),
  code: `import { Button } from '@onwo/ui';

<Button> Default </Button>
<Button variant="outline"> Outline </Button>
<Button variant="ghost"> Ghost </Button>
`,
};

const buttonSizes: BoxedComp = {
  title: 'Sizes (xs-xl)',
  display: component$(() => (
    <div class="flex flex-col gap-4 items-center justify-around">
      <Button size="sm" start={Icon.named('settings')}>
        Size SM
      </Button>
      <Button size="lg" start={Icon.named('settings')}>
        Size LG
      </Button>
    </div>
  )),
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
  display: component$(() => (
    <div class="flex flex-col gap-4 items-center justify-around">
      <Button start={Icon.named('ship-wheel')}>Button start</Button>
      <Button end={Icon.named('ship-wheel')}>Button end</Button>
    </div>
  )),
  code: `
import { Button } from '@onwo/ui';

<Button start={GenericIcon.named('settings')}>Button start</Button>
<Button end={GenericIcon.named('settings')}>Button end</Button>
`,
};

const customIcons: BoxedComp = {
  title: 'Custom icons',
  display: component$(() => (
    <div class="flex gap-4 items-center justify-around">
      <Button variant="outline" end={(_: BaseIconProps) => <b>🚀</b>}>
        Custom
      </Button>
    </div>
  )),
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
  aside: component$(() => (
    <span>
      This component adapts dynamically between a native `{`<button>`}` and custom elements like `
      {`<div role="button">`}` to prevent HTML parsing conflicts with nested slots during
      server-side rendering, addressing the issues outlined in{' '}
      <Link href="/questions/fix-is-not-allowed-as/"> the documentation </Link>.
    </span>
  )),

  default: buttonDefault,
  others: [buttonVariants, buttonSizes, buttonIcons, customIcons],
};
