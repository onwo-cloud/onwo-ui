import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="generic-alarm" {...props} viewBox="0 0 32 32">
    <path
      d="M16 21V21.7M16 13.3V18.55M23.1516 25.2H8.84843C7.33508 25.2 6.37001 23.5843 7.08749 22.2518L14.9681 7.61633C15.1725 7.23672 15.5689 7 16 7C16.4311 7 16.8275 7.23672 17.0319 7.61633L24.9125 22.2518C25.63 23.5843 24.6649 25.2 23.1516 25.2Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
