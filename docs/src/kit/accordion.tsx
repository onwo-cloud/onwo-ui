import { component$, $ } from '@qwik.dev/core';
import { styledcn } from '@onwo/primitives';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@onwo/ui/accordion';

import type { BoxedComp, ControlSchema, Section } from '.';

const ContainerAccordion = styledcn.tag('div')`px-16 w-full`;

const accordionControls = {
  singleOpen: {
    type: 'boolean',
    label: 'Single Open',
    default: false,
  },
} as const satisfies ControlSchema;

const defaultAccordion: BoxedComp<typeof accordionControls> = {
  title: 'Default Playground',
  colSpan: 2,
  controls: accordionControls,
  display: component$(({ controls }) => (
    <ContainerAccordion>
      <Accordion singleOpen={controls.singleOpen} class="w-full">
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
    </ContainerAccordion>
  )),
  code: $((values) => {
    const singleOpenProp = values.singleOpen ? ' singleOpen' : '';
    return `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@onwo/ui/accordion';

<Accordion${singleOpenProp} class="w-full">
  <AccordionItem>
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
  <AccordionItem>
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>Yes. It comes with default styles that matches the other components' aesthetic.</AccordionContent>
  </AccordionItem>
  <AccordionItem>
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
  </AccordionItem>
</Accordion>`;
  }),
};

const singleOpenAccordion: BoxedComp = {
  title: 'Single open',
  display: component$(() => (
    <ContainerAccordion>
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
    </ContainerAccordion>
  )),
  code: $(() => `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@onwo/ui/accordion';

<Accordion singleOpen class="w-full">
  <AccordionItem>
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
  </AccordionItem>
  <AccordionItem defaultOpen>
    <AccordionTrigger>Is it styled?</AccordionTrigger>
    <AccordionContent>Yes. It comes with default styles that matches the other components' aesthetic.</AccordionContent>
  </AccordionItem>
  <AccordionItem>
    <AccordionTrigger>Is it animated?</AccordionTrigger>
    <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
  </AccordionItem>
</Accordion>`),
};

export const section: Section = {
  title: 'Accordion',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/accordion',
  description: 'Organize content in collapsible UI elements',
  default: defaultAccordion,
  others: [singleOpenAccordion],
};
