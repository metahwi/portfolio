import { profile, projects, experiences, education, certifications, skills, tierInfo } from './data'
import type { Project } from './data'
import { ExternalLink, Github, Mail, Award, Briefcase, GraduationCap, ChevronRight, Zap, Bot, BarChart3, Factory, BookOpen, Megaphone, Layout, Cpu, Shield } from 'lucide-react'

const tierProjects = (tier: 1 | 2 | 3) => projects.filter(p => p.tier === tier)

const iconMap: Record<string, any> = {
  'celltrion-sop': Bot,
  'batch-automation': Factory,
  'qc-dashboard': BarChart3,
  'trillion': Zap,
  'isekai-guild': BookOpen,
  'n8n-automation': Cpu,
  'ducogen-marketing': Megaphone,
  'notion-system': Layout,
  'samsung-iot': Cpu,
  'aws-iot': Shield,
}

function ProjectCard({ project }: { project: Project }) {
  const tier = tierInfo[project.tier]
  const Icon = iconMap[project.id] || Zap

  return (
    <div className={`project-card rounded-xl bg-zinc-900/50 p-6 flex flex-col gap-4 ${project.highlight ? 'ring-1 ring-blue-500/20' : ''}`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-lg ${tier.color}/10 flex items-center justify-center`}>
            <Icon className={`w-5 h-5 text-blue-400`} />
          </div>
          <div>
            <span className={`tier-badge px-2 py-0.5 rounded-full ${tier.color} text-white font-medium`}>
              {tier.label}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener" className="text-zinc-500 hover:text-blue-400 transition-colors">
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener" className="text-zinc-500 hover:text-blue-400 transition-colors">
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-zinc-100">{project.title}</h3>
        <p className="text-sm text-zinc-400 mt-0.5">{project.subtitle}</p>
      </div>

      <p className="text-sm text-zinc-400 leading-relaxed flex-1">{project.description}</p>

      {project.metrics && (
        <div className="flex flex-wrap gap-2">
          {project.metrics.map((m, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-md bg-blue-500/10 text-blue-300 font-medium">{m}</span>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5 pt-1">
        {project.tags.map((tag, i) => (
          <span key={i} className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400">{tag}</span>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-zinc-500">
        <span className={`flex items-center gap-1 ${project.status === 'live' ? 'text-emerald-400' : project.status === 'in-progress' ? 'text-amber-400' : 'text-zinc-500'}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${project.status === 'live' ? 'bg-emerald-400' : project.status === 'in-progress' ? 'bg-amber-400' : 'bg-zinc-500'}`} />
          {project.status === 'live' ? 'Live' : project.status === 'in-progress' ? 'In Progress' : 'Completed'}
        </span>
      </div>
    </div>
  )
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      {/* ── Navigation ── */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-bold text-sm">JHL</span>
          <div className="flex gap-6 text-sm text-zinc-400">
            <a href="#about" className="hover:text-zinc-100 transition-colors">소개</a>
            <a href="#projects" className="hover:text-zinc-100 transition-colors">프로젝트</a>
            <a href="#experience" className="hover:text-zinc-100 transition-colors">경력</a>
            <a href="#celltrion" className="hover:text-zinc-100 transition-colors">Why Me</a>
            <a href="#contact" className="hover:text-zinc-100 transition-colors">연락처</a>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section id="about" className="gradient-hero pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <p className="text-blue-400 text-sm font-medium mb-4 tracking-wide">{profile.title}</p>
            <h1 className="text-5xl font-bold leading-tight mb-2">{profile.name}</h1>
            <h2 className="text-2xl text-zinc-400 font-light mb-6">{profile.tagline}</h2>
            <p className="text-zinc-400 leading-relaxed text-lg max-w-2xl">{profile.description}</p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a href="#projects" className="px-5 py-2.5 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors flex items-center gap-2">
                프로젝트 보기 <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#celltrion" className="px-5 py-2.5 border border-zinc-700 text-zinc-300 rounded-lg text-sm font-medium hover:border-zinc-500 transition-colors">
                왜 저인가
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-4 gap-6 mt-14 pt-8 border-t border-zinc-800/50">
              <div>
                <p className="text-2xl font-bold text-zinc-100">10</p>
                <p className="text-xs text-zinc-500 mt-1">Projects</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-zinc-100">NYU</p>
                <p className="text-xs text-zinc-500 mt-1">CS + Economics</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-zinc-100">5</p>
                <p className="text-xs text-zinc-500 mt-1">Companies</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-zinc-100">3</p>
                <p className="text-xs text-zinc-500 mt-1">MS Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section className="py-16 px-6 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-3">{category}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((item, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded-md bg-zinc-900 text-zinc-300">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">프로젝트</h2>
          <p className="text-zinc-400 mb-12">기획만이 아니라, 직접 실행·실험·개선까지.</p>

          {/* Tier 1: Celltrion */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-semibold uppercase tracking-wide">Celltrion AX</span>
              <span className="text-sm text-zinc-400">— 셀트리온 제조개발사업부 맞춤 프로젝트</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tierProjects(1).map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
          </div>

          {/* Tier 2: Work */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-semibold uppercase tracking-wide">Work</span>
              <span className="text-sm text-zinc-400">— 듀코젠 실무 프로젝트 (AI Convergence 기획자)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tierProjects(2).map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
          </div>

          {/* Tier 3: Foundation */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-zinc-600 text-white text-xs font-semibold uppercase tracking-wide">Foundation</span>
              <span className="text-sm text-zinc-400">— 학부/인턴 프로젝트</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tierProjects(3).map(p => <ProjectCard key={p.id} project={p} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── Experience ── */}
      <section id="experience" className="py-20 px-6 gradient-section">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">경력</h2>
          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className={`timeline-dot ${exp.current ? 'ring-4 ring-blue-500/20' : ''}`} />
                  {i < experiences.length - 1 && <div className="w-px flex-1 bg-zinc-800 mt-2" />}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-zinc-100">{exp.company}</h3>
                    {exp.current && <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 font-medium">현재</span>}
                  </div>
                  <p className="text-sm text-blue-400 mb-1">{exp.role}</p>
                  <p className="text-xs text-zinc-500 mb-2">{exp.period}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {exp.tags.map((tag, j) => (
                      <span key={j} className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education & Certs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold">학력</h3>
              </div>
              <h4 className="text-lg font-medium">{education.school}</h4>
              <p className="text-sm text-blue-400">{education.degree}, {education.minor}</p>
              <p className="text-xs text-zinc-500 mt-1">{education.period}</p>
              <p className="text-sm text-zinc-400 mt-2">{education.details}</p>
            </div>

            <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold">자격증</h3>
              </div>
              <ul className="space-y-2">
                {certifications.map((cert, i) => (
                  <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
                    <span className="text-blue-400 mt-0.5">•</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Me (Celltrion) ── */}
      <section id="celltrion" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-2">왜 이재휘인가</h2>
          <p className="text-zinc-400 mb-12">셀트리온 AX Enablement가 찾는 사람과 제가 맞는 이유</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                req: '업무 문제를 기술/도구로 직접 해결한 경험',
                answer: 'OpenClaw + Claude로 자동투자 시스템을 설계부터 배포까지 1인 완성. n8n으로 교육 콘텐츠 파이프라인 자동화. Notion으로 회사 전체 운영 시스템 구축.',
              },
              {
                req: 'Low-code, 바이브 코딩으로 직접 만든 경험',
                answer: 'Trillion 자동투자 — AI 에이전트와 대화하며 Python 백엔드, Next.js 프론트엔드, 7개 퀀트 전략, KIS API 연동까지 바이브 코딩으로 구현.',
              },
              {
                req: '비개발자와 소통하며 문제 정의 + 개선안 설명',
                answer: '교육과정 104명 모집, 강사 보조, 인턴 7명 PM 경험. 비개발자인 수강생에게 AI 도구 사용법을 교육하고 워크숍 진행.',
              },
              {
                req: '새로운 도구를 빠르게 익혀 실무 적용',
                answer: 'OpenClaw(출시 초기 사용), Claude Code, n8n, pykrx, KIS OpenAPI 등 새 도구를 며칠 내에 실무에 적용. 학습 속도가 강점.',
              },
              {
                req: '스타트업에서 AX/업무 자동화/DX 직접 수행',
                answer: '듀코젠(10인 미만 스타트업)에서 마케팅, 교육, 시스템 구축, 자동화를 혼자 기획하고 직접 실행.',
              },
              {
                req: 'LLM 기반 도구, RPA, 업무 자동화 실무 적용',
                answer: 'Claude + OpenClaw 일상 업무 도구로 사용. n8n으로 업무 파이프라인 자동화. 셀트리온 맞춤 SOP AI 챗봇 직접 제작.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800/50">
                <p className="text-xs text-blue-400 font-medium uppercase tracking-wide mb-2">요구사항</p>
                <p className="text-sm text-zinc-300 font-medium mb-3">{item.req}</p>
                <p className="text-xs text-zinc-500 font-medium uppercase tracking-wide mb-2">제 경험</p>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-20 px-6 border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">연락처</h2>
          <p className="text-zinc-400 mb-8">새로운 기회에 대해 이야기하고 싶습니다.</p>
          <div className="flex justify-center gap-6">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sm hover:border-zinc-600 transition-colors">
              <Mail className="w-4 h-4" /> {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noopener" className="flex items-center gap-2 px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-lg text-sm hover:border-zinc-600 transition-colors">
              <Github className="w-4 h-4" /> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 px-6 border-t border-zinc-800/50 text-center text-xs text-zinc-600">
        <p>Built with Next.js + OpenClaw + Claude — 이 포트폴리오 자체가 AX 역량의 증거입니다.</p>
      </footer>
    </main>
  )
}
