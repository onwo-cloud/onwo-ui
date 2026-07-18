import { component$, useSignal } from '@qwik.dev/core';
import { Button as ButtonPrimitive } from '~primitives/@kit/button';
import { useThemeContext } from '../theme-context';
import { DemoIconProvider } from '../icons/create-icons';
import { DemoIcon } from '../icons/demo-icon';

interface PreviewTabProps {
  shadeVars: Record<string, string>;
}

export const PreviewTab = component$<PreviewTabProps>(({ shadeVars }) => {
  const activeViewTab = useSignal<'projects' | 'mailing' | 'hero' | 'table'>('projects');
  const ctx = useThemeContext.use();

  return (
    <DemoIconProvider name={ctx.iconSet.value}>
      <div class="[font-synthesis:none] flex items-start gap-8 self-stretch w-full flex-1 antialiased text-xs/4 select-none">
        <div class="items-start flex flex-col max-w-full overflow-clip gap-2.5 h-[850px] rounded-2xl py-3 px-7 flex-1 w-full bg-[var(--color-shade-100)] border border-solid border-[var(--color-shade-200)]">
          {/* Header Bar */}
          <div class="items-start flex pb-2 gap-3.5 self-stretch justify-end">
            <div class="items-center flex h-10.75 pb-2 gap-4">
              <div class="items-start flex gap-1">
                {(['projects', 'mailing', 'hero', 'table'] as const).map((tab) => {
                  const isActive = activeViewTab.value === tab;
                  const label =
                    tab === 'projects'
                      ? 'Projects'
                      : tab.charAt(0).toUpperCase() + tab.slice(1);
                  return (
                    <ButtonPrimitive
                      key={tab}
                      onClick$={() => (activeViewTab.value = tab)}
                      class={[
                        'items-center flex flex-col justify-center py-1.5 px-2.5 rounded-full overflow-clip transition-colors cursor-pointer border-none',
                        isActive
                          ? 'bg-[var(--color-shade-200)] text-[var(--color-shade-1000)] font-medium'
                          : 'text-[var(--color-shade-850)] hover:bg-[var(--color-shade-150)]',
                      ]}
                    >
                      <span class="w-fit text-center font-['Geist-Regular','Geist',system-ui,sans-serif] flex justify-center flex-wrap text-[15px]/[22.5px]">
                        {label}
                      </span>
                    </ButtonPrimitive>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Workspace Frame - key forces instant VDOM update when iconSet changes */}
          <div key={ctx.iconSet.value} class="w-full flex-1 min-h-0 overflow-hidden">
            <div
              class="h-full w-full rounded-tl-2xl rounded-tr-2xl overflow-hidden bg-[var(--color-shade-25)] border border-[var(--color-shade-150)]"
              style={shadeVars}
            >
              {activeViewTab.value === 'projects' && <ProjectWorkspace />}
              {activeViewTab.value === 'mailing' && <MailWorkspace />}
              {activeViewTab.value === 'hero' && <HeroWorkspace />}
              {activeViewTab.value === 'table' && <DocumentsDashboard />}
            </div>
          </div>
        </div>
      </div>
    </DemoIconProvider>
  );
});

export const ProjectWorkspace = component$(() => {
  return (
    <div class="flex h-full w-full bg-[var(--color-shade-0)] font-sans text-xs text-[var(--color-shade-900)] antialiased [font-synthesis:none] overflow-hidden select-none">
      <aside class="flex w-64 shrink-0 flex-col border-r border-solid border-[var(--color-shade-900)]/10 bg-[var(--color-shade-0)] p-2 gap-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2 p-1 rounded-lg hover:bg-[var(--color-shade-900)]/4 cursor-pointer transition-colors">
            <div class="flex size-6 shrink-0 items-center justify-center rounded-md bg-[var(--color-shade-900)]">
              <span class="font-sans text-[12px] font-medium leading-[145%] text-[var(--color-shade-0)]">
                ON
              </span>
            </div>
            <span class="font-sans text-[14px] leading-[145%] text-[var(--color-shade-900)]">
              onwo
            </span>
            <DemoIcon size="14px" name="chevrons-up-down" class="shrink-0" />
          </div>
          <ButtonPrimitive as="div" class="flex size-8 shrink-0 items-center justify-center rounded-full hover:bg-[var(--color-shade-900)]/4 transition-colors cursor-pointer border-none bg-transparent">
            <DemoIcon size="18px" name="x" />
          </ButtonPrimitive>
        </div>

        {/* Navigation Sections */}
        <div class="flex flex-1 flex-col gap-6 overflow-y-auto">
          {/* Main Controls */}
          <div class="flex flex-col gap-0.5">
            <div class="flex h-8 shrink-0 items-center gap-3 rounded-full px-2.5 hover:bg-[var(--color-shade-900)]/4 cursor-pointer transition-colors">
              <DemoIcon size="18px" name="inbox" />
              <span class="min-w-0 flex-1 truncate font-sans text-[14px] leading-[145%] text-[var(--color-shade-900)]">
                Inbox
              </span>
            </div>
            <div class="flex h-8 shrink-0 items-center gap-3 rounded-full px-2.5 hover:bg-[var(--color-shade-900)]/4 cursor-pointer transition-colors">
              <DemoIcon size="18px" name="circle-dot" />
              <span class="min-w-0 flex-1 truncate font-sans text-[14px] leading-[145%] text-[var(--color-shade-900)]">
                My issues
              </span>
            </div>
            <div class="flex h-8 shrink-0 items-center gap-3 rounded-full px-2.5 hover:bg-[var(--color-shade-900)]/4 cursor-pointer transition-colors">
              <DemoIcon size="18px" name="bot" />
              <span class="min-w-0 flex-1 truncate font-sans text-[14px] leading-[145%] text-[var(--color-shade-900)]">
                Agent
              </span>
            </div>
          </div>

          {/* Workspace List */}
          <div class="flex flex-col gap-0.5">
            <div class="mb-1 px-2.5">
              <span class="font-sans text-[12px] leading-[145%] text-[var(--color-shade-500)]">
                Workspace
              </span>
            </div>
            <div class="flex h-8 shrink-0 items-center gap-3 rounded-full bg-[var(--color-shade-900)]/10 px-2.5 cursor-pointer">
              <DemoIcon size="18px" name="folder" />
              <span class="min-w-0 flex-1 truncate font-sans text-[14px] leading-[145%] text-[var(--color-shade-900)]">
                Projects
              </span>
            </div>
            <div class="flex h-8 shrink-0 items-center gap-3 rounded-full px-2.5 hover:bg-[var(--color-shade-900)]/4 cursor-pointer transition-colors">
              <DemoIcon size="18px" name="layers" />
              <span class="min-w-0 flex-1 truncate font-sans text-[14px] leading-[145%] text-[var(--color-shade-700)]">
                Views
              </span>
            </div>
          </div>

          {/* Teams List */}
          <div class="flex flex-col gap-0.5">
            <div class="mb-1 px-2.5">
              <span class="font-sans text-[12px] leading-[145%] text-[var(--color-shade-500)]">
                Your teams
              </span>
            </div>
            <div class="flex h-8 shrink-0 items-center gap-3 rounded-full px-2.5 hover:bg-[var(--color-shade-900)]/4 cursor-pointer transition-colors">
              <div class="flex size-4 shrink-0 items-center justify-center rounded bg-[var(--color-shade-150)]">
                <span class="font-sans text-[9.5px] font-medium text-[var(--color-shade-850)]">
                  O
                </span>
              </div>
              <span class="min-w-0 flex-1 truncate font-sans text-[14px] leading-[145%] text-[var(--color-shade-700)]">
                Onwo
              </span>
            </div>
          </div>
        </div>

        {/* Sidebar Footer */}
        <div class="pt-2 border-t border-solid border-[var(--color-shade-900)]/10">
          <div class="flex h-8 items-center gap-3 rounded-full px-2.5 hover:bg-[var(--color-shade-900)]/4 cursor-pointer transition-colors">
            <div class="flex size-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-shade-200)]">
              <span class="font-sans text-[11px] leading-[145%] text-[var(--color-shade-700)]">
                KD
              </span>
            </div>
            <span class="min-w-0 flex-1 truncate font-sans text-[14px] leading-[145%] text-[var(--color-shade-900)]">
              Kevin Donahoe
            </span>
          </div>
        </div>
      </aside>

      {/* ---------------- Main View Area ---------------- */}
      <main class="flex flex-1 flex-col min-w-0 bg-[var(--color-shade-0)]">
        {/* Two-Row Aligned Header Navigation Bar */}
        <header class="flex flex-col border-b border-solid border-[var(--color-shade-900)]/10 bg-[var(--color-shade-0)]">
          {/* Row 1: Breadcrumb Path & Header Utility Actions */}
          <div class="flex h-11 items-center justify-between border-b border-solid border-[var(--color-shade-900)]/10 px-4 gap-2">
            <div class="flex items-center min-w-0 gap-1.5">
              <span class="font-sans text-[14px] font-medium leading-[145%] text-[var(--color-shade-700)]">
                Projects
              </span>
              <span class="font-sans text-[14px] font-medium text-[var(--color-shade-500)]">
                ›
              </span>
              <div class="flex items-center gap-1.5 rounded-md px-1 py-0.5">
                <DemoIcon size="16px" name="square" class="shrink-0" />
                <span class="font-sans text-[14px] font-medium leading-[145%] text-[var(--color-shade-900)]">
                  ui
                </span>
              </div>

              {/* Inline Star & More Options */}
              <div class="flex items-center gap-0.5 ml-1">
                <ButtonPrimitive as="div" class="flex size-7 items-center justify-center rounded-full text-[var(--color-shade-700)] hover:bg-[var(--color-shade-900)]/4 cursor-pointer border-none bg-transparent">
                  <DemoIcon size="14px" name="star" />
                </ButtonPrimitive>
                <ButtonPrimitive as="div" class="flex size-7 items-center justify-center rounded-full text-[var(--color-shade-700)] hover:bg-[var(--color-shade-900)]/4 cursor-pointer border-none bg-transparent">
                  <DemoIcon size="14px" name="more-horizontal" />
                </ButtonPrimitive>
              </div>
            </div>

            {/* Right Row 1 Actions */}
            <div class="flex items-center gap-1 shrink-0">
              <ButtonPrimitive as="div" class="flex size-7 items-center justify-center rounded-full text-[var(--color-shade-700)] hover:bg-[var(--color-shade-900)]/4 cursor-pointer border-none bg-transparent">
                <DemoIcon size="14px" name="link" />
              </ButtonPrimitive>
              <ButtonPrimitive as="div" class="flex size-7 items-center justify-center rounded-full text-[var(--color-shade-700)] hover:bg-[var(--color-shade-900)]/4 cursor-pointer border-none bg-transparent">
                <DemoIcon size="14px" name="bell" />
              </ButtonPrimitive>
            </div>
          </div>

          {/* Row 2: Tabs Navigation & View Control Toolbar */}
          <div class="flex h-11 items-center justify-between px-4 gap-2">
            {/* View Tabs */}
            <div class="flex items-center gap-1 min-w-0">
              <ButtonPrimitive as="div" class="flex h-7 items-center justify-center rounded-full px-3 font-sans text-[13.5px] font-medium text-[var(--color-shade-700)] hover:bg-[var(--color-shade-900)]/4 cursor-pointer border-none bg-transparent">
                Overview
              </ButtonPrimitive>
              <ButtonPrimitive as="div" class="flex h-7 items-center justify-center rounded-full px-3 font-sans text-[13.5px] font-medium text-[var(--color-shade-700)] hover:bg-[var(--color-shade-900)]/4 cursor-pointer border-none bg-transparent">
                Activity
              </ButtonPrimitive>
              <ButtonPrimitive as="div" class="flex h-7 items-center justify-center rounded-full bg-[var(--color-shade-900)]/10 px-3 font-sans text-[13.5px] font-medium text-[var(--color-shade-900)] cursor-pointer border-none">
                Issues
              </ButtonPrimitive>
              <ButtonPrimitive as="div" class="flex size-7 items-center justify-center rounded-full text-[var(--color-shade-700)] hover:bg-[var(--color-shade-900)]/4 cursor-pointer border-none bg-transparent">
                <DemoIcon size="14px" name="plus" />
              </ButtonPrimitive>
            </div>

            {/* View Filters & Layout Display Controls */}
            <div class="flex items-center gap-1 shrink-0">
              <ButtonPrimitive as="div" class="flex size-7 items-center justify-center rounded-full text-[var(--color-shade-700)] hover:bg-[var(--color-shade-900)]/4 cursor-pointer border-none bg-transparent">
                <DemoIcon size="14px" name="filter" />
              </ButtonPrimitive>
              <ButtonPrimitive as="div" class="flex size-7 items-center justify-center rounded-full text-[var(--color-shade-700)] hover:bg-[var(--color-shade-900)]/4 cursor-pointer border-none bg-transparent">
                <DemoIcon size="14px" name="square" />
              </ButtonPrimitive>
              <ButtonPrimitive as="div" class="flex size-7 items-center justify-center rounded-full bg-[var(--color-shade-900)]/10 text-[var(--color-shade-900)] cursor-pointer border-none">
                <DemoIcon size="14px" name="list" />
              </ButtonPrimitive>
            </div>
          </div>
        </header>

        {/* Content Container */}
        <div class="flex flex-1 flex-col overflow-y-auto p-6 max-w-[940px] w-full mx-auto gap-6">
          {/* Section Group Header */}
          <div class="flex items-center justify-between border-b border-solid border-[var(--color-shade-900)]/10 pb-3">
            <div class="flex items-center gap-2">
              <span class="font-sans text-[20px] font-normal leading-[120%] [letter-spacing:-0.20px] text-[var(--color-shade-900)]">
                Backlog
              </span>
              <span class="rounded-md bg-[var(--color-shade-900)]/5 px-1.5 py-0.5 font-sans text-[12px] text-[var(--color-shade-700)]">
                49
              </span>
            </div>

            {/* Primary Action Button */}
            <ButtonPrimitive as="div" class="flex h-8 items-center justify-center gap-1.25 rounded-full bg-[var(--color-shade-900)] px-3 font-sans text-[14px] text-[var(--color-shade-0)] hover:bg-[var(--color-shade-950)] cursor-pointer border-none transition-colors">
              <DemoIcon size="16px" name="plus" />
              <span>Add Issue</span>
            </ButtonPrimitive>
          </div>

          {/* Issue Cards */}
          <div class="flex flex-col gap-3">
            {/* Active Card */}
            <div class="flex flex-col rounded-[22px] border border-solid border-[var(--color-shade-900)] bg-[var(--color-shade-0)] p-4 gap-3 shadow-xs">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="rounded-lg bg-[var(--color-shade-900)]/5 px-1.5 py-0.5 font-sans text-[13px] text-[var(--color-shade-700)]">
                    UI-104
                  </span>
                  <span class="font-sans text-[14px] leading-[145%] text-[var(--color-shade-900)]">
                    Design system token extraction and CSS export schema
                  </span>
                </div>
                <span class="rounded-md bg-[var(--color-shade-150)] px-1.25 py-0.5 font-sans text-[12px] text-[var(--color-shade-700)]">
                  Backlog
                </span>
              </div>
              <div class="flex items-center gap-4 text-[var(--color-shade-700)]">
                <span class="font-sans text-[13px] leading-[145%]">
                  Assignee: Kevin Donahoe
                </span>
                <span class="font-sans text-[13px] leading-[145%]">
                  Created Aug 7
                </span>
              </div>
            </div>

            {/* Standard Card */}
            <div class="flex flex-col rounded-[22px] border border-solid border-[var(--color-shade-900)]/10 bg-[var(--color-shade-0)] p-4 hover:border-[var(--color-shade-400)] transition-colors gap-3 cursor-pointer">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="rounded-lg bg-[var(--color-shade-900)]/5 px-1.5 py-0.5 font-sans text-[13px] text-[var(--color-shade-700)]">
                    UI-103
                  </span>
                  <span class="font-sans text-[14px] leading-[145%] text-[var(--color-shade-900)]">
                    Refactor dark mode palette to Aaru light specifications
                  </span>
                </div>
                <span class="rounded-md bg-[var(--color-shade-150)] px-1.25 py-0.5 font-sans text-[12px] text-[var(--color-shade-700)]">
                  Backlog
                </span>
              </div>
              <div class="flex items-center gap-4 text-[var(--color-shade-700)]">
                <span class="font-sans text-[13px] leading-[145%]">Unassigned</span>
                <span class="font-sans text-[13px] leading-[145%]">
                  Created Aug 6
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ---------------- Right Inspector Panel (384px) ---------------- */}
      <aside class="flex w-[384px] shrink-0 flex-col gap-3 border-l border-solid border-[var(--color-shade-900)]/10 bg-[var(--color-shade-0)] p-3 overflow-y-auto">
        {/* Properties Card */}
        <div class="rounded-2xl border border-solid border-[var(--color-shade-900)]/10 bg-[var(--color-shade-0)]">
          <div class="flex h-12 items-center justify-between px-4">
            <span class="font-sans text-[14px] leading-[120%] [letter-spacing:-0.14px] text-[var(--color-shade-900)]">
              Properties
            </span>
            <DemoIcon size="16px" name="chevron-down" />
          </div>
          <div class="flex flex-col gap-3 px-4 pb-4">
            <div class="flex items-center gap-4">
              <span class="w-20 shrink-0 font-sans text-[14px] text-[var(--color-shade-700)]">
                Status
              </span>
              <span class="rounded-md bg-[var(--color-shade-150)] px-1.25 py-0.5 font-sans text-[12px] text-[var(--color-shade-700)]">
                Backlog
              </span>
            </div>
            <div class="flex items-center gap-4">
              <span class="w-20 shrink-0 font-sans text-[14px] text-[var(--color-shade-700)]">
                Priority
              </span>
              <span class="font-sans text-[14px] text-[var(--color-shade-500)]">
                No priority
              </span>
            </div>
            <div class="flex items-center gap-4">
              <span class="w-20 shrink-0 font-sans text-[14px] text-[var(--color-shade-700)]">
                Lead
              </span>
              <span class="font-sans text-[14px] text-[var(--color-shade-500)]">
                Add lead
              </span>
            </div>
            <div class="flex items-center gap-4">
              <span class="w-20 shrink-0 font-sans text-[14px] text-[var(--color-shade-700)]">
                Teams
              </span>
              <div class="flex items-center gap-1.5">
                <div class="flex size-4 items-center justify-center rounded bg-[var(--color-shade-150)]">
                  <span class="font-sans text-[9.5px] font-medium text-[var(--color-shade-850)]">
                    O
                  </span>
                </div>
                <span class="font-sans text-[14px] text-[var(--color-shade-900)]">
                  Onwo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Progress Card */}
        <div class="rounded-2xl border border-solid border-[var(--color-shade-900)]/10 bg-[var(--color-shade-0)]">
          <div class="flex h-12 items-center justify-between px-4">
            <span class="font-sans text-[14px] leading-[120%] [letter-spacing:-0.14px] text-[var(--color-shade-900)]">
              Progress
            </span>
            <DemoIcon size="16px" name="chevron-down" />
          </div>
          <div class="flex flex-col gap-3 px-4 pb-4">
            <div class="flex justify-between font-sans text-[14px]">
              <span class="text-[var(--color-shade-700)]">Scope</span>
              <span class="text-[var(--color-shade-900)]">49</span>
            </div>
            <div class="flex justify-between font-sans text-[14px]">
              <span class="text-[var(--color-shade-700)]">Completed</span>
              <span class="text-[var(--color-shade-900)]">0</span>
            </div>
          </div>
        </div>

        {/* Activity Card */}
        <div class="rounded-2xl border border-solid border-[var(--color-shade-900)]/10 bg-[var(--color-shade-0)]">
          <div class="flex h-12 items-center justify-between px-4">
            <span class="font-sans text-[14px] leading-[120%] [letter-spacing:-0.14px] text-[var(--color-shade-900)]">
              Activity
            </span>
            <span class="font-sans text-[12px] text-[var(--color-shade-500)] hover:underline cursor-pointer">
              See all
            </span>
          </div>
          <div class="flex flex-col gap-3 px-4 pb-4">
            <p class="font-sans text-[13px] leading-[145%] text-[var(--color-shade-700)]">
              Linear created the project on behalf of emilien.jegou1 · Aug 7
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
});

function MailWorkspace() {
  return (
    <div class="flex h-full w-full rounded-2xl border border-shade-200 bg-shade-0 text-shade-800 font-sans antialiased overflow-hidden shadow-none">
      {/* 1. Left Navigation Sidebar */}
      <aside class="w-64 shrink-0 flex flex-col p-2 gap-4 border-r border-shade-200 bg-shade-25">
        {/* Workspace Switcher Pill */}
        <div class="flex items-center justify-between p-1.5 rounded-xl hover:bg-shade-100 active:scale-[0.98] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer select-none">
          <div class="flex items-center gap-2">
            <div class="size-6 rounded-md bg-shade-900 text-shade-0 flex items-center justify-center text-xs font-sans">
              A
            </div>
            <span class="text-sm text-shade-950 font-sans">
              Alicia Koch
            </span>
          </div>
          <DemoIcon size="16px" name="chevron-down" class="text-shade-500 shrink-0" />
        </div>

        {/* Main Nav Items */}
        <div class="flex flex-col gap-0.5 flex-1 overflow-y-auto">
          {/* Active Nav Item */}
          <ButtonPrimitive as="div" Primitive as="div" class="h-8 flex items-center justify-between px-2.5 rounded-full bg-shade-150 text-shade-950 text-sm font-sans w-full text-left active:scale-[0.97] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer select-none">
            <div class="flex items-center gap-2.5 min-w-0">
              <DemoIcon size="16px" name="inbox" class="shrink-0 stroke-current" />
              <span class="truncate">Inbox</span>
            </div>
            <span class="text-xs text-shade-600">128</span>
          </ButtonPrimitive>

          {/* Inactive Nav Items */}
          {[
            { label: 'Drafts', count: '9', icon: 'file-text' },
            { label: 'Sent', count: null, icon: 'send' },
            { label: 'Junk', count: '23', icon: 'alert-circle' },
            { label: 'Trash', count: null, icon: 'trash-2' },
            { label: 'Archive', count: null, icon: 'archive' }
          ].map((item) => (
            <ButtonPrimitive as="div" Primitive as="div"
              key={item.label}
              class="h-8 flex items-center justify-between px-2.5 rounded-full text-shade-800 hover:bg-shade-100 active:scale-[0.97] text-sm font-sans w-full text-left transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer select-none"
            >
              <div class="flex items-center gap-2.5 min-w-0">
                <DemoIcon size="16px" name={item.icon} class="shrink-0 text-shade-600" />
                <span class="truncate">{item.label}</span>
              </div>
              {item.count && (
                <span class="text-xs text-shade-600">{item.count}</span>
              )}
            </ButtonPrimitive>
          ))}

          {/* Nav Sub-section */}
          <div class="mt-4 mb-1 px-2.5">
            <span class="text-xs text-shade-550 font-sans">Categories</span>
          </div>
          {[
            { label: 'Social', count: '972' },
            { label: 'Updates', count: '342' },
            { label: 'Forums', count: '128' },
            { label: 'Shopping', count: '8' }
          ].map((cat) => (
            <ButtonPrimitive as="div" Primitive as="div"
              key={cat.label}
              class="h-8 flex items-center justify-between px-2.5 rounded-full text-shade-800 hover:bg-shade-100 active:scale-[0.97] text-sm font-sans w-full text-left transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer select-none"
            >
              <span class="truncate">{cat.label}</span>
              <span class="text-xs text-shade-600">{cat.count}</span>
            </ButtonPrimitive>
          ))}
        </div>
      </aside>

      {/* 2. Middle Column: Email List */}
      <section class="w-80 shrink-0 flex flex-col border-r border-shade-200 bg-shade-0">
        {/* Header & Filter Pill Tabs */}
        <div class="p-3 flex flex-col gap-3 border-b border-shade-200">
          <div class="flex items-center justify-between">
            <h1 class="text-[20px] leading-[120%] tracking-[-0.20px] text-shade-950 font-normal">
              Inbox
            </h1>
            {/* Pill Segment Bar */}
            <div class="flex gap-1 bg-shade-100 p-0.5 rounded-full">
              <ButtonPrimitive as="div" Primitive as="div" class="py-1 px-2.5 rounded-full bg-shade-200 text-xs text-shade-950 font-sans active:scale-[0.95] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer select-none">
                All mail
              </ButtonPrimitive>
              <ButtonPrimitive as="div" Primitive as="div" class="py-1 px-2.5 rounded-full text-xs text-shade-800 font-sans hover:bg-shade-150 hover:text-shade-950 active:scale-[0.95] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer select-none">
                Unread
              </ButtonPrimitive>
            </div>
          </div>

          {/* Pill Search Input */}
          <div class="h-8 px-3 rounded-full bg-shade-50 border border-shade-200 focus-within:border-shade-400 focus-within:bg-shade-0 flex items-center gap-2 transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]">
            <DemoIcon size="16px" name="search" class="text-shade-500 shrink-0" />
            <input
              type="text"
              placeholder="Search emails..."
              class="bg-transparent text-sm text-shade-950 placeholder-shade-550 focus:outline-none w-full font-sans"
            />
          </div>
        </div>

        {/* Email Cards List */}
        <div class="flex-1 overflow-y-auto p-2 flex flex-col gap-2">
          {/* Selected Mail Card */}
          <div class="p-3 rounded-2xl bg-shade-150 border border-shade-200 hover:border-shade-300 active:scale-[0.98] flex flex-col gap-2 cursor-pointer transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] select-none">
            <div class="flex items-center justify-between">
              <span class="text-sm text-shade-950 font-sans">
                William Smith
              </span>
              <span class="text-xs text-shade-600 font-sans">
                3y ago
              </span>
            </div>
            <div class="text-xs text-shade-850 font-sans">
              Meeting Tomorrow
            </div>
            <p class="text-xs text-shade-600 font-sans line-clamp-2 leading-[145%]">
              Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share...
            </p>
            <div class="flex items-center gap-1.5 mt-1">
              <span class="h-5 px-2 flex items-center rounded-full bg-shade-0 border border-shade-200 text-[11px] text-shade-800 font-sans">
                meeting
              </span>
              <span class="h-5 px-2 flex items-center rounded-full bg-shade-900 text-[11px] text-shade-0 font-sans">
                work
              </span>
            </div>
          </div>

          {/* Additional Mail Items */}
          {[
            { name: 'Alice Smith', subject: 'Re: Project Update', unread: false, tags: ['work', 'important'] },
            { name: 'Emily Davis', subject: 'Question about Budget', unread: true, tags: ['work', 'budget'] },
            { name: 'Bob Johnson', subject: 'Weekend Plans', unread: false, tags: ['personal'] }
          ].map((mail, idx) => (
            <div
              key={idx}
              class="p-3 rounded-2xl bg-shade-0 border border-shade-200 hover:bg-shade-50 hover:border-shade-300 active:scale-[0.98] flex flex-col gap-2 cursor-pointer transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] select-none"
            >
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="text-sm text-shade-950 font-sans">
                    {mail.name}
                  </span>
                  {mail.unread && (
                    <span class="size-2 rounded-full bg-shade-900 shrink-0" />
                  )}
                </div>
                <span class="text-xs text-shade-600 font-sans">
                  3y ago
                </span>
              </div>
              <div class="text-xs text-shade-800 font-sans">
                {mail.subject}
              </div>
              <p class="text-xs text-shade-600 font-sans line-clamp-2 leading-[145%]">
                Thank you for the detailed progress report. The team has done an exceptional job addressing key feedback...
              </p>
              <div class="flex items-center gap-1.5 mt-1">
                {mail.tags.map((tag) => (
                  <span
                    key={tag}
                    class="h-5 px-2 flex items-center rounded-full bg-shade-150 text-[11px] text-shade-800 font-sans"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Right Column: Message Inspector View */}
      <main class="flex-1 flex flex-col bg-shade-0 overflow-hidden">
        {/* Detail View Utility Topbar */}
        <div class="h-12 px-4 flex items-center justify-between border-b border-shade-200 shrink-0">
          <div class="flex items-center gap-1">
            {[
              { label: 'Archive', icon: 'archive' },
              { label: 'Trash', icon: 'trash-2' },
              { label: 'Snooze', icon: 'clock' },
            ].map((action) => (
              <ButtonPrimitive as="div" Primitive as="div"
                key={action.label}
                class="size-8 rounded-full flex items-center justify-center text-shade-800 hover:bg-shade-150 active:scale-[0.92] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer select-none"
                title={action.label}
              >
                <DemoIcon size="16px" name={action.icon} />
              </ButtonPrimitive>
            ))}
          </div>
          <div class="flex items-center gap-1">
            <ButtonPrimitive as="div" Primitive as="div" class="size-8 rounded-full flex items-center justify-center text-shade-800 hover:bg-shade-150 active:scale-[0.92] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer select-none">
              <DemoIcon size="16px" name="arrow-right" />
            </ButtonPrimitive>
          </div>
        </div>

        {/* Message Content Area */}
        <div class="flex-1 overflow-y-auto flex flex-col p-6 gap-6">
          {/* Header & Sender Meta */}
          <div class="flex items-start justify-between border-b border-shade-150 pb-4">
            <div class="flex items-start gap-3">
              <div class="size-9 rounded-full bg-shade-150 text-shade-800 flex items-center justify-center text-xs font-sans shrink-0">
                WS
              </div>
              <div class="flex flex-col gap-0.5">
                <h2 class="text-[20px] leading-[120%] tracking-[-0.20px] text-shade-950 font-normal">
                  Meeting Tomorrow
                </h2>
                <span class="text-xs text-shade-600 font-sans">
                  William Smith &lt;williamsmith@example.com&gt;
                </span>
              </div>
            </div>
            <span class="text-xs text-shade-600 font-sans shrink-0">
              Oct 22, 2023, 9:00 AM
            </span>
          </div>

          {/* Email Body Copy */}
          <div class="text-sm text-shade-800 font-sans leading-[145%] space-y-4">
            <p>
              Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.
            </p>
            <p>
              Please come prepared with any questions or insights you may have. Looking forward to our meeting!
            </p>
            <p class="pt-2 text-shade-600">
              Best regards,<br />
              William
            </p>
          </div>
        </div>

        {/* Reply Composer Bar */}
        <div class="p-4 border-t border-shade-200 shrink-0 bg-shade-0">
          <div class="flex flex-col gap-3 rounded-2xl border border-shade-200 focus-within:border-shade-400 transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] p-3 bg-shade-0">
            <textarea
              rows={2}
              placeholder="Reply to William Smith..."
              class="w-full bg-transparent text-sm text-shade-950 placeholder-shade-550 focus:outline-none resize-none font-sans"
            />
            <div class="flex items-center justify-between">
              <label class="flex items-center gap-2 cursor-pointer select-none group">
                <input
                  type="checkbox"
                  class="rounded border-shade-300 text-shade-900 focus:ring-0 transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer"
                />
                <span class="text-xs text-shade-600 group-hover:text-shade-950 transition-colors duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] font-sans">
                  Mute thread
                </span>
              </label>
              {/* Primary Action ButtonPrimitive */}
              <ButtonPrimitive as="div" Primitive as="div" class="h-8 px-4 rounded-full bg-shade-900 text-shade-0 text-sm font-sans flex items-center justify-center hover:bg-shade-950 active:scale-[0.96] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer select-none">
                Send
              </ButtonPrimitive>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function HeroWorkspace() {
  return (
    <div class="flex flex-col h-full w-full rounded-2xl border border-shade-200 bg-shade-0 text-shade-800 font-sans antialiased overflow-hidden shadow-none">
      {/* Top Header / Navigation */}
      <header class="h-12 px-6 flex items-center justify-between border-b border-shade-200 shrink-0 bg-shade-0">
        <div class="flex items-center gap-3">
          <div class="size-6 rounded-md bg-shade-900 text-shade-0 flex items-center justify-center text-xs font-sans shrink-0">
            A
          </div>
          <span class="text-sm font-medium text-shade-950 font-sans">
            Acme UI
          </span>
        </div>
        <nav class="flex items-center gap-6">
          {['Products', 'Solutions', 'Docs', 'Pricing'].map((item) => (
            <span
              key={item}
              class="text-xs text-shade-600 hover:text-shade-950 cursor-pointer font-sans transition-colors"
            >
              {item}
            </span>
          ))}
        </nav>
        <div class="flex items-center gap-2">
          <ButtonPrimitive as="div" Primitive
            as="div"
            class="h-7 px-3 rounded-full text-xs text-shade-800 hover:bg-shade-100 flex items-center justify-center font-sans cursor-pointer transition-all"
          >
            Sign In
          </ButtonPrimitive>
          <ButtonPrimitive as="div" Primitive
            as="div"
            class="h-7 px-3 rounded-full bg-shade-900 text-shade-0 text-xs font-sans flex items-center justify-center hover:bg-shade-850 cursor-pointer transition-all"
          >
            Get Started
          </ButtonPrimitive>
        </div>
      </header>

      {/* Hero Body Content */}
      <div class="flex-1 overflow-y-auto flex flex-col items-center justify-center p-8 text-center gap-5 bg-shade-50">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-shade-150 border border-shade-200 text-xs text-shade-850 font-sans">
          <span class="size-2 rounded-full bg-shade-900" />
          <span>Announcing Theme Tokens 2.0</span>
          <span class="text-shade-500">→</span>
        </div>

        <h1 class="text-3xl font-normal text-shade-950 max-w-lg leading-tight tracking-tight font-sans">
          Build high quality interfaces with customizable shade scales
        </h1>

        <p class="text-xs text-shade-600 max-w-md leading-relaxed font-sans">
          Flexible, accessible UI primitive components designed for Qwik. Customize colors and shade variables effortlessly.
        </p>

        <div class="flex items-center gap-3 pt-1">
          <ButtonPrimitive as="div" Primitive
            as="div"
            class="h-8 px-4 rounded-full bg-shade-900 text-shade-0 text-xs font-sans flex items-center justify-center hover:bg-shade-850 cursor-pointer transition-all"
          >
            Start Building
          </ButtonPrimitive>
          <ButtonPrimitive as="div" Primitive
            as="div"
            class="h-8 px-4 rounded-full border border-shade-200 bg-shade-0 text-shade-800 text-xs font-sans flex items-center justify-center hover:bg-shade-100 cursor-pointer transition-all"
          >
            Read Documentation
          </ButtonPrimitive>
        </div>

        {/* Feature Cards Grid */}
        <div class="grid grid-cols-3 gap-3 w-full max-w-xl mt-4 text-left">
          {[
            {
              title: 'Design Tokens',
              desc: 'Seamless palette generation and shade variables.',
            },
            {
              title: 'Accessible Primitives',
              desc: 'Unstyled, accessible primitives built for production.',
            },
            {
              title: 'Qwik Optimized',
              desc: 'Zero hydration overhead for maximum performance.',
            },
          ].map((feat) => (
            <div
              key={feat.title}
              class="p-3.5 rounded-xl bg-shade-0 border border-shade-200 flex flex-col gap-1"
            >
              <span class="text-xs font-normal text-shade-950 font-sans">
                {feat.title}
              </span>
              <span class="text-[11px] text-shade-600 leading-relaxed font-sans">
                {feat.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DocumentsDashboard() {
  return (
    <div class="flex h-screen w-full bg-shade-50 text-shade-800 font-sans antialiased overflow-hidden shadow-none">

      {/* 1. Left Navigation Sidebar */}
      <aside class="w-64 shrink-0 flex flex-col p-2 gap-4 border-r border-shade-200 bg-shade-0">

        {/* Workspace Brand Switcher */}
        <div class="flex items-center justify-between p-2 rounded-xl hover:bg-shade-100 active:scale-[0.98] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer select-none">
          <div class="flex items-center gap-2.5 min-w-0">
            <div class="size-6 rounded-md bg-shade-900 text-shade-0 flex items-center justify-center text-xs font-sans shrink-0">
              A
            </div>
            <span class="text-sm font-sans text-shade-950 truncate">
              Acme Inc.
            </span>
          </div>
          <span class="text-xs text-shade-500 shrink-0">⌘K</span>
        </div>

        {/* Quick Action Trigger */}
        <div class="px-1">
          <ButtonPrimitive as="div" class="h-8 w-full px-3 rounded-full bg-shade-900 hover:bg-shade-850 active:scale-[0.97] text-shade-0 text-sm font-sans flex items-center justify-between transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer">
            <span>Quick Create</span>
            <DemoIcon size="14px" name="plus" class="text-shade-300" />
          </ButtonPrimitive>
        </div>

        {/* Main Navigation Stack */}
        <div class="flex flex-col gap-0.5 flex-1 overflow-y-auto">
          {[
            { label: "Dashboard", active: false },
            { label: "Documents", active: true, count: "68" },
            { label: "Lifecycle", active: false },
            { label: "Analytics", active: false },
            { label: "Projects", active: false },
            { label: "Team", active: false },
          ].map((item) => (
            <ButtonPrimitive as="div"
              key={item.label}
              class={`h-8 flex items-center justify-between px-2.5 rounded-full text-sm font-sans w-full text-left active:scale-[0.97] transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer select-none ${item.active
                ? "bg-shade-150 text-shade-950"
                : "text-shade-800 hover:bg-shade-100"
                }`}
            >
              <span class="truncate">{item.label}</span>
              {item.count && (
                <span class="text-xs text-shade-600 font-sans">
                  {item.count}
                </span>
              )}
            </ButtonPrimitive>
          ))}

          {/* Sub-section Dividers */}
          <div class="mt-4 mb-1 px-2.5">
            <span class="text-xs text-shade-600 font-sans">
              Data Libraries
            </span>
          </div>

          {[
            { label: "Data Library" },
            { label: "Reports" },
            { label: "Word Assistant" },
            { label: "Archived" },
          ].map((subItem) => (
            <ButtonPrimitive as="div"
              key={subItem.label}
              class="h-8 flex items-center justify-between px-2.5 rounded-full text-shade-800 hover:bg-shade-100 active:scale-[0.97] text-sm font-sans w-full text-left transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer select-none"
            >
              <span class="truncate">{subItem.label}</span>
            </ButtonPrimitive>
          ))}
        </div>

        {/* System Settings & Help */}
        <div class="flex flex-col gap-0.5 border-t border-shade-200 pt-2">
          {["Settings", "Get Help", "Search"].map((action) => (
            <ButtonPrimitive as="div"
              key={action}
              class="h-8 flex items-center px-2.5 rounded-full text-shade-800 hover:bg-shade-100 active:scale-[0.97] text-sm font-sans w-full text-left transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer select-none"
            >
              <span>{action}</span>
            </ButtonPrimitive>
          ))}
        </div>

        {/* User Account Capsule */}
        <div class="border-t border-shade-200 pt-2">
          <div class="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-shade-100 cursor-pointer transition-colors duration-150">
            <div class="size-7 rounded-full bg-shade-150 text-shade-800 flex items-center justify-center text-xs font-sans shrink-0">
              CN
            </div>
            <div class="flex flex-col min-w-0 flex-1">
              <span class="text-sm text-shade-950 font-sans leading-none truncate">
                shadcn
              </span>
              <span class="text-xs text-shade-600 font-sans truncate mt-0.5">
                m@example.com
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. Main Workspace View */}
      <main class="flex-1 flex flex-col min-w-0 bg-shade-0 overflow-hidden">

        {/* Top Header Bar */}
        <header class="h-12 px-6 flex items-center justify-between border-b border-shade-200 shrink-0">
          <div class="flex items-center gap-2">
            <span class="text-sm text-shade-600 font-sans">Workspace</span>
            <span class="text-sm text-shade-500 font-sans">/</span>
            <h1 class="text-sm text-shade-950 font-sans font-normal">
              Documents & Analytics
            </h1>
          </div>
          <div class="flex items-center gap-2">
            <ButtonPrimitive as="div" class="h-8 px-3 rounded-full border border-shade-200 hover:bg-shade-100 active:scale-[0.97] text-sm text-shade-800 font-sans transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer">
              GitHub Repository
            </ButtonPrimitive>
          </div>
        </header>

        {/* Main Content Area */}
        <div class="flex-1 overflow-y-auto p-6 space-y-6">

          {/* Section Page Title */}
          <div class="flex items-center justify-between">
            <h2 class="text-[24px] leading-[125%] tracking-[-0.24px] text-shade-950 font-normal">
              Overview Metrics
            </h2>
            <span class="text-xs text-shade-600 font-sans">
              Updated 5 mins ago
            </span>
          </div>

          {/* 3. Metrics Cards Grid */}
          <div class="grid grid-cols-4 gap-4">
            {[
              {
                title: "Total Revenue",
                value: "$1,250.00",
                badge: "+12.5%",
                badgePositive: true,
                headline: "Trending up this month",
                subtitle: "Visitors for the last 6 months",
              },
              {
                title: "New Customers",
                value: "1,234",
                badge: "-20.0%",
                badgePositive: false,
                headline: "Down 20% this period",
                subtitle: "Acquisition needs attention",
              },
              {
                title: "Active Accounts",
                value: "45,678",
                badge: "+12.5%",
                badgePositive: true,
                headline: "Strong user retention",
                subtitle: "Engagement exceeds targets",
              },
              {
                title: "Growth Rate",
                value: "4.5%",
                badge: "+4.5%",
                badgePositive: true,
                headline: "Steady performance increase",
                subtitle: "Meets growth projections",
              },
            ].map((metric, idx) => (
              <div
                key={idx}
                class="flex flex-col p-4 rounded-2xl bg-shade-0 border border-shade-200 justify-between gap-4 shadow-none hover:border-shade-350 transition-all duration-150"
              >
                <div class="flex items-start justify-between">
                  <span class="text-sm text-shade-600 font-sans">
                    {metric.title}
                  </span>
                  <span
                    class={`h-5 px-2 rounded-full text-xs font-sans flex items-center ${metric.badgePositive
                      ? "bg-shade-150 text-shade-950"
                      : "bg-shade-100 text-shade-600"
                      }`}
                  >
                    {metric.badge}
                  </span>
                </div>

                <div>
                  <div class="text-[24px] leading-[120%] tracking-[-0.20px] text-shade-950 font-normal">
                    {metric.value}
                  </div>
                </div>

                <div class="border-t border-shade-150 pt-3 flex flex-col gap-0.5">
                  <span class="text-xs text-shade-950 font-sans truncate">
                    {metric.headline}
                  </span>
                  <span class="text-xs text-shade-600 font-sans truncate">
                    {metric.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* 4. Controls & Pill Segment Bar */}
          <div class="flex items-center justify-between pt-2">

            {/* Pill Tab Segment Control */}
            <div class="flex items-center gap-1 bg-shade-50 p-1 rounded-full">
              {[
                { label: "Outline", active: true },
                { label: "Past Performance", active: false, count: "3" },
                { label: "Key Personnel", active: false, count: "2" },
                { label: "Focus Documents", active: false },
              ].map((tab) => (
                <ButtonPrimitive as="div"
                  key={tab.label}
                  class={`h-7 px-3 rounded-full text-xs font-sans flex items-center gap-1.5 transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer select-none active:scale-[0.95] ${tab.active
                    ? "bg-shade-0 text-shade-950 border border-shade-200"
                    : "text-shade-800 hover:text-shade-950"
                    }`}
                >
                  <span>{tab.label}</span>
                  {tab.count && (
                    <span class="h-4 px-1.5 rounded-full bg-shade-150 text-[10px] text-shade-800 font-sans">
                      {tab.count}
                    </span>
                  )}
                </ButtonPrimitive>
              ))}
            </div>

            {/* View Actions */}
            <div class="flex items-center gap-2">
              <ButtonPrimitive as="div" class="h-8 px-3 rounded-full border border-shade-200 bg-shade-0 hover:bg-shade-100 active:scale-[0.97] text-xs text-shade-800 font-sans transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer">
                Customize Columns
              </ButtonPrimitive>
              <ButtonPrimitive as="div" class="h-8 px-3 rounded-full bg-shade-900 text-shade-0 hover:bg-shade-850 active:scale-[0.97] text-xs font-sans transition-all duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer">
                Add Section
              </ButtonPrimitive>
            </div>
          </div>

          {/* 5. Document Sections Table */}
          <div class="rounded-2xl border border-shade-200 bg-shade-0 overflow-hidden shadow-none">
            <table class="w-full text-left border-collapse font-sans text-xs">

              {/* Table Header */}
              <thead>
                <tr class="border-b border-shade-200 bg-shade-25 text-shade-600">
                  <th class="p-3 w-10 text-center font-normal">#</th>
                  <th class="p-3 w-8 font-normal">
                    <input
                      type="checkbox"
                      class="rounded border-shade-250 text-shade-900 focus:ring-0 cursor-pointer"
                    />
                  </th>
                  <th class="p-3 text-xs font-normal text-shade-950">
                    Header
                  </th>
                  <th class="p-3 text-xs font-normal text-shade-950">
                    Section Type
                  </th>
                  <th class="p-3 text-xs font-normal text-shade-950">
                    Status
                  </th>
                  <th class="p-3 text-xs font-normal text-right text-shade-950">
                    Target
                  </th>
                  <th class="p-3 text-xs font-normal text-right text-shade-950">
                    Limit
                  </th>
                  <th class="p-3 text-xs font-normal text-shade-950">
                    Reviewer
                  </th>
                  <th class="p-3 w-12 text-center font-normal">Action</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody class="divide-y divide-shade-150 text-shade-800">
                {[
                  {
                    id: 1,
                    header: "Cover page",
                    type: "Cover page",
                    status: "In Process",
                    target: "18",
                    limit: "5",
                    reviewer: "Eddie Lake",
                  },
                  {
                    id: 2,
                    header: "Table of contents",
                    type: "Table of contents",
                    status: "Done",
                    target: "29",
                    limit: "24",
                    reviewer: "Eddie Lake",
                  },
                  {
                    id: 3,
                    header: "Executive summary",
                    type: "Narrative",
                    status: "Done",
                    target: "10",
                    limit: "13",
                    reviewer: "Eddie Lake",
                  },
                  {
                    id: 4,
                    header: "Technical approach",
                    type: "Narrative",
                    status: "Done",
                    target: "27",
                    limit: "23",
                    reviewer: "Jamik Tashpulatov",
                  },
                  {
                    id: 5,
                    header: "Design",
                    type: "Narrative",
                    status: "In Process",
                    target: "2",
                    limit: "16",
                    reviewer: "Jamik Tashpulatov",
                  },
                  {
                    id: 6,
                    header: "Capabilities",
                    type: "Narrative",
                    status: "In Process",
                    target: "20",
                    limit: "8",
                    reviewer: "Jamik Tashpulatov",
                  },
                  {
                    id: 7,
                    header: "Integration with existing systems",
                    type: "Narrative",
                    status: "In Process",
                    target: "19",
                    limit: "21",
                    reviewer: null,
                  },
                  {
                    id: 8,
                    header: "Overview of EMR's Innovative Solutions",
                    type: "Technical content",
                    status: "Done",
                    target: "7",
                    limit: "23",
                    reviewer: null,
                  },
                  {
                    id: 9,
                    header: "Advanced Algorithms and Machine Learning",
                    type: "Narrative",
                    status: "Done",
                    target: "30",
                    limit: "28",
                    reviewer: null,
                  },
                ].map((row) => (
                  <tr
                    key={row.id}
                    class="hover:bg-shade-50 transition-colors duration-100"
                  >
                    <td class="p-3 text-center text-xs text-shade-400 font-sans">
                      {row.id}
                    </td>
                    <td class="p-3">
                      <input
                        type="checkbox"
                        class="rounded border-shade-250 text-shade-900 focus:ring-0 cursor-pointer"
                      />
                    </td>
                    <td class="p-3 text-sm text-shade-950 font-sans">
                      {row.header}
                    </td>
                    <td class="p-3">
                      <span class="h-5 px-2.5 inline-flex items-center rounded-full bg-shade-50 text-xs text-shade-600 font-sans">
                        {row.type}
                      </span>
                    </td>
                    <td class="p-3">
                      <span
                        class={`h-5 px-2.5 inline-flex items-center rounded-full text-xs font-sans ${row.status === "Done"
                          ? "bg-shade-900 text-shade-0"
                          : "bg-shade-150 text-shade-800"
                          }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td class="p-3 text-right text-xs text-shade-950 font-sans">
                      {row.target}
                    </td>
                    <td class="p-3 text-right text-xs text-shade-600 font-sans">
                      {row.limit}
                    </td>
                    <td class="p-3 text-xs text-shade-800 font-sans">
                      {row.reviewer ? (
                        row.reviewer
                      ) : (
                        <span class="text-shade-400 underline underline-offset-2 cursor-pointer hover:text-shade-950">
                          Assign reviewer
                        </span>
                      )}
                    </td>
                    <td class="p-3 text-center">
                      <ButtonPrimitive as="div" class="size-6 rounded-full hover:bg-shade-150 text-shade-500 text-xs inline-flex items-center justify-center transition-colors">
                        <DemoIcon size="14px" name="more-horizontal" />
                      </ButtonPrimitive>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* 6. Pagination Footer Controls */}
          <div class="flex items-center justify-between pt-2">
            <span class="text-xs text-shade-600 font-sans">
              0 of 68 row(s) selected.
            </span>

            <div class="flex items-center gap-6">
              {/* Rows per page Selector */}
              <div class="flex items-center gap-2">
                <span class="text-xs text-shade-800 font-sans">
                  Rows per page
                </span>
                <ButtonPrimitive as="div" class="h-7 px-2.5 rounded-full border border-shade-200 bg-shade-0 text-xs text-shade-950 font-sans flex items-center gap-2">
                  <span>10</span>
                  <DemoIcon size="10px" name="chevron-down" class="text-shade-400" />
                </ButtonPrimitive>
              </div>

              {/* Page Indicator */}
              <span class="text-xs text-shade-800 font-sans">
                Page 1 of 7
              </span>

              {/* Capsule Pagination Controls */}
              <div class="flex items-center gap-1">
                {["First", "Prev", "Next", "Last"].map((pageAction, i) => (
                  <ButtonPrimitive as="div"
                    key={pageAction}
                    disabled={i < 2}
                    class={`h-7 px-2.5 rounded-full border text-xs font-sans transition-all duration-150 active:scale-[0.95] cursor-pointer ${i < 2
                      ? "border-shade-150 text-shade-300 bg-shade-25 cursor-not-allowed"
                      : "border-shade-200 text-shade-800 hover:bg-shade-100 hover:text-shade-950 bg-shade-0"
                      }`}
                  >
                    {pageAction}
                  </ButtonPrimitive>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
