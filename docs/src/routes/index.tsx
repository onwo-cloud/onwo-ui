import { component$ } from '@qwik.dev/core';
import { Link } from '@qwik.dev/router';
import {
  OnwoIcon,
  OnwoIconText,
  SunIcon,
  GithubIcon,
  TailwindIcon,
  QwikIcon,
} from './icons';

// ==========================================
// TYPES
// ==========================================

type NavLinkProps = {
  href: string;
  label: string;
  active?: boolean;
};

type FeatureCardProps = {
  title: string;
  description: string;
  active?: boolean;
  borderLeft?: boolean;
};

type DashboardSidebarItemProps = {
  label: string;
  badge?: string;
  active?: boolean;
};

type MetricCardProps = {
  title: string;
  badgeText: string;
  isNegative?: boolean;
  value: string;
  trendText: string;
  subtitle: string;
};

type TableRowData = {
  id: number;
  header: string;
  sectionType: string;
  status: 'In Process' | 'Done';
  target: number;
  limit: number;
  reviewer: string;
};

type ChangelogItemProps = {
  version: string;
  description: string;
};

type FAQItemProps = {
  question: string;
  answer?: string;
  isOpen?: boolean;
};

// ==========================================
// SHARED & ATOMIC COMPONENTS
// ==========================================


const NavLink = component$<NavLinkProps>(({ href, label, active = false }) => (
  <Link
    href={href}
    class={[
      'items-center flex py-2 px-3 rounded-lg text-sm/3.5 text-[#0E0E0E]',
      active ? 'bg-[#F5F5F5]' : '',
    ]}
  >
    <div class="content-center text-pretty">{label}</div>
  </Link>
));

// ==========================================
// HEADER SECTION
// ==========================================

