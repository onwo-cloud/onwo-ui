import type { JSXChildren } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { cn } from '@onwo/ui';

type SidebarSectionProps = {
  label: string;
  children: JSXChildren;
};

const SidebarSection = (props: SidebarSectionProps) => (
  <div>
    <p class="font-medium text-sm mb-4">{props.label}</p>
    <div class="flex flex-col gap-[2px]">{props.children}</div>
  </div>
);

type SidebarItemProps = { disabled?: boolean; href: string; label: string };
const SidebarItem = (props: SidebarItemProps) => (
  <Link
    class={cn(
      'flex p-1 bg-transparent cursor-pointer transition items-center justify-start rounded-onwo-i-sm gap-2 text-sm text-lead w-full outline-none focus:shadow-focus hover:bg-lead',
      props.disabled && 'text-lead-130 cursor-not-allowed',
    )}
    style={{ '--tw-current-bg-a': 0.05 }}
    href={props.href}
  >
    {props.label}
  </Link>
);

type SidebarProps = {
  class?: string;
};

export const Sidebar = (props: SidebarProps) => (
  <div
    role="complementary"
    class={cn(
      'flex flex-col gap-12 px-10 py-12 w-72 shrink-0 border-r h-full border-line',
      props.class,
    )}
  >
    <SidebarSection label="Introduction">
      <SidebarItem href="/docs/getting-started" label="Getting started" />
      <SidebarItem href="/docs/colors" label="Colors" />
      <SidebarItem href="/docs/icons" label="Icons" />
      <SidebarItem href="/docs/roadmap" label="Roadmap" />
      <SidebarItem href="/docs/typography" label="Typography" />
    </SidebarSection>
    <SidebarSection label="Components">
      <SidebarItem href="/components/accordion" label="Accordion" />
      <SidebarItem href="/components/alert" label="Alert" />
      <SidebarItem href="/components/animated" label="Animated" />
      <SidebarItem href="/components/avatar" label="Avatar" />
      <SidebarItem href="/components/backdrop-overlay" label="Backdrop Overlay" />
      <SidebarItem disabled href="/components/bottom-sheet" label="Bottom Sheet" />
      <SidebarItem href="/components/breadcrumb" label="Breadcrumb" />
      <SidebarItem href="/components/button" label="Button" />
      <SidebarItem href="/components/carousel" label="Carousel" />
      <SidebarItem href="/components/calendar" label="Calendar" />
      <SidebarItem href="/components/chip" label="Chip" />
      <SidebarItem disabled href="/components/drawer" label="Drawer" />
      <SidebarItem href="/components/dropdown" label="Dropdown" />
      <SidebarItem disabled href="/components/form" label="Form" />
      <SidebarItem href="/components/spinner" label="Spinner" />
      <SidebarItem href="/components/masonry" label="Masonry" />
      <SidebarItem disabled href="/components/menu-item" label="Menu Item" />
      <SidebarItem href="/components/modal" label="Modal" />
      <SidebarItem href="/components/pagination" label="Pagination" />
      <SidebarItem href="/components/popover" label="Popover" />
      <SidebarItem disabled href="/components/progress" label="Progress" />
      <SidebarItem disabled href="/components/search" label="Search" />
      <SidebarItem href="/components/select" label="Select" />
      <SidebarItem disabled href="/components/snackbar" label="Snackbar" />
      <SidebarItem disabled href="/components/switch" label="Switch" />
      <SidebarItem disabled href="/components/table" label="Table" />
      <SidebarItem href="/components/tabs" label="Tabs" />
      <SidebarItem disabled href="/components/tag" label="Tag" />
      <SidebarItem disabled href="/components/tooltip" label="Tooltip" />
    </SidebarSection>
  </div>
);
