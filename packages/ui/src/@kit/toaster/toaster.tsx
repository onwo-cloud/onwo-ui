import { $ } from '@qwik.dev/core';
import { Toaster as PToaster } from '@onwo/primitives/toaster';
import { ToastItem } from './toast-item';
import { OwPropsOf } from '~primitives/index';

export const Toaster = ({ children, ...props }: Omit<OwPropsOf<typeof PToaster>, 'render$'>) => (
  <PToaster render$={$((props: any) => <ToastItem {...props} />)} {...props}>
    {children}
  </PToaster>
);
