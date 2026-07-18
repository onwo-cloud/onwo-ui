import {
  component$,
  Slot,
  useContext,
  useContextProvider,
  useStore,
  useSignal,
  useOn,
  useTask$,
  $
} from '@qwik.dev/core';
import { KeybindRegistryContext } from './context';
import type { KeybindContextStore, KeybindModule, KeybindRegistryControls } from './types';
import { normalizeEventKey, isEditableElement, isPrintableKey } from './utils';
import { defaultModule } from './modules';
import { withAs } from '~primitives/utils/as';

type KeybindRegistryControlProps = {
  modules?: KeybindModule[];
  ignoreInputs?: boolean;
  controls?: KeybindRegistryControls;
};

export const KeybindRegistryControl = withAs('div')<KeybindRegistryControlProps>(component$(({ As, ...props }) => {
  const parentCtx = useContext(KeybindRegistryContext, null);

  const fallbackStore = useStore<KeybindContextStore>(
    {
      modules: props.modules || parentCtx?.modules || [defaultModule],
      ignoreInputs: props.ignoreInputs ?? parentCtx?.ignoreInputs ?? true,
      keybinds: [],
      capture: null,
    },
    { deep: true }
  );

  const localStore = props.controls?.store ?? fallbackStore;

  useTask$(({ track }) => {
    track(() => parentCtx?.modules);
    if (parentCtx?.modules) {
      for (const mod of parentCtx.modules) {
        if (!localStore.modules.some((m) => m.name === mod.name)) {
          localStore.modules.push(mod);
        }
      }
    }
  });

  const bufferSignal = useSignal<string[]>([]);
  const timerSignal = useSignal<number | null>(null);
  const recentExecutedSignal = useSignal<{ key: string; timestamp: number }[]>([]);

  useContextProvider(KeybindRegistryContext, localStore);

  useOn(
    'keydown',
    $(async (event: KeyboardEvent) => {
      if (['Control', 'Meta', 'Alt', 'Shift'].includes(event.key)) return;
      if (localStore.ignoreInputs && isEditableElement(document.activeElement)) return;

      if (parentCtx?.modules) {
        for (const mod of parentCtx.modules) {
          if (!localStore.modules.some((m) => m.name === mod.name)) {
            localStore.modules.push(mod);
          }
        }
      }

      const activeCapture = localStore.capture ?? parentCtx?.capture;

      const normalizedKey = normalizeEventKey(event);

      const clearTimer = () => {
        if (timerSignal.value !== null) {
          clearTimeout(timerSignal.value);
          timerSignal.value = null;
        }
      };

      const resolveActionForPhysicalKey = (rawKey: string): string | null => {
        for (const mod of localStore.modules) {
          if (mod.mappings && mod.mappings[rawKey]) {
            return mod.mappings[rawKey];
          }
        }
        return null;
      };

      const isSequenceBound = (rawKey: string): boolean => {
        const mappedAction = resolveActionForPhysicalKey(rawKey);
        return localStore.keybinds.some(
          (item) => item.target.key === rawKey || (Boolean(mappedAction) && item.target.action === mappedAction)
        );
      };

      const isSequencePrefix = (rawKey: string): boolean => {
        const prefixWithSpace = rawKey + ' ';
        for (const item of localStore.keybinds) {
          if (item.target.key && item.target.key.startsWith(prefixWithSpace)) return true;
        }
        for (const mod of localStore.modules) {
          if (mod.mappings) {
            for (const [key, action] of Object.entries(mod.mappings)) {
              if (key.startsWith(prefixWithSpace)) {
                const isActionRegistered = localStore.keybinds.some((item) => item.target.action === action);
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

        for (const item of localStore.keybinds) {
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
        if (keyIsBound) {
          (event as any).__keybindHandled = true;
          event.stopPropagation();
          event.preventDefault();
          clearTimer();
          bufferSignal.value = [];
          recentExecutedSignal.value = [];
          await triggerKeybinds(normalizedKey);
        }
        return;
      }

      // LOOKBACK RECOVERY CHECK
      const lookbackWindow = activeCapture?.lookback ?? 300;
      const now = Date.now();
      const validLookbackKeys = (lookbackWindow > 0 && !event.repeat)
        ? recentExecutedSignal.value.filter((item) => now - item.timestamp <= lookbackWindow)
        : [];

      if (validLookbackKeys.length > 0 && activeCapture && !keyIsBound && !keyIsPrefix) {
        const recoveredText = validLookbackKeys.map((item) => item.key).join('');
        const fullText = recoveredText + normalizedKey;

        recentExecutedSignal.value = [];
        bufferSignal.value = [];
        clearTimer();

        (event as any).__keybindHandled = true;
        event.stopPropagation();
        event.preventDefault();
        await activeCapture.handler(fullText);
        return;
      }

      // NO LOCAL MATCH
      if (!keyIsBound && !keyIsPrefix && bufferSignal.value.length === 0) {
        if (activeCapture) {
          (event as any).__keybindHandled = true;
          event.stopPropagation();
          event.preventDefault();
          await activeCapture.handler(normalizedKey);
        }
        return;
      }

      // LOCAL MATCH FOUND
      (event as any).__keybindHandled = true;
      event.stopPropagation();
      event.preventDefault();
      clearTimer();

      if (event.ctrlKey || event.metaKey || event.altKey || event.repeat) {
        bufferSignal.value = [];
        recentExecutedSignal.value = [];
        if (keyIsBound) {
          await triggerKeybinds(normalizedKey);
        }
        return;
      }

      const currentBuffer = bufferSignal.value;
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
          if (activeCapture) {
            await activeCapture.handler(newBuffer.join(''));
          }
          return;
        }
      } else {
        bufferSignal.value = newBuffer;
      }

      const delay = activeCapture?.delay ?? 200;
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

          if (!handled && activeCapture) {
            await activeCapture.handler(pendingBuffer.join(''));
          }
        }
      }, delay);

      timerSignal.value = timerId as unknown as number;
    })
  );

  return (
    <As
      {...props}
      tabIndex={props.tabIndex ?? -1}
    >
      <Slot />
    </As>
  );
}));
