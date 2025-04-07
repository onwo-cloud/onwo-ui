import type { DocumentHead } from '@builder.io/qwik-city';
import { Accordion } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Accordion"
      description="Organize content in collapsible UI elements"
      breadcrumbs={[{ label: 'Accordion', to: '/components/accordion' }]}
    />

    <div class="onwo-format">
      <p>
        An accordion in HTML/CSS is a collapsible content panel that allows users to toggle sections
        open and closed, benefiting user experience by conserving screen space while organizing
        complex information hierarchically.
      </p>
    </div>
    <Anatomy
      variants={{
        Default: `import { Accordion } from '@onwo/ui';

<Accordion>
  <Accordion.Item>
    <Accordion.Trigger>...</Accordion.Trigger>
    <Accordion.Content>...</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Trigger>...</Accordion.Trigger>
    <Accordion.Content>...</Accordion.Content>
  </Accordion.Item>
</Accordion>
`,
      }}
    />

    <Showcase
      title="Default"
      component={
        <Accordion class="w-full">
          <Accordion.Item>
            <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
            <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Trigger>Is it styled?</Accordion.Trigger>
            <Accordion.Content>
              Yes. It comes with default styles that matches the other components&apos; aesthetic.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Trigger>Is it animated?</Accordion.Trigger>
            <Accordion.Content>
              Yes. It's animated by default, but you can disable it if you prefer.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      }
      code={`<Accordion class="w-full">
  <Accordion.Item>
    <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
    <Accordion.Content> ... </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Trigger>Is it styled?</Accordion.Trigger>
    <Accordion.Content> ... </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Trigger>Is it animated?</Accordion.Trigger>
    <Accordion.Content> ... </Accordion.Content>
  </Accordion.Item>
</Accordion>`}
    />

    <Showcase
      title="Single open"
      component={
        <Accordion singleOpen class="w-full">
          <Accordion.Item>
            <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
            <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item defaultOpen>
            <Accordion.Trigger>Is it styled?</Accordion.Trigger>
            <Accordion.Content>
              Yes. It comes with default styles that matches the other components&apos; aesthetic.
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item>
            <Accordion.Trigger>Is it animated?</Accordion.Trigger>
            <Accordion.Content>
              Yes. It's animated by default, but you can disable it if you prefer.
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      }
      code={`<Accordion singleOpen class="w-full">
  <Accordion.Item>
    <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
    <Accordion.Content> ... </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item defaultOpen>
    <Accordion.Trigger>Is it styled?</Accordion.Trigger>
    <Accordion.Content> ... </Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Trigger>Is it animated?</Accordion.Trigger>
    <Accordion.Content> ... </Accordion.Content>
  </Accordion.Item>
</Accordion>`}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Accordion. - Onwo UI',
  description:
    'Customizable accordion components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
