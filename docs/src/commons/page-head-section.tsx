type Breadcrumb = { label: string; url: string };
type PageHeadSectionProps = {
  title: string;
  breadcrumbs: Breadcrumb[];
};

export const PageHeadSection = (props: PageHeadSectionProps) => (
  <main>
    <div class="pb-12 hidden lg:block">
      <nav aria-label="Breadcrumb">
        <ol class="flex flex-wrap items-center">
          <li class="flex text-trunks items-center text-onwo-14 last:text-bulma">
            <span class="transition-colors duration-200">
              <a href="/">Home</a>
            </span>
          </li>

          {props.breadcrumbs.map(({ url, label }, idx) => (
            <li key={idx} class="flex text-trunks items-center text-onwo-14 last:text-bulma">
              <svg
                class="mx-2 text-trunks text-onwo-16 rtl:rotate-180 fill-none onwo-icon"
                data-onwo-id="icon"
              >
                <use href="/onwo_icons/svgs/icons_new/arrows-right.svg#item"></use>
              </svg>

              <span class="transition-colors duration-200">
                <a href={url}>{label}</a>
              </span>
            </li>
          ))}
        </ol>
      </nav>
    </div>

    <div class="flex flex-col gap-12 flex-1 relative focus:outline-none mb-8">
      <h1 class="text-onwo-48 font-semibold">{props.title}</h1>
    </div>
  </main>
);
