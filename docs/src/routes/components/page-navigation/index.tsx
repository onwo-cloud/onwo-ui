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

    <p>
      Page navigation through anchor is used for sharing or bookmarking differents section of a
      page, depending on the configuration chosen, right clicking a navigation element will save the
      link to the clipboard.
    </p>

    <p class="mt-2">
      Anchor points are computed by parsing links labels, be wary of collisions, e.g., "Link 1" and
      "link__1" will both result in the anchor point `link-1`.
    </p>

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
            <PNav.Link id="link-1" label="Link 1">Link 1</PNav.Link>
            <PNav.Link id="link-2" label="Link 2">Link 2</PNav.Link>
            <PNav.Link id="link-3" label="Link 3">Link 3</PNav.Link>
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
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Page navigation - Onwo UI',
  description:
    'Customizable progress components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
