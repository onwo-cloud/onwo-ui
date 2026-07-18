import type { QRL } from '@qwik.dev/core';

export interface KeybindModule {
  name: string;
  mappings: Record<string, string>;
}

export interface CaptureRegistration {
  delay: number;
  lookback?: number;
  handler: CaptureHandler;
}

export interface KeybindContextStore {
  modules: KeybindModule[];
  ignoreInputs: boolean;
  keybinds: KeybindRegistration[];
  capture: CaptureRegistration | null;
}

export interface KeybindRegistryControls {
  store: KeybindContextStore;
}

export interface KeybindTarget {
  action?: string;
  key?: string;
  controls?: KeybindRegistryControls;
}

export type KeybindHandler = QRL<() => void>;
export type CaptureHandler = QRL<(capturedText: string) => void>;

export interface KeybindRegistration {
  id: string;
  target: KeybindTarget;
  handler: KeybindHandler;
}
