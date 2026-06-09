import {
  component$,
  Resource,
  type Component,
  useTask$,
  useSignal,
} from '@builder.io/qwik';
import type { SvgIconProps } from '@onwo/primitives/svg-icon';
import { SvgIcon } from '@onwo/primitives/svg-icon';

export type PublicIconProps = Omit<SvgIconProps, 'viewBox' | 'children'>;

export interface IconData {
  body: string;
  viewBox: string;
}

export type LoaderMap<N extends string = string> = Record<N, () => Promise<unknown>>;

export interface IconSetProvider<Prefix extends string, Names extends string> {
  name: string;
  prefix: Prefix;
  loaders: LoaderMap<Names>;
  __names: Names;
}

export interface DynamicIconOptions<
  Prefix extends string | undefined = undefined,
  IsDefault extends boolean = false,
> {
  prefix?: Prefix;
  default?: IsDefault;
}

export type DynamicIconComponent<Names extends string> = Component<
  PublicIconProps & { i: Names }
> & {
  named: (name: Names) => Component<PublicIconProps>;
};

export interface DynamicIconBuilder<AccumulatedNames extends string> {
  provide<
    const SetPrefix extends string,
    Names extends string,
    const Options extends { prefix?: string; default?: boolean } = {},
  >(
    set: IconSetProvider<SetPrefix, Names>,
    options?: Options,
  ): DynamicIconBuilder<
    | AccumulatedNames
    | (Options extends { default: true } ? Names : never)
    | `${Options extends { prefix: infer P extends string } ? P : SetPrefix}:${Names}`
  >;

  build(): DynamicIconComponent<AccumulatedNames>;
}

interface RegistryEntry {
  name: string;
  prefix: string;
  isDefault: boolean;
  loaders: LoaderMap;
}

const _registry: RegistryEntry[] = [];

export function registerIconSet(entry: RegistryEntry) {
  _registry.push(entry);
}

// Simple Levenshtein distance algorithm to find similar string matches
function getLevenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1, // insertion
          matrix[i - 1][j] + 1, // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

// Helper to find nearest matching strings within a threshold
function findNearestMatches(
  target: string,
  candidates: string[],
  maxSuggestions = 8,
  threshold = 3,
): string[] {
  return candidates
    .map((candidate) => ({
      candidate,
      distance: getLevenshteinDistance(target, candidate),
    }))
    .filter((item) => item.distance <= threshold)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, maxSuggestions)
    .map((item) => item.candidate);
}

export const DynamicIconInternal = component$<PublicIconProps & { i: string }>(
  ({ i: iconName, ...rest }) => {
    const iconResource = useSignal<IconData | undefined>();
    useTask$(async ({ track }) => {
      track(() => iconName);

      let targetPrefix: string | undefined;
      let targetName = iconName;

      if (iconName.includes(':')) {
        const parts = iconName.split(':');
        targetPrefix = parts[0];
        targetName = parts.slice(1).join(':');
      }

      const registry = targetPrefix
        ? _registry.find((e) => e.prefix === targetPrefix)
        : _registry.find((e) => e.isDefault);

      if (!registry) {
        console.warn(`[DynamicIcon] No provider registered for: "${iconName}"`);
        return;
      }

      const loader = registry.loaders[targetName];
      if (!loader) {
        const availableNames = Object.keys(registry.loaders);
        // Configured to search for up to 8 matches within a distance threshold of 3
        const suggestions = findNearestMatches(targetName, availableNames, 4, 3);

        // Re-apply prefix if one was used in the query
        const formattedSuggestions = targetPrefix
          ? suggestions.map((s) => `${targetPrefix}:${s}`)
          : suggestions;

        const suggestionText =
          formattedSuggestions.length > 0
            ? ` Did you mean: ${formattedSuggestions.map((s) => `"${s}"`).join(', ')}?`
            : '';

        console.warn(
          `[DynamicIcon] Icon "${iconName}" not found in "${registry.name}" registry.${suggestionText}`,
        );
        return;
      }

      iconResource.value = (await loader()) as IconData;
    });

    return (
      <Resource
        value={iconResource}
        onPending={() => <SvgIcon viewBox="0 0 24 24" {...(rest as any)} />}
        onRejected={(err) => {
          console.error(err);
          return <SvgIcon viewBox="0 0 24 24" {...(rest as any)} />;
        }}
        onResolved={(data) =>
          data ? (
            <SvgIcon
              viewBox={data.viewBox}
              dangerouslySetInnerHTML={data.body}
              {...(rest as any)}
            />
          ) : (
            <></>
          )
        }
      />
    );
  },
);

const IconWithNamed = Object.assign(DynamicIconInternal, {
  named: (iconName: string) =>
    component$((props: PublicIconProps) => <DynamicIconInternal i={iconName} {...props} />),
});

export function dynamicIcon<
  AccumulatedNames extends string = never,
>(): DynamicIconBuilder<AccumulatedNames> {
  const builder = {
    provide(set: IconSetProvider<any, any>, options?: any) {
      _registry.push({
        name: set.name,
        prefix: options?.prefix ?? set.prefix,
        isDefault: options?.default ?? false,
        loaders: set.loaders,
      });
      return this as any;
    },
    build() {
      return IconWithNamed;
    },
  };

  return builder as unknown as DynamicIconBuilder<AccumulatedNames>;
}
