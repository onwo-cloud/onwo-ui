import { XIcon } from '@onwo/icons';
import { styledcn } from '@onwo/primitives';
import { Description as PDescription } from '@onwo/primitives/modal';
import { Button, Modal } from '@onwo/ui';

export const CodePanelHeader = styledcn.tag('header')`p-4 bg-parchment border-b border-line`;

const CodePanelContent = styledcn(PDescription)`p-4`;

export type CodePanelProps = {
  code: string;
};

export const CodeModalPanel = (props: CodePanelProps) => (
  <Modal.Panel>
    <CodePanelHeader class="flex justify-between">
      <Modal.Title class="font-medium">Opened a modal</Modal.Title>
      <Modal.Close>
        <Button as="div" size="xs" variant="ghost">
          <XIcon size="xs" />
        </Button>
      </Modal.Close>
    </CodePanelHeader>
    <CodePanelContent>{props.code}</CodePanelContent>
    <Modal.Footer class="flex gap-4 justify-between">
      <Modal.Close>
        <Button as="div" size="sm" variant="ghost">
          Cancel
        </Button>
      </Modal.Close>
      <Modal.Close>
        <Button as="div" size="sm">
          Save changes
        </Button>
      </Modal.Close>
    </Modal.Footer>
  </Modal.Panel>
);
