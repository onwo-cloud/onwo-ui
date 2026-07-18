import { component$, useSignal, $ } from '@qwik.dev/core';

export interface CurveAreaProps {
  pathD?: string;
  palette?: string[];
  viewBox?: string;
  values?: number[];
  limitValues?: number[];
  minLimitValues?: number[];
  p3LimitValues?: number[];
  p3MinLimitValues?: number[];
  hideGraph?: boolean;
  isInView?: boolean;
  showDots?: boolean;
}

/**
 * Extract actual points on the curve (ignoring Cubic Bezier control handles)
 */
function getPointsFromPath(pathStr: string): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = [];
  const commandRegex = /([MLC])\s*([-\d\.\s,]+)/gi;
  let match;

  while ((match = commandRegex.exec(pathStr)) !== null) {
    const type = match[1].toUpperCase();
    const nums = match[2].trim().split(/[\s,]+/).map(Number);

    if (type === 'M' || type === 'L') {
      if (nums.length >= 2) {
        points.push({ x: nums[0], y: nums[1] });
      }
    } else if (type === 'C') {
      if (nums.length >= 6) {
        points.push({ x: nums[nums.length - 2], y: nums[nums.length - 1] });
      }
    }
  }
  return points;
}

/**
 * Convert an array of normalized floats [0..1] into SVG points & smooth path D
 */
