import { component$, useSignal } from '@builder.io/qwik';
import { Icon } from '~/utils/icon'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@onwo/ui/accordion';
import { Avatar } from '@onwo/ui/avatar';
import { Breadcrumb, BreadcrumbLink } from '@onwo/ui/breadcrumb';
import { Button } from '@onwo/ui/button';
import { Calendar } from '@onwo/ui/calendar';
import { Chip } from '@onwo/ui/chip';
import { Masonry, MasonryItem } from '@onwo/ui/masonry';
import type { MasonryItemProps } from '@onwo/ui/masonry';
import { Tabs, TabsList, TabsPill, TabsTab } from '@onwo/ui/tabs';

import { ClipboardButton } from '~/commons/clipboard-button';
import { SimpleTabs } from '~/commons/simple-tabs';
import { TopBarV2 } from '~/commons/top-bar-v2';

const CustomItem = ({ class: className, children, ...props }: MasonryItemProps) => (
  <MasonryItem
    class={[
      'bg-parchment border-0 rounded-md flex flex-col gap-4 items-center justify-center',
      className,
    ]}
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
            <CustomItem width={200} height={200} class="flex-row gap-12">
              <Avatar />
              <Avatar name="md" />
              <Avatar imageUrl="/avatar.png" />
            </CustomItem>
            <CustomItem width={200} height={120} class="flex-row gap-12">
              <Chip variant="stroke">
                <Icon name="music"   />
                Left Icon
              </Chip>
              <Chip variant="stroke">
                Right Icon
                <Icon name="music"   />
              </Chip>
              <Chip variant="stroke">
                <Icon name="music"   />
              </Chip>
            </CustomItem>
            <CustomItem width={200} height={300}>
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
