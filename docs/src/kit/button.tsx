import { component$, $ } from '@qwik.dev/core';
import { Button } from '@onwo/ui/button';
import type { BoxedComp, Section, ControlSchema } from './index';

// 1. Define interactive control schema
const buttonControls = {
  variant: {
    type: 'segmented',
    label: 'Variant',
    default: 'primary',
    options: [
      { label: 'Primary', value: 'primary' },
      { label: 'Secondary', value: 'secondary' },
      { label: 'Outline', value: 'outline' },
      { label: 'Ghost', value: 'ghost' },
      { label: 'Destructive', value: 'destructive' },
    ],
  },
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
  label: {
    type: 'text',
    label: 'Button Text',
    default: 'Click Me',
  },
  disabled: {
    type: 'boolean',
    label: 'Disabled',
    default: false,
  },
  isLoading: {
    type: 'boolean',
    label: 'Loading State',
    default: false,
  },
} as const satisfies ControlSchema;

// 2. Default Boxed Component with dynamic code generation
const buttonDefault: BoxedComp<typeof buttonControls> = {
  title: 'Default Component Playground',
  description: 'Interactive sandbox to test button props and variants.',
  controls: buttonControls,

  // Display receives interactive controls store in real-time
  display: component$(({ controls, logger }) => (
    <div class="flex justify-center items-center p-8 w-full">
      <Button
        variant={controls.variant}
        onClick$={$(() => {
          logger.log$('Clicked!');
        })}
        size={controls.size}
        disabled={controls.disabled}
        isLoading={controls.isLoading}
      >
        {controls.label}
      </Button>
    </div>
  )),

  // Dynamic code generator takes control values and outputs clean JSX
  code: $((values) => {
    const props = [
      values.variant !== 'primary' ? `variant="${values.variant}"` : '',
      values.size !== 'md' ? `size="${values.size}"` : '',
      values.disabled ? 'disabled' : '',
      values.isLoading ? 'isLoading' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const formattedProps = props ? ` ${props}` : '';
    return `import { Button } from '@onwo/ui/button';\n\n<Button${formattedProps}> ${values.label} </Button>`;
  }),
};

// Static preview boxes
const buttonVariants: BoxedComp = {
  title: 'Variants',
  display: component$(({ logger }) => (
    <div class="flex flex-wrap gap-3 items-center justify-center p-4">
      <Button
        variant="primary"
        onClick$={$(() => {
          logger.log$('Primary clicked!');
        })}
      >
        Primary
      </Button>
      <Button
        variant="secondary"
        onClick$={$(() => {
          logger.log$('Secondary clicked!');
        })}
      >
        Secondary
      </Button>
      <Button
        variant="outline"
        onClick$={$(() => {
          logger.log$('Outline clicked!');
        })}
      >
        Outline
      </Button>
      <Button
        variant="ghost"
        onClick$={$(() => {
          logger.log$('Ghost clicked!');
        })}
      >
        Ghost
      </Button>
      <Button
        variant="destructive"
        onClick$={$(() => {
          logger.log$('Destructive clicked!');
        })}
      >
        Destructive
      </Button>
    </div>
  )),
  code: $(() => `import { Button } from '@onwo/ui/button';

<Button variant="primary"> Primary </Button>
<Button variant="secondary"> Secondary </Button>
<Button variant="outline"> Outline </Button>
<Button variant="ghost"> Ghost </Button>
<Button variant="destructive"> Destructive </Button>`),
};

const buttonSizes: BoxedComp = {
  title: 'Sizes',
  display: component$(() => (
    <div class="flex flex-wrap gap-3 items-center justify-center p-4">
      <Button size="xs"> Size XS </Button>
      <Button size="sm"> Size SM </Button>
      <Button size="md"> Size MD </Button>
      <Button size="lg"> Size LG </Button>
      <Button size="xl"> Size XL </Button>
    </div>
  )),
  code: $(() => `import { Button } from '@onwo/ui/button';

<Button size="xs"> Size XS </Button>
<Button size="sm"> Size SM </Button>
<Button size="md"> Size MD </Button>
<Button size="lg"> Size LG </Button>
<Button size="xl"> Size XL </Button>`),
};

export const section: Section = {
  title: 'Button',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/button',
  description: 'Multi-variants button element supporting dynamic slots.',
  aside: component$(() => (
    <span>
      A multi-variant styled button that can be rendered as a div.
    </span>
  )),
  default: buttonDefault,
  others: [buttonVariants, buttonSizes],
};
