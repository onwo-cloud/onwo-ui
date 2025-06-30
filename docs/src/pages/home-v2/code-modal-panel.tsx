import { XIcon } from '@onwo/icons';
import { styledcn } from '@onwo/primitives';
import { Description as PDescription } from '@onwo/primitives/modal';
import { Button, ModalClose, ModalFooter, ModalPanel, ModalTitle } from '@onwo/ui';

export const CodePanelHeader = styledcn.tag('header')`p-4 bg-parchment border-b border-line`;

const CodePanelContent = styledcn(PDescription)`p-4`;

export type CodePanelProps = {
  code: string;
};

export const CodeModalPanel = (props: CodePanelProps) => (
  <ModalPanel>
    <CodePanelHeader class="flex justify-between">
      <ModalTitle class="font-medium">Opened a modal</ModalTitle>
      <ModalClose>
        <Button as="div" size="xs" variant="ghost">
          <XIcon size="xs" />
        </Button>
      </ModalClose>
    </CodePanelHeader>
    <CodePanelContent>{props.code}</CodePanelContent>
    <ModalFooter class="flex gap-4 justify-between">
      <ModalClose>
        <Button as="div" size="sm" variant="ghost">
          Cancel
        </Button>
      </ModalClose>
      <ModalClose>
        <Button as="div" size="sm">
          Save changes
        </Button>
      </ModalClose>
    </ModalFooter>
  </ModalPanel>
);
