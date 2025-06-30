/* eslint-disable unicorn/numeric-separators-style */
import { $, component$, useComputed$, useSignal, useVisibleTask$ } from '@builder.io/qwik';

type DataPoint = { date: string; value: number };

// 30-day sample data points
const dataPoints30D: DataPoint[] = [
  { date: 'Jun 05', value: 305000 },
  { date: 'Jun 12', value: 308000 },
  { date: 'Jun 19', value: 306000 },
  { date: 'Jun 26', value: 304000 },
  { date: 'Jul 03', value: 307000 },
  { date: 'Jul 10', value: 302000 },
  { date: 'Jul 17', value: 345000 },
  { date: 'Jul 24', value: 358000 },
  { date: 'Jul 31', value: 352000 },
  { date: 'Aug 07', value: 360000 },
  { date: 'Aug 14', value: 355000 },
  { date: 'Aug 21', value: 365000 },
  { date: 'Aug 28', value: 370000 },
  { date: 'Sep 04', value: 375000 },
  { date: 'Sep 11', value: 380000 },
  { date: 'Sep 18', value: 382542 },
];
// Create SVG path based on current container width and data
const createPath = (dataPoints: DataPoint[], chartHeight: number, width: number) => {
  const min = Math.min(...dataPoints.map((d) => d.value));
  const max = Math.max(...dataPoints.map((d) => d.value));

  const points = dataPoints.map((point, index) => {
    const x = (index / (dataPoints.length - 1)) * width;
    const y = chartHeight - ((point.value - min) / (max - min)) * chartHeight;
    return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
  });
  return points.join(' ');
};

type HoveredPoint = {
  index: number;
  value: number;
  date: string;
  isInterpolated: boolean;
};

