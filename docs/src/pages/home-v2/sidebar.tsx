import { Link } from '@builder.io/qwik-city';
import { InfoIcon, PanelsTopLeftIcon, RocketIcon, SwatchBookIcon } from '@onwo/icons';
import type { IconComponent } from '@onwo/primitives/svg-icon';
import { cn } from '@onwo/ui';
import { Logo } from './logo';
import { BORDER_CLASSES } from '.';

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

export const Sidebar = () => (
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
