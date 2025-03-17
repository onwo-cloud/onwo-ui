import { Slot, component$, type QwikIntrinsicElements } from '@builder.io/qwik';

export type PanelsProps = QwikIntrinsicElements['div'] & {
  id?: string;
  class?: string;
  selected?: number;
};

export const Panels = component$<PanelsProps>(({ id, class: className, ...props }) => {
  return (
    <div id={id} class={className} {...props}>
      <Slot />
    </div>
  );
});
