import type { JSXChildren, ButtonHTMLAttributes } from '@builder.io/qwik';
import { cn } from '~/utils/cn';

export type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> & {
  variant?: 'fill' | 'outline' | 'ghost'; // default: fill
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; // default: md
  type?: 'button' | 'submit'; // default: button
};

export const Button = ({
  variant = 'fill',
  size = 'md',
  type = 'button',
  disabled = false,
  class: className,
  children,
  ...props
}: ButtonProps): JSXChildren => {
  return (
    <button
      type={type}
      disabled={disabled}
      class={cn(
        'relative flex select-none items-center justify-center overflow-hidden whitespace-nowrap font-semibold transition-all duration-200',
        {
          'bg-piccolo text-goten': variant === 'fill',
          'border border-piccolo text-piccolo': variant === 'outline',
          'text-piccolo': variant === 'ghost',
          'h-6 px-1 text-onwo-12 rounded-onwo-s-xs': size === 'xs',
          'h-8 px-1 text-onwo-14 rounded-onwo-s-sm': size === 'sm',
          'h-10 px-2 text-onwo-14 rounded-onwo-s-sm': size === 'md',
          'h-12 px-3 text-onwo-16 rounded-onwo-s-sm': size === 'lg',
          'h-14 px-4 text-onwo-16 rounded-onwo-s-md': size === 'xl',
          'active:scale-90': !disabled,
          'opacity-50 cursor-not-allowed': disabled,
        },
        className,
      )}
    >
      {children}
    </button>
  );
  /*
  return (
    <button
      class={cn(className)}
      disabled={disabled}
      {...rest}
    >
      <Slot />
    </button>
  <button type="button" data-size="xs" class="relative flex bg-piccolo text-goten select-none transition-all whitespace-nowrap items-center justify-center overflow-hidden font-semibold duration-200 rounded-onwo-s-xs gap-1 z-0 text-onwo-12 h-6 active:scale-90 group pe-2 ps-1 row">
XS Button
</button>
  <button type="button" data-size="sm" class="relative flex bg-piccolo text-goten select-none transition-all whitespace-nowrap items-center justify-center overflow-hidden font-semibold duration-200 rounded-onwo-s-sm gap-1 z-0 text-onwo-14 h-8 active:scale-90 group pe-3 ps-1 row">
SM Button
</button>
  <button type="button" data-size="md" class="relative flex bg-piccolo text-goten select-none transition-all whitespace-nowrap items-center justify-center overflow-hidden font-semibold duration-200 rounded-onwo-s-sm gap-2 z-0 text-onwo-14 h-10 active:scale-90 group pe-4 ps-2 row">
MD Button is default
</button>
  <button type="button" data-size="lg" class="relative flex bg-piccolo text-goten select-none transition-all whitespace-nowrap items-center justify-center overflow-hidden font-semibold duration-200 rounded-onwo-s-sm gap-2 z-0 text-onwo-16 h-12 active:scale-90 group pe-4 ps-3 row">
LG Button
</button>
  <button type="button" data-size="xl" class="relative flex bg-piccolo text-goten select-none transition-all whitespace-nowrap items-center justify-center overflow-hidden font-semibold duration-200 rounded-onwo-s-md gap-2 z-0 text-onwo-16 h-14 active:scale-90 group pe-6 ps-4 row">
XL Button
</button>
  );
  */
};
