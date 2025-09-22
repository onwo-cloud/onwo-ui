import type { DocumentHead } from '@builder.io/qwik-city';
import {
  Carousel,
  CarouselBullet,
  CarouselNext,
  CarouselPagination,
  CarouselPrevious,
  CarouselScroller,
  CarouselSlide,
  CarouselStep,
  CarouselStepper,
} from '@onwo/ui';
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
        Default: `<Carousel gap={30}>
  <CarouselPrevious />
  <CarouselNext />
  <CarouselScroller>
    {Array.from({ length: 10 }, (_, idx) => idx).map((label) => (
      <CarouselSlide key={label} class="h-48">
        {label}
      </CarouselSlide>
    ))}
  </CarouselScroller>
</Carousel>`,
      }}
    />

    <Showcase
      title="Default"
      component={
        <Carousel gap={30} slidesPerView={3} move={3}>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselScroller>
            {Array.from({ length: 10 }).map((_, label) => (
              <CarouselSlide key={label} class="h-48">
                {label}
              </CarouselSlide>
            ))}
          </CarouselScroller>
        </Carousel>
      }
      code={`<Carousel gap={30} slidesPerView={3} move={3}>
  <CarouselPrevious />
  <CarouselNext />
  <CarouselScroller>
    {Array.from({ length: 10 }).map((_, label) => (
      <CarouselSlide key={label} class="h-48">
        {label}
      </CarouselSlide>
    ))}
  </CarouselScroller>
</Carousel>`}
    />

    <Showcase
      title="Vertical"
      component={
        <Carousel gap={30} orientation="vertical" maxSlideHeight={160}>
          <CarouselPrevious />
          <CarouselNext />
          <CarouselScroller>
            {Array.from({ length: 10 }).map((_, label) => (
              <CarouselSlide key={label} class="p-16">
                {label}
              </CarouselSlide>
            ))}
          </CarouselScroller>
        </Carousel>
      }
      code={`<Carousel gap={30} orientation="vertical" maxSlideHeight={160}>
  <CarouselPrevious />
  <CarouselNext />
  <CarouselScroller>
    {Array.from({ length: 10 }).map((_, label) => (
      <CarouselSlide key={label} class="p-16">
        {label}
      </CarouselSlide>
    ))}
  </CarouselScroller>
</Carousel>`}
    />

    <Showcase
      title="Fade animation"
      component={
        <Carousel class="h-48" gap={0}>
          <CarouselPrevious />
          <CarouselNext />
          <div>
            {colors.map((color, idx) => (
              <CarouselSlide
                forceVisible
                key={color}
                style={{ backgroundImage: color }}
                class="absolute! h-full w-full top-0 transition-opacity duration-1000 opacity-0 data-active:z-[3] data-active:opacity-100"
              >
                {idx}
              </CarouselSlide>
            ))}
          </div>
        </Carousel>
      }
      code={`<Carousel class="h-48" gap={0}>
  <CarouselPrevious />
  <CarouselNext />
  <div>
    {colors.map((color, idx) => (
      <CarouselSlide
        forceVisible
        key={color}
        style={{ backgroundImage: color }}
        class="absolute! h-full w-full top-0 transition-opacity duration-1000 opacity-0 data-active:z-[3] data-active:opacity-100"
      >
        {idx}
      </CarouselSlide>
    ))}
  </div>
</Carousel>`}
    />

    <Showcase
      title="Pagination"
      component={
        <Carousel gap={30}>
          <CarouselScroller>
            {Array.from({ length: 5 }).map((_, label) => (
              <CarouselSlide key={label} class="h-48">
                Slide {label}
              </CarouselSlide>
            ))}
          </CarouselScroller>
          <CarouselPagination class="mt-2">
            {Array.from({ length: 5 }).map((_, idx) => (
              <CarouselBullet key={idx}>{idx}</CarouselBullet>
            ))}
          </CarouselPagination>
        </Carousel>
      }
      code={`<Carousel gap={30}>
  <CarouselScroller>
    {Array.from({ length: 5 }).map((_, label) => (
      <CarouselSlide key={label} class="h-48">
        Slide {label}
      </CarouselSlide>
    ))}
  </CarouselScroller>
  <CarouselPagination class="mt-2">
    {Array.from({ length: 5 }).map((_, idx) => (
      <CarouselBullet key={idx}>
        {idx}
      </CarouselBullet>
    ))}
  </CarouselPagination>
</Carousel>`}
    />

    <Showcase
      title="Stepper"
      component={
        <Carousel gap={30}>
          <CarouselStepper class="mb-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselStep key={index}>Header {index + 1}</CarouselStep>
            ))}
          </CarouselStepper>
          <CarouselScroller>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselSlide class="h-48" key={index}>
                Content {index + 1}
              </CarouselSlide>
            ))}
          </CarouselScroller>
        </Carousel>
      }
      code={`<Carousel gap={30}>
  <CarouselStepper class="mb-4">
    {Array.from({ length: 3 }).map((_, index) => (
      <CarouselStep key={index}>
        Header {index + 1}
      </CarouselStep>
    ))}
  </CarouselStepper>
  <CarouselScroller>
    {Array.from({ length: 3 }).map((_, index) => (
      <CarouselSlide class="h-48" key={index}>
        Content {index + 1}
      </CarouselSlide>
    ))}
  </CarouselScroller>
</Carousel>`}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Carousel - Onwo UI',
  description:
    'Customizable carousel components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
