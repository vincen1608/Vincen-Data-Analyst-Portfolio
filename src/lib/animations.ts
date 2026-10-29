import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

let registered = false;

export function registerGsap() {
  if (registered || typeof window === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger, useGSAP);
  gsap.defaults({ ease: EASE.out, duration: 1 });
  registered = true;
}

export const EASE = {
  out: 'expo.out',
  inOut: 'expo.inOut',
  soft: 'power3.out',
  smooth: 'power2.inOut',
} as const;

export const MQ = {
  motion: '(prefers-reduced-motion: no-preference)',
  reduce: '(prefers-reduced-motion: reduce)',
  desktop: '(min-width: 1024px) and (prefers-reduced-motion: no-preference)',
  mobile: '(max-width: 1023px) and (prefers-reduced-motion: no-preference)',
} as const;

export function maskReveal(
  targets: gsap.TweenTarget,
  vars: gsap.TweenVars = {},
): gsap.core.Tween {
  return gsap.fromTo(
    targets,
    { yPercent: 115, rotate: 1 },
    { yPercent: 0, rotate: 0, duration: 1.1, ease: EASE.out, stagger: 0.05, ...vars },
  );
}

export function riseIn(targets: gsap.TweenTarget, vars: gsap.TweenVars = {}) {
  return gsap.fromTo(
    targets,
    { y: 28, autoAlpha: 0 },
    { y: 0, autoAlpha: 1, duration: 0.9, ease: EASE.soft, stagger: 0.08, ...vars },
  );
}

export { gsap, ScrollTrigger, useGSAP };
