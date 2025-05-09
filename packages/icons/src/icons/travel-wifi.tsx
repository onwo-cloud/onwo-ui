import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="travel-wifi" {...props} viewBox="0 0 32 32">
    <path
      d="M5.41602 13.73C11.3763 6.35629 21.4558 6.35629 27.416 13.73M8.3161 16.6476C12.7087 11.2174 20.1273 11.2174 24.5198 16.6476M11.8341 19.0831C14.3164 16.0102 18.5166 16.0102 20.9999 19.0831M18.416 22.1997C18.416 23.3043 17.5206 24.1997 16.416 24.1997C15.3114 24.1997 14.416 23.3043 14.416 22.1997C14.416 21.0951 15.3114 20.1997 16.416 20.1997C17.5206 20.1997 18.416 21.0951 18.416 22.1997Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
