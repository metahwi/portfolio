"use client";

import { ArrowLeft, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../../components/LanguageProvider";
import AnimatedSection from "../../components/AnimatedSection";

const techStack = [
  { category: "Frontend", items: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"] },
  { category: "Backend", items: ["Next.js API Routes", "Prisma ORM"] },
  { category: "Database", items: ["Neon Postgres", "Serverless Driver"] },
  { category: "Infra", items: ["Vercel", "PWA", "Demo Mode"] },
];

function PhoneFrame({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <div className="relative mx-auto w-[180px] shrink-0">
      <div className="rounded-[2rem] border-4 border-white/15 bg-[#171717] p-2 shadow-xl">
        <div className="rounded-[1.5rem] overflow-hidden">
          <Image src={src} alt={alt} width={200} height={400} className="object-cover w-full h-auto" />
        </div>
      </div>
      <p className="text-xs text-white/35 text-center mt-2">{caption}</p>
    </div>
  );
}

const content = {
  ko: {
    back: "← 돌아가기",
    title: "AVA",
    oneliner: "소상공인을 위한 모바일 재무관리 앱",
    liveDemo: "라이브 데모",
    problem: "문제",
    problemText: "자영업자에게 회계 소프트웨어는 과합니다. 그렇다고 엑셀을 쓰자니 귀찮고, 손으로 쓰자니 빠뜨립니다. 매달 매출과 지출을 제대로 파악하지 못한 채 감으로 운영하는 가게가 대부분입니다. 문제는 의지가 아니라 도구였습니다.",
    approach: "접근",
    approachText: "다섯 번만 누르면 끝나는 입력. 이것이 설계의 출발점이었습니다. 토스의 UX를 참고해서, 거래 입력을 다섯 단계로 압축했습니다. 복잡한 회계 용어는 없앴고, 로그인 없이 바로 쓸 수 있는 데모 모드를 넣었습니다. 써보게 만드는 것이 첫 번째 과제였습니다.",
    wireframes: "디자인 & 와이어프레임",
    wireframeNote: "아래 이미지는 개발 중 와이어프레임입니다. 실제 앱 스크린샷으로 교체될 예정입니다.",
    wireframeCaptions: ["홈 대시보드", "5-action 입력 플로우", "월간 리포트"],
    userFlow: "사용자 플로우",
    steps: [
      { num: 1, title: "거래 유형 선택", desc: "지출 / 수입 / 고정비 / 장비" },
      { num: 2, title: "카테고리 선택", desc: "업종별 맞춤 카테고리" },
      { num: 3, title: "금액 입력", desc: "커스텀 넘버패드" },
      { num: 4, title: "날짜 선택", desc: "기본값은 오늘" },
      { num: 5, title: "확인 & 저장", desc: "한 번 더 확인하고 끝" },
    ],
    features: "핵심 기능",
    featuresList: [
      { title: "5-action 입력", desc: "다섯 번의 탭으로 거래 입력 완료" },
      { title: "AI 예산 가이드", desc: "지출 패턴을 분석해 예산을 제안합니다" },
      { title: "월간 리포트", desc: "차트와 함께 보는 월별 수입/지출 요약" },
      { title: "알림 시스템", desc: "고정비 납부일, 예산 초과 알림" },
      { title: "데모 모드", desc: "로그인 없이 바로 체험 가능" },
    ],
    architecture: "아키텍처",
    techStack: "기술 스택",
    screenshots: "스크린샷",
  },
  en: {
    back: "← Back",
    title: "AVA",
    oneliner: "Mobile-first bookkeeping app for Korean solo business owners",
    liveDemo: "Live Demo",
    problem: "Problem",
    problemText: "Accounting software is overkill for small business owners. Excel is tedious. Paper notebooks miss entries. Most shops run on gut feeling because they never get a clear picture of monthly cash flow. The problem wasn't motivation — it was the tool.",
    approach: "Approach",
    approachText: "Five taps to finish an entry. That was the design starting point. I studied Toss's UX and compressed transaction entry into five steps. No accounting jargon. A demo mode that works without login. Getting people to try it was job one.",
    wireframes: "Design & Wireframes",
    wireframeNote: "Images below are development wireframes. Screenshots to be replaced with actual app captures.",
    wireframeCaptions: ["Home Dashboard", "5-action Entry Flow", "Monthly Report"],
    userFlow: "User Workflow",
    steps: [
      { num: 1, title: "Transaction Type", desc: "Expense / Income / Fixed Cost / Equipment" },
      { num: 2, title: "Category", desc: "Industry-specific categories" },
      { num: 3, title: "Amount", desc: "Custom number pad" },
      { num: 4, title: "Date", desc: "Defaults to today" },
      { num: 5, title: "Confirm & Save", desc: "One final check and done" },
    ],
    features: "Key Features",
    featuresList: [
      { title: "5-action Entry", desc: "Complete a transaction in five taps" },
      { title: "AI Budget Guide", desc: "Analyzes spending patterns and suggests budgets" },
      { title: "Monthly Report", desc: "Income/expense summary with charts" },
      { title: "Notifications", desc: "Fixed cost due dates, budget alerts" },
      { title: "Demo Mode", desc: "Try instantly — no login required" },
    ],
    architecture: "Architecture",
    techStack: "Tech Stack",
    screenshots: "Screenshots",
  },
};

export default function AvaPage() {
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
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {["Next.js", "Prisma", "Neon", "PWA"].map((tag) => (
              <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-teal-400/10 text-teal-300">{tag}</span>
            ))}
          </div>
          <a
            href="https://ava-ashen.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-teal-300 hover:text-white transition-colors"
          >
            {t.liveDemo} <ExternalLink size={14} />
          </a>
        </div>

        {/* Hero image */}
        <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden mb-16 group">
          <Image src="/images/ava-detail.jpg" alt="AVA" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_40px_rgba(241,255,94,0.15)]" />
        </div>

        {/* Problem */}
        <AnimatedSection className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">{t.problem}</h2>
          <p className="leading-relaxed">{t.problemText}</p>
        </AnimatedSection>

        {/* Approach */}
        <AnimatedSection className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">{t.approach}</h2>
          <p className="leading-relaxed">{t.approachText}</p>
        </AnimatedSection>

        {/* Design & Wireframes */}
        <AnimatedSection className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-2">{t.wireframes}</h2>
          <p className="text-sm text-white/35 mb-6">{t.wireframeNote}</p>
          <div className="flex gap-6 overflow-x-auto pb-4 -mx-2 px-2">
            <PhoneFrame src="/images/ava-wireframe-1.jpg" alt={t.wireframeCaptions[0]} caption={t.wireframeCaptions[0]} />
            <PhoneFrame src="/images/ava-wireframe-2.jpg" alt={t.wireframeCaptions[1]} caption={t.wireframeCaptions[1]} />
            <PhoneFrame src="/images/ava-wireframe-3.jpg" alt={t.wireframeCaptions[2]} caption={t.wireframeCaptions[2]} />
          </div>
        </AnimatedSection>

        {/* User Workflow */}
        <AnimatedSection className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-6">{t.userFlow}</h2>
          <div className="relative w-full h-48 md:h-64 rounded-lg overflow-hidden mb-6 group">
            <Image src="/images/ava-userflow.jpg" alt="User Flow" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_40px_rgba(241,255,94,0.15)]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {t.steps.map((step: any) => (
              <div key={step.num} className="flex items-start gap-3 rounded-lg border border-white/5 bg-[#171717] p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-400/10 text-teal-300 text-sm font-bold">
                  {step.num}
                </span>
                <div>
                  <p className="text-sm font-medium text-white">{step.title}</p>
                  <p className="text-xs text-white/35">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Key Features */}
        <AnimatedSection className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-6">{t.features}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {t.featuresList.map((f: any) => (
              <div key={f.title} className="rounded-lg border border-white/5 bg-[#171717] p-4">
                <h3 className="text-sm font-medium text-white mb-1">{f.title}</h3>
                <p className="text-xs text-white/35">{f.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Architecture */}
        <AnimatedSection className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">{t.architecture}</h2>
          <div className="rounded-lg border border-white/5 bg-[#171717] p-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
              <div className="rounded-md bg-teal-400/10 text-teal-300 px-4 py-2">Guest Session</div>
              <span className="text-white/10">→</span>
              <div className="rounded-md bg-teal-400/10 text-teal-300 px-4 py-2">Next.js API</div>
              <span className="text-white/10">→</span>
              <div className="rounded-md bg-teal-400/10 text-teal-300 px-4 py-2">Neon Postgres</div>
              <span className="text-white/10">→</span>
              <div className="rounded-md bg-teal-400/10 text-teal-300 px-4 py-2">Recharts Dashboard</div>
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
            <Image src="/images/ava-thumb.jpg" alt="AVA Dashboard" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
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
