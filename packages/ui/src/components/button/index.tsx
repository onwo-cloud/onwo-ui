import type { Component, JSX, QwikHTMLElements } from '@builder.io/qwik';
import type { IconProps, IconSize } from '@onwo/primitives';
import { Button as BaseButton, cn } from '@onwo/primitives';
import type { OneKeyOf } from '~/utils/types';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonProps<T extends keyof QwikHTMLElements> = QwikHTMLElements[T] & {
  as?: T;
  variant?: 'fill' | 'outline' | 'ghost'; // default: fill
  size?: ButtonSize; // default: md
  disabled?: boolean;
} & OneKeyOf<{ start: Component<IconProps>; end: Component<IconProps> }>;

const desiredIconSize = (buttonSize: ButtonSize): IconSize => {
  switch (buttonSize) {
    case 'xs': {
      return 'xs';
    }
    case 'sm': {
      return 'sm';
    }
    case 'md': {
      return 'sm';
    }
    case 'lg': {
      return 'md';
    }
    case 'xl': {
      return 'md';
    }
  }
};

export const Button = function <T extends keyof QwikHTMLElements = 'button'>({
  as = 'button' as T,
  variant = 'fill',
  size = 'md',
  class: className,
  children,
  start: StartIcon,
  end: EndIcon,
  ...props
}: ButtonProps<T>): JSX.Element {
  const Elem = (as === 'button' ? BaseButton : as) as unknown as Component;

  return (
    <Elem
      style={{
        boxShadow: '0px -2px 0 0px rgba(128, 128, 163, 0.05) inset',
      }}
      class={cn(
        'relative flex select-none items-center justify-center overflow-hidden whitespace-nowrap font-semibold transition-transform duration-100',
        {
          'bg-accent hover:contrast-120 hover:brightness-120 text-contrast': variant === 'fill',
          'border border-accent text-accent hover:bg-scan': variant === 'outline',
          'hover:bg-scan': variant === 'ghost',
          'gap-1 h-6 ps-1 pe-1 text-onwo-12 rounded-onwo-s-xs': size === 'xs',
          'gap-1 h-8 ps-2 pe-2 text-onwo-14 rounded-onwo-s-xs': size === 'sm',
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
