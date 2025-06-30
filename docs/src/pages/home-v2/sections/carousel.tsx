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
import type { BoxedComp, Section } from '.';

const colors = [
  'linear-gradient(to right, #38f9d7 0%, #43e97b 100%)',
  'linear-gradient(to right, #43e97b 0%, #fee140 100%)',
  'linear-gradient(to right, #fee140 0%, #fa709a 100%)',
];

const defaultCarousel: BoxedComp = {
  title: 'Default',
  display: () => (
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
  ),
  code: `<Carousel gap={30} slidesPerView={3} move={3}>
  <CarouselPrevious />
  <CarouselNext />
  <CarouselScroller>
    {Array.from({ length: 10 }).map((_, label) => (
      <CarouselSlide key={label} class="h-48">
        {label}
      </CarouselSlide>
    ))}
  </CarouselScroller>
</Carousel>`,
};

const verticalCarousel: BoxedComp = {
  title: 'Vertical',
  display: () => (
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
  ),
  code: `<Carousel gap={30} orientation="vertical" maxSlideHeight={160}>
  <CarouselPrevious />
  <CarouselNext />
  <CarouselScroller>
    {Array.from({ length: 10 }).map((_, label) => (
      <CarouselSlide key={label} class="p-16">
        {label}
      </CarouselSlide>
    ))}
  </CarouselScroller>
</Carousel>`,
};

const fadeAnimationCarousel: BoxedComp = {
  title: 'Fade animation',
  display: () => (
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
  ),
  code: `<Carousel class="h-48" gap={0}>
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
</Carousel>`,
};

const paginationCarousel: BoxedComp = {
  title: 'Pagination',
  display: () => (
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
  ),
  code: `<Carousel gap={30}>
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
</Carousel>`,
};

const stepperCarousel: BoxedComp = {
  title: 'Stepper',
  display: () => (
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
  ),
  code: `<Carousel gap={30}>
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
</Carousel>`,
};

export const section: Section = {
  title: 'Carousel',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/carousel',
  description: 'Display a Carousel component',
  components: [
    defaultCarousel,
    verticalCarousel,
    fadeAnimationCarousel,
    paginationCarousel,
    stepperCarousel,
  ],
};
