import {
  DocIcon24,
  EllipsisIcon24,
  HomeIcon24,
  SearchIcon24,
} from './icons';
import {
  component$,
  useContext,
  createContextId,
  Slot,
  useContextProvider,
  useSignal,
  useVisibleTask$,
  useTask$,
  type Signal
} from "@qwik.dev/core";
import { Button } from "~primitives/@kit/button";
import { animate } from "motion";
import { OwPropsOf } from '~/utils/types';

export type TabValue = 'home' | 'docs' | 'search';
const MobileMenuContext = createContextId<Signal<TabValue>>('mobile-menu-context');

const XIcon24 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ flexShrink: '0' }}>
    <path d="M17.999 6L5.999 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M5.999 6l12 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
  </svg>
);

const MobileMenuRoot = component$(({class: className, ...props}: OwPropsOf<'div'>) => (
  <div
    {...props}
    class={["fixed bottom-0 left-1/2 -translate-x-1/2 w-full flex flex-col items-center pb-3.5 px-3.5 antialiased", className]}
  >
    <div class="flex items-start gap-3 self-stretch w-full">
      <Slot />
    </div>
  </div>
));

const MobileMenuTabsRoot = component$((props: { value: Signal<TabValue> }) => {
  useContextProvider(MobileMenuContext, props.value);

  const inputRef = useSignal<HTMLInputElement>();
  const overlayRef = useSignal<HTMLDivElement>();
  const coverRef = useSignal<HTMLDivElement>();
  const contentRef = useSignal<HTMLDivElement>();

  useVisibleTask$(({ track }) => {
    const val = track(() => props.value.value);
    if (!overlayRef.value || !coverRef.value || !contentRef.value || !inputRef.value) return;

    if (val === 'search') {
      overlayRef.value.style.display = 'block';

      // Force synchronous browser layout recalculation before measuring
      overlayRef.value.offsetHeight;

      // 1. Calculate precise offset from the search tab icon to the overlay's static search icon
      const tabIcon = document.getElementById('search-tab-icon-trigger');
      let offsetLeft = 0;
      if (tabIcon) {
        const tabRect = tabIcon.getBoundingClientRect();
        const activeIcon = contentRef.value.firstElementChild;
        if (activeIcon) {
          const activeIconRect = activeIcon.getBoundingClientRect();
          offsetLeft = tabRect.left - activeIconRect.left;
        }
      }

      // Gentle spring configs for a smooth, premium feel (stiffness: 90, damping: 20)
      const springConfig = { type: 'spring', stiffness: 90, damping: 20 } as const;

      // 2. Animate the grey background cover (subtle slide from right + fade-in)
      animate(
        coverRef.value,
        { x: ['30%', '0%'], opacity: [0, 1] },
        springConfig
      );

      // 3. Slide the entire content layer (starts on search tab, glides smoothly left)
      animate(
        contentRef.value,
        { x: [offsetLeft, 0] },
        springConfig
      );

      // 4. Smoothly fade in the input text during the slide
      animate(
        inputRef.value,
        { opacity: [0, 1] } as any,
        { duration: 0.25, easing: 'ease-out' } as any
      );

      setTimeout(() => inputRef.value?.focus(), 50);
    } else {
      // Instant reset on close
      overlayRef.value.style.display = 'none';
      coverRef.value.style.transform = 'translateX(30%)';
      coverRef.value.style.opacity = '0';
      contentRef.value.style.transform = 'translateX(0px)';
      inputRef.value.style.opacity = '0';
    }
  });

  return (
    <div class="relative flex items-center rounded-full flex-1 p-0.75 [box-shadow:#0000000A_0px_7px_15px,#0000000D_0px_2px_2px,#0000000A_0px_2px_4px] bg-white [outline:1px_solid_#0000000A] overflow-hidden">
      <div class="flex items-center gap-1 self-stretch w-full">
        <Slot />
      </div>

      {/* SEARCH OVERLAY CONTAINER */}
      <div
        ref={overlayRef}
        class="absolute inset-[3px] z-10 overflow-hidden rounded-full bg-white hidden"
        style={{ display: 'none' }}
      >
        {/* Layer 1: Grey Cover background (slides in 30% behind the elements) */}
        <div
          ref={coverRef}
          class="absolute inset-0 rounded-full bg-[#F3F3F3] h-full w-full"
          style={{ transform: 'translateX(30%)', opacity: 0 }}
        />

        {/* Layer 2: Interactive Content Wrapper (slides in 100% from search tab icon position) */}
        <div
          ref={contentRef}
          class="absolute inset-0 flex items-center p-[11px] gap-1.5 z-10 pointer-events-none"
          style={{ transform: 'translateX(0px)' }}
        >
          {/* Active Search Icon (starts precisely aligned with the background tab icon) */}
          <div class="flex items-center flex-col justify-end pl-1 pointer-events-auto shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" style={{ flexShrink: '0' }}>
              <path d="M19.251 19.25l-3.979-3.978" fill="none" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="10.084" cy="10.084" r="7.17" fill="none" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>

          {/* Input field (safely glides with the container) */}
          <input
            ref={inputRef}
            type="text"
            class="bg-transparent border-none outline-none font-['Geist-Regular','Geist',system-ui,sans-serif] text-[#212121] placeholder:text-[#848484] text-[16px] leading-none flex-1 w-full h-full min-w-0 pointer-events-auto"
            placeholder="Search"
            style={{ opacity: 0 }}
          />
        </div>
      </div>
    </div>
  );
});

