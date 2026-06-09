import type { PropsOf } from '@builder.io/qwik';
import LogoImg from '~/assets/onwo-logo.svg?jsx';
import LogoTextImg from '~/assets/onwo.svg?jsx';

export const Logo = (props: PropsOf<'svg'>) => (
  <LogoImg  {...props} height={16} width={16} />
);

export const LogoText = (props: PropsOf<'svg'>) => (
  <LogoTextImg height="11.6" class="mt-[3px]" {...props} />
);
