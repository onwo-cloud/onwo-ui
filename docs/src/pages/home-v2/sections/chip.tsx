import { MusicIcon } from '@onwo/icons';
import { Chip } from '@onwo/ui';
import type { BoxedComp, Section } from '.';

const defaultChip: BoxedComp = {
  title: 'Default',
  display: () => (
    <div class="flex justify-center">
      <Chip>Default</Chip>
    </div>
  ),
  code: `<Chip>Default</Chip>`,
};

const sizesChip: BoxedComp = {
  title: 'Sizes',
  display: () => (
    <div class="flex items-center justify-around">
      <Chip size="sm">Small</Chip>
      <Chip>Medium</Chip>
    </div>
  ),
  code: `<Chip size="small">Small</Chip>
<Chip>Medium</Chip>`,
};

const variantsChip: BoxedComp = {
  title: 'Variants',
  display: () => (
    <div class="flex gap-2 flex-wrap items-center justify-around">
      <Chip variant="ghost">Ghost variant</Chip>
      <Chip variant="stroke">Stroke variant</Chip>
      <Chip>Default variant</Chip>
    </div>
  ),
  code: `<Chip variant="ghost">Ghost variant</Chip>
<Chip>Default variant</Chip>`,
};

const statusChip: BoxedComp = {
  title: 'Status',
  display: () => (
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
  ),
  code: `<Chip active>Active</Chip>
<Chip variant="stroke" active>Active</Chip>
<Chip disabled>Disabled</Chip>
<Chip variant="ghost" disabled>Disabled</Chip>`,
};

const withIconsChip: BoxedComp = {
  title: 'With icons',
  display: () => (
    <div class="flex  gap-2 flex-wrap items-center justify-around">
      <Chip variant="stroke">
        <MusicIcon />
        Left Icon
      </Chip>
      <Chip variant="stroke">
        Right Icon
        <MusicIcon />
      </Chip>
      <Chip variant="stroke">
        <MusicIcon />
      </Chip>
    </div>
  ),
  code: `<Chip variant="stroke">
  <MusicIcon />
  Left Icon
</Chip>
<Chip variant="stroke">
  Right Icon
  <MusicIcon />
</Chip>
<Chip variant="stroke">
  <MusicIcon />
</Chip>`,
};

export const section: Section = {
  title: 'Chip',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/chip',
  description: 'Display a Chip component',
  components: [defaultChip, sizesChip, variantsChip, statusChip, withIconsChip],
};
