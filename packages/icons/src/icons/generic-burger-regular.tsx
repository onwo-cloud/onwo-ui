import { primitives as P } from '@onwo/ui';

export default (props: P.IconProps) => (
  <P.SvgIcon data--icon-name="generic-burger-regular" {...props} viewBox="0 0 32 32">
    <path
      d="M7.5 9.5H24.5M7.5 21.5H24.5M7.5 15.5H24.5"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </P.SvgIcon>
);
