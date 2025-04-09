import type { PropsOf } from '@builder.io/qwik';
import { Carousel as C, cn } from '@onwo/primitives';

type PaginationProps = PropsOf<typeof C.Pagination>;

export const Pagination = (props: PaginationProps) => (
  <C.Pagination {...props} class={cn('flex mx-auto w-fit', props.class)}>
    {props.children}
  </C.Pagination>
);
