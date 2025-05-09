import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="generic-ticket" {...props} viewBox="0 0 32 32">
    <path
      d="M5 10C5 8.89543 5.85961 8 6.92 8H25.08C26.1404 8 27 8.89543 27 10V12C27 12.5523 26.5382 12.9831 26.0213 13.1777C24.9125 13.595 24.12 14.7011 24.12 16C24.12 17.2989 24.9125 18.405 26.0213 18.8223C26.5382 19.0169 27 19.4477 27 20V22C27 23.1046 26.1404 24 25.08 24H6.92C5.85961 24 5 23.1046 5 22V20C5 19.4477 5.46184 19.0169 5.97873 18.8223C7.08752 18.405 7.88 17.2989 7.88 16C7.88 14.7011 7.08752 13.595 5.97873 13.1777C5.46184 12.9831 5 12.5523 5 12V10Z"
      stroke="currentColor"
      stroke-linecap="round"
    />
    <line
      x1="11.5"
      y1="8.5"
      x2="11.5"
      y2="23.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-dasharray="2.6 3.2"
    />
  </SvgIcon>
);