const HeaderNavbar = component$(() => {
  return (
    <div class="items-center self-stretch flex justify-between w-full max-w-[1374px] mx-auto px-6 gap-4 py-2.5">
      <div class="items-center flex gap-5">
        <Link href="/" class="items-center flex gap-1.25">
          <OnwoIcon />
          <div class="items-center flex">
            <OnwoIconText />
          </div>
        </Link>
        <nav class="items-start flex gap-1.5">
          <NavLink href="/get-started" label="Get started" active />
          <NavLink href="/components" label="Components" />
          <NavLink href="/templates" label="Templates" />
          <NavLink href="/theming" label="Theming" />
        </nav>
      </div>
      <div class="items-center flex gap-1">
        <div class="items-center flex">
          <button
            type="button"
            aria-label="Toggle Theme"
            class="items-center h-[35.59px] flex shrink-0 w-[35.59px] justify-center rounded-[9990px] gap-1.5 bg-white cursor-pointer"
          >
            <SunIcon />
          </button>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            class="items-center flex py-2.25 px-3.5 rounded-full gap-1"
          >
            <GithubIcon />
            <div class="text-pretty text-[#1D1D1D] text-sm/[19.88px]">
              GitHub
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
});

// ==========================================
// HERO SECTION
// ==========================================

const HeroSection = component$(() => {
  return (
    <div class="items-start self-stretch h-fit flex flex-col gap-5 py-24 px-6 w-full max-w-[1374px] mx-auto">
      <div class="items-start flex gap-12 justify-between self-stretch w-full">
        <div class="flex items-start gap-3.5 flex-col">
          <h1 class="w-fit whitespace-pre text-black text-[38px]/13 font-normal">
            Build applications{'\n'}that load instantly
          </h1>
          <div class="items-start flex pt-0.75 gap-2.5">
            <Link
              href="/docs"
              class="items-center flex w-fit justify-center py-1.5 px-3.5 rounded-full border border-solid border-[#00000014]"
            >
              <span class="text-pretty text-black text-base/[22.1px]">
                Documentation
              </span>
            </Link>
            <Link
              href="/get-started"
              class="items-center flex w-fit justify-center py-1.5 px-3.5 rounded-full bg-[#26251E] border border-solid border-[#26251E]"
            >
              <span class="text-pretty text-[#F7F7F4] text-base/[22.1px]">
                Get started
              </span>
            </Link>
          </div>
        </div>
        <div class="items-start flex flex-col gap-0.5 pt-2">
          <div class="items-center flex gap-1">
            <span class="text-pretty text-[#333333] text-[18px]/[30.02px]">
              An open-source UI library built with
            </span>
            <div class="items-center flex pr-0.75 pl-0.5 rounded-[10px] gap-0.75 [outline:1px_solid_#0000000D]">
              <TailwindIcon />
              <span class="text-pretty text-[#191919] text-[18px]/[26.03px]">
                tailwindcss
              </span>
            </div>
            <span class="text-pretty text-[#333333] text-[18px]/[30.02px]">
              and the
            </span>
            <div class="items-center flex pr-0.75 pl-0.5 rounded-[10px] gap-0.5 [outline:1px_solid_#0000000D]">
              <QwikIcon />
              <span class="text-pretty text-[#191919] text-[18px]/[26.03px]">
                qwik
              </span>
            </div>
            <span class="text-pretty text-[#333333] text-[18px]/[30.02px]">
              framework,
            </span>
          </div>
          <p class="text-pretty text-[#333333] text-[18px]/[28.5px]">
            built to give developers an highly cohesive design system that doesn't compromise
          </p>
          <p class="text-pretty text-[#333333] text-[18px]/[28.5px]">
            on speed, security and accessibility.
          </p>
        </div>
      </div>
    </div>
  );
});

// ==========================================
// FEATURE GRID SECTION
// ==========================================

const FeatureCard = component$<FeatureCardProps>(({ title, description, active = false, borderLeft = true }) => {
  return (
    <div
      class={[
        'content-center text-[15px]/[24px] items-start h-fit flex basis-[0%] flex-col grow min-w-0 p-6 gap-2.5 relative bg-white',
        borderLeft ? 'border-l border-l-solid border-l-[#E6E8EB]' : '',
      ]}
    >
      <div class="flex flex-wrap w-full justify-between gap-1">
        <div
          class={[
            'text-pretty font-medium',
            active ? 'text-[#18181B]' : 'text-[#71717A]',
          ]}
        >
          {title}
        </div>
      </div>
      <div class="self-stretch mt-1">
        <div class="text-pretty text-[#71717A]">
          {description}
        </div>
      </div>
      {active && <div class="h-0.5 bottom-0 absolute bg-[#030712] inset-x-0" />}
    </div>
  );
});

const FeatureGrid = component$(() => {
  const features: FeatureCardProps[] = [
    {
      title: 'Speed',
      description: '50-80% faster than react alternative on slow networks',
      borderLeft: false,
    },
    {
      title: 'Icons',
      description: 'Comes with 240+ open-source iconset from Iconify.',
      active: true,
    },
    {
      title: 'Security',
      description: 'Near zero external runtime dependencies.',
    },
    {
      title: 'Theming',
      description: 'Build your design system with out theme editor',
    },
    {
      title: 'Accessibility',
      description: 'Pre-tested for WCAG and WAI-ARIA compliance.',
    },
  ];

  return (
    <div class="items-start self-stretch flex flex-col w-full max-w-[1374px] mx-auto px-6">
      <div class="self-stretch">
        <div class="w-full">
          <div class="w-full">
            <div class="flex w-full">
              {features.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

// ==========================================
// DASHBOARD SIDEBAR
// ==========================================

const SidebarItem = component$<DashboardSidebarItemProps>(({ label, badge, active = false }) => (
  <div
    class={[
      'items-center h-8 flex shrink-0 w-full justify-between px-2.5 rounded-[9990px]',
      active ? 'bg-[#F3F3F3]' : '',
    ]}
  >
    <div
      class={[
        'text-pretty text-sm/5.25 line-clamp-1',
        active ? 'text-[#020202]' : 'text-[#313131]',
      ]}
    >
      {label}
    </div>
    {badge && (
      <div class="text-pretty text-[#7C7C7C] text-xs/4">
        {badge}
      </div>
    )}
  </div>
));

const DashboardSidebar = component$(() => {
  return (
    <div class="flex flex-col shrink-0 [width:256px] p-2 gap-4 border-r border-r-solid border-r-[#0000000F]">
      <div class="items-center flex justify-between p-2 rounded-xl">
        <div class="items-center flex min-w-0 gap-2.5">
          <div class="items-center flex shrink-0 justify-center rounded-md bg-[#26251E] size-6">
            <span class="text-pretty text-white text-xs/4">
              A
            </span>
          </div>
          <span class="text-pretty text-[#020202] text-sm/5.25 line-clamp-1">
            Acme Inc.
          </span>
        </div>
        <span class="shrink-0 text-pretty text-[#9E9E9E] text-xs/4">
          ⌘K
        </span>
      </div>

      <div class="px-1">
        <button
          type="button"
          class="items-center h-8 flex w-full justify-between px-3 rounded-[9990px] [outline:1px_solid_#00000014] cursor-pointer"
        >
          <span class="text-center text-pretty flex justify-center flex-wrap text-[#222222] text-sm/5.25">
            Quick Create
          </span>
          <span class="text-center text-pretty flex justify-center flex-wrap text-[#BDBDBD] text-xs/4">
            +
          </span>
        </button>
      </div>

      <div class="flex basis-[0%] flex-col grow overflow-clip gap-0.5">
        <SidebarItem label="Dashboard" />
        <SidebarItem label="Documents" badge="68" active />
        <SidebarItem label="Lifecycle" />
        <SidebarItem label="Analytics" />
        <SidebarItem label="Projects" />
        <SidebarItem label="Team" />

        <div class="mb-1 mt-4 px-2.5">
          <span class="inline-block text-pretty text-[#7C7C7C] text-xs/4">
            Data Libraries
          </span>
        </div>

        <SidebarItem label="Data Library" />
        <SidebarItem label="Reports" />
        <SidebarItem label="Word Assistant" />
        <SidebarItem label="Archived" />
      </div>

      <div class="flex flex-col pt-2 gap-0.5 border-t border-t-solid border-t-[#EBEBEB]">
        <SidebarItem label="Settings" />
        <SidebarItem label="Get Help" />
        <SidebarItem label="Search" />
      </div>

      <div class="pt-2 border-t border-t-solid border-t-[#EBEBEB]">
        <div class="items-center flex p-1.5 rounded-xl gap-2.5">
          <div class="items-center flex shrink-0 justify-center rounded-full bg-[#F3F3F3] size-7">
            <span class="text-pretty text-[#313131] text-xs/4">
              CN
            </span>
          </div>
          <div class="flex basis-[0%] flex-col grow min-w-0">
            <div class="text-pretty text-[#020202] text-sm/3.5 line-clamp-1">
              demo
            </div>
            <div class="mt-0.5 text-pretty text-[#7C7C7C] text-xs/4 line-clamp-1">
              m@example.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

// ==========================================
// DASHBOARD CONTENT SUB-COMPONENTS
// ==========================================

const MetricCard = component$<MetricCardProps>(({ title, badgeText, isNegative = false, value, trendText, subtitle }) => (
  <div class="flex flex-col justify-between p-4 rounded-2xl gap-4 bg-white border border-solid border-[#EBEBEB]">
    <div class="items-start flex justify-between">
      <div class="text-pretty text-[#7C7C7C] text-sm/5.25">
        {title}
      </div>
      <div
        class={[
          'items-center h-5 flex px-2 rounded-[9990px]',
          isNegative ? 'bg-[#F9F9F9]' : 'bg-[#F3F3F3]',
        ]}
      >
        <div
          class={[
            'text-pretty text-xs/4',
            isNegative ? 'text-[#575757]' : 'text-[#020202]',
          ]}
        >
          {badgeText}
        </div>
      </div>
    </div>
    <div>
      <div class="[letter-spacing:-0.2px] text-pretty text-[#020202] text-2xl/[28.8px]">
        {value}
      </div>
    </div>
    <div class="flex flex-col pt-3 gap-0.5 border-t border-t-solid border-t-[#F3F3F3]">
      <div class="text-pretty text-[#020202] text-xs/4 line-clamp-1">
        {trendText}
      </div>
      <div class="text-pretty text-[#7C7C7C] text-xs/4 line-clamp-1">
        {subtitle}
      </div>
    </div>
  </div>
));

const TableRow = component$<TableRowData>(({ id, header, sectionType, status, target, limit, reviewer }) => {
  const isAssigned = reviewer !== 'Assign reviewer';

  return (
    <div class="table-row border-b border-b-solid border-b-[#F3F3F3]">
      <div class="table-cell p-3">
        <div class="table-cell text-center text-pretty text-[#9E9E9E] text-xs/4">
          {id}
        </div>
      </div>
      <div class="table-cell p-3">
        <div class="items-center h-3.25 inline-flex w-3.25 justify-center mb-0.75 mt-0.75 mr-0.75 ml-1 rounded-xs bg-white border border-solid border-[#C7C7C7]" />
      </div>
      <div class="table-cell p-3">
        <div class="table-cell text-pretty text-[#020202] text-sm/5.25">
          {header}
        </div>
      </div>
      <div class="table-cell p-3">
        <div class="items-center h-5 inline-flex px-2.5 rounded-[9990px] bg-[#F9F9F9]">
          <div class="text-pretty text-[#575757] text-xs/4">
            {sectionType}
          </div>
        </div>
      </div>
      <div class="table-cell p-3">
        <div
          class={[
            'items-center h-5 inline-flex px-2.5 rounded-[9990px]',
            status === 'Done' ? 'bg-[#0E0E0E]' : 'bg-[#F3F3F3]',
          ]}
        >
          <div
            class={[
              'text-pretty text-xs/4',
              status === 'Done' ? 'text-white' : 'text-[#313131]',
            ]}
          >
            {status}
          </div>
        </div>
      </div>
      <div class="table-cell p-3">
        <div class="table-cell text-right text-pretty text-[#020202] text-xs/4">
          {target}
        </div>
      </div>
      <div class="table-cell p-3">
        <div class="table-cell text-right text-pretty text-[#7C7C7C] text-xs/4">
          {limit}
        </div>
      </div>
      <div class="table-cell p-3">
        {isAssigned ? (
          <div class="table-cell text-pretty text-[#313131] text-xs/4">
            {reviewer}
          </div>
        ) : (
          <button
            type="button"
            class="inline-block [-webkit-text-decorations-in-effect:underline] text-pretty underline-offset-2 [text-decoration:underline_1px] text-[#9E9E9E] text-xs/4 cursor-pointer"
          >
            Assign reviewer
          </button>
        )}
      </div>
      <div class="table-cell p-3">
        <div class="items-center inline-flex justify-center rounded-[9990px] size-6 cursor-pointer">
          <div class="text-center text-pretty flex justify-center flex-wrap text-[#7C7C7C] text-xs/4">
            •••
          </div>
        </div>
      </div>
    </div>
  );
});

const DashboardBreadcrumbs = component$(() => (
  <div class="items-center h-12 flex shrink-0 justify-between px-6 border-b border-b-solid border-b-[#0000000F]">
    <div class="items-center flex gap-2">
      <span class="text-pretty text-[#7C7C7C] text-sm/5.25">Workspace</span>
      <span class="text-pretty text-[#9E9E9E] text-sm/5.25">/</span>
      <span class="text-pretty text-[#020202] text-sm/5.25">Documents & Analytics</span>
    </div>
  </div>
));

const MetricsOverviewSection = component$(() => (
  <>
    <div class="items-center flex justify-between mb-6">
      <h2 class="[letter-spacing:-0.24px] text-pretty text-[#020202] text-2xl/7.5">
        Overview Metrics
      </h2>
      <span class="text-pretty text-[#7C7C7C] text-xs/4">
        Updated 5 mins ago
      </span>
    </div>

    <div class="grid grid-cols-4 mb-6 gap-4">
      <MetricCard
        title="Total Revenue"
        badgeText="+12.5%"
        value="$1,250.00"
        trendText="Trending up this month"
        subtitle="Visitors for the last 6 months"
      />
      <MetricCard
        title="New Customers"
        badgeText="-20.0%"
        isNegative
        value="1,234"
        trendText="Down 20% this period"
        subtitle="Acquisition needs attention"
      />
      <MetricCard
        title="Active Accounts"
        badgeText="+12.5%"
        value="45,678"
        trendText="Strong user retention"
        subtitle="Engagement exceeds targets"
      />
      <MetricCard
        title="Growth Rate"
        badgeText="+4.5%"
        value="4.5%"
        trendText="Steady performance increase"
        subtitle="Meets growth projections"
      />
    </div>
  </>
));

const DashboardTableToolbar = component$(() => (
  <div class="items-center flex justify-between mb-6 pt-2">
    <div class="items-center flex p-1 rounded-[9990px] gap-1 bg-[#FBFBFB]">
      <div class="items-center h-7 flex px-3 rounded-[9990px] gap-1.5 bg-white border border-solid border-[#0000000D]">
        <span class="text-center text-pretty flex justify-center flex-wrap text-[#020202] text-xs/4">
          Outline
        </span>
      </div>
      <div class="items-center h-7 flex px-3 rounded-[9990px] gap-1.5">
        <span class="text-center text-pretty flex justify-center flex-wrap text-[#313131] text-xs/4">
          Past Performance
        </span>
        <div class="h-4 px-1.5 rounded-[9990px] bg-[#F3F3F3]">
          <span class="text-center text-pretty flex justify-center flex-wrap text-[#313131] text-[10px]/4">
            3
          </span>
        </div>
      </div>
      <div class="items-center h-7 flex px-3 rounded-[9990px] gap-1.5">
        <span class="text-center text-pretty flex justify-center flex-wrap text-[#313131] text-xs/4">
          Key Personnel
        </span>
        <div class="h-4 px-1.5 rounded-[9990px] bg-[#F3F3F3]">
          <span class="text-center text-pretty flex justify-center flex-wrap text-[#313131] text-[10px]/4">
            2
          </span>
        </div>
      </div>
      <div class="items-center h-7 flex px-3 rounded-[9990px] gap-1.5">
        <span class="text-center text-pretty flex justify-center flex-wrap text-[#313131] text-xs/4">
          Focus Documents
        </span>
      </div>
    </div>
    <div class="items-center flex gap-2">
      <button
        type="button"
        class="items-start flex flex-col py-2 px-3 rounded-[9990px] bg-white border border-solid border-[#EBEBEB] cursor-pointer"
      >
        <span class="self-stretch text-center text-pretty flex justify-center flex-wrap text-[#313131] text-xs/4">
          Customize Columns
        </span>
      </button>
      <button
        type="button"
        class="items-start flex flex-col py-2 px-3 rounded-[9990px] bg-[#EDEDED] cursor-pointer"
      >
        <span class="self-stretch text-center text-pretty flex justify-center flex-wrap text-black text-xs/4">
          Add Section
        </span>
      </button>
    </div>
  </div>
));

const DashboardTable = component$<{ rows: TableRowData[] }>(({ rows }) => (
  <div class="mb-6 rounded-2xl overflow-clip bg-white border border-solid border-[#EBEBEB]">
    <div class="border-collapse table w-full [-webkit-border-horizontal-spacing:2px] [-webkit-border-vertical-spacing:2px]">
      <div class="table-header-group">
        <div class="table-row bg-[#FDFDFD] border-b border-b-solid border-b-[#EBEBEB]">
          <div class="table-cell w-10 p-3">
            <div class="table-cell text-center text-pretty text-[#7C7C7C] text-xs/4">#</div>
          </div>
          <div class="table-cell w-8 p-3">
            <div class="items-center h-3.25 inline-flex w-3.25 justify-center mb-0.75 mt-0.75 mr-0.75 ml-1 rounded-xs bg-white border border-solid border-[#C7C7C7]" />
          </div>
          <div class="table-cell p-3">
            <div class="table-cell text-pretty text-[#020202] text-xs/4">Header</div>
          </div>
          <div class="table-cell p-3">
            <div class="table-cell text-pretty text-[#020202] text-xs/4">Section Type</div>
          </div>
          <div class="table-cell p-3">
            <div class="table-cell text-pretty text-[#020202] text-xs/4">Status</div>
          </div>
          <div class="table-cell p-3">
            <div class="table-cell text-right text-pretty text-[#020202] text-xs/4">Target</div>
          </div>
          <div class="table-cell p-3">
            <div class="table-cell text-right text-pretty text-[#7C7C7C] text-xs/4">Limit</div>
          </div>
          <div class="table-cell p-3">
            <div class="table-cell text-pretty text-[#020202] text-xs/4">Reviewer</div>
          </div>
          <div class="table-cell w-12 p-3">
            <div class="table-cell text-center text-pretty text-[#7C7C7C] text-xs/4">Action</div>
          </div>
        </div>
      </div>
      <div class="table-row-group">
        {rows.map((row) => (
          <TableRow key={row.id} {...row} />
        ))}
      </div>
    </div>
  </div>
));

const DashboardPagination = component$(() => (
  <div class="items-center flex justify-between pt-2">
    <div class="text-pretty text-[#7C7C7C] text-xs/4">
      0 of 68 row(s) selected.
    </div>
    <div class="items-center flex gap-6">
      <div class="items-center flex gap-2">
        <span class="text-pretty text-[#313131] text-xs/4">
          Rows per page
        </span>
        <div class="items-center h-7 flex px-2.5 rounded-[9990px] gap-2 bg-white border border-solid border-[#EBEBEB]">
          <span class="text-center text-pretty flex justify-center flex-wrap text-[#020202] text-xs/4">
            5
          </span>
          <span class="text-center text-pretty flex justify-center flex-wrap text-[#9E9E9E] text-[10px]/4">
            ▼
          </span>
        </div>
      </div>
      <span class="text-pretty text-[#313131] text-xs/4">
        Page 1 of 7
      </span>
      <div class="items-center flex gap-1">
        <button
          type="button"
          class="h-7 px-2.5 rounded-[9990px] bg-[#FDFDFD] border border-solid border-[#F3F3F3] cursor-pointer"
        >
          <span class="text-center text-pretty flex justify-center flex-wrap text-[#BDBDBD] text-xs/4">
            First
          </span>
        </button>
        <button
          type="button"
          class="h-7 px-2.5 rounded-[9990px] bg-[#FDFDFD] border border-solid border-[#F3F3F3] cursor-pointer"
        >
          <span class="text-center text-pretty flex justify-center flex-wrap text-[#BDBDBD] text-xs/4">
            Prev
          </span>
        </button>
        <button
          type="button"
          class="h-7 px-2.5 rounded-[9990px] bg-white border border-solid border-[#EBEBEB] cursor-pointer"
        >
          <span class="text-center text-pretty flex justify-center flex-wrap text-[#313131] text-xs/4">
            Next
          </span>
        </button>
        <button
          type="button"
          class="h-7 px-2.5 rounded-[9990px] bg-white border border-solid border-[#EBEBEB] cursor-pointer"
        >
          <span class="text-center text-pretty flex justify-center flex-wrap text-[#313131] text-xs/4">
            Last
          </span>
        </button>
      </div>
    </div>
  </div>
));

const DashboardContent = component$(() => {
  const rows: TableRowData[] = [
    { id: 1, header: 'Cover page', sectionType: 'Cover page', status: 'In Process', target: 18, limit: 5, reviewer: 'Eddie Lake' },
    { id: 2, header: 'Table of contents', sectionType: 'Table of contents', status: 'Done', target: 29, limit: 24, reviewer: 'Eddie Lake' },
    { id: 3, header: 'Executive summary', sectionType: 'Narrative', status: 'Done', target: 10, limit: 13, reviewer: 'Eddie Lake' },
    { id: 4, header: 'Technical approach', sectionType: 'Narrative', status: 'Done', target: 27, limit: 23, reviewer: 'Jamik Tashpulatov' },
    { id: 5, header: 'Design', sectionType: 'Narrative', status: 'In Process', target: 2, limit: 16, reviewer: 'Jamik Tashpulatov' },
  ];

  return (
    <div class="flex basis-[0%] flex-col grow min-w-0 overflow-clip">
      <DashboardBreadcrumbs />
      <div class="basis-[0%] grow p-6 overflow-clip">
        <MetricsOverviewSection />
        <DashboardTableToolbar />
        <DashboardTable rows={rows} />
        <DashboardPagination />
      </div>
    </div>
  );
});

const DashboardPreview = component$(() => {
  return (
    <div class=" w-full max-w-[1374px] mx-auto px-6 my-8">
      <div class="relative rounded-[11px] overflow-clip flex flex-col items-center justify-center gap-8.5 px-6 py-8.5 bg-[#FAFAFA] w-full">
        <div class="scale-90 flex w-full max-w-[1300px] rounded-[18px] shrink-0 bg-white border border-solid border-[#0000000F] overflow-x-auto">
          <DashboardSidebar />
          <DashboardContent />
        </div>
        <p class="text-[#737373] text-xs w-fit absolute bottom-4 right-4"> Example adapted from shadcn </p>
      </div>
    </div>
  );
});

interface ChangelogItemProps {
  date: string;
  version: string;
  description: string;
  graphic: JSXNode;
}

const ChangelogCard = component$<ChangelogItemProps>(({ date, version, description, graphic }) => (
  <div class="flex flex-col min-w-0 gap-4">
    {/* Interactive Graphic Container */}
    <div class="group relative items-center h-60 flex w-full justify-center rounded-xl overflow-hidden shrink-0 bg-[#00000006] border border-solid border-[#0000000F] cursor-pointer transition-all duration-300 hover:border-[#00000026] hover:bg-[#0000000B]">
      <div class="items-center flex justify-center relative size-full transition-transform duration-300 group-hover:scale-[1.03]">
        {graphic}
      </div>
    </div>

    {/* Content */}
    <div class="flex flex-col gap-1">
      <div class="font-medium text-[#0E0E0E] text-[15px]/6 line-clamp-1">
        {version}
      </div>
      <div class="text-[#71717A] text-[15px]/6 line-clamp-3">
        {description}
      </div>
    </div>
  </div>
));

export const ChangelogSection = component$(() => {
  const changelogs: ChangelogItemProps[] = [
    {
      version: 'v0.0.6: Button groups',
      description: "We've added consent gating to our SDKs, giving you full control over which features activate based on your users' consent preferences, with native support for all modern consent platforms: c15t, CookieYes, OneTrust, or your own.",
      /* Theme: "Components" - Modular UI Wireframe Grid */
      graphic: (
        <svg aria-hidden="true" height="120" viewBox="0 0 240 120" width="240" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dot-grid-1" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="rgb(0 0 0 / 12%)" />
            </pattern>
          </defs>
          <rect width="240" height="120" fill="url(#dot-grid-1)" />

          {/* Component Blocks */}
          <rect x="35" y="42" width="50" height="36" rx="6" fill="rgb(0 0 0 / 3%)" stroke="rgb(0 0 0 / 18%)" stroke-width="1.2" />
          <rect x="95" y="42" width="50" height="36" rx="6" fill="rgb(0 0 0 / 8%)" stroke="rgb(0 0 0 / 35%)" stroke-width="1.5" />
          <rect x="155" y="42" width="50" height="36" rx="6" fill="rgb(0 0 0 / 3%)" stroke="rgb(0 0 0 / 18%)" stroke-width="1.2" />

          {/* Connector Node */}
          <circle cx="120" cy="60" r="3.5" fill="rgb(0 0 0 / 75%)" />
          <line x1="60" y1="60" x2="180" y2="60" stroke="rgb(0 0 0 / 15%)" stroke-width="1" stroke-dasharray="2 2" />
        </svg>
      ),
    },
    {
      version: 'Timeline Improvements',
      description: 'We’ve redesigned the problem timeline to better distinguish between agent findings, human actions, and external events like pull requests and CI runs, as well as new commenting features like threading.',
      /* Theme: "Tinkering" - Sliders, Fine-tuning Dials & Axis Lines */
      graphic: (
        <svg aria-hidden="true" height="120" viewBox="0 0 240 120" width="240" xmlns="http://www.w3.org/2000/svg">
          {/* Fine Tuning Axis Line */}
          <line x1="30" y1="60" x2="210" y2="60" stroke="rgb(0 0 0 / 15%)" stroke-width="1.5" stroke-dasharray="4 4" />

          {/* Tick marks */}
          <line x1="120" y1="32" x2="120" y2="40" stroke="rgb(0 0 0 / 30%)" stroke-width="1.5" stroke-linecap="round" />
          <line x1="120" y1="80" x2="120" y2="88" stroke="rgb(0 0 0 / 30%)" stroke-width="1.5" stroke-linecap="round" />
          <line x1="90" y1="35" x2="90" y2="40" stroke="rgb(0 0 0 / 15%)" stroke-width="1" />
          <line x1="150" y1="35" x2="150" y2="40" stroke="rgb(0 0 0 / 15%)" stroke-width="1" />

          {/* Slider Handles / Nodes */}
          <circle cx="60" cy="60" r="3.5" fill="rgb(0 0 0 / 25%)" />
          <circle cx="180" cy="60" r="3.5" fill="rgb(0 0 0 / 25%)" />
          <circle cx="120" cy="60" r="14" fill="none" stroke="rgb(0 0 0 / 15%)" stroke-width="1" />
          <circle cx="120" cy="60" r="6" fill="rgb(0 0 0 / 85%)" />
        </svg>
      ),
    },
    {
      version: 'OAuth applications & scoped API keys',
      description: "Today, we've launched support for developers to create custom OAuth applications and API keys with granular scopes on Interfere.",
      /* Theme: "Update" - Concentric Refresh Arc & State Toggle */
      graphic: (
        <svg aria-hidden="true" height="120" viewBox="0 0 240 120" width="240" xmlns="http://www.w3.org/2000/svg">
          {/* Orbital Update Cycle */}
          <circle cx="120" cy="60" r="32" fill="none" stroke="rgb(0 0 0 / 10%)" stroke-width="1.5" stroke-dasharray="3 3" />
          <path d="M 95 60 A 25 25 0 0 1 145 60" fill="none" stroke="rgb(0 0 0 / 80%)" stroke-width="2" stroke-linecap="round" />
          <path d="M 145 60 A 25 25 0 0 1 95 60" fill="none" stroke="rgb(0 0 0 / 20%)" stroke-width="1.5" stroke-linecap="round" />

          {/* Active Points */}
          <circle cx="145" cy="60" r="3.5" fill="rgb(0 0 0 / 85%)" />
          <circle cx="95" cy="60" r="3" fill="rgb(0 0 0 / 30%)" />
          <rect x="108" y="57" width="24" height="6" rx="3" fill="rgb(0 0 0 / 15%)" />
        </svg>
      ),
    },
  ];

  return (
    <div class="[font-synthesis:none] w-full py-36">
      <div class="flex flex-col w-full max-w-[1374px] px-6 gap-10 mx-auto">
        <div class="flex flex-col gap-4">
          <div class="text-[12px] leading-[100%] uppercase text-[#71717A]">
            Changelog
          </div>
          <div class="[letter-spacing:-0.28px] text-pretty font-medium text-[#0E0E0E] text-[28px]/9">
            Latest releases
          </div>
        </div>
        <div class="flex flex-col gap-10">
          <div class="grid grid-cols-3 gap-10">
            {changelogs.map((item, index) => (
              <ChangelogCard key={index} {...item} />
            ))}
          </div>
        </div>
        <div>
          <div class="items-center flex gap-2 cursor-pointer">
            <div class="[font-variation-settings:'wght'_450] text-[#0E0E0E] text-[15px]/6">
              See all releases
            </div>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg" font-size="15px" style={{ height: '16px', width: '16px', overflow: 'clip', flexShrink: '0' }}>
              <path clip-rule="evenodd" d="M10.854 7.646C11.049 7.842 11.049 8.158 10.854 8.353L7.207 12C7.012 12.195 6.695 12.195 6.5 12C6.305 11.805 6.305 11.488 6.5 11.293L9.793 8L6.5 4.707C6.305 4.512 6.305 4.195 6.5 4C6.695 3.805 7.012 3.805 7.207 4L10.854 7.646Z" fill-rule="evenodd" font-size="15px" fill="#1D1D1D" style={{ boxSizing: 'border-box', 'transform-origin': '0px 0px' }} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
});


// ==========================================
// FAQ SECTION
// ==========================================

const FAQItem = component$<FAQItemProps>(({ question, answer, isOpen = false }) => (
  <div class="flex flex-col py-5 border-t border-t-solid border-t-[#E6E8EB] cursor-pointer group">
    <div class="flex justify-between items-center gap-6">
      <div class="font-medium text-[#0E0E0E] text-[15px]/6 text-pretty group-hover:text-[#71717A] transition-colors">
        {question}
      </div>
      <div class="shrink-0 text-[#71717A] group-hover:text-[#0E0E0E] transition-colors font-mono text-base select-none">
        {isOpen ? "−" : "+"}
      </div>
    </div>

    {isOpen && answer && (
      <p class="mt-3 text-[#71717A] text-[14px]/[22px] text-pretty max-w-2xl">
        {answer}
      </p>
    )}
  </div>
));

export const FAQSection = component$(() => {
  const faqs: FAQItemProps[] = [
    {
      question: "Who is this library for?",
      answer:
        "We set out to build a library that demarcates itself by offering exceptionally low bundle sizes and virtually no third-party dependencies, all without sacrificing a polished, highly modern look. On the flip side, because we are operating in a younger ecosystem and building a fast-moving project, you might encounter shifting patterns as we refine and expand the component APIs.",
      isOpen: true,
    },
    {
      question: "Why Qwik.js over Next.js?",
      answer: "Qwik.js is built with laziness as a first-class citizen — every hook, event handler, and state-modifying function are downloaded on-demand via an heurisitic engine. Unlike hydration-first frameworks, Qwik ships near-zero JavaScript even after the user start interacting with the page, it also uses fine-grained reactivity to update only what changed, never re-rendering entire component trees. The result is instant interactivity regardless of app complexity.",
      isOpen: false,
    },
    {
      question: "Can I use SSR and CSR with Onwo-ui?",
      answer: "Qwik is built from the ground up to merge server-side rendering and client-side interactivity seamlessly, with full support for static build and modern web features like PWAs and offline support.",
      isOpen: false,
    },
  ];

  return (
    <div class="[font-synthesis:none] w-full py-36 bg-white">
      <div class="flex flex-col md:flex-row w-full max-w-[1374px] px-6 gap-10 mx-auto justify-between">
        <div class="flex flex-col gap-4 md:w-1/3 shrink-0 pr-6">
          <div class="text-[12px] leading-[100%] uppercase text-[#71717A]">
            FAQ
          </div>
          <div class="[letter-spacing:-0.28px] text-pretty font-medium text-[#0E0E0E] text-[28px]/9">
            Often asked questions
          </div>
        </div>

        <div class="flex flex-col grow md:w-2/3">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </div>
  );
});

// ==========================================
// FOOTER SECTION
// ==========================================


const FooterSection = component$(() => {
  return (
    <div class="flex justify-between items-center h-min flex max-w-[1374px] w-full gap-24 text-xs/4 py-4">
      <p class="text-black font-medium">
        Made by @emilien0x
      </p>
      <Link href="/privacy" class="inline-block text-[#0A0A0A99]">
        privacy policy
      </Link>
    </div>
  );
});

// ==========================================
// MAIN PAGE LAYOUT
// ==========================================

export default component$(() => {
  return (
    <div class="[font-synthesis:none] [font-synthesis-small-caps:none] [font-synthesis-style:none] [font-synthesis-weight:none] relative bg-white antialiased text-xs/4 flex flex-col items-center w-full">
      <div class="w-full bg-[#FEFEFE] flex justify-center">
        <div class="w-full flex flex-col items-center">
          <HeaderNavbar />
          <HeroSection />
          <FeatureGrid />
          <DashboardPreview />
        </div>
      </div>
      <ChangelogSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
});
