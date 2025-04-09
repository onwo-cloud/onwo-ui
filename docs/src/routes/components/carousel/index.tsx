import type { DocumentHead } from '@builder.io/qwik-city';
import { Carousel } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

const colors = [
  'linear-gradient(to right, #38f9d7 0%, #43e97b 100%)',
  'linear-gradient(to right, #43e97b 0%, #fee140 100%)',
  'linear-gradient(to right, #fee140 0%, #fa709a 100%)',
];

export default () => (
  <div>
    <PageHeadSection
      title="Carousel"
      description="Display a Carousel component"
      breadcrumbs={[{ label: 'Carousel', to: '/components/carousel' }]}
    />

    <div class="onwo-format"></div>

    <Anatomy
      variants={{
        Default: `<Carousel.Root gap={30}>
  <Carousel.Previous />
  <Carousel.Next />
  <Carousel.Scroller>
    {Array.from({ length: 10 }, (_, idx) => idx).map((label) => (
      <Carousel.Slide key={label} class="h-48">
        {label}
      </Carousel.Slide>
    ))}
  </Carousel.Scroller>
</Carousel.Root>`,
      }}
    />

    <Showcase
      title="Default"
      component={
        <Carousel.Root gap={30} slidesPerView={3} move={3}>
          <Carousel.Previous />
          <Carousel.Next />
          <Carousel.Scroller>
            {Array.from({ length: 10 }).map((_, label) => (
              <Carousel.Slide key={label} class="h-48">
                {label}
              </Carousel.Slide>
            ))}
          </Carousel.Scroller>
        </Carousel.Root>
      }
      code={`<Carousel.Root gap={30} slidesPerView={3} move={3}>
  <Carousel.Previous />
  <Carousel.Next />
  <Carousel.Scroller>
    {Array.from({ length: 10 }).map((_, label) => (
      <Carousel.Slide key={label} class="h-48">
        {label}
      </Carousel.Slide>
    ))}
  </Carousel.Scroller>
</Carousel.Root>`}
    />

    <Showcase
      title="Vertical"
      component={
        <Carousel.Root gap={30} orientation="vertical" maxSlideHeight={160}>
          <Carousel.Previous />
          <Carousel.Next />
          <Carousel.Scroller>
            {Array.from({ length: 10 }).map((_, label) => (
              <Carousel.Slide key={label} class="p-16">
                {label}
              </Carousel.Slide>
            ))}
          </Carousel.Scroller>
        </Carousel.Root>
      }
      code={`<Carousel.Root gap={30} orientation="vertical" maxSlideHeight={160}>
  <Carousel.Previous />
  <Carousel.Next />
  <Carousel.Scroller>
    {Array.from({ length: 10 }).map((_, label) => (
      <Carousel.Slide key={label} class="p-16">
        {label}
      </Carousel.Slide>
    ))}
  </Carousel.Scroller>
</Carousel.Root>`}
    />

    <Showcase
      title="Fade animation"
      component={
        <Carousel.Root class="h-48" gap={0}>
          <Carousel.Previous />
          <Carousel.Next />
          <div>
            {colors.map((color, idx) => (
              <Carousel.Slide
                forceVisible
                key={color}
                style={{ backgroundImage: color }}
                class="absolute! h-full w-full top-0 transition-opacity duration-1000 opacity-0 data-active:z-[3] data-active:opacity-100"
              >
                {idx}
              </Carousel.Slide>
            ))}
          </div>
        </Carousel.Root>
      }
      code={`<Carousel.Root class="h-48" gap={0}>
  <Carousel.Previous />
  <Carousel.Next />
  <div>
    {colors.map((color, idx) => (
      <Carousel.Slide
        forceVisible
        key={color}
        style={{ backgroundImage: color }}
        class="absolute! h-full w-full top-0 transition-opacity duration-1000 opacity-0 data-active:z-[3] data-active:opacity-100"
      >
        {idx}
      </Carousel.Slide>
    ))}
  </div>
</Carousel.Root>`}
    />

    <Showcase
      title="Pagination"
      component={
        <Carousel.Root gap={30}>
          <Carousel.Scroller>
            {Array.from({ length: 5 }).map((_, label) => (
              <Carousel.Slide key={label} class="h-48">
                Slide {label}
              </Carousel.Slide>
            ))}
          </Carousel.Scroller>
          <Carousel.Pagination class="mt-2">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Carousel.Bullet key={idx}>{idx}</Carousel.Bullet>
            ))}
          </Carousel.Pagination>
        </Carousel.Root>
      }
      code={`<Carousel.Root gap={30}>
  <Carousel.Scroller>
    {Array.from({ length: 5 }).map((_, label) => (
      <Carousel.Slide key={label} class="h-48">
        Slide {label}
      </Carousel.Slide>
    ))}
  </Carousel.Scroller>
  <Carousel.Pagination class="mt-2">
    {Array.from({ length: 5 }).map((_, idx) => (
      <Carousel.Bullet key={idx}>
        {idx}
      </Carousel.Bullet>
    ))}
  </Carousel.Pagination>
</Carousel.Root>`}
    />

    <Showcase
      title="Stepper"
      component={
        <Carousel.Root gap={30}>
          <Carousel.Stepper class="mb-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <Carousel.Step key={index}>Header {index + 1}</Carousel.Step>
            ))}
          </Carousel.Stepper>
          <Carousel.Scroller>
            {Array.from({ length: 3 }).map((_, index) => (
              <Carousel.Slide class="h-48" key={index}>
                Content {index + 1}
              </Carousel.Slide>
            ))}
          </Carousel.Scroller>
        </Carousel.Root>
      }
      code={`<Carousel.Root gap={30}>
  <Carousel.Stepper class="mb-4">
    {Array.from({ length: 3 }).map((_, index) => (
      <Carousel.Step key={index}>
        Header {index + 1}
      </Carousel.Step>
    ))}
  </Carousel.Stepper>
  <Carousel.Scroller>
    {Array.from({ length: 3 }).map((_, index) => (
      <Carousel.Slide class="h-48" key={index}>
        Content {index + 1}
      </Carousel.Slide>
    ))}
  </Carousel.Scroller>
</Carousel.Root>`}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Carousel - Onwo UI',
  description:
    'Customizable carousel components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
