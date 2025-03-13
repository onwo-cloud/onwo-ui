import { component$, type QwikIntrinsicElements } from '@builder.io/qwik';

export type PanelsProps = QwikIntrinsicElements['div'] & {
  id?: string;
  testid?: string;
  class?: string;
  selected?: number;
};

export const Panels = component$<PanelsProps>(
  ({ id, testid, class: className, selected, ...props }) => {
    return (
      <div id={id} data-testid={testid} class={className} {...props}>
        <Slot />
      </div>
    );
  },
);
