import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="software-sorting" {...props} viewBox="0 0 32 32">
    <path
      d="M14 12.5C14 13.6046 13.1046 14.5 12 14.5C10.8954 14.5 10 13.6046 10 12.5M14 12.5C14 11.3954 13.1046 10.5 12 10.5C10.8954 10.5 10 11.3954 10 12.5M14 12.5H25.5M10 12.5H6.5M18 20.5C18 19.3954 18.8954 18.5 20 18.5C21.1046 18.5 22 19.3954 22 20.5M18 20.5C18 21.6046 18.8954 22.5 20 22.5C21.1046 22.5 22 21.6046 22 20.5M18 20.5L6.5 20.5M22 20.5H25.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
