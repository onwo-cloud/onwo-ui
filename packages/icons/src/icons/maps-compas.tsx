import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="maps-compas" {...props} viewBox="0 0 32 32">
    <path
      d="M25.5 16C25.5 21.2467 21.2467 25.5 16 25.5C10.7533 25.5 6.5 21.2467 6.5 16C6.5 10.7533 10.7533 6.5 16 6.5C21.2467 6.5 25.5 10.7533 25.5 16Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.0322 10.8596L17.8985 14.9038L18.9677 21.1403L14.1014 17.0961L13.0322 10.8596Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
