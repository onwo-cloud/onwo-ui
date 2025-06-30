import type { Component } from '@builder.io/qwik';
import { findComponent, processChildren } from '~/imported/inline-component';
import { Bullet } from './bullet';
import type { PublicCarouselRootProps } from './root';
import { CarouselBase } from './root';
import { Slide } from './slide';
import { Step } from './step';
import { Title } from './title';

type InternalProps = {
  value?: string;
  /**
   * @deprecated Use `slideComponent` instead.
   */
  carouselSlideComponent?: typeof Slide;
  /**
   * @deprecated Use `bulletComponent` instead.
   */
  carouselBulletComponent?: typeof Bullet;

  slideComponent?: typeof Slide;
  bulletComponent?: typeof Bullet;
  stepComponent?: typeof Step;
  titleComponent?: typeof Title;
};

export const Root: Component<PublicCarouselRootProps & InternalProps> = (
  props: PublicCarouselRootProps & InternalProps,
) => {
  const {
    children,
    carouselSlideComponent: GivenSlideOld,
    carouselBulletComponent: GivenBulletOld,
    slideComponent: GivenSlide,
    bulletComponent: GivenBullet,
    stepComponent: GivenStep,
    titleComponent: GivenTitle,
    ...rest
  } = props;
  const LSlide = GivenSlide || GivenSlideOld || Slide;
  const LBullet = GivenBullet || GivenBulletOld || Bullet;
  const LStep = GivenStep || Step;
  const LTitle = GivenTitle || Title;
  let currSlideIndex = 0;
  let currBulletIndex = 0;
  let currStepIndex = 0;
  let numSlides = 0;
  let isTitle = false;

  // code executes when the item component's shell is "seen"
  findComponent(LSlide, (slideProps) => {
    slideProps._index = currSlideIndex;

    currSlideIndex++;
    numSlides++;
  });

  findComponent(LBullet, (bulletProps) => {
    bulletProps._index = currBulletIndex;

    currBulletIndex++;
  });

  findComponent(LStep, (stepProps) => {
    stepProps._index = currStepIndex;

    currStepIndex++;
  });

  findComponent(LTitle, () => {
    isTitle = true;
  });

  processChildren(children);

  return (
    <CarouselBase _numSlides={numSlides} _isTitle={isTitle} {...rest}>
      {props.children}
    </CarouselBase>
  );
};
