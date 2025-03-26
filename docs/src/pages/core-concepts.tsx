import { PageNavigation as PNav } from '@onwo/ui';
import { PageHeadSection } from '~/commons/page-head-section';

export const CoreConceptsPage = () => (
  <div class="flex flex-col grow max-w-screen-xl">
    <PageHeadSection
      title="Core concepts"
      description="How this library is structured"
      breadcrumbs={[{ label: 'Core concepts', url: '/core-concepts' }]}
    />
    <div class="onwo-format">
      <PNav.Link elem="h2" id="component-hierarchy" label="Component Hierarchy">
        Component hierarchy in our documentation
      </PNav.Link>
      <p>
        Our documentation helps user understand components hierarchy throughs tags, based on their
        complexity and flexibility. We distinguish between the following categories:
      </p>

      <PNav.Link elem="h3" level={2} id="commons" label="Commons">
        Commons
      </PNav.Link>
      <p>
        These are the fundamental building blocks that are highly flexible and minimally
        opinionated. They're designed to be used in many different contexts and customized easily.
        For example, a Button component simply renders a clickable element with some basic styling,
        but doesn't make assumptions about how you'll use it.
      </p>

      <PNav.Link elem="h3" level={2} id="composites" label="Composites">
        Composites
      </PNav.Link>
      <p>
        These are more advanced structures often built by combining multiple basic components. They
        embody more abstract structure or user interface conventions (e.g. tabs, modal), making them
        more opinionated and less flexible, but also more powerful for specific use cases.
      </p>
      <p>
        For instance, Page Navigation composites make uses of contexts to track down links to
        provide an appendix.
      </p>

      <PNav.Link elem="h3" level={2} id="hooks" label="Hooks">
        Hooks
      </PNav.Link>
      <p>
        If you used react you are already familiar with this one, hooks are helpers methods that you
        can use as-is in your components to provide behavioral logic.
      </p>
      <PNav.Link elem="h3" level={2} id="primitives" label="Primitives">
        Primitives
      </PNav.Link>
      <p>
        Internally our code separate the UI logics from the behavioral logics, primitives are base
        components that do not provide stylings, if you intend to create variants of your own, it is
        best practice to base it on primitives rather than common or composites, this will prevents
        potential styling conflicts in the future. See{' '}
        <a href="/primitives"> the primitive page for more infos</a>
      </p>
    </div>
  </div>
);
