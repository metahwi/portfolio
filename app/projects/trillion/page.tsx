"use client";

import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../../components/LanguageProvider";
import CounterMetric from "../../components/CounterMetric";
import AnimatedSection from "../../components/AnimatedSection";

const metrics = [
  { label: "CAGR", value: "22.1%" },
  { label: "Sharpe Ratio", value: "1.008" },
  { label: "Alpha", value: "+10.6%" },
  { label: "Max Drawdown", value: "-25.2%" },
];

const techStack = [
  { category: "Backend", items: ["Python", "FastAPI", "PostgreSQL", "Redis"] },
  { category: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"] },
  { category: "ML / Quant", items: ["scikit-learn", "pandas", "numpy", "TA-Lib"] },
  { category: "Infra", items: ["Docker", "Vercel", "GitHub Actions"] },
];

const content = {
  ko: {
    back: "← 돌아가기",
    title: "Trillion",
    oneliner: "AI 기반 한국 주식 자동투자 시스템",
    problem: "문제",
    problemText: "대부분의 개인 투자자는 감으로 투자합니다. 뉴스를 보고 사고, 떨어지면 공포에 팝니다. 퀀트 투자는 기관의 영역이었고, 개인이 접근하기에는 벽이 너무 높았습니다. 그 벽을 낮춰보고 싶었습니다.",
    solution: "접근",
    solutionText: "KOSPI/KOSDAQ 전 종목을 대상으로 7개 퀀트 전략을 설계했습니다. 모멘텀, 밸류, 퀄리티 — 각각 다른 시장 국면에서 강점을 가진 전략들을 앙상블 모델로 엮어 하나의 포트폴리오를 만듭니다. 매일 자동으로 리밸런싱하고, 대시보드에서 실시간 성과를 확인할 수 있습니다.",
    howBuilt: "어떻게 만들었나",
    howBuiltText: "OpenClaw과 Claude로 혼자 만들었습니다. 백엔드, 프론트엔드, 퀀트 로직까지 전부. 처음에는 단일 전략으로 시작했는데, 백테스트 결과를 보면서 전략을 하나씩 추가해갔습니다. 데이터 파이프라인을 다듬는 데 가장 오래 걸렸고, 전략을 튜닝하는 과정이 가장 재미있었습니다. 만들면서 배운다는 말이 가장 잘 맞는 프로젝트였습니다.",
    architecture: "아키텍처",
    metrics: "주요 성과",
    techStack: "기술 스택",
    screenshots: "스크린샷",
  },
  en: {
    back: "← Back",
    title: "Trillion",
    oneliner: "AI-powered Korean stock auto-investment system",
    problem: "Problem",
    problemText: "Most retail investors trade on gut feeling. Buy on news, panic sell on drops. Quant investing was an institutional game with walls too high for individuals. I wanted to lower that wall.",
    solution: "Approach",
    solutionText: "Designed 7 quant strategies across all KOSPI/KOSDAQ stocks — momentum, value, quality — each strong in different market regimes, combined through an ensemble model into a single portfolio. Auto-rebalances daily with a real-time performance dashboard.",
    howBuilt: "How I Built It",
    howBuiltText: "Solo-built everything with OpenClaw + Claude. Backend, frontend, quant logic — all of it. Started with one strategy, added more as backtesting revealed what worked. The data pipeline took the longest to get right; tuning strategies was the most fun. This project is the purest expression of learning by building.",
    architecture: "Architecture",
    metrics: "Key Metrics",
    techStack: "Tech Stack",
    screenshots: "Screenshots",
  },
};

export default function TrillionPage() {
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
          <h1 className="text-4xl font-bold text-white mb-2">{t.title}</h1>
          <p className="text-lg text-white/60 mb-4">{t.oneliner}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {["Python", "Next.js", "FastAPI", "Quant", "AI"].map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-teal-400/10 text-teal-300">{tag}</span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="https://trillion-jade.vercel.app" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-teal-300 transition-colors inline-flex items-center gap-1">
              <ExternalLink size={14} /> Live Demo
            </a>
            <a href="https://github.com/metahwi/trillion" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-teal-300 transition-colors inline-flex items-center gap-1">
              <Github size={14} /> GitHub
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-16 group">
          <Image src="/images/trillion-detail.jpg" alt="Trillion" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_40px_rgba(241, 255, 94, 0.12)]" />
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

        {/* Metrics */}
        <AnimatedSection className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-6">{t.metrics}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m) => (
              <CounterMetric key={m.label} label={m.label} value={m.value} />
            ))}
          </div>
        </AnimatedSection>

        {/* Architecture */}
        <AnimatedSection className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">{t.architecture}</h2>
          <div className="rounded-lg border border-white/5 bg-[#171717] p-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
              <div className="rounded-md bg-teal-400/10 text-teal-300 px-4 py-2">Market Data API</div>
              <span className="text-white/10">→</span>
              <div className="rounded-md bg-teal-400/10 text-teal-300 px-4 py-2">Quant Engine (7 Strategies)</div>
              <span className="text-white/10">→</span>
              <div className="rounded-md bg-teal-400/10 text-teal-300 px-4 py-2">Ensemble Optimizer</div>
              <span className="text-white/10">→</span>
              <div className="rounded-md bg-teal-400/10 text-teal-300 px-4 py-2">Dashboard</div>
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
            <Image src="/images/trillion-thumb.jpg" alt="Trillion Dashboard" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_40px_rgba(241, 255, 94, 0.12)]" />
          </div>
        </AnimatedSection>

        <Link href="/" className="text-sm text-white/40 hover:text-teal-300 transition-colors inline-flex items-center gap-1">
          <ArrowLeft size={14} /> {t.back}
        </Link>
      </motion.div>
    </div>
  );
}
