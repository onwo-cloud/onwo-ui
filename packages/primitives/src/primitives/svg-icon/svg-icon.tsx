import type { ClassList, JSXChildren, QwikIntrinsicElements } from '@builder.io/qwik';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | `${number}rem`;

const getIconSizePx = (size: IconSize) => {
  switch (size) {
    case 'xs': {
      return '1rem';
    }
    case 'sm': {
      return '1.25rem';
    }
    case 'md': {
      return '1.5rem';
    }
    case 'lg': {
      return '2rem';
    }
    case 'xl': {
      return '2.5rem';
    }
    default: {
      return size;
    }
  }
};

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
