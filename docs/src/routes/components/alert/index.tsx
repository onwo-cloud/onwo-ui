import type { DocumentHead } from '@builder.io/qwik-city';
import { Alert } from '@onwo/ui';
import { Anatomy } from '~/commons/anatomy';
import { PageHeadSection } from '~/commons/page-head-section';
import { Showcase } from '~/commons/showcase';
import { buildHead } from '~/utils/build-head';

export default () => (
  <div>
    <PageHeadSection
      title="Alert"
      description="Communicate an important and usually time-sensitive message to the user."
      breadcrumbs={[{ label: 'Alert', to: '/components/alert' }]}
    />

    <div class="onwo-format">
      <p>
        The component make use of the `alert` role which trigger comprehensive response to assistive
        technology products, it should only be used for information that requires the user's
        immediate attention, e.g.:
      </p>
      <ul>
        <li>An invalid value was entered into a form field</li>
        <li>The user's login session is about to expire</li>
        <li>The connection to the server was lost so local changes will not be saved</li>
      </ul>
    </div>

    <Anatomy
      variants={{
        Default: `import { Alert } from '@onwo/ui';

<Alert>
  <Alert.Title> ... </Alert.Title>
  <Alert.Message> ... </Alert.Message>
  <Alert.Close />
</Alert>`,
      }}
    />

    <Showcase
      title="With control"
      component={
        <Alert>
          <Alert.Title>Alert with title and icon</Alert.Title>
          <Alert.Message> Alert message </Alert.Message>
          <Alert.Close />
        </Alert>
      }
      code={`<Alert>
  <Alert.Title>
    <OtherFrameIcon size="md" />
    Alert with title and icon
  </Alert.Title>
  <Alert.Message> Alert message </Alert.Message>
  <Alert.Close onClick$={/* control unmount here */} />
</Alert>`}
    />

    <Showcase
      title="Customization"
      component={
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
      }
      code={`<Alert>
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
</Alert>`}
    />
  </div>
);

export const head: DocumentHead = buildHead({
  title: 'Alert - Onwo UI',
  description:
    'Customizable alert components using tailwind css and qwik.js for fast, responsive, and user-friendly interfaces. Explore our UI library for more components.',
});
