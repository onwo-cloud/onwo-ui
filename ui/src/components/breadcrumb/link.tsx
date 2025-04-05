type LinkProps = {
  to: string;
  label: string;
};

export const Link = (props: LinkProps) => (
  <li class="text-onwo-14 last:text-bulma">
    <span class="transition-colors duration-200">
      <a href={props.to}>{props.label}</a>
    </span>
  </li>
);
