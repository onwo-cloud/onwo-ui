import type { JSXChildren } from '@builder.io/qwik';
import { PageNavigation } from '@onwo/ui';

type BaseLayoutProps = { children: JSXChildren };

export const BaseLayout = (props: BaseLayoutProps) => (
  <PageNavigation.Provider class="flex gap-12 2xl:gap-20">
    <div class="w-full min-w-0 max-w-screen-xl">{props.children}</div>
    <p id="here" />
    <PageNavigation.Appendix
      sticky
      class="shrink-0 pt-14 px-3 bg-paper w-64 2xl:w-92 hidden xl:block"
    />
  </PageNavigation.Provider>
);
