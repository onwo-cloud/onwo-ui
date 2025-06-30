import type { PropsOf } from '@builder.io/qwik';
import { cn } from '@onwo/primitives';
import { Pagination as PPagination } from '@onwo/primitives/carousel';

type PaginationProps = PropsOf<typeof PPagination>;

export const Pagination = (props: PaginationProps) => (
  <PPagination {...props} class={cn('flex mx-auto w-fit', props.class)}>
    {props.children}
  </PPagination>
);
