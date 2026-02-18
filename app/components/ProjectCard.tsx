"use client";

import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TiltCard from "./TiltCard";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  live?: string;
  github?: string;
  badge?: string;
  gradient: string;
  image?: string;
  href?: string;
  featured?: boolean;
  index?: number;
}

export default function ProjectCard({ title, description, tags, live, github, badge, gradient, image, href, featured, index = 0 }: ProjectCardProps) {
  const card = (
    <TiltCard index={index}>
      <div className="group relative grid gap-4 rounded-lg p-5 transition-all hover:bg-[#171717] border border-transparent hover:border-teal-400/20 hover:shadow-[0_4px_24px_rgba(20,184,166,0.08)] sm:grid-cols-8 cursor-pointer">
        {/* Thumbnail */}
        <div className={`sm:col-span-2 h-20 sm:h-full rounded-md overflow-hidden bg-gradient-to-br ${gradient} flex items-center justify-center relative`}>
          {image ? (
            <>
              <Image src={image} alt={title} fill className="object-cover transition-all duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-teal-400/10 mix-blend-overlay" />
            </>
          ) : (
            <span className="text-xs text-white/40 font-medium">{title}</span>
          )}
        </div>
        <div className="sm:col-span-6">
          <h3 className="text-white font-medium group-hover:text-teal-300 transition-colors inline-flex items-center gap-2">
            {title}
            {badge && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-400/10 text-teal-300 font-normal">
                {badge}
              </span>
            )}
          </h3>
          <p className="mt-2 text-sm leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-teal-400/10 text-teal-300">
                {tag}
              </span>
            ))}
          </div>
          {(live || github) && (
            <div className="flex gap-3 mt-3">
              {live && (
                <a href={live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-sm text-white/60 hover:text-teal-300 transition-colors inline-flex items-center gap-1">
                  <ExternalLink size={14} /> Live
                </a>
              )}
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-sm text-white/60 hover:text-teal-300 transition-colors inline-flex items-center gap-1">
                  <Github size={14} /> Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </TiltCard>
  );

  if (href) {
    return <Link href={href}>{card}</Link>;
  }

  return card;
}
