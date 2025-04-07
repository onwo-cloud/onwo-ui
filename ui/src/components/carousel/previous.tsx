import type { JSXOutput, PropsOf } from '@builder.io/qwik';
import type { IconProps } from '~/primitives';
import { Carousel as C } from '~/primitives/carousel';

type PreviousProps = PropsOf<typeof C.Previous> & {
  icon: (props: IconProps) => JSXOutput;
};

export const Previous = ({ icon: Icon, ...props }: PreviousProps) => (
  <C.Previous
    {...props}
    class="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 no-underline absolute bg-goku text-bulma cursor-pointer font-medium shadow-onwo-sm rounded-onwo-i-sm leading-[0] z-5 w-8 h-8 disabled:cursor-not-allowed disabled:opacity-60 -left-4 -translate-y-1/2 max-sm:hidden"
  >
    <Icon size="xs" />
  </C.Previous>
);
