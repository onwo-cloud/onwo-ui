import type { PropsOf } from '@builder.io/qwik';
import { Pagination } from '@onwo/primitives/carousel';

type CarouselPaginationProps = PropsOf<typeof Pagination>;

export const CarouselPagination = (props: CarouselPaginationProps) => (
  <Pagination {...props} class={['flex mx-auto w-fit', props.class]}>
    {props.children}
  </Pagination>
);
