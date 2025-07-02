import type { QRL } from '@builder.io/qwik';
import { ChevronRightIcon } from '@onwo/icons';
import { Breadcrumb } from '@onwo/ui';

type PageHeadSectionProps = {
  title: string;
  description: string | QRL<() => string>;
  breadcrumbs: { to: string; label: string }[];
};

export const PageHeadSection = (props: PageHeadSectionProps) => (
  <main class="onwo-no-format">
    <div class="pb-8 hidden lg:block">
      <Breadcrumb.Root separator={ChevronRightIcon}>
        {Breadcrumb.Link.fromList([{ to: '/', label: 'Home' }, ...props.breadcrumbs])}
      </Breadcrumb.Root>
    </div>

    <div class="flex flex-col gap-2 flex-1 relative outline-none mb-8">
      <h1 class="text-onwo-32 font-bold">{props.title}</h1>
      <p class="text-base text-lead max-w-screen-sm">
        {typeof props.description === 'string' ? props.description : props.description?.()}
      </p>
    </div>
  </main>
);
