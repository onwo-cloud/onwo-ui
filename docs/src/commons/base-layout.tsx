import type { JSXChildren } from '@builder.io/qwik';
import { PageNavigation } from '@onwo/ui';

type BaseLayoutProps = { children: JSXChildren };

export const BaseLayout = (props: BaseLayoutProps) => (
  <PageNavigation.Provider class="flex gap-24">
    <div class="w-full min-w-0">{props.children}</div>
    <p id="here" />
    <PageNavigation.Appendix sticky class="shrink-0 pt-14 px-3 bg-goku w-96 hidden xl:block" />
  </PageNavigation.Provider>
);
