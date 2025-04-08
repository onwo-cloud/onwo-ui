import { Slot, component$, useStyles$ } from '@builder.io/qwik';
import type { Primitive } from '~/utils/types';

export const style = `
.mm-masonry {
  --_col-width: var(--col-width);
  --_col-width-px: calc(var(--_col-width) * 1px);
  --_gap: calc(var(--gap) * 1px);

  display: var(--display, grid);
  grid-template-columns: repeat(auto-fill, minmax(var(--_col-width-px), 1fr));
  grid-auto-rows: 1px;
  column-gap: var(--_gap);
}

.mm-masonry__item {
  /* Calc img height according column width and  image aspect ratio.
      [Image-Height] * [Column-Width] / [Image-Width] = [X] */
  --img-proportional-height: calc(var(--h) * var(--_col-width) / (var(--w)));

  grid-row-end: span var(--img-proportional-height, 240);
  overflow: hidden;
}

.mm-masonry__item:not(:last-child) {
  margin-bottom: var(--_gap);
}

.mm-masonry__img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
`;

type RootProps = {
  // column size in pixels
  columnWidth?: number;
  // column size in pixels
  gap?: number;
};

export const Root = component$((props: Primitive<'div'> & RootProps) => {
  useStyles$(style);

  return (
    <div class="mm-masonry" style={`--col-width: ${props.columnWidth}; --gap: ${props.gap}`}>
      <Slot />
    </div>
  );
});
