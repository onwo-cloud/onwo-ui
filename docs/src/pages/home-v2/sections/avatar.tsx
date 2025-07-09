import { Avatar } from '@onwo/ui';
import type { BoxedComp, Section } from '.';

const defaultAvatar: BoxedComp = {
  title: 'Default',
  display: () => (
    <div class="flex w-full justify-center">
      <Avatar />
    </div>
  ),
  code: `<Avatar />`,
};

const variantsAvatar: BoxedComp = {
  title: 'Variants',
  display: () => (
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
  ),
  code: `import { Avatar } from '@onwo/ui';

<Avatar />
<Avatar name="md" />
<Avatar imageUrl="/avatar.png" />`,
};

const sizesAvatar: BoxedComp = {
  title: 'Sizes (xs-2xl)',
  display: () => (
    <div class="flex flex-col gap-4 items-center justify-around">
      <Avatar name="sm" size="sm" />
      <Avatar name="lg" size="lg" />
    </div>
  ),
  code: `import { Avatar } from '@onwo/ui';

<Avatar name="sm" size="sm" />`,
};

const statusAvatar: BoxedComp = {
  title: 'Status',
  display: () => (
    <div class="flex w-full justify-around">
      <Avatar size="xl" imageUrl="/avatar.png">
        <Avatar.Status class="bg-error" position="top-right" />
      </Avatar>
      <Avatar size="xl" imageUrl="/avatar.png">
        <Avatar.Status />
      </Avatar>
    </div>
  ),
  code: `import { Avatar } from '@onwo/ui';

<Avatar size="xl" imageUrl="/avatar.png">
  <Avatar.Status class="bg-error" position="top-right" />
</Avatar>
<Avatar size="xl" imageUrl="/avatar.png">
  <Avatar.Status />
</Avatar>`,
};

export const section: Section = {
  title: 'Avatar',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/avatar',
  description: 'Display images, icons, or initials representing people or other entities.',
  components: [defaultAvatar, variantsAvatar, sizesAvatar, statusAvatar],
};
