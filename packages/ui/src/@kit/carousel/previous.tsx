import type { PropsOf } from '@builder.io/qwik';
import { Previous } from '@onwo/primitives/carousel';
import type { BaseIconComponent } from '@onwo/primitives/svg-icon';
import { UiIcon } from '~ui/icon-provider';

type CarouselPreviousProps = PropsOf<typeof Previous> & {
  icon?: BaseIconComponent;
};

export const CarouselPrevious = ({
  icon: ChosenIcon = UiIcon.named('chevron-left'),
  ...props
}: CarouselPreviousProps) => (
  <Previous
    {...props}
    class="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 no-underline absolute bg-paper text-ink cursor-pointer font-medium shadow-onwo-sm rounded-onwo-i-sm leading-[0] z-5 w-8 h-8 disabled:cursor-not-allowed disabled:opacity-60 -left-4 -translate-y-1/2 max-sm:hidden"
  >
    <ChosenIcon size="xs" />
  </Previous>
);
