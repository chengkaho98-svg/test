import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

/**
 * Eases a number from 0 to its target once `active` becomes true.
 * Falls back to the final value when motion is reduced.
 */
export function useCountUp(target, active, { duration = 1700, decimals = 0 } = {}) {
  const reducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    if (reducedMotion) {
      setValue(target);
      return;
    }

    let frame;
    const start = performance.now();
    const easeOutCubic = (progress) => 1 - Math.pow(1 - progress, 3);

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(target * easeOutCubic(progress));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration, reducedMotion]);

  return decimals > 0
    ? value.toFixed(decimals)
    : Math.round(value).toLocaleString('en-US');
}
