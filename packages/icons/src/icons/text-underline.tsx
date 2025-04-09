import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="text-underline" {...props} viewBox="0 0 32 32">
    <path
      d="M23 6.5L23 15.5769C23 19.4429 19.866 22.5769 16 22.5769C12.134 22.5769 9.00002 19.4429 9.00001 15.5769L9 6.5M9.73684 25.5H22.2632"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
