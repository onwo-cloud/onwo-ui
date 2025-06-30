import { $, component$ } from '@builder.io/qwik';
import { ClipboardIcon } from '@onwo/icons';
import { Button, useToastCreate } from '@onwo/ui';

export const ClipboardButton = component$(({ textToCopy }: { textToCopy: string }) => {
  const { success } = useToastCreate();

  return (
    <Button
      variant="ghost"
      class="rounded-md w-8 h-8"
      onClick$={$(async () => {
        try {
          await navigator.clipboard.writeText(textToCopy);
          console.log('in here');
          success('Copied to clipboard');
        } catch (error) {
          console.error(error);
        }
      })}
    >
      <ClipboardIcon size="lg" />
    </Button>
  );
});
