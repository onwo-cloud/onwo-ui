import type { JSXChildren } from '@builder.io/qwik';
import { PageNavigation as PNav } from '@onwo/ui';
import { PageHeadSection } from '~/commons/page-head-section';

const ColorSection = (props: { title: string; children: JSXChildren }) => (
  <div>
    <h3 class="font-onwo-16 font-semibold">{props.title}</h3>
    <div class="flex gap-4 items-start font-onwo-16">{props.children}</div>
  </div>
);

const Color = (props: { name: string }) => (
  <div class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center">
    <div class={`w-full h-40 rounded-onwo-s-sm shadow-flat border border-line ${props.name}`} />
    <p>
      <span>{props.name.slice(3)}</span>
    </p>
  </div>
);

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
          <ColorSection title="Accent colours">
            <Color name="bg-accent" />
          </ColorSection>

          <ColorSection title="Background colours">
            <Color name="bg-paper" />
            <Color name="bg-parchment" />
            <Color name="bg-papyrus" />
          </ColorSection>

          <ColorSection title="Text and icon colours">
            <Color name="bg-ink" />
            <Color name="bg-lead" />
            <Color name="bg-graphite" />
          </ColorSection>

          <ColorSection title="Border and line colours">
            <Color name="bg-line" />
          </ColorSection>

          <ColorSection title="Hover and overlay colours">
            <Color name="bg-stare" />
            <Color name="bg-scan" />
            <Color name="bg-gaze" />
          </ColorSection>

          <ColorSection title="Warning colour">
            <Color name="bg-warn" />
            <Color name="bg-warn-60" />
            <Color name="bg-warn-10" />
          </ColorSection>

          <ColorSection title="Error colour">
            <Color name="bg-error" />
            <Color name="bg-error-60" />
            <Color name="bg-error-10" />
          </ColorSection>

          <ColorSection title="Success colour">
            <Color name="bg-success" />
            <Color name="bg-success-60" />
            <Color name="bg-success-10" />
          </ColorSection>

          <ColorSection title="Forced colours">
            <Color name="bg-forced-a" />
            <Color name="bg-forced-b" />
          </ColorSection>
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
          <ColorSection title="Dodoria">
            <Color name="bg-scarab" />
            <Color name="bg-scarab-60" />
            <Color name="bg-scarab-10" />
          </ColorSection>

          <ColorSection title="Cell">
            <Color name="bg-mint" />
            <Color name="bg-mint-60" />
            <Color name="bg-mint-10" />
          </ColorSection>

          <ColorSection title="Raditz">
            <Color name="bg-sand" />
            <Color name="bg-sand-60" />
            <Color name="bg-sand-10" />
          </ColorSection>

          <ColorSection title="Whis">
            <Color name="bg-neutron" />
            <Color name="bg-neutron-60" />
            <Color name="bg-neutron-10" />
          </ColorSection>

          <ColorSection title="Frieza">
            <Color name="bg-prune" />
            <Color name="bg-prune-60" />
            <Color name="bg-prune-10" />
          </ColorSection>
        </div>
      </div>
    </section>
  </div>
);
