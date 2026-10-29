import React from 'react';

export interface HobbyCard {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

const hobbies: HobbyCard[] = [
  {
    id: 'ai-exploration',
    number: '01',
    title: 'AI Exploration',
    category: 'CURIOSITY & TOOLS',
    description:
      'Exploring generative AI tools and experimentation with prompt modeling to discover practical data application utilities.',
    image: '/images/hobby-ai-exploration.jpg',
  },
  {
    id: 'data-discovery',
    number: '02',
    title: 'Data Discovery',
    category: 'PATTERNS & INSIGHTS',
    description:
      'Exploring public datasets, discovering hidden correlation patterns, and testing statistical distributions.',
    image: '/images/hobby-data-discovery.jpg',
  },
  {
    id: 'mobile-photography',
    number: '03',
    title: 'Mobile Photography & Editing',
    category: 'VISUAL PLAY & COLOR',
    description:
      'Capturing perspectives with mobile photography and testing color adjustments, composition, and visual tone.',
    image: '/images/hobby-mobile-photography.jpg',
  },
  {
    id: 'simple-drawings',
    number: '04',
    title: 'Simple Drawings',
    category: 'MINIMAL SKETCHES',
    description:
      'Sketching simple designs and wireframes as a creative outlet for brainstorming visual ideas and layouts.',
    image: '/images/hobby-simple-drawings.jpg',
  },
  {
    id: 'badminton',
    number: '05',
    title: 'Badminton',
    category: 'FOCUS & AGILITY',
    description:
      'Playing recreational badminton to stay active, sharpen fast reflexes, and enjoy friendly court competition.',
    image: '/images/hobby-badminton.jpg',
  },
  {
    id: 'cricket',
    number: '06',
    title: 'Cricket',
    category: 'CAMARADERIE & SPORT',
    description:
      'Enjoying cricket for team strategy, tracking match statistics, and following competitive sport dynamics.',
    image: '/images/hobby-cricket.jpg',
  },
];

export const HobbiesSection: React.FC = () => {
  return (
    <section
      id="beyond-the-data"
      className="relative w-full bg-[#0A0E1A] text-[#F8FAFC] py-20 lg:py-28 overflow-hidden scroll-mt-20 border-t border-[#1E293B]"
    >
      <div className="container-x relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                08 / Beyond the Data
              </span>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase leading-tight"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Curiosity &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F1F5F9] to-[#D4AF37]">
                Personal Perspectives
              </span>
            </h2>
          </div>

          <p
            className="text-xs sm:text-sm text-[#94A3B8] font-light max-w-md leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Creative pursuits, sports, and casual exploration that keep analytical thinking fresh and perspective balanced.
          </p>
        </div>

        {/* 6 Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hobbies.map((hobby) => (
            <div
              key={hobby.id}
              className="rounded-xl border border-[#1E293B] bg-[#0D1527] overflow-hidden flex flex-col justify-between hover:border-[#334155] transition-all duration-300 shadow-md group"
            >
              <div className="relative w-full aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={hobby.image}
                  alt={hobby.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter contrast-[1.04] group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1527] via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-3 left-3 text-[10px] font-mono tracking-widest text-white bg-[#0A0E1A]/85 px-2 py-0.5 rounded-sm border border-[#1E293B]">
                  {hobby.number} // {hobby.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-xl font-bold text-white uppercase tracking-wide leading-none mb-2.5"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {hobby.title}
                  </h3>
                  <p
                    className="text-xs text-[#94A3B8] font-light leading-relaxed"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {hobby.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