function getCurveFromValues(values: number[], width = 400, height = 120, px = 20, py = 16) {
  if (!values || values.length === 0) {
    return { points: [], pathD: '' };
  }

  const graphWidth = width - 2 * px;
  const graphHeight = height - 2 * py;
  const stepX = values.length > 1 ? graphWidth / (values.length - 1) : 0;

  const points = values.map((val, idx) => {
    const clampedVal = Math.max(0, Math.min(1, val));
    const x = px + idx * stepX;
    // Normalized 1.0 is top (py), 0.0 is bottom (py + graphHeight)
    const y = py + (1 - clampedVal) * graphHeight;
    return { x: Number(x.toFixed(2)), y: Number(y.toFixed(2)) };
  });

  if (points.length === 1) {
    return { points, pathD: `M ${points[0].x} ${points[0].y}` };
  }

  let pathD = `M ${points[0].x} ${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i === 0 ? i : i - 1];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2 < points.length ? i + 2 : i + 1];

    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;

    pathD += ` C ${cp1x.toFixed(2)} ${cp1y.toFixed(2)}, ${cp2x.toFixed(2)} ${cp2y.toFixed(2)}, ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}`;
  }

  return { points, pathD };
}

export const CurveArea = component$<CurveAreaProps>(
  ({
    pathD: defaultPathD = 'M119.678 166.505C288.241 169.191 360.214 185.298 409.014 252.502',
    viewBox: defaultViewBox = '119.276 159.631 292.352 95.029',
    palette = [],
    values,
    limitValues,
    minLimitValues,
    p3LimitValues,
    p3MinLimitValues,
    hideGraph = false,
    isInView,
    showDots = false,
  }) => {
    const isSelfHovered = useSignal(false);
    const activeHoverIndex = useSignal<number | null>(null);
    const cursorInfo = useSignal<{ cx: number; cy: number; step: number; val: number; isEdge: boolean } | null>(null);

    const activeInView = isInView ?? isSelfHovered.value;
    
    // Palette colors are visible on hover, active view, or while sliding
    const showPaletteBar = Boolean(
      (showDots || activeInView || isSelfHovered.value || cursorInfo.value) && palette && palette.length > 0
    );

    const closestShadeIndex =
      cursorInfo.value && palette && palette.length > 0
        ? Math.min(palette.length - 1, Math.max(0, Math.round(cursorInfo.value.step / 50) - 1))
        : null;

    let activePathD = defaultPathD;
    let activeViewBox = defaultViewBox;
    let points: { x: number; y: number }[] = [];

    if (values && values.length > 0) {
      const computed = getCurveFromValues(values, 400, 120, 20, 16);
      activePathD = computed.pathD;
      points = computed.points;
      activeViewBox = '0 0 400 120';
    } else {
      points = getPointsFromPath(defaultPathD);
    }

    let limitPathD = '';
    if (limitValues && limitValues.length > 0) {
      limitPathD = getCurveFromValues(limitValues, 400, 120, 20, 16).pathD;
    }

    let minLimitPathD = '';
    if (minLimitValues && minLimitValues.length > 0) {
      minLimitPathD = getCurveFromValues(minLimitValues, 400, 120, 20, 16).pathD;
    }

    let p3LimitPathD = '';
    if (p3LimitValues && p3LimitValues.length > 0) {
      p3LimitPathD = getCurveFromValues(p3LimitValues, 400, 120, 20, 16).pathD;
    }

    let p3MinLimitPathD = '';
    if (p3MinLimitValues && p3MinLimitValues.length > 0) {
      p3MinLimitPathD = getCurveFromValues(p3MinLimitValues, 400, 120, 20, 16).pathD;
    }

    const hasP3Limits = Boolean(p3LimitPathD || p3MinLimitPathD);
    const delimiterStroke = activeInView ? 'var(--color-shade-500)' : 'var(--color-shade-300)';

    const handleMouseMove = $((e: QwikMouseEvent<HTMLDivElement>) => {
      const target = (e.target as Element)?.closest('.group\\/area') || (e.currentTarget as Element);
      if (!target || typeof target.getBoundingClientRect !== 'function') return;

      const rect = target.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const normalizedX = rect.width > 0 ? relX / rect.width : 0;
      const svgX = normalizedX * 400;

      const px = 20;
      const graphWidth = 360;
      const py = 16;
      const graphHeight = 88;

      const t = Math.max(0, Math.min(1, (svgX - px) / graphWidth));

      let cx = px + t * graphWidth;
      let cy = py + graphHeight;
      let valAtT = 0;
      let step = 0;
      let isEdge = false;

      if (values && values.length > 0) {
        const totalPoints = values.length;
        // Snap to nearest point index on line
        const idx = Math.min(totalPoints - 1, Math.max(0, Math.round(t * (totalPoints - 1))));
        const snappedT = totalPoints > 1 ? idx / (totalPoints - 1) : 0;

        cx = px + snappedT * graphWidth;
        valAtT = values[idx];
        cy = py + (1 - valAtT) * graphHeight;

        step = Math.min(1000, Math.max(0, Math.round((snappedT * 1000) / 50) * 50));

        const edgePad = 0.02;
        isEdge = valAtT < edgePad || valAtT >= 1 - edgePad || idx === 0 || idx === totalPoints - 1;
      } else {
        step = Math.min(1000, Math.max(0, Math.round((t * 1000) / 50) * 50));
        cx = px + t * graphWidth;
        cy = py + graphHeight;
      }

      cursorInfo.value = {
        cx: Number(cx.toFixed(2)),
        cy: Number(cy.toFixed(2)),
        step,
        val: valAtT,
        isEdge,
      };
    });

    const handleMouseLeave = $(() => {
      cursorInfo.value = null;
    });

    return (
      <div
        class="flex flex-col items-start w-full rounded-2xl border border-solid border-shade-1000/10 select-none bg-shade-0 relative overflow-hidden"
        onMouseEnter$={() => (isSelfHovered.value = true)}
        onMouseLeave$={() => (isSelfHovered.value = false)}
      >
        {/* Graph Preview Area */}
        {!hideGraph && (
          <div
            class="group/area relative w-full h-[120px] flex items-center justify-center overflow-hidden bg-canvas-secondary rounded-2xl cursor-crosshair"
            onMouseMove$={handleMouseMove}
            onMouseLeave$={handleMouseLeave}
          >
            {/* Legend Trigger */}
            <div class="absolute top-2 right-2 z-20 group/legend">
              <button
                type="button"
                class="w-4 h-4 rounded-full bg-canvas-tertiary border border-solid border-shade-300 flex items-center justify-center text-[12px] font-semibold text-ink cursor-help transition-colors"
                aria-label="Gamut legend"
              >
                ?
              </button>
              {/* Tooltip Legend Popover */}
              <div class="absolute right-0 top-full mt-1 opacity-0 pointer-events-none group-hover/legend:opacity-100 group-hover/legend:pointer-events-auto transition-opacity duration-150 flex flex-col gap-1.5 p-2 bg-shade-900/95 text-shade-0 text-[12px] rounded-lg border border-shade-0/10 whitespace-nowrap z-30">
                <div class="flex items-center gap-2">
                  <span class="w-3.5 h-0 border-b-2 border-dashed border-shade-500" />
                  <span>sRGB Gamut Limit</span>
                </div>
                {hasP3Limits && (
                  <div class="flex items-center gap-2">
                    <span class="w-3.5 h-0 border-b-2 border-dotted border-shade-550" />
                    <span>Display P3 Gamut Limit</span>
                  </div>
                )}
                <div class="flex items-center gap-2">
                  <span class="w-3.5 h-0 border-b-2 border-solid border-shade-300" />
                  <span>Value Curve</span>
                </div>
              </div>
            </div>

            <svg
              viewBox={activeViewBox}
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              class="w-full h-full shrink-0 overflow-visible text-shade-800"
            >
              {/* Min sRGB Gamut Limit Line */}
              {minLimitPathD && (
                <path
                  d={minLimitPathD}
                  fill="none"
                  stroke={delimiterStroke}
                  stroke-width="1.5"
                  stroke-dasharray="4 3"
                  vector-effect="non-scaling-stroke"
                  opacity="0.8"
                />
              )}

              {/* Max sRGB Gamut Limit Line */}
              {limitPathD && (
                <path
                  d={limitPathD}
                  fill="none"
                  stroke={delimiterStroke}
                  stroke-width="1.5"
                  stroke-dasharray="4 3"
                  vector-effect="non-scaling-stroke"
                  opacity="0.8"
                />
              )}

              {/* Min P3 Gamut Limit Line */}
              {p3MinLimitPathD && (
                <path
                  d={p3MinLimitPathD}
                  fill="none"
                  stroke="var(--color-shade-550)"
                  stroke-width="1.5"
                  stroke-dasharray="2 3"
                  vector-effect="non-scaling-stroke"
                  opacity="0.8"
                />
              )}

              {/* Max P3 Gamut Limit Line */}
              {p3LimitPathD && (
                <path
                  d={p3LimitPathD}
                  fill="none"
                  stroke="var(--color-shade-550)"
                  stroke-width="1.5"
                  stroke-dasharray="2 3"
                  vector-effect="non-scaling-stroke"
                  opacity="0.8"
                />
              )}

              {/* Connecting Curve Path */}
              <path
                d={activePathD}
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                vector-effect="non-scaling-stroke"
              />

              {/* Interactive Snapped Line Cursor Ball */}
              {cursorInfo.value && activeInView && (
                <g class="pointer-events-none">
                  <circle
                    cx={cursorInfo.value.cx}
                    cy={cursorInfo.value.cy}
                    r="4"
                    fill="currentColor"
                    stroke={cursorInfo.value.isEdge ? 'var(--color-shade-500)' : 'none'}
                    stroke-width={cursorInfo.value.isEdge ? '4' : '0'}
                    style={{
                      paintOrder: cursorInfo.value.isEdge ? 'stroke' : 'normal',
                      transformOrigin: `${cursorInfo.value.cx}px ${cursorInfo.value.cy}px`,
                    }}
                  />
                  <foreignObject
                    x={cursorInfo.value.cx - 45}
                    y={cursorInfo.value.cy - 38}
                    width="90"
                    height="30"
                    class="overflow-visible pointer-events-none z-30"
                  >
                    <div class="flex flex-col items-center justify-center">
                      <span class="text-base font-mono font-semibold text-ink bg-canvas-secondary/70 text-ink px-2 py-0.5 rounded shadow-xs whitespace-nowrap block border border-shade-0/10">
                        {cursorInfo.value.step} - {cursorInfo.value.val.toFixed(2)}
                      </span>
                      <div class="w-1 h-1 bg-canvas-secondary rotate-45 -mt-0.5 border-r border-b border-shade-0/10" />
                    </div>
                  </foreignObject>
                </g>
              )}

              {/* Vertex Dots */}
              {activeInView ? (
                showDots ? (
                  /* Show all dots while dragging sliders */
                  points.map((pt, idx) => {
                    const rawVal = values && values[idx] !== undefined ? values[idx] : 0;
                    const edgePad = 0.02;
                    const isEdge = rawVal < edgePad || rawVal >= 1 - edgePad;

                    return (
                      <g key={idx}>
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r="4"
                          fill="currentColor"
                          stroke={isEdge ? 'var(--color-shade-500)' : 'none'}
                          stroke-width={isEdge ? '4' : '0'}
                          style={{
                            paintOrder: isEdge ? 'stroke' : 'normal',
                            transformOrigin: `${pt.x}px ${pt.y}px`,
                          }}
                        />
                      </g>
                    );
                  })
                ) : (
                  /* Show ONLY the two edge dots when at rest / hovering */
                  points.length > 0 && (
                    <>
                      {/* Start Edge Dot */}
                      {(() => {
                        const pt = points[0];
                        const rawVal = values && values[0] !== undefined ? values[0] : 0;
                        const edgePad = 0.02;
                        const isEdge = rawVal < edgePad || rawVal >= 1 - edgePad;
                        return (
                          <circle
                            cx={pt.x}
                            cy={pt.y}
                            r="4"
                            fill="currentColor"
                            stroke={isEdge ? 'var(--color-shade-500)' : 'none'}
                            stroke-width={isEdge ? '4' : '0'}
                            style={{
                              paintOrder: isEdge ? 'stroke' : 'normal',
                              transformOrigin: `${pt.x}px ${pt.y}px`,
                            }}
                          />
                        );
                      })()}

                      {/* End Edge Dot */}
                      {points.length > 1 &&
                        (() => {
                          const lastIdx = points.length - 1;
                          const pt = points[lastIdx];
                          const rawVal =
                            values && values[lastIdx] !== undefined ? values[lastIdx] : 0;
                          const edgePad = 0.02;
                          const isEdge = rawVal < edgePad || rawVal >= 1 - edgePad;
                          return (
                            <circle
                              cx={pt.x}
                              cy={pt.y}
                              r="4"
                              fill="currentColor"
                              stroke={isEdge ? 'var(--color-shade-500)' : 'none'}
                              stroke-width={isEdge ? '4' : '0'}
                              style={{
                                paintOrder: isEdge ? 'stroke' : 'normal',
                                transformOrigin: `${pt.x}px ${pt.y}px`,
                              }}
                            />
                          );
                        })()}
                    </>
                  )
                )
              ) : (
                /* Out of view state */
                points.length > 0 && (
                  <>
                    <circle cx={points[0].x} cy={points[0].y} r="3.529" fill="currentColor" />
                    {points.length > 1 && (
                      <circle
                        cx={points[points.length - 1].x}
                        cy={points[points.length - 1].y}
                        r="3.529"
                        fill="currentColor"
                      />
                    )}
                  </>
                )
              )}
            </svg>

            {/* Absolute Overlay Shade Bar (20 Shades) */}
            {palette && palette.length > 0 && (
              <div
                class={[
                  'absolute bottom-0 left-0 right-0 h-2 z-20 flex items-stretch border-t border-shade-1000/10 transition-all duration-200 ease-out origin-bottom bg-shade-0/80 backdrop-blur-xs',
                  showPaletteBar
                    ? 'translate-y-0 opacity-100 pointer-events-auto'
                    : 'translate-y-full opacity-0 pointer-events-none',
                ]}
              >
                {palette.map((color, idx) => {
                  const isActive = activeHoverIndex.value === idx || closestShadeIndex === idx;
                  const isFirst = idx === 0;
                  const isLast = idx === palette.length - 1;

                  return (
                    <div
                      key={idx}
                      class="self-stretch flex-1 cursor-pointer relative"
                      style={{ zIndex: isActive ? 30 : 1 }}
                      onMouseEnter$={() => (activeHoverIndex.value = idx)}
                      onMouseLeave$={() => (activeHoverIndex.value = null)}
                    >
                      {/* Swatch Background Bar */}
                      <div
                        class={[
                          'w-full h-full transition-transform duration-150 ease-out origin-bottom',
                          isFirst && 'rounded-bl-2xl',
                          isLast && 'rounded-br-2xl',
                        ]}
                        style={{
                          backgroundColor: color,
                          transform: isActive ? 'scaleY(1.8)' : 'scaleY(1)',
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);
