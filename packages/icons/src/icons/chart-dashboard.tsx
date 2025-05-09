import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="chart-dashboard" {...props} viewBox="0 0 32 32">
    <path
      d="M7 25H25M7 15L11.5 11.6667L14.5 13.6667L25 7M7 19.5763L11.5 16.0029L14.5 18.1469L25 11V21H7.00002L7 19.5763Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
