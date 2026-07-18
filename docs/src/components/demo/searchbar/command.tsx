import {
  component$,
  Slot,
  useSignal,
  useVisibleTask$,
  useContext,
  useContextProvider,
  createContextId,
  type Signal,
  type Component,
  type QRL,
} from "@qwik.dev/core";
import { ModalPanel, ModalVectorContext } from "./modal";
import { SearchContext } from "./index";

export interface CommandPanelContextState {
  contentRef: Signal<Element | undefined>;
  activeDescendantId: Signal<string | undefined>;
  listboxId: Signal<string>;
}

export const CommandPanelContext =
  createContextId<CommandPanelContextState>("command-panel-context");

export function useInferredHeight(options: {
  rootRef: Signal<HTMLDivElement | undefined>;
  contentRef: Signal<Element | undefined>;
  isReady: Signal<boolean>;
}) {
  useVisibleTask$(({ track, cleanup }) => {
    const rootEl = track(() => options.rootRef.value);
    const contentEl = track(() => options.contentRef.value);
    const ready = track(() => options.isReady.value);

    if (!rootEl || !contentEl || !ready) return;

    const inferedSetHeight = () => {
      const contentHeight = (contentEl as HTMLElement).offsetHeight;
      const rootStyle = window.getComputedStyle(rootEl);
      const paddingTop = parseFloat(rootStyle.paddingTop) || 0;
      const paddingBottom = parseFloat(rootStyle.paddingBottom) || 0;
      rootEl.style.height = `${contentHeight + paddingTop + paddingBottom}px`;
    };

    rootEl.style.transition = "height 220ms cubic-bezier(0.23, 1, 0.32, 1)";

    const observer = new ResizeObserver(inferedSetHeight);

    observer.observe(contentEl);

    cleanup(() => {
      observer.disconnect();
      if (rootEl) {
        rootEl.style.removeProperty("height");
        rootEl.style.removeProperty("transition");
      }
    });
  });
}

