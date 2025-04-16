import type { JSXOutput, PropsOf } from '@builder.io/qwik';
import { Icons } from '@onwo/icons';
import type { IconProps } from '@onwo/primitives';
import { Carousel as C } from '@onwo/primitives';

type NextProps = PropsOf<typeof C.Previous> & {
  icon?: (props: IconProps) => JSXOutput;
};

export const Next = ({ icon: Icon = Icons.ControlsChevronRight, ...props }: NextProps) => (
  <C.Next
    {...props}
    class="z-10 absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 no-underline absolute bg-paper text-ink cursor-pointer font-medium shadow-onwo-sm rounded-onwo-i-sm leading-[0] z-5 w-8 h-8 disabled:cursor-not-allowed disabled:opacity-60 -translate-y-1/2 max-sm:hidden"
  >
    <Icon size="xs" />
  </C.Next>
);
