import { type QRL, useVisibleTask$, $ } from '@qwik.dev/core';

// --- Types ---
export type LogKind = 'info' | 'warn' | 'error' | 'debug';

export interface LogEvent {
  kind: LogKind;
  message: string;
  args: unknown[];
  timestamp: Date;
}

export type LogObserver = (event: LogEvent) => void;

// --- Vanilla Functional Logger Utility ---
export function createLogger() {
  const observers = new Set<LogObserver>();

  const emit = (kind: LogKind, message: string, args: unknown[]) => {
    const event: LogEvent = { kind, message, args, timestamp: new Date() };
    observers.forEach((observer) => observer(event));
  };

  return {
    observe(observer: LogObserver) {
      observers.add(observer);
      return () => observers.delete(observer);
    },
    log: (message: string, ...args: unknown[]) => emit('info', message, args),
    info: (message: string, ...args: unknown[]) => emit('info', message, args),
    warn: (message: string, ...args: unknown[]) => emit('warn', message, args),
    error: (message: string, ...args: unknown[]) => emit('error', message, args),
    debug: (message: string, ...args: unknown[]) => emit('debug', message, args),
  };
}

// --- Module Singleton ---
const defaultLogger = createLogger();

// --- Qwik Hook ---
export const useLogger = () => {
  return {
    log$: $(defaultLogger.log),
    info$: $(defaultLogger.info),
    warn$: $(defaultLogger.warn),
    error$: $(defaultLogger.error),
    debug$: $(defaultLogger.debug),
    useObserve$: $((observerQrl: QRL<LogObserver>) => {
      useVisibleTask$(({ cleanup }) => {
        const unsubscribe = defaultLogger.observe((event) => {
          // Fix 1: Call QRL directly as a function
          observerQrl(event);
        });

        cleanup(() => {
          // Fix 2: Wrap in block so return type is `void` instead of `boolean`
          unsubscribe();
        });
      }, { strategy: 'document-ready' });
    }),
  };
};

export type UseLoggerRet = ReturnType<typeof useLogger>;
