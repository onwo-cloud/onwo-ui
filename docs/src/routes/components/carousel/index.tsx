import type { DocumentHead } from '@builder.io/qwik-city';
import { primitives as P } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];

export default () => (
  <div>
    <PageHeadSection
      title="Carousel"
      breadcrumbs={[{ label: 'Carousel', url: '/components/carousel' }]}
    />

    <div class="onwo-format"></div>

    <Anatomy
      variants={{
        Default: `<Carousel.Root class="carousel-root" gap={30}>
  <div class="carousel-buttons">
    <Carousel.Previous>Prev</Carousel.Previous>
    <Carousel.Next>Next</Carousel.Next>
  </div>
  <Carousel.Scroller class="carousel-scroller">
    {colors.map((color) => (
      <Carousel.Slide key={color} class="carousel-slide">
        {color}
      </Carousel.Slide>
    ))}
  </Carousel.Scroller>
</Carousel.Root>`,
      }}
    />

    <Showcase
      title="Default"
      component={
        <P.Carousel.Root class="carousel-root" gap={30}>
          <div class="carousel-buttons">
            <P.Carousel.Previous>Prev</P.Carousel.Previous>
            <P.Carousel.Next>Next</P.Carousel.Next>
          </div>
          <P.Carousel.Scroller class="carousel-scroller">
            {colors.map((color) => (
              <P.Carousel.Slide key={color} class="carousel-slide">
                {color}
              </P.Carousel.Slide>
            ))}
          </P.Carousel.Scroller>
        </P.Carousel.Root>
      }
      code={``}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'P.Carousel - Onwo UI',
  description:
    'Customizable carousel components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
