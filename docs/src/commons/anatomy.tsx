import { PageNavigationLink, Tabs, TabsPanel, TabsPanels, TabsList, TabsTab } from '@onwo/ui';

type AnatomyProps = {
  variants: Record<string, string>;
};

export const Anatomy = (props: AnatomyProps) => {
  const keys = Object.keys(props.variants);

  return (
    <Tabs class="mt-12">
      <div class="flex justify-between w-full">
        <PageNavigationLink label="Anatomy" id="anatomy">
          <h2 class="text-onwo-24 font-semibold">Anatomy</h2>
        </PageNavigationLink>
        <TabsList class="flex rounded-onwo-s-md gap-1 w-fit justify-left">
          {keys.length > 1 && keys.map((k, idx) => <TabsTab key={idx}>{k}</TabsTab>)}
        </TabsList>
      </div>
      <TabsPanels class="relative flex text-onwo-14 w-full">
        {Object.values(props.variants).map((val, idx) => (
          <TabsPanel key={idx} class="p-4 rounded-onwo-s-sm text-ink bg-parchment">
            <pre>
              <code>{val}</code>
            </pre>
          </TabsPanel>
        ))}
      </TabsPanels>
    </Tabs>
  );
};
