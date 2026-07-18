import {
  component$,
  useSignal,
  $,
  useOnDocument,
  useVisibleTask$,
  useComputed$,
  createContextId,
  useContext,
  useContextProvider,
  type Signal,
} from "@qwik.dev/core";
import { useModalContext } from "~primitives/@kit/modal";
import { Scrollarea, ScrollareaCues, ScrollareaViewport, ScrollareaBar } from '~ui/@kit/scrollarea';
import { ModalRoot, ModalTrigger } from "./modal";
import {
  CommandPanel,
  CommandInput,
  CommandList,
  CommandGroup,
  CommandItem,
} from "./command";
import { QuickLinkIcon, QuickLinkIconType } from "./icons";
import { SearchIcon14 } from "../icons";
import { QUICK_LINKS_DATA, QuickLinkItem, SEARCH_RESULTS_DATA, SearchResultItem } from "./data";

export interface SearchContextState {
  query: Signal<string>;
  selectedResultIndex: Signal<number>;
  selectedQuickLinkId: Signal<string>;
  filteredResults: Readonly<Signal<SearchResultItem[]>>;
}

export const SearchContext = createContextId<SearchContextState>("search-context");

export const HighlightText = component$<{ text: string; query: string }>((props) => {
  const query = props.query.trim().toLowerCase();
  const text = props.text;

  if (!query) return <span>{text}</span>;

  const index = text.toLowerCase().indexOf(query);
  if (index === -1) return <span>{text}</span>;

  const before = text.slice(0, index);
  const match = text.slice(index, index + query.length);
  const after = text.slice(index + query.length);

  return (
    <span class="inline-grid [grid-template-areas:'stack'] relative">
      <span
        aria-hidden="true"
        class="[grid-area:stack] z-0 pointer-events-none select-none text-transparent whitespace-pre-wrap"
      >
        {before}
        <span class="bg-[#FFEA0057] rounded-xs font-medium">
          {match}
        </span>
        {after}
      </span>
      <span class="[grid-area:stack] z-10 whitespace-pre-wrap">
        {text}
      </span>
    </span>
  );
});

export const SearchBarShortcutListener = component$(() => {
  const context = useModalContext();

  useOnDocument(
    "keydown",
    $((e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (context.control.opened.value) {
          e.preventDefault();
          if (typeof context.control.hide$ === "function") {
            context.control.hide$();
          } else {
            context.control.opened.value = false;
          }
        }
        return;
      }

      const isInput =
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA";

      if (
        (e.key === "k" && (e.metaKey || e.ctrlKey)) ||
        (e.key === "/" && !isInput)
      ) {
        e.preventDefault();
        context.control.show$();
      }
    })
  );

  return null;
});

export const QuickLinkCardIcon = component$<{ icon: QuickLinkIconType }>((props) => (
  <div class="items-center flex justify-center mb-2 rounded-lg shrink-0 ring-1 ring-inset ring-shade-250 size-8 transition-all duration-150 group-hover:scale-105 group-hover:ring-shade-400 group-hover:bg-shade-0 select-none">
    <QuickLinkIcon type={props.icon} />
  </div>
));

export const QuickLinkCardText = component$<{ title: string; description: string }>((props) => (
  <div class="flex flex-col items-start gap-1">
    <div class="text-[14px] leading-[137.5%] self-stretch font-['Geist',system-ui,sans-serif] text-shade-900 transition-colors duration-150 group-hover:text-shade-1000 font-medium select-none">
      {props.title}
    </div>
    <div class="text-[14px] leading-[150%] text-pretty self-stretch font-['Geist',system-ui,sans-serif] text-shade-650 transition-colors duration-150 select-none">
      {props.description}
    </div>
  </div>
));

