import type { IconProps } from '../svg-icon';
import { SvgIcon } from '../svg-icon';
export default (props: IconProps) => (
  <SvgIcon data--icon-name="generic-bookmark" {...props} viewBox="0 0 32 32">
    <path
      d="M23.3077 6.5C22.0969 6.5 21.1154 7.40642 21.1154 8.52455V24.0352C21.1154 25.2421 19.7364 25.9293 18.7734 25.2023L14.6881 22.1178C14.167 21.7244 13.4483 21.7244 12.9273 22.1178L8.84196 25.2023C7.87902 25.9293 6.5 25.2421 6.5 24.0352V8.69327C6.5 7.48196 7.42876 6.5 8.57444 6.5H23.3077ZM23.3077 6.5C24.5185 6.5 25.5 7.40642 25.5 8.52455V11.6176C25.5 12.4252 24.8456 13.0798 24.0385 13.0798H21.1154"
      stroke="currentColor"
      stroke-linecap="round"
    />
  </SvgIcon>
);
