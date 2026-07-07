import { component$, $ } from '@qwik.dev/core';
import { CopyIcon, FoldIcon } from './showcase-icons';

interface CodeBlockProps {
  code: string;
  onFold$: any;
}

export const CodeBlock = component$<CodeBlockProps>((props) => {
  const codeText = props.code.trim();

  return (
    <div class="border-t border-separator/30 bg-canvas-secondary flex flex-col gap-0 transition-all duration-moderate animate-in fade-in">
      {/* Code Header */}
      <div class="flex items-center justify-between px-4 py-2 bg-canvas-secondary border-b border-separator/20 select-none">
        <div class="text-ink-secondary text-xs font-semibold">
          TypeScript
        </div>
        <div class="flex gap-2">
          {/* Copy Button */}
          <button
            type="button"
            class="relative inline-flex items-center justify-center h-7 px-2.5 rounded-lg text-xs text-ink-secondary hover:text-ink hover:bg-canvas-hover transition-colors duration-80 outline-none border border-separator/40 bg-transparent gap-1.5 cursor-pointer"
            onClick$={$(() => {
              navigator.clipboard.writeText(codeText);
            })}
          >
            <CopyIcon />
            Copy
          </button>
          {/* Fold Back Up Button */}
          <button
            type="button"
            class="relative inline-flex items-center justify-center h-7 px-2.5 rounded-lg text-xs text-ink-secondary hover:text-ink hover:bg-canvas-hover transition-colors duration-80 outline-none border border-separator/40 bg-transparent gap-1 cursor-pointer"
            onClick$={props.onFold$}
          >
            <FoldIcon />
            Fold back up
          </button>
        </div>
      </div>
      {/* Code Editor Area */}
      <div class="p-6 font-mono text-xs text-ink overflow-x-auto w-full select-all">
        <pre class="whitespace-pre-wrap font-mono m-0 p-0 leading-relaxed text-left">
          {codeText}
        </pre>
      </div>
    </div>
  );
});
