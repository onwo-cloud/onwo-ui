import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="maps-marker" {...props} viewBox="0 0 32 32">
    <path
      d="M19 13.8077C19 15.4221 17.6569 16.7308 16 16.7308C14.3431 16.7308 13 15.4221 13 13.8077C13 12.1933 14.3431 10.8846 16 10.8846C17.6569 10.8846 19 12.1933 19 13.8077Z"
      stroke="currentColor"
      stroke-linejoin="round"
    />
    <path
      d="M23.5 13.5828C23.5 19.7431 16 25.5 16 25.5C16 25.5 8.5 19.7431 8.5 13.5828C8.5 9.6711 11.8579 6.5 16 6.5C20.1421 6.5 23.5 9.6711 23.5 13.5828Z"
      stroke="currentColor"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
