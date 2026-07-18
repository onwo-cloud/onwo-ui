import {
  component$,
  Slot,
  useContextProvider,
  useStore,
  useSignal,
  useOnDocument,
  useTask$,
  noSerialize,
  $
} from '@qwik.dev/core';
import { KeybindRegistryContext } from './context';
import type { KeybindContextStore, KeybindModule, KeybindRegistryControls } from './types';
import { normalizeEventKey, isEditableElement, isPrintableKey } from './utils';
import { defaultModule } from './modules';

export interface KeybindRegistryProviderProps {
  modules?: KeybindModule[];
  ignoreInputs?: boolean;
  controls?: KeybindRegistryControls;
}

export const KeybindRegistryProvider = component$<KeybindRegistryProviderProps>((props) => {
  const userModules = props.modules || [];
  const allModules = [...userModules, defaultModule];

  const fallbackStore = useStore<KeybindContextStore>(
    {
      modules: allModules,
      ignoreInputs: props.ignoreInputs ?? true,
      keybinds: [],
      capture: null,
    },
    { deep: true }
  );

  const store = props.controls?.store ?? fallbackStore;

  useTask$(({ track }) => {
    track(() => props.modules);
    if (props.modules) {
      for (const mod of props.modules) {
        if (!store.modules.some((m) => m.name === mod.name)) {
          store.modules.unshift(mod);
        }
      }
    }
  });

  const bufferSignal = useSignal<string[]>([]);
  const timerSignal = useSignal<number | null>(null);
  const recentExecutedSignal = useSignal<{ key: string; timestamp: number }[]>([]);

  useContextProvider(KeybindRegistryContext, store);

  useOnDocument(
    'keydown',
    $(async (event: KeyboardEvent) => {
      if ((event as any).__keybindHandled || event.defaultPrevented) return;

      const target = event.target as HTMLElement | null;
      const controlEl = target?.closest?.('[data-control-id]');

      if (controlEl && controlEl.getAttribute('data-control-id') !== 'header') {
        return;
      }

      if (['Control', 'Meta', 'Alt', 'Shift'].includes(event.key)) return;
      if (store.ignoreInputs && isEditableElement(document.activeElement)) return;

      const normalizedKey = normalizeEventKey(event);

      const clearTimer = () => {
        if (timerSignal.value !== null) {
          clearTimeout(timerSignal.value);
          timerSignal.value = null;
        }
      };

      const resolveActionForPhysicalKey = (rawKey: string): string | null => {
        for (const mod of store.modules) {
          if (mod.mappings && mod.mappings[rawKey]) {
            return mod.mappings[rawKey];
          }
        }
        return null;
      };

      const isSequenceBound = (rawKey: string): boolean => {
        const mappedAction = resolveActionForPhysicalKey(rawKey);
        return store.keybinds.some(
          (item) => item.target.key === rawKey || (Boolean(mappedAction) && item.target.action === mappedAction)
        );
      };

      const isSequencePrefix = (rawKey: string): boolean => {
        const prefixWithSpace = rawKey + ' ';
        for (const item of store.keybinds) {
          if (item.target.key && item.target.key.startsWith(prefixWithSpace)) return true;
        }
        for (const mod of store.modules) {
          if (mod.mappings) {
            for (const [key, action] of Object.entries(mod.mappings)) {
              if (key.startsWith(prefixWithSpace)) {
                const isActionRegistered = store.keybinds.some((item) => item.target.action === action);
                if (isActionRegistered) return true;
              }
            }
          }
        }
        return false;
      };

      const triggerKeybinds = async (rawKey: string): Promise<boolean> => {
        const mappedAction = resolveActionForPhysicalKey(rawKey);
        let executed = false;

        for (const item of store.keybinds) {
          const matchesKey = item.target.key && item.target.key === rawKey;
          const matchesAction = item.target.action && item.target.action === mappedAction;

          if (matchesKey || matchesAction) {
            await item.handler();
            executed = true;
          }
        }
        return executed;
      };

      const keyIsBound = isSequenceBound(normalizedKey);
      const keyIsPrefix = isSequencePrefix(normalizedKey);

      // NON-PRINTABLE KEYS
      if (!isPrintableKey(normalizedKey)) {
        clearTimer();
        bufferSignal.value = [];
        recentExecutedSignal.value = [];
        if (keyIsBound) {
          event.preventDefault();
          await triggerKeybinds(normalizedKey);
        }
        return;
      }

      if (event.ctrlKey || event.metaKey || event.altKey) {
        clearTimer();
        bufferSignal.value = [];
        recentExecutedSignal.value = [];
        if (keyIsBound) {
          event.preventDefault();
          await triggerKeybinds(normalizedKey);
        }
        return;
      }

      if (event.repeat) {
        if (keyIsBound) {
          clearTimer();
          bufferSignal.value = [];
          recentExecutedSignal.value = [];
          event.preventDefault();
          await triggerKeybinds(normalizedKey);
        }
        return;
      }

      // Lookback recovery check
      const lookbackWindow = store.capture?.lookback ?? 300;
      const now = Date.now();
      const validLookbackKeys = (lookbackWindow > 0 && !event.repeat)
        ? recentExecutedSignal.value.filter((item) => now - item.timestamp <= lookbackWindow)
        : [];

      if (validLookbackKeys.length > 0 && store.capture && !keyIsBound && !keyIsPrefix) {
        const recoveredText = validLookbackKeys.map((item) => item.key).join('');
        const fullText = recoveredText + normalizedKey;

        recentExecutedSignal.value = [];
        bufferSignal.value = [];
        clearTimer();

        event.preventDefault();
        await store.capture.handler(fullText);
        return;
      }

      const currentBuffer = bufferSignal.value;

      if (!keyIsBound && !keyIsPrefix && currentBuffer.length === 0) {
        if (store.capture) {
          event.preventDefault();
          await store.capture.handler(normalizedKey);
        }
        return;
      }

      event.preventDefault();
      clearTimer();

      const newBuffer = [...currentBuffer, normalizedKey];

      if (newBuffer.length > 1) {
        const chordSequence = newBuffer.join(' ');
        const sequenceIsBound = isSequenceBound(chordSequence);
        const sequenceIsPrefix = isSequencePrefix(chordSequence);

        if (sequenceIsBound) {
          await triggerKeybinds(chordSequence);
          bufferSignal.value = [];
          return;
        }

        if (sequenceIsPrefix) {
          bufferSignal.value = newBuffer;
        } else if (keyIsBound || keyIsPrefix) {
          const pendingSeq = currentBuffer.join(' ');
          await triggerKeybinds(pendingSeq);
          const execTime = Date.now();
          recentExecutedSignal.value = [
            ...recentExecutedSignal.value.filter((item) => execTime - item.timestamp < 2000),
            { key: pendingSeq, timestamp: execTime },
          ];

          bufferSignal.value = [normalizedKey];
        } else {
          bufferSignal.value = [];
          if (store.capture) {
            await store.capture.handler(newBuffer.join(''));
          }
          return;
        }
      } else {
        bufferSignal.value = newBuffer;
      }

      const delay = store.capture?.delay ?? 200;
      const timerId = window.setTimeout(async () => {
        const pendingBuffer = bufferSignal.value;
        if (pendingBuffer.length > 0) {
          const pendingSeq = pendingBuffer.join(' ');
          bufferSignal.value = [];

          const handled = await triggerKeybinds(pendingSeq);
          const execTime = Date.now();

          recentExecutedSignal.value = [
            ...recentExecutedSignal.value.filter((item) => execTime - item.timestamp < 2000),
            { key: pendingSeq, timestamp: execTime },
          ];

          if (!handled && store.capture) {
            await store.capture.handler(pendingBuffer.join(''));
          }
        }
      }, delay);

      timerSignal.value = timerId as unknown as number;
    })
  );

  return <Slot />;
});
