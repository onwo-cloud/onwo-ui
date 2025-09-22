import type { PropsOf } from '@builder.io/qwik';
import { $, component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { InfoIcon, PanelsTopLeftIcon, RocketIcon, SwatchBookIcon } from '@onwo/icons';
import { styledcn } from '@onwo/primitives';
import type { IconComponent } from '@onwo/primitives/svg-icon';
import { cn } from '@onwo/ui';
import { ComponentCard } from './component-card';
import { Logo } from './logo';
import { SearchBar } from './searchbar';
import {
  accordionSection,
  alertSection,
  buttonSection,
  animatedSection,
  avatarSection,
  backdropOverlaySection,
  bottomSheetSection,
  breadcrumbSection,
  calendarSection,
  carouselSection,
  chipSection,
  drawerSection,
  dropdownSection,
  formSection,
  masonrySection,
  menuItemSection,
  modalSection,
  navigationMenuSection,
  pageNavigationSection,
  paginationSection,
  popoverSection,
  progressSection,
  searchSection,
  selectSection,
  snackbarSection,
  spinnerSection,
  switchSection,
  tableSection,
  tabsSection,
  tagSection,
  tooltipSection,
} from './sections';

import type { BoxedComp, Section } from './sections';
import { TerminalAnimatedIcon } from './terminal-icon-animated';
import { ThemeDropdown } from './theme-dropdown';

const DottedSeparator = styledcn('div')`w-full border-t border-dashed border-line`;

export const BORDER_CLASSES = ' ring-[1.2px] ring-[#d6d6d6] rounded-[0.6rem]';

type SidebarItemProps = {
  href: string;
  icon?: IconComponent;
  label: string;
  selected?: boolean;
};

const SidebarItem = ({ icon: Icon, href, label, selected }: SidebarItemProps) => (
  <Link
    href={href}
    class={cn(
      'cursor-pointer flex gap-4 text-[#5c5c5c] rounded-lg items-center py-2 px-3 hover:bg-gray-50 text-sm',
      selected && 'hover:bg-[#f6f6f6] bg-[#f6f6f6]' + BORDER_CLASSES,
    )}
  >
    {Icon && <Icon size="sm" />}
    {label}
  </Link>
);

const SidebarNav = () => (
  <nav class="space-y-2 mx-5">
    <SidebarItem href="/docs/get-started" icon={RocketIcon} label="Get started" />
    <SidebarItem href="/docs/how-it-works" selected icon={InfoIcon} label="How it works" />
    <SidebarItem href="/docs/theming" icon={SwatchBookIcon} label="Theming" />
    <SidebarItem href="/docs/templates" icon={PanelsTopLeftIcon} label="Templates" />
  </nav>
);

type SidebarNestedItemProps = {
  label: string;
  href: string;
  count?: string;
  selected?: boolean;
};

const SidebarNestedItem = ({ label, count, href }: SidebarNestedItemProps) => (
  <Link
    href={href}
    class="flex justify-between text-[#5c5c5c] items-center py-1 ml-6 hover:underline hover:text-black text-sm"
  >
    <div class="flex gap-2">{label}</div>
    {count && <span class="bg-[#f6f6f6] rounded-md px-3">{count}</span>}
  </Link>
);

const SidebarComponents = () => (
  <div>
    <h3 class="text-sm mx-8 font-medium mb-4">Components</h3>
    <div class="relative space-y-1 ml-10 mr-8">
      <div class="absolute h-full border-l border-[#E4E4E4]" />
      <SidebarNestedItem href="#accordion" label="Accordion" count="4" />
      <SidebarNestedItem href="#tabs" label="Tabs" count="4" />
      <SidebarNestedItem href="#button" label="Button" count="4" />
      <SidebarNestedItem href="#input" label="Input" count="4" />
      <SidebarNestedItem href="#select" label="Select" count="4" />
      <SidebarNestedItem href="#dropdown" label="Dropdown" count="4" />
      <SidebarNestedItem href="#datepicker" label="Datepicker" count="4" />
      <SidebarNestedItem href="#animate" label="Animate" count="4" />
      <SidebarNestedItem href="#select" label="Select" count="4" />
      <SidebarNestedItem href="#modal" label="Modal" count="4" />
    </div>
  </div>
);

const Sidebar = () => (
  <div class="space-y-7 w-92 pt-7 bg-white">
    <Link
      href="/"
      class="mx-8 text-2xl tracking-tight flex gap-2 items-center"
      style={{
        'font-family': 'League Spartan',
      }}
    >
      <Logo />
    </Link>
    <SidebarNav />
    <SidebarComponents />
  </div>
);

const MainHeader = ({ class: className, ...props }: PropsOf<'div'>) => (
  <div class={cn('h-[40px]', className)} {...props}>
    <div class="flex gap-4 items-center mb-4">
      <SearchBar />
      <ThemeDropdown
        options={[
          { value: 'light', label: 'Light Theme' },
          { value: 'dark', label: 'Dark Theme' },
          { value: 'auto', label: 'Auto Theme' },
          { value: 'high-contrast', label: 'High Contrast' },
        ]}
        placeholder="Select theme"
        onChange$={$((value) => console.log('Theme changed to:', value))}
        class="custom-dropdown"
      />
    </div>
  </div>
);

type ComponentGridProps = {
  components: BoxedComp[];
};

const ComponentGrid = (props: ComponentGridProps) => (
  <div class="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
    {props.components.map((section, idx) => (
      <div key={idx}>
        <ComponentCard {...section} />
      </div>
    ))}
  </div>
);

type SectionContentProps = {
  section: Section;
};

const SectionContent = ({ section }: SectionContentProps) => (
  <>
    <div class="px-6 first:mt-2">
      <div class="flex justify-between items-center mb-4">
        <div class="flex text-sm items-center gap-3">
          <h4 class=" font-bold">{section.title}</h4>
          <p>{section.description}</p>
        </div>
        <div data-placement="end">
          <Link
            href={section.link}
            rel="noopener"
            target="_blank"
            class="group/term-icon bg-gray-50 px-4 py-1 rounded-lg flex gap-2 items-center hover:bg-gray-100 cursor-pointer"
          >
            <span>See API</span>
            <TerminalAnimatedIcon />
          </Link>
        </div>
      </div>
      <ComponentGrid components={section.components} />
    </div>
    <DottedSeparator class="px-6" />
  </>
);

const MainContent = () => (
  <div class="flex-1">
    <div class="flex pt-6 flex-col relative gap-6 h-full">
      <MainHeader class="shrink-0 mx-6" />
      <div class="relative flex gap-12 flex-col max-h-full overflow-y-auto">
        <SectionContent section={accordionSection} />
        <SectionContent section={alertSection} />
        <SectionContent section={animatedSection} />
        <SectionContent section={buttonSection} />
        <SectionContent section={avatarSection} />
        <SectionContent section={backdropOverlaySection} />
        <SectionContent section={bottomSheetSection} />
        <SectionContent section={breadcrumbSection} />
        <SectionContent section={calendarSection} />
        <SectionContent section={carouselSection} />
        <SectionContent section={chipSection} />
        <SectionContent section={drawerSection} />
        <SectionContent section={dropdownSection} />
        <SectionContent section={formSection} />
        <SectionContent section={masonrySection} />
        <SectionContent section={menuItemSection} />
        <SectionContent section={modalSection} />
        <SectionContent section={navigationMenuSection} />
        <SectionContent section={pageNavigationSection} />
        <SectionContent section={paginationSection} />
        <SectionContent section={popoverSection} />
        <SectionContent section={progressSection} />
        <SectionContent section={searchSection} />
        <SectionContent section={selectSection} />
        <SectionContent section={snackbarSection} />
        <SectionContent section={spinnerSection} />
        <SectionContent section={switchSection} />
        <SectionContent section={tableSection} />
        <SectionContent section={tabsSection} />
        <SectionContent section={tagSection} />
        <SectionContent section={tooltipSection} />
      </div>
    </div>
  </div>
);

export const HomePageV2 = component$(() => {
  return (
    <div class="flex h-screen lg:gap-8">
      <Sidebar />
      <MainContent />
    </div>
  );
});
