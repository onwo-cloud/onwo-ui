import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="text-ancor" {...props} viewBox="0 0 32 32">
    <path
      d="M16 25.5V12.3462M16 25.5C20.8811 25.5 24.9025 22.1019 25.4392 17.7287C25.5064 17.1806 25.0523 16.7308 24.5 16.7308H23.3077M16 25.5C11.1189 25.5 7.09752 22.1019 6.56084 17.7287C6.49357 17.1806 6.94772 16.7308 7.5 16.7308H8.69231M16 12.3462C17.6144 12.3462 18.9231 11.0374 18.9231 9.42308C18.9231 7.80871 17.6144 6.5 16 6.5C14.3856 6.5 13.0769 7.80871 13.0769 9.42308C13.0769 11.0374 14.3856 12.3462 16 12.3462Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
