import type { IconProps } from '../svg-icon';
import { SvgIcon } from '../svg-icon';
export default (props: IconProps) => (
  <SvgIcon data--icon-name="text-hashtag" {...props} viewBox="0 0 32 32">
    <path d="M15 6L11 26" stroke="currentColor" />
    <path d="M21 6L17 26" stroke="currentColor" />
    <path d="M8 19.5H23" stroke="currentColor" />
    <path d="M9 13H24" stroke="currentColor" />
  </SvgIcon>
);
