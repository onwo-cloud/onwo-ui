import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="media-volume" {...props} viewBox="0 0 32 32">
    <path
      d="M21.2308 10.7482C23.1924 11.8975 24.5 13.9589 24.5 16.3107C24.5 18.6625 23.1924 20.7239 21.2308 21.8732M20.577 14.7565C20.9693 15.0777 21.2308 15.6538 21.2308 16.311C21.2308 16.9682 20.9693 17.5443 20.577 17.8654M7.5 17.7307V14.2693C7.5 13.1647 8.39543 12.2693 9.5 12.2693H9.97608C10.4856 12.2693 10.9758 12.0749 11.3468 11.7257L16.2762 7.08629C16.9144 6.48565 17.9616 6.93811 17.9616 7.81449V24.1856C17.9616 25.062 16.9144 25.5144 16.2762 24.9138L11.3468 20.2743C10.9758 19.9251 10.4855 19.7307 9.97607 19.7307H9.5C8.39543 19.7307 7.5 18.8353 7.5 17.7307Z"
      stroke="currentColor"
      stroke-miterlimit="16"
      stroke-linecap="round"
      stroke-linejoin="bevel"
    />
  </SvgIcon>
);
