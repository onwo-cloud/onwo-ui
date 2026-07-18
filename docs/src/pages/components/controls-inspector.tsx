import { component$ } from "@qwik.dev/core";
import { Button as ButtonPrimitive } from "~primitives/@kit/button";
import type { ControlField } from "~/kit";
import {
  Scrollarea,
  ScrollareaBar,
  ScrollareaCues,
  ScrollareaViewport,
} from "~ui/@kit/scrollarea";

interface ControlsInspectorProps {
  section: any;
  controlsStore: Record<string, any>;
}

export const ControlsInspector = component$<ControlsInspectorProps>(({ section, controlsStore }) => {
  const AsideComponent = section.aside;
  const controls = section.default.controls;

  return (
    <div class="w-80 shrink-0 border-l border-shade-150 relative flex flex-col p-4 min-h-0 h-full">
      <Scrollarea class="w-full h-full relative min-h-0">
        <ScrollareaCues maxHeight={44} />
        <ScrollareaViewport class="flex flex-col gap-4 w-full pr-1">
          <div class="items-center h-4 flex shrink-0 justify-between">
            <div class="text-sm items-center flex grow gap-1.5">Controls</div>
          </div>

          {AsideComponent && (
            <div class="text-shade-600 text-sm font-sans">
              <AsideComponent />
            </div>
          )}

          {controls ? (
            <div class="flex flex-col gap-4 pb-6">
              {Object.entries(controls).map(([key, field]) => {
                const typedField = field as ControlField;

                return (
                  <div key={key} class="flex flex-col gap-1.5">
                    <label class="font-sans text-xs text-shade-500 font-medium">
                      {typedField.label}
                    </label>

                    {(typedField.type === "segmented" || typedField.type === "radio") && (
                      <div class="grid grid-cols-3 gap-1 p-1 bg-shade-50 border border-shade-100 rounded-2xl">
                        {typedField.options.map((opt) => (
                          <ButtonPrimitive
                            key={opt.value}
                            onClick$={() => (controlsStore[key] = opt.value)}
                            class={`h-7 rounded-full text-[11px] font-sans capitalize transition-all cursor-pointer border-none ${
                              controlsStore[key] === opt.value
                                ? "bg-shade-0 text-shade-950 font-medium shadow-xs"
                                : "text-shade-600 hover:text-shade-950"
                            }`}
                          >
                            {opt.label}
                          </ButtonPrimitive>
                        ))}
                      </div>
                    )}

                    {typedField.type === "select" && (
                      <select
                        value={controlsStore[key]}
                        onChange$={(e, el) => (controlsStore[key] = el.value)}
                        class="h-8 px-3 bg-shade-50 border border-shade-150 rounded-lg text-xs text-shade-950 focus:outline-none cursor-pointer"
                      >
                        {typedField.options.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    )}

                    {typedField.type === "boolean" && (
                      <label class="flex items-center justify-between text-xs font-sans text-shade-600 cursor-pointer py-1">
                        <span>{typedField.label}</span>
                        <input
                          type="checkbox"
                          checked={Boolean(controlsStore[key])}
                          onChange$={(e, el) => (controlsStore[key] = el.checked)}
                          class="rounded border-shade-200 bg-shade-50 text-shade-950 focus:ring-0 cursor-pointer size-4"
                        />
                      </label>
                    )}

                    {typedField.type === "text" && (
                      <input
                        type="text"
                        value={controlsStore[key] ?? ""}
                        placeholder={typedField.placeholder}
                        onInput$={(e, el) => (controlsStore[key] = el.value)}
                        class="h-8 px-3 bg-shade-50 border border-shade-150 rounded-full text-xs text-shade-950 placeholder-shade-400 focus:outline-none focus:border-shade-300"
                      />
                    )}

                    {typedField.type === "number" && (
                      <input
                        type="number"
                        min={typedField.min}
                        max={typedField.max}
                        step={typedField.step}
                        value={controlsStore[key] ?? 0}
                        onInput$={(e, el) => (controlsStore[key] = el.valueAsNumber)}
                        class="h-8 px-3 bg-shade-50 border border-shade-150 rounded-full text-xs text-shade-950 focus:outline-none focus:border-shade-300"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div class="text-shade-500 text-xs py-4">No controls available.</div>
          )}
        </ScrollareaViewport>
        <ScrollareaBar orientation="vertical" class="w-[13px] right-0 top-[4px] bottom-[4px]" />
      </Scrollarea>
    </div>
  );
});
