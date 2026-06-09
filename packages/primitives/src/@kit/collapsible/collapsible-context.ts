
import { createContextId, type Signal } from '@builder.io/qwik';

export interface CollapsibleContextState {
  isExpanded: Signal<boolean>;
  contentId: string;
}

export const CollapsibleContext = createContextId<CollapsibleContextState>('collapsible-context');
