import type { JSXChildren } from '@builder.io/qwik';
import { cn } from '~/utils/cn';

export type ButtonProps = {
  variant?: 'fill' | 'outline' | 'ghost'; // default: fill
  type?: 'button' | 'submit'; // default: button
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; // default: md
  disabled?: boolean;
  animation?: 'progress' | 'success' | 'error' | 'pulse';
  class?: string;
  children?: JSXChildren;
};

export const Button = ({
  variant = 'fill',
  size = 'md',
  type = 'button',
  disabled = false,
  animation,
  class: className,
  ...rest
}: ButtonProps) => {
  return <></>;
  /*
  return (
    <button
      class={cn(className)}
      disabled={disabled}
      {...rest}
    >
      <Slot />
    </button>
  <button type="button" data-size="xs" class="relative flex bg-piccolo text-goten select-none transition-all whitespace-nowrap items-center justify-center overflow-hidden font-semibold duration-200 rounded-moon-s-xs gap-1 z-0 text-moon-12 h-6 active:scale-90 group pe-2 ps-1 row">
XS Button
</button>
  <button type="button" data-size="sm" class="relative flex bg-piccolo text-goten select-none transition-all whitespace-nowrap items-center justify-center overflow-hidden font-semibold duration-200 rounded-moon-s-sm gap-1 z-0 text-moon-14 h-8 active:scale-90 group pe-3 ps-1 row">
SM Button
</button>
  <button type="button" data-size="md" class="relative flex bg-piccolo text-goten select-none transition-all whitespace-nowrap items-center justify-center overflow-hidden font-semibold duration-200 rounded-moon-s-sm gap-2 z-0 text-moon-14 h-10 active:scale-90 group pe-4 ps-2 row">
MD Button is default
</button>
  <button type="button" data-size="lg" class="relative flex bg-piccolo text-goten select-none transition-all whitespace-nowrap items-center justify-center overflow-hidden font-semibold duration-200 rounded-moon-s-sm gap-2 z-0 text-moon-16 h-12 active:scale-90 group pe-4 ps-3 row">
LG Button
</button>
  <button type="button" data-size="xl" class="relative flex bg-piccolo text-goten select-none transition-all whitespace-nowrap items-center justify-center overflow-hidden font-semibold duration-200 rounded-moon-s-md gap-2 z-0 text-moon-16 h-14 active:scale-90 group pe-6 ps-4 row">
XL Button
</button>
  );
  */
};
