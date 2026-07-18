import { component$ } from "@qwik.dev/core";
import type { AOMNode } from "./types";

export const TreeNodeItem = component$<{
  node: AOMNode;
  selectedId?: string;
  onSelect$: (node: AOMNode) => void;
  onHighlight$: (node: AOMNode | null) => void;
  onInteract$: (node: AOMNode, action: "click" | "focus") => void;
}>(({ node, selectedId, onSelect$, onHighlight$, onInteract$ }) => {
  const isSelected = selectedId === node.id;

  // ---------------- 1. BLOCK TEMPLATE (Vertical Role Bar on Left) ----------------
  if (node.isBlockRole) {
    return (
      <div
        onClick$={(e) => {
          e.stopPropagation();
          onSelect$(node);
        }}
        onMouseEnter$={() => onHighlight$(node)}
        onMouseLeave$={() => onHighlight$(null)}
        class={`relative my-2 rounded-md border border-shade-200/80 transition-colors duration-150 ${
          isSelected ? "ring-2 ring-shade-400 bg-shade-100" : "bg-shade-0 hover:border-shade-300"
        }`}
      >
        <div class="flex">
          {/* Vertical Role Bar */}
          <div class="w-7 shrink-0 bg-shade-800 text-shade-0 flex flex-col items-center py-2 rounded-l-md relative select-none">
            <span class="text-[10px] font-mono font-bold tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 sticky top-2">
              {node.role}
            </span>
          </div>

          {/* Block Inner Content */}
          <div class="flex-1 min-w-0 p-2.5 flex flex-col gap-1.5">
            {/* Block Header Badge */}
            {node.headerText && (
              <div class="inline-flex self-start px-2 py-0.5 rounded bg-shade-800 text-shade-0 text-[10px] font-mono font-medium">
                {node.headerText}
              </div>
            )}

            {/* Block Children */}
            <div class="flex flex-col gap-1">
              {node.children.map((child) => (
                <TreeNodeItem
                  key={child.id}
                  node={child}
                  selectedId={selectedId}
                  onSelect$={onSelect$}
                  onHighlight$={onHighlight$}
                  onInteract$={onInteract$}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ---------------- 2. INLINE TEXT NODE ----------------
  if (node.role === "text") {
    return (
      <span
        onClick$={(e) => {
          e.stopPropagation();
          onSelect$(node);
        }}
        onMouseEnter$={() => onHighlight$(node)}
        onMouseLeave$={() => onHighlight$(null)}
        class={`inline-block px-1 py-0.5 rounded cursor-pointer transition-colors font-sans text-xs ${
          isSelected
            ? "bg-shade-200 ring-1 ring-shade-400 text-shade-900 font-medium"
            : "text-shade-900 hover:bg-shade-100"
        }`}
      >
        "{node.accessibleName}"
      </span>
    );
  }

  // ---------------- 3. HEADING CONTROL ----------------
  if (node.role === "heading") {
    return (
      <div
        onClick$={(e) => {
          e.stopPropagation();
          onSelect$(node);
        }}
        onMouseEnter$={() => onHighlight$(node)}
        onMouseLeave$={() => onHighlight$(null)}
        class={`inline-flex items-center my-1.5 gap-1.5 px-1.5 py-0.5 rounded cursor-pointer transition-colors duration-150 ${
          isSelected ? "bg-shade-200 ring-1 ring-shade-400" : "hover:bg-shade-100"
        }`}
      >
        <span class="px-1.5 py-0.2 bg-shade-700 text-shade-0 text-[10px] font-mono font-bold rounded uppercase">
          heading {node.level || 1}
        </span>
        <span class="font-medium text-shade-950 text-xs">
          {node.children.length > 0 ? (
            node.children.map((child) => (
              <TreeNodeItem
                key={child.id}
                node={child}
                selectedId={selectedId}
                onSelect$={onSelect$}
                onHighlight$={onHighlight$}
                onInteract$={onInteract$}
              />
            ))
          ) : (
            node.accessibleName
          )}
        </span>
      </div>
    );
  }

  // ---------------- 4. LINK CONTROL ----------------
  if (node.role === "link") {
    return (
      <div
        onClick$={(e) => {
          e.stopPropagation();
          onSelect$(node);
        }}
        onMouseEnter$={() => onHighlight$(node)}
        onMouseLeave$={() => onHighlight$(null)}
        class={`inline-flex items-center my-1 gap-1 px-1.5 py-0.5 rounded cursor-pointer transition-colors duration-150 ${
          isSelected ? "bg-shade-200 ring-1 ring-shade-400" : "hover:bg-shade-100"
        }`}
      >
        <span class="px-1 py-0.2 bg-shade-700 text-shade-0 text-[10px] rounded font-mono">
          🔗
        </span>
        <span class="underline text-shade-800 font-medium text-xs">
          {node.children.length > 0 ? (
            node.children.map((child) => (
              <TreeNodeItem
                key={child.id}
                node={child}
                selectedId={selectedId}
                onSelect$={onSelect$}
                onHighlight$={onHighlight$}
                onInteract$={onInteract$}
              />
            ))
          ) : (
            node.accessibleName || "link"
          )}
        </span>
      </div>
    );
  }

  // ---------------- 5. BUTTON CONTROL ----------------
  if (node.role === "button") {
    return (
      <div
        onClick$={(e) => {
          e.stopPropagation();
          onSelect$(node);
          onInteract$(node, "click");
        }}
        onMouseEnter$={() => onHighlight$(node)}
        onMouseLeave$={() => onHighlight$(null)}
        class={`inline-flex items-center my-1 gap-1 px-1.5 py-0.5 rounded cursor-pointer border border-shade-200 transition-colors duration-150 ${
          isSelected ? "bg-shade-200 ring-1 ring-shade-400" : "bg-shade-50 hover:bg-shade-100"
        }`}
      >
        <span class="px-1 py-0.2 bg-shade-200 text-shade-800 text-[10px] rounded">
          🖱️
        </span>
        <span class="font-medium text-shade-900 text-xs">
          {node.accessibleName || "Button"}
        </span>
      </div>
    );
  }

  // ---------------- 6. IMAGE CONTROL ----------------
  if (node.role === "img") {
    return (
      <div
        onClick$={(e) => {
          e.stopPropagation();
          onSelect$(node);
        }}
        onMouseEnter$={() => onHighlight$(node)}
        onMouseLeave$={() => onHighlight$(null)}
        class={`inline-flex items-center my-1 gap-1 px-1.5 py-0.5 rounded cursor-pointer transition-colors duration-150 ${
          isSelected ? "bg-shade-200 ring-1 ring-shade-400" : "hover:bg-shade-100"
        }`}
      >
        <span class="px-1 py-0.2 bg-shade-700 text-shade-0 text-[10px] rounded">
          🖼️
        </span>
        <span class="italic text-shade-800 text-xs">
          {node.accessibleName ? `"${node.accessibleName}"` : "<blank>"}
        </span>
      </div>
    );
  }

  // ---------------- 7. LISTITEM CONTROL ----------------
  if (node.role === "listitem") {
    return (
      <div
        onClick$={(e) => {
          e.stopPropagation();
          onSelect$(node);
        }}
        onMouseEnter$={() => onHighlight$(node)}
        onMouseLeave$={() => onHighlight$(null)}
        class={`flex items-start my-1 gap-2 p-1 rounded cursor-pointer transition-colors duration-150 ${
          isSelected ? "bg-shade-100 ring-1 ring-shade-300" : "hover:bg-shade-50"
        }`}
      >
        <span class="font-mono text-xs font-semibold text-shade-500 shrink-0">
          •
        </span>
        <div class="flex-1 min-w-0 flex flex-wrap items-center gap-1">
          {node.children.map((child) => (
            <TreeNodeItem
              key={child.id}
              node={child}
              selectedId={selectedId}
              onSelect$={onSelect$}
              onHighlight$={onHighlight$}
              onInteract$={onInteract$}
            />
          ))}
        </div>
      </div>
    );
  }

  // ---------------- 8. INPUT / TEXTBOX CONTROL ----------------
  if (node.role === "textbox" || node.role === "spinbutton") {
    return (
      <div
        onClick$={(e) => {
          e.stopPropagation();
          onSelect$(node);
        }}
        onMouseEnter$={() => onHighlight$(node)}
        onMouseLeave$={() => onHighlight$(null)}
        class={`inline-flex items-center my-1 gap-1.5 px-1.5 py-0.5 rounded cursor-pointer border border-shade-200 transition-colors duration-150 ${
          isSelected ? "bg-shade-100 ring-1 ring-shade-400" : "hover:bg-shade-50"
        }`}
      >
        <span class="text-[10px]">✏️</span>
        <span class="font-mono text-[10px] font-bold text-shade-800 uppercase">
          {node.role}
        </span>
        {node.accessibleName && (
          <span class="font-medium text-shade-800">{node.accessibleName}:</span>
        )}
        <div
          onClick$={(e) => {
            e.stopPropagation();
            onInteract$(node, "focus");
          }}
          class="px-1.5 py-0.2 bg-shade-0 border border-shade-200 rounded font-mono text-[10px] text-shade-900"
        >
          {node.value ? node.value : <span class="text-shade-400 italic">empty</span>}
        </div>
      </div>
    );
  }

  // ---------------- 9. FALLBACK WRAPPER ----------------
  return (
    <div
      onClick$={(e) => {
        e.stopPropagation();
        onSelect$(node);
      }}
      onMouseEnter$={() => onHighlight$(node)}
      onMouseLeave$={() => onHighlight$(null)}
      class={`inline-flex items-center my-0.5 gap-1 px-1 py-0.5 rounded cursor-pointer transition-colors duration-150 ${
        isSelected ? "bg-shade-200 ring-1 ring-shade-400" : "hover:bg-shade-100"
      }`}
    >
      <span class="font-mono text-[10px] px-1 bg-shade-200 text-shade-700 rounded">
        {node.role || node.tagName}
      </span>
      <span class="text-xs text-shade-800">
        {node.children.length > 0 ? (
          node.children.map((child) => (
            <TreeNodeItem
              key={child.id}
              node={child}
              selectedId={selectedId}
              onSelect$={onSelect$}
              onHighlight$={onHighlight$}
              onInteract$={onInteract$}
            />
          ))
        ) : (
          node.accessibleName
        )}
      </span>
    </div>
  );
});
