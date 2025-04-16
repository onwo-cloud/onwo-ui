type LinkProps = {
  to: string;
  label: string;
};

const Link = (props: LinkProps) => (
  <li class="text-onwo-14 last:text-ink">
    <span class="transition-colors duration-200">
      <a href={props.to}>{props.label}</a>
    </span>
  </li>
);

const fromList = <L extends LinkProps>(arr: readonly L[]) =>
  arr.map((props, idx) => <Link key={idx} {...props} />);

const LinkAssigned = Object.assign(Link, {
  fromList,
});

export { LinkAssigned as Link };
