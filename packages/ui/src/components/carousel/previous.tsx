import type { JSXOutput, PropsOf } from '@builder.io/qwik';
import { ChevronLeftIcon } from '@onwo/icons';
import { Previous } from '@onwo/primitives/carousel';
import type { IconProps } from '@onwo/primitives/svg-icon';

type CarouselPreviousProps = PropsOf<typeof Previous> & {
  icon?: (props: IconProps) => JSXOutput;
};

export const CarouselPrevious = ({
  icon: Icon = ChevronLeftIcon,
  ...props
}: CarouselPreviousProps) => (
  <Previous
    {...props}
    class="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 no-underline absolute bg-paper text-ink cursor-pointer font-medium shadow-onwo-sm rounded-onwo-i-sm leading-[0] z-5 w-8 h-8 disabled:cursor-not-allowed disabled:opacity-60 -left-4 -translate-y-1/2 max-sm:hidden"
  >
    <Icon size="xs" />
  </Previous>
);
