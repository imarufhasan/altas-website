export type IconName =
  | "landmark"
  | "clock"
  | "triangle-alert"
  | "badge-check"
  | "clipboard-check"
  | "settings"
  | "chart-square"
  | "route-square"
  | "shield-check";

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
  return new Promise((resolve) => setTimeout(() => resolve(data), NETWORK_DELAY_MS));
}

const FRAMEWORK_DATA: FrameworkItem[] = [
  { icon: "landmark", title: "Governance", desc: "Structural oversight & control" },
  { icon: "clock", title: "Schedule Readiness", desc: "Timeline validation" },
  { icon: "triangle-alert", title: "Risk & Constraints", desc: "Vulnerability mapping" },
  { icon: "badge-check", title: "Accountability", desc: "Ownership & evidence quality" },
  { icon: "clipboard-check", title: "Testing Readiness", desc: "Verification protocols" },
  { icon: "settings", title: "Operational Readiness", desc: "Deployment capability" },
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
    desc: "Identifying and quantifying the widening gap between the reported expected condition and the evidence-supported reality.",
  },
  {
    icon: "shield-check",
    title: "Delivery Confidence",
    href: "/delivery-confidence",
    desc: "Establishing verifiable operational predictability to protect executive credibility and capital investments.",
  },
];

const DOMAINS_DATA: DomainItem[] = [
  {
    title: "Governance",
    desc: "Evaluating the decision-making apparatus. Are escalation paths clear, or is the organization relying on consensus in a crisis?",
  },
  {
    title: "Schedule Readiness",
    desc: "Interrogating the critical path. We look beyond Gantt charts to assess resource actuals and sequential logic validity.",
  },
  {
    title: "Risk & Constraints",
    desc: "Identifying unmitigated exposure. Translating abstract risk registers into concrete financial and temporal impacts.",
  },
  {
    title: "Accountability",
    desc: "Mapping ownership to execution. Ensuring that nominal leaders have both the mandate and the capability to deliver.",
  },
  {
    title: "Testing Readiness",
    desc: "Validating quality assurance frameworks. Ensuring testing environments reflect production realities, not synthetic optimism.",
  },
  {
    title: "Operational Readiness",
    desc: "Assessing the transition from project to steady state. Preparing the enterprise to absorb and maintain the new capability.",
  },
];

const DRIFT_INDICATORS_DATA: DriftIndicator[] = [
  { title: "Schedule Pressure", desc: "Timeline compression without corresponding scope or resource adjustments." },
  { title: "Unresolved Conditions", desc: "Technical debt, unaddressed dependencies, and deferred decisions." },
  { title: "Accountability Gaps", desc: "Ambiguity in ownership, responsibility, and decision-making authority." },
  { title: "Readiness Gaps", desc: "Advancing to subsequent phases without the necessary evidence of completion." },
  { title: "Downstream Constraints", desc: "Unresolved project conditions that limit future operational viability." },
];

const PATH_STEPS_DATA: PathStep[] = [
  { n: "1", title: "Governance", desc: "Establishing absolute structural authority." },
  { n: "2", title: "Alignment", desc: "Synchronizing strategic intent with execution capability." },
  { n: "3", title: "Transparency", desc: "Forcing unvarnished truth to the executive tier." },
  { n: "4", title: "Confidence", desc: "Predictable, assured mission completion.", active: true },
];

const INSIGHTS_DATA: InsightItem[] = [
  {
    slug: "the-cost-of-optimistic-status-reporting",
    tag: "GOVERNANCE",
    date: "OCT 22, 2024",
    title: "The Cost of Optimistic Status Reporting",
    excerpt:
      "Why 'green' status updates often mask deteriorating fundamentals, and what executives should ask instead.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "the-illusion-of-green-status",
    tag: "METHODOLOGY",
    date: "OCT 12, 2024",
    title: "The Illusion of Green Status",
    excerpt:
      "Why traditional PMO reporting mechanisms often conceal systemic risk until failure is unavoidable, and how executives can mandate true visibility.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "decoupling-hope-from-strategy",
    tag: "GOVERNANCE",
    date: "SEP 26, 2024",
    title: "Decoupling Hope from Strategy",
    excerpt:
      "Optimism is an executive vulnerability. Establishing governance structures that reward unvarnished truth over placating narratives.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    slug: "quantifying-schedule-validity",
    tag: "EXECUTION",
    date: "SEP 15, 2024",
    title: "Quantifying Schedule Validity",
    excerpt:
      "Moving beyond the Gantt chart to stress-test the actual resource availability and logical sequencing of enterprise initiatives.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop",
  },
];

export const getFramework = () => mockFetch(FRAMEWORK_DATA);
export const getPillars = () => mockFetch(PILLARS_DATA);
export const getDomains = () => mockFetch(DOMAINS_DATA);
export const getDriftIndicators = () => mockFetch(DRIFT_INDICATORS_DATA);
export const getPathSteps = () => mockFetch(PATH_STEPS_DATA);
export const getInsights = () => mockFetch(INSIGHTS_DATA.slice(1, 4)); 