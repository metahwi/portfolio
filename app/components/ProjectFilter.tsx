'use client';
import { motion } from 'framer-motion';

interface ProjectFilterProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

export default function ProjectFilter({ categories, active, onChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
            active === cat
              ? 'bg-teal-400/10 text-[#F1FF5E] font-semibold border border-teal-400/20'
              : 'text-white/50 border border-white/10 hover:border-white/25 hover:text-white/80'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
