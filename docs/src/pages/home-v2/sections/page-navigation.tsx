import { PageNavigation as PNav } from '@onwo/ui';
import type { BoxedComp, Section } from '.';

const defaultPageNavigation: BoxedComp = {
  title: 'Default',
  display: () => (
    <PNav.Provider>
      <div class="p-1 flex bg-paper w-fit gap-4 mb-4">
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
  ),
  code: `import { PageNavigation as PNav } from '@onwo/ui';

<PNav.Provider>
  <div class="p-1 flex bg-paper w-fit gap-4 mb-4">
    <PNav.Link id="link-1" label="Link 1">Link 1</PNav.Link>
    <PNav.Link id="link-2" label="Link 2">Link 2</PNav.Link>
    <PNav.Link id="link-3" label="Link 3">Link 3</PNav.Link>
  </div>
  <PNav.Appendix />
</PNav.Provider>`,
};

const customAnchors: BoxedComp = {
  title: 'Custom anchors',
  display: () => (
    <PNav.Provider class="grid grid-cols-[1fr_auto] gap-8">
      <div class="onwo-format">
        <PNav.Link level={1} as="h2" id="hlink-2" label="H2">
          Title 1
        </PNav.Link>
        <PNav.Link level={2} as="h3" id="hlink-3" label="H3">
          Title 2
        </PNav.Link>
        <PNav.Link level={3} as="h4" id="hlink-4" label="H4">
          Title 3
        </PNav.Link>
      </div>
      <PNav.Appendix maxLevelShown={2} />
    </PNav.Provider>
  ),
  code: `import { PageNavigation as PNav } from '@onwo/ui';

<PNav.Provider class="grid grid-cols-[1fr_auto] gap-8">
  <div class="onwo-format">
    <PNav.Link as="h2" level={1} id="hlink-2" label="H2">
      Title 1
    </PNav.Link>
    <PNav.Link as="h3" level={2} id="hlink-3" label="H3">
      Title 2
    </PNav.Link>
    <PNav.Link as="h4" level={3} id="hlink-4" label="H4">
      Title 3
    </PNav.Link>
  </div>
  <PNav.Appendix maxLevelShown={2} />
</PNav.Provider>`,
};

export const section: Section = {
  title: 'Page Navigation',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/page-navigation',
  description: 'Enables quick access to page sections through linked anchors.',
  components: [defaultPageNavigation, customAnchors],
};
