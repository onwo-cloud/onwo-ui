import { component$, useSignal, $, useComputed$, type PropFunction } from '@builder.io/qwik';
import { ThemeManager } from './hooks/use-theme-manager';
import { ThemeEditor } from './hooks/use-theme-editor';

// --- Reusable Sub-Components ---

const Icon = component$(({ path }: { path: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d={path} />
  </svg>
));

const SidebarHeader = component$(({ title, onClose$ }: { title: string, onClose$: PropFunction<() => void> }) => (
  <div class="flex items-center justify-between px-4 py-3 border-b">
    <h2 class="text-base font-semibold">{title}</h2>
    <button onClick$={onClose$} class="rounded p-1 hover:bg-blue-800">
      <Icon path="M18 6 6 18M6 6l12 12" />
    </button>
  </div>
));

const ShadeCountSelector = component$(() => (
  <div class="space-y-1.5">
    <div class="flex items-center justify-between text-xs font-medium">
      <span>Number of Shades</span>
    </div>
    <div class="flex gap-2">
      <div class="relative flex-1 rounded py-1 px-2">
        <div class="relative top-1 h-4 w-full cursor-pointer">
          <div class="absolute top-1.5 h-1 w-full rounded-full"></div>
          <div class="absolute top-0 h-4 w-1 rounded-full left-[30%]"></div>
        </div>
      </div>
      <div class="flex w-10 items-center justify-center rounded text-xs">
        11
      </div>
    </div>
  </div>
));

const TabSelector = component$(({
  tabs,
  activeTab,
  onTabChange$
}: {
  tabs: string[],
  activeTab: string,
  onTabChange$: PropFunction<(tab: any) => void>
}) => (
  <div class="px-4 py-4">
    <div class="grid grid-cols-3 rounded-lg p-1">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick$={() => onTabChange$(tab)}
          class={[
            'rounded py-1 text-xs font-medium capitalize transition-all',
            activeTab === tab
              ? 'bg-blue-200 text-white shadow-sm'
              : 'hover:text-blue-500',
          ]}
        >
          {tab}
        </button>
      ))}
    </div>
  </div>
));

const CurveGraph = component$(() => (
  <div class="relative h-32 w-full overflow-hidden rounded-md border border-blue-800">
    <div
      class="absolute bottom-0 w-full opacity-60"
      style={{
        height: '70%',
        background: 'linear-gradient(90deg, transparent 0%, #0ea5e9 100%)',
        clipPath: 'polygon(0% 100%, 100% 100%, 100% 20%, 0% 90%)',
      }}
    />
    <div class="absolute bottom-[30%] h-px w-full border-blue-800/50"></div>
    <div class="absolute bottom-[30%] right-[15%] h-2.5 w-2.5 rounded-full border-2 border-white bg-[#0ea5e9] shadow-lg ring-1 ring-black/20"></div>
  </div>
));

const HueSlider = component$(() => (
  <div
    class="relative h-2.5 w-full rounded-full"
    style={{
      background: 'linear-gradient(to right, #ef4444, #eab308, #22c55e, #3b82f6, #a855f7, #ef4444)',
    }}
  >
    <div
      class="absolute top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-white shadow-sm ring-1 ring-black/20"
      style={{ left: '60%' }}
    />
  </div>
));

type ColorSelectedSidebarProps = {
  manager: ThemeManager,
  editor: ThemeEditor,
}

export const ColorSelectedSidebar = component$(({ manager, editor }: ColorSelectedSidebarProps) => {
  const activeTab = useSignal<'hue' | 'chroma' | 'lightness'>('hue');

  const scale = useComputed$(() => {
    const id = editor.selectedPaletteId.value;
    if (!id) return;
    const theme = manager.selectedTheme.value;
    return theme.palettes[id];
  });

  const handleClose = $(() => {
    editor.selectedPaletteId.value = undefined;
  });

  const handleTabChange = $((tab: 'hue' | 'chroma' | 'lightness') => {
    activeTab.value = tab;
  });

  return (
    <div class="flex h-full w-full flex-col">
      <SidebarHeader
        title={scale.value?.name || 'Untitled'}
        onClose$={handleClose}
      />

      <div class="flex-1 overflow-y-auto px-4 pb-6 scrollbar-thin">
        {/* Generation Settings Section */}
        <div class="space-y-5">
          <ShadeCountSelector />
        </div>

        <hr class="border-blue-800" />

        {/* Navigation Tabs */}
        <TabSelector
          tabs={['hue', 'chroma', 'lightness']}
          activeTab={activeTab.value}
          onTabChange$={handleTabChange}
        />

        {/* Visual Controls Section */}
        <div class="space-y-6">
          <div>
            <label class="mb-2 block text-xs font-medium">Input color</label>
            <CurveGraph />

            <div class="mt-4 space-y-3">
              <HueSlider />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
