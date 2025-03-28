import { primitives as P } from '@onwo/ui';

export default (props: P.IconProps) => (
  <P.SvgIcon data--icon-name="controls-chevron-left" {...props} viewBox="0 0 32 32">
    <path
      d="M20.5 25L11.5 16L20.5 7"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </P.SvgIcon>
);
