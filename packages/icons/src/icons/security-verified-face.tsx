import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="security-verified-face" {...props} viewBox="0 0 32 32">
    <path
      d="M10.8846 6.5H10.5C8.29086 6.5 6.5 8.29086 6.5 10.5V10.8846M21.1154 6.5H21.5C23.7091 6.5 25.5 8.29086 25.5 10.5V10.8846M10.8846 25.5H10.5C8.29086 25.5 6.5 23.7091 6.5 21.5V21.1154M21.1154 25.5H21.5C23.7091 25.5 25.5 23.7091 25.5 21.5V21.1154M13.0769 14.5385L13.0769 12.3462M18.9231 14.5385L18.9231 12.3462M12.3462 19.6538C13.3152 20.5897 14.6295 21.1154 16 21.1154C17.3705 21.1154 18.6848 20.5897 19.6538 19.6538"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
