import type { QwikHTMLElements } from '@builder.io/qwik';

export type ButtonProps = QwikHTMLElements['button'];

export const Button = ({ type = 'button', children, ...props }: ButtonProps) => (
  <button type={type} {...props}>
    {children}
  </button>
);
