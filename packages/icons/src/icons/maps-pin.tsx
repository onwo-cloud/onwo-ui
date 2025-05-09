import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="maps-pin" {...props} viewBox="0 0 32 32">
    <path
      d="M16 25.5V20.3846M23.5 20.3846H8.5C8.5 18.1966 9.27276 16.4119 10.8035 15.2184C11.2146 14.8979 11.5 14.4334 11.5 13.9204L11.5 9.42308C11.5 7.80871 12.8431 6.5 14.5 6.5H17.5C19.1569 6.5 20.5 7.80871 20.5 9.42308V13.9204C20.5 14.4334 20.7854 14.8979 21.1965 15.2184C22.7272 16.4119 23.5 18.1966 23.5 20.3846Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
