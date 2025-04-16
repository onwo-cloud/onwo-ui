import { PageNavigation as PNav } from '@onwo/ui';
import { PageHeadSection } from '~/commons/page-head-section';

export const ColorPage = () => (
  <div>
    <PageHeadSection
      title="Colors"
      description="A theme-agnostic color system design across all products"
      breadcrumbs={[{ label: 'Colors', to: '/colors' }]}
    />

    <section class="mt-12 flex flex-col lg:flex-row gap-6">
      <div class="flex flex-col w-full gap-6">
        <PNav.Link label="Main colours" id="main-colours">
          <h2 id="Main-colours" class="text-onwo-24 font-medium">
            Main colours
          </h2>
        </PNav.Link>
        <div class="w-full flex flex-col gap-2 text-onwo-16">
          <h3 class="font-onwo-16 font-semibold">Accent colours</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-accent"></div>
              <p>accent</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Border and line colours</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-line"></div>
              <p>line</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Background colours</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-paper"></div>
              <p>paper</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-parchment"></div>
              <p>parchment</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Text and icon colours</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-ink"></div>
              <p>ink</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-lead"></div>
              <p>lead</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Forced colours</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-forced-a"></div>
              <p>forced-a</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-forced-b"></div>
              <p>forced-b</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Hover and overlay colours</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-stare"></div>
              <p>stare</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-scan"></div>
              <p>scan</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-gaze"></div>
              <p>gaze</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Warning colour</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-warn"></div>
              <p>warn</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-warn-60"></div>
              <p>warn-60</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-warn-10"></div>
              <p>warn-10</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Error colour</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-error"></div>
              <p>error</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-error-60"></div>
              <p>error-60</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-error-10"></div>
              <p>error-10</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Success colour</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-success"></div>
              <p>success</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-success-60"></div>
              <p>success-60</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-success-10"></div>
              <p>success-10</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="flex flex-col lg:flex-row gap-6">
      <div class="flex flex-col w-full gap-6">
        <PNav.Link label="Supportive-colours" id="supportive-colours">
          <h2 id="Supportive-colours" class="text-onwo-24 font-medium">
            Supportive colours
          </h2>
        </PNav.Link>
        <div class="w-full flex flex-col gap-2 text-onwo-16">
          <h3 class="font-onwo-16 font-semibold">Dodoria</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-scarab"></div>
              <p>scarab</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-scarab-60"></div>
              <p>scarab-60</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-scarab-10"></div>
              <p>scarab-10</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Cell</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-mint"></div>
              <p>mint</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-mint-60"></div>
              <p>mint-60</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-mint-10"></div>
              <p>mint-10</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Raditz</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-sand"></div>
              <p>sand</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-sand-60"></div>
              <p>sand-60</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-sand-10"></div>
              <p>sand-10</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Whis</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-neutron"></div>
              <p>neutron</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-neutron-60"></div>
              <p>neutron-60</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-neutron-10"></div>
              <p>neutron-10</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Frieza</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-prune"></div>
              <p>prune</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-prune-60"></div>
              <p>prune-60</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-prune-10"></div>
              <p>prune-10</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Nappa</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-coffee"></div>
              <p>coffee</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-coffee-60"></div>
              <p>coffee-60</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-line bg-coffee-10"></div>
              <p>coffee-10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
