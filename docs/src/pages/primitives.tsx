import { PageHeadSection } from '~/commons/page-head-section';

export const PrimitivesPage = () => (
  <div class="flex flex-col grow max-w-screen-xl">
    <PageHeadSection
      title="Primitives"
      breadcrumbs={[{ label: 'Primitives', url: '/primitives' }]}
    />
    <p>
      In our UI library, primitives are the unstyled building blocks that contain the core logic for
      various user interface elements. They serve as the foundation upon which styled components are
      built. This page will explain the goals of separating primitives from components.
    </p>

    <div class="flex flex-col gap-2">
      <h2>Goals of Separation</h2>
      <a href="#Goals">
        <h2 id="Goals" class="mt-10 text-onwo-24 font-medium">
          Why the separation?
        </h2>
      </a>
      <p>
        This is not exactly a new pattern, it became the standard for ui library design and we get a
        lot from it, here is a quick breakdown:
      </p>

      <ol>
        <li>
          <strong>1. Reusability</strong>: By isolating the logic in primitives, we can reuse them
          across different styled components, promoting consistency and reducing code duplication
          (e.g. there are differents variants of the tab component all relying on the same
          primitives)
        </li>
        <li>
          <strong>2. Flexibility</strong>: Separating the logic from the styling allows developers
          to create custom components with different visual appearances while maintaining the same
          functionality. Best example of this is how radix-ui is both the backbone of `shadcn` and
          `moon.io` react library.
        </li>
        <li>
          <strong>3. Maintainability</strong>: With a clear separation of concerns, it becomes
          easier to update and maintain the library. Changes to the logic can be made in the
          primitives without affecting the styles, and vice versa.
        </li>
        <li>
          <strong>4. Accessibility</strong>: By focusing on the core functionality in primitives, we
          can ensure that the library meets accessibility standards and provides a solid foundation
          for creating accessible components. The aria mechanisms are on the primitives, and all
          styling are done in the components.
        </li>
      </ol>

      <a href="#Next">
        <h2 id="Next" class="mt-10 text-onwo-24 font-medium">
          Next step: two libraries
        </h2>
      </a>
      <p>
        {' '}
        Ultimately primitives will belong in their own package under `@onwo/primitives` which will
        allow ui libraries to built on top of it without relying on the whole onwo ui library. We
        first need to stabilize this library though.
      </p>
    </div>
  </div>
);
