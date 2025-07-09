import type { PropsOf } from '@builder.io/qwik';
import { ChevronRightIcon } from '@onwo/icons';
import { Next as PNext } from '@onwo/primitives/carousel';
import type { IconComponent } from '@onwo/primitives/svg-icon';

type NextProps = PropsOf<typeof PNext> & {
  icon?: IconComponent;
};

export const Next = ({ icon: Icon = ChevronRightIcon, ...props }: NextProps) => (
  <PNext
    {...props}
    class="z-10 absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 no-underline absolute bg-paper text-ink cursor-pointer font-medium shadow-onwo-sm rounded-onwo-i-sm leading-[0] z-5 w-8 h-8 disabled:cursor-not-allowed disabled:opacity-60 -translate-y-1/2 max-sm:hidden"
  >
    <Icon size="xs" />
  </PNext>
);
