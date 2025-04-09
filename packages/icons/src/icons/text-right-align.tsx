import { primitives as P } from '@onwo/ui';

export default (props: P.IconProps) => (
  <P.SvgIcon data--icon-name="text-right-align" {...props} viewBox="0 0 32 32">
    <path
      d="M25 25H16M25 19H7M25 7H7M25 13H16"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </P.SvgIcon>
);
