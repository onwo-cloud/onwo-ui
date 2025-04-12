/* eslint-disable qwik/use-method-usage */
import type { CSSProperties, Signal } from '@builder.io/qwik';
import { Slot, component$, useComputed$, useSignal, useStyles$, useTask$ } from '@builder.io/qwik';
import { withAs } from '~/utils/as';

const animationStyles = `
@keyframes onwo-animated-in {
  from {
    opacity: var(--onwo-in-opacity, 1);
    transform: translate3d(var(--onwo-in-translate-x, 0), var(--onwo-in-translate-y, 0), 0) scale3d(var(--onwo-in-scale, 1), var(--onwo-in-scale, 1), var(--onwo-in-scale, 1)) rotate(var(--onwo-in-rotate, 0));
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotate(0);
  }
}

@keyframes onwo-animated-out {
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotate(0);
  }
  to {
    opacity: var(--onwo-out-opacity, 1);
    transform: translate3d(var(--onwo-out-translate-x, 0), var(--onwo-out-translate-y, 0), 0) scale3d(var(--onwo-out-scale, 1), var(--onwo-out-scale, 1), var(--onwo-out-scale, 1)) rotate(var(--onwo-out-rotate, 0));
  }
}
`;

type AnimationDirection = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';

type AnimationFillMode = 'none' | 'forwards' | 'backwards' | 'both';

const builtinTimings = {
  linear: 'linear',
  'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
  'ease-out': 'cubic-bezier(0, 0, 0.2, 1);',
  'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
} as const;

type BuiltinTimingFunction = keyof typeof builtinTimings;

type AnimationKind = {
  opacity?: number /* number betwen 1 and 100 */;
  rotate?: number;
  scale?: number;
  slide?: { x?: string; y?: string };
};

export type Animation = {
  durationMs?: number;
  delayMs?: number;
  direction?: AnimationDirection;
  fillMode?: AnimationFillMode;
  iterationCount?: number | 'infinite';
  playState?: 'running' | 'paused';
  timing?: BuiltinTimingFunction | { custom: string };
} & AnimationKind;

export type AnimatedProps = {
  ['bind:visible']?: Signal<boolean>;
  in?: Animation;
  out?: Animation;
};

const getTimingFunction = (timingFunction?: Animation['timing']) => {
  if (!timingFunction) return 'ease';
  if (typeof timingFunction !== 'string') return timingFunction.custom;
  return builtinTimings[timingFunction];
};

const DEFAULT_ANIMATION_DURATION = 300;

const getAnimationStyle = (animType: 'in' | 'out', animation: Animation) => {
  const {
    durationMs = DEFAULT_ANIMATION_DURATION,
    delayMs = 0,
    direction = 'normal',
    fillMode = 'forwards',
    iterationCount = 1,
    playState,
    timing: timingFunction,
    ...kind
  } = animation;

  const styles: CSSProperties = {
    animationName: `onwo-animated-${animType}`,
    animationDuration: `${durationMs}ms`,
    animationDelay: `${delayMs}ms`,
    animationDirection: direction,
    animationFillMode: fillMode,
    animationIterationCount: iterationCount,
    animationPlayState: playState,
    animationTimingFunction: getTimingFunction(timingFunction),
  };

  if (kind.opacity !== undefined) {
    styles[`--onwo-${animType}-opacity`] = kind.opacity / 100;
  }

  if (kind.rotate !== undefined) {
    styles[`--onwo-${animType}-rotate`] = `${kind.rotate}deg`;
  }

  if (kind.scale !== undefined) {
    styles[`--onwo-${animType}-scale`] = kind.scale;
  }

  if (kind.slide !== undefined) {
    const slide = kind.slide;
    if (slide.y !== undefined) {
      styles[`--onwo-${animType}-translate-y`] = slide.y;
    }

    if (slide.x !== undefined) {
      styles[`--onwo-${animType}-translate-x`] = slide.x;
    }
  }

  return styles;
};

const AnimatedRaw = withAs('div')<AnimatedProps>(({
  As,
  'bind:visible': visible,
  style,
  in: inAnimation,
  out: outAnimation,
  ...props
}) => {
  const mounted = useSignal<boolean>(visible?.value ?? true);
  useStyles$(animationStyles);

  const inStyle = inAnimation && getAnimationStyle('in', inAnimation);
  const outStyle = outAnimation && getAnimationStyle('out', outAnimation);

  useTask$(({ track, cleanup }) => {
    if (!visible) return;
    track(() => visible.value);
    if (visible.value === true || !outStyle) {
      mounted.value = visible.value;
      return;
    }
    const animationTime =
      (outAnimation.delayMs ?? 0) + (outAnimation.durationMs ?? DEFAULT_ANIMATION_DURATION);
    const timeoutId = setTimeout(() => {
      mounted.value = false;
    }, animationTime);
    cleanup(() => clearTimeout(timeoutId));
  });

  const styles = useComputed$(() => {
    if (!visible || visible.value === true) {
      return { ...inStyle, ...style };
    } else {
      return { ...outStyle, ...style };
    }
  });

  return (
    <>
      {mounted.value && (
        <As style={styles.value} {...props}>
          <Slot />
        </As>
      )}
    </>
  );
});

export const Animated = component$(AnimatedRaw);
