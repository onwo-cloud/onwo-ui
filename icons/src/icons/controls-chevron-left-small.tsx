import { primitives as P } from '@onwo/ui';

export default (props: P.IconProps) => (
  <P.SvgIcon data--icon-name="controls-chevron-left-small" {...props} viewBox="0 0 32 32">
    <path
      d="M19 22L13 16L19 10"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </P.SvgIcon>
);
