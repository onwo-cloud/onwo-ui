import { Avatar, AvatarStatus } from '@onwo/ui/avatar';

import type { BoxedComp, Section } from '.';
import { component$ } from '@qwik.dev/core';

const defaultAvatar: BoxedComp = {
  title: 'Default',
  display: component$(() => (
    <div class="flex w-full justify-center">
      <Avatar />
    </div>
  )),
  code: `<Avatar />`,
};

const variantsAvatar: BoxedComp = {
  title: 'Variants',
  display: component$(() => (
    <div class="flex w-full justify-around">
      <div class="flex flex-col gap-4 items-center justify-around">
        <Avatar />
        <span class="text-sm">default</span>
      </div>
      <div class="flex flex-col gap-4 items-center justify-around">
        <Avatar name="md" />
        <span class="text-sm font-medium">name</span>
      </div>
      <div class="flex flex-col gap-4 items-center justify-around">
        <Avatar imageUrl="/avatar.png" />
        <span class="text-sm">image</span>
      </div>
    </div>
  )),
  code: `import { Avatar } from '@onwo/ui';

<Avatar />
<Avatar name="md" />
<Avatar imageUrl="/avatar.png" />`,
};

const sizesAvatar: BoxedComp = {
  title: 'Sizes (xs-2xl)',
  display: component$(() => (
    <div class="flex flex-col gap-4 items-center justify-around">
      <Avatar name="sm" size="sm" />
      <Avatar name="lg" size="lg" />
    </div>
  )),
  code: `import { Avatar } from '@onwo/ui';

<Avatar name="sm" size="sm" />`,
};

const statusAvatar: BoxedComp = {
  title: 'Status',
  display: component$(() => (
    <div class="flex w-full justify-around">
      <Avatar size="xl" imageUrl="/avatar.png">
        <AvatarStatus class="bg-error" position="top-right" />
      </Avatar>
      <Avatar size="xl" imageUrl="/avatar.png">
        <AvatarStatus />
      </Avatar>
    </div>
  )),
  code: `import { Avatar } from '@onwo/ui';

<Avatar size="xl" imageUrl="/avatar.png">
  <AvatarStatus class="bg-error" position="top-right" />
</Avatar>
<Avatar size="xl" imageUrl="/avatar.png">
  <AvatarStatus />
</Avatar>`,
};

export const section: Section = {
  title: 'Avatar',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/avatar',
  description: 'Display images, icons, or initials representing people or other entities.',
  default: defaultAvatar,
  others: [variantsAvatar, sizesAvatar, statusAvatar],
};
