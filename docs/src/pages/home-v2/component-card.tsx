import type { PropsOf } from '@builder.io/qwik';
import { ClipboardIcon, CodeIcon } from '@onwo/icons';
import type { IconComponent } from '@onwo/primitives/svg-icon';
import { Modal, ModalTrigger, cn } from '@onwo/ui';
import { CodeModalPanel } from './code-modal-panel';

import type { BoxedComp } from './sections';
import { BORDER_CLASSES } from '.';

type CardButtonProps = {
  icon: IconComponent;
} & Omit<PropsOf<'div'>, 'class'>;

const CardButton = ({ icon: Icon, ...props }: CardButtonProps) => (
  <div
    class={cn(BORDER_CLASSES, 'p-1.5 rounded-full cursor-pointer hover:bg-parchment')}
    {...props}
  >
    <Icon size="xs" />
  </div>
);

export const ComponentCard = ({ title, height, display: Display }: BoxedComp) => (
  <div
    class={cn('relative rounded py-2 bg-white h-60', BORDER_CLASSES)}
    style={{ height: `calc(var(--spacing) * ${height ?? 60})` }}
  >
    <div class="absolute px-4 w-full flex justify-between items-center mb-2 mt-1">
      <span class="text-sm font-medium">{title}</span>
      <div class="flex gap-2">
        <Modal>
          <ModalTrigger class="block mx-auto">
            <CardButton icon={CodeIcon} />
          </ModalTrigger>
          <CodeModalPanel code="int main(int ac, char **av) {}" />
        </Modal>
        <CardButton icon={ClipboardIcon} />
      </div>
    </div>

    <div class="flex pt-4 items-center justify-center h-full">
      <Display />
    </div>
  </div>
);
