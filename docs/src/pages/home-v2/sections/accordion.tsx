import { styledcn } from '@onwo/primitives';
import { Accordion } from '@onwo/ui';
import type { BoxedComp, Section } from '.';

const ContainerAccordion = styledcn.tag('div')`px-16 w-full`;

const defaultAccordion: BoxedComp = {
  title: 'Default',
  height: 82,
  display: () => (
    <ContainerAccordion>
      <Accordion.Root class="w-full">
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
      </Accordion.Root>
    </ContainerAccordion>
  ),
  code: `import { Accordion } from '@onwo/ui';

<Accordion.Root class="w-full">
  <Accordion.Item>
    <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
    <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Trigger>Is it styled?</Accordion.Trigger>
    <Accordion.Content>Yes. It comes with default styles that matches the other components' aesthetic.</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Trigger>Is it animated?</Accordion.Trigger>
    <Accordion.Content>Yes. It's animated by default, but you can disable it if you prefer.</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>`,
};

const singleOpenAccordion: BoxedComp = {
  title: 'Single open',
  height: 82,
  display: () => (
    <ContainerAccordion>
      <Accordion.Root singleOpen class="w-full">
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
      </Accordion.Root>
    </ContainerAccordion>
  ),
  code: `import { Accordion } from '@onwo/ui';

<Accordion.Root singleOpen class="w-full">
  <Accordion.Item>
    <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
    <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item defaultOpen>
    <Accordion.Trigger>Is it styled?</Accordion.Trigger>
    <Accordion.Content>Yes. It comes with default styles that matches the other components' aesthetic.</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Trigger>Is it animated?</Accordion.Trigger>
    <Accordion.Content>Yes. It's animated by default, but you can disable it if you prefer.</Accordion.Content>
  </Accordion.Item>
</Accordion.Root>`,
};

export const section: Section = {
  title: 'Accordion',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/accordion',
  description: 'Organize content in collapsible UI elements',
  components: [defaultAccordion, singleOpenAccordion],
};
