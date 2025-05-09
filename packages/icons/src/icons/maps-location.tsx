import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="maps-location" {...props} viewBox="0 0 32 32">
    <path
      d="M23.3077 16C23.3077 20.0359 20.0359 23.3077 16 23.3077M23.3077 16C23.3077 11.9641 20.0359 8.69231 16 8.69231M23.3077 16H25.5M16 23.3077C11.9641 23.3077 8.69231 20.0359 8.69231 16M16 23.3077V25.5M8.69231 16C8.69231 11.9641 11.9641 8.69231 16 8.69231M8.69231 16H6.5M16 8.69231V6.5M18.1923 16C18.1923 17.2108 17.2108 18.1923 16 18.1923C14.7892 18.1923 13.8077 17.2108 13.8077 16C13.8077 14.7892 14.7892 13.8077 16 13.8077C17.2108 13.8077 18.1923 14.7892 18.1923 16Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
