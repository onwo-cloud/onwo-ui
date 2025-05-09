import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="media-mice" {...props} viewBox="0 0 32 32">
    <path
      d="M23.3153 13.8077V15.2692C23.3153 19.3052 20.0436 22.5769 16.0076 22.5769C11.9717 22.5769 8.69995 19.3052 8.69995 15.2692V13.8077M16.0076 23.3077V25.5M16.0076 25.5H18.9307M16.0076 25.5H13.0846M16.0076 19.6538C13.5861 19.6538 11.623 17.6908 11.623 15.2692V10.8846C11.623 8.46306 13.5861 6.5 16.0076 6.5C18.4292 6.5 20.3923 8.46306 20.3923 10.8846V15.2692C20.3923 17.6908 18.4292 19.6538 16.0076 19.6538Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