export const CommandFooterKeybinds = component$(() => {
  return (
    <div class="absolute bottom-0 left-0 right-0 h-8 pb-2 px-3 flex items-center justify-end bg-gradient-to-t from-shade-0 via-shade-0 via-75% to-shade-0/30 pointer-events-none z-10 select-none rounded-b-[18px]">
      <div class="ml-auto w-fit flex h-5 items-center gap-4 shrink-0 bg-transparent antialiased pointer-events-auto">
        <div class="items-center flex self-stretch gap-1 select-none">
          <div class="items-center flex justify-center pb-px rounded-xs shrink-0 [box-shadow:#C6C6C633_0px_-1px_0px_inset] bg-shade-100 size-4">
            <svg width="8" height="8" viewBox="0 0 8 8" class="shrink-0 select-none text-shade-650" aria-hidden="true">
              <path d="M3.01 6.13L1.238 4.358L3.01 2.587" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M1.238 4.358L6.762 4.358L6.762 1.871" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <div class="content-center font-['Geist',system-ui,sans-serif] text-shade-650 text-xs/4">select</div>
        </div>

        <div class="items-center flex self-stretch gap-1 select-none">
          <div class="flex items-start gap-0.5 select-none">
            <div class="items-center flex justify-center pb-px rounded-xs shrink-0 [box-shadow:#C6C6C633_0px_-1px_0px_inset] bg-shade-100 size-4">
              <svg width="8" height="8" viewBox="0 0 8 8" class="shrink-0 rotate-180 origin-center text-shade-650" aria-hidden="true">
                <path d="M1.666 4l2.334-2.334 2.333 2.334" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 6.334V1.666" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div class="items-center flex justify-center pb-px rounded-xs shrink-0 [box-shadow:#C6C6C633_0px_-1px_0px_inset] bg-shade-100 size-4">
              <svg width="8" height="8" viewBox="0 0 8 8" class="shrink-0 text-shade-650" aria-hidden="true">
                <path d="M1.666 4l2.334-2.334 2.333 2.334" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M4 6.334V1.666" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
          </div>
          <div class="content-center font-['Geist',system-ui,sans-serif] text-shade-650 text-xs/4">navigate</div>
        </div>

        <div class="items-center flex self-stretch gap-1 select-none">
          <div class="items-center h-4 flex w-4.25 justify-center pb-px rounded-xs shrink-0 [box-shadow:#C6C6C633_0px_-1px_0px_inset] bg-shade-100">
            <div class="tracking-[-0.08em] content-center font-['Geist_Mono',system-ui,sans-serif] font-semibold text-shade-700 text-[8px]/2">esc</div>
          </div>
          <div class="content-center font-['Geist',system-ui,sans-serif] text-shade-650 text-xs/4">close</div>
        </div>
      </div>
    </div>
  );
});

export interface CommandPanelProps {
  showKeybinds?: boolean;
  onKeyDown$?: QRL<(e: KeyboardEvent) => void>;
}

export const CommandPanel = component$<CommandPanelProps>(({ showKeybinds = true, onKeyDown$ }) => {
  const rootRef = useSignal<HTMLDivElement>();
  const contentRef = useSignal<Element>();
  const activeDescendantId = useSignal<string>();
  const listboxId = useSignal("command-listbox-0");
  const { vectorsCalculated } = useContext(ModalVectorContext);

  useContextProvider(CommandPanelContext, {
    contentRef,
    activeDescendantId,
    listboxId,
  });

  useInferredHeight({ rootRef, contentRef, isReady: vectorsCalculated });

  return (
    <ModalPanel halo={true}>
      <div
        ref={rootRef}
        onKeyDown$={onKeyDown$}
        class="relative [font-synthesis:none] flex max-h-180 rounded-[18px] overflow-hidden w-full flex-col p-2 [box-shadow:#0000001F_0px_11px_42px] bg-shade-0/88 backdrop-blur-xl ring ring-separator-box ring-inset antialiased"
      >
        <div ref={contentRef} class="flex w-full flex-col items-start gap-3 pb-8">
          <Slot />
        </div>
        {showKeybinds && <CommandFooterKeybinds />}
      </div>
    </ModalPanel>
  );
});

export interface CommandInputProps {
  placeholder?: string;
}

export const CommandInput = component$<CommandInputProps>(({ placeholder = "Components, How to, ..." }) => {
  const { query, selectedResultIndex } = useContext(SearchContext);
  const { activeDescendantId, listboxId } = useContext(CommandPanelContext);

  const isClearVisible = query.value.trim().length > 0;

  return (
    <div class="flex items-center self-stretch justify-between px-2 py-px group shrink-0">
      <div class="items-center flex gap-2 py-1 flex-1">
        <svg width="16" height="14" viewBox="0 0 21 21" class="shrink-0 min-w-4 min-h-4 transition-transform duration-200 ease-out group-focus-within:scale-110 select-none text-shade-950" aria-hidden="true">
          <g>
            <path d="M18.375 18.375l-3.797-3.797" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
            <circle cx="9.625" cy="9.625" r="6.125" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" />
          </g>
        </svg>

        <input
          type="text"
          role="combobox"
          id="command-input-element"
          aria-expanded="true"
          aria-autocomplete="list"
          aria-controls={listboxId.value}
          aria-activedescendant={activeDescendantId.value}
          value={query.value}
          onInput$={(e) => {
            query.value = (e.target as HTMLInputElement).value;
            selectedResultIndex.value = 0;
          }}
          placeholder={placeholder}
          class="h-5.5 flex-1 bg-transparent font-['Geist',system-ui,sans-serif] text-shade-950 text-[15px]/4.5 outline-none placeholder:text-shade-600 transition-colors duration-150"
          autoFocus
        />
      </div>

      {isClearVisible && (
        <button
          type="button"
          onClick$={() => {
            query.value = "";
          }}
          class="select-none rounded-full flex items-center p-1 bg-shade-900 ring-1 ring-inset ring-shade-1000/6 cursor-pointer hover:bg-shade-800 active:scale-90"
          aria-label="Clear input"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" class="shrink-0 select-none text-shade-0" aria-hidden="true">
            <path d="M10.498 3.5L3.498 10.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M3.498 3.5l7 7" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
});

export interface CommandListProps {
  label?: string;
}

export const CommandList = component$<CommandListProps>(({ label = "Suggestions" }) => {
  const { listboxId } = useContext(CommandPanelContext);

  return (
    <div
      role="listbox"
      id={listboxId.value}
      aria-label={label}
      tabIndex={-1}
      class="flex flex-col gap-2 w-full select-none outline-none"
    >
      <Slot />
    </div>
  );
});

export interface CommandGroupProps {
  heading?: string;
  "group-name"?: string;
}

export const CommandGroup = component$<CommandGroupProps>((props) => {
  const headingId = `cmd-group-heading-${props["group-name"] || Math.random().toString(36).substring(2, 9)}`;

  return (
    <div role="presentation" class="flex flex-col gap-1 w-full">
      {props.heading && (
        <div
          id={headingId}
          aria-hidden="true"
          class="px-2 py-1 text-xs font-semibold text-shade-600 font-['Geist',system-ui,sans-serif]"
        >
          {props.heading}
        </div>
      )}
      <div
        role="group"
        aria-labelledby={props.heading ? headingId : undefined}
        class="flex flex-col gap-1 w-full"
      >
        <Slot />
      </div>
    </div>
  );
});

export interface CommandItemProps {
  id?: string;
  title: string;
  description?: string;
  value: string;
  icon?: Component<any>;
  isSelected?: boolean;
  onSelect$?: QRL<() => void>;
}

export const CommandItem = component$<CommandItemProps>((props) => {
  const itemId = props.id || `cmd-item-${props.value}`;
  const { activeDescendantId } = useContext(CommandPanelContext);
  const Icon = props.icon;

  useVisibleTask$(
    ({ track }) => {
      const selected = track(() => props.isSelected);
      if (selected) {
        activeDescendantId.value = itemId;
      }
    },
    { strategy: "document-ready" }
  );

  return (
    <div
      id={itemId}
      role="option"
      aria-selected={props.isSelected ? "true" : "false"}
      aria-disabled="false"
      onClick$={props.onSelect$}
      class={[
        "select-none group items-center flex rounded-[14px] gap-3 self-stretch p-2 cursor-pointer ring-1 ring-inset ring-shade-100 transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.99]",
        props.isSelected ? "bg-shade-150 -translate-y-0.5 shadow-2xs" : "hover:bg-shade-100",
      ]}
    >
      {Icon && (
        <div class="shrink-0 w-9.5 h-9.5 rounded-[10px] flex items-center justify-center ring-1 ring-inset ring-shade-200 group-hover:ring-shade-250 transition-all duration-150 group-hover:scale-105 group-hover:bg-shade-0">
          <Icon aria-hidden="true" />
        </div>
      )}
      <div class="flex flex-col grow overflow-clip justify-between">
        <div class="font-['Geist',system-ui,sans-serif] font-medium text-shade-1000 text-base/4.5 line-clamp-1">
          {props.title}
        </div>
        {props.description && (
          <div class="font-['Geist',system-ui,sans-serif] text-shade-750 text-sm/4.5 line-clamp-1">
            {props.description}
          </div>
        )}
      </div>
    </div>
  );
});
