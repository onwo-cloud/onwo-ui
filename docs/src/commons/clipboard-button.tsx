import { $, component$ } from '@builder.io/qwik';
import { FilesClipboardTextIcon } from '@onwo/icons';
import { Button } from '@onwo/ui';
import { useToastCreate } from './toaster';

export const ClipboardButton = component$(({ textToCopy }: { textToCopy: string }) => {
  const { success } = useToastCreate();

  return (
    <Button
      variant="ghost"
      class="rounded-md w-8 h-8"
      onClick$={$(async () => {
        await navigator.clipboard.writeText(textToCopy);
        success('Copied to clipboard', {});
      })}
    >
      <FilesClipboardTextIcon size="lg" />
    </Button>
  );
});
