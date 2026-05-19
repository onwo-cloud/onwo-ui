import { Link } from '@builder.io/qwik-city';
import { BaseIconComponent } from '~primitives/@kit/svg-icon';

import { Icon } from '~/utils/icon';

import { Logo } from './logo';

type SidebarItemProps = {
  href: string;
  icon?: BaseIconComponent;
  label: string;
  selected?: boolean;
};

const SidebarItem = ({ icon: LocIcon, href, label, selected }: SidebarItemProps) => (
  <Link
    href={href}
    class={[
      'cursor-pointer leading-[1] flex gap-2 hover:bg-canvas-secondary rounded-lg items-center py-2 px-3 text-sm',
      selected ? 'bg-canvas-secondary rounded-xl' : '',
    ]}
  >
    {LocIcon && <LocIcon size="sm" class="text-ink-secondary" />}
    <span>{label}</span>
  </Link>
);

const SidebarNav = () => (
  <nav class="space-y-2 mx-3">
    <SidebarItem href="/docs/get-started" icon={Icon.named('rocket')} label="Get started" />
    <SidebarItem
      href="/docs/how-it-works"
      selected
      icon={Icon.named('info')}
      label="How it works"
    />
    <SidebarItem href="/docs/theming" icon={Icon.named('swatch-book')} label="Theming" />
    <SidebarItem href="/docs/templates" icon={Icon.named('panels-top-left')} label="Templates" />
  </nav>
);

type SidebarNestedItemProps = {
  label: string;
  href: string;
  selected?: boolean;
};

const SidebarNestedItem = ({ label, href }: SidebarNestedItemProps) => (
  <Link
    href={href}
    class="flex text-ink-secondary items-center py-1 hover:underline hover:text-black text-sm"
  >
    <div class="flex gap-2">{label}</div>
  </Link>
);

const SidebarComponents = () => (
  <div>
    <h3 class="text-sm mx-6 font-medium mb-3">Components</h3>
    <div class="relative space-y-1.5 mx-6 ml-8">
      <SidebarNestedItem href="#accordion" label="Accordion" />
      <SidebarNestedItem href="#tabs" label="Tabs" />
      <SidebarNestedItem href="#button" label="Button" />
      <SidebarNestedItem href="#input" label="Input" />
      <SidebarNestedItem href="#select" label="Select" />
      <SidebarNestedItem href="#dropdown" label="Dropdown" />
      <SidebarNestedItem href="#datepicker" label="Datepicker" />
      <SidebarNestedItem href="#animate" label="Animate" />
      <SidebarNestedItem href="#select" label="Select" />
      <SidebarNestedItem href="#modal" label="Modal" />
    </div>
  </div>
);

export const Sidebar = () => (
  <div class="space-y-6 w-56 pt-6">
    <Link href="/" class="mx-6 flex gap-[6px] items-center">
      <Logo height={16} class="-translate-x-[2px]" />
      <span
        class="text-xl  leading-[1]"
        style={{
          'font-family': 'League Spartan',
        }}
      >
        onwo.ui
      </span>
      <span class="ml-1 -translate-y-[1px] text-xs bg-canvas-secondary px-2 rounded-full ">
        Beta
      </span>
    </Link>
    <SidebarNav />
    <SidebarComponents />
  </div>
);
