import { primitives as P } from '@onwo/ui';

export default (props: P.IconProps) => (
  <P.SvgIcon data--icon-name="controls-close-small" {...props} viewBox="0 0 32 32">
    <path
      d="M10 10L16 16M16 16L10 22M16 16L22 22M16 16L22 10"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </P.SvgIcon>
);
