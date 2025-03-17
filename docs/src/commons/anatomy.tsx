import { Tabs } from '@onwo/ui';

type AnatomyProps = {
  variants: Record<string, string>;
};

export const Anatomy = (props: AnatomyProps) => {
  const keys = Object.keys(props.variants);
  return (
    <Tabs.Root class="mt-16">
      <div class="flex justify-between w-full">
        <h2 class="text-onwo-24 font-semibold">Anatomy</h2>
        <Tabs.List class="flex rounded-onwo-s-md gap-1 w-fit justify-left">
          {keys.length > 1 && keys.map((k, idx) => <Tabs.Tab key={idx}>{k}</Tabs.Tab>)}
        </Tabs.List>
      </div>
      <Tabs.Panels class="relative flex text-onwo-14 w-full">
        {Object.values(props.variants).map((val, idx) => (
          <Tabs.Panel key={idx} class="p-4 rounded-onwo-s-sm text-bulma bg-gohan">
            <pre>
              <code>{val}</code>
            </pre>
          </Tabs.Panel>
        ))}
      </Tabs.Panels>
    </Tabs.Root>
  );
};
