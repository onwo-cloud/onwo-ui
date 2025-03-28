import type { Component, JSX, QwikIntrinsicElements } from '@builder.io/qwik';
import { Button as BaseButton } from '~/primitives/button';
import { IconProps, IconSize } from '~/primitives/svg-icon';
import { cn } from '~/utils/cn';
import type { ExactlyOne } from '~/utils/types';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonProps<T extends keyof QwikIntrinsicElements> = QwikIntrinsicElements[T] & {
  as?: T;
  variant?: 'fill' | 'outline' | 'ghost'; // default: fill
  size?: ButtonSize; // default: md
  disabled?: boolean;
} & ExactlyOne<{ start: Component<IconProps>; end: Component<IconProps> }>;

const desiredIconSize = (buttonSize: ButtonSize): IconSize => {
  switch (buttonSize) {
    case 'xs': return 'xs';
    case 'sm': return 'sm';
    case 'md': return 'sm';
    case 'lg': return 'md';
    case 'xl': return 'md';
  }
}

export const Button = function <T extends keyof QwikIntrinsicElements = 'button'>({
  as = 'button' as T,
  variant = 'fill',
  size = 'md',
  class: className,
  children,
  start: StartIcon,
  end: EndIcon,
  ...props
}: ButtonProps<T>): JSX.Element {
  const Elem = (as !== 'button' ? as : BaseButton) as unknown as Component;

  return (
    <Elem
      class={cn(
        'relative flex select-none items-center justify-center overflow-hidden whitespace-nowrap font-semibold transition-all duration-200',
        {
          'bg-piccolo text-goten': variant === 'fill',
          'border border-piccolo text-piccolo': variant === 'outline',
          'text-piccolo': variant === 'ghost',
          'gap-1 h-6 ps-1 pe-1 text-onwo-12 rounded-onwo-s-xs': size === 'xs',
          'gap-1 h-8 ps-1 pe-1 text-onwo-14 rounded-onwo-s-sm': size === 'sm',
          'gap-2 h-10 ps-2 pe-2 text-onwo-14 rounded-onwo-s-sm': size === 'md',
          'gap-2 h-12 ps-3 pe-3 text-onwo-16 rounded-onwo-s-sm': size === 'lg',
          'gap-2 h-14 ps-4 pe-4 text-onwo-16 rounded-onwo-s-md': size === 'xl',
          'pe-2': !!StartIcon && size === 'xs',
          'pe-3': !!StartIcon && size === 'sm',
          'pe-4': !!StartIcon && ['md', 'lg'].includes(size),

          'ps-2': !!EndIcon && size === 'xs',
          'ps-3': !!EndIcon && size === 'sm',
          'ps-4': !!EndIcon && ['md', 'lg'].includes(size),

          'active:scale-90': !props.disabled,
          'opacity-50 cursor-not-allowed': props.disabled,
        },
        className,
      )}
      {...props}
    >
      {StartIcon && <StartIcon size={desiredIconSize(size)} />}
      {children}
      {EndIcon && <EndIcon size={desiredIconSize(size)} />}
    </Elem>
  );
};
