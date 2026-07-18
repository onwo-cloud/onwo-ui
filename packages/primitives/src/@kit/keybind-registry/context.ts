import { createContextId } from '@qwik.dev/core';
import type { KeybindContextStore } from './types';

export interface KeybindScopeStore {
  scopeId: string;
  priority: number;
  active: boolean;
}

export const KeybindRegistryContext =
  createContextId<KeybindContextStore>('qwik-global-keybinds-ctx');

export const KeybindScopeContext =
  createContextId<KeybindScopeStore>('qwik-keybinds-scope-ctx');
