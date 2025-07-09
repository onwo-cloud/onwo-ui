import type { BoxedComp, Section } from '.';

const defaultNavigationMenu: BoxedComp = {
  title: 'Default',
  display: () => (
    <nav
      class="flex h-10 items-center space-x-1 border bg-background p-1 rounded-none border-b border-none px-2 lg:px-4"
      tabIndex={0}
      data-orientation="horizontal"
      style="outline: none;"
    >
      <button
        type="button"
        role="menuitem"
        id="radix-«rfi»"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
        class="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground font-bold"
        tabIndex={-1}
        data-orientation="horizontal"
        data-radix-collection-item=""
      >
        Music
      </button>
      <button
        type="button"
        role="menuitem"
        id="radix-«rfm»"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
        class="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground relative"
        tabIndex={0}
        data-orientation="horizontal"
        data-radix-collection-item=""
      >
        File
      </button>
      <button
        type="button"
        role="menuitem"
        id="radix-«rfq»"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
        class="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
        tabIndex={-1}
        data-orientation="horizontal"
        data-radix-collection-item=""
      >
        Edit
      </button>
      <button
        type="button"
        role="menuitem"
        id="radix-«rfu»"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
        class="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
        tabIndex={-1}
        data-orientation="horizontal"
        data-radix-collection-item=""
      >
        View
      </button>
      <button
        type="button"
        role="menuitem"
        id="radix-«rg2»"
        aria-haspopup="menu"
        aria-expanded="false"
        data-state="closed"
        class="cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-hidden focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground hidden md:block"
        tabIndex={-1}
        data-orientation="horizontal"
        data-radix-collection-item=""
      >
        Account
      </button>
    </nav>
  ),
  code: `
<nav class="flex h-10 items-center space-x-1 rounded-md border bg-background p-1">
  <button class="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none">
    Music
  </button>
  <button class="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none">
    File
  </button>
  <button class="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none">
    Edit
  </button>
  <button class="flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none">
    View
  </button>
  <button class="hidden cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none md:block">
    Account
  </button>
</nav>
`,
};

export const section: Section = {
  title: 'Navigation Menu',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/navigation-menu',
  description: 'Groupped or ungroupped',
  components: [defaultNavigationMenu],
};
