import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="text-size" {...props} viewBox="0 0 32 32">
    <path
      d="M22.5312 25V19.1816M19.5625 18.9285H25.5M14.8125 24.9998V8.70825M6.5 8L23.125 8"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
