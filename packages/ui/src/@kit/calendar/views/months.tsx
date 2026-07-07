import type { QRL, Signal } from '@qwik.dev/core';
import { $, component$ } from '@qwik.dev/core';
import { isSameMonth } from '~ui/utils/date';

import { CalendarGrid } from '../commons/calendar-grid';
import { CalendarGridButton } from '../commons/calendar-grid-button';
import type { WeekStart } from '../date-picker-helpers';
import { getFormattedDate, isDateInRange, Views } from '../date-picker-helpers';

type Props = {
  language: string;
  weekStart: WeekStart;
  minDate?: Date;
  maxDate?: Date;
  view: Signal<Views>;
  selectedDate: Signal<Date | undefined>;
  viewDate: Signal<Date>;
  changeSelectedDate$: QRL<(date: Date) => void>;
};

export const CalendarViewMonth = component$(
  ({ minDate, maxDate, selectedDate, viewDate, language, view }: Props) => {
    const today = new Date();

    return (
      <CalendarGrid>
        {Array.from({ length: 3 }, (_, row) => (
          <tr key={row} class="flex select-none font-normal-light w-full">
            {Array.from({ length: 4 }, (_, col) => {
              const newDate = new Date(viewDate.value);
              newDate.setMonth(row * 4 + col);
              const month = getFormattedDate(language, newDate, { month: 'short' });

              const isSelected = selectedDate.value
                ? isSameMonth(selectedDate.value, newDate)
                : false;
              const isDisabled = !isDateInRange(newDate, minDate, maxDate);

              return (
                <CalendarGridButton
                  key={`${row}-${col}`}
                  name="month"
                  highlight={isSameMonth(today, newDate)}
                  isDisabled={isDisabled}
                  isSelected={isSelected}
                  onSelected$={$(() => {
                    viewDate.value = newDate;
                    view.value = Views.Days;
                  })}
                  label={month}
                />
              );
            })}
          </tr>
        ))}
      </CalendarGrid>
    );
  },
);
