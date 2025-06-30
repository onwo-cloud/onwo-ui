import { $, type JSXChildren } from '@builder.io/qwik';
import type { ToasterProps as PToasterProps } from '@onwo/primitives/toaster';
import { Toaster as PToaster } from '@onwo/primitives/toaster';
import { ToastItem } from './toast-item';

type ToasterProps = Omit<PToasterProps, 'render$'> & { children: JSXChildren };

export const Toaster = ({ children, ...props }: ToasterProps) => (
  <PToaster
    render$={$((props: any) => (
      <ToastItem {...props} />
    ))}
    {...props}
  >
    {children}
  </PToaster>
);