const MobileMenuTabsItem = component$((props: { icon: any; name: string; value: string }) => {
  const selectedTab = useContext(MobileMenuContext);
  const isActive = selectedTab.value === props.value;
  const isSearchActive = selectedTab.value === 'search';

  return (
    <Button
      as="div"
      onClick$={() => (selectedTab.value = props.value as TabValue)}
      class={[
        'flex items-center py-1.5 rounded-full flex-1 justify-center flex-col gap-0.5 cursor-pointer border-none outline-none transition-colors',
        isActive ? 'bg-[#F1F1F1]' : 'bg-transparent',
      ]}
    >
      <div
        id={props.value === 'search' ? 'search-tab-icon-trigger' : undefined}
        class={[
          'flex items-center flex-col justify-end transition-opacity duration-150',
          props.value === 'search' && isSearchActive ? 'opacity-0' : 'opacity-100',
          isActive
            ? 'text-[#090909] [&_.fill-target]:fill-[#090909]'
            : 'text-[#434343] [&_.fill-target]:fill-none',
        ]}
      >
        {props.icon}
      </div>
      <div
        class={[
          "font-['Geist-Medium','Geist',system-ui,sans-serif] font-medium text-[10px]/2.75 transition-opacity duration-150",
          props.value === 'search' && isSearchActive ? 'opacity-0' : 'opacity-100',
          isActive ? 'text-black' : 'text-[#434343]',
        ]}
      >
        {props.name}
      </div>
    </Button>
  );
});

const MobileMenuActionButton = component$((props: OwPropsOf<'div'>) => (
  <Button
    as="div"
    class="flex items-start gap-6.5 rounded-full p-4 bg-[#212121] cursor-pointer border-none outline-none shrink-0"
    {...props}
  >
    <Slot />
  </Button>
));

export const MobileMenu = component$((props: OwPropsOf<typeof MobileMenuRoot>) => {
  const selectedTab = useSignal<TabValue>('home');
  const previousTab = useSignal<TabValue>('home');

  useTask$(({ track }) => {
    const current = track(() => selectedTab.value);
    if (current !== 'search') {
      previousTab.value = current;
    }
  });

  const isSearch = selectedTab.value === 'search';

  return (
    <MobileMenuRoot {...props}>
      <MobileMenuTabsRoot value={selectedTab}>
        <MobileMenuTabsItem value="home" name="Home" icon={<HomeIcon24 />} />
        <MobileMenuTabsItem value="docs" name="Docs" icon={<DocIcon24 />} />
        <MobileMenuTabsItem value="search" name="Search" icon={<SearchIcon24 />} />
      </MobileMenuTabsRoot>

      <MobileMenuActionButton
        onClick$={() => {
          if (selectedTab.value === 'search') {
            selectedTab.value = previousTab.value;
          }
        }}
      >
        <div class="relative w-6 h-6 flex items-center justify-center text-white">
          {/* Ellipsis */}
          <div
            class={[
              "absolute inset-0 flex items-center justify-center",
              isSearch
                ? 'opacity-0 blur-sm scale-75 rotate-90 transition-all duration-300 ease-out'
                : 'opacity-100 blur-0 scale-100 rotate-0 transition-none' // Returns home instantly
            ]}
          >
            <EllipsisIcon24 />
          </div>
          {/* X Icon */}
          <div
            class={[
              "absolute inset-0 flex items-center justify-center",
              isSearch
                ? 'opacity-100 blur-0 scale-100 rotate-0 transition-all duration-300 ease-out'
                : 'opacity-0 blur-sm scale-75 -rotate-90 transition-none' // Returns home instantly
            ]}
          >
            <XIcon24 />
          </div>
        </div>
      </MobileMenuActionButton>
    </MobileMenuRoot>
  );
});
