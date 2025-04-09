import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="generic-share-ios-big" {...props} viewBox="0 0 32 32">
    <path
      d="M16 19V4M16 4L11.9579 7.6M16 4L20.0421 7.6M12.16 11.0001H8.11431C7.16754 11.0001 6.40002 11.7676 6.40002 12.7143V26.2858C6.40002 27.2325 7.16753 28.0001 8.11431 28.0001H23.8857C24.8325 28.0001 25.6 27.2325 25.6 26.2858V12.7143C25.6 11.7676 24.8325 11.0001 23.8857 11.0001H19.84"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
