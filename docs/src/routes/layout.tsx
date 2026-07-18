import {
  $,
  component$,
  Slot,
  useComputed$,
  useSignal,
  useVisibleTask$,
} from '@qwik.dev/core';
import { MenuPopup, MenuItem, MenuTrigger } from '~ui/@kit/menu';

import {
  ChevronDown12,
  GithubIcon14,
  LightIcon16,
} from '~/components/demo/icons';
import { MobileMenu } from '~/components/demo/mobile-menu';
import { Logo } from '~/components/demo/logo';
import { VersionMenu } from '~/components/demo/menus/version-menu';
import { SubTopBar, TopBar } from '~/components/demo/topbar';
import { PageNavLink, PageNavRoot, PageNavMenu, PageNavMenuTrigger } from '~ui/@kit/page-nav';
import { SearchBar } from '~/components/demo/searchbar';
import { Link, useLocation, useNavigate } from '@qwik.dev/router';
import { OwPropsOf } from '~primitives/index';
import { Button } from '~primitives/@kit/button';

const PageNavigationBar = component$((props: OwPropsOf<typeof PageNavRoot>) => {
  const location = useLocation();
  const nav = useNavigate();
  const navMemory = useSignal<Record<string, string>>({});

  // 1. Reactive current section computed directly from location URL
  const currentSection = useComputed$(() => {
    const segment = location.url.pathname.split('/').filter(Boolean)[0];
    if (!segment || segment === 'get-started') return 'book';
    return segment;
  });

  useVisibleTask$(({ track }) => {
    // Track pathname changes (navigation, browser back/forward)
    const pathname = track(() => location.url.pathname);

    // Load initial memory from sessionStorage on first load
    if (Object.keys(navMemory.value).length === 0) {
      try {
        const saved = sessionStorage.getItem('qwik_nav_memory');
        if (saved) {
          navMemory.value = JSON.parse(saved) as any;
        }
      } catch (e) {
        console.error('Failed to parse nav memory from sessionStorage', e);
      }
    }

    // Extract top-level section and update section memory
    const segments = pathname.split('/').filter(Boolean);
    const rawSection = segments[0];
    const topLevelSection = !rawSection || rawSection === 'get-started' ? 'book' : rawSection;

    if (topLevelSection) {
      const updatedMemory = {
        ...navMemory.value,
        [topLevelSection]: pathname,
      };

      navMemory.value = updatedMemory;
      sessionStorage.setItem('qwik_nav_memory', JSON.stringify(updatedMemory));
    }
  }, { strategy: 'document-ready' });

  // 2. Smart Navigation Handler
  const handleNavChange$ = $((sectionValue: string) => {
    const targetPath = navMemory.value[sectionValue] || (sectionValue === 'book' ? '/book' : `/${sectionValue}`);
    nav(targetPath);
  });

  return (
    <PageNavRoot
      value={currentSection}
      onSelected$={handleNavChange$}
      {...props}
    >
      <PageNavLink value="book">Get started</PageNavLink>

      <PageNavLink value="components">
        Components
      </PageNavLink>

      <PageNavLink value="templates">
        Templates
      </PageNavLink>

      <PageNavLink value="theming"> Theming </PageNavLink>

      <PageNavMenu>
        <PageNavMenuTrigger> More </PageNavMenuTrigger>

        <MenuPopup side="bottom" sideOffset={8}>
          <MenuItem class="group cursor-pointer hover:bg-shade-1000/5 px-3 py-2 rounded">Home</MenuItem>
          <MenuItem class="group cursor-pointer hover:bg-shade-1000/5 px-3 py-2 rounded">Blog</MenuItem>
          <MenuItem class="group cursor-pointer hover:bg-shade-1000/5 px-3 py-2 rounded">
            Changelog
          </MenuItem>
        </MenuPopup>
      </PageNavMenu>
    </PageNavRoot>
  );
});

/**
 * from Paper
 * https://app.paper.design/file/01KX4NSPSY6TVK9CNCY6CN99YS/1-0/10P5-1
 * on Aug 10, 2026
 */
