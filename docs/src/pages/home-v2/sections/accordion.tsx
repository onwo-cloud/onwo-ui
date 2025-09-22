import { styledcn } from '@onwo/primitives';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@onwo/ui';
import type { BoxedComp, Section } from '.';

const ContainerAccordion = styledcn.tag('div')`px-16 w-full`;

const defaultAccordion: BoxedComp = {
  title: 'Default',
  height: 82,
  display: () => (
    <ContainerAccordion>
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
    </ContainerAccordion>
  ),
  code: `import { Accordion } from '@onwo/ui';

<Accordion class="w-full">
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
</Accordion>`,
};

const singleOpenAccordion: BoxedComp = {
  title: 'Single open',
  height: 82,
  display: () => (
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
  ),
  code: `import { Accordion } from '@onwo/ui';

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
</Accordion>`,
};

export const section: Section = {
  title: 'Accordion',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/accordion',
  description: 'Organize content in collapsible UI elements',
  components: [defaultAccordion, singleOpenAccordion],
};
