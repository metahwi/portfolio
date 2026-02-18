"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Github, Mail, Linkedin, Phone, Globe, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "./components/LanguageProvider";
import Timeline from "./components/Timeline";
import ProjectCard from "./components/ProjectCard";
import AnimatedSection from "./components/AnimatedSection";
import ProjectFilter from "./components/ProjectFilter";
import ScrollProgress from "./components/ScrollProgress";
import FloatingParticles from "./components/FloatingParticles";

function MicrosoftIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="6.5" height="6.5" fill="#F25022" />
      <rect x="8.5" y="1" width="6.5" height="6.5" fill="#7FBA00" />
      <rect x="1" y="8.5" width="6.5" height="6.5" fill="#00A4EF" />
      <rect x="8.5" y="8.5" width="6.5" height="6.5" fill="#FFB900" />
    </svg>
  );
}

const sections = ["about", "experience", "projects", "credentials", "contact"] as const;
type SectionId = (typeof sections)[number];

export default function Home() {
  const { lang, t, toggle } = useLanguage();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const allLabel = lang === 'ko' ? '전체' : 'All';
  const [activeCategory, setActiveCategory] = useState(allLabel);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => { setActiveCategory(lang === 'ko' ? '전체' : 'All'); }, [lang]);

  const filteredFeatured = activeCategory === allLabel
    ? t.featuredProjects
    : t.featuredProjects.filter((p: any) => p.category === activeCategory);
  const filteredOther = activeCategory === allLabel
    ? t.otherProjects
    : t.otherProjects.filter((p: any) => p.category === activeCategory);

  useEffect(() => {
    const handler = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  // Scroll spy — position-based (most accurate)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // At very bottom → Contact
      if (docHeight - (scrollY + viewportHeight) < 100) {
        setActiveSection("contact");
        return;
      }

      // At very top → About
      if (scrollY < 100) {
        setActiveSection("about");
        return;
      }

      // Find which section's top is closest to 30% of viewport
      const target = scrollY + viewportHeight * 0.3;
      let closest: SectionId = "about";
      let closestDist = Infinity;

      sections.forEach((id) => {
        const el = sectionRefs.current[id];
        if (!el) return;
        const top = el.offsetTop;
        const dist = Math.abs(top - target);
        if (top <= target + 100 && dist < closestDist) {
          closestDist = dist;
          closest = id;
        }
      });

      setActiveSection(closest);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const navKeys: { key: SectionId; label: string }[] = [
    { key: "about", label: t.nav.about },
    { key: "experience", label: t.nav.experience },
    { key: "projects", label: t.nav.projects },
    { key: "credentials", label: t.nav.credentials },
    { key: "contact", label: t.nav.contact },
  ];

  return (
    <div
      className="relative min-h-screen"
      style={{
        background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(20, 184, 166, 0.05), transparent 80%)`,
      }}
    >
      <ScrollProgress />
      <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          {/* Left panel */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div className="relative">
              <FloatingParticles />

              {/* Photo */}
              <div className="w-40 h-40 rounded-full overflow-hidden relative mb-6 ring-2 ring-teal-400/20 shadow-[0_0_40px_rgba(20,184,166,0.08)] hover:ring-[#F1FF5E]/30 hover:shadow-[0_0_40px_rgba(241,255,94,0.1)] transition-all">
                <Image src="/images/profile.jpg" alt="Profile" fill className="object-cover" />
              </div>

              {/* Name + toggle */}
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-4xl font-bold text-white tracking-tight">{t.name}</h1>
                <button
                  onClick={toggle}
                  className="text-xs px-2.5 py-1 rounded-full border border-white/15 text-white/60 hover:text-[#F1FF5E] hover:border-[#F1FF5E]/50 transition-colors"
                >
                  {lang === "ko" ? "EN" : "KR"}
                </button>
              </div>

              {/* Title */}
              <p className="text-lg text-white/80 font-medium">{t.tagline}</p>
              <p className="mt-1 text-sm text-white/35">{t.subtitle}</p>

              {/* Nav */}
              <nav className="mt-12 hidden lg:block">
                <ul className="space-y-4">
                  {navKeys.map(({ key, label }) => (
                    <li key={key}>
                      <a
                        href={`#${key}`}
                        className={`group flex items-center gap-3 text-sm transition-colors ${
                          activeSection === key ? "text-white" : "text-white/35 hover:text-white"
                        }`}
                      >
                        <span
                          className={`h-px transition-all ${
                            activeSection === key ? "w-16 bg-teal-400" : "w-8 bg-white/10 group-hover:w-16 group-hover:bg-white"
                          }`}
                        />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Social */}
            <div className="mt-8 flex gap-4">
              <a href="https://github.com/metahwi" target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/jaelee00" target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:metahwi@gmail.com" className="text-white/35 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </header>

          {/* Right content */}
          <main className="pt-24 lg:w-1/2 lg:py-24">
            {/* About */}
            <section id="about" ref={setRef("about")} className="mb-24 scroll-mt-24">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-white mb-6 lg:hidden">
                {t.nav.about}
              </h2>
              {t.about.map((p: string, i: number) => (
                <AnimatedSection key={i} delay={i * 0.15}>
                  <p className="mb-4 leading-relaxed">{p}</p>
                </AnimatedSection>
              ))}
            </section>

            {/* Experience */}
            <section id="experience" ref={setRef("experience")} className="mb-24 scroll-mt-24">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-white mb-10 lg:hidden">
                {t.nav.experience}
              </h2>
              <Timeline />
            </section>

            {/* Projects */}
            <section id="projects" ref={setRef("projects")} className="mb-24 scroll-mt-24">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-white mb-6 lg:hidden">
                {t.nav.projects}
              </h2>
              <ProjectFilter categories={t.categories} active={activeCategory} onChange={setActiveCategory} />
              <LayoutGroup>
                <AnimatePresence mode="popLayout">
                  {filteredFeatured.length > 0 && (
                    <motion.div layout className="space-y-4" key="featured-section">
                      {filteredFeatured.map((p: any, i: number) => (
                        <motion.div
                          key={p.title}
                          layout
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ProjectCard {...p} featured index={i} />
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                <AnimatePresence mode="popLayout">
                  {filteredOther.length > 0 && (
                    <motion.div layout className="mt-8 grid gap-2" key="other-section">
                      {filteredOther.map((p: any, i: number) => (
                        <motion.div
                          key={p.title}
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2, delay: i * 0.03 }}
                        >
                          <div className="group rounded-lg p-4 hover:bg-[#171717] transition-all border border-transparent hover:border-teal-400/20">
                            <h3 className="text-sm text-white group-hover:text-teal-300 transition-colors">{p.title}</h3>
                            <p className="text-sm mt-1">{p.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                {filteredFeatured.length === 0 && filteredOther.length === 0 && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-white/35 text-sm py-12 text-center"
                  >
                    {lang === 'ko' ? '해당 카테고리의 프로젝트가 없습니다.' : 'No projects in this category.'}
                  </motion.p>
                )}
              </LayoutGroup>
            </section>

            {/* Credentials */}
            <section id="credentials" ref={setRef("credentials")} className="mb-24 scroll-mt-24">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-white mb-8">
                {t.nav.credentials}
              </h2>
              <div className="space-y-3">
                {t.credentials.map((cred: any) => (
                  <div key={cred.code} className="group rounded-2xl p-5 bg-[#171717] border border-white/5 hover:border-teal-400/20 transition-all">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {cred.icon === 'microsoft' && <MicrosoftIcon />}
                          {cred.icon === 'language' && <Globe size={16} className="text-[#F1FF5E]" />}
                          <span className="text-xs font-mono text-[#F1FF5E]">{cred.code}</span>
                        </div>
                        <h3 className="text-sm font-medium text-white">{cred.name}</h3>
                        <p className="text-xs text-white/40 mt-0.5">{cred.issuer}</p>
                      </div>
                      {cred.badgeUrl && (
                        <a href={cred.badgeUrl} target="_blank" className="text-xs text-white/50 hover:text-[#F1FF5E] transition-colors flex items-center gap-1">
                          <ExternalLink size={12} /> Verify
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Contact */}
            <section id="contact" ref={setRef("contact")} className="mb-24 scroll-mt-24">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-white mb-6">
                {t.nav.contact}
              </h2>
              <p className="mb-6 leading-relaxed">{t.contact}</p>
              <div className="space-y-3">
                <a href="mailto:metahwi@gmail.com" className="flex items-center gap-2 text-white/60 hover:text-teal-300 transition-colors">
                  <Mail size={16} /> metahwi@gmail.com
                </a>
                <a href="https://linkedin.com/in/jaelee00" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-teal-300 transition-colors">
                  <Linkedin size={16} /> linkedin.com/in/jaelee00
                </a>
                <a href="https://github.com/metahwi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 hover:text-teal-300 transition-colors">
                  <Github size={16} /> github.com/metahwi
                </a>
                <p className="flex items-center gap-2 text-white/60">
                  <Phone size={16} /> 010-4813-8982
                </p>
              </div>
            </section>

            {/* Footer */}
            <footer className="text-sm text-white/35 pb-16">
              {t.footer}
            </footer>
          </main>
        </div>
      </div>
    </div>
  );
}
