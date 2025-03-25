import type { QwikIntrinsicElements } from '@builder.io/qwik';
import { PageNavigation } from '~/primitives';

export type LinkProps = Omit<QwikIntrinsicElements['a'], 'id'> & {
  label: string;
  id: string;
};

export const Link = ({ children, ...props }: LinkProps) => (
  <PageNavigation.Link {...props}>{children}</PageNavigation.Link>
);
