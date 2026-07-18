import {
  component$,
  createContextId,
  Slot,
  useContext,
  useContextProvider,
  useStore,
  useTask$,
  type JSXChildren,
} from '@qwik.dev/core';

const RegistryContext = createContextId<{ registryKey: number }>('context.onwo.registry');

let registryKeyInc = 0;
const registry: Record<number, any> = {};

export const RegistryProvider = component$((props: { registryKey: number }) => {
  const store = useStore({ registryKey: props.registryKey });

  // Track props.registryKey so Qwik updates the context store reactively
  useTask$(({ track }) => {
    const key = track(() => props.registryKey);
    store.registryKey = key;
  });

  useContextProvider(RegistryContext, store);
  return <Slot />;
});

/**
 * Creates a registry entry and returns a Provider component.
 */
export const createRegistry = <T,>(data: T) => {
  const registryKey = ++registryKeyInc;
  registry[registryKey] = data;

  return ({ children }: { children: JSXChildren }) => (
    <RegistryProvider registryKey={registryKey}>{children}</RegistryProvider>
  );
};

/**
 * Registers data dynamically and returns its registryKey.
 */
export const registerData = <T,>(data: T): number => {
  const registryKey = ++registryKeyInc;
  registry[registryKey] = data;
  return registryKey;
};

/**
 * Retrieves data from the registry using the current context key.
 */
export const useRegistry = <T,>(): T | null => {
  const store = useContext(RegistryContext, null);
  if (!store) return null;
  // Reading store.registryKey establishes a reactive subscription in Qwik
  return registry[store.registryKey] as T;
};
