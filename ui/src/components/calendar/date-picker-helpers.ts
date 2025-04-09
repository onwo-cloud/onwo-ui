export enum Views {
  Days = 0,
  Months = 1,
  Years = 2,
  Decades = 3,
}

export enum WeekStart {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export const isDateInRange = (date: Date, minDate?: Date, maxDate?: Date): boolean => {
  const dateTime = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();

  if (minDate && maxDate) {
    const minDateTime = new Date(
      minDate.getFullYear(),
      minDate.getMonth(),
      minDate.getDate(),
    ).getTime();
    const maxDateTime = new Date(
      maxDate.getFullYear(),
      maxDate.getMonth(),
      maxDate.getDate(),
    ).getTime();
    return dateTime >= minDateTime && dateTime <= maxDateTime;
  }

  if (minDate) {
    const minDateTime = new Date(
      minDate.getFullYear(),
      minDate.getMonth(),
      minDate.getDate(),
    ).getTime();
    return dateTime >= minDateTime;
  }

  if (maxDate) {
    const maxDateTime = new Date(
      maxDate.getFullYear(),
      maxDate.getMonth(),
      maxDate.getDate(),
    ).getTime();
    return dateTime <= maxDateTime;
  }

  return true;
};

export const isDateEqual = (date: Date, selectedDate: Date): boolean => {
  date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  selectedDate = new Date(
    selectedDate.getFullYear(),
    selectedDate.getMonth(),
    selectedDate.getDate(),
  );

  return date.getTime() === selectedDate.getTime();
};

export const getFirstDateInRange = (date: Date, minDate?: Date, maxDate?: Date): Date => {
  if (!isDateInRange(date, minDate, maxDate)) {
    if (minDate && date < minDate) {
      date = minDate;
    } else if (maxDate && date > maxDate) {
      date = maxDate;
    }
  }
  return date;
};

export const getFirstDayOfTheMonth = (date: Date, weekStart: WeekStart): Date => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const dayOfWeek = firstDayOfMonth.getDay();

  let diff = dayOfWeek - weekStart;
  if (diff < 0) {
    diff += 7;
  }

  return addDays(firstDayOfMonth, -diff);
};

type WeekDay = {
  long: string;
  short: string;
};

export const getWeekDays = (lang: string, weekStart: WeekStart): WeekDay[] => {
  const weekdays = [];
  const date = new Date(0);
  date.setDate(date.getDate() - date.getDay() + weekStart);

  const longfmt = new Intl.DateTimeFormat(lang, { weekday: 'long' });
  const shortfmt = new Intl.DateTimeFormat(lang, { weekday: 'short' });

  for (let i = 0; i < 7; i++) {
    const weekday = {
      short: shortfmt.format(addDays(date, i)).slice(0, 2),
      long: longfmt.format(addDays(date, i)),
    };
    weekdays.push(weekday);
  }

  return weekdays;
};

export const addDays = (date: Date, amount: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + amount);
  return newDate;
};

export const addMonths = (date: Date, amount: number): Date => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + amount);
  return newDate;
};

export const addYears = (date: Date, amount: number): Date => {
  const newDate = new Date(date);
  newDate.setFullYear(newDate.getFullYear() + amount);
  return newDate;
};

export const getFormattedDate = (
  language: string,
  date: Date,
  options?: Intl.DateTimeFormatOptions,
): string => {
  let defaultOptions: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  if (options) {
    defaultOptions = options;
  }

  return new Intl.DateTimeFormat(language, defaultOptions).format(date);
};

export const startOfYearPeriod = (date: Date, years: number): number => {
  const year = date.getFullYear();
  return Math.floor(year / years) * years;
};
