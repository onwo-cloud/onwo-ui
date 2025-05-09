import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="text-table-alternative" {...props} viewBox="0 0 32 32">
    <path
      d="M17.344 6H14.656L14.5503 6C9.53042 5.99986 7.32155 5.9998 6.46758 8.85899C6.29208 9.44658 6.77215 10 7.38539 10H24.6146C25.2278 10 25.7079 9.44658 25.5324 8.85899C24.6784 5.9998 22.4695 5.99986 17.4496 6L17.344 6Z"
      stroke="currentColor"
    />
    <path
      d="M17.344 26H14.656L14.5503 26C9.53042 26.0001 7.32155 26.0002 6.46758 23.141C6.29208 22.5534 6.77215 22 7.38539 22H24.6146C25.2278 22 25.7079 22.5534 25.5324 23.141C24.6784 26.0002 22.4695 26.0001 17.4496 26L17.344 26Z"
      stroke="currentColor"
    />
    <rect x="6" y="14" width="20" height="4" rx="1" stroke="currentColor" />
  </SvgIcon>
);
