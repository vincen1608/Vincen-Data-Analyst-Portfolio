import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setFormError('Please fill in your name, email, and message before sending.');
      return;
    }

    const emailPattern = /^[^s@]+@[^s@]+.[^s@]+$/;
    if (!emailPattern.test(email)) {
      setFormError('Please provide a valid email address.');
      return;
    }

    setFormError(null);
    setSent(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setFormError(null);
    setSent(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('jasvince20011@gmail.com');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = 'mailto:jasvince20011@gmail.com';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      aria-labelledby="contact-title"
      className="relative w-full bg-[#060913] text-[#F8FAFC] pt-20 pb-12 overflow-hidden scroll-mt-20 border-t border-[#1E293B]"
    >
      <div className="container-x relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span
                className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D4AF37]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                07 / Let&apos;s Connect
              </span>
              <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37] to-transparent" />
            </div>

            <h2
              id="contact-title"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white uppercase leading-tight"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Get in Touch with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F1F5F9] to-[#D4AF37]">
                Vincen M
              </span>
            </h2>
          </div>

          <p
            className="text-xs sm:text-sm text-[#94A3B8] font-light max-w-md leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Open to entry-level Data Analyst, Junior Business Intelligence, and Data Analytics internship roles.
            Reach out directly or send a message below.
          </p>
        </div>

        {/* Split Grid: Left Channels + Right Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16">
          {/* Left Column: Direct Channels (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Email Banner Card */}
            <div className="p-6 rounded-xl border border-[#1E293B] bg-[#0A0E1A] shadow-md">
              <span className="text-[10px] font-mono tracking-widest text-[#64748B] uppercase block mb-1">
                Direct Email Address
              </span>
              <a
                href="mailto:jasvince20011@gmail.com"
                className="text-base sm:text-lg font-mono text-white hover:text-[#D4AF37] transition-colors block mb-4 font-semibold break-all"
              >
                jasvince20011@gmail.com
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#334155] bg-[#0D1527] text-xs font-mono tracking-wider uppercase text-white hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all cursor-pointer"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.span
                      key="copied"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="inline-flex items-center gap-1.5 text-[#10B981]"
                    >
                      <span>✓</span>
                      <span>Email Copied to Clipboard</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      className="inline-flex items-center gap-1.5 text-inherit"
                    >
                      <span>📋</span>
                      <span>Copy Email Address</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>

            {/* Profiles Links */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#64748B] block">
                // Official Profiles
              </span>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/vincen-m-bb6429217"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-[#1E293B] bg-[#0A0E1A] hover:border-[#334155] hover:bg-[#0D1527] text-white hover:text-[#D4AF37] transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono text-[#D4AF37] font-bold px-2 py-1 rounded-sm bg-[#060913] border border-[#1E293B]">
                    in
                  </span>
                  <div>
                    <span className="text-xs font-mono font-medium block">LinkedIn Profile</span>
                    <span className="text-[10px] font-mono text-[#64748B]">vincen-m-bb6429217</span>
                  </div>
                </div>
                <span className="text-xs text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/vincen1608"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 rounded-xl border border-[#1E293B] bg-[#0A0E1A] hover:border-[#334155] hover:bg-[#0D1527] text-white hover:text-[#D4AF37] transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono text-[#D4AF37] font-bold px-2 py-1 rounded-sm bg-[#060913] border border-[#1E293B]">
                    gh
                  </span>
                  <div>
                    <span className="text-xs font-mono font-medium block">GitHub Profile</span>
                    <span className="text-[10px] font-mono text-[#64748B]">vincen1608</span>
                  </div>
                </div>
                <span className="text-xs text-[#D4AF37] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                  ↗
                </span>
              </a>

              {/* Download Resume Shortcut */}
              <a
                href="/resume/Vincen_M_ATS_Resume.pdf"
                download="Vincen_M_ATS_Resume.pdf"
                className="flex items-center justify-between p-4 rounded-xl border border-[#1E293B] bg-[#0A0E1A] hover:border-[#334155] hover:bg-[#0D1527] text-white hover:text-[#D4AF37] transition-all group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-mono text-[#D4AF37] font-bold px-2 py-1 rounded-sm bg-[#060913] border border-[#1E293B]">
                    pdf
                  </span>
                  <div>
                    <span className="text-xs font-mono font-medium block">Download ATS Resume</span>
                    <span className="text-[10px] font-mono text-[#64748B]">Vincen_M_ATS_Resume.pdf</span>
                  </div>
                </div>
                <span className="text-xs text-[#D4AF37] group-hover:translate-y-0.5 transition-transform">
                  ↓
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form (7 Cols) */}
          <div className="lg:col-span-7 relative rounded-2xl border border-[#1E293B] bg-[#0A0E1A] p-6 sm:p-8 lg:p-10 shadow-xl overflow-hidden">
            {sent ? (
              <div className="py-12 text-center space-y-4">
                <div className="inline-flex items-center justify-center size-12 rounded-full border border-[#D4AF37] text-[#D4AF37] text-lg shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                  ✓
                </div>
                <h3
                  className="text-2xl sm:text-3xl text-white font-bold uppercase"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  Message Sent Successfully
                </h3>
                <p
                  className="text-xs sm:text-sm text-[#94A3B8] font-light max-w-md mx-auto leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Thank you for reaching out! I will review your message and get back to you promptly.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-5 py-2.5 rounded-full border border-[#334155] bg-[#0D1527] text-xs font-mono uppercase text-white hover:border-[#D4AF37] transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                  <a
                    href="mailto:jasvince20011@gmail.com"
                    className="text-xs font-mono text-[#D4AF37] hover:underline"
                  >
                    Open Mail App ↗
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {formError && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-md border border-red-500/50 bg-red-950/30 text-red-200 text-xs font-mono flex items-center gap-2"
                  >
                    <span className="text-red-400 font-bold">!</span>
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Jane Doe"
                      className="w-full bg-[#060913] border border-[#1E293B] focus:border-[#D4AF37] text-xs text-white placeholder-[#64748B] px-4 py-3 outline-none rounded-md transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full bg-[#060913] border border-[#1E293B] focus:border-[#D4AF37] text-xs text-white placeholder-[#64748B] px-4 py-3 outline-none rounded-md transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                    Subject / Role Title
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Data Analyst Opportunity"
                    className="w-full bg-[#060913] border border-[#1E293B] focus:border-[#D4AF37] text-xs text-white placeholder-[#64748B] px-4 py-3 outline-none rounded-md transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono tracking-wider uppercase text-[#94A3B8] mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share role details, analytical requirements, or interview invitation..."
                    className="w-full bg-[#060913] border border-[#1E293B] focus:border-[#D4AF37] text-xs text-white placeholder-[#64748B] p-4 outline-none rounded-md transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#D4AF37] text-black font-semibold text-xs tracking-[0.18em] uppercase transition-all duration-300 hover:bg-[#F7E7C4] cursor-pointer"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Send Message &rarr;
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#64748B]">
          <div>
            <span>© {new Date().getFullYear()} Vincen M &bull; Aspiring Data Analyst</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/vincen1608"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors"
            >
              GitHub
            </a>
            <span>&bull;</span>
            <a
              href="https://www.linkedin.com/in/vincen-m-bb6429217"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D4AF37] transition-colors"
            >
              LinkedIn
            </a>
            <span>&bull;</span>
            <a href="mailto:jasvince20011@gmail.com" className="hover:text-[#D4AF37] transition-colors">
              Email
            </a>
            <span>&bull;</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
