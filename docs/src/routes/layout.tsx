import type { JSXChildren } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { Icons } from '@onwo/icons';
import { cn } from '@onwo/ui';

import LogoImg from '~/assets/onwo-3.svg?jsx';

type SidebarButtonSmallProps = {
  href: string;
  children: JSXChildren;
  disabled?: boolean;
};

export const SidebarButtonSmall = (props: SidebarButtonSmallProps) => (
  <a
    class={cn(
      'flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-onwo-i-sm gap-2 text-onwo-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles',
      props.disabled && 'text-trunks cursor-not-allowed',
    )}
    href={props.href}
  >
    {props.children}
  </a>
);

export default component$(() => {
  const location = useLocation();

  return (
    <div>
      <div role="main" class="pt-16 lg:pt-0 bg-gohan text-bulma flex theme-onwo-light" dir="ltr">
        <div
          id="left-menu"
          data-is_closing="true"
          data-lg_persists=""
          aria-expanded="false"
          class="fixed hidden z-[99999] inset-auto lg:flex lg:z-50 lg:inset-y-0 lg:w-80 lg:start-0"
        >
          <div class="fixed bg-zeno inset-0 lg:hidden onwo-backdrop"></div>

          <div class="fixed bg-gohan text-bulma shadow-onwo-none inset-y-0 w-80 max-w-md left-0 onwo-panel">
            <nav
              aria-label="Sidebar"
              class="z-10 fixed top-0 h-screen w-80 flex flex-col flex-grow gap-4 pt-8 pb-10 px-5 lg:px-8 overflow-y-scroll"
            >
              <div class="flex items-center flex-shrink-0 px-3 text-bulma">
                <a href="/" class="flex gap-2 items-center" aria-label="ui.onwo.cloud main page">
                  <LogoImg height={20} class="h-[20px] w-fit" />
                  <h4 class="text-onwo-20 font-semibold">onwo/ui</h4>
                </a>
              </div>
              <div class="flex flex-col gap-1">
                <a
                  class="flex p-2 bg-transparent cursor-pointer transition items-center justify-start rounded-onwo-i-sm gap-2 text-onwo-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles"
                  href="/roadmap"
                >
                  <Icons.GenericTrophy />
                  Roadmap
                </a>

                <a
                  class="flex p-2 bg-transparent cursor-pointer transition items-center justify-start rounded-onwo-i-sm gap-2 text-onwo-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles"
                  href="/getting-started"
                >
                  <Icons.OtherRocket />
                  Getting Started
                </a>

                <a
                  class="flex p-2 bg-transparent cursor-pointer transition items-center justify-start rounded-onwo-i-sm gap-2 text-onwo-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles"
                  href="/core-concepts"
                >
                  <Icons.SoftwarePlate />
                  Core concepts
                </a>

                <a
                  class="flex p-2 bg-transparent cursor-pointer transition items-center justify-start rounded-onwo-i-sm gap-2 text-onwo-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles"
                  href="/colours"
                >
                  <Icons.SoftwareSettings />
                  Colours
                </a>

                <a
                  class="flex p-2 bg-transparent cursor-pointer transition items-center justify-start rounded-onwo-i-sm gap-2 text-onwo-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles"
                  href="/typography"
                >
                  <Icons.TextSize />
                  Typography
                </a>
                <a
                  class="flex p-2 bg-transparent cursor-pointer transition items-center justify-start rounded-onwo-i-sm gap-2 text-onwo-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles"
                  href="/icons"
                >
                  <Icons.SoftwarePuzzle />
                  Icons
                </a>
              </div>
              <div class="flex flex-col gap-2">
                <div class="ps-2 text-onwo-10-caption flex gap-2 font-medium">
                  <p class="text-trunks uppercase">Components</p>
                  <div>
                    <div class="uppercase flex px-1 py-0.5 bg-krillin text-popo select-none tracking-[1px] items-center font-semibold rounded-onwo-i-xs gap-1 text-onwo-9 h-4">
                      WIP
                    </div>
                  </div>
                </div>
                <div class="flex flex-col gap-1">
                  <SidebarButtonSmall href="/components/accordion">Accordion</SidebarButtonSmall>
                  <SidebarButtonSmall href="/components/alert">Alert</SidebarButtonSmall>
                  <SidebarButtonSmall href="/components/avatar">Avatar</SidebarButtonSmall>
                  <SidebarButtonSmall disabled href="/components/bottom-sheet">
                    Bottom Sheet
                  </SidebarButtonSmall>
                  <SidebarButtonSmall href="/components/breadcrumb">Breadcrumb</SidebarButtonSmall>
                  <SidebarButtonSmall href="/components/button">Button</SidebarButtonSmall>
                  <SidebarButtonSmall href="/components/carousel">Carousel</SidebarButtonSmall>
                  <SidebarButtonSmall href="/components/calendar">Calendar</SidebarButtonSmall>
                  <SidebarButtonSmall href="/components/chip">Chip</SidebarButtonSmall>
                  <SidebarButtonSmall disabled href="/components/drawer">
                    Drawer
                  </SidebarButtonSmall>
                  <SidebarButtonSmall href="/components/dropdown">Dropdown</SidebarButtonSmall>
                  <SidebarButtonSmall disabled href="/components/form">
                    Form
                  </SidebarButtonSmall>
                  <SidebarButtonSmall href="/components/spinner">Spinner</SidebarButtonSmall>
                  <SidebarButtonSmall href="/components/masonry">Masonry</SidebarButtonSmall>
                  <SidebarButtonSmall disabled href="/components/menu-item">
                    Menu Item
                  </SidebarButtonSmall>
                  <SidebarButtonSmall href="/components/modal">Modal</SidebarButtonSmall>
                  <SidebarButtonSmall href="/components/pagination">Pagination</SidebarButtonSmall>
                  <SidebarButtonSmall href="/components/popover">Popover</SidebarButtonSmall>
                  <SidebarButtonSmall disabled href="/components/progress">
                    Progress
                  </SidebarButtonSmall>
                  <SidebarButtonSmall disabled href="/components/search">
                    Search
                  </SidebarButtonSmall>
                  <SidebarButtonSmall href="/components/select">Select</SidebarButtonSmall>
                  <SidebarButtonSmall disabled href="/components/snackbar">
                    Snackbar
                  </SidebarButtonSmall>
                  <SidebarButtonSmall disabled href="/components/switch">
                    Switch
                  </SidebarButtonSmall>
                  <SidebarButtonSmall disabled href="/components/table">
                    Table
                  </SidebarButtonSmall>
                  <SidebarButtonSmall href="/components/tabs">Tabs</SidebarButtonSmall>
                  <SidebarButtonSmall disabled href="/components/tag">
                    Tag
                  </SidebarButtonSmall>
                  <SidebarButtonSmall disabled href="/components/tooltip">
                    Tooltip
                  </SidebarButtonSmall>
                </div>
              </div>

              <div class="ps-2 text-onwo-10-caption flex gap-2 font-medium">
                <p class="text-trunks uppercase">Composites</p>
                <div>
                  <div class="uppercase flex px-1 py-0.5 bg-krillin text-popo select-none tracking-[1px] items-center font-semibold rounded-onwo-i-xs gap-1 text-onwo-9 h-4">
                    WIP
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-1">
                <SidebarButtonSmall href="/components/page-navigation">
                  Page navigation
                </SidebarButtonSmall>
              </div>
            </nav>
          </div>
        </div>

        <header class="fixed top-0 bg-goku z-50 px-5 w-full">
          <div class="relative z-10 py-4 lg:hidden flex flex-row gap-2 items-center justify-between">
            <button type="button">
              <span class="sr-only">Open sidebar</span>
              <Icons.GenericMenu size="lg" />
            </button>
          </div>
        </header>

        <div
          class={cn(
            'relative main-content overflow-x-hidden h-screen bg-goku flex-1 flex flex-col lg:ml-80',
            location.url.pathname !== '/' &&
              'overflow-y-auto px-5 lg:pl-20 2xl:pl-32 lg:pt-12 lg:pb-52',
          )}
        >
          <Slot />
        </div>
      </div>
    </div>
  );
});
