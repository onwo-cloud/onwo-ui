import { Carousel } from '@onwo/ui';
import type { BoxedComp, Section } from '.';

const colors = [
  'linear-gradient(to right, #38f9d7 0%, #43e97b 100%)',
  'linear-gradient(to right, #43e97b 0%, #fee140 100%)',
  'linear-gradient(to right, #fee140 0%, #fa709a 100%)',
];

const defaultCarousel: BoxedComp = {
  title: 'Default',
  display: () => (
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
  ),
  code: `<Carousel.Root gap={30} slidesPerView={3} move={3}>
  <Carousel.Previous />
  <Carousel.Next />
  <Carousel.Scroller>
    {Array.from({ length: 10 }).map((_, label) => (
      <Carousel.Slide key={label} class="h-48">
        {label}
      </Carousel.Slide>
    ))}
  </Carousel.Scroller>
</Carousel.Root>`,
};

const verticalCarousel: BoxedComp = {
  title: 'Vertical',
  display: () => (
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
  ),
  code: `<Carousel.Root gap={30} orientation="vertical" maxSlideHeight={160}>
  <Carousel.Previous />
  <Carousel.Next />
  <Carousel.Scroller>
    {Array.from({ length: 10 }).map((_, label) => (
      <Carousel.Slide key={label} class="p-16">
        {label}
      </Carousel.Slide>
    ))}
  </Carousel.Scroller>
</Carousel.Root>`,
};

const fadeAnimationCarousel: BoxedComp = {
  title: 'Fade animation',
  display: () => (
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
  ),
  code: `<Carousel.Root class="h-48" gap={0}>
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
</Carousel.Root>`,
};

const paginationCarousel: BoxedComp = {
  title: 'Pagination',
  display: () => (
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
  ),
  code: `<Carousel.Root gap={30}>
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
</Carousel.Root>`,
};

const stepperCarousel: BoxedComp = {
  title: 'Stepper',
  display: () => (
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
  ),
  code: `<Carousel.Root gap={30}>
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
</Carousel.Root>`,
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
