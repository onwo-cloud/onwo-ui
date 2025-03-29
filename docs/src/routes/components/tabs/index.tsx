import type { DocumentHead } from '@builder.io/qwik-city';
import { Tabs } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Tabs"
      description="Navigate easily between views within the same context."
      breadcrumbs={[{ label: 'Tabs', url: '/components/tabs' }]}
    />

    <div class="onwo-format">
      <p>
        By organizing frequently used features within a tab structure, users can quickly switch
        between different sections without navigating through multiple screens or complex menu
        hierarchies.
      </p>
      <p class="mt-2">
        Tabs frequently serve as a mean of secondary navigation on desktop, but in mobile app, they
        often become the primary navigation layer due to their compact vertical design.
      </p>
    </div>

    <Anatomy
      variants={{
        Default: `import { Tabs } from '@onwo/ui';

<Tabs>
  <Tabs.List>
    <Tabs.Tab>...</Tabs.Tab>
    <Tabs.Tab>...</Tabs.Tab>
    <Tabs.Tab>...</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel>...</Tabs.Panel>
    <Tabs.Panel>...</Tabs.Panel>
    <Tabs.Panel>...</Tabs.Panel>
  </Tabs.Panels>
</Tabs>`,
      }}
    />

    <Showcase
      title="Default"
      component={
        <Tabs>
          <Tabs.List>
            <Tabs.Tab>First tab</Tabs.Tab>
            <Tabs.Tab>Second tab</Tabs.Tab>
            <Tabs.Tab>Third tab</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panels>
            <Tabs.Panel>Hello</Tabs.Panel>
            <Tabs.Panel>Hi</Tabs.Panel>
            <Tabs.Panel>Bonjour</Tabs.Panel>
          </Tabs.Panels>
        </Tabs>
      }
      code={`<Tabs>
  <Tabs.List>
    <Tabs.Tab>First tab</Tabs.Tab>
    <Tabs.Tab>Second tab</Tabs.Tab>
    <Tabs.Tab>Third tab</Tabs.Tab>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel>Hello</Tabs.Panel>
    <Tabs.Panel>Hi</Tabs.Panel>
    <Tabs.Panel>Bonjour</Tabs.Panel>
  </Tabs.Panels>
</Tabs>`}
    />

    <Showcase
      title="With pills"
      component={
        <Tabs>
          <Tabs.List>
            <Tabs.Pill>First tab</Tabs.Pill>
            <Tabs.Pill>Second tab</Tabs.Pill>
            <Tabs.Pill>Third tab</Tabs.Pill>
          </Tabs.List>
          <Tabs.Panels>
            <Tabs.Panel>Hello</Tabs.Panel>
            <Tabs.Panel>Hi</Tabs.Panel>
            <Tabs.Panel>Bonjour</Tabs.Panel>
          </Tabs.Panels>
        </Tabs>
      }
      code={`<Tabs>
  <Tabs.List>
    <Tabs.Pill>First tab</Tabs.Pill>
    <Tabs.Pill>Second tab</Tabs.Pill>
    <Tabs.Pill>Third tab</Tabs.Pill>
  </Tabs.List>
  <Tabs.Panels>
    <Tabs.Panel>Hello</Tabs.Panel>
    <Tabs.Panel>Hi</Tabs.Panel>
    <Tabs.Panel>Bonjour</Tabs.Panel>
  </Tabs.Panels>
</Tabs>`}
    />

    <Showcase
      title="Sizes"
      component={
        <div class="grid grid-cols-2 gap-4">
          <Tabs>
            <Tabs.List size="sm">
              <Tabs.Pill>Pill-sm</Tabs.Pill>
              <Tabs.Pill>Pill-sm</Tabs.Pill>
              <Tabs.Pill>Pill-sm</Tabs.Pill>
            </Tabs.List>
          </Tabs>
          <Tabs>
            <Tabs.List>
              <Tabs.Pill>Pill-md</Tabs.Pill>
              <Tabs.Pill>Pill-md</Tabs.Pill>
              <Tabs.Pill>Pill-md</Tabs.Pill>
            </Tabs.List>
          </Tabs>
          <Tabs>
            <Tabs.List size="sm">
              <Tabs.Tab>Tab-sm</Tabs.Tab>
              <Tabs.Tab>Tab-sm</Tabs.Tab>
              <Tabs.Tab>Tab-sm</Tabs.Tab>
            </Tabs.List>
          </Tabs>
          <Tabs>
            <Tabs.List>
              <Tabs.Tab>Tab-md</Tabs.Tab>
              <Tabs.Tab>Tab-md</Tabs.Tab>
              <Tabs.Tab>Tab-md</Tabs.Tab>
            </Tabs.List>
          </Tabs>
        </div>
      }
      code={`<div class="grid grid-cols-2 gap-4">
  <Tabs>
    <Tabs.List size="sm">
      <Tabs.Pill>Pill-sm</Tabs.Pill>
      <Tabs.Pill>Pill-sm</Tabs.Pill>
      <Tabs.Pill>Pill-sm</Tabs.Pill>
    </Tabs.List>
  </Tabs>
  <Tabs>
    <Tabs.List>
      <Tabs.Pill>Pill-md</Tabs.Pill>
      <Tabs.Pill>Pill-md</Tabs.Pill>
      <Tabs.Pill>Pill-md</Tabs.Pill>
    </Tabs.List>
  </Tabs>
  <Tabs>
    <Tabs.List size="sm">
      <Tabs.Tab>Tab-sm</Tabs.Tab>
      <Tabs.Tab>Tab-sm</Tabs.Tab>
      <Tabs.Tab>Tab-sm</Tabs.Tab>
    </Tabs.List>
  </Tabs>
  <Tabs>
    <Tabs.List>
      <Tabs.Tab>Tab-md</Tabs.Tab>
      <Tabs.Tab>Tab-md</Tabs.Tab>
      <Tabs.Tab>Tab-md</Tabs.Tab>
    </Tabs.List>
  </Tabs>
</div>`}
    />

    <Showcase
      title="Custom styling"
      component={
        <div class="flex flex-col gap-4">
          <Tabs>
            <Tabs.List>
              <Tabs.Tab class="after:bg-hit hover:text-hit data-selected:text-hit">
                Green tab
              </Tabs.Tab>
              <Tabs.Tab disabled>Disabled tab</Tabs.Tab>
              <Tabs.Tab class="after:bg-hit hover:text-hit data-selected:text-hit">
                Green tab
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
          <Tabs>
            <Tabs.List>
              <Tabs.Pill class="hover:bg-hit/30 data-selected:bg-hit/30">Green pill</Tabs.Pill>
              <Tabs.Pill disabled>Disabled pill</Tabs.Pill>
              <Tabs.Pill class="hover:bg-hit/30 data-selected:bg-hit/30">Green tab pill</Tabs.Pill>
            </Tabs.List>
          </Tabs>
        </div>
      }
      code={`<div class="flex flex-col gap-4">
  <Tabs>
    <Tabs.List>
      <Tabs.Tab class="after:bg-hit hover:text-hit data-selected:text-hit">
        Green tab
      </Tabs.Tab>
      <Tabs.Tab disabled>Disabled tab</Tabs.Tab>
      <Tabs.Tab class="after:bg-hit hover:text-hit data-selected:text-hit">
        Green tab
      </Tabs.Tab>
    </Tabs.List>
  </Tabs>
  <Tabs>
    <Tabs.List>
      <Tabs.Pill class="hover:bg-hit/30 data-selected:bg-hit/30">Green pill</Tabs.Pill>
      <Tabs.Pill disabled>Disabled pill</Tabs.Pill>
      <Tabs.Pill class="hover:bg-hit/30 data-selected:bg-hit/30">Green tab pill</Tabs.Pill>
    </Tabs.List>
  </Tabs>
</div>`}
    />

    <Showcase
      title="Wizard"
      disabled
      component={
        <div class="flex flex-wrap items-center justify-around gap-2 w-full bg-transparent">
          <div class="relative w-full">
            <div id="tabs-wizzard" class="flex mb-10 items-center flex-row flex-nowrap w-full">
              <div
                class="flex px-6 mt-10 items-start flex-col overflow-hidden gap-2 w-1/3 justify-left"
                role="tablist"
                aria-orientation="horizontal"
              >
                <button
                  class="relative"
                  role="tab"
                  type="button"
                  tabIndex={0}
                  aria-selected="true"
                  value="0"
                >
                  <div
                    class="absolute mt-0.5 -ml-px bg-beerus left-3 top-4 w-0.5 h-full"
                    aria-hidden="true"
                  ></div>
                  <span class="group relative flex items-start">
                    <span class="flex bg-goku items-center rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="text-roshi"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="11"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                        ></circle>
                        <circle
                          cx="12"
                          cy="12"
                          r="3.5"
                          fill="currentColor"
                          stroke="currentColor"
                        ></circle>
                      </svg>
                    </span>
                    <span class="flex mb-6 ml-0 text-start items-start flex-col gap-2 min-w-0 min-h-fit md:ml-6">
                      First Step
                    </span>
                  </span>
                </button>

                <button class="relative" role="tab" type="button" tabIndex={1} disabled value="1">
                  <div
                    class="absolute mt-0.5 -ml-px bg-beerus left-3 top-4 w-0.5 h-full"
                    aria-hidden="true"
                  ></div>
                  <span class="group relative flex items-start">
                    <span class="flex bg-goku items-center rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="text-beerus"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="11"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                        ></circle>
                      </svg>
                    </span>
                    <span class="flex mb-6 ml-0 text-start items-start flex-col gap-2 min-w-0 min-h-fit md:ml-6">
                      Second Step
                    </span>
                  </span>
                </button>

                <button class="relative" role="tab" type="button" tabIndex={2} disabled value="2">
                  <span class="group relative flex items-start">
                    <span class="flex bg-goku items-center rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        class="text-beerus"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="11"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                        ></circle>
                      </svg>
                    </span>
                    <span class="flex mb-6 ml-0 text-start items-start flex-col gap-2 min-w-0 min-h-fit md:ml-6">
                      Third Step
                    </span>
                  </span>
                </button>
              </div>

              <div role="tabpanel" tabIndex={0} class="p-4 align-baseline w-3/4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
              </div>
            </div>

            <div class="absolute w-full flex justify-end bottom-0 gap-2">
              <button
                disabled
                type="button"
                data-size="md"
                class="relative flex px-4 bg-transparent text-trunks select-none cursor-not-allowed transition-all whitespace-nowrap items-center justify-center overflow-hidden font-semibold duration-200 rounded-onwo-s-sm gap-2 z-0 text-onwo-14 h-10 hover:text-bulma active:transform-none active:scale-90 group opacity-60 row"
              >
                Previous
                <span class="absolute block bg-transparent pointer-events-none transition-[background-color_0.2s_ease-in-out z-[-1] inset-0"></span>
              </button>

              <button
                type="button"
                data-size="md"
                class="relative flex px-4 bg-piccolo text-goten select-none transition-all whitespace-nowrap items-center justify-center overflow-hidden font-semibold duration-200 rounded-onwo-s-sm gap-2 z-0 text-onwo-14 h-10 active:scale-90 group row"
              >
                Next
                <span class="absolute block bg-transparent pointer-events-none transition-[background-color_0.2s_ease-in-out z-[-1] inset-0 group-hover:bg-heles"></span>
              </button>
            </div>
          </div>
        </div>
      }
      code={``}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Tabs - Onwo UI',
  description:
    'Customizable tabs components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
