import type { Component, JSXOutput } from '@builder.io/qwik';

export type BoxedComp = {
  title: string;
  display: (() => JSXOutput) | Component;
  height?: number;
  code: string;
};

export type Section = {
  link: string;
  title: string;
  description: string;
  components: BoxedComp[];
};

export { section as accordionSection } from './accordion';
export { section as alertSection } from './alert';
export { section as animatedSection } from './animated';
export { section as avatarSection } from './avatar';
export { section as backdropOverlaySection } from './backdrop-overlay';
export { section as bottomSheetSection } from './bottom-sheet';
export { section as breadcrumbSection } from './breadcrumb';
export { section as buttonSection } from './button';
export { section as calendarSection } from './calendar';
export { section as carouselSection } from './carousel';
export { section as chipSection } from './chip';
export { section as drawerSection } from './drawer';
export { section as dropdownSection } from './dropdown';
export { section as formSection } from './form';
export { section as masonrySection } from './masonry';
export { section as menuItemSection } from './menu-item';
export { section as modalSection } from './modal';
export { section as navigationMenuSection } from './navigation-menu';
export { section as pageNavigationSection } from './page-navigation';
export { section as paginationSection } from './pagination';
export { section as popoverSection } from './popover';
export { section as progressSection } from './progress';
export { section as searchSection } from './search';
export { section as selectSection } from './select';
export { section as snackbarSection } from './snackbar';
export { section as spinnerSection } from './spinner';
export { section as switchSection } from './switch';
export { section as tableSection } from './table';
export { section as tabsSection } from './tabs';
export { section as radioSection } from './radio';
export { section as tagSection } from './tag';
export { section as tooltipSection } from './tooltip';
