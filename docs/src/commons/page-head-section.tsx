import { Icons } from '@onwo/icons';

type Breadcrumb = { label: string; url: string };
type PageHeadSectionProps = {
  title: string;
  description?: string;
  breadcrumbs: Breadcrumb[];
};

type BreadcrumbLinkProps = {
  to: string;
  label: string;
};

const BreadcrumbLink = (props: BreadcrumbLinkProps) => (
  <li class="text-onwo-14 last:text-bulma">
    <span class="transition-colors duration-200">
      <a href={props.to}>{props.label}</a>
    </span>
  </li>
);

export const PageHeadSection = (props: PageHeadSectionProps) => (
  <main class="onwo-no-format">
    <div class="pb-8 hidden lg:block">
      <nav aria-label="Breadcrumb">
        <ol class="text-trunks flex gap-2 flex-wrap items-center">
          <BreadcrumbLink to="/" label="Home" />

          {props.breadcrumbs.map(({ url, label }, idx) => (
            <div key={idx} class="contents">
              <Icons.ArrowsRight size="xs" />
              <BreadcrumbLink to={url} label={label} />
            </div>
          ))}
        </ol>
      </nav>
    </div>

    <div class="flex flex-col gap-2 flex-1 relative focus:outline-none mb-8">
      <h1 class="text-onwo-32 font-bold">{props.title}</h1>
      <p class="text-base text-trunks max-w-screen-sm">{props.description ?? 'Lorem ipsum'}</p>
    </div>
  </main>
);
