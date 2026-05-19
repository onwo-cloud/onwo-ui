import { Link } from '@builder.io/qwik-city';

import { ComponentCard } from './component-card';
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

type SectionItemProps = {
  section: Section;
};

const SectionItem = ({ section }: SectionItemProps) => (
  <>
    <div class="px-6 first:mt-2">
      <div class="flex justify-between items-center mb-4">
        <div class="flex text-sm items-center gap-3">
          <h4 class="font-medium">{section.title}</h4>
          <p>{section.description}</p>
        </div>
        <div data-placement="end">
          <Link
            href={section.link}
            rel="noopener"
            target="_blank"
            class="group/term-icon bg-canvas-secondary px-4 py-1 rounded-lg flex text-xs font-medium gap-2 items-center hover:bg-canvas-secondary-hover cursor-pointer"
          >
            <span>See API</span>
            <TerminalAnimatedIcon height={14} />
          </Link>
        </div>
      </div>
      <ComponentGrid components={section.components} />
    </div>
  </>
);

export const SectionsContent = () => (
  <div class="relative flex gap-12 flex-col max-h-full overflow-y-auto">
    <SectionItem section={radioSection} />
    <SectionItem section={accordionSection} />
    <SectionItem section={alertSection} />
    <SectionItem section={animatedSection} />
    <SectionItem section={buttonSection} />
    <SectionItem section={avatarSection} />
    <SectionItem section={backdropOverlaySection} />
    <SectionItem section={bottomSheetSection} />
    <SectionItem section={breadcrumbSection} />
    <SectionItem section={calendarSection} />
    <SectionItem section={carouselSection} />
    <SectionItem section={chipSection} />
    <SectionItem section={drawerSection} />
    <SectionItem section={dropdownSection} />
    <SectionItem section={formSection} />
    <SectionItem section={masonrySection} />
    <SectionItem section={menuItemSection} />
    <SectionItem section={modalSection} />
    <SectionItem section={navigationMenuSection} />
    <SectionItem section={pageNavigationSection} />
    <SectionItem section={paginationSection} />
    <SectionItem section={popoverSection} />
    <SectionItem section={progressSection} />
    <SectionItem section={searchSection} />
    <SectionItem section={selectSection} />
    <SectionItem section={snackbarSection} />
    <SectionItem section={spinnerSection} />
    <SectionItem section={switchSection} />
    <SectionItem section={tableSection} />
    <SectionItem section={tabsSection} />
    <SectionItem section={tagSection} />
    <SectionItem section={tooltipSection} />
  </div>
);
