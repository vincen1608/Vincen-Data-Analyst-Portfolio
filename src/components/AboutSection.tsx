import React from 'react';
import watermarkImg from '../assets/watermark.png';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-[#060913] text-[#F8FAFC] py-20 lg:py-28 overflow-hidden scroll-mt-20 border-t border-[#1E293B]"
    >
      <div className="container-x relative z-10">
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <span
            className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            01 / Professional Profile
          </span>
          <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Narrative & Factual Overview (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase leading-tight mb-6"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Transforming Complex Data into{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F1F5F9] to-[#D4AF37]">
                Actionable Insights
              </span>
            </h2>

            <div
              className="space-y-4 text-xs sm:text-sm md:text-[14.5px] font-light text-[#CBD5E1] leading-relaxed max-w-2xl mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                Hello, I&apos;m <span className="text-white font-medium">Vincen M</span>, an aspiring
                Data Analyst based in <span className="text-white font-medium">Chennai, India</span>.
              </p>
              <p>
                I hold a <span className="text-white font-medium">B.Sc. in Hotel Management</span> and have
                professional experience as a <span className="text-[#D4AF37] font-medium">Restaurant Captain</span>,
                where I developed a strong foundation in team coordination, fast-paced service management,
                and day-to-day business operations.
              </p>
              <p>
                Currently, I am studying Data Analytics &amp; Data Science at{' '}
                <span className="text-white font-medium">IT Vedant</span>, actively developing hands-on
                skills in <span className="text-white font-medium">Power BI, SQL, Excel, and Python</span> through
                practical, relevant projects.
              </p>
              <p>
                I am interested in transforming complex business data into clean, intuitive dashboards
                and actionable insights that support informed organizational decisions.
              </p>
            </div>

            {/* Quick Summary Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#1E293B]">
              <div className="p-3 rounded-lg border border-[#1E293B] bg-[#0A0E1A]">
                <span className="text-[10px] font-mono text-[#64748B] uppercase block">Current Role</span>
                <span className="text-xs sm:text-sm font-mono font-medium text-white block mt-0.5">
                  Aspiring Data Analyst
                </span>
              </div>
              <div className="p-3 rounded-lg border border-[#1E293B] bg-[#0A0E1A]">
                <span className="text-[10px] font-mono text-[#64748B] uppercase block">Current Training</span>
                <span className="text-xs sm:text-sm font-mono font-medium text-white block mt-0.5">
                  IT Vedant
                </span>
              </div>
              <div className="p-3 rounded-lg border border-[#1E293B] bg-[#0A0E1A]">
                <span className="text-[10px] font-mono text-[#64748B] uppercase block">Experience</span>
                <span className="text-xs sm:text-sm font-mono font-medium text-white block mt-0.5">
                  Restaurant Captain
                </span>
              </div>
              <div className="p-3 rounded-lg border border-[#1E293B] bg-[#0A0E1A]">
                <span className="text-[10px] font-mono text-[#64748B] uppercase block">Education</span>
                <span className="text-xs sm:text-sm font-mono font-medium text-white block mt-0.5">
                  B.Sc. in Hotel Management
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Executive Portrait Frame with Sophisticated Gold Glow on Hover (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="group relative w-full max-w-[360px]">
              {/* Soft Ambient Gold Aura Glow - smoothly fades in on hover, minimal in default state */}
              <div
                className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#D4AF37]/25 via-[#D4AF37]/10 to-transparent opacity-15 blur-xl transition-all duration-700 ease-out group-hover:opacity-90 group-hover:blur-2xl group-hover:-inset-3 pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Card with Subtle Border Highlight & Gentle Image Elevation */}
              <div className="relative rounded-2xl border border-[#1E293B] bg-[#0A0E1A] p-4 shadow-xl overflow-hidden transition-all duration-500 ease-out group-hover:border-[#D4AF37]/70 group-hover:shadow-[0_20px_50px_rgba(212,175,55,0.18)] group-hover:-translate-y-1.5">
                {/* Subtle Gold Accent Top Line */}
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent group-hover:via-[#D4AF37] transition-all duration-500" />

                {/* Portrait Canvas */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#060913] mb-4 border border-[#1E293B] group-hover:border-[#D4AF37]/50 transition-colors duration-500">
                  <img
                    src="/images/vincen-about-portrait.png"
                    alt="Vincen M"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('vincen-portrait.png')) {
                        target.src = '/images/vincen-portrait.png';
                      }
                    }}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Watermark Insignia */}
                  <div className="absolute bottom-4 right-4 size-9 rounded-full bg-black/80 border border-[#334155] group-hover:border-[#D4AF37]/60 flex items-center justify-center shadow-md transition-colors duration-500">
                    <img src={watermarkImg} alt="Vincen Insignia" className="size-5 object-contain" />
                  </div>

                  {/* Name Tag */}
                  <div className="absolute bottom-4 left-4">
                    <span
                      className="text-base font-bold uppercase tracking-wider text-white block"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      Vincen M
                    </span>
                    <span className="text-[10px] font-mono tracking-widest text-[#D4AF37] uppercase">
                      Aspiring Data Analyst
                    </span>
                  </div>
                </div>

                {/* Factual Info List */}
                <div className="space-y-2 pt-2 border-t border-[#1E293B] text-xs font-mono">
                  <div className="flex items-center justify-between text-[#94A3B8]">
                    <span className="text-[#64748B] uppercase">Location:</span>
                    <span className="text-white">Chennai, India</span>
                  </div>
                  <div className="flex items-center justify-between text-[#94A3B8]">
                    <span className="text-[#64748B] uppercase">Training:</span>
                    <span className="text-white">Data Analytics @ IT Vedant</span>
                  </div>
                  <div className="flex items-center justify-between text-[#94A3B8]">
                    <span className="text-[#64748B] uppercase">Background:</span>
                    <span className="text-white">Restaurant Captain</span>
                  </div>
                  <div className="flex items-center justify-between text-[#94A3B8]">
                    <span className="text-[#64748B] uppercase">Education:</span>
                    <span className="text-white">B.Sc. in Hotel Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
