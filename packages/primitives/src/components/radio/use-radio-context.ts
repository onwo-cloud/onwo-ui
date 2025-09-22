import { initContext } from '~/utils/context-utils';

type RadioContextData = { name: string };

export const RadioContext = initContext<RadioContextData>('radio-context');
