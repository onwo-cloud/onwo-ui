import type { IconProps } from '@onwo/primitives';
import { SvgIcon } from '@onwo/primitives';

export default (props: IconProps) => (
  <SvgIcon data--icon-name="devices-joystick" {...props} viewBox="0 0 32 32">
    <path
      d="M25.6034 20.9224L24.3446 12.7397C23.9693 10.3006 21.8706 8.5 19.4027 8.5L12.5973 8.5C10.1294 8.5 8.03068 10.3006 7.65543 12.7397L6.39656 20.9223C6.18805 22.2777 7.23668 23.5 8.60795 23.5C9.37837 23.5 10.0946 23.1036 10.5037 22.4508L13.1045 18.3015C13.4702 17.7179 14.1105 17.3636 14.7991 17.3636L17.2009 17.3636C17.8895 17.3636 18.5298 17.7179 18.8955 18.3014L21.4963 22.4508C21.9054 23.1036 22.6216 23.5 23.392 23.5C24.7633 23.5 25.812 22.2777 25.6034 20.9224Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </SvgIcon>
);
