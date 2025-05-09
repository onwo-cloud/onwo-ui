import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="security-magnet" {...props} viewBox="0 0 32 32">
    <path
      d="M6.5 10.8846H11.6154M20.3846 10.8846H25.5M6.5 16V8.5C6.5 7.39543 7.39543 6.5 8.5 6.5H9.61539C10.72 6.5 11.6154 7.39543 11.6154 8.5V16C11.6154 18.4216 13.5784 20.3846 16 20.3846C18.4216 20.3846 20.3846 18.4216 20.3846 16V8.5C20.3846 7.39543 21.28 6.5 22.3846 6.5H23.5C24.6046 6.5 25.5 7.39543 25.5 8.5V16C25.5 21.2467 21.2467 25.5 16 25.5C10.7533 25.5 6.5 21.2467 6.5 16Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
