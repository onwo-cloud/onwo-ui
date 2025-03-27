import type { DocumentHead } from '@builder.io/qwik-city';
import { PageNavigation as PNav } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Page Navigation"
      description="Enables quick access to page sections through linked anchors."
      breadcrumbs={[{ label: 'Page navigation', url: '/components/progress' }]}
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
        Default: `import { PageNavigation as PNav } from '@onwo/ui';

<PNav.Provider rigid>
  <div>
    <PNav.Link label="Link 1">Link 1</PNav.Link>
    <PNav.Link label="Link 2">Sublink 1</PNav.Link>
    <PNav.Link label="Link 3">Link 3</PNav.Link>
  </div>
  <PNav.Appendix />
</PNav.Provider>`,
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
        <PNav.Provider>
          <div class="p-1 flex bg-goku w-fit gap-4 mb-4">
            <PNav.Link id="link-1" label="Link 1">
              Link 1
            </PNav.Link>
            <PNav.Link id="link-2" label="Link 2">
              Link 2
            </PNav.Link>
            <PNav.Link id="link-3" label="Link 3">
              Link 3
            </PNav.Link>
          </div>
          <PNav.Appendix />
        </PNav.Provider>
      }
      code={`import { PageNavigation as PNav } from '@onwo/ui';

<PNav.Provider>
  <div class="p-1 flex bg-goku w-fit gap-4 mb-4">
    <PNav.Link id="link-1" label="Link 1">Link 1</PNav.Link>
    <PNav.Link id="link-2" label="Link 2">Link 2</PNav.Link>
    <PNav.Link id="link-3" label="Link 3">Link 3</PNav.Link>
  </div>
  <PNav.Appendix />
</PNav.Provider>`}
    />

    <Showcase
      title="Custom anchors"
      component={
        <PNav.Provider class="grid grid-cols-[1fr_auto] gap-8">
          <div class="onwo-format">
            <PNav.Link level={1} elem="h2" id="hlink-2" label="H2">
              Title 1
            </PNav.Link>
            <PNav.Link level={2} elem="h3" id="hlink-3" label="H3">
              Title 2
            </PNav.Link>
            <PNav.Link level={3} elem="h4" id="hlink-4" label="H4">
              Title 3
            </PNav.Link>
          </div>
          <PNav.Appendix maxLevelShown={2} />
        </PNav.Provider>
      }
      code={`import { PageNavigation as PNav } from '@onwo/ui';

<PNav.Provider class="grid grid-cols-[1fr_auto] gap-8">
  <div class="onwo-format">
    <PNav.Link elem="h2" id="hlink-2" label="H2">
      Title 1
    </PNav.Link>
    <PNav.Link elem="h3" level={2} id="hlink-3" label="H3">
      Title 2
    </PNav.Link>
    <PNav.Link elem="h4" level={3} id="hlink-4" label="H4">
      Title 3
    </PNav.Link>
  </div>
  <PNav.Appendix maxLevelShown={2} />
</PNav.Provider>`}
    />
    <p class="mt-6">
      Rather than nesting heading element inside of page navigation link you can simply set the elem
      prop to the element of your choosing, you can also set the level prop to define the link importance. You can also set the maxLevelShown prop on the appendix to hide undesired links.
    </p>
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Page navigation - Onwo UI',
  description:
    'Customizable progress components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
