import { useContext, useStore, useTask$, noSerialize, QRL } from '@qwik.dev/core';
import { KeybindRegistryContext } from './context';
import type {
  KeybindTarget,
  KeybindHandler,
  KeybindRegistryControls,
  KeybindContextStore,
  KeybindModule,
} from './types';
import { defaultModule } from './modules';

export const useKeybindRegistryControls = (initialOptions?: {
  modules?: KeybindModule[];
  ignoreInputs?: boolean;
}): KeybindRegistryControls => {
  const store = useStore<KeybindContextStore>(
    {
      modules: initialOptions?.modules || [defaultModule],
      ignoreInputs: initialOptions?.ignoreInputs ?? true,
      keybinds: [],
      capture: null,
    },
    { deep: true }
  );

  return { store };
};

export const useKeybindRegistry = (
  target: KeybindTarget,
  handler: KeybindHandler
) => {
  const contextStore = useContext(KeybindRegistryContext, null);
  const ctx = target.controls?.store ?? contextStore;

  if (!ctx) {
    throw new Error('useKeybindRegistry: Could not find KeybindRegistryContext.');
  }

  useTask$(({ cleanup }) => {
    const id = Math.random().toString(36).substring(2, 9);

    ctx.keybinds.push({
      id,
      target,
      handler,
    });

    cleanup(() => {
      if (typeof window === 'undefined') return;
      ctx.keybinds = ctx.keybinds.filter((item) => item.id !== id);
    });
  });
};

export const useKeybindCapture = (
  handler: QRL<(capturedText: string) => void>,
  options?: {
    delay?: number;
    lookback?: number;
    controls?: KeybindRegistryControls;
  },
) => {
  const contextStore = useContext(KeybindRegistryContext, null);
  const ctx = options?.controls?.store ?? contextStore;

  if (!ctx) {
    throw new Error('useKeybindCapture: Could not find KeybindRegistryContext.');
  }

  useTask$(({ cleanup }) => {
    let initialDelay = options?.delay ?? 100;
    let initialLookback = options?.lookback ?? Math.min(Math.round(initialDelay * 3), 400);

    ctx.capture = {
      delay: initialDelay,
      lookback: initialLookback,
      handler,
    };

    cleanup(() => {
      if (typeof window === 'undefined') return;
      ctx.capture = null;
      delete (ctx as any).__cpmTracker;
    });
  });
};
