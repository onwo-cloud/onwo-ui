import { component$, $ } from '@qwik.dev/core';
import { Alert, AlertClose, AlertMessage, AlertTitle } from '@onwo/ui/alert';

import type { BoxedComp, ControlSchema, Section } from '.';

const alertControls = {
  title: {
    type: 'text',
    label: 'Title',
    default: 'Alert Title',
  },
  message: {
    type: 'text',
    label: 'Message',
    default: 'Alert message content goes here.',
  },
  showClose: {
    type: 'boolean',
    label: 'Show Close Button',
    default: true,
  },
} as const satisfies ControlSchema;

const withControlAlert: BoxedComp<typeof alertControls> = {
  title: 'Default Playground',
  controls: alertControls,
  display: component$(({ controls }) => (
    <Alert>
      {controls.title && <AlertTitle>{controls.title}</AlertTitle>}
      <AlertMessage>{controls.message}</AlertMessage>
      {controls.showClose && <AlertClose />}
    </Alert>
  )),
  code: $((values) => {
    const titleBlock = values.title ? `\n  <AlertTitle>${values.title}</AlertTitle>` : '';
    const closeBlock = values.showClose ? '\n  <AlertClose />' : '';
    return `import { Alert, AlertClose, AlertMessage, AlertTitle } from '@onwo/ui/alert';

<Alert>${titleBlock}
  <AlertMessage>${values.message}</AlertMessage>${closeBlock}
</Alert>`;
  }),
};

const customizationAlert: BoxedComp = {
  title: 'Customization',
  display: component$(() => (
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
  )),
  code: $(() => `import { Alert, AlertClose, AlertMessage } from '@onwo/ui/alert';

<Alert>
  <AlertMessage>
    <Icon i="other-frame" size="md" class="text-success" />
    Generic style with coloured icon
  </AlertMessage>
  <AlertClose />
</Alert>

<Alert class="bg-transparent outline outline-1 outline-offset-[-1px] outline-success">
  <AlertMessage>
    <Icon i="other-frame" class="text-success" size="md" />
    Outline style
  </AlertMessage>
  <AlertClose />
</Alert>

<Alert class="bg-success-10">
  <AlertMessage>
    <Icon i="other-frame" class="text-success" size="md" />
    Colourful style
  </AlertMessage>
  <AlertClose />
</Alert>`),
};

export const section: Section = {
  title: 'Alert',
  link: 'https://github.com/onwo-cloud/onwo-ui/tree/main/packages/ui/src/components/alert',
  description: 'Communicate an important and usually time-sensitive message to the user.',
  default: withControlAlert,
  others: [customizationAlert],
};
