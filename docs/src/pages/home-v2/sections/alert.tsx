import { Alert } from '@onwo/ui';
import type { BoxedComp, Section } from '.';

const withControlAlert: BoxedComp = {
  title: 'With control',
  display: () => (
    <Alert>
      <Alert.Title>Alert with title and icon</Alert.Title>
      <Alert.Message> Alert message </Alert.Message>
      <Alert.Close />
    </Alert>
  ),
  code: `<Alert>
  <Alert.Title>
    <OtherFrameIcon size="md" />
    Alert with title and icon
  </Alert.Title>
  <Alert.Message> Alert message </Alert.Message>
  <Alert.Close onClick$={/* control unmount here */} />
</Alert>`,
};

const customizationAlert: BoxedComp = {
  title: 'Customization',
  display: () => (
    <div class="flex flex-col gap-4">
      <Alert>
        <Alert.Message>Generic style with coloured icon</Alert.Message>
        <Alert.Close />
      </Alert>
      <Alert class="bg-transparent outline outline-1 outline-offset-[-1px] outline-success">
        <Alert.Message>Outline style</Alert.Message>
        <Alert.Close />
      </Alert>
      <Alert class="bg-success-10">
        <Alert.Message>Colourful style</Alert.Message>
        <Alert.Close />
      </Alert>
    </div>
  ),
  code: `<Alert>
  <Alert.Message>
    <OtherFrameIcon size="md" class="text-success" />
    Generic style with coloured icon
  </Alert.Message>
  <Alert.Close />
</Alert>
<Alert class="bg-transparent outline outline-1 outline-offset-[-1px] outline-success">
  <Alert.Message>
    <OtherFrameIcon class="text-success" size="md" />
    Outline style
  </Alert.Message>
  <Alert.Close />
</Alert>
<Alert class="bg-success-10">
  <Alert.Message>
    <OtherFrameIcon class="text-success" size="md" />
    Colourful style
  </Alert.Message>
  <Alert.Close />
</Alert>`,
};

export const section: Section = {
  title: 'Alert',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/alert',
  description: 'Communicate an important and usually time-sensitive message to the user.',
  components: [withControlAlert, customizationAlert],
};
