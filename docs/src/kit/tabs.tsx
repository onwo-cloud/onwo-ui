import { component$, $ } from '@qwik.dev/core';
import { TabsRoot, TabsList, TabsPanel, TabsPanels, TabsItem } from '~primitives/@kit/tabs';

import type { BoxedComp, Section } from '.';

const defaultTabs: BoxedComp = {
  title: 'Default',
  display: component$(() => (
    <TabsRoot>
      <TabsList>
        <TabsItem>First tab</TabsItem>
        <TabsItem>Second tab</TabsItem>
        <TabsItem>Third tab</TabsItem>
      </TabsList>
      <TabsPanels>
        <TabsPanel>Hello</TabsPanel>
        <TabsPanel>Hi</TabsPanel>
        <TabsPanel>Bonjour</TabsPanel>
      </TabsPanels>
    </TabsRoot>
  )),
  code: $(() => `import { Tabs, TabsList, TabsPanel, TabsPanels, TabsTab } from '@onwo/ui/tabs';

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
</Tabs>`),
};

export const section: Section = {
  title: 'Tabs',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/tabs',
  description: 'Organize content into separate views where only one view is visible at a time.',
  default: defaultTabs,
  others: [],
};
