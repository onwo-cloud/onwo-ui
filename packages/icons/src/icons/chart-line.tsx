import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="chart-line" {...props} viewBox="0 0 32 32">
    <path
      d="M6.5 23H25.5M7.23077 15.6316L12.3462 10.4737L17.4615 15.6316L24.7692 9"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
