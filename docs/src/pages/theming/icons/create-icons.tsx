import { component$, Slot } from '@qwik.dev/core';
import { dynamicIcon } from '~icons/dynamic-icon';

import { CarbonIconSet } from '@onwo/iconset-carbon';
import { CircumIconSet } from '@onwo/iconset-circum';
import { CuidaIconSet } from '@onwo/iconset-cuida';
import { FlowbiteIconSet } from '@onwo/iconset-flowbite';
import { FluentIconSet } from '@onwo/iconset-fluent';
import { GravityUiIconSet } from '@onwo/iconset-gravity-ui';
import { HeroiconsIconSet } from '@onwo/iconset-heroicons';
import { HugeiconsIconSet } from '@onwo/iconset-hugeicons';
import { IconParkIconSet } from '@onwo/iconset-icon-park';
import { IconamoonIconSet } from '@onwo/iconset-iconamoon';
import { IconoirIconSet } from '@onwo/iconset-iconoir';
import { LetsIconsIconSet } from '@onwo/iconset-lets-icons';
import { LineMdIconSet } from '@onwo/iconset-line-md';
import { LsiconIconSet } from '@onwo/iconset-lsicon';
import { LucideIconSet } from '@onwo/iconset-lucide';
import { MageIconSet } from '@onwo/iconset-mage';
import { MaterialSymbolsIconSet } from '@onwo/iconset-material-symbols';
import { MingcuteIconSet } from '@onwo/iconset-mingcute';
import { MynauiIconSet } from '@onwo/iconset-mynaui';
import { PhIconSet } from '@onwo/iconset-ph';
import { ProiconsIconSet } from '@onwo/iconset-proicons';
import { RadixIconsIconSet } from '@onwo/iconset-radix-icons';
import { RiIconSet } from '@onwo/iconset-ri';
import { SolarIconSet } from '@onwo/iconset-solar';
import { StashIconSet } from '@onwo/iconset-stash';
import { StreamlineIconSet } from '@onwo/iconset-streamline';
import { SystemUiconsIconSet } from '@onwo/iconset-system-uicons';
import { TablerIconSet } from '@onwo/iconset-tabler';
import { TdesignIconSet } from '@onwo/iconset-tdesign';
import { TeenyiconsIconSet } from '@onwo/iconset-teenyicons';

import type { DemoIconName, IconMap } from './demo-icon';
import { iconMappings, type IconLibraryKey } from './mapping-table';
import { registerData, RegistryProvider } from '~ui/commons/registry';

export const Icon: any = dynamicIcon()
  .provide(LucideIconSet, { prefix: 'lucide', default: true })
  .provide(HugeiconsIconSet, { prefix: 'hugeicons' })
  .provide(SolarIconSet, { prefix: 'solar' })
  .provide(MageIconSet, { prefix: 'mage' })
  .provide(LetsIconsIconSet, { prefix: 'lets-icons' })
  .provide(FlowbiteIconSet, { prefix: 'flowbite' })
  .provide(MynauiIconSet, { prefix: 'mynaui' })
  .provide(StashIconSet, { prefix: 'stash' })
  .provide(IconamoonIconSet, { prefix: 'iconamoon' })
  .provide(ProiconsIconSet, { prefix: 'proicons' })
  .provide(CuidaIconSet, { prefix: 'cuida' })
  .provide(LsiconIconSet, { prefix: 'lsicon' })
  .provide(MaterialSymbolsIconSet, { prefix: 'material-symbols' })
  .provide(GravityUiIconSet, { prefix: 'gravity-ui' })
  .provide(TdesignIconSet, { prefix: 'tdesign' })
  .provide(CircumIconSet, { prefix: 'circum' })
  .provide(StreamlineIconSet, { prefix: 'streamline' })
  .provide(IconoirIconSet, { prefix: 'iconoir' })
  .provide(MingcuteIconSet, { prefix: 'mingcute' })
  .provide(RadixIconsIconSet, { prefix: 'radix-icons' })
  .provide(LineMdIconSet, { prefix: 'line-md' })
  .provide(HeroiconsIconSet, { prefix: 'heroicons' })
  .provide(PhIconSet, { prefix: 'ph' })
  .provide(TablerIconSet, { prefix: 'tabler' })
  .provide(IconParkIconSet, { prefix: 'icon-park' })
  .provide(FluentIconSet, { prefix: 'fluent' })
  .provide(RiIconSet, { prefix: 'ri' })
  .provide(SystemUiconsIconSet, { prefix: 'system-uicons' })
  .provide(TeenyiconsIconSet, { prefix: 'teenyicons' })
  .provide(CarbonIconSet, { prefix: 'carbon' })
  .build();

export function buildDemoIconMap(prefix: IconLibraryKey): IconMap {
  const mapping = iconMappings[prefix] || iconMappings['lucide'];
  const iconMap = {} as IconMap;

  for (const [demoName, mappedName] of Object.entries(mapping)) {
    iconMap[demoName as DemoIconName] = Icon.named(`${prefix}:${mappedName}`);
  }

  return iconMap;
}

const iconMapCache: Partial<Record<IconLibraryKey, IconMap>> = {};

export function getDemoIconMap(prefix: IconLibraryKey): IconMap {
  const key = (prefix || 'lucide').toLowerCase() as IconLibraryKey;
  if (!iconMapCache[key]) {
    iconMapCache[key] = buildDemoIconMap(key);
  }
  return iconMapCache[key]!;
}

const setRegistryKeys: Record<string, number> = {};

for (const prefix of Object.keys(iconMappings)) {
  const key = registerData(buildDemoIconMap(prefix as IconLibraryKey));
  setRegistryKeys[prefix.toLowerCase()] = key;
}

export const DemoIconProvider = component$<{ name?: string }>(({ name = 'lucide' }) => {
  const normalizedKey = (name || 'lucide').toLowerCase();
  const registryKey = setRegistryKeys[normalizedKey] ?? setRegistryKeys['lucide'];

  return (
    <RegistryProvider registryKey={registryKey}>
      <Slot />
    </RegistryProvider>
  );
});
