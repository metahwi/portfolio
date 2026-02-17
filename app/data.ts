// ─── Portfolio Data ──────────────────────────────────────────────────────────

export interface Project {
  id: string
  tier: 1 | 2 | 3
  title: string
  subtitle: string
  description: string
  tags: string[]
  metrics?: string[]
  status: 'live' | 'prototype' | 'completed' | 'in-progress'
  liveUrl?: string
  githubUrl?: string
  image?: string
  highlight?: boolean
}

export const profile = {
  name: '이재휘',
  nameEn: 'Jae Hwi Lee',
  title: 'AX Enablement Engineer',
  tagline: 'AI로 직접 만들고, 직접 바꾸는 사람',
  description: 'NYU Computer Science 졸업 후 Samsung, AWS, Tempo Labs에서 경험을 쌓고, 현재 듀코젠에서 AI 도구로 업무를 자동화하고 교육 서비스를 기획·구현하고 있습니다. 기획서만 쓰는 사람이 아니라, 직접 만들어서 문제를 해결합니다.',
  email: 'metahwi@gmail.com',
  github: 'https://github.com/metahwi',
  linkedin: '',
}

export const experiences = [
  {
    company: '듀코젠',
    role: 'AI Convergence 기획자',
    period: '2025.10 — 현재',
    description: 'AI 교육 서비스 기획 및 운영. 마케팅(104명→30명 선발), Notion 시스템 구축, n8n 자동화, XR/AR 교육 콘텐츠, 바이브 코딩 교안 제작.',
    tags: ['AI', 'No-code', 'Marketing', 'PM'],
    current: true,
  },
  {
    company: 'Tempo Labs',
    role: 'AI Engineer Intern',
    period: '2025.02 — 2025.05',
    description: 'AI 인프라 설계 및 구현. 머신러닝 파이프라인 구축.',
    tags: ['AI/ML', 'Python', 'Infrastructure'],
  },
  {
    company: 'Atom Tech Solutions',
    role: 'AI Full-Stack Developer',
    period: '2024.08 — 2025.01',
    description: 'PyTorch/TensorFlow 기반 AI 인프라 구축. MLOps 파이프라인으로 배포 시간 15% 단축.',
    tags: ['PyTorch', 'MLOps', 'Full-Stack'],
  },
  {
    company: 'Samsung Electronics',
    role: 'Data Management Intern',
    period: '2023.05 — 2023.08',
    description: 'IoT 센서 검증, 컴퓨터 비전 알고리즘 개발. 70+ 참가자 데이터, 측정 정확도 15% 향상.',
    tags: ['IoT', 'Computer Vision', 'R&D'],
  },
  {
    company: 'Amazon Web Services',
    role: 'Full-Stack Development Intern',
    period: '2022.10 — 2022.11',
    description: 'IoT 인증 시스템 구축. 디바이스 보안 40% 향상, 인프라 비용 25% 절감.',
    tags: ['AWS', 'Serverless', 'IoT'],
  },
  {
    company: '대한민국 공군',
    role: '특수작전팀 분대장',
    period: '2018.09 — 2020.09',
    description: '12인 팀 리드, 500+ 보안 미션 수행. Excel VBA로 500+ 인원 스케줄링 자동화.',
    tags: ['Leadership', 'Automation'],
  },
]

export const education = {
  school: 'New York University',
  degree: 'B.S. Computer Science',
  minor: 'Economics',
  period: '2020 — 2024',
  details: 'Machine Learning, Data Structures, Analytics, Financial Technology',
}

export const certifications = [
  'Microsoft AI-900 (Azure AI Fundamentals)',
  'Microsoft AZ-900 (Azure Fundamentals)',
  'Microsoft MS-900 (Microsoft 365 Fundamentals)',
]

export const skills = {
  'AI & Automation': ['OpenClaw', 'Claude', 'LLM/RAG', 'n8n', 'RPA', 'Prompt Engineering'],
  'Development': ['Python', 'JavaScript/TypeScript', 'Next.js', 'React', 'FastAPI', 'SQL'],
  'Low-code / No-code': ['Notion', 'n8n', 'Vibe Coding', 'Unity (기초)'],
  'Business': ['서비스 기획', 'PM', '마케팅', 'B2G 사업', '교육 설계'],
  'Cloud & Infra': ['AWS', 'Azure', 'Vercel', 'Docker', 'Git'],
}

