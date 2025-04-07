import { Icons } from '@onwo/icons';
import { Breadcrumb } from '@onwo/ui';

type PageHeadSectionProps = {
  title: string;
  description?: string;
  breadcrumbs: { to: string; label: string }[];
};

export const PageHeadSection = (props: PageHeadSectionProps) => (
  <main class="onwo-no-format">
    <div class="pb-8 hidden lg:block">
      <Breadcrumb separator={Icons.ArrowsRight}>
        {Breadcrumb.Link.fromList([{ to: '/', label: 'Home' }, ...props.breadcrumbs])}
      </Breadcrumb>
    </div>

    <div class="flex flex-col gap-2 flex-1 relative focus:outline-none mb-8">
      <h1 class="text-onwo-32 font-bold">{props.title}</h1>
      <p class="text-base text-trunks max-w-screen-sm">{props.description ?? 'Lorem ipsum'}</p>
    </div>
  </main>
);
