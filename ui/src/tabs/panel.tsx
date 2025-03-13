import { component$, type QwikIntrinsicElements } from '@builder.io/qwik';
import { cn } from '~/utils/cn';

export type PanelProps = QwikIntrinsicElements['div'] & {
  id?: string;
  testid?: string;
  class?: string;
  selected?: boolean;
};

export const Panel = component$<PanelProps>(
  ({ id, testid, class: className, selected = false, ...props }) => {
    return (
      <div
        id={id}
        data-testid={testid}
        class={cn(
          selected ? 'block' : 'hidden',
          'p-4 focus:outline-none',
          className,
        )}
        role="tabpanel"
        aria-labelledby={`${id}-tab`}
        tabIndex={selected ? 0 : -1}
        {...props}
      >
        <Slot />
      </div>
    );
  },
);
