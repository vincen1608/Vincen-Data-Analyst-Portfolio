import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useMediaQuery } from '../../lib/useMediaQuery';

const MagicWandIcon: React.FC = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="filter drop-shadow-[0_0_6px_rgba(212,175,55,0.7)]"
  >
    {/* Wand stick */}
    <path
      d="M3 21L13.5 10.5"
      stroke="#C99E5D"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    {/* Grip */}
    <path
      d="M4.5 19.5L6.5 17.5"
      stroke="#8C6D4F"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Glowing Tip */}
    <path
      d="M13.5 10.5L15 9"
      stroke="#F7E7C4"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    {/* Main Sparkle Star near tip */}
    <path
      d="M17 6.5C17 4.5 18 3.5 18 3.5C18 3.5 19 4.5 19 6.5C19 8.5 20 9.5 20 9.5C20 9.5 19 10.5 19 12.5C19 14.5 18 15.5 18 15.5C18 15.5 17 14.5 17 12.5C17 10.5 16 9.5 16 9.5C16 9.5 17 8.5 17 6.5Z"
      fill="#F7E7C4"
    />
    {/* Tiny Sparkle Star 1 */}
    <path
      d="M10.5 3.5C10.5 2.5 11 2 11 2C11 2 11.5 2.5 11.5 3.5C11.5 4.5 12 5 12 5C12 5 11.5 5.5 11.5 6.5C11.5 7.5 11 8 11 8C11 8 10.5 7.5 10.5 6.5C10.5 5.5 10 5 10 5C10 5 10.5 4.5 10.5 3.5Z"
      fill="#D4AF37"
    />
    {/* Tiny Sparkle Star 2 */}
    <path
      d="M20 14C20 13.2 20.4 12.8 20.4 12.8C20.4 12.8 20.8 13.2 20.8 14C20.8 14.8 21.2 15.2 21.2 15.2C21.2 15.2 20.8 15.6 20.8 16.4C20.8 17.2 20.4 17.6 20.4 17.6C20.4 17.6 20 17.2 20 16.4C20 15.6 19.6 15.2 19.6 15.2C19.6 15.2 20 14.8 20 14Z"
      fill="#DFBE8A"
    />
  </svg>
);

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);

  const fine = useMediaQuery('(hover: hover) and (pointer: fine)');
  const reduce = useMediaQuery('(prefers-reduced-motion: reduce)');
  const enabled = fine && !reduce;

  useEffect(() => {
    if (!enabled || !dot.current || !ring.current) return;
    const root = document.documentElement;
    root.classList.add('has-cursor');

    const dx = gsap.quickTo(dot.current, 'x', { duration: 0.08, ease: 'power3' });
    const dy = gsap.quickTo(dot.current, 'y', { duration: 0.08, ease: 'power3' });
    const rx = gsap.quickTo(ring.current, 'x', { duration: 0.28, ease: 'power3' });
    const ry = gsap.quickTo(ring.current, 'y', { duration: 0.28, ease: 'power3' });

    let visible = false;
    const move = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse') return;
      if (!visible) {
        visible = true;
        gsap.to([dot.current, ring.current], { autoAlpha: 1, duration: 0.3 });
      }
      dx(e.clientX);
      dy(e.clientY);
      rx(e.clientX);
      ry(e.clientY);
    };

    const over = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null;
      const labelled = target?.closest<HTMLElement>('[data-cursor]');
      const interactive = target?.closest('a, button, [role="tab"], input, label, select');
      const text = labelled?.dataset.cursor || null;
      setLabel(text);
      root.dataset.cursorState = text ? 'label' : interactive ? 'hover' : 'idle';
    };

    const leaveWindow = () => {
      visible = false;
      gsap.to([dot.current, ring.current], { autoAlpha: 0, duration: 0.3 });
    };
    const down = () => gsap.to(ring.current, { scale: 0.85, duration: 0.2 });
    const up = () => gsap.to(ring.current, { scale: 1, duration: 0.3 });

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerover', over, { passive: true });
    document.documentElement.addEventListener('pointerleave', leaveWindow);
    window.addEventListener('pointerdown', down);
    window.addEventListener('pointerup', up);

    return () => {
      root.classList.remove('has-cursor');
      delete root.dataset.cursorState;
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerover', over);
      document.documentElement.removeEventListener('pointerleave', leaveWindow);
      window.removeEventListener('pointerdown', down);
      window.removeEventListener('pointerup', up);
    };
  }, [enabled]);

  if (!enabled) return null;

  const isMagicWand = label === 'VIEW' || label === 'WAND';
  const isVincen = label === 'VINCEN';

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[300]">
      {/* Central Gold Dot (hidden when magic wand is active) */}
      <div
        ref={dot}
        className={`invisible fixed left-0 top-0 -ml-[3px] -mt-[3px] size-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37] opacity-0 transition-opacity duration-200 ${
          isMagicWand ? 'opacity-0' : ''
        }`}
      />

      {/* Outer Magnetic Element */}
      <div ref={ring} className="invisible fixed left-0 top-0 opacity-0">
        {/* CASE 1: Magic Wand over Project Cards (No large circle, no ring, no VIEW text) */}
        {isMagicWand ? (
          <div className="-translate-x-1/2 -translate-y-1/2 transition-transform duration-300 ease-out flex items-center justify-center">
            <MagicWandIcon />
          </div>
        ) : isVincen ? (
          /* CASE 2: VINCEN portrait interaction (preserved exactly) */
          <div className="grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full size-24 border border-[#D4AF37] bg-[#120F0C]/90 text-[#F7E7C4] shadow-[0_0_20px_rgba(212,175,55,0.35)] backdrop-blur-md transition-all duration-300">
            <span
              className="text-[0.65rem] font-mono tracking-[0.25em] uppercase text-[#F7E7C4] font-medium"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              VINCEN
            </span>
          </div>
        ) : label ? (
          /* CASE 3: Compact pill for other labeled elements (e.g. COPY, DISPATCH, TOP) */
          <div className="grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full px-3 py-1 border border-[#D4AF37]/70 bg-[#120F0C]/90 text-[#F7E7C4] shadow-[0_0_12px_rgba(212,175,55,0.25)] backdrop-blur-md transition-all duration-300">
            <span
              className="text-[0.55rem] font-mono tracking-[0.2em] uppercase text-[#F7E7C4] font-medium whitespace-nowrap"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {label}
            </span>
          </div>
        ) : (
          /* CASE 4: Normal hover state (subtle trailing ring) */
          <div className="grid -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full size-9 border border-[#D4AF37]/50 shadow-[0_0_12px_rgba(212,175,55,0.15)] [html[data-cursor-state=hover]_&]:size-14 [html[data-cursor-state=hover]_&]:border-[#D4AF37] [html[data-cursor-state=hover]_&]:bg-[#D4AF37]/15 transition-[width,height,background-color,border-color] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)]" />
        )}
      </div>
    </div>
  );
}

export default Cursor;
