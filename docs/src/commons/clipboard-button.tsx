import { $, component$ } from '@builder.io/qwik';
import { Icon } from '~/utils/icon'
import { Button } from '@onwo/ui/button';
import { useToastCreate } from '@onwo/ui/toaster';

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
      <Icon i="clipboard"  size="lg"  />
    </Button>
  );
});
