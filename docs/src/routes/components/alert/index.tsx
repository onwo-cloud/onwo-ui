import type { DocumentHead } from '@builder.io/qwik-city';
import { Icons } from '@onwo/icons';
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
      breadcrumbs={[{ label: 'Alert', url: '/components/alert' }]}
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
          <Alert.Title>
            <Icons.OtherFrame size="md" />
            Alert with title and icon
          </Alert.Title>
          <Alert.Message> Alert message </Alert.Message>
          <Alert.Close />
        </Alert>
      }
      code={`<Alert>
  <Alert.Title>
    <Icons.OtherFrame size="md" />
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
            <Alert.Message>
              <Icons.OtherFrame size="md" class="text-roshi" />
              Generic style with coloured icon
            </Alert.Message>
            <Alert.Close />
          </Alert>
          <Alert class="bg-transparent outline outline-1 outline-offset-[-1px] outline-roshi">
            <Alert.Message>
              <Icons.OtherFrame class="text-roshi" size="md" />
              Outline style
            </Alert.Message>
            <Alert.Close />
          </Alert>
          <Alert class="bg-roshi-10">
            <Alert.Message>
              <Icons.OtherFrame class="text-roshi" size="md" />
              Colourful style
            </Alert.Message>
            <Alert.Close />
          </Alert>
        </div>
      }
      code={`<Alert>
  <Alert.Message>
    <Icons.OtherFrame size="md" class="text-roshi" />
    Generic style with coloured icon
  </Alert.Message>
  <Alert.Close />
</Alert>

<Alert class="bg-transparent outline outline-1 outline-offset-[-1px] outline-roshi">
  <Alert.Message>
    <Icons.OtherFrame class="text-roshi" size="md" />
    Outline style
  </Alert.Message>
  <Alert.Close />
</Alert>

<Alert class="bg-roshi-10">
  <Alert.Message>
    <Icons.OtherFrame class="text-roshi" size="md" />
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
