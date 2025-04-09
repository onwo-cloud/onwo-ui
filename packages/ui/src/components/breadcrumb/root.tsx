import type { JSXChildren, JSXOutput } from '@builder.io/qwik';
import { Icons } from '@onwo/icons';
import type { IconProps } from '@onwo/primitives';
import { cn } from '@onwo/primitives';
import { withAs } from '~/utils/as';

type RootProps = {
  children: JSXChildren[];
  separator?: (props: IconProps) => JSXOutput;
};

export const Root = withAs('nav')<RootProps>(({ As, class: className, ...props }) => {
  const Sep = props.separator ?? Icons.ArrowsRight;

  return (
    <As {...props} aria-label="Breadcrumb" class={cn(className)}>
      <ol class="text-trunks flex gap-2 flex-wrap items-center">
        {props.children.map((child, idx) => (
          <div key={idx} class="contents">
            {child}
            {idx !== props.children.length - 1 && <Sep size="xs" />}
          </div>
        ))}
      </ol>
    </As>
  );
});
