export type BreadcrumbLinkProps = {
  to: string;
  label: string;
};

const BreadcrumbLink = (props: BreadcrumbLinkProps) => (
  <li class="text-onwo-14 last:text-ink">
    <span class="transition-colors duration-200">
      <a class="outline-none focus:underline" href={props.to}>
        {props.label}
      </a>
    </span>
  </li>
);

const fromList = <L extends BreadcrumbLinkProps>(arr: readonly L[]) =>
  arr.map((props, idx) => <BreadcrumbLink key={idx} {...props} />);

const BreadcrumbLinkAssigned = Object.assign(BreadcrumbLink, {
  fromList,
});

export { BreadcrumbLinkAssigned as BreadcrumbLink };
