import { PageNavigation as PNav } from '@onwo/ui';
import { PageHeadSection } from '~/commons/page-head-section';

export const TypographyPage = () => (
  <div class="flex flex-col grow max-w-screen-xl">
    <PageHeadSection
      title="Typography"
      breadcrumbs={[{ label: 'Typography', url: '/typography' }]}
    />

    <div class="flex flex-col gap-12 flex-1 relative focus:outline-none">
      <div class="flex flex-col items-start gap-2 text-onwo-16">
        <p>Typography includes text, headings, and captions.</p>
      </div>

      <section class="flex flex-col">
        <div class="flex flex-row items-center justify-between">
          <div class="flex flex-row gap-2 w-full">
            <div
              id="text_1-example-and-code"
              class="flex items-center justify-between flex-wrap gap-6 w-full"
            >
              <PNav.Link label="Text" id="text">
                <h2 class="text-onwo-24 font-semibold order-1">Text</h2>
              </PNav.Link>

              <div
                class="flex p-1 bg-gohan items-center rounded-onwo-s-md gap-1 order-2 w-fit justify-left"
                role="tablist"
                aria-orientation="horizontal"
              ></div>

              <div role="tabpanel" tabIndex={0} class="order-4 w-full focus:outline-none">
                <div class="flex p-4 bg-gohan rounded-onwo-s-sm text-onwo-14 w-full">
                  <div class="flex flex-wrap items-center justify-around gap-2 w-full bg-transparent">
                    <div class="flex flex-col gap-2 w-full">
                      <p class="text-onwo-9 transition-colors">Size 9</p>
                      <p class="text-onwo-10 transition-colors">Size 10</p>
                      <p class="text-onwo-12 transition-colors">Size 12</p>
                      <p class="text-onwo-14 transition-colors">Size 14</p>
                      <p class="text-onwo-16 transition-colors">Size 16</p>
                      <p class="text-onwo-18 transition-colors">Size 18</p>
                      <p class="text-onwo-20 transition-colors">Size 20</p>
                      <p class="text-onwo-24 transition-colors">Size 24</p>
                      <p class="text-onwo-32 transition-colors">Size 32</p>
                      <p class="text-onwo-48 transition-colors">Size 48</p>
                      <p class="text-onwo-56 transition-colors">Size 56</p>
                      <p class="text-onwo-64 transition-colors">Size 64</p>
                      <p class="text-onwo-72 transition-colors">Size 72</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="flex flex-col">
        <div class="flex flex-row items-center justify-between">
          <div class="flex flex-row gap-2 w-full">
            <div
              id="text_2-example-and-code"
              class="flex items-center justify-between flex-wrap gap-6 w-full"
            >
              <PNav.Link label="Heading" id="heading">
                <h2 class="text-onwo-24 font-semibold order-1">Heading</h2>
              </PNav.Link>

              <div
                class="flex p-1 bg-gohan items-center rounded-onwo-s-md gap-1 order-2 w-fit justify-left"
                role="tablist"
                aria-orientation="horizontal"
              ></div>

              <div role="tabpanel" tabIndex={0} class="order-4 w-full focus:outline-none">
                <div class="flex p-4 bg-gohan rounded-onwo-s-sm text-onwo-14 w-full">
                  <div class="flex flex-wrap items-center justify-around gap-2 w-full bg-transparent">
                    <div class="flex flex-col gap-2 w-full">
                      <h3 class="text-onwo-9 font-medium transition-colors">Size 9</h3>
                      <h3 class="text-onwo-10 font-medium transition-colors">Size 10</h3>
                      <h3 class="text-onwo-12 font-medium transition-colors">Size 12</h3>
                      <h3 class="text-onwo-14 font-medium transition-colors">Size 14</h3>
                      <h3 class="text-onwo-16 font-medium transition-colors">Size 16</h3>
                      <h3 class="text-onwo-18 font-medium transition-colors">Size 18</h3>
                      <h3 class="text-onwo-20 font-medium transition-colors">Size 20</h3>
                      <h3 class="text-onwo-24 font-medium transition-colors">Size 24</h3>
                      <h3 class="text-onwo-32 font-medium transition-colors">Size 32</h3>
                      <h3 class="text-onwo-48 font-medium transition-colors">Size 48</h3>
                      <h3 class="text-onwo-56 font-medium transition-colors">Size 56</h3>
                      <h3 class="text-onwo-64 font-medium transition-colors">Size 64</h3>
                      <h3 class="text-onwo-72 font-medium transition-colors">Size 72</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="flex flex-col">
        <div class="flex flex-row items-center justify-between">
          <div class="flex flex-row gap-2 w-full">
            <div
              id="text_3-example-and-code"
              class="flex items-center justify-between flex-wrap gap-6 w-full"
            >
              <PNav.Link label="Caption" id="caption">
                <h2 class="text-onwo-24 font-semibold order-1">Caption</h2>
              </PNav.Link>

              <div
                class="flex p-1 bg-gohan items-center rounded-onwo-s-md gap-1 order-2 w-fit justify-left"
                role="tablist"
                aria-orientation="horizontal"
              ></div>

              <div role="tabpanel" tabIndex={0} class="order-4 w-full focus:outline-none">
                <div class="flex p-4 bg-gohan rounded-onwo-s-sm text-onwo-14 w-full">
                  <div class="flex flex-wrap items-center justify-around gap-2 w-full bg-transparent">
                    <div class="flex flex-col gap-2 w-full">
                      <span class="text-onwo-9-caption uppercase transition-colors">Size 9</span>
                      <span class="text-onwo-10-caption uppercase transition-colors">Size 10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="flex flex-col">
        <div class="flex flex-row items-center justify-between">
          <div class="flex flex-row gap-2 w-full">
            <div
              id="text_4-example-and-code"
              class="flex items-center justify-between flex-wrap gap-6 w-full"
            >
              <PNav.Link label="Custom colours" id="custom-colours">
                <h2 class="text-onwo-24 font-semibold order-1">Custom Colours</h2>
              </PNav.Link>

              <div
                class="flex p-1 bg-gohan items-center rounded-onwo-s-md gap-1 order-2 w-fit justify-left"
                role="tablist"
                aria-orientation="horizontal"
              ></div>

              <div role="tabpanel" tabIndex={0} class="order-4 w-full focus:outline-none">
                <div class="flex p-4 bg-gohan rounded-onwo-s-sm text-onwo-14 w-full">
                  <div class="flex flex-wrap items-center justify-around gap-2 w-full bg-transparent">
                    <div class="flex justify-around gap-2 w-full">
                      <p class="text-trunks">Trunks</p>
                      <p class="text-piccolo">Piccolo</p>
                      <p class="text-roshi">Roshi</p>
                      <p class="text-chichi">Chichi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);
