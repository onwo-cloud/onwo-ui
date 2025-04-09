import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="time-stopwatch-timer" {...props} viewBox="0 0 32 32">
    <path
      d="M7.5 17.4615C7.5 21.9011 11.0989 25.5 15.5385 25.5C19.978 25.5 23.5769 21.9011 23.5769 17.4615C23.5769 13.022 19.978 9.42308 15.5385 9.42308M10.3863 12.9123L15.5385 18.1923M12.9808 6.5L18.4615 6.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
