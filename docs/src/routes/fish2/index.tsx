import { component$, useSignal } from '@qwik.dev/core';
import type { DocumentHead } from '@qwik.dev/router';
import { buildHead } from '../../utils/build-head';

import {
  PopoverRoot,
  PopoverTrigger,
  PopoverPanel,
} from '~primitives/@kit/popover';

type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end';

export default component$(() => {
  const boxWidth = useSignal(450);
  const boxHeight = useSignal(220);

  const placements: { label: string; placement: Placement }[] = [
    { label: 'Top Start', placement: 'top-start' },
    { label: 'Top', placement: 'top' },
    { label: 'Top End', placement: 'top-end' },
    { label: 'Right Start', placement: 'right-start' },
    { label: 'Right', placement: 'right' },
    { label: 'Right End', placement: 'right-end' },
    { label: 'Bottom Start', placement: 'bottom-start' },
    { label: 'Bottom', placement: 'bottom' },
    { label: 'Bottom End', placement: 'bottom-end' },
    { label: 'Left Start', placement: 'left-start' },
    { label: 'Left', placement: 'left' },
    { label: 'Left End', placement: 'left-end' },
  ];

  return (
    <div class="min-h-screen bg-slate-950 text-slate-100 p-8 flex flex-col gap-12 font-sans">
      <header class="max-w-4xl mx-auto text-center space-y-2">
        <h1 class="text-3xl font-bold tracking-tight text-white">
          Popover Placement & Alignment Showcase
        </h1>
        <p class="text-slate-400">
          Verification test suite for all 12 anchor placements, horizontal/vertical centering, hover tooltips, resizable containers, and cursor tracking mode.
        </p>
      </header>

      {/* Section 1: Hover Tooltips */}
      <section class="max-w-4xl mx-auto w-full space-y-4">
        <h2 class="text-xl font-semibold border-b border-slate-800 pb-2 text-indigo-400">
          1. Hover / Focus Tooltips
        </h2>
        <div class="flex flex-wrap items-center justify-center gap-8 p-12 bg-slate-900 rounded-xl border border-slate-800">
          <PopoverRoot>
            <PopoverTrigger
              hover
              class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-sm font-medium transition cursor-pointer shadow"
            >
              Hover Me (Top)
            </PopoverTrigger>
            <PopoverPanel
              placement="top"
              gutter={8}
              class="px-3 py-1.5 bg-slate-800 text-slate-200 text-xs font-medium rounded-md shadow-xl border border-slate-700"
            >
              Top centered tooltip
            </PopoverPanel>
          </PopoverRoot>

          <PopoverRoot>
            <PopoverTrigger
              hover
              class="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-medium transition cursor-pointer shadow"
            >
              Hover Me (Bottom)
            </PopoverTrigger>
            <PopoverPanel
              placement="bottom"
              gutter={8}
              class="px-3 py-1.5 bg-slate-800 text-slate-200 text-xs font-medium rounded-md shadow-xl border border-slate-700"
            >
              Bottom centered tooltip
            </PopoverPanel>
          </PopoverRoot>

          <PopoverRoot>
            <PopoverTrigger
              hover
              class="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-sm font-medium transition cursor-pointer shadow"
            >
              Hover Me (Right)
            </PopoverTrigger>
            <PopoverPanel
              placement="right"
              gutter={8}
              class="px-3 py-1.5 bg-slate-800 text-slate-200 text-xs font-medium rounded-md shadow-xl border border-slate-700"
            >
              Right side tooltip
            </PopoverPanel>
          </PopoverRoot>
        </div>
      </section>

      {/* Section 2: All Anchor Sides & Alignments */}
      <section class="max-w-4xl mx-auto w-full space-y-4">
        <h2 class="text-xl font-semibold border-b border-slate-800 pb-2 text-indigo-400">
          2. All 12 Placements Test Grid
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-8">
          {placements.map(({ label, placement }) => (
            <div
              key={placement}
              class="p-10 bg-slate-900 rounded-xl border border-slate-800 flex items-center justify-center min-h-[160px]"
            >
              <PopoverRoot>
                <PopoverTrigger class="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md text-xs font-semibold transition cursor-pointer text-center">
                  {label}
                </PopoverTrigger>
                <PopoverPanel
                  placement={placement}
                  gutter={8}
                  class="p-3 bg-slate-800 border border-slate-700 text-slate-200 rounded-lg shadow-2xl text-xs z-50"
                >
                  <div class="font-semibold text-indigo-300">
                    {placement}
                  </div>
                </PopoverPanel>
              </PopoverRoot>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Moving & Resizable Container Test */}
      <section class="max-w-4xl mx-auto w-full space-y-4">
        <h2 class="text-xl font-semibold border-b border-slate-800 pb-2 text-indigo-400">
          3. Moving & Resizable Container Test
        </h2>
        <p class="text-sm text-slate-400">
          Resize the container using the sliders or drag the handle at the bottom-right corner of the dashed box. The popover stays continuously open and tracks the trigger in real time.
        </p>

        {/* Dynamic Sliders */}
        <div class="flex flex-wrap gap-6 items-center bg-slate-900/70 p-4 rounded-lg border border-slate-800 text-xs text-slate-300">
          <div class="flex items-center gap-3">
            <label for="box-width">Width: <span class="text-indigo-400 font-mono">{boxWidth.value}px</span></label>
            <input
              id="box-width"
              type="range"
              min="280"
              max="720"
              value={boxWidth.value}
              onInput$={(e) => {
                boxWidth.value = Number((e.target as HTMLInputElement).value);
              }}
              class="accent-indigo-500 cursor-pointer"
            />
          </div>
          <div class="flex items-center gap-3">
            <label for="box-height">Height: <span class="text-indigo-400 font-mono">{boxHeight.value}px</span></label>
            <input
              id="box-height"
              type="range"
              min="160"
              max="380"
              value={boxHeight.value}
              onInput$={(e) => {
                boxHeight.value = Number((e.target as HTMLInputElement).value);
              }}
              class="accent-indigo-500 cursor-pointer"
            />
          </div>
        </div>

        {/* External Container */}
        <div class="flex p-6 bg-slate-950/50 rounded-xl border border-slate-800/80 min-h-[420px]">
          <div
            style={{ width: `${boxWidth.value}px`, height: `${boxHeight.value}px` }}
            class="resize overflow-auto bg-slate-900 border-2 border-dashed border-indigo-500/50 rounded-xl flex items-center justify-center relative shadow-inner"
          >
            <PopoverRoot ignoreCloseEvents>
              <PopoverTrigger class="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold shadow-lg transition cursor-pointer">
                Centered Moving Trigger
              </PopoverTrigger>
              <PopoverPanel
                placement="top"
                gutter={10}
                flip
                shift
                class="p-3.5 bg-slate-800 border border-slate-700 text-slate-200 rounded-lg shadow-2xl text-xs z-50 w-56"
              >
                <div class="font-semibold text-indigo-300 mb-1">
                  Dynamic Auto-Tracking
                </div>
                <p class="text-[11px] text-slate-400">
                  I recalculate my position live as the container resizes and moves!
                </p>
              </PopoverPanel>
            </PopoverRoot>
          </div>
        </div>
      </section>

      {/* Section 4: Cursor-Tracking Mode (followCursor) */}
      <section class="max-w-4xl mx-auto w-full space-y-6 pb-16">
        <h2 class="text-xl font-semibold border-b border-slate-800 pb-2 text-indigo-400">
          4. Cursor-Tracking Mode (<code class="text-emerald-400 font-mono text-sm">followCursor</code>)
        </h2>
        <p class="text-sm text-slate-400">
          Hover over the triggers below. The popover position tracks the mouse cursor along horizontal (<code class="text-amber-400 font-mono">followCursor="x"</code>), vertical (<code class="text-sky-400 font-mono">followCursor="y"</code>), or both axes (<code class="text-purple-400 font-mono">followCursor="both"</code>) while staying sticky to the anchor bounds.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 4.1: Horizontal Cursor Mode (followCursor="x") - Top placement */}
          <div class="p-6 bg-slate-900 rounded-xl border border-slate-800 flex flex-col gap-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Horizontal Tracking (<code class="font-mono">followCursor="x"</code>)
              </span>
              <span class="text-[11px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">
                placement="top"
              </span>
            </div>
            <p class="text-xs text-slate-400">
              Move your mouse left and right across this wide button. The popover stays anchored at top while updating its X position to follow the cursor.
            </p>
            <PopoverRoot>
              <PopoverTrigger
                hover
                class="w-full py-6 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white rounded-xl font-semibold text-sm shadow-lg transition cursor-crosshair text-center"
              >
                ← Hover and move cursor horizontally across me →
              </PopoverTrigger>
              <PopoverPanel
                placement="top"
                followCursor="x"
                gutter={10}
                class="px-3.5 py-2 bg-slate-800 border border-amber-500/40 text-amber-200 text-xs rounded-lg shadow-2xl font-medium whitespace-nowrap"
              >
                Sticky X Cursor Anchor
              </PopoverPanel>
            </PopoverRoot>
          </div>

          {/* Example 4.2: Horizontal Cursor Mode (followCursor="x") - Bottom placement */}
          <div class="p-6 bg-slate-900 rounded-xl border border-slate-800 flex flex-col gap-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Timeline / Chart Bar (<code class="font-mono">followCursor="x"</code>)
              </span>
              <span class="text-[11px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">
                placement="bottom"
              </span>
            </div>
            <p class="text-xs text-slate-400">
              Simulates a scrubbable audio/video timeline bar or graph component.
            </p>
            <PopoverRoot>
              <PopoverTrigger
                hover
                class="w-full h-12 bg-slate-950 border border-slate-800 rounded-xl flex items-center px-4 relative overflow-hidden cursor-crosshair group"
              >
                <div class="absolute inset-y-0 left-0 w-2/3 bg-indigo-500/20 group-hover:bg-indigo-500/30 transition-all"></div>
                <div class="absolute inset-y-0 left-2/3 w-0.5 bg-indigo-400 shadow-[0_0_12px_#818cf8]"></div>
                <span class="text-xs text-slate-400 relative z-10 font-mono">
                  00:00 ─── Scrubber bar ─── 03:45
                </span>
              </PopoverTrigger>
              <PopoverPanel
                placement="bottom"
                followCursor="x"
                gutter={10}
                class="px-3 py-1.5 bg-indigo-950 border border-indigo-700/60 text-indigo-200 text-xs font-mono rounded shadow-xl"
              >
                Timestamp scrub: Live X offset
              </PopoverPanel>
            </PopoverRoot>
          </div>

          {/* Example 4.3: Vertical Cursor Mode (followCursor="y") - Right placement */}
          <div class="p-6 bg-slate-900 rounded-xl border border-slate-800 flex flex-col gap-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                Vertical Tracking (<code class="font-mono">followCursor="y"</code>)
              </span>
              <span class="text-[11px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">
                placement="right"
              </span>
            </div>
            <p class="text-xs text-slate-400">
              Hover and move your mouse vertically up and down this sidebar card.
            </p>
            <div class="flex items-center justify-center">
              <PopoverRoot>
                <PopoverTrigger
                  hover
                  class="w-48 h-40 bg-gradient-to-b from-sky-600 to-blue-700 hover:from-sky-500 hover:to-blue-600 text-white rounded-xl font-semibold text-xs p-4 flex flex-col justify-between shadow-lg transition cursor-crosshair"
                >
                  <span>▲ Hover Top</span>
                  <span>Move mouse up & down</span>
                  <span>▼ Hover Bottom</span>
                </PopoverTrigger>
                <PopoverPanel
                  placement="right"
                  followCursor="y"
                  gutter={12}
                  class="px-3.5 py-2 bg-slate-800 border border-sky-500/40 text-sky-200 text-xs rounded-lg shadow-2xl font-medium whitespace-nowrap"
                >
                  Sticky Y Cursor Anchor
                </PopoverPanel>
              </PopoverRoot>
            </div>
          </div>

          {/* Example 4.4: Dual Axis Cursor Mode (followCursor="both") */}
          <div class="p-6 bg-slate-900 rounded-xl border border-slate-800 flex flex-col gap-4">
            <div class="flex items-center justify-between">
              <span class="text-xs font-semibold text-purple-400 uppercase tracking-wider">
                Full Point Tracking (<code class="font-mono">followCursor="both"</code>)
              </span>
              <span class="text-[11px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded font-mono">
                placement="top"
              </span>
            </div>
            <p class="text-xs text-slate-400">
              Tracks exact cursor coordinates (X & Y) clamped within the canvas box.
            </p>
            <PopoverRoot>
              <PopoverTrigger
                hover
                class="w-full h-40 bg-slate-950 border border-purple-900/50 rounded-xl flex items-center justify-center relative overflow-hidden cursor-crosshair group hover:border-purple-600/60 transition"
              >
                <div class="text-center space-y-1">
                  <div class="text-xs font-medium text-purple-300">
                    Interactive Image / Canvas Area
                  </div>
                  <div class="text-[11px] text-slate-500">
                    Popover stays centered on cursor point
                  </div>
                </div>
              </PopoverTrigger>
              <PopoverPanel
                placement="top"
                followCursor="both"
                gutter={12}
                class="px-3.5 py-2 bg-purple-950 border border-purple-600/80 text-purple-100 text-xs font-mono rounded-lg shadow-2xl"
              >
                Cursor Coordinates Inspect
              </PopoverPanel>
            </PopoverRoot>
          </div>
        </div>

        {/* Example 4.5: Full-Width Multi-Axis Row Test */}
        <div class="p-6 bg-slate-900 rounded-xl border border-slate-800 space-y-4">
          <div class="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 class="text-sm font-semibold text-slate-200">
              Multi-Placement Cursor Modes Showcase
            </h3>
            <span class="text-xs text-slate-400">Interactive quick test row</span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
            <PopoverRoot>
              <PopoverTrigger
                hover
                class="p-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium text-center transition cursor-crosshair border border-slate-700"
              >
                <div class="font-semibold text-amber-400 mb-1">Top-Start</div>
                <div>followCursor="x"</div>
              </PopoverTrigger>
              <PopoverPanel
                placement="top-start"
                followCursor="x"
                gutter={8}
                class="p-2.5 bg-slate-800 border border-amber-500/40 text-amber-200 text-xs rounded shadow-xl"
              >
                Top-Start X Sticky
              </PopoverPanel>
            </PopoverRoot>

            <PopoverRoot>
              <PopoverTrigger
                hover
                class="p-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium text-center transition cursor-crosshair border border-slate-700"
              >
                <div class="font-semibold text-emerald-400 mb-1">Bottom-End</div>
                <div>followCursor="x"</div>
              </PopoverTrigger>
              <PopoverPanel
                placement="bottom-end"
                followCursor="x"
                gutter={8}
                class="p-2.5 bg-slate-800 border border-emerald-500/40 text-emerald-200 text-xs rounded shadow-xl"
              >
                Bottom-End X Sticky
              </PopoverPanel>
            </PopoverRoot>

            <PopoverRoot>
              <PopoverTrigger
                hover
                class="p-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium text-center transition cursor-crosshair border border-slate-700"
              >
                <div class="font-semibold text-sky-400 mb-1">Left</div>
                <div>followCursor="y"</div>
              </PopoverTrigger>
              <PopoverPanel
                placement="left"
                followCursor="y"
                gutter={8}
                class="p-2.5 bg-slate-800 border border-sky-500/40 text-sky-200 text-xs rounded shadow-xl"
              >
                Left Y Sticky
              </PopoverPanel>
            </PopoverRoot>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = buildHead({
  title: 'Popover Verification Test',
  description: 'Comprehensive test suite for Popover placements, hover tooltips, dynamic resizable containers, and cursor tracking mode',
  shareImage: '/share.png',
});
