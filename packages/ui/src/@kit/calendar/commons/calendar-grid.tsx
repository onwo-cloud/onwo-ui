import type { QRL } from '@qwik.dev/core';
import { component$, Slot } from '@qwik.dev/core';

type CalendarGridProps = {
  headerCategories?: { ['aria-label']: string; display: string }[];
  onKeyDown$?: QRL<(event: KeyboardEvent) => void>;
};

export const CalendarGrid = component$<CalendarGridProps>(
  ({ headerCategories, onKeyDown$ }) => {
    return (
      <table
        tabIndex={1}
        onKeyDown$={onKeyDown$}
        class="w-full"
        role="grid"
        aria-labelledby="calendar"
      >
        {headerCategories && (
          <thead class="text-ink-tertiary">
            <tr class="flex justify-around mb-3">
              {headerCategories.map((item, index) => (
                <th
                  key={index}
                  scope="col"
                  class="rounded-md w-9 select-none font-medium text-macro tracking-widest"
                  aria-label={item['aria-label']}
                >
                  {item.display}
                </th>
              ))}
            </tr>
          </thead>
        )}

        <tbody role="rowgroup">
          <Slot />
        </tbody>
      </table>
    );
  },
);
