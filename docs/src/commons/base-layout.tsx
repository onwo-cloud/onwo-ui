import type { JSXChildren } from '@builder.io/qwik';
import { PageNavigationAppendix, PageNavigationProvider } from '@onwo/ui';
import { Sidebar } from './sidebar';
import { TopBar } from './top-bar';

type BaseLayoutProps = { children: JSXChildren };

export const BaseLayout = (props: BaseLayoutProps) => (
  <PageNavigationProvider class="h-screen flex flex-col">
    <TopBar borderVisible />
    <div class="flex-1 min-h-0 flex gap-12 2xl:gap-20">
      <Sidebar class="h-full overflow-y-auto" />
      <div class="flex-1 overflow-y-auto">
        <div class="flex gap-20 min-h-full">
          <div class="w-full min-w-0 max-w-screen-xl ml-12 mt-12 mb-24">{props.children}</div>
          <div class="shrink-0 w-64 2xl:w-92 hidden xl:block">
            <PageNavigationAppendix
              sticky
              class="sticky top-20 px-3 bg-paper"
              contentClass="pt-14"
            />
          </div>
        </div>
      </div>
    </div>
  </PageNavigationProvider>
);
