import type { DocumentHead } from '@builder.io/qwik-city';
import { PageNavigationAppendix, PageNavigationLink, PageNavigationProvider } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Page Navigation"
      description="Enables quick access to page sections through linked anchors."
      breadcrumbs={[{ label: 'Page navigation', to: '/components/progress' }]}
    />

    <div class="onwo-format">
      <p>
        Page navigation through anchor is used for sharing or bookmarking differents section of a
        page, depending on the configuration chosen, right clicking a navigation element will save
        the link to the clipboard.
      </p>

      <p>
        Anchor points are computed by parsing links labels, be wary of collisions, e.g., "Link 1"
        and "link__1" will both result in the anchor point `link-1`.
      </p>
    </div>

    <Anatomy
      variants={{
        Default: `import { PageNavigationProvider, PageNavigationLink, PageNavigationAppendix } from '@onwo/ui';

<PageNavigationProvider>
  <div>
    <PageNavigationLink label="Link 1">Link 1</PageNavigationLink>
    <PageNavigationLink label="Link 2">Sublink 1</PageNavigationLink>
    <PageNavigationLink label="Link 3">Link 3</PageNavigationLink>
  </div>
  <PageNavigationAppendix sticky />
</PageNavigationProvider>`,
        'Computed JSX': `<>
  <div>
    <a id="link-1" href="#link-1">Link 1</a>
    <a id="link-2" href="#link-2">Sublink 1</a>
    <a id="link-3" href="#link-3">Link 3</a>
  </div>
  <aside>
    <a href="#link-1">Link 1</a>
    <a href="#link-2">Link 2</a>
    <a href="#link-3">Link 3</a>
  </aside>
</>`,
      }}
    />

    <Showcase
      title="Default"
      component={
        <PageNavigationProvider>
          <div class="p-1 flex bg-paper w-fit gap-4 mb-4">
            <PageNavigationLink id="link-1" label="Link 1">
              Link 1
            </PageNavigationLink>
            <PageNavigationLink id="link-2" label="Link 2">
              Link 2
            </PageNavigationLink>
            <PageNavigationLink id="link-3" label="Link 3">
              Link 3
            </PageNavigationLink>
          </div>
          <PageNavigationAppendix />
        </PageNavigationProvider>
      }
      code={`import { PageNavigationProvider, PageNavigationLink, PageNavigationAppendix } from '@onwo/ui';

<PageNavigationProvider>
  <div class="p-1 flex bg-paper w-fit gap-4 mb-4">
    <PageNavigationLink id="link-1" label="Link 1">Link 1</PageNavigationLink>
    <PageNavigationLink id="link-2" label="Link 2">Link 2</PageNavigationLink>
    <PageNavigationLink id="link-3" label="Link 3">Link 3</PageNavigationLink>
  </div>
  <PageNavigationAppendix />
</PageNavigationProvider>`}
    />

    <Showcase
      title="Custom anchors"
      component={
        <PageNavigationProvider class="grid grid-cols-[1fr_auto] gap-8">
          <div class="onwo-format">
            <PageNavigationLink level={1} as="h2" id="hlink-2" label="H2">
              Title 1
            </PageNavigationLink>
            <PageNavigationLink level={2} as="h3" id="hlink-3" label="H3">
              Title 2
            </PageNavigationLink>
            <PageNavigationLink level={3} as="h4" id="hlink-4" label="H4">
              Title 3
            </PageNavigationLink>
          </div>
          <PageNavigationAppendix maxLevelShown={2} />
        </PageNavigationProvider>
      }
      code={`import { PageNavigationProvider, PageNavigationLink, PageNavigationAppendix } from '@onwo/ui';

<PageNavigationProvider class="grid grid-cols-[1fr_auto] gap-8">
  <div class="onwo-format">
    <PageNavigationLink as="h2" id="hlink-2" label="H2">
      Title 1
    </PageNavigationLink>
    <PageNavigationLink as="h3" level={2} id="hlink-3" label="H3">
      Title 2
    </PageNavigationLink>
    <PageNavigationLink as="h4" level={3} id="hlink-4" label="H4">
      Title 3
    </PageNavigationLink>
  </div>
  <PageNavigationAppendix maxLevelShown={2} />
</PageNavigationProvider>`}
    />
    <p class="mt-6">
      Set the `elem` prop to create heading-level navigation elements without nesting, adjust link
      importance with `level`, and use `maxLevelShown` on the appendix to filter displayed links
      based on their hierarchy.
    </p>
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Page navigation - Onwo UI',
  description:
    'Customizable progress components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
