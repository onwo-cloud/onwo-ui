import type { PropsOf } from '@builder.io/qwik';
import { cn } from '@onwo/primitives';
import { Pagination } from '@onwo/primitives/carousel';

type CarouselPaginationProps = PropsOf<typeof Pagination>;

export const CarouselPagination = (props: CarouselPaginationProps) => (
  <Pagination {...props} class={cn('flex mx-auto w-fit', props.class)}>
    {props.children}
  </Pagination>
);
