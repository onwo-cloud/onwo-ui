import type { QwikHTMLElements } from '@builder.io/qwik';
import { cn } from '~/utils/cn';

export type ButtonProps = QwikHTMLElements['button'];

export const Button = ({ type = 'button', class: className, children, ...props }: ButtonProps) => (
  <button class={cn('touch-manipulation', className)} type={type} {...props}>
    {children}
  </button>
);
