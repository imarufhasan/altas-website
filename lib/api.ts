// FILE PATH: lib/api.ts

export type IconName =
  | "landmark"
  | "clock"
  | "triangle-alert"
  | "badge-check"
  | "clipboard-check"
  | "settings"
  | "chart-square"
  | "route-square"
  | "shield-check"
  | "chart-line"
  | "graduation-cap"
  | "workflow"
  | "list-checks"
  | "shield";

export interface FrameworkItem {
  icon: IconName;
  title: string;
  desc: string;
}

export interface PillarItem {
  icon: IconName;
  title: string;
  href: string;
  desc: string;
}

export interface DomainItem {
  title: string;
  desc: string;
}

export interface DriftIndicator {
  title: string;
  desc: string;
}

export interface PathStep {
  n: string;
  title: string;
  desc: string;
  active?: boolean;
}

export interface AcademyItem {
  icon: IconName;
  title: string;
  desc: string;
}

export interface InsightItem {
  slug: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  image: string;
}

const NETWORK_DELAY_MS = 900;

function mockFetch<T>(data: T): Promise<T> {
  return new Promise((resolve) =>
    setTimeout(() => resolve(data), NETWORK_DELAY_MS),
  );
}

// Hero card: "System & Readiness Domains"
const FRAMEWORK_DATA: FrameworkItem[] = [
  {
    icon: "landmark",
    title: "Governance & Escalation",
    desc: "Decisive clarity over consensus paralysis",
  },
  {
    icon: "chart-line",
    title: "ATLAS Project Intelligence",
    desc: "Real-time condition & evidence verification",
  },
  {
    icon: "clock",
    title: "Schedule & Critical Path",
    desc: "Resource actuals vs synthetic optimism",
  },
  {
    icon: "triangle-alert",
    title: "Risk & MEP Constraints",
    desc: "Unmitigated exposure into financial impacts",
  },
  {
    icon: "graduation-cap",
    title: "LMCS Academy",
    desc: "Institutional capability inside the team",
  },
];

const PILLARS_DATA: PillarItem[] = [
  {
    icon: "chart-square",
    title: "Project Assessment",
    href: "/project-assessment",
    desc: "A rigorous examination of the structural integrity of your initiative, validating the condition beneath the commitment.",
  },
  {
    icon: "route-square",
    title: "Project Drift",
    href: "/project-drift",
    desc: "Identifying the growing separation between reported project status and the evidence-supported condition of delivery.",
  },
  {
    icon: "shield-check",
    title: "Delivery Confidence",
    href: "/delivery-confidence",
    desc: "Establishing an evidence-supported view of whether current leadership, readiness, risk, and execution conditions support the intended outcome.",
  },
];

const DOMAINS_DATA: DomainItem[] = [
  {
    title: "Governance",
    desc: "Clarify decision authority, escalation paths, accountable ownership, and the governance required to protect critical milestones.",
  },
  {
    title: "Schedule Readiness",
    desc: "Test schedule dates against actual prerequisites, assets, vendors, resources, energization, Startup, controls, evidence, and commissioning entrance criteria.",
  },
  {
    title: "Risk & Constraints",
    desc: "Identify unresolved constraints, dependencies, and risk conditions and connect them to affected milestones, systems, accountable organizations, and downstream consequences.",
  },
  {
    title: "Accountability",
    desc: "Mapping ownership to execution. Ensuring that nominal leaders have both the mandate and the capability to deliver.",
  },
  {
    title: "Testing Readiness",
    desc: "Verify that predecessor work, QA/QC, Startup, controls, documentation, test infrastructure, vendor coverage, and required evidence support entry into functional testing.",
  },
  {
    title: "Operational Readiness",
    desc: "Determine whether Operations has the people, procedures, evidence, training, system knowledge, known-risk visibility, and ownership required to confidently assume responsibility.",
  },
];

const DRIFT_INDICATORS_DATA: DriftIndicator[] = [
  {
    title: "Schedule Pressure",
    desc: "Timeline compression without corresponding scope or resource adjustments.",
  },
  {
    title: "Unresolved Conditions",
    desc: "Technical debt, unaddressed dependencies, and deferred decisions.",
  },
  {
    title: "Accountability Gaps",
    desc: "Ambiguity in ownership, responsibility, and decision-making authority.",
  },
  {
    title: "Readiness Gaps",
    desc: "Advancing to subsequent phases without the necessary evidence of completion.",
  },
  {
    title: "Downstream Constraints",
    desc: "Unresolved project conditions that limit future operational viability.",
  },
];

const PATH_STEPS_DATA: PathStep[] = [
  {
    n: "1",
    title: "Governance",
    desc: "Establishing absolute structural authority.",
  },
  {
    n: "2",
    title: "Alignment",
    desc: "Synchronizing strategic intent with execution capability.",
  },
  {
    n: "3",
    title: "Transparency",
    desc: "Forcing unvarnished truth to the executive tier.",
  },
  {
    n: "4",
    title: "Confidence",
    desc: "Predictable, assured mission completion.",
    active: true,
  },
];

const ACADEMY_DATA: AcademyItem[] = [
  {
    icon: "workflow",
    title: "Disciplined Operating Rhythm",
    desc: "Instilling rigor in governance, milestone verification, and decision clarity across owner and delivery teams.",
  },
  {
    icon: "list-checks",
    title: "Empirical Accountability",
    desc: "Shifting team culture from subjective progress reporting to evidence-backed condition awareness.",
  },
  {
    icon: "shield",
    title: "Institutional Resilience",
    desc: "Embedding long-term operational readiness frameworks that endure across complex capital initiatives.",
  },
];

const INSIGHTS_DATA: InsightItem[] = [
  {
    slug: "the-cost-of-optimistic-status-reporting",
    tag: "GOVERNANCE",
    date: "OCT 22, 2024",
    title: "The Cost of Optimistic Status Reporting",
    excerpt:
      "Why 'green' status updates often mask deteriorating fundamentals, and what executives should ask instead.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "the-illusion-of-green-status",
    tag: "METHODOLOGY",
    date: "OCT 12, 2024",
    title: "The Illusion of Green Status",
    excerpt:
      "Why traditional PMO reporting mechanisms often conceal systemic risk until failure is unavoidable, and how executives can mandate true visibility.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "decoupling-hope-from-strategy",
    tag: "GOVERNANCE",
    date: "SEP 26, 2024",
    title: "Decoupling Hope from Strategy",
    excerpt:
      "Optimism is an executive vulnerability. Establishing governance structures that reward unvarnished truth over placating narratives.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "quantifying-schedule-validity",
    tag: "EXECUTION",
    date: "SEP 15, 2024",
    title: "Quantifying Schedule Validity",
    excerpt:
      "Moving beyond the Gantt chart to stress-test the actual resource availability and logical sequencing of enterprise initiatives.",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
  },
];

export const getFramework = () => mockFetch(FRAMEWORK_DATA);
export const getPillars = () => mockFetch(PILLARS_DATA);
export const getDomains = () => mockFetch(DOMAINS_DATA);
export const getDriftIndicators = () => mockFetch(DRIFT_INDICATORS_DATA);
export const getPathSteps = () => mockFetch(PATH_STEPS_DATA);
export const getAcademyPillars = () => mockFetch(ACADEMY_DATA);
export const getInsights = () => mockFetch(INSIGHTS_DATA.slice(1, 4));
