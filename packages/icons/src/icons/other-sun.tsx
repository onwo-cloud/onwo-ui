import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="other-sun" {...props} viewBox="0 0 32 32">
    <path
      d="M23.3077 16C23.3077 20.0359 20.0359 23.3077 16 23.3077M23.3077 16C23.3077 11.9641 20.0359 8.69231 16 8.69231M23.3077 16H25.5M16 23.3077C11.9641 23.3077 8.69231 20.0359 8.69231 16M16 23.3077V25.5M8.69231 16C8.69231 11.9641 11.9641 8.69231 16 8.69231M8.69231 16H6.5M16 8.69231V6.5M9.28249 9.28249L10.8327 10.8327M21.1673 21.1673L22.7175 22.7175M22.7175 9.28249L21.1673 10.8327M10.8327 21.1673L9.2825 22.7175"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
