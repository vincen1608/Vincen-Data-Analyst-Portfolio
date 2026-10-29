import React from 'react';
import { motion } from 'framer-motion';

export interface FeaturedSkill {
  name: string;
  role: string;
  badge: string;
  description: string;
  highlights: string[];
  icon: React.ReactNode;
}

const flagshipSkills: FeaturedSkill[] = [
  {
    name: 'Power BI',
    role: 'Business Intelligence & Dashboards',
    badge: 'Decision Support',
    description:
      'Designing executive decision-support dashboards, interactive KPI models, and star-schema dimensional architectures for operational visibility and strategic decision-making.',
    highlights: [
      'DAX Measures & Calculations',
      'Power Query ETL & Modeling',
      'Star Schema Relational Models',
      'Interactive Slicers & Tooltips',
      'Executive KPI Dashboards',
      'Operational Metric Reports',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-6 text-[#D4AF37]" aria-hidden="true">
        <rect x="3" y="13" width="4" height="8" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="10" y="8" width="4" height="13" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <rect x="17" y="3" width="4" height="18" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 10L11 5L18 8" stroke="#F7E7C4" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    name: 'SQL',
    role: 'Relational Database Querying',
    badge: 'Structured Query',
    description:
      'Extracting, querying, normalizing, and aggregating multi-table relational datasets with MySQL, complex multi-table joins, Common Table Expressions (CTEs), and window functions.',
    highlights: [
      'MySQL Relational Databases',
      'Complex Multi-Table Joins',
      'Window Functions (ROW_NUMBER, RANK)',
      'Common Table Expressions (CTEs)',
      'Subqueries & Aggregations',
      'Query Optimization & Indexing',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-6 text-[#D4AF37]" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="8" ry="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 5V12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12V5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4 12V19C4 20.66 7.58 22 12 22C16.42 22 20 20.66 20 19V12" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 9V14M9 11.5H15" stroke="#F7E7C4" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Microsoft Excel',
    role: 'Spreadsheet Analytics & Modeling',
    badge: 'Analytical Modeling',
    description:
      'Building automated workbooks, dynamic PivotTables, interactive slicers, Power Pivot data models, conditional formatting, and rapid operational decision-support summaries.',
    highlights: [
      'Advanced Formulas (XLOOKUP, INDEX/MATCH)',
      'Dynamic PivotTables & Pivot Charts',
      'Power Pivot & Data Relationships',
      'Interactive Slicers & Timelines',
      'Conditional Formatting & Visual KPIs',
      'Executive Summary Reports',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-6 text-[#D4AF37]" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 9H21M3 15H21M9 3V21M15 3V21" stroke="currentColor" strokeWidth="1.4" opacity="0.45" />
        <path d="M6 6L18 18M18 6L6 18" stroke="#F7E7C4" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
      </svg>
    ),
  },
  {
    name: 'Python',
    role: 'Exploratory Analytics & Automation',
    badge: 'Analytics Engine',
    description:
      'Writing Python analytics scripts for exploratory data analysis (EDA), dataset health scoring, statistical anomaly detection, and building interactive Streamlit applications.',
    highlights: [
      'Exploratory Data Analysis (EDA)',
      'Data Cleansing & Transformation',
      'Statistical Profiling & Anomalies',
      'Streamlit Application Framework',
      'Pandas & NumPy Data Structures',
      'Automated Insight Generation',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="size-6 text-[#D4AF37]" aria-hidden="true">
        <path
          d="M16 18L22 12L16 6M8 6L2 12L8 18"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M14 4L10 20" stroke="#F7E7C4" strokeWidth="1.6" strokeLinecap="round" opacity="0.8" />
      </svg>
    ),
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-full bg-[#0A0E1A] text-[#F8FAFC] py-20 lg:py-28 overflow-hidden scroll-mt-20 border-t border-[#1E293B]"
    >
      <div className="container-x relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                02 / Technical Skills
              </span>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase leading-tight"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Core Data Analytics{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F1F5F9] to-[#D4AF37]">
                Competencies
              </span>
            </h2>
          </div>

          <p
            className="text-xs sm:text-sm text-[#94A3B8] font-light max-w-md leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Four foundational technology pillars focused on turning raw relational and operational datasets into
            reproducible, actionable business intelligence. DAX and Power Query are integrated directly within Power BI.
          </p>
        </div>

        {/* Flagship Skills Grid: 4 Standalone Cards in Balanced Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {flagshipSkills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="relative rounded-xl border border-[#1E293B] bg-[#0D1527] p-7 sm:p-8 shadow-md hover:border-[#D4AF37]/80 hover:shadow-[0_12px_35px_rgba(212,175,55,0.1)] transition-all duration-300 flex flex-col justify-between group overflow-hidden"
            >
              {/* Top Accent Horizon Line */}
              <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-lg border border-[#1E293B] bg-[#0A0E1A] group-hover:border-[#D4AF37]/60 transition-colors">
                    {skill.icon}
                  </div>
                  <span className="text-[10.5px] font-mono px-2.5 py-1 rounded-sm border border-[#1E293B] bg-[#0A0E1A] text-[#D4AF37] uppercase tracking-wider">
                    {skill.badge}
                  </span>
                </div>

                <h3
                  className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide group-hover:text-[#F7E7C4] transition-colors mb-1"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {skill.name}
                </h3>
                <span className="text-xs font-mono text-[#D4AF37] block mb-3.5 font-medium">
                  {skill.role}
                </span>

                <p
                  className="text-xs sm:text-[13px] text-[#CBD5E1] font-light leading-relaxed mb-6"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {skill.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1E293B]/80">
                <span className="block text-[9.5px] font-mono tracking-widest uppercase text-[#64748B] mb-2.5">
                  // Core Applied Capabilities
                </span>
                <div className="flex flex-wrap gap-2">
                  {skill.highlights.map((h) => {
                    const isFeatured =
                      h.includes('DAX') ||
                      h.includes('Power Query') ||
                      h.includes('MySQL') ||
                      h.includes('PivotTables') ||
                      h.includes('Streamlit');

                    return (
                      <span
                        key={h}
                        className={`text-[10px] font-mono px-2.5 py-1 rounded-sm border transition-colors ${
                          isFeatured
                            ? 'border-[#D4AF37]/50 bg-[#161F36] text-[#F7E7C4] font-medium'
                            : 'border-[#1E293B] bg-[#0A0E1A] text-[#CBD5E1]'
                        }`}
                      >
                        {h}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
