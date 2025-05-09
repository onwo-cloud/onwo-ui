import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="files-sticker" {...props} viewBox="0 0 32 32">
    <path
      d="M19.6539 25.5V25.5C20.1217 25.5 20.5705 25.3141 20.9013 24.9833L24.9832 20.9013C25.3141 20.5705 25.5 20.1218 25.5 19.6538V19.6538M19.6539 25.5L9.42306 25.5C7.80869 25.5 6.49998 24.1913 6.49998 22.5769L6.49998 9.42308C6.49998 7.80871 7.80868 6.5 9.42305 6.5L22.5769 6.5C24.1913 6.5 25.5 7.80871 25.5 9.42309L25.5 19.6538M19.6539 25.5L19.6539 19.6538L25.5 19.6538"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
