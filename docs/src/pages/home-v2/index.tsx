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
import { cn } from '@onwo/ui';
import { Logo } from './logo';

/* Line 2 */

const DottedSeparator = () => (
  //border: 1px dashed #D9D9D9;
  <div class="w-full border-t border-dashed border-line" />
);

const BORDER_CLASSES = ' ring-[1.2px] ring-[#d6d6d6] rounded-[0.6rem]';
import { component$, useSignal, useTask$, $ } from '@builder.io/qwik';
import { LuSearch, LuX } from '@qwikest/icons/lucide';

const BORDER_CLASSES = ' ring-[1.2px] ring-[#d6d6d6] rounded-[0.6rem]';

interface SearchBarProps {
  placeholder?: string;
  showIcon?: boolean;
  onSearch?: (value: string) => void;
  onClear?: () => void;
  class?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  [key: string]: any;
}

export default component$<SearchBarProps>(({
  placeholder = "Search anything",
  showIcon = true,
  onSearch,
  onClear,
  class: className = "",
  disabled = false,
  autoFocus = false,
  ...props
}) => {
  const value = useSignal('');
  const isFocused = useSignal(false);
  const inputRef = useSignal<HTMLInputElement>();

  const handleInputChange = $((e: Event) => {
    const target = e.target as HTMLInputElement;
    const newValue = target.value;
    value.value = newValue;
    onSearch?.(newValue);
  });

  const handleClear = $(() => {
    value.value = '';
    onClear?.();
    inputRef.value?.focus();
  });

  const handleKeyDown = $((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      if (value.value) {
        handleClear();
      } else {
        inputRef.value?.blur();
      }
    }
  });

  useTask$(({ track }) => {
    track(() => autoFocus);
    if (autoFocus && inputRef.value) {
      inputRef.value.focus();
    }
  });

  return (
    <div
      class={`flex items-center gap-2 relative w-80 pl-4 pr-4 py-2 transition-all duration-200 focus-within:ring-[#3b82f6] focus-within:ring-2 hover:ring-[#a3a3a3] ${BORDER_CLASSES} ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}
      role="search"
      aria-label="Search"
    >
      {showIcon && (
        <SearchIcon
          size="sm"
          class="pointer-events-none flex-shrink-0"
          aria-hidden="true"
        />
      )}

      <input
        ref={inputRef}
        type="text"
        value={value.value}
        onInput$={handleInputChange}
        onKeyDown$={handleKeyDown}
        onFocus$={() => isFocused.value = true}
        onBlur$={() => isFocused.value = false}
        placeholder={placeholder}
        disabled={disabled}
        class="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-gray-900 disabled:cursor-not-allowed"
        aria-label={placeholder}
        aria-describedby="search-instructions"
        {...props}
      />

      {value.value && (
        <button
          onClick$={handleClear}
          class="p-1 hover:bg-gray-100 rounded-full transition-colors duration-150 flex-shrink-0"
          aria-label="Clear search"
          type="button"
        >
          <LuX class="w-[14px] h-[14px] text-gray-500" />
        </button>
      )}

      <div id="search-instructions" class="sr-only">
        Press Escape to clear search or close
      </div>
    </div>
  );
});

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
  href: string;
  icon?: Component<IconProps>;
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
  <div class="space-y-7 w-92 pt-7 bg-white border-r border-gray-200">
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
            <div class="flex text-sm items-center gap-2">
              <h4 class=" font-bold">Button</h4>
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
