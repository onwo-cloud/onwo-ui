import { component$, useSignal, useComputed$, $ } from "@qwik.dev/core";
import { Button as ButtonPrimitive } from "~primitives/@kit/button";

type ComponentType = "button" | "tabs" | "badge" | "input" | "avatar";

interface ComponentItem {
  id: ComponentType;
  name: string;
  category: "Commons" | "Navigation" | "Inputs" | "Data Display";
  description: string;
}

const COMPONENTS: ComponentItem[] = [
  {
    id: "button",
    name: "Button",
    category: "Commons",
    description: "A flexible button component with multiple variants.",
  },
  {
    id: "tabs",
    name: "Tabs",
    category: "Commons",
    description: "Pill segment control for view switching.",
  },
  {
    id: "badge",
    name: "Badge",
    category: "Commons",
    description: "Compact status indicator tag.",
  },
  {
    id: "input",
    name: "Input",
    category: "Inputs",
    description: "Single-line form text input control.",
  },
  {
    id: "avatar",
    name: "Avatar",
    category: "Data Display",
    description: "User avatar capsule element.",
  },
];

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function highlightJsx(code: string): string {
  if (!code) return "";

  const lines = code.split("\n");
  const highlightedLines = lines.map((line) => {
    if (line.trim().startsWith("//")) {
      return `<span class="text-shade-400 italic">${escapeHtml(line)}</span>`;
    }

    let escaped = escapeHtml(line);

    // Highlight String Literals
    escaped = escaped.replace(
      /(&quot;[\s\S]*?&quot;|&#039;[\s\S]*?&#039;)/g,
      '<span class="text-emerald-600 font-normal">$1</span>'
    );

    // Highlight JSX Tags / Components
    escaped = escaped.replace(
      /(&lt;\/?)([A-Za-z0-9_.-]+)/g,
      (_, p1, p2) => {
        const isComponent = /^[A-Z]/.test(p2);
        const tagClass = isComponent
          ? "text-purple-600 font-semibold"
          : "text-blue-600 font-medium";
        return `${p1}<span class="${tagClass}">${p2}</span>`;
      }
    );

    // Highlight Closing Brackets
    escaped = escaped.replace(
      /(\/&gt;|&gt;)/g,
      '<span class="text-shade-400">$1</span>'
    );

    // Highlight Attributes
    escaped = escaped.replace(
      /\b([a-zA-Z0-9_-]+)=/g,
      '<span class="text-amber-600 font-medium">$1</span>='
    );

    // Highlight Boolean Attributes
    escaped = escaped.replace(
      /\b(disabled)\b(?!=)/g,
      '<span class="text-amber-600 font-medium">$1</span>'
    );

    return escaped;
  });

  return highlightedLines.join("\n");
}

export default component$(() => {
  // Navigation State
  const selectedId = useSignal<ComponentType>("button");
  const activePreset = useSignal("Loading");

  // Code Block Height & Copy State
  const codeHeight = useSignal(200);
  const codeCopied = useSignal(false);

  // Variant Controls State
  const variant = useSignal<"primary" | "secondary" | "outline" | "ghost" | "destructive">("primary");
  const size = useSignal<"sm" | "md" | "lg">("md");
  const radius = useSignal<"none" | "md" | "full">("full");
  const label = useSignal("button");
  const isDisabled = useSignal(false);
  const isLoading = useSignal(false);
  const isFullWidth = useSignal(false);
  const copied = useSignal(false);

  // Active Component Computeds
  const activeComponent = useComputed$(() => {
    return COMPONENTS.find((c) => c.id === selectedId.value) || COMPONENTS[0];
  });

  // Dynamic JSX Code Snippet Output
  const generatedCode = useComputed$(() => {
    const radiusClasses =
      radius.value === "full"
        ? "rounded-full"
        : radius.value === "md"
        ? "rounded-xl"
        : "rounded-none";

    if (selectedId.value === "button") {
      const variantClasses = {
        primary: "bg-shade-900 text-shade-0 hover:bg-shade-950 active:scale-[0.98]",
        secondary: "bg-shade-100 text-shade-950 hover:bg-shade-150 active:scale-[0.98]",
        outline: "border border-shade-200 text-shade-950 hover:bg-shade-100 active:scale-[0.98]",
        ghost: "text-shade-600 hover:bg-shade-100 hover:text-shade-950 active:scale-[0.98]",
        destructive: "bg-red-500/15 text-red-400 border border-red-500/30 hover:bg-red-500/25",
      }[variant.value];

      const sizeClasses = {
        sm: "h-7 px-3 text-xs",
        md: "h-9 px-4 text-sm",
        lg: "h-11 px-5 text-base",
      }[size.value];

      return `<ButtonPrimitive
  class="${`font-sans font-medium inline-flex items-center justify-center transition-all duration-150 cursor-pointer ${sizeClasses} ${variantClasses} ${radiusClasses} ${
    isFullWidth.value ? "w-full" : ""
  } ${isDisabled.value ? "opacity-40 cursor-not-allowed pointer-events-none" : ""}`.trim()}"${
        isDisabled.value ? "\n  disabled" : ""
      }
>
  ${
    isLoading.value
      ? `<svg class="animate-spin size-4 mr-2" viewBox="0 0 24 24" fill="none">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
  </svg>`
      : ""
  }<span>${label.value}</span>
</ButtonPrimitive>`;
    }

    if (selectedId.value === "badge") {
      return `<span class="inline-flex items-center px-3 py-1 font-sans text-xs font-medium ${radiusClasses} bg-shade-100 text-shade-950">
  ${label.value}
</span>`;
    }

    if (selectedId.value === "input") {
      return `<input
  type="text"
  placeholder="${label.value}..."
  ${isDisabled.value ? "disabled " : ""}class="h-9 px-3 bg-shade-50 border border-shade-200 ${radiusClasses} text-sm font-sans text-shade-950 placeholder-shade-500 focus:outline-none focus:border-shade-400 ${
    isFullWidth.value ? "w-full" : "w-64"
  }"
/>`;
    }

    return `// ${activeComponent.value.name} component variation preview`;
  });

  // Preset Trigger Action
  const applyPreset$ = $((preset: string) => {
    activePreset.value = preset;
    if (preset === "Default") {
      variant.value = "primary";
      isDisabled.value = false;
      isLoading.value = false;
    } else if (preset === "Disabled") {
      isDisabled.value = true;
      isLoading.value = false;
    } else if (preset === "Loading") {
      isLoading.value = true;
      isDisabled.value = false;
    }
  });

  const handleCopyCode$ = $(() => {
    navigator.clipboard.writeText(generatedCode.value);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  });

  const handleCopyCodeBlock$ = $(() => {
    navigator.clipboard.writeText(generatedCode.value);
    codeCopied.value = true;
    setTimeout(() => {
      codeCopied.value = false;
    }, 2000);
  });

  return (
    <div class="[font-synthesis:none] flex h-screen w-full bg-shade-0 antialiased text-xs/4 text-shade-950 font-sans overflow-hidden select-none">
      
      {/* ---------------- 1. Left Sidebar Navigation (256px) ---------------- */}
      <div class="w-64 shrink-0 flex flex-col border-r border-shade-150 bg-shade-0 p-2 gap-4">
        <div class="flex flex-col w-full gap-4">
          
          {/* Category: Commons */}
          <div class="flex flex-col w-full gap-1">
            <div class="items-center self-stretch flex justify-between mb-1 px-2.5">
              <div class="text-pretty font-sans font-medium text-shade-500 text-xs/[17.4px]">
                Commons
              </div>
            </div>
            
            <div class="flex flex-col w-full gap-0.5">
              {COMPONENTS.filter((c) => c.category === "Commons").map((item) => {
                const isActive = item.id === selectedId.value;
                return (
                  <ButtonPrimitive
                    as="div"
                    key={item.id}
                    onClick$={() => {
                      selectedId.value = item.id;
                      label.value = item.id;
                    }}
                    class={`items-center h-8 flex shrink-0 w-full justify-between px-2.5 rounded-full cursor-pointer border-none transition-all duration-150 active:scale-[0.98] ${
                      isActive ? "bg-shade-100" : "hover:bg-shade-50"
                    }`}
                  >
                    <div class="items-center flex min-w-0 gap-2">
                      <div
                        class={`text-pretty font-sans text-sm/5 line-clamp-1 ${
                          isActive
                            ? "font-medium text-shade-950"
                            : "text-shade-600"
                        }`}
                      >
                        {item.name}
                      </div>
                    </div>
                  </ButtonPrimitive>
                );
              })}
            </div>
          </div>

          {/* Category: Inputs & Data Display */}
          <div class="flex flex-col w-full gap-1">
            <div class="items-center self-stretch flex justify-between mb-1 px-2.5">
              <div class="text-pretty font-sans font-medium text-shade-500 text-xs/[17.4px]">
                Inputs & Data Display
              </div>
            </div>
            
            <div class="flex flex-col w-full gap-0.5">
              {COMPONENTS.filter((c) => c.category !== "Commons").map((item) => {
                const isActive = item.id === selectedId.value;
                return (
                  <ButtonPrimitive
                    as="div"
                    key={item.id}
                    onClick$={() => {
                      selectedId.value = item.id;
                      label.value = item.id;
                    }}
                    class={`items-center h-8 flex shrink-0 w-full justify-between px-2.5 rounded-full cursor-pointer border-none transition-all duration-150 active:scale-[0.98] ${
                      isActive ? "bg-shade-100" : "hover:bg-shade-50"
                    }`}
                  >
                    <div class="items-center flex min-w-0 gap-2">
                      <div
                        class={`text-pretty font-sans text-sm/5 line-clamp-1 ${
                          isActive
                            ? "font-medium text-shade-950"
                            : "text-shade-600"
                        }`}
                      >
                        {item.name}
                      </div>
                    </div>
                  </ButtonPrimitive>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* ---------------- 2. Main Workspace View ---------------- */}
      <div class="flex-1 flex min-h-0 min-w-0 bg-shade-0">
        
        {/* Left Column: Canvas + Code */}
        <div class="flex-1 flex flex-col min-w-0 min-h-0 bg-shade-0 relative">
          
          {/* Top Breadcrumbs Bar */}
          <div class="shrink-0 min-h-11 border-b border-shade-150 bg-shade-0 pr-2.25 pl-2 flex items-center justify-between">
            
            {/* Breadcrumb Path */}
            <div class="items-center flex grow min-h-10.75 min-w-0 gap-1">
              <div class="items-center flex min-w-0 pr-1 pl-2.5">
                <div class="items-center flex min-w-0">
                  <div class="items-center flex">
                    <div class="items-center h-6 flex mb-1.25 mt-1.25 min-w-0 px-1 rounded-lg -mx-1">
                      <div class="items-center flex min-w-0">
                        <div class="min-w-0 font-sans font-medium text-shade-950 text-[14.625px]/4.5 line-clamp-1">
                          Components
                        </div>
                      </div>
                    </div>
                    <div class="-mt-0.5 font-sans font-medium text-shade-500 text-[14.625px]/4.5 mx-2">
                      ›
                    </div>
                  </div>
                  <div class="flex">
                    <div class="items-center flex min-w-0">
                      <div class="flex min-w-0">
                        <div class="items-center flex min-w-0 py-0.5 px-1 rounded-md -my-0.5 -mx-1">
                          <div class="min-w-0 font-sans font-medium text-shade-950 text-[14.625px]/4.5 line-clamp-1">
                            {activeComponent.value.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Action Copy Button */}
            <div class="items-center flex shrink-0 gap-1.5">
              <ButtonPrimitive
                as="div"
                onClick$={handleCopyCode$}
                title="Copy Code Snippet"
                class="items-center h-7 flex shrink-0 justify-center min-w-7 px-0.5 rounded-full relative bg-shade-200 cursor-pointer active:scale-95 transition-transform"
              >
                <div class="items-center flex justify-center shrink-0 size-3.5">
                  <div class="shrink-0 size-3.5 flex items-center justify-center">
                    {copied.value ? (
                      <span class="text-xs text-emerald-400 font-bold">✓</span>
                    ) : (
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 2C2.455 2 1 3.455 1 5.25V10.75C1 12.545 2.455 14 4.25 14H11.75C13.545 14 15 12.545 15 10.75V5.25C15 3.455 13.545 2 11.75 2H4.25ZM2.5 5.5C2.5 4.395 3.395 3.5 4.5 3.5H11.5C12.605 3.5 13.5 4.395 13.5 5.5V10.5C13.5 11.605 12.605 12.5 11.5 12.5H4.5C3.395 12.5 2.5 11.605 2.5 10.5V5.5Z" class="fill-shade-950" />
                          <rect x="7" y="5" width="4.5" height="6" rx="0.75" class="fill-shade-950" />
                        </g>
                      </svg>
                    )}
                  </div>
                </div>
                <div class="h-[26.179px] w-[26.179px] absolute rounded-full border border-shade-300/20 inset-0 pointer-events-none" />
              </ButtonPrimitive>
            </div>

          </div>

          {/* Toolbar Row: Preset Tabs */}
          <div class="h-10.75 shrink-0 flex items-center px-2.5 gap-1 bg-shade-0 border-b border-shade-100">
            {["Default", "Disabled", "Loading"].map((preset) => {
              const isActive = activePreset.value === preset;
              return (
                <div key={preset} class="flex shrink-0">
                  <div class="rounded-[5px]">
                    <ButtonPrimitive
                      as="div"
                      onClick$={() => applyPreset$(preset)}
                      class={`items-center h-7 inline-flex justify-center max-w-50 min-w-7 px-2.5 rounded-full cursor-pointer transition-colors ${
                        isActive ? "bg-shade-200" : "bg-shade-50 hover:bg-shade-100"
                      }`}
                    >
                      <div
                        class={`font-sans font-medium text-[13.5px]/4.5 line-clamp-1 ${
                          isActive ? "text-shade-950" : "text-shade-600"
                        }`}
                      >
                        {preset}
                      </div>
                    </ButtonPrimitive>
                  </div>
                </div>
              );
            })}

            {/* Plus Icon Action Button */}
            <div class="flex">
              <ButtonPrimitive
                as="div"
                class="items-center h-7 flex shrink-0 justify-center min-w-7 px-0.5 rounded-full cursor-pointer hover:bg-shade-50 transition-colors"
              >
                <div class="items-center flex justify-center shrink-0 size-3.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.974 1.345C7.57 0.886 8.411 0.885 9.008 1.343L14.55 5.595C15.15 6.056 15.15 6.944 14.55 7.405L9.008 11.657C8.411 12.115 7.57 12.114 6.974 11.655L1.449 7.404C0.85 6.943 0.85 6.057 1.449 5.596L6.974 1.345ZM8 3.25C8.414 3.25 8.75 3.586 8.75 4V5.75H10.5C10.914 5.75 11.25 6.086 11.25 6.5C11.25 6.914 10.914 7.25 10.5 7.25H8.75V9C8.75 9.414 8.414 9.75 8 9.75C7.586 9.75 7.25 9.414 7.25 9V7.25H5.5C5.086 7.25 4.75 6.914 4.75 6.5C4.75 6.086 5.086 5.75 5.5 5.75H7.25V4C7.25 3.586 7.586 3.25 8 3.25Z" class="fill-shade-500" />
                  </svg>
                </div>
              </ButtonPrimitive>
            </div>
          </div>

          {/* Live Interactive Canvas Stage */}
          <div class="flex-1 flex items-center justify-center p-8 bg-shade-0 min-h-[180px] overflow-auto">
            {selectedId.value === "button" && (
              <ButtonPrimitive
                disabled={isDisabled.value}
                class={`font-sans font-medium inline-flex items-center justify-center transition-all duration-150 cursor-pointer ${
                  size.value === "sm"
                    ? "h-7 px-3 text-xs"
                    : size.value === "md"
                    ? "h-9 px-4 text-sm"
                    : "h-11 px-5 text-base"
                } ${
                  variant.value === "primary"
                    ? "bg-shade-900 text-shade-0 hover:bg-shade-950 active:scale-[0.98]"
                    : variant.value === "secondary"
                    ? "bg-shade-100 text-shade-950 hover:bg-shade-150 active:scale-[0.98]"
                    : variant.value === "outline"
                    ? "border border-shade-200 text-shade-950 hover:bg-shade-50 active:scale-[0.98]"
                    : variant.value === "ghost"
                    ? "text-shade-600 hover:bg-shade-50 hover:text-shade-950 active:scale-[0.98]"
                    : "bg-red-500/15 text-red-400 border border-red-500/30 hover:bg-red-500/25"
                } ${
                  radius.value === "full"
                    ? "rounded-full"
                    : radius.value === "md"
                    ? "rounded-xl"
                    : "rounded-none"
                } ${isFullWidth.value ? "w-full" : ""} ${
                  isDisabled.value
                    ? "opacity-40 cursor-not-allowed active:scale-100"
                    : ""
                }`}
              >
                {isLoading.value && (
                  <svg
                    class="animate-spin size-4 mr-2"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      stroke-width="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    ></path>
                  </svg>
                )}
                <span>{label.value}</span>
              </ButtonPrimitive>
            )}

            {selectedId.value === "tabs" && (
              <div class="flex items-center gap-1 bg-shade-50 p-1 rounded-full border border-shade-150">
                {["Overview", "Settings", "Activity"].map((tab, i) => (
                  <ButtonPrimitive
                    key={tab}
                    class={`h-7 px-3 rounded-full text-xs font-sans font-medium transition-all ${
                      i === 0
                        ? "bg-shade-0 text-shade-950 shadow-xs"
                        : "text-shade-600 hover:text-shade-950"
                    }`}
                  >
                    {tab}
                  </ButtonPrimitive>
                ))}
              </div>
            )}

            {selectedId.value === "badge" && (
              <span
                class={`inline-flex items-center px-3 py-1 font-sans text-xs font-medium ${
                  radius.value === "full"
                    ? "rounded-full"
                    : radius.value === "md"
                    ? "rounded-md"
                    : "rounded-none"
                } bg-shade-100 text-shade-950`}
              >
                {label.value}
              </span>
            )}

            {selectedId.value === "input" && (
              <input
                type="text"
                disabled={isDisabled.value}
                placeholder={`${label.value}...`}
                class={`h-9 px-3 bg-shade-50 border border-shade-150 ${
                  radius.value === "full"
                    ? "rounded-full"
                    : radius.value === "md"
                    ? "rounded-xl"
                    : "rounded-none"
                } text-sm font-sans text-shade-950 placeholder-shade-400 focus:outline-none focus:border-shade-300 ${
                  isFullWidth.value ? "w-full" : "w-64"
                }`}
              />
            )}

            {selectedId.value === "avatar" && (
              <div
                class={`size-10 ${
                  radius.value === "full"
                    ? "rounded-full"
                    : radius.value === "md"
                    ? "rounded-xl"
                    : "rounded-none"
                } bg-shade-100 text-shade-950 flex items-center justify-center font-medium text-xs`}
              >
                AU
              </div>
            )}
          </div>

          {/* ---------------- Resizable Code Block Area ---------------- */}
          <div
            style={{ height: `${codeHeight.value}px` }}
            class="shrink-0 border-t border-shade-150 bg-shade-50 flex flex-col min-h-[120px] max-h-[600px] relative select-none"
          >
            {/* Top Drag Resize Handle */}
            <div
              class="h-2.5 w-full cursor-row-resize hover:bg-shade-200/80 active:bg-shade-300/80 transition-colors flex items-center justify-center shrink-0 border-b border-shade-150/50 group z-10"
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

            {/* Code Block Header Toolbar */}
            <div class="h-9 shrink-0 flex items-center justify-between px-3.5 bg-shade-50 border-b border-shade-150 text-xs">
              <div class="flex items-center gap-2">
                <span class="font-sans font-medium text-shade-700 text-xs">
                  Generated Code
                </span>
                <span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-medium bg-shade-200 text-shade-700 uppercase">
                  JSX
                </span>
              </div>

              <ButtonPrimitive
                as="button"
                onClick$={handleCopyCodeBlock$}
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
            </div>

            {/* Code Block Content with Syntax Highlighting */}
            <div class="flex-1 overflow-auto p-3.5 bg-shade-0 select-text">
              <pre class="font-mono text-[12.5px]/5 leading-relaxed text-shade-900">
                <code dangerouslySetInnerHTML={highlightJsx(generatedCode.value)} />
              </pre>
            </div>
          </div>

        </div>

        {/* ---------------- 3. Right Inspector Column ---------------- */}
        <div class="w-80 shrink-0 border-l border-shade-150 bg-shade-0 relative flex flex-col p-4 gap-4 overflow-y-auto">
          
          <div class="flex flex-col z-10 gap-4">
            
            {/* Controls Title Header */}
            <div class="items-center h-4 flex shrink-0 justify-between">
              <div class="items-center flex grow gap-1.5">
                <div class="items-center h-7 flex w-full -ml-2 pr-2 pl-1.5 rounded-lg gap-0.75">
                  <div class="font-sans font-medium text-shade-950 text-[14.625px]/4.5">
                    Controls
                  </div>
                </div>
              </div>
              <div class="items-center flex gap-1">
                <ButtonPrimitive
                  as="div"
                  class="items-center flex h-fit cursor-pointer text-shade-500 hover:text-shade-950 transition-colors"
                >
                  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="currentColor" class="rotate-90">
                    <path d="M7.002 10.624C6.669 10.818 6.25 10.578 6.25 10.192V5.808C6.25 5.422 6.669 5.182 7.002 5.376L10.76 7.568C11.09 7.761 11.09 8.239 10.76 8.432L7.002 10.624Z" />
                  </svg>
                </ButtonPrimitive>
              </div>
            </div>

            {/* Status / Priority / Lead Property Rows */}
            <div class="flex flex-col gap-2 pt-1 pb-2">
              
              {/* Status Row */}
              <div class="items-center flex">
                <div class="items-center flex shrink-0 w-22.5">
                  <div class="font-sans font-[450] text-shade-500 text-[13.5px]/4.5">
                    Status
                  </div>
                </div>
                <div class="flex min-w-0">
                  <div class="items-center flex min-h-7 min-w-0 py-0.75 px-1.5 rounded-full">
                    <svg width="16" height="16" viewBox="-1 -1 16 16" class="shrink-0 mr-1.5">
                      <path d="M2.958 3.021L5.708 1.36C6.502 0.88 7.498 0.88 8.292 1.36L11.042 3.021C11.792 3.473 12.25 4.285 12.25 5.161V8.848C12.25 9.725 11.79 10.538 11.039 10.99L8.291 12.643C7.497 13.121 6.504 13.12 5.71 12.641L2.958 10.979C2.208 10.527 1.75 9.715 1.75 8.839V5.161C1.75 4.285 2.208 3.473 2.958 3.021Z" fill="none" stroke="#F2994A" stroke-width="1.5" stroke-linejoin="bevel" stroke-dasharray="1.65 1.35" />
                    </svg>
                    <div class="font-sans font-[450] text-shade-950 text-[13.5px]/4.5 line-clamp-1">
                      Backlog
                    </div>
                  </div>
                </div>
              </div>

              {/* Priority Row */}
              <div class="items-center flex">
                <div class="items-center flex shrink-0 w-22.5">
                  <div class="font-sans font-[450] text-shade-500 text-[13.5px]/4.5">
                    Priority
                  </div>
                </div>
                <div class="flex min-w-0">
                  <div class="items-center flex min-h-7 min-w-0 py-0.75 px-1.5 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 16 16" class="shrink-0 mr-1.5">
                      <rect x="1.5" y="7.25" width="3" height="1.5" rx="0.5" class="fill-shade-500" opacity="0.9" />
                      <rect x="6.5" y="7.25" width="3" height="1.5" rx="0.5" class="fill-shade-500" opacity="0.9" />
                      <rect x="11.5" y="7.25" width="3" height="1.5" rx="0.5" class="fill-shade-500" opacity="0.9" />
                    </svg>
                    <div class="font-sans font-[450] text-shade-850 text-[13.5px]/4.5 line-clamp-1">
                      No priority
                    </div>
                  </div>
                </div>
              </div>

              {/* Lead Row */}
              <div class="items-center flex">
                <div class="items-center flex shrink-0 w-22.5">
                  <div class="font-sans font-[450] text-shade-500 text-[13.5px]/4.5">
                    Lead
                  </div>
                </div>
                <div class="flex min-w-0">
                  <div class="items-center flex min-h-7 min-w-0 py-0.75 px-1.5 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 16 16" class="shrink-0 mr-1.5">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 6.75C10.25 7.993 9.243 9 8 9C6.757 9 5.75 7.993 5.75 6.75C5.75 5.507 6.757 4.5 8 4.5C9.243 4.5 10.25 5.507 10.25 6.75Z" class="fill-shade-500" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M8.575 10C9.972 10 11.261 10.611 12.144 11.614C12.156 11.6 12.17 11.586 12.183 11.571C12.452 11.257 12.925 11.22 13.24 11.489C13.555 11.758 13.591 12.232 13.322 12.547C13.095 12.812 12.848 13.059 12.584 13.288C12.548 13.325 12.511 13.359 12.467 13.389C11.391 14.281 10.044 14.857 8.567 14.976C8.561 14.976 8.555 14.978 8.549 14.979C8.514 14.981 8.479 14.982 8.444 14.984C8.389 14.988 8.333 14.991 8.277 14.993C8.185 14.997 8.093 15 8 15C7.907 15 7.814 14.997 7.722 14.993C7.666 14.991 7.61 14.988 7.555 14.984C7.52 14.982 7.486 14.981 7.451 14.979C7.445 14.978 7.438 14.976 7.432 14.976C5.95 14.856 4.597 14.277 3.52 13.379C3.506 13.368 3.494 13.356 3.481 13.344C3.472 13.336 3.462 13.33 3.453 13.322C3.175 13.084 2.916 12.825 2.678 12.547C2.409 12.232 2.445 11.758 2.76 11.489C3.075 11.22 3.548 11.257 3.817 11.571C3.83 11.586 3.843 11.601 3.856 11.616C4.739 10.612 6.027 10 7.425 10H8.575ZM7.425 11.5C6.471 11.5 5.591 11.917 4.987 12.602C5.853 13.17 6.887 13.5 8 13.5C9.113 13.5 10.147 13.169 11.013 12.601C10.409 11.916 9.529 11.5 8.575 11.5H7.425Z" class="fill-shade-500" />
                    </svg>
                    <div class="font-sans font-[450] text-shade-500 text-[13.5px]/4.5 line-clamp-1">
                      Add lead
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Variant Controls Section */}
            <div class="flex flex-col gap-4 pb-6">
              
              {/* Text Label Control */}
              <div class="flex flex-col gap-1">
                <label class="font-sans text-xs text-shade-500">
                  Text Label
                </label>
                <input
                  type="text"
                  value={label.value}
                  onInput$={(e, el) => (label.value = el.value)}
                  class="h-8 px-3 bg-shade-50 border border-shade-150 rounded-full text-xs text-shade-950 placeholder-shade-400 focus:outline-none focus:border-shade-300"
                />
              </div>

              {/* Variant Selector */}
              <div class="flex flex-col gap-1">
                <label class="font-sans text-xs text-shade-500">
                  Variant
                </label>
                <div class="grid grid-cols-3 gap-1 p-1 bg-shade-50 border border-shade-100 rounded-2xl">
                  {(
                    [
                      "primary",
                      "secondary",
                      "outline",
                      "ghost",
                      "destructive",
                    ] as const
                  ).map((v) => (
                    <ButtonPrimitive
                      key={v}
                      onClick$={() => (variant.value = v)}
                      class={`h-7 rounded-full text-[11px] font-sans capitalize transition-all cursor-pointer border-none ${
                        variant.value === v
                          ? "bg-shade-0 text-shade-950 font-medium"
                          : "text-shade-600 hover:text-shade-950"
                      }`}
                    >
                      {v}
                    </ButtonPrimitive>
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div class="flex flex-col gap-1">
                <label class="font-sans text-xs text-shade-500">
                  Size
                </label>
                <div class="grid grid-cols-3 gap-1 p-1 bg-shade-50 border border-shade-100 rounded-full">
                  {(["sm", "md", "lg"] as const).map((s) => (
                    <ButtonPrimitive
                      key={s}
                      onClick$={() => (size.value = s)}
                      class={`h-7 rounded-full text-[11px] font-sans uppercase transition-all cursor-pointer border-none ${
                        size.value === s
                          ? "bg-shade-0 text-shade-950 font-medium"
                          : "text-shade-600 hover:text-shade-950"
                      }`}
                    >
                      {s}
                    </ButtonPrimitive>
                  ))}
                </div>
              </div>

              {/* Radius Selector */}
              <div class="flex flex-col gap-1">
                <label class="font-sans text-xs text-shade-500">
                  Border Radius
                </label>
                <div class="grid grid-cols-3 gap-1 p-1 bg-shade-50 border border-shade-100 rounded-full">
                  {(["none", "md", "full"] as const).map((r) => (
                    <ButtonPrimitive
                      key={r}
                      onClick$={() => (radius.value = r)}
                      class={`h-7 rounded-full text-[11px] font-sans capitalize transition-all cursor-pointer border-none ${
                        radius.value === r
                          ? "bg-shade-0 text-shade-950 font-medium"
                          : "text-shade-600 hover:text-shade-950"
                      }`}
                    >
                      {r}
                    </ButtonPrimitive>
                  ))}
                </div>
              </div>

              {/* Toggles */}
              <div class="flex flex-col gap-3 pt-2">
                <label class="flex items-center justify-between text-xs font-sans text-shade-600 cursor-pointer">
                  <span>Disabled</span>
                  <input
                    type="checkbox"
                    checked={isDisabled.value}
                    onChange$={(e, el) => (isDisabled.value = el.checked)}
                    class="rounded border-shade-200 bg-shade-50 text-shade-950 focus:ring-0 cursor-pointer size-4"
                  />
                </label>

                <label class="flex items-center justify-between text-xs font-sans text-shade-600 cursor-pointer">
                  <span>Loading</span>
                  <input
                    type="checkbox"
                    checked={isLoading.value}
                    onChange$={(e, el) => (isLoading.value = el.checked)}
                    class="rounded border-shade-200 bg-shade-50 text-shade-950 focus:ring-0 cursor-pointer size-4"
                  />
                </label>

                <label class="flex items-center justify-between text-xs font-sans text-shade-600 cursor-pointer">
                  <span>Full Width</span>
                  <input
                    type="checkbox"
                    checked={isFullWidth.value}
                    onChange$={(e, el) => (isFullWidth.value = el.checked)}
                    class="rounded border-shade-200 bg-shade-50 text-shade-950 focus:ring-0 cursor-pointer size-4"
                  />
                </label>
              </div>

            </div>

          </div>
        </div>

      </div>

    </div>
  );
});
