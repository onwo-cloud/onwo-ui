import { ClassList, component$ } from '@builder.io/qwik';

export type TooltipArrowProps = {
  width?: number;
  height?: number;
  class?: ClassList;
};

export const HTooltipArrow = component$((props: TooltipArrowProps) => {
  const { width = 10, height = 5, class: className } = props;

  return (
    <div
      class={['tooltip-arrow', className]}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    />
  );
});
