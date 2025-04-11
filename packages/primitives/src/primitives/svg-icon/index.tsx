import type { ClassList, JSXChildren, QwikIntrinsicElements } from '@builder.io/qwik';
import { match } from '~/utils/match';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | `${number}rem`;

const getIconSizePx = (size: IconSize) =>
  match(size, {
    xs: () => '1rem',
    sm: () => '1.25rem',
    md: () => '1.5rem',
    lg: () => '2rem',
    xl: () => '2.5rem',
    _: () => size,
  });

export type IconProps = {
  size?: IconSize;
  class?: ClassList;
};

export type SvgIconProps = {
  viewBox: string;
  children: JSXChildren;
} & IconProps &
  Omit<QwikIntrinsicElements['svg'], 'viewBox'>;

/*
 * Generic SVG element, can be use to build higher level icons.
 *
 * -- Display a blue info icon of size 18x18:
 * <InfoIcon size="lg" class="text-blue-400" />
 */
export const SvgIcon = ({
  size,
  children,
  fill = 'none',
  xmlns = 'http://www.w3.org/2000/svg',
  class: className,
  ...props
}: SvgIconProps) => {
  const sizePx = getIconSizePx(size ?? 'md');

  return (
    <svg
      style={{
        'min-width': sizePx,
        'min-height': sizePx,
      }}
      class={`onwo-icon ${className}`}
      width={sizePx}
      height={sizePx}
      fill={fill}
      xmlns={xmlns}
      {...props}
    >
      {children}
    </svg>
  );
};