export const projects: Project[] = [
  // ── Tier 1: 셀트리온 맞춤 ──────────────────────────────
  {
    id: 'celltrion-sop',
    tier: 1,
    title: 'CelltrionSOP AI',
    subtitle: '제약 SOP/GMP 문서 AI 챗봇',
    description: '셀트리온 같은 제약사의 SOP·GMP 문서를 RAG(Retrieval-Augmented Generation) 기반으로 검색·요약하는 AI 챗봇. 현업 담당자가 자연어로 질문하면 관련 SOP 조항을 즉시 찾아주는 도구.',
    tags: ['LLM', 'RAG', 'Python', 'FastAPI', 'React'],
    metrics: ['SOP 검색 시간 90% 단축', '자연어 질의 지원', 'GMP 규정 기반'],
    status: 'in-progress',
    highlight: true,
  },
  {
    id: 'batch-automation',
    tier: 1,
    title: '배치 기록 자동화',
    subtitle: '제조 공정 기록서 AI 자동 생성',
    description: 'GMP 배치 기록서(Batch Record)를 AI로 자동 작성하는 PoC. 공정 파라미터를 입력하면 규격에 맞는 기록서를 자동 생성하고, 이상값을 감지하여 알림.',
    tags: ['AI', 'Automation', 'GMP', 'Low-code'],
    metrics: ['기록 작성 시간 70% 단축', '이상값 자동 감지', '템플릿 재사용'],
    status: 'in-progress',
    highlight: true,
  },
  {
    id: 'qc-dashboard',
    tier: 1,
    title: '제조 품질 대시보드',
    subtitle: 'QC 데이터 시각화 + 이상탐지',
    description: '제조 공정의 품질 검사(QC) 데이터를 실시간 시각화하고 통계적 이상탐지를 수행하는 대시보드. 비개발자도 한눈에 품질 현황을 파악할 수 있는 도구.',
    tags: ['Next.js', 'Python', 'Dashboard', 'Data Viz'],
    metrics: ['실시간 모니터링', '이상탐지 알림', 'SPC 차트'],
    status: 'in-progress',
  },

  // ── Tier 2: 듀코젠 실무 ──────────────────────────────────
  {
    id: 'trillion',
    tier: 2,
    title: 'Trillion',
    subtitle: 'AI 자동투자 시스템 (KOSPI/KOSDAQ)',
    description: 'OpenClaw + Claude 바이브 코딩으로 구축한 풀스택 자동투자 시스템. 7개 퀀트 전략, 앙상블 최적화, KIS API 실시간 연동, Vercel 대시보드 배포까지 1인 완성.',
    tags: ['Python', 'Next.js', 'FastAPI', 'Quant', 'Vercel'],
    metrics: ['CAGR 22.1%', 'Sharpe 1.008', 'Alpha +10.6%', '7개 전략 백테스트'],
    status: 'live',
    liveUrl: 'https://trillion-jade.vercel.app',
    highlight: true,
  },
  {
    id: 'isekai-guild',
    tier: 2,
    title: '이세계길드',
    subtitle: 'Azure 자격증 교육 서비스 (PM)',
    description: 'RPG 테마의 Azure 자격증 학습 플랫폼. PM으로 인턴 7명을 이끌며 Notion 기반 사이트 기획, 커리큘럼 설계, B2C 시장 진입 전략 수립.',
    tags: ['PM', 'Notion', 'Education', 'B2C'],
    metrics: ['인턴 7명 관리', 'Notion 기반 LMS', 'B2C 런칭'],
    status: 'completed',
  },
  {
    id: 'n8n-automation',
    tier: 2,
    title: '교육 콘텐츠 자동화',
    subtitle: 'n8n + YouTube → LMS 파이프라인',
    description: '교육 영상 촬영 → YouTube 업로드 → LMS(ducowith.com) 자동 등록 → 수강생 알림까지의 전체 파이프라인을 n8n으로 자동화.',
    tags: ['n8n', 'Automation', 'YouTube API', 'LMS'],
    metrics: ['업로드 자동화', '수강생 자동 알림', '반복 업무 제거'],
    status: 'completed',
  },
  {
    id: 'ducogen-marketing',
    tier: 2,
    title: '교육과정 모집 마케팅',
    subtitle: '정원 30명에 104명 모집 (348%)',
    description: '커머셜 AI 융복합 기획자 과정 모집. 박람회·컨퍼런스·온라인 광고를 직접 기획·실행하여 1개월 만에 104명 지원자 확보, 레벨테스트+면접으로 30명 선발.',
    tags: ['Marketing', 'B2G', 'Design', 'Advertising'],
    metrics: ['104명 모집', '30명 선발', '서울시 협약', '학생당 500만원 지원'],
    status: 'completed',
  },
  {
    id: 'notion-system',
    tier: 2,
    title: '듀코젠 Notion 시스템',
    subtitle: '회사 전체 정보 아키텍처 구축',
    description: '공개 사이트(회사 소개)·학생용(수업·과제·일정)·내부용(프로젝트 관리·HR) 3개 Notion 시스템을 설계·구축하여 조직 운영 인프라를 Low-code로 구현.',
    tags: ['Notion', 'Low-code', 'Information Architecture'],
    metrics: ['3개 사이트 구축', '조직 운영 표준화', '비개발자 협업 설계'],
    status: 'completed',
  },

  // ── Tier 3: 학부/인턴 ──────────────────────────────────
  {
    id: 'samsung-iot',
    tier: 3,
    title: 'Samsung Healthcare IoT',
    subtitle: '센서 검증 + 컴퓨터 비전',
    description: '삼성전자 R&D 협업 프로젝트. IoT 센서 데이터 검증과 컴퓨터 비전 알고리즘 개발. 70+ 휠체어 참가자 데이터로 측정 정확도 15% 향상.',
    tags: ['IoT', 'Computer Vision', 'Python', 'Samsung R&D'],
    metrics: ['정확도 15% 향상', '70+ 참가자 데이터'],
    status: 'completed',
  },
  {
    id: 'aws-iot',
    tier: 3,
    title: 'AWS IoT Authentication',
    subtitle: '서버리스 IoT 보안 시스템',
    description: 'AWS Lambda + SageMaker 기반 IoT 디바이스 인증 시스템. 디바이스 보안 40% 향상, 인프라 비용 25% 절감.',
    tags: ['AWS', 'Lambda', 'SageMaker', 'Serverless'],
    metrics: ['보안 40% 향상', '비용 25% 절감'],
    status: 'completed',
  },
]

export const tierInfo = {
  1: { label: 'Celltrion AX', color: 'bg-blue-500', desc: '셀트리온 맞춤 프로젝트' },
  2: { label: 'Work', color: 'bg-emerald-500', desc: '듀코젠 실무 프로젝트' },
  3: { label: 'Foundation', color: 'bg-zinc-500', desc: '학부/인턴 프로젝트' },
}
