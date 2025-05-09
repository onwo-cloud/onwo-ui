import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="media-no-volume" {...props} viewBox="0 0 32 32">
    <path
      d="M20.75 13.9375L24.875 18.0625M24.875 13.9375L20.75 18.0625M7.5 17.7307V14.2693C7.5 13.1648 8.39543 12.2693 9.5 12.2693H9.97608C10.4856 12.2693 10.9758 12.0749 11.3468 11.7257L16.2762 7.08629C16.9144 6.48565 17.9616 6.93811 17.9616 7.81449V24.1856C17.9616 25.062 16.9144 25.5144 16.2762 24.9138L11.3468 20.2743C10.9758 19.9252 10.4855 19.7307 9.97608 19.7307H9.5C8.39543 19.7307 7.5 18.8353 7.5 17.7307Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
