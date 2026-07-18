import { component$, $ } from '@qwik.dev/core';
import { Icon } from '~/utils/icon';
import { Chip } from '@onwo/ui/chip';

import type { BoxedComp, ControlSchema, Section } from '.';

const chipControls = {
  variant: {
    type: 'segmented',
    label: 'Variant',
    default: 'default',
    options: [
      { label: 'Default', value: 'default' },
      { label: 'Ghost', value: 'ghost' },
      { label: 'Stroke', value: 'stroke' },
    ],
  },
  size: {
    type: 'segmented',
    label: 'Size',
    default: 'md',
    options: [
      { label: 'SM', value: 'sm' },
      { label: 'MD', value: 'md' },
    ],
  },
  label: {
    type: 'text',
    label: 'Label',
    default: 'Chip Label',
  },
  active: {
    type: 'boolean',
    label: 'Active',
    default: false,
  },
  disabled: {
    type: 'boolean',
    label: 'Disabled',
    default: false,
  },
} as const satisfies ControlSchema;

const defaultChip: BoxedComp<typeof chipControls> = {
  title: 'Default Playground',
  controls: chipControls,
  display: component$(({ controls }) => (
    <div class="flex justify-center">
      <Chip
        variant={controls.variant as any}
        size={controls.size as any}
        active={controls.active}
        disabled={controls.disabled}
      >
        {controls.label}
      </Chip>
    </div>
  )),
  code: $((values) => {
    const props = [
      values.variant !== 'default' ? `variant="${values.variant}"` : '',
      values.size !== 'md' ? `size="${values.size}"` : '',
      values.active ? 'active' : '',
      values.disabled ? 'disabled' : '',
    ]
      .filter(Boolean)
      .join(' ');

    const formattedProps = props ? ` ${props}` : '';
    return `import { Chip } from '@onwo/ui/chip';\n\n<Chip${formattedProps}>${values.label}</Chip>`;
  }),
};

const sizesChip: BoxedComp = {
  title: 'Sizes',
  display: component$(() => (
    <div class="flex items-center justify-around">
      <Chip size="sm">Small</Chip>
      <Chip>Medium</Chip>
    </div>
  )),
  code: $(() => `import { Chip } from '@onwo/ui/chip';

<Chip size="sm">Small</Chip>
<Chip>Medium</Chip>`),
};

const variantsChip: BoxedComp = {
  title: 'Variants',
  display: component$(() => (
    <div class="flex gap-2 flex-wrap items-center justify-around">
      <Chip variant="ghost">Ghost variant</Chip>
      <Chip variant="stroke">Stroke variant</Chip>
      <Chip>Default variant</Chip>
    </div>
  )),
  code: $(() => `import { Chip } from '@onwo/ui/chip';

<Chip variant="ghost">Ghost variant</Chip>
<Chip variant="stroke">Stroke variant</Chip>
<Chip>Default variant</Chip>`),
};

const statusChip: BoxedComp = {
  title: 'Status',
  display: component$(() => (
    <div class="flex gap-2 flex-wrap items-center justify-around">
      <Chip active>Active</Chip>
      <Chip variant="stroke" active>
        Active
      </Chip>
      <Chip disabled>Disabled</Chip>
      <Chip variant="ghost" disabled>
        Disabled
      </Chip>
    </div>
  )),
  code: $(() => `import { Chip } from '@onwo/ui/chip';

<Chip active>Active</Chip>
<Chip variant="stroke" active>Active</Chip>
<Chip disabled>Disabled</Chip>
<Chip variant="ghost" disabled>Disabled</Chip>`),
};

const withIconsChip: BoxedComp = {
  title: 'With icons',
  display: component$(() => (
    <div class="flex gap-2 flex-wrap items-center justify-around">
      <Chip variant="stroke">
        <Icon i="music" />
        Left Icon
      </Chip>
      <Chip variant="stroke">
        Right Icon
        <Icon i="music" />
      </Chip>
      <Chip variant="stroke">
        <Icon i="music" />
      </Chip>
    </div>
  )),
  code: $(() => `import { Chip } from '@onwo/ui/chip';

<Chip variant="stroke">
  <Icon i="music" />
  Left Icon
</Chip>
<Chip variant="stroke">
  Right Icon
  <Icon i="music" />
</Chip>
<Chip variant="stroke">
  <Icon i="music" />
</Chip>`),
};

export const section: Section = {
  title: 'Chip',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/chip',
  description: 'Display a Chip component',
  default: defaultChip,
  others: [sizesChip, variantsChip, statusChip, withIconsChip],
};
