import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="other-plug" {...props} viewBox="0 0 32 32">
    <path
      d="M16 23.3077C11.5605 23.3077 7.96154 19.7087 7.96154 15.2692V12.3462H24.0385V15.2692C24.0385 19.7087 20.4395 23.3077 16 23.3077ZM16 23.3077V25.5M6.5 12.3462H25.5M10.8846 6.5L10.8846 12.3462M21.1154 6.5L21.1154 12.3462"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
