import { Link, useLocation } from '@builder.io/qwik-city';
import type { BaseIconComponent } from '~primitives/@kit/svg-icon';
import { Icon } from '~/utils/icon';
import { Logo, LogoText } from './logo';
import { component$, type PropsOf } from '@builder.io/qwik';
import { Scrollarea, ScrollareaBar, ScrollareaCues, ScrollareaViewport } from '../topbar/changelog/scrollarea';
import { Section, SECTIONS_MAP } from '~/kit';

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
      'cursor-pointer leading-[1] flex gap-2 hover:bg-canvas-secondary rounded-full items-center py-2.5 px-3 text-sm',
      'hover:ring ring-separator-box ring-inset',
      selected ? 'bg-canvas-secondary ring' : '',
    ]}
  >
    {LocIcon && <LocIcon size="sm" class="text-ink-secondary" />}
    <span>{label}</span>
  </Link>
);

const SidebarNav = () => (
  <nav class="space-y-2 mx-3">
    <SidebarItem href="/get-started" icon={Icon.named('rocket')} label="Get started" />
    <SidebarItem
      href="/how-it-works"
      selected
      icon={Icon.named('info')}
      label="How it works"
    />
    <SidebarItem href="/theming" icon={Icon.named('swatch-book')} label="Theming" />
    <SidebarItem href="/templates" icon={Icon.named('panels-top-left')} label="Templates" />
  </nav>
);

type SidebarNestedItemProps = {
  label: string;
  href: string;
  selected?: boolean;
};

const SidebarNestedItem = ({ label, href, selected }: SidebarNestedItemProps) => (
  <Link
    href={href}
    class={[
      'flex items-center px-4 py-2 rounded-full font-fvs hover:underline text-sm transition-all duration-80',
      selected
        ? 'bg-canvas-input text-ink font-medium fvs-medium'
        : 'text-ink-secondary hover:bg-canvas-input hover:text-ink',
    ]}
  >
    <div class="flex gap-2">{label}</div>
  </Link>
);

const toKebabCase = (str: string) => {
  return str
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
};

const sections: Section[] = Object.values(SECTIONS_MAP);

const SidebarComponents = component$(() => {
  const loc = useLocation();
  const currentPath = loc.url.pathname;

  // Alphabetize lists
  sections.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div class="h-full">
      <h3 class="text-sm mx-6 font-medium mb-3 text-ink">Components</h3>
      <div class="relative mr-4 ml-2 space-y-0.5 max-h-[50vh]">
        {sections.map((sec) => {
          const kebabName = toKebabCase(sec.title);
          const href = `/components/${kebabName}/`;
          const selected = currentPath.includes(`/components/${kebabName}`);

          return (
            <SidebarNestedItem
              key={sec.title}
              href={href}
              label={sec.title}
              selected={selected}
            />
          );
        })}
      </div>
    </div>
  );
});

type SidebarProps = PropsOf<'div'>;

export const Sidebar = ({ class: className, ...props }: SidebarProps) => (
  <div class={["space-y-6 w-56 pt-6 h-screen", className]} {...props}>
    <Link href="/" class="ml-6 flex gap-[6px] items-center">
      <Logo class="-translate-x-[1px]" />
      <LogoText />
      <span class="-translate-y-[1px] text-xs bg-canvas-secondary px-2 rounded-full">
        Beta
      </span>
    </Link>

    <SidebarNav />

    <Scrollarea
      class="w-full relative min-h-0 h-full mb-12"
    >
      <ScrollareaCues
        maxHeight={44}
        class={[
          "transition-opacity duration-[160ms] ease-in-out",
        ]}
      />

      <ScrollareaViewport class="h-full">
        <SidebarComponents />

      </ScrollareaViewport>

      <ScrollareaBar
        smoothScroll
        orientation="vertical"
        hoverDistance={80}
        class={[
          "not-data-[near]:opacity-0 w-[13px] right-0 top-0 bottom-0 transition-opacity duration-[160ms] ease-in-out",
        ]}
      />
    </Scrollarea>

  </div>
);
