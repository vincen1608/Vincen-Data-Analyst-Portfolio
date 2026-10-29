import React, { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { gsap, MQ, registerGsap, useGSAP } from '../lib/animations';

registerGsap();

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  toolCategory: 'powerbi' | 'sql' | 'excel' | 'python';
  primaryTool: string;
  year: string;
  image: string;
  imageBadge: string;
  githubUrl: string;
  objective: string;
  toolsUsed: string[];
  metrics: { label: string; value: string }[];
}

const projects: ProjectData[] = [
  {
    id: 'healthcare-bi',
    number: '01',
    title: 'Healthcare Operations & Patient Analytics',
    subtitle: 'Executive Hospital Operations, Bed Occupancy & ER Wait Time Intelligence',
    category: 'Healthcare Analytics / Power BI',
    toolCategory: 'powerbi',
    primaryTool: 'Power BI',
    year: '2026',
    image: '/images/healthcare-operations-dashboard.jpg',
    imageBadge: 'Interactive Power BI Dashboard',
    githubUrl: 'https://github.com/vincen1608',
    objective:
      'Engineered an executive healthcare operations dashboard tracking hospital throughput, patient admission-to-discharge ratios, department bed occupancy, and emergency room wait times across 7,500 patient records.',
    toolsUsed: [
      'Power BI Desktop',
      'DAX Calculated Measures',
      'Power Query (M ETL)',
      'Star Schema Modeling',
      'Hospital Bed KPIs',
      'Interactive Slicers',
    ],
    metrics: [
      { label: 'BED OCCUPANCY', value: '94% ICU / 88% MedSurg' },
      { label: 'ER THROUGHPUT', value: '45m Avg / 135m Peak' },
      { label: 'ADMISSION VOLUME', value: '7,500 Total Patients' },
    ],
  },
  {
    id: 'brazilian-ecommerce',
    number: '02',
    title: 'Brazilian E-Commerce Relational Analysis',
    subtitle: 'Relational Transaction Modeling, Revenue Cohorts & Logistics Optimization',
    category: 'Relational SQL / MySQL',
    toolCategory: 'sql',
    primaryTool: 'SQL / MySQL',
    year: '2025',
    image: '/images/brazilian-ecommerce-dashboard.jpg',
    imageBadge: 'Relational SQL Analytics',
    githubUrl: 'https://github.com/vincen1608',
    objective:
      'Executed complex multi-table relational queries across 100,000+ orders capturing $1,585.9M in transaction value. Formulated CTEs and window functions to isolate customer retention drop-offs and logistics transit bottlenecks.',
    toolsUsed: [
      'MySQL Database',
      'Relational Schema Joins',
      'Window Functions',
      'Common Table Expressions (CTEs)',
      'Revenue Cohort Analysis',
      'Query Indexing',
    ],
    metrics: [
      { label: 'DATASET SCALE', value: '100,000+ Transactions' },
      { label: 'REVENUE ANALYZED', value: '$1,585.9M Total Volume' },
      { label: 'TECHNIQUES', value: 'Window Functions & CTEs' },
    ],
  },
  {
    id: 'hotel-cancellation',
    number: '03',
    title: 'Hotel Booking & Cancellation Analysis',
    subtitle: 'Booking Behavior Diagnostics, Lead Times & Revenue Optimization',
    category: 'Spreadsheet Analytics / Advanced Excel',
    toolCategory: 'excel',
    primaryTool: 'Microsoft Excel',
    year: '2025',
    image: '/images/hotel-booking-dashboard.jpg',
    imageBadge: 'Executive Excel KPI Dashboard',
    githubUrl: 'https://github.com/vincen1608',
    objective:
      'Synthesized 14,872 reservations generating $2.3M net revenue into an executive Excel KPI model. Isolated booking channel cancellations and lead-time variances to recommend tiered cancellation windows.',
    toolsUsed: [
      'Advanced Excel',
      'Dynamic PivotTables',
      'Power Pivot Data Model',
      'XLOOKUP / INDEX-MATCH',
      'Interactive Slicers',
      'Conditional Visual KPIs',
    ],
    metrics: [
      { label: 'RESERVATIONS', value: '14,872 Bookings' },
      { label: 'NET REVENUE', value: '$2.3M Analyzed' },
      { label: 'FOCUS', value: 'Cancellation Diagnostics' },
    ],
  },
  {
    id: 'buvijag-ai',
    number: '04',
    title: 'BUVIJAG AI Data Intelligence Platform',
    subtitle: 'Automated Dataset Health Scoring, Statistical Anomalies & Scenario Simulation',
    category: 'Data Science & Applied AI / Python',
    toolCategory: 'python',
    primaryTool: 'Python & Streamlit',
    year: '2026',
    image: '/images/buvijag-ai-dashboard.jpg',
    imageBadge: 'Streamlit AI Intelligence Interface',
    githubUrl: 'https://github.com/vincen1608/BUVIJAG',
    objective:
      'Engineered an applied data intelligence application with Streamlit and Python. Automatically evaluates dataset health scores, detects statistical anomalies across variances, recommends optimal charts, and generates PDF reports.',
    toolsUsed: [
      'Python',
      'Streamlit Framework',
      'Pandas & NumPy',
      'Statistical Profiling',
      'Anomaly Detection',
      'Chart Recommendation',
    ],
    metrics: [
      { label: 'ARCHITECTURE', value: 'Python & Streamlit' },
      { label: 'CAPABILITIES', value: 'Health Scoring & Anomalies' },
      { label: 'OPEN SOURCE', value: 'GitHub Repository' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  const root = useRef<HTMLElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    title: string;
    badge: string;
  } | null>(null);

  // GSAP Pinned Horizontal Story Track on Desktop
  useGSAP(
    () => {
      const q = gsap.utils.selector(root);
      const track = q('[data-track]')[0] as HTMLElement | undefined;
      const pinContainer = q('[data-pin]')[0] as HTMLElement | undefined;
      if (!track || !pinContainer) return;

      const mm = gsap.matchMedia();

      mm.add(MQ.desktop, () => {
        track.classList.add('is-pinned');
        track.scrollLeft = 0;
        const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 80);

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: pinContainer,
            pin: true,
            scrub: 1,
            start: 'top top',
            end: () => `+=${distance()}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              const idx = Math.min(
                projects.length - 1,
                Math.floor(self.progress * projects.length),
              );
              setActiveIdx(idx);
            },
          },
        });

        tl.to(track, { x: () => -distance() }, 0)
          .to(q('[data-bg-word]'), { x: () => -distance() * 0.25 }, 0)
          .fromTo(q('[data-progress]'), { scaleX: 0 }, { scaleX: 1 }, 0);

        return () => {
          track.classList.remove('is-pinned');
          gsap.set(track, { clearProps: 'transform' });
        };
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  const currentProject = projects[activeIdx];

  return (
    <section
      id="projects"
      ref={root}
      className="relative w-full bg-[#060913] text-[#F8FAFC] py-16 lg:py-0 border-t border-[#1E293B]"
    >
      {/* Studio Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 size-[32rem] bg-[#1E3A8A]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 size-[28rem] bg-[#D4AF37]/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Pinned Container */}
      <div
        data-pin
        className="relative overflow-hidden lg:flex lg:h-[100svh] lg:flex-col lg:justify-center"
      >
        {/* Parallax Background Outline Watermark */}
        <span
          data-bg-word
          aria-hidden="true"
          className="text-outline pointer-events-none absolute left-[4vw] hidden lg:block top-1/2 -translate-y-1/2 whitespace-nowrap text-[20vw] select-none text-white/[0.03] uppercase font-bold leading-none z-0"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {currentProject?.title.split(' ')[0] || 'FLAGSHIP'}
        </span>

        {/* Section Top Header & Navigation Bar */}
        <div className="container-x relative z-10 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              03 / Selected Work
            </span>
            <div className="w-12 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
            <span className="text-[11px] font-mono tracking-widest text-[#94A3B8]">
              ({String(activeIdx + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')})
            </span>
          </div>

          {/* Controls: Drive Progress Bar & Mobile Swipe Hint */}
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex w-56 items-center gap-4">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#64748B]">
                SCROLL SHOWCASE
              </span>
              <span className="relative h-[2px] flex-1 bg-[#1E293B] rounded-full overflow-hidden">
                <span
                  data-progress
                  className="absolute inset-0 origin-left bg-gradient-to-r from-[#1E3A8A] via-[#D4AF37] to-[#F7E7C4]"
                />
              </span>
            </div>

            {/* Mobile swipe hint */}
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] lg:hidden">
              SWIPE &rarr;
            </span>
          </div>
        </div>

        {/* Horizontal Track Container */}
        <div
          data-track
          className="h-track no-scrollbar relative z-10 flex items-stretch gap-6 px-[clamp(1.25rem,4vw,3.5rem)] lg:gap-8 pb-4"
          tabIndex={0}
          aria-label="Projects showcase track - scroll horizontally"
        >
          {/* Intro Lead Card */}
          <div className="flex w-[85vw] sm:w-[60vw] lg:w-[30vw] shrink-0 flex-col justify-between rounded-2xl border border-[#1E293B] bg-[#0A0E1A]/95 p-8 lg:p-10 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] block mb-3">
                // THE PORTFOLIO SUITE
              </span>
              <h3
                className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase leading-tight text-white mb-4"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Engineered <span className="text-[#D4AF37]">Insights.</span>
              </h3>
              <p
                className="text-xs sm:text-sm font-light text-[#CBD5E1] leading-relaxed mb-6"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Real-world data projects spanning executive Power BI dashboards, relational MySQL query models, advanced Excel decision matrices, and Python AI platforms.
              </p>
            </div>

            <div className="pt-6 border-t border-[#1E293B] flex items-center justify-between text-[10px] font-mono text-[#94A3B8]">
              <span>{projects.length} FLAGSHIP PROJECTS</span>
              <span className="text-[#D4AF37]">&bull; SCROLL TO EXPLORE &rarr;</span>
            </div>
          </div>

          {/* Project Cards in Horizontal Track */}
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative flex w-[88vw] sm:w-[72vw] lg:w-[54vw] xl:w-[48vw] shrink-0 flex-col justify-between rounded-2xl border border-[#1E293B] bg-[#0D1527] p-6 sm:p-8 lg:p-9 shadow-[0_25px_60px_rgba(0,0,0,0.95)] overflow-hidden transition-all duration-500 hover:border-[#D4AF37]/80 hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]"
            >
              {/* Top Gold Horizon Accent Flare */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Big Background Number */}
              <span
                className="absolute -bottom-6 -right-2 text-8xl sm:text-9xl font-bold text-white/[0.03] select-none pointer-events-none leading-none"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {project.number}
              </span>

              {/* Card Header: Index & Category */}
              <div className="relative z-10 flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono font-bold text-[#D4AF37]">
                    {project.number} //
                  </span>
                  <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#94A3B8]">
                    {project.category}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-sm border border-[#1E293B] bg-[#0A0E1A] text-[#F7E7C4]">
                  {project.year}
                </span>
              </div>

              {/* Title & Narrative */}
              <div className="relative z-10 mb-3">
                <h4
                  className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1 group-hover:text-[#F7E7C4] transition-colors uppercase leading-tight"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {project.title}
                </h4>
                <p className="text-xs sm:text-[13px] font-medium text-[#D4AF37] mb-2 leading-snug">
                  {project.subtitle}
                </p>
                <p
                  className="text-xs sm:text-[13px] font-light text-[#CBD5E1] leading-relaxed line-clamp-3 sm:line-clamp-none max-w-2xl"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {project.objective}
                </p>
              </div>

              {/* Project Image Preview (Clickable for Modal Lightbox) */}
              <div
                onClick={() =>
                  setSelectedImage({
                    src: project.image,
                    title: project.title,
                    badge: project.imageBadge,
                  })
                }
                className="relative z-10 mb-3 w-full rounded-xl overflow-hidden border border-[#1E293B] aspect-[16/9] max-h-48 sm:max-h-52 bg-[#060913] cursor-pointer group/img"
              >
                <img
                  src={project.image}
                  alt={`${project.title} dashboard preview`}
                  loading="lazy"
                  className="w-full h-full object-cover filter contrast-[1.03] group-hover/img:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 text-[9.5px] font-mono tracking-widest text-[#F7E7C4] uppercase bg-black/85 px-2.5 py-0.5 rounded-sm border border-[#334155] backdrop-blur-sm">
                  {project.imageBadge} &bull; Click to Inspect
                </span>
              </div>

              {/* Architecture Key Metrics Grid */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-2 my-2 pt-3 border-t border-[#1E293B]">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-2 rounded-md border border-[#1E293B] bg-[#0A0E1A] flex flex-col justify-between"
                  >
                    <span className="text-[9px] font-mono tracking-wider text-[#64748B] uppercase">
                      {m.label}
                    </span>
                    <span className="text-[10.5px] font-mono font-medium text-[#F7E7C4] truncate mt-0.5">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Card Footer: Tech Stack Pills & Action Button */}
              <div className="relative z-10 pt-3 border-t border-[#1E293B] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5 max-w-md">
                  {project.toolsUsed.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-[9.5px] font-mono tracking-wider uppercase rounded-sm border border-[#1E293B] bg-[#0A0E1A] text-[#CBD5E1] group-hover:border-[#D4AF37]/40 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                  {project.toolsUsed.length > 4 && (
                    <span className="px-2 py-1 text-[9.5px] font-mono text-[#64748B]">
                      +{project.toolsUsed.length - 4} MORE
                    </span>
                  )}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2 rounded-full border border-[#334155] bg-[#0A0E1A] hover:border-[#D4AF37] hover:bg-[#D4AF37] text-white hover:text-black text-[10.5px] font-medium tracking-[0.18em] uppercase transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.12)] ml-auto"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span>VIEW REPOSITORY</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>
          ))}

          <span aria-hidden="true" className="w-8 shrink-0" />
        </div>
      </div>

      {/* Lightbox Screenshot Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full rounded-xl border border-[#334155] bg-[#0A0E1A] p-4 shadow-2xl overflow-hidden cursor-default"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#1E293B]">
                <div>
                  <h4
                    className="text-lg font-bold text-white uppercase"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {selectedImage.title}
                  </h4>
                  <span className="text-xs font-mono text-[#D4AF37]">
                    {selectedImage.badge}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="px-3 py-1 rounded-full border border-[#334155] bg-[#0D1527] text-xs font-mono text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  Close [✕]
                </button>
              </div>

              {/* Full Resolution Image */}
              <div className="max-h-[78vh] overflow-auto rounded-lg">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
