import type { Primitive } from '~ui/utils/types';

type Y = 'top' | 'bottom';
type X = 'left' | 'right';

type XY = `${Y}-${X}`;

export type AvatarStatusProps = Primitive<'div'> & {
  position?: XY;
};

export const AvatarStatus = ({
  position = 'bottom-right',
  class: className,
  ...props
}: AvatarStatusProps) => (
  <div
    class={[
      'absolute border-parchment bg-success rounded-full w-3 h-3 border-solid border-2',
      position === 'bottom-right' ? 'bottom-0 right-0' : '',
      position === 'bottom-left' ? 'bottom-0 left-0' : '',
      position === 'top-right' ? 'top-0 right-0' : '',
      position === 'top-left' ? 'top-0 left-0' : '',
      className,
    ]}
    {...props}
  />
);
