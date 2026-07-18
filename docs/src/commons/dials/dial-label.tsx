import { component$, Slot } from '@qwik.dev/core';

export interface DialLabelProps {
  label?: string;
  for?: string;
}

export const DialLabel = component$<DialLabelProps>(({ label, for: htmlFor }) => {
  const content = label ? (
    <span class="text-sm/4 text-pretty font-sans text-ink-secondary line-clamp-1 select-none block">
      {label}
    </span>
  ) : (
    <Slot />
  );

  if (htmlFor) {
    return (
      <label
        for={htmlFor}
        class="shrink-0 w-20 overflow-clip cursor-pointer select-none"
      >
        {content}
      </label>
    );
  }

  return (
    <div class="shrink-0 w-20 overflow-clip">
      {content}
    </div>
  );
});
