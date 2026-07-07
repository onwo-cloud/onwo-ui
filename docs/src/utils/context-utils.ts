import { createContextId, useContext, useContextProvider } from '@qwik.dev/core';

export const initContext = <T>(name: string) => {
  const contextId = createContextId<T>(name);

  const use = () => useContext(contextId);
  const useProvider = (data: T) => {
    useContextProvider(contextId, data);
    return data;
  };

  return { use, useProvider };
};
