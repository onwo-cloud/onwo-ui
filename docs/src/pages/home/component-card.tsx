import { $, component$, type PropsOf } from '@builder.io/qwik';
import { useToastCreate } from '@onwo/ui/toaster';
import type { BaseIconComponent } from '~primitives/@kit/svg-icon';

import { Icon } from '~/utils/icon';

import type { BoxedComp } from '../../kit';

type CardButtonProps = {
  icon: BaseIconComponent;
} & Omit<PropsOf<'div'>, 'class'>;

const CardButton = ({ icon: Icon, ...props }: CardButtonProps) => (
  <div
    class="bg-canvas-secondary hover:bg-canvas-secondary-hover rounded-xl p-1.5 rounded-full cursor-pointer hover:bg-parchment"
    {...props}
  >
    <Icon size="xs" />
  </div>
);

const ClipboardButton = component$(({ textToCopy }: { textToCopy: string }) => {
  const { success } = useToastCreate();
  return (
    <CardButton
      onClick$={$(async () => {
        try {
          await navigator.clipboard.writeText(textToCopy);
          console.log('in here');
          success('Copied to clipboard');
        } catch (error) {
          console.error(error);
        }
      })}
      icon={Icon.named('clipboard')}
    />
  );
});

export const ComponentCard = ({ title, display: Display }: BoxedComp) => (
  <div class="relative rounded py-2 h-60 border border-style-card rounded-xl">
    <div class="absolute px-4 w-full flex justify-between items-center mb-2 mt-1">
      <span class="text-sm font-medium">{title}</span>
      <div class="flex gap-2">
        <CardButton icon={Icon.named('code')} />
        <ClipboardButton textToCopy="" />
      </div>
    </div>

    <div class="flex pt-4 items-center justify-center h-full">
      <Display />
    </div>
  </div>
);
