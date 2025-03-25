import type { JSXChildren } from '@builder.io/qwik';
import { Slot, component$ } from '@builder.io/qwik';
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

export default component$(() => (
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
            <div>
              <div>
                <div id="onwo-search" class="w-full focus:bg-heles" aria-label="Search">
                  <div class="relative" id="onwo-search-dropdown">
                    <div class="relative w-full">
                      <input
                        placeholder="Search..."
                        autocomplete="off"
                        class="onwo-comboinput ps-[2.5rem] bg-goku hover:border-trunks h-10 w-full rounded-onwo-s-sm border border-beerus py-2 px-3 focus:outline-none focus:ring-0 placeholder:text-trunks placeholder:opacity-100 placeholder:transition-opacity placeholder:delay-75"
                      />

                      <Icons.GenericSearch class="absolute text-trunks cursor-pointer transition-transform z-[3] top-1/2 text-onwo-24 w-6 h-6 -translate-y-1/2 fill-none onwo-icon start-3 start-[9px] transition-200" />

                      <button class="absolute text-trunks cursor-pointer transition z-[3] top-1/2 text-onwo-14 -translate-y-1/2 end-4 transform">
                        Clear
                      </button>
                    </div>

                    <div
                      class="ease-in-out absolute flex p-2 mt-0 my-2 bg-goku transition-all flex-col overflow-auto box-border scale-95 duration-300 shadow-onwo-lg rounded-tl-none rounded-tr-none rounded-onwo-s-md z-[99] top-full w-full max-h-0 focus:outline-none opacity-0 transform"
                      role="listbox"
                    >
                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/vision"
                      >
                        Vision
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/getting-started"
                      >
                        Getting Started
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/contribute"
                      >
                        How To Contribute
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/colours"
                      >
                        Colours
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/tokens"
                      >
                        Tokens
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/typography"
                      >
                        Typography
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components"
                      >
                        Components
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/manifest"
                      >
                        Manifest
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/accordion"
                      >
                        Accordion
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/alert"
                      >
                        Alert
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/avatar"
                      >
                        Avatar
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/bottomsheet"
                      >
                        Bottom Sheet
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/breadcrumb"
                      >
                        Breadcrumb
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/button"
                      >
                        Button
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/icon_button"
                      >
                        Icon Button
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/carousel"
                      >
                        Carousel
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/chip"
                      >
                        Chip
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/drawer"
                      >
                        Drawer
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/dropdown"
                      >
                        Dropdown
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/icons"
                      >
                        Icons
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/loader"
                      >
                        Loader
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/menu_item"
                      >
                        Menu Item
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/modal"
                      >
                        Modal
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/page-navigation"
                      >
                        Page navigation
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/pagination"
                      >
                        Pagination
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/popover"
                      >
                        Popover
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/progress"
                      >
                        Linear Progress
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/circularprogress"
                      >
                        Circular Progress
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/search"
                      >
                        Search
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/snackbar"
                      >
                        Snackbar
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/switch"
                      >
                        Switch
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/table"
                      >
                        Table
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/tabs"
                      >
                        Tabs
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/tag"
                      >
                        Tag
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/tooltip"
                      >
                        Tooltip
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/form/auth_code"
                      >
                        Auth Code
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/form/checkbox"
                      >
                        Checkbox
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/form/combobox"
                      >
                        Combobox
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/form/group"
                      >
                        Group
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/form/input"
                      >
                        Input
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/form/inset_input"
                      >
                        Inset Input
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/form/radio"
                      >
                        Radio
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/form/select"
                      >
                        Select
                      </a>

                      <a
                        role="option"
                        class="flex px-3 py-2 bg-transparent text-bulma cursor-pointer transition whitespace-nowrap rounded-onwo-i-sm text-onwo-14 w-full h-10 hover:bg-heles focus:bg-heles focus:outline-none"
                        href="/components/v2/form/textarea"
                      >
                        Text Area
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
                <SidebarButtonSmall disabled href="/components/accordion">
                  Accordion
                </SidebarButtonSmall>
                <SidebarButtonSmall disabled href="/components/alert">
                  Alert
                </SidebarButtonSmall>
                <SidebarButtonSmall disabled href="/components/avatar">
                  Avatar
                </SidebarButtonSmall>
                <SidebarButtonSmall disabled href="/components/bottom-sheet">
                  {' '}
                  Bottom Sheet{' '}
                </SidebarButtonSmall>
                <SidebarButtonSmall disabled href="/components/breadcrumb">
                  Breadcrumb
                </SidebarButtonSmall>
                <SidebarButtonSmall href="/components/button">Button</SidebarButtonSmall>
                <SidebarButtonSmall disabled href="/components/carousel">
                  Carousel
                </SidebarButtonSmall>
                <SidebarButtonSmall disabled href="/components/chip">
                  Chip
                </SidebarButtonSmall>
                <SidebarButtonSmall disabled href="/components/drawer">
                  Drawer
                </SidebarButtonSmall>
                <SidebarButtonSmall disabled href="/components/dropdown">
                  Dropdown
                </SidebarButtonSmall>
                <SidebarButtonSmall disabled href="/components/form">
                  Form
                </SidebarButtonSmall>
                <SidebarButtonSmall disabled href="/components/icons">
                  Icons
                </SidebarButtonSmall>
                <SidebarButtonSmall disabled href="/components/loader">
                  Loader
                </SidebarButtonSmall>
                <SidebarButtonSmall disabled href="/components/menu-item">
                  Menu Item
                </SidebarButtonSmall>
                <SidebarButtonSmall disabled href="/components/modal">
                  Modal
                </SidebarButtonSmall>
                <SidebarButtonSmall disabled href="/components/pagination">
                  Pagination
                </SidebarButtonSmall>
                <SidebarButtonSmall disabled href="/components/popover">
                  Popover
                </SidebarButtonSmall>
                <SidebarButtonSmall disabled href="/components/progress">
                  Progress
                </SidebarButtonSmall>
                <SidebarButtonSmall disabled href="/components/search">
                  Search
                </SidebarButtonSmall>
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

      <div class="relative main-content overflow-hidden min-h-screen bg-goku flex-1 flex flex-col lg:ms-80 px-5 xl:px-20 2xl:px-32 lg:pt-12 lg:pb-52">
        <Slot />
      </div>
    </div>
  </div>
));
