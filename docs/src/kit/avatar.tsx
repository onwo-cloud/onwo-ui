import { component$, $ } from '@qwik.dev/core';
import { Avatar, AvatarStatus } from '@onwo/ui/avatar';

import type { BoxedComp, ControlSchema, Section } from '.';

const avatarControls = {
  name: {
    type: 'text',
    label: 'Name',
    default: 'John Doe',
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
      { label: '2XL', value: '2xl' },
    ],
  },
  imageUrl: {
    type: 'text',
    label: 'Image URL',
    default: '',
    placeholder: '/avatar.png',
  },
} as const satisfies ControlSchema;

const defaultAvatar: BoxedComp<typeof avatarControls> = {
  title: 'Default Playground',
  controls: avatarControls,
  display: component$(({ controls }) => (
    <div class="flex w-full justify-center">
      <Avatar
        name={controls.name}
        size={controls.size as any}
        imageUrl={controls.imageUrl || undefined}
      />
    </div>
  )),
  code: $((values) => {
    const props = [
      values.name ? `name="${values.name}"` : '',
      values.size !== 'md' ? `size="${values.size}"` : '',
      values.imageUrl ? `imageUrl="${values.imageUrl}"` : '',
    ]
      .filter(Boolean)
      .join(' ');

    const formattedProps = props ? ` ${props}` : '';
    return `import { Avatar } from '@onwo/ui/avatar';\n\n<Avatar${formattedProps} />`;
  }),
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
  code: $(() => `import { Avatar } from '@onwo/ui/avatar';

<Avatar />
<Avatar name="md" />
<Avatar imageUrl="/avatar.png" />`),
};

const sizesAvatar: BoxedComp = {
  title: 'Sizes (xs-2xl)',
  display: component$(() => (
    <div class="flex flex-col gap-4 items-center justify-around">
      <Avatar name="sm" size="sm" />
      <Avatar name="lg" size="lg" />
    </div>
  )),
  code: $(() => `import { Avatar } from '@onwo/ui/avatar';

<Avatar name="sm" size="sm" />
<Avatar name="lg" size="lg" />`),
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
  code: $(() => `import { Avatar, AvatarStatus } from '@onwo/ui/avatar';

<Avatar size="xl" imageUrl="/avatar.png">
  <AvatarStatus class="bg-error" position="top-right" />
</Avatar>
<Avatar size="xl" imageUrl="/avatar.png">
  <AvatarStatus />
</Avatar>`),
};

export const section: Section = {
  title: 'Avatar',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/avatar',
  description: 'Display images, icons, or initials representing people or other entities.',
  default: defaultAvatar,
  others: [variantsAvatar, sizesAvatar, statusAvatar],
};
