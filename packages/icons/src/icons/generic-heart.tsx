import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="generic-heart" {...props} viewBox="0 0 32 32">
    <path
      d="M24.0984 8.90318C22.2296 7.03227 19.1996 7.03227 17.3308 8.90318L16 10.2355L14.6692 8.90318C12.8004 7.03228 9.77043 7.03228 7.90161 8.90318C6.0328 10.7741 6.0328 13.8074 7.90161 15.6783L16 24.4643L24.0984 15.6783C25.9672 13.8074 25.9672 10.7741 24.0984 8.90318Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
