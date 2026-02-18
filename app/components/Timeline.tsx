"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

function TimelineItem({ item, index }: { item: { period: string; company: string; role: string; description: string; tags: string[] }; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group"
    >
      <p className="text-sm text-white/35 mb-1">{item.period}</p>
      <h3 className="text-white font-medium group-hover:text-teal-300 transition-colors">
        {item.company} <span className="text-white/60 font-normal">— {item.role}</span>
      </h3>
      <p className="mt-2 text-sm leading-relaxed">{item.description}</p>
      <div className="flex flex-wrap gap-2 mt-3">
        {item.tags.map((tag) => (
          <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-teal-400/10 text-teal-300">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Timeline() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrolled = Math.max(0, -rect.top + viewportHeight * 0.4);
      const ratio = Math.min(1, Math.max(0, scrolled / containerHeight));
      setProgress(ratio);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = t.experience;

  return (
    <div ref={containerRef} className="relative pl-8">
      <div className="timeline-line" />
      <div className="timeline-progress" style={{ height: `${progress * 100}%` }} />
      <div className="timeline-dot" style={{ top: `${progress * 100}%` }} />
      <div className="space-y-12">
        {items.map((item: any, i: number) => (
          <TimelineItem key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}
