import React from 'react';

export interface EducationEntry {
  id: string;
  tag: string;
  institution: string;
  qualification: string;
  location: string;
  timeline: string;
  resultBadge?: string;
  details: { label: string; value: string }[];
  description: string;
  isCurrent?: boolean;
}

const educationData: EducationEntry[] = [
  {
    id: 'it-vedant',
    tag: 'Current Training',
    institution: 'IT Vedant',
    qualification: 'Data Analytics & Data Science with Gen AI',
    location: 'Chennai, Tamil Nadu, India',
    timeline: 'Present',
    isCurrent: true,
    resultBadge: 'Currently Studying',
    details: [
      { label: 'STATUS', value: 'Active Student' },
      { label: 'SPECIALIZATION', value: 'Data Analytics & Business Intelligence' },
      { label: 'CORE TOOLSET', value: 'Power BI, SQL, Excel, Python' },
    ],
    description:
      'Currently developing practical skills in relational database querying (SQL), executive dashboard creation (Power BI & Excel), data modeling with DAX, and automated data processing with Python.',
  },
  {
    id: 'bsc-degree',
    tag: "Bachelor's Degree",
    institution: 'Pavendar Bharathidasan College of Arts & Science',
    qualification: 'B.Sc. in Hotel Management',
    location: 'Mathur, Pudukkottai District, Tamil Nadu',
    timeline: 'April 2021',
    resultBadge: 'Degree Completed',
    details: [
      { label: 'UNIVERSITY', value: 'Bharathidasan University' },
      { label: 'CONVOCATION', value: 'April 2021' },
      { label: 'DEGREE', value: 'B.Sc. in Hotel Management' },
    ],
    description:
      'Completed a Bachelor of Science degree in Hotel Management, developing structured discipline in hospitality operations, team coordination, and service management.',
  },
  {
    id: 'class-12',
    tag: 'Higher Secondary Course',
    institution: 'Government Higher Secondary School, Avoor',
    qualification: 'Class 12 (HSC)',
    location: 'Avoor, Tamil Nadu, India',
    timeline: 'March 2018',
    resultBadge: 'State Board',
    details: [
      { label: 'MEDIUM', value: 'Tamil' },
      { label: 'EXAMINATION', value: 'State Board - March 2018' },
      { label: 'STATUS', value: 'Completed' },
    ],
    description:
      'Completed Higher Secondary education with core foundational studies in state board curriculum, developing structured study habits, mathematical foundations, and team collaboration.',
  },
  {
    id: 'class-10',
    tag: 'Secondary School',
    institution: 'Government Higher Secondary School, Avoor',
    qualification: 'Class 10 (SSLC)',
    location: 'Avoor, Tamil Nadu, India',
    timeline: 'March 2016',
    resultBadge: 'State Board',
    details: [
      { label: 'BOARD', value: 'State Board' },
      { label: 'EXAMINATION', value: 'March 2016' },
      { label: 'STATUS', value: 'Completed' },
    ],
    description:
      'Completed Secondary School Leaving Certificate (SSLC) under State Board curriculum with solid performance across mathematics and sciences.',
  },
];

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="relative w-full bg-[#0A0E1A] text-[#F8FAFC] py-20 lg:py-28 overflow-hidden scroll-mt-20 border-t border-[#1E293B]"
    >
      <div className="container-x relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center space-x-3 mb-3">
            <span
              className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              04 / Education &amp; Foundations
            </span>
            <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
          </div>

          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase leading-tight"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Academic Foundation &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F1F5F9] to-[#D4AF37]">
              Continuous Learning
            </span>
          </h2>
          <p
            className="text-xs sm:text-sm text-[#94A3B8] font-light max-w-2xl mt-3 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Academic background in hotel management alongside focused technical data analytics training.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative w-full">
          {/* Vertical Track Line */}
          <div className="absolute left-[15px] md:left-[160px] top-4 bottom-4 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#1E293B] to-transparent" />

          <div className="space-y-10 sm:space-y-12">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Desktop Timeline Info (Left) */}
                <div className="hidden md:block w-[160px] shrink-0 pr-8 pt-1 text-right">
                  <span className="text-xs font-mono font-bold text-white block">
                    {edu.timeline}
                  </span>
                  <span className="text-[10px] font-mono text-[#94A3B8] uppercase tracking-wider block mt-1">
                    {edu.tag}
                  </span>
                </div>

                {/* Node Dot */}
                <div className="absolute left-[15px] md:left-[160px] top-2 -translate-x-1/2 flex items-center justify-center">
                  <div
                    className={`size-3.5 rounded-full transition-all duration-300 ${
                      edu.isCurrent
                        ? 'bg-[#D4AF37] ring-4 ring-[#D4AF37]/30 shadow-[0_0_12px_#D4AF37]'
                        : 'bg-[#0A0E1A] border-2 border-[#D4AF37] group-hover:bg-[#D4AF37]'
                    }`}
                  />
                </div>

                {/* Content Box (Right) */}
                <div className="ml-10 md:ml-10 pl-2 flex-1 w-full">
                  {/* Mobile Timeline Tag */}
                  <div className="md:hidden flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-[#D4AF37]">
                      {edu.timeline}
                    </span>
                    <span className="text-[10px] font-mono text-[#94A3B8] uppercase">
                      &bull; {edu.tag}
                    </span>
                  </div>

                  <div className="relative rounded-xl border border-[#1E293B] bg-[#0D1527] p-6 sm:p-8 shadow-md hover:border-[#334155] transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div>
                        <h3
                          className="text-xl sm:text-2xl font-bold text-white uppercase tracking-wide leading-snug"
                          style={{ fontFamily: "'Cinzel', serif" }}
                        >
                          {edu.qualification}
                        </h3>
                      </div>

                      {edu.resultBadge && (
                        <span
                          className={`self-start sm:self-auto text-[10.5px] font-mono tracking-wider uppercase px-3 py-1 rounded-full border ${
                            edu.isCurrent
                              ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#D4AF37] font-semibold'
                              : 'border-[#334155] bg-[#0A0E1A] text-[#CBD5E1]'
                          }`}
                        >
                          {edu.resultBadge}
                        </span>
                      )}
                    </div>

                    {/* Institution & Location */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#94A3B8] mb-4">
                      <span className="font-medium text-white">{edu.institution}</span>
                      <span className="text-[#64748B]">&bull;</span>
                      <span className="font-mono text-[11px] text-[#94A3B8]">{edu.location}</span>
                    </div>

                    {/* Description */}
                    <p
                      className="text-xs sm:text-[13.5px] font-light text-[#CBD5E1] leading-relaxed mb-6"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {edu.description}
                    </p>

                    {/* Metric Chips */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4 border-t border-[#1E293B]">
                      {edu.details.map((d) => (
                        <div
                          key={d.label}
                          className="p-2.5 rounded-md bg-[#0A0E1A] border border-[#1E293B] flex flex-col justify-between"
                        >
                          <span className="text-[9px] font-mono tracking-wider text-[#64748B] uppercase">
                            {d.label}
                          </span>
                          <span className="text-[11px] font-mono text-white font-medium truncate mt-0.5">
                            {d.value}
                          </span>
                        </div>
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

export default EducationSection;
