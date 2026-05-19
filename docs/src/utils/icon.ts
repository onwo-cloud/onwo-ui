import { dynamicIcon } from '~icons/dynamic-icon';
import { createUiProvider } from '~ui/icon-provider';

// We avoid typechecking on all iconset; we just load the one we need via tsconfig.json
import { LucideIconSet } from '../../../packages/icons/packages/iconset-lucide/src';

export const Icon = dynamicIcon().provide(LucideIconSet, { default: true }).build();

export const UIProvider = createUiProvider({
  'chevron-left': Icon.named('chevron-left'),
  'chevron-right': Icon.named('chevron-right'),
  'chevron-down': Icon.named('chevron-down'),
  check: Icon.named('check'),
  x: Icon.named('x'),
  'circle-check': Icon.named('circle-check'),
  'circle-alert': Icon.named('circle-alert'),
  'circle-question-mark': Icon.named('circle-question-mark'),
  'triangle-alert': Icon.named('triangle-alert'),
});
