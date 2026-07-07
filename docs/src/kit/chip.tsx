import { Icon } from '~/utils/icon'
import { Chip } from '@onwo/ui/chip';

import type { BoxedComp, Section } from '.';
import { component$ } from '@qwik.dev/core';

const defaultChip: BoxedComp = {
  title: 'Default',
  display: component$(() => (
    <div class="flex justify-center">
      <Chip>Default</Chip>
    </div>
  )),
  code: `<Chip>Default</Chip>`,
};

const sizesChip: BoxedComp = {
  title: 'Sizes',
  display: component$(() => (
    <div class="flex items-center justify-around">
      <Chip size="sm">Small</Chip>
      <Chip>Medium</Chip>
    </div>
  )),
  code: `<Chip size="small">Small</Chip>
<Chip>Medium</Chip>`,
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
  code: `<Chip variant="ghost">Ghost variant</Chip>
<Chip>Default variant</Chip>`,
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
  code: `<Chip active>Active</Chip>
<Chip variant="stroke" active>Active</Chip>
<Chip disabled>Disabled</Chip>
<Chip variant="ghost" disabled>Disabled</Chip>`,
};

const withIconsChip: BoxedComp = {
  title: 'With icons',
  display: component$(() => (
    <div class="flex  gap-2 flex-wrap items-center justify-around">
      <Chip variant="stroke">
        <Icon i="music"   />
        Left Icon
      </Chip>
      <Chip variant="stroke">
        Right Icon
        <Icon i="music"   />
      </Chip>
      <Chip variant="stroke">
        <Icon i="music"   />
      </Chip>
    </div>
  )),
  code: `<Chip variant="stroke">
  <Icon i="music"   />
  Left Icon
</Chip>
<Chip variant="stroke">
  Right Icon
  <Icon i="music"   />
</Chip>
<Chip variant="stroke">
  <Icon i="music"   />
</Chip>`,
};

export const section: Section = {
  title: 'Chip',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/chip',
  description: 'Display a Chip component',
  default: defaultChip,
  others: [sizesChip, variantsChip, statusChip, withIconsChip],
};