export const QuickLinkCard = component$<{ link: QuickLinkItem }>((props) => {
  const { selectedQuickLinkId } = useContext(SearchContext);

  return (
    <div
      onMouseEnter$={() => {
        selectedQuickLinkId.value = props.link.id;
      }}
      class={[
        "select-none group items-start flex gap-1.5 flex-col p-2.5 rounded-xl w-[calc(50%-0.375rem)] cursor-pointer transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] active:scale-[0.98]",
        selectedQuickLinkId.value === props.link.id
          ? "bg-shade-150 -translate-y-0.5 shadow-2xs"
          : "hover:bg-shade-100",
      ]}
    >
      <QuickLinkCardIcon icon={props.link.icon} />
      <QuickLinkCardText title={props.link.title} description={props.link.description} />
    </div>
  );
});

export const CommandGreeter = component$(() => (
  <div class="flex items-start justify-between flex-wrap [align-content:start] w-142.25 max-w-full gap-y-2.5 select-none">
    {QUICK_LINKS_DATA.map((link) => (
      <QuickLinkCard key={link.id} link={link} />
    ))}
  </div>
));

// ==========================================
// SEARCH RESULTS LIST
// ==========================================
export const SearchResultsList = component$(() => {
  const { filteredResults, selectedResultIndex } = useContext(SearchContext);

  if (filteredResults.value.length === 0) {
    const { query } = useContext(SearchContext);
    return (
      <div class="p-6 text-center text-shade-650 font-['Geist',system-ui,sans-serif] select-none">
        No results found for "{query.value}"
      </div>
    );
  }

  return (
    <Scrollarea class="w-full relative min-h-0 max-h-120">
      <ScrollareaCues maxHeight={44} />
      <ScrollareaViewport class="flex flex-col gap-2 w-full pr-1">
        <CommandGroup group-name="pagefind" heading="Pages">
          {filteredResults.value.map((item, index) => (
            <CommandItem
              key={item.id}
              value={item.id}
              title={item.title}
              description={item.description}
              isSelected={selectedResultIndex.value === index}
              onSelect$={$(() => {
                selectedResultIndex.value = index;
              })}
            />
          ))}
        </CommandGroup>
      </ScrollareaViewport>
      <ScrollareaBar orientation="vertical" class="w-[13px] right-0 top-[4px] bottom-[4px]" />
    </Scrollarea>
  );
});