const NetWorthChart = component$(() => {
  const _containerWidth = useSignal(800);
  const _hoveredPoint = useSignal<HoveredPoint | null>(null);
  const _popoverPosition = useSignal({ x: 0, y: 0 });
  const _showPopover = useSignal(false);
  const _timeRange = useSignal('30D');
  const _isAnimating = useSignal(false);
  const _isTouchActive = useSignal(false);
  const _longPressTimer = useSignal<number | null>(null);

  const containerRef = useSignal<HTMLElement>();
  const pathRef = useSignal<HTMLElement>();
  const animationRef = useSignal<number>();
  const chartHeight = 200;

  // Get 7-day data as last 7 elements from 30-day data
  const dataPoints7D = dataPoints30D.slice(-7);
  const _currentData = useComputed$(() =>
    _timeRange.value === '30D' ? dataPoints30D : dataPoints7D,
  );
  const _minValue = useComputed$(() => Math.min(..._currentData.value.map((d) => d.value)));
  const _maxValue = useComputed$(() => Math.max(..._currentData.value.map((d) => d.value)));

  // Update container width on resize
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    const updateWidth = () => {
      if (containerRef.value) {
        _containerWidth.value = containerRef.value.offsetWidth;
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    cleanup(() => window.removeEventListener('resize', updateWidth));
  });

  // Interpolate between two path strings
  const interpolatePath = $((fromPath: string, toPath: string, progress: number) => {
    // Parse path commands into coordinate arrays
    const parsePathToPoints = (pathStr: string) => {
      const commands = pathStr.trim().split(/(?=[ML])/);
      return commands.map((cmd) => {
        const parts = cmd.trim().split(/\s+/);
        const coords = parts.slice(1).map(Number);
        return { x: coords[0], y: coords[1] };
      });
    };

    const fromPoints = parsePathToPoints(fromPath);
    const toPoints = parsePathToPoints(toPath);

    // Normalize arrays to same length
    const maxLength = Math.max(fromPoints.length, toPoints.length);
    const normalizedFrom = [...fromPoints];
    const normalizedTo = [...toPoints];

    // Pad shorter array by duplicating first point (left side)
    while (normalizedFrom.length < maxLength) {
      normalizedFrom.unshift({ ...normalizedFrom[0] });
    }

    while (normalizedTo.length < maxLength) {
      normalizedTo.unshift({ ...normalizedTo[0] });
    }

    // Interpolate between normalized point arrays
    const interpolatedPoints = normalizedFrom.map((fromPoint, i) => {
      const toPoint = normalizedTo[i];
      return {
        x: fromPoint.x + (toPoint.x - fromPoint.x) * progress,
        y: fromPoint.y + (toPoint.y - fromPoint.y) * progress,
      };
    });

    // Convert back to path string
    return interpolatedPoints
      .map((point, i) => {
        const command = i === 0 ? 'M' : 'L';
        return `${command} ${point.x} ${point.y}`;
      })
      .join(' ');
  });

  // Animate path transition
  const animatePathTransition = $(async (fromData: DataPoint[], toData: DataPoint[]) => {
    if (!pathRef.value || _isAnimating.value) return;

    _isAnimating.value = true;

    const fromPath = createPath(fromData, chartHeight, _containerWidth.value);
    const toPath = createPath(toData, chartHeight, _containerWidth.value);

    const duration = 800; // ms
    const startTime = performance.now();

    const animate = async (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const interpolatedPath = await interpolatePath(fromPath, toPath, easeOut);

      if (pathRef.value) {
        pathRef.value.setAttribute('d', interpolatedPath);
      }

      if (progress < 1) {
        animationRef.value = requestAnimationFrame(animate);
      } else {
        _isAnimating.value = false;
      }
    };

    animationRef.value = requestAnimationFrame(animate);
  });

  // Handle time range change
  const handleTimeRangeChange = $((newRange: string) => {
    if (newRange === _timeRange.value || _isAnimating.value) return;

    const fromData = _timeRange.value === '30D' ? dataPoints30D : dataPoints7D;
    const toData = newRange === '30D' ? dataPoints30D : dataPoints7D;

    animatePathTransition(fromData, toData);
    _timeRange.value = newRange;
    _showPopover.value = false;
    _hoveredPoint.value = null;
  });

  // Cleanup animation on unmount
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) =>
    cleanup(() => {
      if (animationRef.value) {
        cancelAnimationFrame(animationRef.value);
      }
    }),
  );
  //
  // Update popover position based on x coordinate
  const updatePopoverPosition = $((x: number) => {
    // Clamp x to chart bounds
    const clampedX = Math.max(0, Math.min(x, _containerWidth.value));

    // Calculate the exact position along the line (0 to 1)
    const progress = clampedX / _containerWidth.value;
    const segmentIndex = progress * (_currentData.value.length - 1);

    // Find the two points to interpolate between
    const leftIndex = Math.floor(segmentIndex);
    const rightIndex = Math.min(leftIndex + 1, _currentData.value.length - 1);
    const segmentProgress = segmentIndex - leftIndex;

    // Interpolate between the two points
    const leftPoint = _currentData.value[leftIndex];
    const rightPoint = _currentData.value[rightIndex];

    const interpolatedValue =
      leftPoint.value + (rightPoint.value - leftPoint.value) * segmentProgress;

    // Calculate Y position based on interpolated value
    const lineY =
      chartHeight -
      ((interpolatedValue - _minValue.value) / (_maxValue.value - _minValue.value)) * chartHeight;

    // Create interpolated date string
    const interpolatedDate = segmentProgress < 0.5 ? leftPoint.date : rightPoint.date;

    _hoveredPoint.value = {
      index: segmentIndex,
      value: interpolatedValue,
      date: interpolatedDate,
      isInterpolated: leftIndex !== rightIndex,
    };
    _popoverPosition.value = { x: clampedX, y: lineY };
    _showPopover.value = true;
  });

  // Handle mouse movement over the chart
  const handleMouseMove = $((e: MouseEvent) => {
    if (!containerRef.value || _isAnimating.value) return;

    const rect = containerRef.value.getBoundingClientRect();
    const x = e.clientX - rect.left;

    updatePopoverPosition(x);
  });

  // Handle touch movement over the chart
  const handleTouchMove = $((e: TouchEvent) => {
    if (!containerRef.value || _isAnimating.value || !_isTouchActive.value) return;

    e.preventDefault(); // Prevent scrolling
    const rect = containerRef.value.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;

    updatePopoverPosition(x);
  });

  // Handle touch start (long press detection)
  const handleTouchStart = $((e: TouchEvent) => {
    if (_isAnimating.value) return;

    const timer = setTimeout(() => {
      _isTouchActive.value = true;
      const rect = containerRef.value!.getBoundingClientRect();
      const touch = e.touches[0];
      const x = touch.clientX - rect.left;
      updatePopoverPosition(x);
    }, 300); // 300ms long press threshold

    _longPressTimer.value = Number(timer);
  });

  // Handle touch end
  const handleTouchEnd = $(() => {
    if (_longPressTimer.value) {
      clearTimeout(_longPressTimer.value);
      _longPressTimer.value = null;
    }

    _isTouchActive.value = false;
    _showPopover.value = false;
    _hoveredPoint.value = null;
  });

  const handleMouseLeave = $(() => {
    if (!_isAnimating.value) {
      _showPopover.value = false;
      _hoveredPoint.value = null;
    }
  });

  // Format currency
  const formatCurrency = (value: any) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(value);
  };

  const pathData = createPath(_currentData.value, chartHeight, _containerWidth.value);

  return (
    <div class="w-full max-w-4xl mx-auto p-6 bg-white border border-gray-200 rounded-lg">
      {/* Header */}
      <div class="flex justify-between items-start mb-6">
        <div>
          <h2 class="text-gray-500 text-sm mb-1">Net Worth</h2>
          <div class="text-3xl font-bold text-gray-900">$382,542.79</div>
          <div class="text-sm mt-1">
            <span class="text-green-500">$76,902.88 (↑ 25.2%)</span>
            <span class="text-gray-500"> vs. last month</span>
          </div>
        </div>

        {/* Time Range Selector */}
        <div class="flex items-center space-x-2">
          <div class="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick$={() => handleTimeRangeChange('7D')}
              class={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
                _timeRange.value === '7D'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              disabled={_isAnimating.value}
            >
              7D
            </button>
            <button
              onClick$={() => handleTimeRangeChange('30D')}
              class={`px-3 py-1 text-sm rounded-md transition-all duration-200 ${
                _timeRange.value === '30D'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              disabled={_isAnimating.value}
            >
              30D
            </button>
          </div>
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Chart */}
      <div class="relative" ref={containerRef}>
        <svg
          width="100%"
          height={chartHeight}
          viewBox={`0 0 ${_containerWidth.value} ${chartHeight}`}
          class="overflow-visible"
          onMouseMove$={handleMouseMove}
          onMouseLeave$={handleMouseLeave}
          onTouchStart$={handleTouchStart}
          onTouchMove$={handleTouchMove}
          onTouchEnd$={handleTouchEnd}
          onTouchCancel$={handleTouchEnd}
          style={{ touchAction: 'none' }}
        >
          {/* Chart line */}
          <path
            ref={pathRef}
            d={pathData}
            fill="none"
            stroke="#10b981"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          {/* Data points */}
          {!_isAnimating.value &&
            _currentData.value.map((point, index) => {
              const x = (index / (_currentData.value.length - 1)) * _containerWidth.value;
              const y =
                chartHeight -
                ((point.value - _minValue.value) / (_maxValue.value - _minValue.value)) *
                  chartHeight;
              const isNearHover =
                _hoveredPoint.value && Math.abs(_hoveredPoint.value.index - index) < 0.5;

              return (
                <circle
                  key={`${_timeRange.value}-${index}`}
                  cx={x}
                  cy={y}
                  r={isNearHover ? '5' : '3'}
                  fill="#10b981"
                  class={`transition-all duration-200 ${isNearHover ? 'opacity-100' : 'opacity-0'}`}
                  style={{
                    filter: isNearHover ? 'drop-shadow(0 2px 4px rgba(16, 185, 129, 0.3))' : 'none',
                  }}
                />
              );
            })}

          {/* Hover indicator circle */}
          {_hoveredPoint.value && _showPopover.value && !_isAnimating.value && (
            <circle
              cx={_popoverPosition.value.x}
              cy={_popoverPosition.value.y}
              r="6"
              fill="#10b981"
              class="drop-shadow-lg transition-opacity duration-200 opacity-100"
              style={{
                filter: 'drop-shadow(0 2px 8px rgba(16, 185, 129, 0.4))',
              }}
            />
          )}
        </svg>

        {/* Popover */}
        {_hoveredPoint.value && _showPopover.value && !_isAnimating.value && (
          <div
            class={`absolute z-50 bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg pointer-events-none transition-transform duration-150 ease-out ${
              _isTouchActive.value ? 'scale-110' : 'scale-100'
            }`}
            style={{
              left: 0,
              top: 0,
              transform: `translate(${_popoverPosition.value.x}px, ${_popoverPosition.value.y - 60}px) translateX(-50%) ${
                _isTouchActive.value ? 'scale(1.1)' : 'scale(1)'
              }`,
            }}
          >
            <div class="text-sm font-medium">{formatCurrency(_hoveredPoint.value.value)}</div>
            <div class="text-xs text-gray-300 mt-1">
              {_hoveredPoint.value.date}
              {_hoveredPoint.value.isInterpolated && <span class="ml-1 text-gray-400">~</span>}
            </div>
            {/* Arrow pointing down */}
            <div class="absolute top-full left-1/2 transform -translate-x-1/2">
              <div class="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </div>
        )}

        {/* Date labels */}
        <div class="flex justify-between mt-4 text-xs text-gray-500">
          <span>{_timeRange.value === '30D' ? 'Jun 05, 2025' : _currentData.value[0]?.date}</span>
          <span>{_currentData.value.at(-1)?.date}</span>
        </div>
      </div>
    </div>
  );
});
