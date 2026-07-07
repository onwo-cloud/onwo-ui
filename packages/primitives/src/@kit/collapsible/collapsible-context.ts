
import { createContextId, type Signal } from '@qwik.dev/core';

export interface CollapsibleContextState {
  isExpanded: Signal<boolean>;
  contentId: string;
}

export const CollapsibleContext = createContextId<CollapsibleContextState>('collapsible-context');
