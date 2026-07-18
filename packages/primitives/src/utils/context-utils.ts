import { createContextId, useContext, useContextProvider } from '@qwik.dev/core';

/**
 * Creates an encapsulated, type-safe Qwik context factory bundle containing
 * context identification, a consumer hook (`use`), and a provider hook (`useProvider`).
 *
 * Usage:
 * `import { initContext } from '~primitives/utils/context-utils';`
 */
export const initContext = <T, P = T>(name: string, builder?: (v: P) => T) => {
  const contextId = createContextId<T>('onwo.' + name);

  /**
   * Reads the context from the nearest parent provider.
   */
  function use(): T;
  /**
   * Reads the context from the nearest parent provider, falling back to a default context value of type `T`.
   *
   * @param fallback - Default value of type `T` to return if context is missing in the render tree.
   */
  function use(fallback: T): T;
  function use(fallback?: T): T {
    return useContext(contextId, fallback) as T;
  }

  /**
   * Provides the context state to all child components within the current Qwik render tree.
   *
   * @param data - The input options or state required to construct the context.
   * @returns The fully constructed context instance (`T`).
   */
  const useProvider = (data: P): T => {
    const buildData = builder ? builder(data) : (data as unknown as T);
    useContextProvider(contextId, buildData);
    return buildData;
  };

  return { use, useProvider, contextId } as const;
};
