import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="controls-plus" {...props} viewBox="0 0 32 32">
    <path
      d="M16 7L16 16.1924M16 16.1924L6.80759 16.1924M16 16.1924L16 25.3847M16 16.1924L25.1924 16.1924"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
