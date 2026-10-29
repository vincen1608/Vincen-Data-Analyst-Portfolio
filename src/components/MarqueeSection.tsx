import React from 'react';

const WORDS = [
  'POWER BI DASHBOARDS',
  'RELATIONAL SQL & MYSQL',
  'ADVANCED EXCEL',
  'PYTHON ANALYTICS',
  'STAR SCHEMA MODELING',
  'DATA PIPELINES & MODELING',
  'EXECUTIVE KPI REPORTING',
  'BUSINESS INTELLIGENCE',
];

export const MarqueeSection: React.FC = () => {
  return (
    <div
      className="relative overflow-hidden border-y border-[#1E293B] bg-[#0A0E1A] py-4 text-white select-none"
      aria-label="Capabilities ticker"
      role="region"
    >
      <div className="flex w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">
        {[...WORDS, ...WORDS].map((word, i) => (
          <span key={i} className="flex items-center mx-5">
            <span
              className="text-xs sm:text-sm font-mono tracking-[0.2em] uppercase text-[#CBD5E1]"
            >
              {word}
            </span>
            <span className="ml-5 size-1 rounded-full bg-[#D4AF37]" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
