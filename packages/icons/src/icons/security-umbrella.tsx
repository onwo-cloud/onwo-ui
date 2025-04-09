import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="security-umbrella" {...props} viewBox="0 0 32 32">
    <path
      d="M16 7.85714C18.387 7.85714 20.6761 8.78654 22.364 10.4409C23.8101 11.8583 24.7132 13.7084 24.9423 15.6807C25.006 16.2293 24.5523 16.6786 24 16.6786H16M16 7.85714C13.6131 7.85714 11.3239 8.78654 9.63605 10.4409C8.18994 11.8583 7.28678 13.7084 7.05774 15.6807C6.99404 16.2293 7.44773 16.6786 8.00001 16.6786L16 16.6786M16 7.85714L16 6.5M16 16.6786L16 21.3572C16 22.8957 14.7602 24.1429 13.2307 24.1429C11.7013 24.1429 10.4615 22.8957 10.4615 21.3572"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
