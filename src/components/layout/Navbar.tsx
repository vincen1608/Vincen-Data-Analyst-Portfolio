import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export type NavId =
  | 'home'
  | 'about'
  | 'skills'
  | 'projects'
  | 'education'
  | 'experience'
  | 'resume'
  | 'contact';

interface NavItem {
  id: NavId;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<NavId>('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sectionElements = navItems
        .map(({ id }) => ({ id, el: document.getElementById(id) }))
        .filter((item): item is { id: NavId; el: HTMLElement } => Boolean(item.el));

      const scrollPosition = window.scrollY + 180;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, el } = sectionElements[i];
        if (el.offsetTop <= scrollPosition) {
          setActive(id);
          return;
        }
      }

      if (window.scrollY < 120) {
        setActive('home');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const handleNavClick = (id: NavId) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      if (window.history.pushState) {
        window.history.pushState(null, '', `#${id}`);
      }
    }
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#060913]/94 backdrop-blur-xl border-b border-[#1E293B] shadow-[0_8px_30px_rgba(0,0,0,0.7)] py-3'
          : 'bg-gradient-to-b from-[#060913]/90 via-[#060913]/50 to-transparent py-4 sm:py-5',
      )}
    >
      <div className="container-x flex items-center justify-between">
        {/* Brand Name */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="group flex items-center gap-2.5 text-left"
          aria-label="Vincen M - Back to top"
        >
          <div className="flex flex-col">
            <span
              className="text-base sm:text-lg font-bold tracking-[0.2em] uppercase text-white group-hover:text-[#D4AF37] transition-colors"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Vincen M
            </span>
            <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#94A3B8] group-hover:text-[#D4AF37] transition-colors">
              Aspiring Data Analyst
            </span>
          </div>
          <span className="size-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37] mb-3 ml-0.5" />
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1.5 xl:gap-2 px-3 py-1.5 rounded-full border border-[#1E293B] bg-[#0A0E1A]/85 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
        >
          {navItems.map((item) => {
            const isCurrent = active === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={cn(
                  'relative px-3.5 py-1.5 text-xs font-medium tracking-[0.15em] uppercase rounded-full transition-all duration-200',
                  isCurrent
                    ? 'text-black font-semibold bg-gradient-to-r from-[#F7E7C4] via-[#D4AF37] to-[#C99E5D] shadow-[0_0_12px_rgba(212,175,55,0.35)]'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.04]',
                )}
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Download Resume & Contact CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/resume/Vincen_M_ATS_Resume.pdf"
            download="Vincen_M_ATS_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#334155] bg-[#0F172A]/80 text-[#F1F5F9] hover:border-[#D4AF37] hover:text-[#D4AF37] text-[11px] font-medium tracking-[0.18em] uppercase transition-all duration-300 shadow-sm"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>Resume</span>
            <span className="text-xs text-[#D4AF37]">↓</span>
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37] text-black hover:bg-[#F7E7C4] text-[11px] font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.25)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>Hire Me</span>
            <span className="text-xs">→</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={open ? 'Close Menu' : 'Open Menu'}
          className="flex lg:hidden flex-col items-center justify-center size-10 rounded-full border border-[#334155] bg-[#0F172A] text-white hover:border-[#D4AF37] transition-colors"
        >
          <div className="w-5 flex flex-col items-center justify-center gap-1.5">
            <span
              className={cn(
                'block h-[1.5px] w-full bg-[#D4AF37] transition-transform duration-300',
                open && 'translate-y-2 rotate-45',
              )}
            />
            <span
              className={cn(
                'block h-[1.5px] w-4 bg-white transition-opacity duration-200',
                open && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'block h-[1.5px] w-full bg-[#D4AF37] transition-transform duration-300',
                open && '-translate-y-2 -rotate-45',
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#0A0E1A]/98 border-b border-[#1E293B] backdrop-blur-2xl overflow-hidden shadow-2xl"
          >
            <div className="container-x py-6 flex flex-col space-y-4">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item, index) => {
                  const isCurrent = active === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.id);
                      }}
                      className={cn(
                        'flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium tracking-[0.16em] uppercase transition-colors',
                        isCurrent
                          ? 'bg-[#1E293B] text-[#D4AF37] border-l-2 border-[#D4AF37]'
                          : 'text-[#94A3B8] hover:text-white hover:bg-white/[0.04]',
                      )}
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      <span>{item.label}</span>
                      <span className="text-xs font-mono text-[#64748B]">0{index + 1}</span>
                    </a>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-[#1E293B] flex flex-col sm:flex-row gap-3">
                <a
                  href="/resume/Vincen_M_ATS_Resume.pdf"
                  download="Vincen_M_ATS_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-md border border-[#334155] bg-[#0F172A] text-white text-xs font-medium tracking-[0.18em] uppercase"
                >
                  <span>Download Resume PDF</span>
                  <span>↓</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('contact');
                  }}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-[#D4AF37] text-black text-xs font-semibold tracking-[0.18em] uppercase"
                >
                  <span>Get in Touch</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
