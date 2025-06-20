import type { PropsOf } from '@builder.io/qwik';
import { component$, useSignal } from '@builder.io/qwik';
import { MediaMusicIcon } from '@onwo/icons';
import { Accordion, Avatar, Breadcrumb, Button, Calendar, Chip, Masonry, Tabs, cn } from '@onwo/ui';
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
      <div class="px-10 text-center">
        <h2 class="text-4xl font-semibold leading-narrow mt-32">UI primitives for qwik.js</h2>
        <p class="mt-2 text-lg  text-lead mb-16">A growing library of primitives for qwik.js</p>
        <SimpleTabs tabs={['Overview', 'Blog', 'Changelog']} bind:selected={selectedTab} />
        <div class="mt-12">
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
                <MediaMusicIcon />
                Left Icon
              </Chip>
              <Chip variant="stroke">
                Right Icon
                <MediaMusicIcon />
              </Chip>
              <Chip variant="stroke">
                <MediaMusicIcon />
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
