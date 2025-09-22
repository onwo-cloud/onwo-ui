import type { DocumentHead } from '@builder.io/qwik-city';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@onwo/ui';
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
  <AccordionItem>
    <AccordionTrigger>...</AccordionTrigger>
    <AccordionContent>...</AccordionContent>
  </AccordionItem>
  <AccordionItem>
    <AccordionTrigger>...</AccordionTrigger>
    <AccordionContent>...</AccordionContent>
  </AccordionItem>
</Accordion>
`,
      }}
    />

    <Showcase
      title="Default"
      component={
        <Accordion class="w-full">
          <AccordionItem>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      }
      code={`<Accordion class="w-full">
  <AccordionItem>
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent> ... </AccordionContent>
  </AccordionItem>
  <AccordionItem>
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent> ... </AccordionContent>
  </AccordionItem>
  <AccordionItem>
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent> ... </AccordionContent>
  </AccordionItem>
</Accordion>`}
    />

    <Showcase
      title="Single open"
      component={
        <Accordion singleOpen class="w-full">
          <AccordionItem>
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
          </AccordionItem>
          <AccordionItem defaultOpen>
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      }
      code={`<Accordion singleOpen class="w-full">
  <AccordionItem>
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent> ... </AccordionContent>
  </AccordionItem>
  <AccordionItem defaultOpen>
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent> ... </AccordionContent>
  </AccordionItem>
  <AccordionItem>
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent> ... </AccordionContent>
  </AccordionItem>
</Accordion>`}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Accordion - Onwo UI',
  description:
    'Customizable accordion components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
