import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="text-marker" {...props} viewBox="0 0 32 32">
    <path
      d="M8.95323 20.9387L7.55126 22.3422C6.97054 22.9236 6.97054 23.8661 7.55126 24.4475C8.13197 25.0288 9.0735 25.0288 9.65422 24.4475L11.0562 23.044M20.1691 11.8159L16.3136 15.6756M12.8087 24.1186L24.0463 12.8686C25.4013 11.5121 25.4013 9.31282 24.0463 7.95633C22.6913 6.59984 20.4944 6.59984 19.1394 7.95633L7.90177 19.2063L12.8087 24.1186Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
