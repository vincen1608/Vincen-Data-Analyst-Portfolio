import React from 'react';

export const ResumeSection: React.FC = () => {
  return (
    <section
      id="resume"
      className="relative w-full bg-[#0A0E1A] text-[#F8FAFC] py-20 lg:py-28 overflow-hidden scroll-mt-20 border-t border-[#1E293B]"
    >
      <div className="container-x max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                06 / Curriculum Vitae
              </span>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase leading-tight"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Resume &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F1F5F9] to-[#D4AF37]">
                Credentials
              </span>
            </h2>
          </div>

          {/* Download Buttons in Header */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/resume/Vincen_M_ATS_Resume.pdf"
              download="Vincen_M_ATS_Resume.pdf"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#D4AF37] text-black font-semibold text-xs tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[#F7E7C4] cursor-pointer"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>Download PDF</span>
              <span className="text-sm font-bold">↓</span>
            </a>

            <a
              href="/resume/Vincen_M_ATS_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#334155] bg-[#0D1527] text-white hover:border-[#D4AF37] hover:text-[#D4AF37] text-xs font-medium tracking-[0.16em] uppercase transition-all duration-300 cursor-pointer"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>View In Browser</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>

        {/* ATS Resume Preview Container */}
        <div className="relative rounded-2xl border border-[#1E293B] bg-[#0D1527] p-6 sm:p-10 lg:p-12 shadow-xl overflow-hidden">
          {/* Header of Resume */}
          <div className="border-b border-[#1E293B] pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3
                className="text-2xl sm:text-3xl font-bold uppercase text-white tracking-wider"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Vincen M
              </h3>
              <p className="text-sm font-mono text-[#D4AF37] tracking-widest uppercase mt-0.5">
                Aspiring Data Analyst
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-mono text-[#94A3B8]">
              <span className="flex items-center gap-1">
                <span className="text-[#D4AF37]">📍</span> Chennai, India
              </span>
              <span>&bull;</span>
              <a
                href="mailto:jasvince20011@gmail.com"
                className="hover:text-[#D4AF37] transition-colors flex items-center gap-1"
              >
                <span className="text-[#D4AF37]">✉</span> jasvince20011@gmail.com
              </a>
              <span>&bull;</span>
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
            </div>
          </div>

          {/* Section 1: Executive Summary */}
          <div className="mb-8">
            <h4 className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#D4AF37] mb-2">
              // Professional Summary
            </h4>
            <p
              className="text-xs sm:text-sm text-[#CBD5E1] font-light leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Aspiring Data Analyst based in Chennai, India, currently studying Data Analytics &amp; Data Science at IT Vedant.
              Holding a B.Sc. in Hotel Management and professional experience as a Restaurant Captain, combining operational discipline
              with practical skills in Power BI, SQL, Advanced Excel, and Python. Passionate about transforming business data into
              actionable insights through relevant analytics projects.
            </p>
          </div>

          {/* Section 2: Core Technical Competencies */}
          <div className="mb-8">
            <h4 className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#D4AF37] mb-3">
              // Technical Skill Matrix
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-md bg-[#0A0E1A] border border-[#1E293B]">
                <span className="font-mono text-white block font-semibold mb-1">
                  Business Intelligence &amp; Reporting
                </span>
                <span className="text-[#94A3B8] leading-relaxed block">
                  Power BI Desktop, DAX Measures, Power Query (ETL), Star Schema Modeling, Interactive Slicers, KPI Cards
                </span>
              </div>
              <div className="p-3 rounded-md bg-[#0A0E1A] border border-[#1E293B]">
                <span className="font-mono text-white block font-semibold mb-1">
                  Databases &amp; Querying
                </span>
                <span className="text-[#94A3B8] leading-relaxed block">
                  SQL, MySQL, Multi-Table Joins, CTEs, Window Functions, Group By Aggregations, Performance Tuning
                </span>
              </div>
              <div className="p-3 rounded-md bg-[#0A0E1A] border border-[#1E293B]">
                <span className="font-mono text-white block font-semibold mb-1">
                  Spreadsheet Analytics
                </span>
                <span className="text-[#94A3B8] leading-relaxed block">
                  Microsoft Excel, Dynamic PivotTables &amp; Charts, XLOOKUP / INDEX-MATCH, Conditional Formatting, What-If Analysis
                </span>
              </div>
              <div className="p-3 rounded-md bg-[#0A0E1A] border border-[#1E293B]">
                <span className="font-mono text-white block font-semibold mb-1">
                  Programming &amp; Data Science
                </span>
                <span className="text-[#94A3B8] leading-relaxed block">
                  Python, Pandas, NumPy, Exploratory Data Analysis (EDA), Statistical Profiling, Anomaly Detection
                </span>
              </div>
              <div className="p-3 rounded-md bg-[#0A0E1A] border border-[#1E293B]">
                <span className="font-mono text-white block font-semibold mb-1">
                  Applied AI &amp; Web Apps
                </span>
                <span className="text-[#94A3B8] leading-relaxed block">
                  Streamlit Application Development, BUVIJAG AI Architecture, Automated Chart Recommendations
                </span>
              </div>
              <div className="p-3 rounded-md bg-[#0A0E1A] border border-[#1E293B]">
                <span className="font-mono text-white block font-semibold mb-1">
                  Tools &amp; Workflow
                </span>
                <span className="text-[#94A3B8] leading-relaxed block">
                  Git, GitHub Repositories, PDF Reporting, Data Cleansing, Stakeholder Presentation
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Priority Projects Summary */}
          <div className="mb-8">
            <h4 className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#D4AF37] mb-3">
              // Featured Analytical Projects
            </h4>
            <div className="space-y-4">
              <div className="p-4 rounded-md bg-[#0A0E1A] border border-[#1E293B]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <span className="font-bold text-white text-sm">
                    Healthcare Operations &amp; Patient Analytics — Power BI
                  </span>
                  <span className="text-xs font-mono text-[#D4AF37]">2026</span>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Constructed an interactive hospital operations dashboard monitoring bed occupancy rates,
                  emergency department wait times, and clinical throughput across 7,500 admissions.
                </p>
              </div>

              <div className="p-4 rounded-md bg-[#0A0E1A] border border-[#1E293B]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <span className="font-bold text-white text-sm">
                    Brazilian E-Commerce Relational Analysis — SQL (MySQL)
                  </span>
                  <span className="text-xs font-mono text-[#D4AF37]">2025</span>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Queried and analyzed 100,000+ orders capturing $1,585.9M in revenue. Formulated CTEs and window functions
                  to isolate customer cohort retention drop-offs after month 2 and regional logistics transit bottlenecks.
                </p>
              </div>

              <div className="p-4 rounded-md bg-[#0A0E1A] border border-[#1E293B]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <span className="font-bold text-white text-sm">
                    Hotel Booking &amp; Cancellation Dashboard — Microsoft Excel
                  </span>
                  <span className="text-xs font-mono text-[#D4AF37]">2025</span>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Synthesized 14,872 reservations generating $2.3M net revenue into an executive Excel KPI model. Isolated booking channel
                  cancellations and lead-time correlations to recommend tiered cancellation windows.
                </p>
              </div>

              <div className="p-4 rounded-md bg-[#0A0E1A] border border-[#1E293B]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                  <span className="font-bold text-white text-sm">
                    BUVIJAG AI — Applied Data Intelligence Application
                  </span>
                  <span className="text-xs font-mono text-[#D4AF37]">2026</span>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Engineered a Streamlit web application providing automated dataset health scoring, statistical anomaly detection
                  across 29 table variances, and dynamic chart recommendation algorithms.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: Education */}
          <div>
            <h4 className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#D4AF37] mb-3">
              // Education
            </h4>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-md bg-[#0A0E1A] border border-[#1E293B] text-xs">
                <div>
                  <span className="font-semibold text-white block">
                    Data Analytics &amp; Data Science with Gen AI
                  </span>
                  <span className="text-[#64748B]">IT Vedant &bull; Chennai, TN</span>
                </div>
                <span className="font-mono text-[#D4AF37] mt-1 sm:mt-0">Present &bull; Currently Studying</span>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-md bg-[#0A0E1A] border border-[#1E293B] text-xs">
                <div>
                  <span className="font-semibold text-white block">
                    B.Sc. in Hotel Management
                  </span>
                  <span className="text-[#64748B]">
                    Pavendar Bharathidasan College of Arts &amp; Science (Bharathidasan University)
                  </span>
                </div>
                <span className="font-mono text-white mt-1 sm:mt-0 font-medium">
                  April 2021 &bull; Degree Completed
                </span>
              </div>
            </div>
          </div>

          {/* Card Action Banner */}
          <div className="mt-8 pt-6 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs font-mono text-[#94A3B8] text-center sm:text-left">
              Official ATS Resume available in standard PDF format for immediate recruiter review.
            </span>
            <a
              href="/resume/Vincen_M_ATS_Resume.pdf"
              download="Vincen_M_ATS_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#D4AF37] text-black text-xs font-semibold tracking-wider uppercase hover:bg-[#F7E7C4] transition-colors"
            >
              <span>Download ATS Resume (PDF)</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
