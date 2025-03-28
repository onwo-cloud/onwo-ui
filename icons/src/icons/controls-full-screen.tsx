import { primitives as P } from '@onwo/ui';

export default (props: P.IconProps) => (
  <P.SvgIcon data--icon-name="controls-full-screen" {...props} viewBox="0 0 32 32">
    <path
      d="M6.5 12.5V6.5H12.5M6.5 19.5V25.5H12.5M25.5 12.5V6.5H19.5M25.5 19.5V25.5H19.5"
      stroke="currentColor"
    />
  </P.SvgIcon>
);
