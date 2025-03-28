import { PageNavigation as PNav } from '@onwo/ui';
import { PageHeadSection } from '~/commons/page-head-section';

export const ColorPage = () => (
  <div>
    <PageHeadSection
      title="Colors"
      description="A theme-agnostic color system design across all products"
      breadcrumbs={[{ label: 'Colors', url: '/colors' }]}
    />

    <div class="onwo-format max-w-5xl">
      <p>
        Our design system is decentralized and built for multi-product purposes. Having
        different-color naming conventions and numbers etc... makes it harder to maintain it.
      </p>
      <p>For that, we made a decision to give our colours unique names.</p>
      <p>
        Meet the <span class="font-semibold">Dragon Ball Z approach</span>. Each color name is
        assigned for specific purpose and for each product these values are different.
      </p>
      <p>Please never use Hex values, they won"t change if you need theme support.</p>
    </div>

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
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-piccolo"></div>
              <p>piccolo</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-hit"></div>
              <p>hit</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Border and line colours</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-beerus"></div>
              <p>beerus</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Background colours</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-goku"></div>
              <p>goku</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-gohan"></div>
              <p>gohan</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Text and icon colours</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-bulma"></div>
              <p>bulma</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-trunks"></div>
              <p>trunks</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Forced colours</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-goten"></div>
              <p>goten</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-popo"></div>
              <p>popo</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Hover and overlay colours</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-jiren"></div>
              <p>jiren</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-heles"></div>
              <p>heles</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-zeno"></div>
              <p>zeno</p>
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
          <h3 class="font-onwo-16 font-semibold">
            Krillin
            <span class="font-normal">- Warning colour</span>
          </h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-krillin"></div>
              <p>krillin</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-krillin-60"></div>
              <p>krillin-60</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-krillin-10"></div>
              <p>krillin-10</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">
            Chi Chi
            <span class="font-normal">- Error colour</span>
          </h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-chichi"></div>
              <p>chichi</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-chichi-60"></div>
              <p>chichi-60</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-chichi-10"></div>
              <p>chichi-10</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">
            Roshi
            <span class="font-normal">- Success colour</span>
          </h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-roshi"></div>
              <p>roshi</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-roshi-60"></div>
              <p>roshi-60</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-roshi-10"></div>
              <p>roshi-10</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Dodoria</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-dodoria"></div>
              <p>dodoria</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-dodoria-60"></div>
              <p>dodoria-60</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-dodoria-10"></div>
              <p>dodoria-10</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Cell</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-cell"></div>
              <p>cell</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-cell-60"></div>
              <p>cell-60</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-cell-10"></div>
              <p>cell-10</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Raditz</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-raditz"></div>
              <p>raditz</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-raditz-60"></div>
              <p>raditz-60</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-raditz-10"></div>
              <p>raditz-10</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Whis</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-whis"></div>
              <p>whis</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-whis-60"></div>
              <p>whis-60</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-whis-10"></div>
              <p>whis-10</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Frieza</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-frieza"></div>
              <p>frieza</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-frieza-60"></div>
              <p>frieza-60</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-frieza-10"></div>
              <p>frieza-10</p>
            </div>
          </div>

          <h3 class="font-onwo-16 font-semibold">Nappa</h3>
          <div class="flex gap-4 items-start font-onwo-16">
            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="0"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-nappa"></div>
              <p>nappa</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="1"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-nappa-60"></div>
              <p>nappa-60</p>
            </div>

            <div
              class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center"
              key="2"
            >
              <div class="w-full h-40 rounded-onwo-s-sm border border-beerus bg-nappa-10"></div>
              <p>nappa-10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
