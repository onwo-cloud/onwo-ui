import type { Component, JSX, QwikHTMLElements } from '@builder.io/qwik';
import type { BaseIconProps } from '@onwo/primitives/svg-icon';
import type { OneKeyOf } from '~ui/utils/types';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonProps<T extends keyof QwikHTMLElements> = QwikHTMLElements[T] & {
  as?: T;
  variant?: 'default' | 'contrast' | 'outline' | 'ghost';
  size?: ButtonSize; // default: md
  disabled?: boolean;
} & Partial<OneKeyOf<{ start: Component<BaseIconProps>; end: Component<BaseIconProps> }>>;

const desiredIconSize = (buttonSize: ButtonSize) => {
  switch (buttonSize) {
    case 'xs': return 'xs';
    case 'sm': return 'sm';
    case 'md': return 'sm';
    case 'lg': return 'md';
    case 'xl': return 'md';
  }
};

export const Button = function <T extends keyof QwikHTMLElements = 'button'>({
  as = 'button' as T,
  variant = 'default',
  size = 'md',
  class: className,
  children,
  start: StartIcon,
  end: EndIcon,
  ...props
}: ButtonProps<T>): JSX.Element {
  const As = as as unknown as Component;
  return (
    <As
      style={{
        boxShadow: '0px -2px 0 0px rgba(128, 128, 163, 0.05) inset',
      }}
      class={[
        'relative flex select-none items-center justify-center overflow-hidden whitespace-nowrap transition-transform duration-100',
        variant === 'default' ? 'bg-canvas-secondary hover:bg-canvas-secondary-hover ' : '',
        variant === 'contrast' ? 'bg-accent text-ink-accent hover:contrast-120 hover:brightness-120' : '',
        variant === 'outline' ? 'border border-accent text-accent hover:bg-scan' : '',
        variant === 'ghost' ? 'hover:bg-scan' : '',
        size === 'xs' ? 'gap-1 px-1 py-1 text-xs rounded-sm' : '',
        size === 'sm' ? 'gap-1 px-2 py-1 text-sm rounded-sm' : '',
        size === 'md' ? 'gap-2 px-4 py-2 rounded-lg' : '',
        size === 'lg' ? 'gap-2 px-4 py-2 rounded-sm' : '',
        size === 'xl' ? 'gap-2 px-4 py-2 rounded-md' : '',
        !props.disabled ? 'active:scale-90' : '',
        props.disabled ? 'opacity-50 cursor-not-allowed' : '',
        className,
      ]}
      {...props}
    >
      {StartIcon && <StartIcon size={desiredIconSize(size)} />}
      {children}
      {EndIcon && <EndIcon size={desiredIconSize(size)} />}
    </As>
  );
};
