import type { Component, JSXOutput } from '@builder.io/qwik';

export type BoxedComp = {
  title: string;
  display: (() => JSXOutput) | Component;
  rowSpan?: number;
  colSpan?: number;
  code: string;
};

export type Section = {
  link: string;
  title: string;
  description: string;
  default: BoxedComp;
  others: BoxedComp[];
};

import { section as accordionSection } from './accordion';
import { section as alertSection } from './alert';
import { section as animatedSection } from './animated';
import { section as avatarSection } from './avatar';
import { section as backdropOverlaySection } from './backdrop-overlay';
import { section as bottomSheetSection } from './bottom-sheet';
import { section as breadcrumbSection } from './breadcrumb';
import { section as buttonSection } from './button';
import { section as calendarSection } from './calendar';
import { section as carouselSection } from './carousel';
import { section as chipSection } from './chip';
import { section as drawerSection } from './drawer';
import { section as dropdownSection } from './dropdown';
import { section as formSection } from './form';
import { section as masonrySection } from './masonry';
import { section as menuItemSection } from './menu-item';
import { section as modalSection } from './modal';
import { section as navigationMenuSection } from './navigation-menu';
import { section as pageNavigationSection } from './page-navigation';
import { section as paginationSection } from './pagination';
import { section as popoverSection } from './popover';
import { section as progressSection } from './progress';
import { section as searchSection } from './search';
import { section as selectSection } from './select';
import { section as snackbarSection } from './snackbar';
import { section as spinnerSection } from './spinner';
import { section as switchSection } from './switch';
import { section as tableSection } from './table';
import { section as tabsSection } from './tabs';
import { section as radioSection } from './radio';
import { section as tagSection } from './tag';
import { section as tooltipSection } from './tooltip';

// Lookup Map from Route Parameter to Kit Section
export const SECTIONS_MAP = {
  accordion: accordionSection,
  alert: alertSection,
  animated: animatedSection,
  avatar: avatarSection,
  'backdrop-overlay': backdropOverlaySection,
  'bottom-sheet': bottomSheetSection,
  breadcrumb: breadcrumbSection,
  button: buttonSection,
  calendar: calendarSection,
  carousel: carouselSection,
  chip: chipSection,
  drawer: drawerSection,
  dropdown: dropdownSection,
  form: formSection,
  masonry: masonrySection,
  'menu-item': menuItemSection,
  modal: modalSection,
  'navigation-menu': navigationMenuSection,
  'page-navigation': pageNavigationSection,
  pagination: paginationSection,
  popover: popoverSection,
  progress: progressSection,
  search: searchSection,
  select: selectSection,
  snackbar: snackbarSection,
  spinner: spinnerSection,
  switch: switchSection,
  table: tableSection,
  tabs: tabsSection,
  radio: radioSection,
  tag: tagSection,
  tooltip: tooltipSection,
};
