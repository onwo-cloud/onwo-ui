import type { QRL } from '@qwik.dev/core';
import { $, Slot, component$, useComputed$, useId } from '@qwik.dev/core';
import { PageNavContext } from './use-page-nav-context';
import type { OwPropsOf } from '~primitives/index';

export type PageNavLinkProps = {
  disabled?: boolean;
  value?: string;
  onSelected$?: QRL<(value: string) => void>;
} & OwPropsOf<'div'>;

export const PageNavLink = component$(({
  disabled = false,
  onSelected$,
  value: defaultValue,
  ...props
}: PageNavLinkProps) => {
  const context = PageNavContext.use();

  const itemId = useId();
  const value = useComputed$(() => defaultValue ?? itemId);
  const isSelected = useComputed$(() => value.value === context.selected.value);

  return (
    <div
      {...props}
      role="link"
      tabIndex={props?.tabIndex ?? (disabled ? -1 : 0)}
      data-selected={isSelected.value}
      data-page-nav-item="link" // Added for unified keyboard navigation
      aria-current={isSelected.value ? 'page' : undefined}
      id={`${context.name}-link-${value.value}`}
      onClick$={[
        $(() => {
          if (disabled) return;
          context.select$(value.value);
          onSelected$?.(value.value);
        }),
        props?.onClick$,
      ]}
    >
      <Slot />
    </div>
  );
});
