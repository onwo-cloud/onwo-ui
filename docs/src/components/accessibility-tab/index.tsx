import {
  component$,
  useSignal,
  useVisibleTask$,
  $,
  type Signal,
} from "@qwik.dev/core";
import type { AOMNode } from "./types";
import { buildAOMTree } from "./aom-builder";
import { TreeNodeItem } from "./tree-node-item";

interface IssueItem {
  id: string;
  role: string;
  message: string;
}

function getDomElement(stageEl: HTMLElement | undefined, node: AOMNode | null): HTMLElement | null {
  if (!stageEl || !node) return null;
  const targetId = node.targetId || node.id;
  return stageEl.querySelector(`[data-a11y-id="${CSS.escape(targetId)}"]`);
}

export const AccessibilityTab = component$<{
  targetRef: Signal<HTMLElement | undefined>;
  componentKey: string;
  controls: Record<string, any>;
}>(({ targetRef }) => {
  const treeNodes = useSignal<AOMNode[]>([]);
  const selectedNode = useSignal<AOMNode | null>(null);
  const issues = useSignal<IssueItem[]>([]);

  const refreshAOM$ = $(() => {
    const stageEl = targetRef.value;
    if (!stageEl) {
      treeNodes.value = [];
      issues.value = [];
      return;
    }

    const nodes = buildAOMTree(stageEl);
    treeNodes.value = nodes;

    const collectedIssues: IssueItem[] = [];
    const extractIssues = (list: AOMNode[]) => {
      list.forEach((n) => {
        n.issues.forEach((iss) => {
          collectedIssues.push({
            id: n.id,
            role: n.role || n.tagName,
            message: iss,
          });
        });
        extractIssues(n.children);
      });
    };
    extractIssues(nodes);
    issues.value = collectedIssues;
  });

  useVisibleTask$(({ track, cleanup }) => {
    // Only track the target element reference
    const stageEl = track(() => targetRef.value);
    if (!stageEl) return;

    let rafId: number | null = null;
    const debouncedRefresh = () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        rafId = null;
        refreshAOM$();
      });
    };

    // Run initial build on mount
    debouncedRefresh();

    // Observe DOM mutations inside stage container
    const observer = new MutationObserver((mutations) => {
      const isSelfMutation = mutations.every(
        (m) =>
          m.type === "attributes" &&
          (m.attributeName === "data-a11y-id" || m.attributeName === "class")
      );

      if (isSelfMutation) return;

      debouncedRefresh();
    });

    observer.observe(stageEl, {
      attributes: true,
      childList: true,
      characterData: true,
      subtree: true,
    });

    stageEl.addEventListener("input", debouncedRefresh, true);
    stageEl.addEventListener("change", debouncedRefresh, true);

    cleanup(() => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      observer.disconnect();
      stageEl.removeEventListener("input", debouncedRefresh, true);
      stageEl.removeEventListener("change", debouncedRefresh, true);
    });
  });

  const handleNodeClick$ = $((node: AOMNode) => {
    selectedNode.value = node;
    const stageEl = targetRef.value;
    if (stageEl) {
      const el = getDomElement(stageEl, node);
      el?.scrollIntoView?.({ block: "nearest", behavior: "smooth" });
    }
  });

  const handleInteract$ = $((node: AOMNode, action: "click" | "focus") => {
    const stageEl = targetRef.value;
    if (!stageEl) return;
    const el = getDomElement(stageEl, node);
    if (!el) return;

    if (action === "focus") {
      if (!el.hasAttribute("tabindex") && !["a", "button", "input", "select", "textarea"].includes(el.tagName.toLowerCase())) {
        el.setAttribute("tabindex", "-1");
      }
      el.focus();
    } else if (action === "click") {
      el.click();
    }
    refreshAOM$();
  });

  const handleHighlight$ = $((node: AOMNode | null) => {
    const stageEl = targetRef.value;
    if (!stageEl) return;

    stageEl.querySelectorAll(".a11y-highlight-outline").forEach((el) => {
      el.classList.remove("a11y-highlight-outline");
    });

    if (node) {
      const el = getDomElement(stageEl, node);
      if (el) {
        el.classList.add("a11y-highlight-outline");
      }
    }
  });

  return (
    <div class="flex h-full w-full bg-shade-0 text-shade-900 font-sans text-xs overflow-hidden select-none">
      <style>{`
        .a11y-highlight-outline {
          outline: 2px dashed var(--shade-1000, var(--color-shade-1000, #000000)) !important;
          outline-offset: 2px !important;
          transition: outline-offset 150ms cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}</style>

      <div class="flex-1 flex flex-col min-w-0 h-full">
        {/* Tree List Stage */}
        <div class="flex-1 overflow-auto p-3">
          {treeNodes.value.length === 0 ? (
            <div class="h-full flex items-center justify-center text-shade-400 italic text-[11px]">
              No accessible elements detected in target view canvas.
            </div>
          ) : (
            <div class="flex flex-col gap-2">
              {treeNodes.value.map((node) => (
                <TreeNodeItem
                  key={node.id}
                  node={node}
                  selectedId={selectedNode.value?.id}
                  onSelect$={handleNodeClick$}
                  onHighlight$={handleHighlight$}
                  onInteract$={handleInteract$}
                />
              ))}
            </div>
          )}
        </div>

        {/* Large Warning at Bottom (Only shown when there are issues) */}
        {issues.value.length > 0 && (
          <div class="shrink-0 p-4 bg-shade-100 border-t-2 border-shade-300 text-shade-900 flex flex-col gap-2 max-h-48 overflow-auto">
            <div class="flex items-center gap-2 text-shade-800 font-semibold text-sm">
              <span class="text-lg">⚠️</span>
              <span>
                {issues.value.length} Accessibility Issue{issues.value.length > 1 ? "s" : ""} Detected
              </span>
            </div>
            <ul class="flex flex-col gap-1.5 pl-2 text-xs">
              {issues.value.map((item, idx) => (
                <li key={`${item.id}-${idx}`} class="flex items-start gap-2">
                  <span class="font-mono text-[10px] uppercase font-bold bg-shade-200 text-shade-900 px-1.5 py-0.5 rounded shrink-0">
                    {item.role}
                  </span>
                  <span class="text-shade-900 font-medium leading-snug">
                    {item.message}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
});
