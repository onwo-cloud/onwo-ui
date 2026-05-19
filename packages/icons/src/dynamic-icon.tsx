import { component$, useResource$, Resource, type Component } from '@builder.io/qwik';
import type { SvgIconProps } from '@onwo/primitives/svg-icon';
import { SvgIcon } from '@onwo/primitives/svg-icon';

export type PublicIconProps = Omit<SvgIconProps, 'viewBox' | 'children'>;

export interface IconData {
  body: string;
  viewBox: string;
}

export type LoaderMap = Record<string, () => Promise<unknown>>;

export interface IconSetProvider<Prefix extends string, Names extends string> {
  prefix: Prefix;
  loaders: LoaderMap;
  __names?: Names;
}

export interface DynamicIconOptions<
  Prefix extends string | undefined = undefined,
  IsDefault extends boolean = false,
> {
  prefix?: Prefix;
  default?: IsDefault;
}

export interface DynamicIconComponent<Names extends string> extends Component<
  PublicIconProps & { name: Names }
> {
  named: (name: Names) => Component<PublicIconProps>;
}

export interface DynamicIconBuilder<AccumulatedNames extends string> {
  provide<
    const SetPrefix extends string,
    Names extends string,
    const Prefix extends string | undefined = undefined,
    const IsDefault extends boolean = false,
  >(
    set: IconSetProvider<SetPrefix, Names>,
    options?: DynamicIconOptions<Prefix, IsDefault>,
  ): DynamicIconBuilder<
    | AccumulatedNames
    | (IsDefault extends true ? Names : never)
    | `${Prefix extends string ? Prefix : SetPrefix}:${Names}`
  >;

  build(): DynamicIconComponent<AccumulatedNames>;
}

interface RegistryEntry {
  prefix: string;
  isDefault: boolean;
  loaders: LoaderMap;
}

const _registry: RegistryEntry[] = [];

export function registerIconSet(entry: RegistryEntry) {
  _registry.push(entry);
}

// 1. Move the component$ definition to the top-level scope so Qwik's optimizer can extract it safely
export const DynamicIconInternal = component$<PublicIconProps & { name: string }>(
  ({ name, ...rest }) => {
    const iconResource = useResource$<IconData>(async ({ track }) => {
      track(() => name);

      let targetPrefix: string | undefined;
      let targetName = name;

      if (name.includes(':')) {
        const parts = name.split(':');
        targetPrefix = parts[0];
        targetName = parts.slice(1).join(':');
      }

      const entry = targetPrefix
        ? _registry.find((e) => e.prefix === targetPrefix)
        : _registry.find((e) => e.isDefault);

      if (!entry) throw new Error(`[DynamicIcon] No provider registered for: "${name}"`);

      const loader = entry.loaders[`./icons/${targetName}.ts`];
      if (!loader) throw new Error(`[DynamicIcon] Icon "${targetName}" not found`);

      return ((await loader()) as any).default ?? (await loader());
    });

    return (
      <Resource
        value={iconResource}
        onPending={() => <SvgIcon viewBox="0 0 24 24" {...(rest as any)} />}
        onRejected={(err) => {
          console.error(err);
          return <SvgIcon viewBox="0 0 24 24" {...(rest as any)} />;
        }}
        onResolved={(data) => (
          <SvgIcon viewBox={data.viewBox} dangerouslySetInnerHTML={data.body} {...(rest as any)} />
        )}
      />
    );
  },
);

const IconWithNamed = Object.assign(DynamicIconInternal, {
  named: (name: string) =>
    component$((props: PublicIconProps) => <DynamicIconInternal name={name} {...props} />),
});

export function dynamicIcon<
  AccumulatedNames extends string = never,
>(): DynamicIconBuilder<AccumulatedNames> {
  const builder = {
    provide(set: IconSetProvider<any, any>, options?: any) {
      _registry.push({
        prefix: options?.prefix ?? set.prefix,
        isDefault: options?.default ?? false,
        loaders: set.loaders,
      });
      return this as any;
    },
    build() {
      // 2. Attach the builder extension methods to our static, top-level component
      return IconWithNamed;
    },
  };

  return builder as unknown as DynamicIconBuilder<AccumulatedNames>;
}
