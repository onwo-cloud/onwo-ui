import {
  component$,
} from '@qwik.dev/core';
import { MenuItem, MenuTrigger } from '~ui/@kit/menu';

import {
  ChevronDown12,
  ComponentIcon13,
  GithubIcon14,
  LightIcon16,
  SearchIcon14,
  TemplateIcon13,
} from './icons';
import { MobileMenu } from './mobile-menu';
import { Logo } from './logo';
import { TopbarMoreLinkMenu } from './menus/topbar-more-link-menu';
import { VersionMenu } from './menus/version-menu';
import { TabsRoot, TabItem } from './tabs';
import { SubTopBar, TopBar } from './topbar';

// --- Extracted Reusable Sections ---

const NavigationTabs = component$(() => (
  <TabsRoot>
    <TabItem value="get-started" text="Get started" active />
    <TabItem value="components" text="Components" start={ComponentIcon13} />
    <TabItem value="templates" text="Templates" start={TemplateIcon13} />
    <TabItem value="primitives" text="Primitives" />
    <TabItem value="theming" text="Theming" />

    <TopbarMoreLinkMenu>
      <MenuTrigger
        q:slot="trigger"
        class="flex items-center h-full min-w-0 px-3 relative cursor-pointer group gap-1"
      >
        <div class="text-[14px] leading-[100%] font-['Geist',system-ui,sans-serif] text-[#5D5D5DFC] group-hover:text-[#404040] transition-colors line-clamp-1">
          More
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 19.5 19.5"
          font-size="14px"
          style={{ overflow: 'clip', flexShrink: '0' }}
        >
          <path
            d="M4.875 7.312l4.875 4.875 4.875-4.875"
            font-size="9.242px"
            fill="none"
            stroke="#5D5D5DFC"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            style={{ boxSizing: 'border-box' }}
          />
        </svg>
        {/* Invisible underline for hover consistency with Tabs */}
        <div class="absolute bottom-0 inset-x-3 h-[2px] bg-[#404040] opacity-0 transition-opacity group-hover:opacity-100" />
      </MenuTrigger>

      {/* Primary links tucked away inside More for cleaner Topbar */}
      <div q:slot="links" class="text-sm text-[#0A0A0A] font-['Geist',system-ui,sans-serif]">
        <MenuItem class="group cursor-pointer hover:bg-black/5 px-3 py-2 rounded">Home</MenuItem>
        <MenuItem class="group cursor-pointer hover:bg-black/5 px-3 py-2 rounded">Blog</MenuItem>
        <MenuItem class="group cursor-pointer hover:bg-black/5 px-3 py-2 rounded">
          Changelog
        </MenuItem>
      </div>
    </TopbarMoreLinkMenu>
  </TabsRoot>
));

// --- Mobile Navigation Components ---

