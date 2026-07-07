import type {
  Component,
  JSXOutput,
  ClassList,
  JSXChildren,
  QwikIntrinsicElements,
} from '@qwik.dev/core';

export const getIconSize = (
  size: string
): string => {
  const isCssValue = /^[0-9.]+(px|rem|em|vh|vw|ch|ex|%)$/.test(size) ||
    /^(calc|var|clamp)\(/.test(size);

  if (isCssValue) {
    return size;
  }

  const isToken = /^[a-zA-Z0-9-]+$/.test(size);

  if (isToken) {
    // We still set size as a default fallback in case non-token are picked up.
    return `var(--icon-${size}, ${size})`;
  }

  return size;
};

export type BaseIconComponent = ((props: BaseIconProps) => JSXOutput) | Component<BaseIconProps>;

export type BaseIconProps = {
  size?: string;
  class?: ClassList;
};

export type SvgIconProps = {
  viewBox: string;
  children: JSXChildren;
} & BaseIconProps &
  Omit<QwikIntrinsicElements['svg'], 'viewBox'>;

export const SvgIcon = ({
  size,
  children,
  fill = 'none',
  xmlns = 'http://www.w3.org/2000/svg',
  class: className,
  ...props
}: SvgIconProps) => {
  const iconSize = getIconSize(size ?? 'md');

  return (
    <svg
      style={{
        'min-width': iconSize,
        'min-height': iconSize,
      }}
      class={['onwo-icon', className]}
      width={iconSize}
      height={iconSize}
      fill={fill}
      xmlns={xmlns}
      {...props}
    >
      {children}
    </svg>
  );
};
