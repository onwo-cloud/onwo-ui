import { PageNavigationAppendix, PageNavigationLink, PageNavigationProvider } from '@onwo/ui';
import type { BoxedComp, Section } from '.';

const defaultPageNavigation: BoxedComp = {
  title: 'Default',
  display: () => (
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
  ),
  code: `import { PageNavigationProvider, PageNavigationLink, PageNavigationAppendix } from '@onwo/ui';

<PageNavigationProvider>
  <div class="p-1 flex bg-paper w-fit gap-4 mb-4">
    <PageNavigationLink id="link-1" label="Link 1">Link 1</PageNavigationLink>
    <PageNavigationLink id="link-2" label="Link 2">Link 2</PageNavigationLink>
    <PageNavigationLink id="link-3" label="Link 3">Link 3</PageNavigationLink>
  </div>
  <PageNavigationAppendix />
</PageNavigationProvider>`,
};

const customAnchors: BoxedComp = {
  title: 'Custom anchors',
  display: () => (
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
  ),
  code: `import { PageNavigationProvider, PageNavigationLink, PageNavigationAppendix } from '@onwo/ui';

<PageNavigationProvider class="grid grid-cols-[1fr_auto] gap-8">
  <div class="onwo-format">
    <PageNavigationLink as="h2" level={1} id="hlink-2" label="H2">
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
</PageNavigationProvider>`,
};

export const section: Section = {
  title: 'Page Navigation',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/page-navigation',
  description: 'Enables quick access to page sections through linked anchors.',
  components: [defaultPageNavigation, customAnchors],
};
