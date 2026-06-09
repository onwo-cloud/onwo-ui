import { component$, Slot } from '@builder.io/qwik';
import { PillControls, PillButton } from './pill-controls';
import { CodeBlock } from './code-block';
import { LayoutIcon, RefreshIcon, ExternalLinkIcon, CodeIcon } from './showcase-icons';

interface ShowcaseCardProps {
  title: string;
  code: string;
  isCodeOpen: boolean;
  onToggleCode$: any;
  onFoldCode$: any;
}

export const ShowcaseCard = component$<ShowcaseCardProps>((props) => {
  return (
    <div class="flex flex-col gap-3">
      <h2
        class="text-ink font-semibold"
        style={{ fontVariationSettings: '"wght" 550, "opsz" 20' }}
      >
        {props.title}
      </h2>

      <div class="flex flex-col gap-0 w-full border border-separator/60 transition-colors duration-80 focus-within:border-ink-secondary/40 rounded-xl bg-canvas overflow-hidden relative">
        {/* Floating Pill Controls */}
        <PillControls>
          <PillButton title="Toggle Layout">
            <LayoutIcon />
          </PillButton>
          <PillButton title="Refresh Demo">
            <RefreshIcon />
          </PillButton>
          <PillButton title="Open Externally" disabled>
            <ExternalLinkIcon />
          </PillButton>
          <PillButton
            title="Toggle Code"
            active={props.isCodeOpen}
            onClick$={props.onToggleCode$}
          >
            <CodeIcon />
          </PillButton>
        </PillControls>

        {/* Live Preview Component Stage */}
        <div class="flex items-center justify-center min-h-36 bg-canvas px-8 pt-16 pb-12 transition-all duration-moderate animate-in fade-in">
          <div class="flex flex-wrap items-center gap-2.5 w-full justify-center">
            <Slot />
          </div>
        </div>

        {/* growing code block below */}
        {props.isCodeOpen && (
          <CodeBlock code={props.code} onFold$={props.onFoldCode$} />
        )}
      </div>
    </div>
  );
});
