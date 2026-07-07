import { component$, useSignal, useTask$, type Component } from '@qwik.dev/core';
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

// Module-level cache to speed up SSG. (Not serialized to client, but that's okay!)
const _iconCache: Record<string, IconData> = {};

export function registerIconSet(entry: RegistryEntry) {
  _registry.push(entry);
}

// Simple Levenshtein distance algorithm to find similar string matches
function getLevenshteinDistance(a: string, b: string): number {
  const matrix: number[][] = [];
  for (let i = 0; i <= b.length; i++) matrix[i] = [i];
  for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1,
        );
      }
    }
  }
  return matrix[b.length][a.length];
}

function findNearestMatches(target: string, candidates: string[], maxSuggestions = 8, threshold = 3): string[] {
  return candidates
    .map((candidate) => ({ candidate, distance: getLevenshteinDistance(target, candidate) }))
    .filter((item) => item.distance <= threshold)
    .sort((a, b) => a.distance - b.distance)
    .slice(0, maxSuggestions)
    .map((item) => item.candidate);
}

export const DynamicIconInternal = component$<PublicIconProps & { i: string }>(
  ({ i: iconName, ...rest }) => {
    // Qwik will serialize this signal automatically from SSG to the Client
    const iconData = useSignal<IconData | null>(null);

    useTask$(async ({ track }) => {
      // Track the prop. If it doesn't change on the client, this task skips execution entirely!
      const trackedName = track(() => iconName);

      let targetPrefix: string | undefined;
      let targetName = trackedName;

      if (trackedName.includes(':')) {
        const parts = trackedName.split(':');
        targetPrefix = parts[0];
        targetName = parts.slice(1).join(':');
      }

      const registry = targetPrefix
        ? _registry.find((e) => e.prefix === targetPrefix)
        : _registry.find((e) => e.isDefault);

      if (!registry) {
        console.warn(`[DynamicIcon] No provider registered for: "${trackedName}"`);
        return;
      }

      const cacheKey = `${registry.prefix}:${targetName}`;

      // 1. Check SSG / Client memory cache first
      if (_iconCache[cacheKey]) {
        iconData.value = _iconCache[cacheKey];
        return;
      }

      // 2. Fetch via dynamic loader
      const loader = registry.loaders[targetName];
      if (!loader) {
        const availableNames = Object.keys(registry.loaders);
        const suggestions = findNearestMatches(targetName, availableNames, 4, 3);
        const formattedSuggestions = targetPrefix ? suggestions.map((s) => `${targetPrefix}:${s}`) : suggestions;
        const suggestionText = formattedSuggestions.length > 0 ? ` Did you mean: ${formattedSuggestions.map((s) => `"${s}"`).join(', ')}?` : '';
        console.warn(`[DynamicIcon] Icon "${trackedName}" not found in "${registry.name}" registry.${suggestionText}`);
        return;
      }

      try {
        const res: any = await loader();
        const data = res?.default ? res.default : res;

        _iconCache[cacheKey] = data; // Cache in memory for subsequent renders
        iconData.value = data;       // Set signal so Qwik serializes it to the client
      } catch (err) {
        console.error(`[DynamicIcon] Failed to load icon: ${trackedName}`, err);
      }
    });

    // Render fallback while loading (or if not found)
    if (!iconData.value) {
      return <SvgIcon viewBox="0 0 24 24" {...(rest as any)} />;
    }

    // Renders instantly on the client because iconData.value is populated from serialized state
    return (
      <SvgIcon
        viewBox={iconData.value.viewBox}
        dangerouslySetInnerHTML={iconData.value.body}
        {...(rest as any)}
      />
    );
  }
);

const IconWithNamed = Object.assign(DynamicIconInternal, {
  named: (iconName: string) =>
    component$((props: PublicIconProps) => <DynamicIconInternal i={iconName} {...props} />),
});

export function dynamicIcon<AccumulatedNames extends string = never>(): DynamicIconBuilder<AccumulatedNames> {
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
