import { Alert, AlertClose, AlertMessage, AlertTitle } from '@onwo/ui';
import type { BoxedComp, Section } from '.';

const withControlAlert: BoxedComp = {
  title: 'With control',
  display: () => (
    <Alert>
      <AlertTitle>Alert with title and icon</AlertTitle>
      <AlertMessage> Alert message </AlertMessage>
      <AlertClose />
    </Alert>
  ),
  code: `<Alert>
  <AlertTitle>
    <OtherFrameIcon size="md" />
    Alert with title and icon
  </AlertTitle>
  <AlertMessage> Alert message </AlertMessage>
  <AlertClose onClick$={/* control unmount here */} />
</Alert>`,
};

const customizationAlert: BoxedComp = {
  title: 'Customization',
  display: () => (
    <div class="flex flex-col gap-4">
      <Alert>
        <AlertMessage>Generic style with coloured icon</AlertMessage>
        <AlertClose />
      </Alert>
      <Alert class="bg-transparent outline outline-1 outline-offset-[-1px] outline-success">
        <AlertMessage>Outline style</AlertMessage>
        <AlertClose />
      </Alert>
      <Alert class="bg-success-10">
        <AlertMessage>Colourful style</AlertMessage>
        <AlertClose />
      </Alert>
    </div>
  ),
  code: `<Alert>
  <AlertMessage>
    <OtherFrameIcon size="md" class="text-success" />
    Generic style with coloured icon
  </AlertMessage>
  <AlertClose />
</Alert>
<Alert class="bg-transparent outline outline-1 outline-offset-[-1px] outline-success">
  <AlertMessage>
    <OtherFrameIcon class="text-success" size="md" />
    Outline style
  </AlertMessage>
  <AlertClose />
</Alert>
<Alert class="bg-success-10">
  <AlertMessage>
    <OtherFrameIcon class="text-success" size="md" />
    Colourful style
  </AlertMessage>
  <AlertClose />
</Alert>`,
};

export const section: Section = {
  title: 'Alert',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/alert',
  description: 'Communicate an important and usually time-sensitive message to the user.',
  components: [withControlAlert, customizationAlert],
};
