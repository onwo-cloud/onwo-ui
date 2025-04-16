import type { DocumentHead } from '@builder.io/qwik-city';
import { Avatar } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Avatar"
      description="Display images, icons, or initials representing people or other entities."
      breadcrumbs={[{ label: 'Avatar', to: '/components/avatar' }]}
    />

    <div class="onwo-format"></div>

    <Anatomy
      variants={{
        Default: `<Avatar>
  <Avatar.Status />
</Avatar>`,
      }}
    />

    <Showcase
      title="Default"
      component={
        <div class="flex w-full justify-center">
          <Avatar />
        </div>
      }
      code={`<Avatar />`}
    />

    <Showcase
      title="Variants"
      component={
        <div class="flex w-full justify-around">
          <Avatar />
          <Avatar name="md" />
          <Avatar imageUrl="/avatar.png" />
        </div>
      }
      code={`<Avatar />
<Avatar name="md" />
<Avatar imageUrl="/avatar.png" />`}
    />

    <Showcase
      title="Sizes"
      component={
        <div class="flex flex-col gap-2">
          <div class="flex flex-wrap items-center justify-around gap-2 w-full">
            <Avatar size="xs" />
            <Avatar size="sm" />
            <Avatar />
            <Avatar size="lg" />
            <Avatar size="xl" />
            <Avatar size="2xl" />
          </div>
          <div class="flex flex-wrap items-center justify-around gap-2 w-full">
            <Avatar name="xs" size="xs" />
            <Avatar name="sm" size="sm" />
            <Avatar name="md" />
            <Avatar name="lg" size="lg" />
            <Avatar name="xl" size="xl" />
            <Avatar name="2xl" size="2xl" />
          </div>
          <div class="flex flex-wrap items-center justify-around gap-2 w-full">
            <Avatar imageUrl="/avatar.png" size="xs" />
            <Avatar imageUrl="/avatar.png" size="sm" />
            <Avatar imageUrl="/avatar.png" />
            <Avatar imageUrl="/avatar.png" size="lg" />
            <Avatar imageUrl="/avatar.png" size="xl" />
            <Avatar imageUrl="/avatar.png" size="2xl" />
          </div>
        </div>
      }
      code={`<Avatar name="xs" size="xs" />
<Avatar name="sm" size="sm" />
<Avatar name="md" />
<Avatar name="lg" size="lg" />
<Avatar name="xl" size="xl" />
<Avatar name="2xl" size="2xl" />`}
    />

    <Showcase
      title="Status"
      component={
        <div class="flex w-full justify-around">
          <Avatar size="xl" imageUrl="/avatar.png">
            <Avatar.Status class="bg-error" position="top-right" />
          </Avatar>
          <Avatar size="xl" imageUrl="/avatar.png">
            <Avatar.Status />
          </Avatar>
        </div>
      }
      code={`<Avatar size="xl" imageUrl="/avatar.png">
  <Avatar.Status class="bg-error" position="top-right" />
</Avatar>
<Avatar size="xl" imageUrl="/avatar.png">
  <Avatar.Status />
</Avatar>`}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Avatar - Onwo UI',
  description:
    'Customizable avatar components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
