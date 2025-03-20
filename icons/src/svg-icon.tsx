import type { JSXChildren } from '@builder.io/qwik';

type IconSize = 'sm' | 'md' | 'lg' | 'xl';

const getIconSizePx = (size: IconSize) =>
  ({
    sm: '1.25rem',
    md: '1.5rem',
    lg: '1.75rem',
    xl: '2.25rem',
  })[size];

export type IconProps = {
  size?: IconSize;
  class?: string;
};

export type SvgIconProps = {
  viewBox: string;
  children: JSXChildren;
} & IconProps;

/*
 * Generic SVG element, can be use to build higher level icons.
 *
 * -- Display a blue info icon of size 18x18:
 * <InfoIcon size="lg" class="text-blue-400" />
 */
export const SvgIcon = (props: SvgIconProps) => {
  const sizePx = getIconSizePx(props.size ?? 'md');

  return (
    <svg
      style={{ 'min-width': sizePx, 'min-height': sizePx }}
      width={sizePx}
      height={sizePx}
      class={props.class}
      viewBox={props.viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.children}
    </svg>
  );
};
