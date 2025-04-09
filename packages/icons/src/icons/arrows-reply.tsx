import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="arrows-reply" {...props} viewBox="0 0 32 32">
    <path
      d="M15.9231 7L9 13.9231L15.9231 20.8462M9.38462 13.9231H18.3846C21.4434 13.9231 23.9231 16.4027 23.9231 19.4615V25"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
