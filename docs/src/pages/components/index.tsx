import { component$, useSignal, useStore, useTask$, $ } from "@qwik.dev/core";
import { useLocation } from "@qwik.dev/router";
import { SECTIONS_MAP } from "~/kit";
import { Button as ButtonPrimitive } from "~primitives/@kit/button";
import { useLogger } from "~/hooks/use-logger";

import { BottomDrawer } from './bottom-drawer';
import { CanvasStage } from './canvas-stage';
import { ComponentsSidebar } from './components-sidebar';
import { ControlsInspector } from './controls-inspector';


export const ComponentPage = component$(() => {
  const loc = useLocation();

  // Route & Component lookup
  const componentParam = loc.params.component as keyof typeof SECTIONS_MAP;
  const activeKey = (SECTIONS_MAP[componentParam] ? componentParam : "button") as keyof typeof SECTIONS_MAP;
  const section = SECTIONS_MAP[activeKey];

  // UI State Signals
  const activePreset = useSignal("Default");
  const bottomDrawerTab = useSignal<"code" | "a11y">("code");
  const canvasRef = useSignal<HTMLElement>();
  const generatedCode = useSignal("");
  const codeHeight = useSignal(200);
  const codeCopied = useSignal(false);
  const topCopied = useSignal(false);

  // Dynamic Store & Hooks
  const controlsStore = useStore<Record<string, any>>({});
  const logger = useLogger();

  // Re-initialize controls when component key changes
  useTask$(({ track }) => {
    track(() => activeKey);
    activePreset.value = "Default";
    const schema = section.default.controls;
    if (schema) {
      for (const [key, field] of Object.entries(schema)) {
        controlsStore[key] = field.default;
      }
    }
  });

  // Dynamically generate code snippet string
  useTask$(async ({ track }) => {
    track(() => activeKey);
    track(controlsStore);
    const codeFn = section.default.code;
    if (codeFn) {
      if (typeof codeFn === "function") {
        const res = codeFn(controlsStore as any);
        generatedCode.value = res instanceof Promise ? await res : res;
      }
    } else {
      generatedCode.value = "";
    }
  });

  const applyPreset$ = $((preset: string) => {
    activePreset.value = preset;
    if (preset === "Default") {
      controlsStore.disabled = false;
      controlsStore.isLoading = false;
      if (controlsStore.variant) controlsStore.variant = "primary";
    } else if (preset === "Disabled") {
      controlsStore.disabled = true;
      controlsStore.isLoading = false;
    } else if (preset === "Loading") {
      controlsStore.isLoading = true;
      controlsStore.disabled = false;
    }
  });

  const handleCopyCode$ = $(() => {
    navigator.clipboard.writeText(generatedCode.value);
    topCopied.value = true;
    setTimeout(() => (topCopied.value = false), 2000);
  });

  const handleCopyCodeBlock$ = $(() => {
    navigator.clipboard.writeText(generatedCode.value);
    codeCopied.value = true;
    setTimeout(() => (codeCopied.value = false), 2000);
  });

  const DefaultDisplay = section.default.display;

  return (
    <div class="[font-synthesis:none] flex h-screen w-full antialiased text-xs/4 font-sans select-none">
      {/* 1. Left Sidebar Navigation */}
      <ComponentsSidebar activeKey={activeKey} />

      {/* 2. Main Workspace */}
      <div class="flex-1 flex min-h-0 min-w-0">
        <div class="flex-1 flex flex-col min-w-0 min-h-0 relative">

          {/* Breadcrumbs Header */}
          <div class="shrink-0 min-h-11 border-b border-shade-150 pr-2.25 pl-2 flex items-center justify-between">
            <div class="items-center flex grow min-h-10.75 min-w-0 gap-1">
              <div class="items-center flex min-w-0 pr-1 pl-2.5">
                <div class="items-center flex min-w-0">
                  <div class="items-center flex">
                    <div class="items-center h-6 flex mb-1.25 mt-1.25 min-w-0 px-1 rounded-lg -mx-1">
                      <div class="min-w-0 font-sans font-medium text-shade-950 text-[14.625px]/4.5 line-clamp-1">
                        Components
                      </div>
                    </div>
                    <div class="-mt-0.5 font-sans font-medium text-shade-500 text-[14.625px]/4.5 mx-2">
                      ›
                    </div>
                  </div>
                  <div class="flex">
                    <div class="items-center flex min-w-0 py-0.5 px-1 rounded-md -my-0.5 -mx-1">
                      <div class="min-w-0 font-sans font-medium text-shade-950 text-[14.625px]/4.5 line-clamp-1">
                        {section.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ButtonPrimitive
              as="div"
              onClick$={handleCopyCode$}
              title="Copy Code Snippet"
              class="items-center h-7 flex shrink-0 justify-center min-w-7 px-0.5 rounded-full relative bg-shade-200 cursor-pointer active:scale-95 transition-transform"
            >
              <div class="items-center flex justify-center shrink-0 size-3.5">
                {topCopied.value ? (
                  <span class="text-xs text-emerald-600 font-bold">✓</span>
                ) : (
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16">
                    <g>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 2C2.455 2 1 3.455 1 5.25V10.75C1 12.545 2.455 14 4.25 14H11.75C13.545 14 15 12.545 15 10.75V5.25C15 3.455 13.545 2 11.75 2H4.25ZM2.5 5.5C2.5 4.395 3.395 3.5 4.5 3.5H11.5C12.605 3.5 13.5 4.395 13.5 5.5V10.5C13.5 11.605 12.605 12.5 11.5 12.5H4.5C3.395 12.5 2.5 11.605 2.5 10.5V5.5Z" class="fill-shade-950" />
                      <rect x="7" y="5" width="4.5" height="6" rx="0.75" class="fill-shade-950" />
                    </g>
                  </svg>
                )}
              </div>
            </ButtonPrimitive>
          </div>

          {/* Preset Buttons Toolbar */}
          <div class="h-10.75 shrink-0 flex items-center px-2.5 gap-1">
            {["Default", "Disabled", "Loading"].map((preset) => {
              const isActive = activePreset.value === preset;
              return (
                <div key={preset} class="flex shrink-0">
                  <ButtonPrimitive
                    as="div"
                    onClick$={() => applyPreset$(preset)}
                    class={`items-center h-7 inline-flex justify-center max-w-50 min-w-7 px-2.5 rounded-full cursor-pointer transition-colors ${isActive ? "bg-shade-200" : "bg-shade-50 hover:bg-shade-100"
                      }`}
                  >
                    <div
                      class={`font-sans font-medium text-[13.5px]/4.5 line-clamp-1 ${isActive ? "text-shade-950" : "text-shade-600"
                        }`}
                    >
                      {preset}
                    </div>
                  </ButtonPrimitive>
                </div>
              );
            })}
          </div>

          {/* Live Stage */}
          <CanvasStage
            display={DefaultDisplay}
            controlsStore={controlsStore}
            logger={logger}
            canvasRef={canvasRef}
          />

          {/* Bottom Code & Accessibility Drawer */}
          <BottomDrawer
            codeHeight={codeHeight}
            bottomDrawerTab={bottomDrawerTab}
            generatedCode={generatedCode}
            codeCopied={codeCopied}
            activeKey={activeKey}
            controlsStore={controlsStore}
            canvasRef={canvasRef}
            onCopyCodeBlock$={handleCopyCodeBlock$}
          />
        </div>

        {/* 3. Right Inspector Column */}
        <ControlsInspector section={section} controlsStore={controlsStore} />
      </div>
    </div>
  );
});
