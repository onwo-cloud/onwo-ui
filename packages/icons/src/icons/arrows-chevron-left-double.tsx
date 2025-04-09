import { primitives as P } from '@onwo/ui';

export default (props: P.IconProps) => (
  <P.SvgIcon data--icon-name="arrows-chevron-left-double" {...props} viewBox="0 0 32 32">
    <path
      d="M16 25.5L6.5 16L16 6.5M25.5 25.5L16 16L25.5 6.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </P.SvgIcon>
);
