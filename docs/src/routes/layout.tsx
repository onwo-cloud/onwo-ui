import { Slot, component$ } from '@builder.io/qwik';

export default component$(() => (
  <div class="phx-connected">
    <div role="main" class="pt-16 lg:pt-0 bg-gohan text-bulma flex theme-moon-light" dir="ltr">
      <div
        id="left-menu"
        data-is_closing="true"
        data-lg_persists=""
        aria-expanded="false"
        class="fixed hidden z-[99999] inset-auto lg:flex lg:z-50 lg:inset-y-0 lg:w-80 lg:start-0"
      >
        <div class="fixed bg-zeno inset-0 lg:hidden moon-backdrop"></div>

        <div
          data-animate_enter_class="ltr:animate-drawer_enter_left rtl:animate-drawer_enter_right"
          data-animate_leave_class="ltr:animate-drawer_leave_left rtl:animate-drawer_leave_right"
          class="fixed bg-gohan text-bulma shadow-moon-none inset-y-0 w-80 max-w-md rtl:right-0 ltr:left-0 moon-panel"
        >
          <nav
            aria-label="Sidebar"
            class="z-10 fixed top-0 h-screen w-80 flex flex-col flex-grow gap-6 pt-12 pb-20 px-5 lg:px-8 overflow-y-scroll"
          >
            <div class="flex items-center flex-shrink-0 ps-3 text-bulma">
              <a href="/" aria-label="Surface.moon.io main page">
                <img src="/onwo.svg" class="w-auto" />
              </a>
            </div>
            <div class="flex flex-col gap-1">
              <a
                class="flex p-2 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles"
                href="/roadmap"
              >
                <svg class="w-6 h-6 fill-none moon-icon" data-moon-id="icon">
                  <use href="/moon_icons/svgs/icons_new/other-rocket.svg#item"></use>
                </svg>
                Roadmap
              </a>

              <a
                class="flex p-2 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles"
                href="/getting-started"
              >
                <svg class="w-6 h-6 fill-none moon-icon" data-moon-id="icon">
                  <use href="/moon_icons/svgs/icons_new/other-rocket.svg#item"></use>
                </svg>
                Getting Started
              </a>

              <a
                class="flex p-2 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles"
                href="/colours"
              >
                <svg class="w-6 h-6 fill-none moon-icon" data-moon-id="icon">
                  <use href="/moon_icons/svgs/icons_new/software-settings.svg#item"></use>
                </svg>
                Colours
              </a>

              <a
                class="flex p-2 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles"
                href="/typography"
              >
                <svg class="w-6 h-6 fill-none moon-icon" data-moon-id="icon">
                  <use href="/moon_icons/svgs/icons_new/text-size.svg#item"></use>
                </svg>
                Typography
              </a>
            </div>
            <div class="flex flex-col gap-2">
              <div class="ps-2 text-moon-10-caption flex gap-2 font-medium">
                <p class="text-trunks uppercase">Components</p>
                <div>
                  <div
                    data-phx-id="m14-phx-GCuiyuFRmjSIjCiB"
                    class="uppercase flex px-1 py-0.5 bg-krillin text-popo select-none tracking-[1px] items-center font-semibold rounded-moon-i-xs gap-1 text-moon-9 h-4"
                  >
                    WIP
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-1">
                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/accordion"
                >
                  Accordion
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/alert"
                >
                  Alert
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/avatar"
                >
                  Avatar
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/bottomsheet"
                >
                  Bottom Sheet
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/breadcrumb"
                >
                  Breadcrumb
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/button"
                >
                  Button
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/carousel"
                >
                  Carousel
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/chip"
                >
                  Chip
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/drawer"
                >
                  Drawer
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/dropdown"
                >
                  Dropdown
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/form"
                >
                  Form
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/icons"
                >
                  Icons
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/loader"
                >
                  Loader
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/menu_item"
                >
                  Menu Item
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/modal"
                >
                  Modal
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/pagination"
                >
                  Pagination
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/popover"
                >
                  Popover
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/progress"
                >
                  Progress
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/search"
                >
                  Search
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/snackbar"
                >
                  Snackbar
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/switch"
                >
                  Switch
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/table"
                >
                  Table
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/tabs"
                >
                  Tabs
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/tag"
                >
                  Tag
                </a>

                <a
                  class="flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-moon-i-sm gap-2 text-moon-14 w-full focus:outline-none focus:shadow-focus hover:bg-heles text-trunks pointer-events-none"
                  href="/components/v2/tooltip"
                >
                  Tooltip
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <header class="fixed top-0 bg-goku z-50 px-5 w-full">
        <div class="relative z-10 py-4 lg:hidden flex flex-row gap-2 items-center justify-between text-bulma">
          <button type="button" class="focus:outline-none">
            <span class="sr-only">Open sidebar</span>
            <svg class="moon-icon fill-none text-moon-32">
              <use href="/moon_icons/svgs/icons_new/generic-menu.svg#item"></use>
            </svg>
          </button>
          <a href="/" aria-label="surface.moon.io main page">
            <svg class="moon-logo" style="height: 2em; width: 2em">
              <use href="/moon_icons/svgs/logos/logo-moon-design-short.svg#item"></use>
            </svg>
          </a>
        </div>
      </header>

      <div class="min-h-screen lg:ms-80 bg-goku flex-1 w-0 flex flex-col ltr:lg:rounded-tl-3xl rtl:lg:rounded-tr-3xl px-5 xl:px-20 2xl:px-32 lg:pt-12 lg:pb-52">
        <Slot />
      </div>
    </div>
  </div>
));
