import { $, useSignal, useTask$, type QRL } from '@builder.io/qwik';

export interface UseTimerReturn {
  /** Whether the timeout is currently active */
  isActive: boolean;
  /** Whether the timeout is currently paused */
  isPaused: boolean;
  /** Remaining time in milliseconds */
  remainingTime: number;
  /** Start or restart the timeout */
  start: QRL<() => void>;
  /** Pause the timeout */
  pause: QRL<() => void>;
  /** Resume the paused timeout */
  resume: QRL<() => void>;
  /** Reset the timeout to initial state */
  reset: QRL<() => void>;
  /** Clear the timeout completely */
  clear: QRL<() => void>;
}

/**
 * A pausable timeout hook for Qwik.js
 * @param callback - Function to execute when timeout completes
 * @param delay - Delay in milliseconds
 * @param autoStart - Whether to start the timeout immediately (default: false)
 * @returns Object with timeout control methods and state
 */
export const useTimer = (
  callback: QRL<() => void>,
  delay: number,
  autoStart: boolean = false,
): UseTimerReturn => {
  const isActive = useSignal(false);
  const isPaused = useSignal(false);
  const remainingTime = useSignal(delay);
  const startTime = useSignal<number>(0);
  const timeoutId = useSignal<number | null>(null);

  const clear = $(() => {
    if (timeoutId.value) {
      clearTimeout(timeoutId.value);
      timeoutId.value = null;
    }
    isActive.value = false;
    isPaused.value = false;
  });

  const start = $(async () => {
    await clear();
    isActive.value = true;
    isPaused.value = false;
    remainingTime.value = delay;
    startTime.value = Date.now();

    timeoutId.value = setTimeout(() => {
      callback();
      isActive.value = false;
      remainingTime.value = 0;
      timeoutId.value = null;
    }, delay) as unknown as number;
  });

  const pause = $(() => {
    if (!isActive.value || isPaused.value) return;

    const elapsed = Date.now() - startTime.value;
    remainingTime.value = Math.max(0, delay - elapsed);

    if (timeoutId.value) {
      clearTimeout(timeoutId.value);
      timeoutId.value = null;
    }

    isPaused.value = true;
  });

  const resume = $(() => {
    if (!isActive.value || !isPaused.value) return;

    isPaused.value = false;
    startTime.value = Date.now();

    timeoutId.value = setTimeout(() => {
      callback();
      isActive.value = false;
      remainingTime.value = 0;
      timeoutId.value = null;
    }, remainingTime.value) as unknown as number;
  });

  const reset = $(() => {
    clear();
    remainingTime.value = delay;
  });

  // Update remaining time for active, non-paused timeouts
  useTask$(({ track, cleanup }) => {
    track(() => isActive.value);
    track(() => isPaused.value);

    if (!isActive.value || isPaused.value) return;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime.value;
      const remaining = Math.max(0, delay - elapsed);
      remainingTime.value = remaining;

      if (remaining === 0) {
        clearInterval(interval);
      }
    }, 100); // Update every 100ms for smooth UI updates

    cleanup(() => clearInterval(interval));
  });

  // Auto-start if requested
  useTask$(() => {
    if (autoStart) {
      start();
    }
  });

  // Cleanup on unmount
  useTask$(({ cleanup }) => {
    cleanup(() => {
      if (timeoutId.value) clearTimeout(timeoutId.value);
    });
  });

  return {
    isActive: isActive.value,
    isPaused: isPaused.value,
    remainingTime: remainingTime.value,
    start,
    pause,
    resume,
    reset,
    clear,
  };
};
