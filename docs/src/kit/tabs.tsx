import { component$ } from '@qwik.dev/core';
import { Tabs, TabsList, TabsPanel, TabsPanels, TabsTab } from '~ui/@kit/tabs';

import type { BoxedComp, Section } from '.';

const defaultTabs: BoxedComp = {
  title: 'Default',
  display: component$(() => (
    <Tabs>
      <TabsList>
        <TabsTab>First tab</TabsTab>
        <TabsTab>Second tab</TabsTab>
        <TabsTab>Third tab</TabsTab>
      </TabsList>
      <TabsPanels>
        <TabsPanel>Hello</TabsPanel>
        <TabsPanel>Hi</TabsPanel>
        <TabsPanel>Bonjour</TabsPanel>
      </TabsPanels>
    </Tabs>
  )),
  code: `
 import { Tabs, TabsList, TabsPanel, TabsPanels, TabsTab } from '@onwo/ui/tabs';


<Tabs>
  <TabsList>
    <TabsTab>...</TabsTab>
    <TabsTab>...</TabsTab>
    <TabsTab>...</TabsTab>
  </TabsList>
  <TabsPanels>
    <TabsPanel>...</TabsPanel>
    <TabsPanel>...</TabsPanel>
    <TabsPanel>...</TabsPanel>
  </TabsPanels>
</Tabs>`,
};

export const section: Section = {
  title: 'Tabs',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/tabs',
  description: '',
  default: defaultTabs,
  others: [],
};
