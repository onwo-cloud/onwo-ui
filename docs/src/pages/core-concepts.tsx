import { PageNavigation as PNav } from '@onwo/ui';
import { PageHeadSection } from '~/commons/page-head-section';

export const CoreConceptsPage = () => (
  <div class="flex flex-col grow max-w-screen-xl">
    <PageHeadSection
      title="Core concepts"
      description="What you should know before starting"
      breadcrumbs={[{ label: 'Core concepts', to: '/core-concepts' }]}
    />
    <div class="onwo-format">
      <PNav.Link as="h2" id="component-hierarchy" label="Component Hierarchy">
        Terminology
      </PNav.Link>
      <p>
        We don't divert too much from others UI library, but understanding our terminology will give
        you a good picture of how this library categorize differents sections, here are the core of
        it:
      </p>
      <PNav.Link as="h3" level={2} id="commons" label="Commons">
        Commons
      </PNav.Link>
      <p>
        These are the fundamental components that are highly flexible and minimally opinionated.
        They're designed to be used in many different contexts and customized easily.
      </p>
      <p>Buttons, inputs, select, icons</p>
      <PNav.Link as="h3" level={2} id="composites" label="Composites">
        Composites
      </PNav.Link>
      <p>
        These are more advanced components, often embodying more abstract structure or user
        interface conventions (e.g. page navigation), this make them more opinionated and less
        flexible, but also more powerful for specific use cases.
      </p>
      <p>
        For instance, Page Navigation composites make uses of contexts to track down links to
        provide an appendix.
      </p>

      <PNav.Link as="h3" level={2} id="hooks" label="Hooks">
        Hooks
      </PNav.Link>
      <p>
        Hooks are utility functions that manage behavioral logic in your components, they often
        contains their own state and wrap other qwik.js hooks (useSignal, useContext...).
      </p>
      <PNav.Link as="h3" level={2} id="primitives" label="Primitives">
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
