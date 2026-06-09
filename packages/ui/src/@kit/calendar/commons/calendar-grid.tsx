import type { JSXOutput, QRL } from '@builder.io/qwik';

type CalendarGridProps = {
  headerCategories?: { ['aria-label']: string; display: string }[];
  onKeyDown$?: QRL<(event: KeyboardEvent) => void>;
  rows: number;
  cols: number;
  renderer: (row: number, col: number) => JSXOutput;
};

export const CalendarGrid = ({ onKeyDown$, ...props }: CalendarGridProps) => (
  <table
    tabIndex={1}
    onKeyDown$={(e) => onKeyDown$?.(e)}
    class="w-full"
    role="grid"
    aria-labelledby="calendar"
  >
    {props.headerCategories && (
      <thead class="text-ink-tertiary">
        <tr class="flex justify-around mb-3">
          {props.headerCategories.map((item, index) => (
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
      {Array.from({ length: props.rows }, (_, row) => {
        return (
          <tr key={row} class="flex select-none font-normal-light w-full">
            {Array.from({ length: props.cols }, (_, col) => {
              return props.renderer(row, col);
            })}
          </tr>
        );
      })}
    </tbody>
  </table>
);
