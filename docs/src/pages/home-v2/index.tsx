import type { Component } from '@builder.io/qwik';
import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import {
  ClipboardIcon,
  CodeIcon,
  InfoIcon,
  PanelsTopLeftIcon,
  RocketIcon,
  SearchIcon,
  SwatchBookIcon,
  TerminalIcon,
} from '@onwo/icons';
import type { IconProps } from '@onwo/primitives/svg-icon';

/* Line 2 */

const DottedSeparator = () => (
  //border: 1px dashed #D9D9D9;
  <div class="w-full border border-dashed border-line" />
);

const BORDER_CLASSES = 'border border-gray-300 rounded-lg';
const SearchBar = () => (
  <div class={'flex gap-2 relative w-80 pl-4 pr-4 py-2 ' + BORDER_CLASSES}>
    <SearchIcon />
    <input type="text" placeholder="Find anything" />
  </div>
);

const ThemeDropdown = () => (
  <select class={'border px-3 py-2 ' + BORDER_CLASSES}>
    <option>Choose theme</option>
  </select>
);

const ComponentCard = ({ title = 'Default' }) => (
  <div class="border border-gray-300 rounded p-4 bg-white h-50">
    <div class="flex justify-between items-center mb-2">
      <span class="text-sm font-medium">{title}</span>
      <div class="flex gap-2">
        <div class="border border-gray-300 rounded-full">
          <CodeIcon />
        </div>
        <div class="border border-gray-300 rounded-full">
          <ClipboardIcon />
        </div>
      </div>
    </div>
    <div class="mt-12 border border-gray-300 rounded px-4 py-2 text-center bg-gray-50">Button</div>
  </div>
);

type SidebarItemProps = {
  icon?: Component<IconProps>;
  label: string;
  count?: string;
};
const SidebarItem = ({ icon: Icon, label, count }: SidebarItemProps) => (
  <div class="flex justify-between items-center py-2 px-3 hover:bg-gray-50 text-sm">
    <div class="flex gap-2">
      {Icon && <Icon />}
      {label}
    </div>
    {count && <span class="text-gray-500">{count}</span>}
  </div>
);

const SidebarNav = () => (
  <nav class="space-y-1">
    <SidebarItem icon={RocketIcon} label="Get started" />
    <SidebarItem icon={InfoIcon} label="How it works" />
    <SidebarItem icon={SwatchBookIcon} label="Theming" />
    <SidebarItem icon={PanelsTopLeftIcon} label="Views" />
  </nav>
);

const SidebarComponents = () => (
  <div class="mt-6">
    <h3 class="text-sm font-medium mb-2">Components</h3>
    <div class="space-y-1">
      <SidebarItem label="Accordion" count="4" />
      <SidebarItem label="Tabs" count="4" />
      <SidebarItem label="Button" count="4" />
      <SidebarItem label="Input" count="4" />
      <SidebarItem label="Select" count="4" />
      <SidebarItem label="Dropdown" count="4" />
      <SidebarItem label="Datepicker" count="4" />
      <SidebarItem label="Animate" count="4" />
      <SidebarItem label="Select" count="4" />
      <SidebarItem label="Modal" count="4" />
    </div>
  </div>
);

const Logo = () => (
  <Link
    href="/"
    class="text-2xl tracking-tight flex gap-2 items-center"
    style={{
      'font-family': 'League Spartan',
    }}
  >
    <svg
      preserveAspectRatio="none"
      id="Subtract"
      class="pointer-events-none"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 0C15.5228 2.66808e-05 20 4.47719 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10V1.74659C1.83175e-05 0.781992 0.781987 0 1.74659 0H10ZM6.68447 2.61766C6.62146 2.33818 6.22317 2.33818 6.16017 2.61766L5.50035 5.54706C5.47754 5.64829 5.39847 5.72736 5.29724 5.75016L2.36784 6.40999C2.08834 6.47297 2.08835 6.87128 2.36784 6.93428L5.29724 7.59424C5.39845 7.61704 5.47753 7.69601 5.50035 7.79721L6.16017 10.7266C6.22314 11.0062 6.6215 11.0062 6.68447 10.7266L7.34429 7.79721C7.36711 7.69602 7.4462 7.61705 7.5474 7.59424L10.4768 6.93428C10.7563 6.8713 10.7563 6.47296 10.4768 6.40999L7.5474 5.75016C7.44618 5.72735 7.36709 5.64828 7.34429 5.54706L6.68447 2.61766Z"
        fill="#020218"
      />
    </svg>
    <span>ui.onwo</span>
  </Link>
);

const Sidebar = () => (
  <div class="w-64 bg-white border-r border-gray-200 p-4">
    <Logo />
    <SidebarNav />
    <SidebarComponents />
  </div>
);

const MainHeader = () => (
  <div class="mb-6">
    <div class="flex gap-4 items-center mb-4">
      <SearchBar />
      <ThemeDropdown />
    </div>
    <p class="text-gray-600">Found 24 results</p>
  </div>
);

const ComponentGrid = () => (
  <div class="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
    {Array.from({ length: 6 }, (_, i) => (
      <div key={i}>
        <ComponentCard />
      </div>
    ))}
  </div>
);

const MainContent = () => (
  <div class="flex-1 p-6">
    <MainHeader />
    <div class="flex flex-col mt-4 gap-8">
      {Array.from({ length: 6 }, (_, idx) => (
        <div key={idx}>
          <DottedSeparator />
          <div class="flex justify-between items-center my-4">
            <div class="flex items-center gap-2">
              <h4 class="text-base font-bold">Button</h4>
              <p>Multi-variants button element</p>
              <InfoIcon size="sm" />
            </div>
            <div data-placement="end">
              <button class="bg-gray-50 px-4 py-1 rounded-lg flex gap-2 items-center hover:underline">
                <span>See API</span>
                <TerminalIcon />
              </button>
            </div>
          </div>
          <ComponentGrid />
        </div>
      ))}
    </div>
  </div>
);

export const HomePageV2 = component$(() => {
  return (
    <div class="flex h-screen">
      <Sidebar />
      <MainContent />
    </div>
  );
});
