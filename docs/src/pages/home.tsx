import type { PropsOf } from '@builder.io/qwik';
import { component$, useSignal } from '@builder.io/qwik';
import { MusicIcon } from '@onwo/icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Avatar,
  Breadcrumb,
  BreadcrumbLink,
  Button,
  Calendar,
  Chip,
  Masonry,
  MasonryItem,
  Tabs,
  TabsList,
  TabsPill,
  TabsTab,
  cn,
} from '@onwo/ui';
import { ClipboardButton } from '~/commons/clipboard-button';
import { SimpleTabs } from '~/commons/simple-tabs';
import { TopBarV2 } from '~/commons/top-bar-v2';

const CustomItem = ({ class: cls, children, ...props }: PropsOf<typeof MasonryItem>) => (
  <MasonryItem
    class={cn(
      'bg-parchment border-0 rounded-md flex flex-col gap-4 items-center justify-center',
      cls,
    )}
    {...props}
  >
    {children}
  </MasonryItem>
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
          <Masonry columnWidth={500} gap={16}>
            <CustomItem width={200} height={150}>
              <Button size="lg">button</Button>
            </CustomItem>
            <CustomItem width={200} height={150}>
              <Tabs>
                <TabsList>
                  <TabsTab>First tab</TabsTab>
                  <TabsTab>Second tab</TabsTab>
                  <TabsTab>Third tab</TabsTab>
                </TabsList>
              </Tabs>
              <Tabs>
                <TabsList class="mt-4">
                  <TabsPill>First tab</TabsPill>
                  <TabsPill>Second tab</TabsPill>
                  <TabsPill>Third tab</TabsPill>
                </TabsList>
              </Tabs>
            </CustomItem>
            <CustomItem width={200} height={250}>
              <CalendarStandalone />
            </CustomItem>
            <CustomItem width={200} height={90}>
              <Breadcrumb>
                <BreadcrumbLink to="/" label="Home" />
                <BreadcrumbLink to="/hello" label="Hello" />
                <BreadcrumbLink to="/hello/world" label="World" />
              </Breadcrumb>
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
              <Accordion singleOpen class="w-fit md:w-[400px]">
                <AccordionItem>
                  <AccordionTrigger>Is it accessible?</AccordionTrigger>
                  <AccordionContent> ... </AccordionContent>
                </AccordionItem>
                <AccordionItem defaultOpen>
                  <AccordionTrigger>Is it styled?</AccordionTrigger>
                  <AccordionContent> ... </AccordionContent>
                </AccordionItem>
                <AccordionItem>
                  <AccordionTrigger>Is it animated?</AccordionTrigger>
                  <AccordionContent> ... </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CustomItem>
          </Masonry>
        </div>
      </div>
    </div>
  );
});
