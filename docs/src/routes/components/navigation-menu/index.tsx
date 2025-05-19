import type { DocumentHead } from '@builder.io/qwik-city';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

// <nav class="hidden gap-6 md:flex"><a class="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground" href="/docs">Documentation</a><a class="flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm text-foreground/60" href="/guides">Guides</a></nav>

export default () => (
  <div>
    <PageHeadSection
      title="Navigation Menu"
      description="Groupped or ungroupped"
      breadcrumbs={[{ label: 'Page navigation', to: '/components/progress' }]}
    />

    <Showcase
      title="Default"
      component={
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
      }
      code={``}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Page navigation - Onwo UI',
  description:
    'Customizable progress components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
