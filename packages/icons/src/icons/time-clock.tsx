import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="time-clock" {...props} viewBox="0 0 32 32">
    <path
      d="M16 10.1538V16.7307L20.3846 20.3846M25.5 16C25.5 21.2467 21.2467 25.5 16 25.5C10.7533 25.5 6.5 21.2467 6.5 16C6.5 10.7533 10.7533 6.5 16 6.5C21.2467 6.5 25.5 10.7533 25.5 16Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
