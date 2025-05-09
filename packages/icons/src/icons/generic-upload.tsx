import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="generic-upload" {...props} viewBox="0 0 32 32">
    <path
      d="M25.5 18.9231V22.5769C25.5 24.1913 24.1913 25.5 22.5769 25.5L9.42308 25.5C7.80871 25.5 6.5 24.1913 6.5 22.5769L6.5 18.9231M16 21.1154L16 6.5M16 6.5L11.6154 10.8846M16 6.5L20.3846 10.8846"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