export const DemoPage = component$(() => {
  return (
    <div class="min-h-screen [font-synthesis:none] relative [backdrop-filter:blur(16px)] bg-white antialiased text-xs/4 z-50">
      <TopBar class="hidden min-[640px]:block px-4 min-[1100px]:px-8 min-[1600px]:border-b border-b-solid border-[#0000000F]">
        {/* LEFT Section:
            Mobile (<640px): Hide
            Tablet (640px - 1100px): Takes flex-1 so search shifts to the right edge.
            Desktop (>=1100px): basis-[0%] shares space equally with right side to center the search.
            Max (>=1600px): flex-none as navigation tabs fit naturally. */}
        <div
          q:slot="left"
          class="flex flex-1 min-[1100px]:basis-[0%] min-w-0 min-[640px]:gap-6 items-center h-full"
        >
          <div class="items-center flex gap-2.5 h-full shrink-0">
            <Logo />

            {/* Version Menu hidden on mobile view */}
            <div class="hidden min-[640px]:block">
              <VersionMenu>
                <MenuTrigger class="items-center flex gap-1 rounded-full px-2 py-0.75 bg-[#F1F1F1] cursor-pointer hover:bg-gray-200 transition-colors">
                  <div class="items-center flex rounded-md gap-1 text-[12px] leading-[100%] text-center font-['Geist',system-ui,sans-serif] py-1 font-medium text-[#545454]">
                      Beta
                      <ChevronDown12 />
                  </div>
                </MenuTrigger>
              </VersionMenu>
            </div>
          </div>

          {/* Desktop tabs container (Folds to SubTopBar exactly at 1600px width) */}
          <div class="hidden min-[1600px]:block h-full">
            <NavigationTabs />
          </div>
        </div>

        {/* MIDDLE Section: Search
            Mobile (<640px): Hide
            Tablet (<1100px): Right aligned, max-w-70.
            Desktop (>=1100px): Centered, max-w-160. */}
        <div
          q:slot="middle"
          class="flex items-center shrink-0 h-full w-full justify-end max-w-48 min-[900px]:max-w-70 min-[1100px]:w-102 min-[1100px]:max-w-160 min-[1100px]:justify-center"
        >
          <div class="items-center inline-flex w-full py-2 px-2.5 rounded-full min-[900px]:gap-3 gap-1.5 h-8.5 shrink-0 bg-[#F6F6F6] cursor-text">
            <SearchIcon14 />
            <div class="w-full tracking-[0.16px] text-pretty font-['Geist',system-ui,sans-serif] text-[#7A7A7A] text-sm/4">
              <span class="hidden min-[900px]:inline">Search documentation</span>
              <span class="inline min-[900px]:hidden">Search</span>
            </div>
            {/* The shortcut command block hidden on mobile */}
            <div class="flex ml-auto">
              <div class="py-0.5 px-1.5 rounded-md bg-[#FFFFFFCC] border border-solid border-[#00000026]">
                <div class="text-[11px] leading-[133.333%] text-center w-max font-['Geist_Mono',system-ui,sans-serif] font-bold flex justify-center flex-wrap text-[#000000DF]">
                  /
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT Section: Actions
            Mobile (<640px): Hide
            Tablet (<1100px): flex-none (stays bound to the right aligned searchbar).
            Desktop (>=1100px): flex-1 basis-[0%] (matches left side, centering the searchbar).
            Max (>=1600px): flex-none fixed width (balances tabs width layout). */}
        <div
          q:slot="right"
          class="items-center flex justify-end gap-2 flex-none min-[1100px]:flex-1 min-[1100px]:basis-[0%] min-[1600px]:flex-none min-[1600px]:w-49.5 min-w-0 shrink-0 h-full"
        >
          <div class="flex items-center gap-2">
            <div class="flex items-center rounded-full py-2 px-3 gap-1.25 h-fit border border-solid border-[#E7E7E7] cursor-pointer hover:bg-[#fafafa]">
              <div class="flex items-center">
                <div class="w-3.25 h-3.25 rounded-full shrink-0 bg-[#151515] [outline:1px_solid_#7D7D7D1A] -outline-offset-1" />
                <div class="w-3.25 h-3.25 rounded-full shrink-0 -ml-1.5 bg-[#5F5F5F] [outline:1px_solid_#0000001A] -outline-offset-1" />
                <div class="w-3.25 h-3.25 rounded-full shrink-0 -ml-1.5 bg-[#E7E7E7] [outline:1px_solid_#0000001A] -outline-offset-1" />
                <div class="w-3.25 h-3.25 rounded-full shrink-0 -ml-1.5 bg-[#F7F7F7] [outline:1px_solid_#0000001A] -outline-offset-1" />
              </div>
              <div class="text-center text-pretty font-['Geist',system-ui,sans-serif] font-medium flex justify-center flex-wrap text-[#090900] text-sm/3.5">
                Light
              </div>
              <LightIcon16 />
            </div>
            <div class="items-center flex rounded-full gap-1 px-3 py-2 h-fit bg-[#414141] cursor-pointer hover:bg-[#555]">
              <GithubIcon14 />
              <div class="text-center text-pretty font-['Geist_Mono',system-ui,sans-serif] flex justify-center flex-wrap text-white text-sm/4">
                489
              </div>
            </div>
          </div>
        </div>
      </TopBar>

      {/* Responsive SubTopBar: Hidden >= 1600px, flows completely inline seamlessly below without divider */}
      <SubTopBar class="hidden min-[640px]:block px-4 min-[1100px]:px-8 min-[1600px]:hidden border-b border-b-solid border-[#0000000F]">
        <NavigationTabs />
      </SubTopBar>

      {/* Mobile Nav Menu integration */}
      <MobileMenu class="mx-auto max-w-[480px] min-[640px]:hidden z-50" />
    </div>
  );
});
