import { primitives as P } from '@onwo/ui';

export default (props: P.IconProps) => (
  <P.SvgIcon data--icon-name="controls-chevron-right-small" {...props} viewBox="0 0 32 32">
    <path
      d="M13 10L19 16L13 22"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </P.SvgIcon>
);
