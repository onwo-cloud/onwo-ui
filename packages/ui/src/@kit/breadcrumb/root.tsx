import type { JSXChildren, JSXOutput } from '@qwik.dev/core';
import { UiIcon } from '~ui/icon-provider';
import { withAs } from '@onwo/primitives';
import type { BaseIconComponent, BaseIconProps } from '@onwo/primitives/svg-icon';

export type BreadcrumbProps = {
  children: JSXChildren[];
  separator?: BaseIconComponent;
};

export const Breadcrumb = withAs('nav')<BreadcrumbProps>(({ As, class: className, ...props }) => {
  const Sep =
    props.separator ?? ((props: BaseIconProps) => <UiIcon name="chevron-right" {...props} />);

  return (
    <As {...props} aria-label="Breadcrumb" class={className}>
      <ol class="text-lead flex gap-2 flex-wrap items-center">
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
