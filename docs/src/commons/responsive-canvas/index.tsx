import type { Signal } from '@qwik.dev/core';
import { component$, useSignal, useVisibleTask$, Slot } from '@qwik.dev/core';

import { DimensionsContext, type DimensionData } from './dimensions-context';

// The component no longer needs any props.
interface ResponsiveCanvasProps { }

export const ResponsiveCanvas = component$<ResponsiveCanvasProps>(() => {
  const containerRef = useSignal<HTMLDivElement>();
  const sizeSignal = useSignal({ width: 0, height: 0 });
  const hasMeasured = useSignal(false);

  const dimensionData: DimensionData = {
    size: sizeSignal,
    ref: containerRef as Signal<HTMLDivElement | undefined>,
  };

  DimensionsContext.useProvider(dimensionData);

  useVisibleTask$(({ cleanup }) => {
    const element = containerRef.value;
    if (!element) return;

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry && entry.contentRect.width > 0) {
        // 3. On resize, efficiently update the value of the provided signal.
        sizeSignal.value = {
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        };
        // Trigger the initial render of children after the first valid measurement.
        if (!hasMeasured.value) {
          hasMeasured.value = true;
        }
      }
    });

    observer.observe(element);

    cleanup(() => observer.disconnect());
  });

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Slot />
      {/*hasMeasured.value && <Slot />*/}
    </div>
  );
});
