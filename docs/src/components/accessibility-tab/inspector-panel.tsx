import { component$ } from "@qwik.dev/core";
import type { AOMNode } from "./types";

export const InspectorPanel = component$<{
  selectedNode: AOMNode | null;
  onInteract$: (node: AOMNode, action: "click" | "focus") => void;
}>(({ selectedNode, onInteract$ }) => {
  if (!selectedNode) {
    return (
      <div class="h-full flex flex-col items-center justify-center text-shade-400 text-[11px] text-center p-4">
        <span class="text-lg mb-1">🖱️</span>
        <span>Select an element in the accessibility tab to inspect properties and trigger interactions.</span>
      </div>
    );
  }

  return (
    <div class="flex flex-col gap-3">
      {/* Title & Action Buttons */}
      <div class="flex items-center justify-between pb-2 border-b border-shade-150">
        <div class="flex items-center gap-1.5">
          <span class="font-mono font-bold text-shade-800 text-[11px] bg-shade-100 px-1.5 py-0.5 rounded uppercase">
            {selectedNode.role || selectedNode.tagName}
          </span>
          {selectedNode.level && (
            <span class="text-[10px] text-shade-500 font-mono">
              h{selectedNode.level}
            </span>
          )}
        </div>

        <div class="flex items-center gap-1">
          <button
            onClick$={() => onInteract$(selectedNode, "focus")}
            class="px-2 py-0.5 bg-shade-200 hover:bg-shade-300 text-shade-800 rounded text-[10px] font-medium border-none cursor-pointer"
          >
            Focus
          </button>
          <button
            onClick$={() => onInteract$(selectedNode, "click")}
            class="px-2 py-0.5 bg-shade-800 hover:bg-shade-900 text-shade-0 rounded text-[10px] font-medium border-none cursor-pointer"
          >
            Click / Toggle
          </button>
        </div>
      </div>

      {/* Computed Name */}
      <div class="flex flex-col gap-1.5 bg-shade-0 p-2.5 rounded-lg border border-shade-150">
        <div class="text-[10px] font-semibold uppercase text-shade-400 tracking-wider">
          Computed Accessible Name
        </div>
        <div class="font-mono text-xs text-shade-900 break-words">
          {selectedNode.accessibleName ? (
            `"${selectedNode.accessibleName}"`
          ) : (
            <span class="text-shade-400 italic">None</span>
          )}
        </div>

        {selectedNode.description && (
          <>
            <div class="text-[10px] font-semibold uppercase text-shade-400 tracking-wider mt-1.5">
              Description
            </div>
            <div class="font-mono text-[11px] text-shade-700 break-words">
              "{selectedNode.description}"
            </div>
          </>
        )}
      </div>

      {/* Audit Issues */}
      {selectedNode.issues.length > 0 && (
        <div class="flex flex-col gap-1.5 bg-shade-100 p-2.5 rounded-lg border border-shade-200">
          <div class="text-[10px] font-semibold uppercase text-shade-700 tracking-wider flex items-center gap-1">
            <span>⚠️</span>
            <span>Accessibility Warnings ({selectedNode.issues.length})</span>
          </div>
          <ul class="list-disc pl-4 text-[11px] text-shade-900 flex flex-col gap-1">
            {selectedNode.issues.map((iss, i) => (
              <li key={i}>{iss}</li>
            ))}
          </ul>
        </div>
      )}

      {/* DOM Attributes */}
      <div class="flex flex-col gap-1.5 bg-shade-0 p-2.5 rounded-lg border border-shade-150">
        <div class="text-[10px] font-semibold uppercase text-shade-400 tracking-wider">
          Attributes
        </div>
        <div class="flex flex-col gap-1 border-t border-shade-100 pt-1 font-mono text-[11px]">
          {Object.entries(selectedNode.attributes).map(([k, v]) => (
            <div key={k} class="flex justify-between items-center gap-2">
              <span class="text-shade-700 shrink-0">{k}</span>
              <span class="text-shade-600 truncate max-w-[130px]" title={v}>
                "{v}"
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