export const GithubLink = () => {
  return (
    <Button
     class="cursor-pointer hover:bg-canvas-hover items-center flex gap-1.5 rounded-full px-3.5 py-0.5 text-ink border border-separator">
      <GithubIcon14 />
      <span class="text-[14px]">
        GitHub
      </span>
    </Button>
  );
}


export default component$(() => {
  const location = useLocation();

  // If on the homepage, render the page content without layout wrapper
  if (location.url.pathname === '/') {
    return <Slot />;
  }

  return (
    <div class="min-h-screen relative">
      <TopBar class="hidden min-[640px]:block px-6 min-[1100px]:px-8 h-11 pt-1 min-[1600px]:pt-0 min-[1600px]:h-11 min-[1600px]:border-b border-b-solid border-shade-1000/6">
        {/* LEFT Section */}
        <div
          q:slot="left"
          class="flex flex-1 min-[1100px]:basis-[0%] min-w-0 min-[640px]:gap-6 items-center h-full"
        >
          <div class="items-center flex gap-2.5 h-full shrink-0">
            <Link class="cursor-pointer" href="/">
              <Logo />
            </Link>

            {/* Version Menu hidden on mobile view */}
            <div class="hidden min-[640px]:block">
              <VersionMenu>
                <MenuTrigger class="items-center flex gap-1 rounded-full px-2 py-0.75 bg-shade-150 cursor-pointer hover:bg-shade-200 transition-colors">
                  <div class="items-center flex rounded-md gap-1 text-[12px] leading-[100%] text-center py-1 font-medium text-shade-750">
                    Beta
                    <ChevronDown12 />
                  </div>
                </MenuTrigger>
              </VersionMenu>
            </div>
          </div>

          {/* Desktop tabs container (Folds to SubTopBar exactly at 1600px width) */}
          <div class="hidden min-[1600px]:flex h-full items-end">
            <PageNavigationBar class="h-9" />
          </div>
        </div>

        {/* MIDDLE Section: Search */}
        <SearchBar q:slot="middle" />

        {/* RIGHT Section: Actions */}
        <div
          q:slot="right"
          class="items-center flex justify-end gap-2 flex-none min-[1100px]:flex-1 min-[1100px]:basis-[0%] min-[1600px]:flex-none min-[1600px]:w-auto min-w-0 shrink-0 h-full"
        >
          <div class="flex items-center gap-2">
            <div class="flex items-center rounded-full py-2 px-3 gap-1.25 h-fit border border-solid border-shade-200 cursor-pointer hover:bg-shade-100">
              <div class="flex items-center">
                <div class="w-3.25 h-3.25 rounded-full shrink-0 bg-shade-950 [outline:1px_solid_#7D7D7D1A] -outline-offset-1" />
                <div class="w-3.25 h-3.25 rounded-full shrink-0 -ml-1.5 bg-shade-700 [outline:1px_solid_#0000001A] -outline-offset-1" />
                <div class="w-3.25 h-3.25 rounded-full shrink-0 -ml-1.5 bg-shade-200 [outline:1px_solid_#0000001A] -outline-offset-1" />
                <div class="w-3.25 h-3.25 rounded-full shrink-0 -ml-1.5 bg-shade-100 [outline:1px_solid_#0000001A] -outline-offset-1" />
              </div>
              <div class="text-center text-pretty font-medium flex justify-center flex-wrap text-shade-950 text-sm/3.5">
                Light
              </div>
              <LightIcon16 />
            </div>
            <GithubLink />
          </div>
        </div>
      </TopBar>

      {/* Responsive SubTopBar: Hidden >= 1600px */}
      <SubTopBar class="hidden min-[640px]:block px-6 min-[1100px]:px-8 h-fit mt-1 min-[1600px]:hidden border-b border-b-solid border-shade-1000/6">
        <PageNavigationBar class="h-9" />
      </SubTopBar>

      <Slot />

      {/* Mobile Nav Menu integration */}
      <MobileMenu class="mx-auto max-w-[480px] min-[640px]:hidden z-50" />
    </div>
  );
});
