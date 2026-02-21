"use client";

import { ArrowLeft, Github } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../../components/LanguageProvider";
import CounterMetric from "../../components/CounterMetric";
import AnimatedSection from "../../components/AnimatedSection";

const metrics = [
  { label: "PoC Build Time", value: "3 days" },
  { label: "API Endpoints", value: "30+" },
  { label: "Question Types", value: "4" },
  { label: "Version", value: "v2.2" },
];

const techStack = [
  { category: "Frontend", items: ["React Native", "Expo", "TypeScript", "Zustand"] },
  { category: "Backend", items: ["Express.js", "Prisma 5", "PostgreSQL", "JWT"] },
  { category: "Features", items: ["OAuth (ready)", "Push (Expo)", "Rate Limiting", "Helmet"] },
  { category: "Infra", items: ["ngrok", "Cloudflare", "GitHub", "Vercel (planned)"] },
];

const content = {
  ko: {
    back: "돌아가기",
    title: "Swipe Survey",
    oneliner: "틴더식 스와이프 보상형 설문 플랫폼",
    problem: "문제",
    problemText: "대학생 오픈채팅방에서 설문지 교환이 돈이 되고 있었습니다. '내 설문 응답해주면 니 설문도 해줄게' — 비효율적이고, 사기도 잦고, 리서치 업체는 비쌌습니다. 설문 참여의 인센티브 구조가 망가져 있었습니다.",
    solution: "접근",
    solutionText: "양면 마켓으로 풀었습니다. 설문 등록자는 포인트를 소비해서 응답을 모으고, 참여자는 스와이프로 설문을 탐색한 뒤 참여하면 포인트를 벌어요. 틴더 UX를 차용해서 탐색을 재미있게 만들고, 앱 내 설문 빌더로 인증까지 자동화했습니다.",
    howBuilt: "어떻게 만들었나",
    howBuiltText: "Express.js + Prisma로 백엔드를 잡고, Expo로 웹-퍼스트 앱을 만들었습니다. 3일 만에 핵심 루프(스와이프 → 보관함 → 참여 → 포인트)를 완성했고, 이후 소셜 로그인, 포인트 충전/출금, 푸시 알림, 카테고리, 신고 시스템, 출석 체크, 추천 시스템, 업적 뱃지까지 확장했습니다. OpenClaw + Claude로 서브에이전트를 병렬 가동해서 하룻밤에 5 Wave를 돌렸습니다.",
    architecture: "아키텍처",
    features: "주요 기능",
    featureList: [
      "틴더식 스와이프 카드 피드 (카테고리 필터, 검색)",
      "앱 내 설문 빌더 (객관식/복수선택/단답형/별점) + 10% 할인",
      "포인트 충전/출금 (PG 연동 준비), 출석 체크, 추천 보상",
      "리포트 대시보드 (일별 추이, 인구통계, 문항별 분석)",
      "소셜 로그인 (카카오/구글/애플 API 준비), JWT 인증",
      "신고 시스템, 최소 응답 시간 검증, Rate limiting, 보안 헤더",
      "다크 모드, 스켈레톤 로딩, 온보딩 튜토리얼, 업적 뱃지 10종",
    ],
    techStack: "기술 스택",
    metrics: "주요 수치",
  },
  en: {
    back: "Back",
    title: "Swipe Survey",
    oneliner: "Tinder-style reward-based survey platform",
    problem: "Problem",
    problemText: "Korean college students were trading survey responses in open chat rooms. 'Fill mine, I'll fill yours' — inefficient, full of fraud, and research agencies were too expensive. The incentive structure for survey participation was fundamentally broken.",
    solution: "Approach",
    solutionText: "Built it as a two-sided market. Survey creators spend points to collect responses; participants swipe through surveys and earn points by completing them. Borrowed Tinder's UX to make discovery fun, and built an in-app survey builder to automate verification.",
    howBuilt: "How I Built It",
    howBuiltText: "Express.js + Prisma backend, Expo web-first app. Core loop (swipe → save → complete → points) done in 3 days. Then extended with social login, point charge/withdraw, push notifications, categories, report system, daily check-in, referrals, and achievement badges. Used OpenClaw + Claude sub-agents in parallel — 5 waves in one night.",
    architecture: "Architecture",
    features: "Key Features",
    featureList: [
      "Tinder-style swipe card feed (category filter, search)",
      "In-app survey builder (single/multi choice, short text, rating) + 10% discount",
      "Point charge/withdraw (PG-ready), daily check-in, referral rewards",
      "Report dashboard (daily trends, demographics, per-question analysis)",
      "Social login (Kakao/Google/Apple API ready), JWT auth",
      "Report/flag system, min response time validation, rate limiting, security headers",
      "Dark mode, skeleton loading, onboarding tutorial, 10 achievement badges",
    ],
    techStack: "Tech Stack",
    metrics: "Key Numbers",
  },
};

export default function SwipeSurveyPage() {
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
            {["React Native", "Expo", "Express.js", "Prisma", "PostgreSQL"].map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-purple-400/10 text-purple-300">{tag}</span>
            ))}
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/metahwi/swipe-survey-frontend" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-purple-300 transition-colors inline-flex items-center gap-1">
              <Github size={14} /> Frontend
            </a>
            <a href="https://github.com/metahwi/swipe-survey-backend" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-purple-300 transition-colors inline-flex items-center gap-1">
              <Github size={14} /> Backend
            </a>
          </div>
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

        {/* Features */}
        <AnimatedSection className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">{t.features}</h2>
          <ul className="space-y-2">
            {t.featureList.map((f: string, i: number) => (
              <li key={i} className="flex items-start gap-2 leading-relaxed">
                <span className="text-purple-400 mt-1.5 text-xs">●</span>
                {f}
              </li>
            ))}
          </ul>
        </AnimatedSection>

        {/* Architecture */}
        <AnimatedSection className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">{t.architecture}</h2>
          <div className="rounded-lg border border-white/5 bg-[#171717] p-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
              <div className="rounded-md bg-purple-400/10 text-purple-300 px-4 py-2">Expo (RN Web)</div>
              <span className="text-white/10">→</span>
              <div className="rounded-md bg-purple-400/10 text-purple-300 px-4 py-2">Express.js API</div>
              <span className="text-white/10">→</span>
              <div className="rounded-md bg-purple-400/10 text-purple-300 px-4 py-2">Prisma ORM</div>
              <span className="text-white/10">→</span>
              <div className="rounded-md bg-purple-400/10 text-purple-300 px-4 py-2">PostgreSQL</div>
            </div>
          </div>
        </AnimatedSection>

        {/* Tech Stack */}
        <AnimatedSection className="mb-16">
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

        <Link href="/" className="text-sm text-white/40 hover:text-purple-300 transition-colors inline-flex items-center gap-1">
          <ArrowLeft size={14} /> {t.back}
        </Link>
      </motion.div>
    </div>
  );
}
