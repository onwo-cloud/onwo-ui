import { Bullet } from './bullet';
import { Root } from './inline';
import { Next } from './next';
import { Pagination } from './pagination';
import { Player } from './player';
import { Previous } from './previous';
import { Scroller } from './scroller';
import { Slide } from './slide';
import { Step } from './step';
import { Stepper } from './stepper';
import { Title } from './title';

export const Carousel = Object.assign(Root, {
  Scroller,
  Slide,
  Previous,
  Next,
  Pagination,
  Bullet,
  Title,
  Player,
  Stepper,
  Step,
});
