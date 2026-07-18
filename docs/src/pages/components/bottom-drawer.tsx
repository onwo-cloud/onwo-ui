import { component$, type Signal, type QRL } from "@qwik.dev/core";
import { Button as ButtonPrimitive } from "~primitives/@kit/button";
import { AccessibilityTab } from "~/components/accessibility-tab";
import { highlightJsx } from "~/utils/highlight-jsx";

interface BottomDrawerProps {
  codeHeight: Signal<number>;
  bottomDrawerTab: Signal<"code" | "a11y">;
  generatedCode: Signal<string>;
  codeCopied: Signal<boolean>;
  activeKey: string;
  controlsStore: Record<string, any>;
  canvasRef: Signal<HTMLElement | undefined>;
  onCopyCodeBlock$: QRL<() => void>;
}

export const BottomDrawer = component$<BottomDrawerProps>(
  ({
    codeHeight,
    bottomDrawerTab,
    generatedCode,
    codeCopied,
    activeKey,
    controlsStore,
    canvasRef,
    onCopyCodeBlock$,
  }) => {
    return (
      <div
        style={{ height: `${codeHeight.value}px` }}
        class="shrink-0 flex flex-col min-h-[120px] max-h-[600px] relative select-none"
      >
        {/* Top Resize Handle */}
        <div
          class="h-2.5 w-full cursor-row-resize hover:bg-shade-200/80 active:bg-shade-300/80 transition-colors flex items-center justify-center shrink-0 group z-10"
          onMouseDown$={(e) => {
            const startY = e.clientY;
            const startHeight = codeHeight.value;
            const onMouseMove = (moveEvent: MouseEvent) => {
              const deltaY = startY - moveEvent.clientY;
              const newHeight = Math.max(120, Math.min(600, startHeight + deltaY));
              codeHeight.value = newHeight;
            };
            const onMouseUp = () => {
              window.removeEventListener("mousemove", onMouseMove);
              window.removeEventListener("mouseup", onMouseUp);
            };
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
          }}
        >
          <div class="w-8 h-1 rounded-full bg-shade-300 group-hover:bg-shade-400 transition-colors" />
        </div>

        {/* Drawer Header Toolbar */}
        <div class="h-9 shrink-0 flex items-center justify-between px-3 border-b border-shade-150 text-xs border-t">
          <div class="flex items-center gap-1">
            <ButtonPrimitive
              as="button"
              onClick$={() => (bottomDrawerTab.value = "code")}
              class={`h-6 px-2.5 rounded-md inline-flex items-center gap-1.5 font-sans font-medium text-[11px] transition-colors cursor-pointer border-none ${
                bottomDrawerTab.value === "code"
                  ? "bg-shade-200 text-shade-950 font-semibold"
                  : "text-shade-600 hover:bg-shade-100 hover:text-shade-950"
              }`}
            >
              <span>Code</span>
            </ButtonPrimitive>

            <ButtonPrimitive
              as="button"
              onClick$={() => (bottomDrawerTab.value = "a11y")}
              class={`h-6 px-2.5 rounded-md inline-flex items-center gap-1.5 font-sans font-medium text-[11px] transition-colors cursor-pointer border-none ${
                bottomDrawerTab.value === "a11y"
                  ? "bg-shade-200 text-shade-950 font-semibold"
                  : "text-shade-600 hover:bg-shade-100 hover:text-shade-950"
              }`}
            >
              <span>Accessibility</span>
            </ButtonPrimitive>
          </div>

          {bottomDrawerTab.value === "code" && (
            <ButtonPrimitive
              as="button"
              onClick$={onCopyCodeBlock$}
              class="h-6 px-2.5 rounded-md inline-flex items-center gap-1.5 bg-shade-100 hover:bg-shade-200 text-shade-800 text-[11px] font-sans font-medium transition-colors cursor-pointer border-none"
            >
              {codeCopied.value ? (
                <>
                  <span class="text-emerald-600 font-bold text-xs">✓</span>
                  <span class="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" class="shrink-0">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.25 2C2.455 2 1 3.455 1 5.25V10.75C1 12.545 2.455 14 4.25 14H11.75C13.545 14 15 12.545 15 10.75V5.25C15 3.455 13.545 2 11.75 2H4.25ZM2.5 5.5C2.5 4.395 3.395 3.5 4.5 3.5H11.5C12.605 3.5 13.5 4.395 13.5 5.5V10.5C13.5 11.605 12.605 12.5 11.5 12.5H4.5C3.395 12.5 2.5 11.605 2.5 10.5V5.5Z"
                      class="fill-shade-700"
                    />
                    <rect x="7" y="5" width="4.5" height="6" rx="0.75" class="fill-shade-700" />
                  </svg>
                  <span>Copy Code</span>
                </>
              )}
            </ButtonPrimitive>
          )}
        </div>

        {/* Drawer Body Content */}
        <div class="flex-1 overflow-hidden">
          {bottomDrawerTab.value === "code" ? (
            <div class="h-full overflow-auto p-3.5 select-text">
              <pre class="font-mono text-[12.5px]/5 leading-relaxed text-shade-900">
                <code dangerouslySetInnerHTML={highlightJsx(generatedCode.value)} />
              </pre>
            </div>
          ) : (
            <AccessibilityTab
              targetRef={canvasRef}
              componentKey={activeKey}
              controls={controlsStore}
            />
          )}
        </div>
      </div>
    );
  }
);