// ==========================================
// COMPOSED MODAL CONTENT
// ==========================================
export const SearchModalContent = component$(() => {
  const modalContext = useModalContext();
  const query = useSignal("");
  const selectedQuickLinkId = useSignal("get-started");
  const selectedResultIndex = useSignal(0);

  const pagefindInstance = useSignal<any>(null);
  const pagefindResults = useSignal<any[]>([]);

  useVisibleTask$(
    ({ track }) => {
      const opened = track(() => modalContext.control.opened.value);
      if (!opened) {
        query.value = "";
        selectedQuickLinkId.value = "get-started";
        selectedResultIndex.value = 0;
      }
    },
    { strategy: "document-ready" }
  );

  const loadPagefindResults = $(async (queryValue: string) => {
    selectedResultIndex.value = 0;

    if (!queryValue) {
      pagefindResults.value = [];
      return;
    }

    try {
      if (!pagefindInstance.value) {
        pagefindInstance.value = await import(/* @vite-ignore */ "/pagefind/pagefind.js" as any);
      }

      const search = await pagefindInstance.value.search(queryValue);
      const results = await Promise.all(
        search.results.slice(0, 10).map((r: any) => r.data())
      );

      pagefindResults.value = results.map((item) => ({
        id: item.url,
        title: item.meta?.title || "Untitled",
        description: item.excerpt,
        url: item.url,
        category: item.meta?.category || "Docs",
        raw: item,
      }));
    } catch (err) {
      console.error("Error executing Pagefind search:", err);
      pagefindResults.value = [];
    }
  });

  useVisibleTask$(
    ({ track }) => {
      const queryValue = track(() => query.value.trim());
      const isDev = import.meta.env.DEV;
      if (isDev) return;

      let _ = loadPagefindResults(queryValue);
    },
    { strategy: "document-ready" }
  );

  const filteredResults = useComputed$(() => {
    const q = query.value.trim();
    if (!q) return SEARCH_RESULTS_DATA;
    return pagefindResults.value;
  });

  useContextProvider(SearchContext, {
    query,
    selectedResultIndex,
    selectedQuickLinkId,
    filteredResults,
  });

  const handleKeyDown$ = $((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      e.preventDefault();
      if (typeof modalContext.control.hide$ === "function") {
        modalContext.control.hide$();
      } else {
        modalContext.control.opened.value = false;
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (query.value.trim().length === 0) {
        const idx = QUICK_LINKS_DATA.findIndex((l) => l.id === selectedQuickLinkId.value);
        const nextIdx = Math.min(QUICK_LINKS_DATA.length - 1, idx + 1);
        selectedQuickLinkId.value = QUICK_LINKS_DATA[nextIdx].id;
      } else if (filteredResults.value.length > 0) {
        selectedResultIndex.value = Math.min(
          filteredResults.value.length - 1,
          selectedResultIndex.value + 1
        );
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (query.value.trim().length === 0) {
        const idx = QUICK_LINKS_DATA.findIndex((l) => l.id === selectedQuickLinkId.value);
        const prevIdx = Math.max(0, idx - 1);
        selectedQuickLinkId.value = QUICK_LINKS_DATA[prevIdx].id;
      } else if (filteredResults.value.length > 0) {
        selectedResultIndex.value = Math.max(0, selectedResultIndex.value - 1);
      }
    }
  });

  const isQueryEmpty = query.value.trim().length === 0;

  return (
    <CommandPanel showKeybinds={true} onKeyDown$={handleKeyDown$}>
      <CommandInput placeholder="Button, Typography, How to..." />
      <CommandList label="Suggestions">
        {isQueryEmpty ? <CommandGreeter /> : <SearchResultsList />}
      </CommandList>
    </CommandPanel>
  );
});

// ==========================================
// SEARCH TRIGGER & MAIN BAR EXPORT
// ==========================================
export const SearchBarShortcutBadge = component$(() => (
  <div class="flex ml-auto transition-transform duration-150 group-hover:scale-105 select-none">
    <div class="py-0.5 px-1.5 rounded-md bg-shade-0/80 ring-1 ring-inset ring-shade-1000/15 group-hover:ring-shade-1000/25 transition-colors duration-150">
      <div class="text-[11px] leading-[133.333%] text-center w-max font-bold flex justify-center flex-wrap text-shade-1000/87">
        /
      </div>
    </div>
  </div>
));

export const SearchBarTextLabel = component$(() => (
  <div class="w-full tracking-[0.16px] text-pretty text-shade-600 text-[15px]/4 group-hover:text-shade-750 transition-colors duration-150 select-none">
    <span class="hidden min-[900px]:inline">Search documentation</span>
    <span class="inline min-[900px]:hidden">Search</span>
  </div>
));

export const SearchBarTriggerContent = component$(() => (
  <div class="items-center inline-flex w-full py-2 px-2.5 rounded-full min-[900px]:gap-3 gap-1.5 h-8.5 shrink-0 bg-shade-100 hover:bg-shade-150 transition-colors duration-150 cursor-text select-none">
    <SearchIcon14 />
    <SearchBarTextLabel />
    <SearchBarShortcutBadge />
  </div>
));

export const SearchBar = component$(() => (
  <ModalRoot>
    <SearchBarShortcutListener />
    <ModalTrigger class="group flex items-center shrink-0 h-full w-full justify-end max-w-48 min-[900px]:max-w-70 min-[1100px]:w-102 min-[1100px]:max-w-160 min-[1100px]:justify-center cursor-pointer active:scale-[0.98] transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] select-none">
      <SearchBarTriggerContent />
    </ModalTrigger>
    <SearchModalContent />
  </ModalRoot>
));

export default SearchBar;
