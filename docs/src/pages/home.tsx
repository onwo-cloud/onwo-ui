import type { PropsOf } from '@builder.io/qwik';
import { component$, useSignal } from '@builder.io/qwik';
import { MusicIcon } from '@onwo/icons';
import { Accordion, Avatar, Breadcrumb, Button, Calendar, Chip, Masonry, Tabs, cn } from '@onwo/ui';
import { ClipboardButton } from '~/commons/clipboard-button';
import { SimpleTabs } from '~/commons/simple-tabs';
import { TopBarV2 } from '~/commons/top-bar-v2';

const CustomItem = ({ class: cls, children, ...props }: PropsOf<typeof Masonry.Item>) => (
  <Masonry.Item
    class={cn(
      'bg-parchment border-0 rounded-md flex flex-col gap-4 items-center justify-center',
      cls,
    )}
    {...props}
  >
    {children}
  </Masonry.Item>
);

const CalendarStandalone = component$(() => {
  const calValue = useSignal<Date | undefined>();
  return <Calendar bind:value={calValue} />;
});

export const HomePage = component$(() => {
  const selectedTab = useSignal('Overview');

  return (
    <div class="h-screen">
      <TopBarV2 />
      <div class="px-4 md:px-10 text-center">
        <div class="flex flex-col items-center my-24 md:my-32">
          <div>
            <h2 class="text-3xl md:text-5xl font-semibold leading-narrow">
              UI primitives for qwik.js
            </h2>
            <p class="mt-2 md:text-lg  text-lead mb-12">
              A minimalist library of primitives and hooks to use in your qwik.js project.
            </p>
          </div>
          <code class="bg-parchment flex gap-4 w-fit items-center rounded-lg py-2 px-8 border border-line text-sm">
            <span>npm install @onwo/ui @onwo/tailwindcss @onwo/icons</span>
            <ClipboardButton textToCopy="npm install @onwo/ui @onwo/tailwindcss @onwo/icons" />
          </code>
        </div>
        <SimpleTabs tabs={['Overview', 'Blog', 'Changelog']} bind:selected={selectedTab} />
        <div class="mt-8">
          <Masonry.Root columnWidth={500} gap={16}>
            <CustomItem width={200} height={150}>
              <Button size="lg">button</Button>
            </CustomItem>
            <CustomItem width={200} height={150}>
              <Tabs.Root>
                <Tabs.List>
                  <Tabs.Tab>First tab</Tabs.Tab>
                  <Tabs.Tab>Second tab</Tabs.Tab>
                  <Tabs.Tab>Third tab</Tabs.Tab>
                </Tabs.List>
              </Tabs.Root>
              <Tabs.Root>
                <Tabs.List class="mt-4">
                  <Tabs.Pill>First tab</Tabs.Pill>
                  <Tabs.Pill>Second tab</Tabs.Pill>
                  <Tabs.Pill>Third tab</Tabs.Pill>
                </Tabs.List>
              </Tabs.Root>
            </CustomItem>
            <CustomItem width={200} height={250}>
              <CalendarStandalone />
            </CustomItem>
            <CustomItem width={200} height={90}>
              <Breadcrumb.Root>
                <Breadcrumb.Link to="/" label="Home" />
                <Breadcrumb.Link to="/hello" label="Hello" />
                <Breadcrumb.Link to="/hello/world" label="World" />
              </Breadcrumb.Root>
            </CustomItem>
            <CustomItem class="flex-row gap-12">
              <Avatar />
              <Avatar name="md" />
              <Avatar imageUrl="/avatar.png" />
            </CustomItem>
            <CustomItem class="flex-row gap-12">
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
            </CustomItem>
            <CustomItem>
              <Accordion.Root singleOpen class="w-fit md:w-[400px]">
                <Accordion.Item>
                  <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
                  <Accordion.Content> ... </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item defaultOpen>
                  <Accordion.Trigger>Is it styled?</Accordion.Trigger>
                  <Accordion.Content> ... </Accordion.Content>
                </Accordion.Item>
                <Accordion.Item>
                  <Accordion.Trigger>Is it animated?</Accordion.Trigger>
                  <Accordion.Content> ... </Accordion.Content>
                </Accordion.Item>
              </Accordion.Root>
            </CustomItem>
          </Masonry.Root>
        </div>
      </div>
    </div>
  );
});
