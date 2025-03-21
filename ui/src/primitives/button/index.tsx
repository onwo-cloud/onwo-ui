import type { QwikIntrinsicElements } from '@builder.io/qwik';

export type ButtonProps = QwikIntrinsicElements['button'];

export const Button = ({ type = 'button', children, ...props }: ButtonProps) => (
  <button type={type} {...props}>
    {children}
  </button>
);
