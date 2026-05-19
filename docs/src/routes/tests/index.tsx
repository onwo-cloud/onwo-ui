import {
  component$,
  createContextId,
  Slot,
  useContext,
  useContextProvider,
} from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const RegistryContext = createContextId<{ registryKey: number }>('context.onwo.registry');

let registryKeyInc: number = 0;
let registry: any = {};

const RegistryProvider = component$((props: { registryKey: number }) => {
  useContextProvider(RegistryContext, { registryKey: props.registryKey });
  return (
    <div>
      <Slot />
    </div>
  );
});

export const createRegistry = (data: any) => {
  let registryKey = ++registryKeyInc;
  registry[registryKey] = data;
  return ({ children }: any) => {
    return <RegistryProvider registryKey={registryKey}>{children}</RegistryProvider>;
  };
};

const useRegistry = () => {
  const data = useContext(RegistryContext);
  return registry[data.registryKey] as any;
};

// USAGE:

const createComp = (n: string) => component$(() => <div>{n}</div>);

const MyProvider = createRegistry({
  test: createComp('hello 2'),
});

const LoadComp = component$((props: { name: string }) => {
  const data = useRegistry();

  const D = data[props.name];

  return (
    <div>
      <D />
    </div>
  );
});

const Content = component$(() => {
  return (
    <div>
      <p> Here </p>
      <LoadComp name="test" />
      <Link href="#">tes</Link>
    </div>
  );
});

export default () => (
  <MyProvider>
    <Content />
  </MyProvider>
);
