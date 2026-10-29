import React from 'react';
import { motion } from 'framer-motion';
import watermarkImg from '../assets/watermark.png';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-screen w-full flex flex-col justify-center bg-[#060913] text-[#F8FAFC] overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20"
    >
      {/* Restrained Dark Navy Blue Background with Subtle Gold Radial Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_0%,rgba(30,58,138,0.25),transparent)] pointer-events-none" />
      <div className="absolute top-1/4 -left-32 size-[32rem] bg-[#1E3A8A]/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 size-[28rem] bg-[#D4AF37]/6 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle Hairline Grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #94A3B8 1px, transparent 1px), linear-gradient(to bottom, #94A3B8 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }}
      />

      <div className="container-x relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Content (7 Cols) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Recruiter Status Pill */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#334155] bg-[#0A0E1A] text-[10.5px] font-mono tracking-widest uppercase text-[#E2E8F0] shadow-sm">
                <span className="relative flex size-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-[#10B981] opacity-75" />
                  <span className="relative size-2 rounded-full bg-[#10B981]" />
                </span>
                <span>Available for Data Analyst Roles</span>
              </span>
            </motion.div>

            {/* Name & Title */}
            <motion.div variants={fadeUp} className="mb-2">
              <span
                className="text-base sm:text-lg font-semibold tracking-[0.25em] uppercase text-[#D4AF37] block"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Vincen M — Aspiring Data Analyst
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeUp} className="my-3">
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] font-bold tracking-tight text-white leading-[1.12]"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Turning Data into{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F7E7C4] to-[#C99E5D]">
                  Actionable Insights.
                </span>
              </h1>
            </motion.div>

            {/* Sub-headline Narrative */}
            <motion.div variants={fadeUp} className="mb-8 max-w-2xl">
              <p
                className="text-sm sm:text-base text-[#CBD5E1] font-light leading-relaxed"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Aspiring Data Analyst skilled in transforming complex raw datasets into interactive
                Power BI dashboards, relational SQL data models, spreadsheet analytics, and Python data intelligence.
              </p>
            </motion.div>

            {/* Clearly Visible CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 sm:gap-5 mb-10"
            >
              {/* View Projects Button */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#D4AF37] text-black font-semibold text-xs tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[#F7E7C4] hover:shadow-[0_0_20px_rgba(212,175,55,0.35)]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>View Projects</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-1 text-sm font-bold">
                  ↗
                </span>
              </a>

              {/* Download Resume Button */}
              <a
                href="/resume/Vincen_M_ATS_Resume.pdf"
                download="Vincen_M_ATS_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-[#334155] bg-[#0A0E1A] text-[#F1F5F9] hover:border-[#D4AF37] hover:text-[#D4AF37] text-xs font-medium tracking-[0.18em] uppercase transition-all duration-300"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>Download Resume</span>
                <span className="transform transition-transform duration-300 group-hover:translate-y-0.5 text-xs text-[#D4AF37]">
                  ↓
                </span>
              </a>

              {/* Quick Contact Link */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 text-xs font-medium tracking-[0.16em] uppercase text-[#94A3B8] hover:text-white transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>Contact Me</span>
                <span>→</span>
              </a>
            </motion.div>

            {/* Core Stack Badges: Clean, balanced 4 core technologies */}
            <motion.div
              variants={fadeUp}
              className="pt-6 border-t border-[#1E293B] flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748B] mr-1">
                Core Stack:
              </span>
              {['Power BI', 'SQL / MySQL', 'Advanced Excel', 'Python'].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3.5 py-1.5 rounded-sm border border-[#1E293B] bg-[#0A0E1A] text-[11px] font-mono text-[#E2E8F0] tracking-wide hover:border-[#D4AF37]/50 transition-colors"
                  >
                    {skill}
                  </span>
                ),
              )}
            </motion.div>
          </motion.div>

          {/* Right Column: Executive Profile Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[370px]">
              {/* Subtle Blue/Gold Glow */}
              <div className="absolute -inset-1 bg-gradient-to-b from-[#1E3A8A]/30 via-[#D4AF37]/15 to-transparent rounded-2xl blur-md pointer-events-none" />

              <div className="relative rounded-2xl border border-[#1E293B] bg-[#0A0E1A] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden">
                {/* Subtle Gold Accent Line */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent" />

                {/* Portrait Image Container */}
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#060913] mb-4 border border-[#1E293B]">
                  <img
                    src="/images/vincen-portrait.jpg"
                    alt="Vincen M - Aspiring Data Analyst"
                    className="w-full h-full object-cover object-top filter contrast-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Watermark Insignia in Corner */}
                  <div className="absolute top-3 right-3 size-9 rounded-full bg-black/75 border border-[#334155] flex items-center justify-center backdrop-blur-sm">
                    <img
                      src={watermarkImg}
                      alt="Vincen Insignia"
                      className="size-6 object-contain"
                    />
                  </div>

                  {/* Bottom Overlay Info */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <span
                        className="text-sm font-bold uppercase tracking-wider text-white block"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        Vincen M
                      </span>
                      <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
                        Aspiring Data Analyst
                      </span>
                    </div>
                    <span className="text-[9px] font-mono text-[#94A3B8] px-2 py-0.5 rounded-sm bg-black/80 border border-[#334155]">
                      Chennai, IN
                    </span>
                  </div>
                </div>

                {/* Capability Highlights */}
                <div className="grid grid-cols-2 gap-2 text-left pt-2 border-t border-[#1E293B]">
                  <div className="p-2.5 rounded-md bg-[#0F172A]/70 border border-[#1E293B]">
                    <span className="text-[9px] font-mono uppercase text-[#64748B] block">
                      Core Discipline
                    </span>
                    <span className="text-xs font-mono font-medium text-[#F1F5F9] block mt-0.5">
                      Business Intelligence
                    </span>
                  </div>
                  <div className="p-2.5 rounded-md bg-[#0F172A]/70 border border-[#1E293B]">
                    <span className="text-[9px] font-mono uppercase text-[#64748B] block">
                      Analytical Focus
                    </span>
                    <span className="text-xs font-mono font-medium text-[#F1F5F9] block mt-0.5">
                      Actionable Insights
                    </span>
                  </div>
                </div>

                {/* Direct Channel Shortcuts */}
                <div className="flex items-center justify-between pt-3 mt-3 border-t border-[#1E293B] text-[10px] font-mono text-[#94A3B8]">
                  <a
                    href="https://www.linkedin.com/in/vincen-m-bb6429217"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    LinkedIn ↗
                  </a>
                  <span>&bull;</span>
                  <a
                    href="https://github.com/vincen1608"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    GitHub ↗
                  </a>
                  <span>&bull;</span>
                  <a
                    href="mailto:jasvince20011@gmail.com"
                    className="hover:text-[#D4AF37] transition-colors"
                  >
                    Email ↗
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
