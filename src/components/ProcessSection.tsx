import React, { useRef } from 'react';
import { gsap, MQ, registerGsap, useGSAP } from '../lib/animations';

registerGsap();

const STEPS = [
  {
    n: '01',
    title: 'SCOPE & DISCOVER',
    body: 'Deconstruct the business objective, identify critical decision-maker KPIs, and audit the structure and quality of available data sources.',
  },
  {
    n: '02',
    title: 'EXTRACT & MODEL',
    body: 'Engineer robust SQL queries, normalize relational tables, resolve data inconsistencies, and design efficient star schema architectures.',
  },
  {
    n: '03',
    title: 'ANALYZE & COMPUTE',
    body: 'Formulate statistical computations, build dynamic DAX measures, execute Python exploratory workflows, and validate data integrity.',
  },
  {
    n: '04',
    title: 'DELIVER & AUTOMATE',
    body: 'Deploy executive Power BI dashboards and applied AI applications like BUVIJAG AI to transform raw records into automated business intelligence.',
  },
];

export const ProcessSection: React.FC = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const mm = gsap.matchMedia();

      mm.add(MQ.motion, () => {
        const list = q('[data-steps]')[0];
        if (!list) return;

        // Progress line draws as user scrolls through the step list
        gsap.fromTo(
          q('[data-progress]'),
          { scaleX: 0, scaleY: 0 },
          {
            scaleX: 1,
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: list,
              start: 'top 75%',
              end: 'bottom 55%',
              scrub: true,
            },
          },
        );

        // Step reveals
        q('[data-step]').forEach((step) => {
          const tl = gsap.timeline({
            scrollTrigger: { trigger: step, start: 'top 80%', once: true },
          });

          tl.fromTo(
            step.querySelector('[data-num]'),
            { yPercent: 100 },
            { yPercent: 0, duration: 1.1, ease: 'expo.out' },
          )
            .fromTo(
              step.querySelectorAll('[data-fade]'),
              { y: 20, autoAlpha: 0 },
              { y: 0, autoAlpha: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out' },
              0.15,
            )
            .fromTo(
              step.querySelector('[data-dot]'),
              { scale: 0 },
              { scale: 1, duration: 0.6, ease: 'back.out(3)' },
              0.1,
            );
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      id="process"
      ref={root}
      aria-labelledby="process-title"
      className="relative w-screen bg-[#070605] text-[#E8DFD8] py-24 lg:py-36 overflow-hidden"
    >
      {/* Background Studio Glow */}
      <div className="absolute top-1/2 left-1/3 w-[36rem] h-[36rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="container-x relative z-10">
        {/* Eyebrow Header */}
        <div className="flex items-center space-x-4 mb-6">
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            05 / METHODOLOGY
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
        </div>

        {/* Section Headline */}
        <div className="grid gap-6 lg:grid-cols-12 mb-16 items-end">
          <div className="lg:col-span-8">
            <h2
              id="process-title"
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight uppercase leading-[0.85] select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                HOW RAW DATA
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                BECOMES INTELLIGENCE.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 text-xs sm:text-sm text-[#A8988B] font-light leading-relaxed">
            A disciplined, four-phase engineering approach ensuring that business objectives map directly
            into mathematically sound, scalable data and applied AI products.
          </div>
        </div>

        {/* 4-Step Track */}
        <ol data-steps className="relative mt-12 grid gap-0 md:mt-20 md:grid-cols-4 md:gap-8">
          {/* Track Line Background */}
          <span
            aria-hidden="true"
            className="absolute left-[9px] top-0 h-full w-[1px] bg-[#8C6D4F]/25 md:left-0 md:top-[9px] md:h-[1px] md:w-full"
          />
          {/* Animated Gold Progress Line */}
          <span
            aria-hidden="true"
            data-progress
            className="absolute left-[9px] top-0 h-full w-[2px] origin-top bg-gradient-to-b md:bg-gradient-to-r from-[#8C6D4F] via-[#D4AF37] to-[#F7E7C4] shadow-[0_0_8px_#D4AF37] md:left-0 md:top-[9px] md:h-[2px] md:w-full md:origin-left"
          />

          {STEPS.map((s) => (
            <li
              key={s.n}
              data-step
              className="relative grid grid-cols-[2.8rem_1fr] pb-12 md:block md:pb-0 group"
            >
              {/* Node Indicator Dot */}
              <span
                data-dot
                aria-hidden="true"
                className="relative z-10 block size-[18px] rounded-full border-[3px] border-[#070605] bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"
              />

              <div className="md:mt-8 pl-4 md:pl-0">
                {/* Watermark Step Number */}
                <span className="block overflow-hidden">
                  <span
                    data-num
                    className="block text-6xl sm:text-7xl lg:text-8xl text-white/[0.08] group-hover:text-[#D4AF37]/20 transition-colors leading-none select-none font-bold"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {s.n}
                  </span>
                </span>

                <h3
                  data-fade
                  className="text-2xl sm:text-3xl text-white tracking-wide uppercase -mt-4 mb-2 group-hover:text-[#F7E7C4] transition-colors"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {s.title}
                </h3>

                <p
                  data-fade
                  className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed group-hover:text-[#D5CBC0] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
