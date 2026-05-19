import type {
  Component,
  JSXOutput,
  ClassList,
  JSXChildren,
  QwikIntrinsicElements,
} from '@builder.io/qwik';

export type BaseIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | `${number}rem`;

const getIconSize = (size: BaseIconSize) => {
  switch (size) {
    case 'xs':
    case 'sm':
    case 'lg':
    case 'xl': {
      return `var(--text-${size})`;
    }
    case 'md': {
      return `var(--text-base)`;
    }
    default: {
      return size;
    }
  }
};

export type BaseIconComponent = ((props: BaseIconProps) => JSXOutput) | Component<BaseIconProps>;

export type BaseIconProps = {
  size?: BaseIconSize;
  class?: ClassList;
};

export type SvgIconProps = {
  viewBox: string;
  children: JSXChildren;
} & BaseIconProps &
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
