import { primitives as P } from '@onwo/ui';

export default (props: P.IconProps) => (
  <P.SvgIcon data--icon-name="files-copy" {...props} viewBox="0 0 32 32">
    <path
      d="M20.1923 10.1538H21.8462C22.9507 10.1538 23.8462 11.0492 23.8462 12.1538L23.8462 23.5C23.8462 24.6045 22.9507 25.5 21.8462 25.5H14.1539C13.0493 25.5 12.1539 24.6045 12.1539 23.5V21.8461M13.6154 7.23071V11.6153H9.23077M8.5 10.6853L12.6267 6.5H18.1923C19.2969 6.5 20.1923 7.39543 20.1923 8.5L20.1923 19.8462C20.1923 20.9507 19.2969 21.8462 18.1923 21.8462H10.5C9.39543 21.8462 8.5 20.9507 8.5 19.8462V10.6853Z"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </P.SvgIcon>
);
