import { LucideIconSet } from '@onwo/iconset-lucide';
import { dynamicIcon } from '@onwo/icons';
import { component$ } from '@qwik.dev/core';
import type { DocumentHead } from '@qwik.dev/router';
import { createUiProvider, UiIcon } from '~/utils/icon-provider';

export const Icon = dynamicIcon()
  .provide(LucideIconSet, { default: true })
  .build();

export const UIProvider = createUiProvider({
  'chevron-left': Icon.named('chevron-left'),
  'chevron-right': Icon.named('chevron-right'),
  'chevron-down': Icon.named('chevron-down'),
  'chevron-up': Icon.named('chevron-up'),
  check: Icon.named('check'),
  x: Icon.named('x'),
  'circle-check': Icon.named('circle-check'),
  'circle-alert': Icon.named('circle-alert'),
  'circle-question-mark': Icon.named('circle-question-mark'),
  'triangle-alert': Icon.named('triangle-alert'),
});

export default component$(() => {
  return (
    <UIProvider>
      <UiIcon name="chevron-up" />
    </UIProvider>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
