import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="sport-tennis" {...props} viewBox="0 0 32 32">
    <path
      d="M16 6.5C10.7533 6.5 6.5 10.7533 6.5 16C6.5 21.2467 10.7533 25.5 16 25.5C21.2467 25.5 25.5 21.2467 25.5 16C25.5 10.7533 21.2467 6.5 16 6.5ZM16 6.5C16 11.8678 20.2046 16.2536 25.5 16.5436M6.74871 15.5716C11.9905 15.7567 16.2115 19.9525 16.4367 25.1839"
      stroke="currentColor"
      stroke-miterlimit="10"
    />
  </SvgIcon>
);
