import { component$ } from "@qwik.dev/core";
import { Link } from "@qwik.dev/router";
import { SECTIONS_MAP } from "~/kit";
import {
  Scrollarea,
  ScrollareaBar,
  ScrollareaCues,
  ScrollareaViewport,
} from "~ui/@kit/scrollarea";

interface ComponentsSidebarProps {
  activeKey: string;
}

export const ComponentsSidebar = component$<ComponentsSidebarProps>(({ activeKey }) => {
  const availableKeys = Object.keys(SECTIONS_MAP) as (keyof typeof SECTIONS_MAP)[];

  return (
    <div class="w-64 shrink-0 flex flex-col border-r border-shade-150 p-2 relative min-h-0 h-full">
      <Scrollarea class="w-full h-full relative min-h-0">
        <ScrollareaCues maxHeight={44} />
        <ScrollareaViewport class="flex flex-col gap-4 w-full pr-1">
          <div class="flex flex-col w-full gap-1">
            <div class="items-center self-stretch flex justify-between mb-1 px-2.5">
              <div class="font-sans font-medium text-shade-500 text-xs/[17.4px]">
                Components
              </div>
            </div>

            <div class="flex flex-col w-full gap-0.5">
              {availableKeys.map((key) => {
                const item = SECTIONS_MAP[key];
                const isActive = key === activeKey;
                return (
                  <Link
                    key={key}
                    href={`/components/${key}`}
                    class={`items-center h-8 flex shrink-0 w-full justify-between px-2.5 rounded-full border-none transition-all duration-150 active:scale-[0.98] ${
                      isActive ? "bg-shade-100" : "hover:bg-shade-50"
                    }`}
                  >
                    <div class="items-center flex min-w-0 gap-2">
                      <div
                        class={`font-sans text-sm/5 line-clamp-1 ${
                          isActive
                            ? "font-medium text-shade-950"
                            : "text-shade-600"
                        }`}
                      >
                        {item.title}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </ScrollareaViewport>
        <ScrollareaBar orientation="vertical" class="w-[13px] right-0 top-[4px] bottom-[4px]" />
      </Scrollarea>
    </div>
  );
});
