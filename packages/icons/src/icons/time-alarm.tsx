import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="time-alarm" {...props} viewBox="0 0 32 32">
    <path
      d="M10.1538 6.5L6.5 10.1538M21.8462 6.5L25.5 10.1538M10.1538 25.5L11.6154 23.3077M21.8462 25.5L20.3846 23.3077M16 11.9198V16.3045L18.9231 18.7404M24.0385 16C24.0385 20.4395 20.4395 24.0385 16 24.0385C11.5605 24.0385 7.96154 20.4395 7.96154 16C7.96154 11.5605 11.5605 7.96154 16 7.96154C20.4395 7.96154 24.0385 11.5605 24.0385 16Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
