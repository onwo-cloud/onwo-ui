import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="chart-area" {...props} viewBox="0 0 32 32">
    <path
      d="M6.5 25.5H25.5M7.23077 15.2692L11.6154 11.6154L14.5385 13.8077L24.7692 6.5V21.8403H7.23079L7.23077 15.2692Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
