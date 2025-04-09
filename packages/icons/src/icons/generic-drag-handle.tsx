import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="generic-drag-handle" {...props} viewBox="0 0 32 32">
    <path d="M22 7L22 24M10 7L10 24M16 7L16 24" stroke="currentColor" stroke-linecap="round" />
  </SvgIcon>
);
