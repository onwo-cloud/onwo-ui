import { Slot, component$, type QwikHTMLElements } from '@builder.io/qwik';

export type PanelsProps = QwikHTMLElements['div'] & {
  id?: string;
  selected?: number;
};

export const Panels = component$<PanelsProps>(({ id, class: className, ...props }) => {
  return (
    <div id={id} class={className} {...props}>
      <Slot />
    </div>
  );
});
