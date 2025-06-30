import { $ } from '@builder.io/qwik';
import type { PropsOf } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { styledcn } from '@onwo/primitives';
import { cn } from '@onwo/ui';
import { ComponentCard } from './component-card';
import { SearchBar } from './searchbar';
import type { BoxedComp, Section } from './sections';
import {
  radioSection,
  accordionSection,
  alertSection,
  buttonSection,
  animatedSection,
  avatarSection,
  backdropOverlaySection,
  bottomSheetSection,
  breadcrumbSection,
  calendarSection,
  carouselSection,
  chipSection,
  drawerSection,
  dropdownSection,
  formSection,
  masonrySection,
  menuItemSection,
  modalSection,
  navigationMenuSection,
  pageNavigationSection,
  paginationSection,
  popoverSection,
  progressSection,
  searchSection,
  selectSection,
  snackbarSection,
  spinnerSection,
  switchSection,
  tableSection,
  tabsSection,
  tagSection,
  tooltipSection,
} from './sections';
import { TerminalAnimatedIcon } from './terminal-icon-animated';
import { ThemeDropdown } from './theme-dropdown';

const DottedSeparator = styledcn('div')`w-full border-t border-dashed border-line`;

const MainHeader = ({ class: className, ...props }: PropsOf<'div'>) => (
  <div class={cn('h-[40px]', className)} {...props}>
    <div class="flex gap-4 items-center mb-4">
      <SearchBar />
      <ThemeDropdown />
    </div>
  </div>
);

type ComponentGridProps = {
  components: BoxedComp[];
};

const ComponentGrid = (props: ComponentGridProps) => (
  <div class="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
    {props.components.map((section, idx) => (
      <div key={idx}>
        <ComponentCard {...section} />
      </div>
    ))}
  </div>
);

type SectionContentProps = {
  section: Section;
};

const SectionContent = ({ section }: SectionContentProps) => (
  <>
    <div class="px-6 first:mt-2">
      <div class="flex justify-between items-center mb-4">
        <div class="flex text-sm items-center gap-3">
          <h4 class=" font-bold">{section.title}</h4>
          <p>{section.description}</p>
        </div>
        <div data-placement="end">
          <Link
            href={section.link}
            rel="noopener"
            target="_blank"
            class="group/term-icon bg-gray-50 px-4 py-1 rounded-lg flex gap-2 items-center hover:bg-gray-100 cursor-pointer"
          >
            <span>See API</span>
            <TerminalAnimatedIcon />
          </Link>
        </div>
      </div>
      <ComponentGrid components={section.components} />
    </div>
    <DottedSeparator class="px-6" />
  </>
);

export const MainContent = () => (
  <div class="flex-1">
    <div class="flex pt-6 flex-col relative gap-6 h-full">
      <MainHeader class="shrink-0 mx-6" />
      <div class="relative flex gap-12 flex-col max-h-full overflow-y-auto">
        <SectionContent section={radioSection} />
        <SectionContent section={accordionSection} />
        <SectionContent section={alertSection} />
        <SectionContent section={animatedSection} />
        <SectionContent section={buttonSection} />
        <SectionContent section={avatarSection} />
        <SectionContent section={backdropOverlaySection} />
        <SectionContent section={bottomSheetSection} />
        <SectionContent section={breadcrumbSection} />
        <SectionContent section={calendarSection} />
        <SectionContent section={carouselSection} />
        <SectionContent section={chipSection} />
        <SectionContent section={drawerSection} />
        <SectionContent section={dropdownSection} />
        <SectionContent section={formSection} />
        <SectionContent section={masonrySection} />
        <SectionContent section={menuItemSection} />
        <SectionContent section={modalSection} />
        <SectionContent section={navigationMenuSection} />
        <SectionContent section={pageNavigationSection} />
        <SectionContent section={paginationSection} />
        <SectionContent section={popoverSection} />
        <SectionContent section={progressSection} />
        <SectionContent section={searchSection} />
        <SectionContent section={selectSection} />
        <SectionContent section={snackbarSection} />
        <SectionContent section={spinnerSection} />
        <SectionContent section={switchSection} />
        <SectionContent section={tableSection} />
        <SectionContent section={tabsSection} />
        <SectionContent section={tagSection} />
        <SectionContent section={tooltipSection} />
      </div>
    </div>
  </div>
);
