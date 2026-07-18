import { component$, $ } from '@qwik.dev/core';
import { ShadeSwatches, ALL_SHADE_STEPS } from '../shade-swatches';
import { useThemeContext } from '../theme-context';

interface ColorsTabProps {
  shadeVars: Record<string, string>;
}

export const ColorsTab = component$<ColorsTabProps>(({ shadeVars }) => {
  const ctx = useThemeContext.use();
  const colors = ctx.colorList.value;

  const handleReorder$ = $((draggedIdx: number, targetIdx: number) => {
    const updated = [...ctx.colorList.value];
    const [moved] = updated.splice(draggedIdx, 1);
    updated.splice(targetIdx, 0, moved);
    ctx.colorList.value = updated;
  });

  const allColorVars: Record<string, Record<string, string>> = {};

  for (const color of colors) {
    const prefix = color.id === 'shade' ? '--color-shade-' : `--color-${color.id}-`;
    const colorVars: Record<string, string> = {};

    for (let i = 0; i < ALL_SHADE_STEPS.length; i++) {
      const step = ALL_SHADE_STEPS[i];
      const srcKey = `${prefix}${step}`;
      const val = shadeVars[srcKey] || shadeVars[`--color-shade-${step}`];
      if (val) {
        colorVars[`--color-shade-${step}`] = val;
        colorVars[`--color-${color.id}-${step}`] = val;
        if (color.label) {
          colorVars[`--color-${color.label.toLowerCase()}-${step}`] = val;
        }
      }
    }

    allColorVars[color.id] = colorVars;
  }

  return (
    <div class="flex flex-col items-start w-full self-stretch">
      <ShadeSwatches
        shadeVars={allColorVars}
        onReorder$={handleReorder$}
      />
    </div>
  );
});
