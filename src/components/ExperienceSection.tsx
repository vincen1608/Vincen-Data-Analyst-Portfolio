import React from 'react';

export interface Milestone {
  id: string;
  year: string;
  role: string;
  focusArea: string;
  description: string;
  deliverables: string[];
  keyTools: string[];
}

const experienceMilestones: Milestone[] = [
  {
    id: 'ai-development',
    year: '2026',
    role: 'AI Application Engineering & Data Diagnostics',
    focusArea: 'BUVIJAG AI Platform',
    description:
      'Engineered an automated data diagnostic and exploratory analysis web application. Designed algorithms for data health scoring, statistical anomaly detection, and automated chart recommendations with exportable PDF summaries.',
    deliverables: [
      'Automated dataset health diagnostic score evaluation',
      'Statistical anomaly detection scanning 29+ relational table variance spikes',
      'Context-aware chart recommendation engine mapping column types to visual models',
    ],
    keyTools: ['Python', 'Streamlit', 'Git / GitHub', 'Statistical Algorithms'],
  },
  {
    id: 'bi-dashboards',
    year: '2025 - 2026',
    role: 'Business Intelligence & Executive Modeling',
    focusArea: 'Power BI & Advanced Excel',
    description:
      'Engineered decision support dashboards and KPI reporting suites. Designed star-schema data models, dynamic DAX measures for time intelligence, and automated Excel workbooks with linked PivotTables and interactive slicers.',
    deliverables: [
      'Healthcare Operations & Patient Analytics Power BI dashboard',
      'Advanced Excel Hotel Booking & Cancellation Analysis workbook with dynamic slicers',
      'Calculated DAX measures for growth ratios, occupancy, and triage wait times',
    ],
    keyTools: ['Power BI', 'DAX', 'Power Query', 'Advanced Excel', 'PivotTables'],
  },
  {
    id: 'relational-analytics',
    year: '2025',
    role: 'Relational Database Analytics & Performance',
    focusArea: 'MySQL Transactional Exploration',
    description:
      'Executed multi-table relational analysis across 100,000+ customer transactions in Brazilian e-commerce datasets using MySQL. Modeled customer retention cohorts, revenue streams, and regional logistics transit bottlenecks.',
    deliverables: [
      'Multi-table queries utilizing CTEs, window functions, and aggregations',
      'Customer lifetime retention cohort analysis diagnosing month-2 drop-off curves',
      'Logistics delivery performance profiling isolating regional shipment delays',
    ],
    keyTools: ['SQL', 'MySQL', 'Relational Schemas', 'Window Functions', 'CTEs'],
  },
  {
    id: 'restaurant-captain',
    year: 'Operations',
    role: 'Restaurant Captain',
    focusArea: 'Hospitality Operations & Service Management',
    description:
      'Managed dining room service operations, supervised floor staff, and ensured guest satisfaction in fast-paced hospitality environments. Coordinated inventory usage, team communication, and day-to-day service execution.',
    deliverables: [
      'Supervised shift floor teams and coordinated dining service workflows',
      'Ensured high standards of customer satisfaction and service consistency',
      'Gained direct operational perspective on service pacing and customer interactions',
    ],
    keyTools: ['Team Leadership', 'Floor Operations', 'Customer Service', 'Hospitality Management'],
  },
];

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative w-full bg-[#060913] text-[#F8FAFC] py-20 lg:py-28 overflow-hidden scroll-mt-20 border-t border-[#1E293B]"
    >
      <div className="container-x max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center space-x-3 mb-3">
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              05 / Experience &amp; Milestones
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase leading-tight"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Analytical Journey &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F1F5F9] to-[#D4AF37]">
              Proven Milestones
            </span>
          </h2>
          <p
            className="text-xs sm:text-sm text-[#94A3B8] font-light max-w-2xl mt-3 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Professional background combining hands-on operations as a Restaurant Captain with practical data analytics and applied AI project work.
          </p>
        </div>

        {/* Milestone Route */}
        <div className="relative w-full">
          {/* Vertical Track Line */}
          <div className="absolute left-[15px] md:left-[160px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#1E293B] to-transparent" />

          <div className="space-y-10 sm:space-y-12">
            {experienceMilestones.map((item) => (
              <div
                key={item.id}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Desktop Year (Left) */}
                <div className="hidden md:block w-[160px] shrink-0 pr-8 pt-1 text-right">
                  <span className="text-xs font-mono font-bold text-white block">
                    {item.year}
                  </span>
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mt-1">
                    {item.focusArea}
                  </span>
                </div>

                {/* Node Dot */}
                <div className="absolute left-[15px] md:left-[160px] top-2 -translate-x-1/2 flex items-center justify-center">
                  <div className="size-3.5 rounded-full bg-[#0A0E1A] border-2 border-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:shadow-[0_0_12px_#D4AF37] transition-all duration-300" />
                </div>

                {/* Content Box (Right) */}
                <div className="ml-10 md:ml-10 pl-2 flex-1 w-full">
                  {/* Mobile Year Badge */}
                  <div className="md:hidden flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-[#D4AF37]">
                      {item.year}
                    </span>
                    <span className="text-[10px] font-mono text-[#94A3B8] uppercase">
                      &bull; {item.focusArea}
                    </span>
                  </div>

                  <div className="relative rounded-xl border border-[#1E293B] bg-[#0A0E1A] p-6 sm:p-8 shadow-md hover:border-[#334155] transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h3
                        className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide leading-snug"
                        style={{ fontFamily: "'Cinzel', serif" }}
                      >
                        {item.role}
                      </h3>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-sm border border-[#1E293B] bg-[#0D1527] text-[#CBD5E1] self-start sm:self-auto">
                        {item.focusArea}
                      </span>
                    </div>

                    <p
                      className="text-xs sm:text-[13.5px] font-light text-[#CBD5E1] leading-relaxed mb-5"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {item.description}
                    </p>

                    {/* Deliverables List */}
                    <div className="mb-5">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-[#94A3B8] block mb-2">
                        Key Deliverables:
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#94A3B8]">
                        {item.deliverables.map((del, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#D4AF37] font-bold mt-0.5">•</span>
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Pills */}
                    <div className="pt-4 border-t border-[#1E293B] flex flex-wrap gap-1.5">
                      {item.keyTools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 text-[9.5px] font-mono uppercase bg-[#0D1527] border border-[#1E293B] text-[#E2E8F0] rounded-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
