import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="maps-pin-location" {...props} viewBox="0 0 32 32">
    <path
      d="M16 18.5577V25.5M22 12.3462C22 15.5749 19.3137 18.1923 16 18.1923C12.6863 18.1923 10 15.5749 10 12.3462C10 9.11741 12.6863 6.5 16 6.5C19.3137 6.5 22 9.11741 22 12.3462Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
