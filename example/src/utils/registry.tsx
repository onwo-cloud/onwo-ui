import {
  component$,
  createContextId,
  Slot,
  useContext,
  useContextProvider,
  type JSXChildren,
} from '@qwik.dev/core';

export const RegistryContext = createContextId<{ registryKey: number }>('context.onwo.registry');

let registryKeyInc: number = 0;
const registry: Record<number, any> = {};

const RegistryProvider = component$((props: { registryKey: number }) => {
  useContextProvider(RegistryContext, { registryKey: props.registryKey });
  return <Slot />;
});

/**
 * Creates a registry entry and returns a Provider component.
 */
export const createRegistry = <T,>(data: T) => {
  const registryKey = ++registryKeyInc;
  registry[registryKey] = data;

  return ({ children }: { children: JSXChildren }) =>  <RegistryProvider registryKey={registryKey}>{children}</RegistryProvider>;
};

/**
 * Retrieves data from the registry using the current context key.
 */
export const useRegistry = <T,>(): T | null => {
  const data = useContext(RegistryContext, null);
  if (!data) return null;
  return registry[data.registryKey] as T;
};
