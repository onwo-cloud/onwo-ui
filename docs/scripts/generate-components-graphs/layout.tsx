import { UIProvider } from "~/utils/icon";
import { ExportGraph } from "./export";
import { component$, Slot } from "@qwik.dev/core";

type PageLayoutMarkupProps = {
  title: string;
  description: string;
  boxedComps: any[];
};

export const PageLayoutMarkup = ({ title, description, boxedComps }: PageLayoutMarkupProps) => (
  <UIProvider>
    <ExportGraph>
      <div class="bg-canvas box-border flex flex-col font-sans [font-synthesis:none] gap-12 h-fit antialiased overflow-clip p-20 w-[1440px]">
        <div class="border-b-separator border-b border-solid box-border flex flex-col gap-3 pb-8">
          <div class="box-border text-ink-secondary font-sans text-macro tracking-widest leading-3.5 uppercase">
            Components / {title}
          </div>
          <div class="box-border text-ink font-sans text-4xl tracking-tighter leading-[1.1]">
            {title}
          </div>
          <div class="box-border text-ink font-sans text-sm leading-normal max-w-[620px] whitespace-pre-wrap">
            {description}<br />Inspired by fluidsystem.
          </div>
        </div>
        <div class="box-border flex flex-wrap gap-8">
          {boxedComps.map((boxed) => {
            const DisplayComponent = boxed.display;
            const formattedTitle = boxed.title.replace(/-/g, ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());
            return (
              <div key={boxed.title} class="box-border flex flex-col shrink-0 gap-4 w-[592px]">
                <div class="items-center bg-canvas-secondary border-separator-secondary rounded-2xl border border-solid box-border flex shrink-0 h-[260px] justify-center p-8">
                  <DisplayComponent />
                </div>
                <div class="box-border text-ink font-sans text-macro tracking-widest leading-3.5 uppercase">
                  {formattedTitle} — Visual Variant Snapshot
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </ExportGraph>
  </UIProvider>
);

export const ComponentLayoutMarkup = component$(() => (
  <UIProvider>
    <ExportGraph>
      <Slot />
    </ExportGraph>
  </UIProvider>
));
