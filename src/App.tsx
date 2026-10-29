import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { registerGsap } from './lib/animations';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ResumeSection } from './components/ResumeSection';
import { HobbiesSection } from './components/HobbiesSection';
import { ContactSection } from './components/ContactSection';

registerGsap();

function App() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 1.2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#060913] text-[#F8FAFC] selection:bg-[#D4AF37] selection:text-black">
      {/* Universal Fixed Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Capabilities Marquee Ribbon */}
        <MarqueeSection />

        {/* About Me Section */}
        <AboutSection />

        {/* Core Skills & Technical Matrix */}
        <SkillsSection />

        {/* Flagship Projects: Healthcare (Power BI), E-Commerce (SQL), Hotel (Excel), BUVIJAG AI (Python) */}
        <ProjectsSection />

        {/* Education & Foundations */}
        <EducationSection />

        {/* Analytical Experience & Milestones */}
        <ExperienceSection />

        {/* ATS Resume Preview & PDF Download */}
        <ResumeSection />

        {/* Beyond the Data / Hobbies */}
        <HobbiesSection />
      </main>

      {/* Contact & Footer */}
      <ContactSection />
    </div>
  );
}

export default App;
