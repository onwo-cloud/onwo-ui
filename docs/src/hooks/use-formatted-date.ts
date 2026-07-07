import { useComputed$ } from "@qwik.dev/core";

// 1. The custom hook
export const useFormattedDate = (timestamp: number) => useComputed$(() => {
  const d = new Date(timestamp);
  const yyyy = d.getFullYear();
  // getMonth() is 0-indexed, so we add 1. padStart ensures 2 digits (e.g., '05')
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd}`;
});
