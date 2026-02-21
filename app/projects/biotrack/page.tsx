"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../../components/LanguageProvider";
import AnimatedSection from "../../components/AnimatedSection";

const techStack = [
  { category: "Backend", items: ["Python", "FastAPI", "PostgreSQL", "LangChain"] },
  { category: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "AI / LLM", items: ["Claude API", "RAG", "Prompt Engineering"] },
  { category: "Domain", items: ["GMP", "CAPA", "21 CFR Part 11", "Audit Trail"] },
];

const content = {
  ko: {
    back: "돌아가기",
    title: "BioTrack",
    badge: "Building",
    oneliner: "바이오제약 GMP 일탈/CAPA 추적 + AI 근본원인 분석",
    problem: "문제",
    problemText: "바이오제약 제조 현장에서 일탈이 발생하면, 원인을 분석하고 CAPA를 작성하는 데 며칠이 걸립니다. 대부분 엑셀과 종이로 관리하고 있고, 과거 유사 사례를 찾으려면 사람이 직접 뒤져야 합니다. 규제가 요구하는 Audit Trail도 수작업입니다. 이건 사람이 할 일이 아니라, 시스템이 할 일이라고 생각했습니다.",
    solution: "접근",
    solutionText: "일탈 등록부터 CAPA 완료까지 전체 흐름을 디지털화했습니다. 핵심은 AI 근본원인 분석입니다. 일탈 내용을 입력하면 과거 유사 사례를 RAG로 검색하고, 근본원인을 분석하고, CAPA 초안까지 자동으로 작성합니다. Audit Trail은 처음부터 설계에 넣었습니다.",
    howBuilt: "어떻게 만들었나",
    howBuiltText: "바이오 도메인을 전혀 몰랐습니다. FDA 가이드라인을 읽었고, GMP 교육 자료를 공부했고, 실제 일탈 보고서 샘플을 분석했습니다. 모르는 것이 오히려 강점이었습니다. 도메인 전문가라면 당연하게 넘길 비효율을, 처음 보는 사람이기에 발견할 수 있었습니다. 그리고 그 비효율을 AI로 풀었습니다. 처음이라서 못 하는 게 아니라, 처음이라서 할 수 있는 일이 있습니다.",
    architecture: "아키텍처",
    techStack: "기술 스택",
    screenshots: "스크린샷",
  },
  en: {
    back: "Back",
    title: "BioTrack",
    badge: "Building",
    oneliner: "Biopharma GMP deviation/CAPA tracking with AI root cause analysis",
    problem: "Problem",
    problemText: "When a deviation happens in biopharma manufacturing, root cause analysis and CAPA documentation take days. Most facilities run on Excel and paper. Finding similar past cases means someone manually digging through archives. Even the audit trails regulators demand are done by hand. That's not a people problem — it's a systems problem.",
    solution: "Approach",
    solutionText: "Digitized the full flow from deviation logging to CAPA closure. The core: AI-powered root cause analysis. Input a deviation, RAG retrieves similar past cases, analyzes root causes, and auto-drafts CAPA. Audit trail was baked into the architecture from day one.",
    howBuilt: "How I Built It",
    howBuiltText: "I knew nothing about biopharma. Read FDA guidelines, studied GMP materials, analyzed sample deviation reports. Not knowing the domain was actually an advantage — a newcomer sees inefficiencies that experts have stopped noticing. I found those gaps and filled them with AI. Being new doesn't mean you can't — sometimes it means you're the only one who will.",
    architecture: "Architecture",
    techStack: "Tech Stack",
    screenshots: "Screenshots",
  },
};

export default function BioTrackPage() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white/60">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl px-6 py-16 md:py-24"
      >
        <Link href="/" className="text-sm text-white/40 hover:text-teal-300 transition-colors inline-flex items-center gap-1 mb-12">
          <ArrowLeft size={14} /> {t.back}
        </Link>

        {/* Hero */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold text-white">{t.title}</h1>
            <span className="text-xs px-2.5 py-1 rounded-full bg-teal-400/10 text-teal-300">{t.badge}</span>
          </div>
          <p className="text-lg text-white/60 mb-4">{t.oneliner}</p>
          <div className="flex flex-wrap gap-2">
            {["LLM", "GMP", "FastAPI", "Next.js", "RAG"].map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-teal-400/10 text-teal-300">{tag}</span>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-16 group">
          <Image src="/images/biotrack-detail.jpg" alt="BioTrack" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_40px_rgba(241,255,94,0.15)]" />
        </div>

        {/* Problem */}
        <AnimatedSection className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">{t.problem}</h2>
          <p className="leading-relaxed">{t.problemText}</p>
        </AnimatedSection>

        {/* Solution */}
        <AnimatedSection className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">{t.solution}</h2>
          <p className="leading-relaxed">{t.solutionText}</p>
        </AnimatedSection>

        {/* How Built */}
        <AnimatedSection className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">{t.howBuilt}</h2>
          <p className="leading-relaxed">{t.howBuiltText}</p>
        </AnimatedSection>

        {/* Architecture */}
        <AnimatedSection className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">{t.architecture}</h2>
          <div className="rounded-lg border border-white/5 bg-[#171717] p-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
              <div className="rounded-md bg-teal-400/10 text-teal-300 px-4 py-2">Deviation Input</div>
              <span className="text-white/10">→</span>
              <div className="rounded-md bg-teal-400/10 text-teal-300 px-4 py-2">RAG Retrieval</div>
              <span className="text-white/10">→</span>
              <div className="rounded-md bg-teal-400/10 text-teal-300 px-4 py-2">AI Root Cause</div>
              <span className="text-white/10">→</span>
              <div className="rounded-md bg-teal-400/10 text-teal-300 px-4 py-2">CAPA Draft + Audit Trail</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Tech Stack */}
        <AnimatedSection className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-6">{t.techStack}</h2>
          <div className="grid grid-cols-2 gap-6">
            {techStack.map((group) => (
              <div key={group.category}>
                <h3 className="text-sm font-medium text-white/80 mb-2">{group.category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span key={item} className="text-xs px-2 py-0.5 rounded bg-[#171717] text-white/60">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Screenshots */}
        <AnimatedSection className="mb-16">
          <h2 className="text-xl font-semibold text-white mb-6">{t.screenshots}</h2>
          <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden group">
            <Image src="/images/biotrack-thumb.jpg" alt="BioTrack Dashboard" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_40px_rgba(241,255,94,0.15)]" />
          </div>
        </AnimatedSection>

        <Link href="/" className="text-sm text-white/40 hover:text-teal-300 transition-colors inline-flex items-center gap-1">
          <ArrowLeft size={14} /> {t.back}
        </Link>
      </motion.div>
    </div>
  );
}
