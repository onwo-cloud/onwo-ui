import type { JSXChildren } from '@builder.io/qwik';
import { PageNavigation as PNav } from '@onwo/ui';
import { PageHeadSection } from '~/commons/page-head-section';

const ColorSection = (props: { title: string; children: JSXChildren }) => (
  <div>
    <h3 class="font-onwo-16 font-semibold">{props.title}</h3>
    <div class="flex gap-4 items-start font-onwo-16">{props.children}</div>
  </div>
);

const Color = (props: { name: string; class?: string }) => (
  <div class="flex flex-col basis-1/2 lg:basis-40 gap-2 justify-center items-center">
    <div
      class={
        `w-full h-40 rounded-onwo-s-sm shadow-flat border border-line ${props.name} ` +
          props.class ?? ''
      }
    />
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
            <Color name="bg-contrast" />
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
            <Color name="bg-warn-80" />
            <Color name="bg-warn" />
            <Color name="bg-warn-120" />
          </ColorSection>

          <ColorSection title="Error colour">
            <Color name="bg-error-80" />
            <Color name="bg-error" />
            <Color name="bg-error-120" />
          </ColorSection>

          <ColorSection title="Success colour">
            <Color name="bg-success-80" />
            <Color name="bg-success" />
            <Color name="bg-success-120" />
          </ColorSection>
        </div>
      </div>
    </section>
  </div>
);
