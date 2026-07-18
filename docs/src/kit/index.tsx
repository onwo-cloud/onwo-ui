import type { Component, JSXOutput, QRL } from '@qwik.dev/core';

// --- Individual Control Field Types ---
export type OptionItem<T = string> = {
  label: string;
  value: T;
};

export type ControlField =
  | {
    type: 'segmented' | 'radio' | 'select';
    label: string;
    default: string;
    options: OptionItem[];
  }
  | {
    type: 'boolean';
    label: string;
    default: boolean;
  }
  | {
    type: 'text';
    label: string;
    default: string;
    placeholder?: string;
  }
  | {
    type: 'number';
    label: string;
    default: number;
    min?: number;
    max?: number;
    step?: number;
  };

export type ControlSchema = Record<string, ControlField>;

// Extract control values record from a schema
export type ControlValues<T extends ControlSchema> = {
  [K in keyof T]: T[K]['default'];
};

// --- Component Box Schema ---
export type BoxedComp<TSchema extends ControlSchema = ControlSchema> = {
  title: string;
  description?: string;
  controls?: TSchema;
  display: Component<{ controls: ControlValues<TSchema>, logger: UseLoggerRet }>;
  code: QRL<(values: ControlValues<TSchema>) => string> | ((values: ControlValues<TSchema>) => string);
  rowSpan?: number;
  colSpan?: number;
};

// --- Section Schema ---
export type Section = {
  link: string;
  title: string;
  description: string;
  aside?: Component;
  default: BoxedComp;
  others: BoxedComp[];
};

import { section as accordionSection } from './accordion';
import { section as alertSection } from './alert';
import { section as animatedSection } from './animated';
import { section as avatarSection } from './avatar';
import { section as backdropOverlaySection } from './backdrop-overlay';
import { section as buttonSection } from './button';
import { section as calendarSection } from './calendar';
import { section as chipSection } from './chip';
import { section as modalSection } from './modal';
import { section as navigationMenuSection } from './navigation-menu';
import { section as spinnerSection } from './spinner';
import { section as tabsSection } from './tabs';
import { section as radioSection } from './radio';
import { UseLoggerRet } from '~/hooks/use-logger';

// Lookup Map from Route Parameter to Kit Section
export const SECTIONS_MAP = {
  accordion: accordionSection,
  alert: alertSection,
  animated: animatedSection,
  avatar: avatarSection,
  'backdrop-overlay': backdropOverlaySection,
  button: buttonSection,
  calendar: calendarSection,
  chip: chipSection,
  modal: modalSection,
  'navigation-menu': navigationMenuSection,
  spinner: spinnerSection,
  tabs: tabsSection,
  radio: radioSection,
};
