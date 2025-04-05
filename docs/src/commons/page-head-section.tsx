import { Breadcrumb } from "@onwo/ui";
import { Icons } from '@onwo/icons';

type PageHeadSectionProps = {
  title: string;
  description?: string;
  breadcrumbs: { url: string; label: string }[];
};

export const PageHeadSection = (props: PageHeadSectionProps) => (
  <main class="onwo-no-format">
    <div class="pb-8 hidden lg:block">
      <Breadcrumb separator={Icons.ArrowsRight}>
        {[{ url: '/', label: 'Home' }, ...props.breadcrumbs].map(({ url, label }, idx) => (
          <Breadcrumb.Link key={idx} to={url} label={label} />
        ))}
      </Breadcrumb>
    </div>

    <div class="flex flex-col gap-2 flex-1 relative focus:outline-none mb-8">
      <h1 class="text-onwo-32 font-bold">{props.title}</h1>
      <p class="text-base text-trunks max-w-screen-sm">{props.description ?? 'Lorem ipsum'}</p>
    </div>
  </main >
);
