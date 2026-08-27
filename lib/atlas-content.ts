// src/lib/atlas-content.ts

export type DiagramNode = {
  label: string;
  top: number; // percentage, 0-100
  left: number; // percentage, 0-100
  dot?: boolean;
};

// ---------- Hero ----------
export const heroContent = {
  eyebrow: "ATLAS",
  heading: [
    { text: "Mission-Critical", accent: true },
    { text: "Site", accent: false },
  ],
  headingLine2: "Intelligence",
  subheading: "Know what is ready. Know what is at risk. Know what happens next.",
  paragraph:
    "Atlas is not a document repository or a simple checklist app. It is a highly structured, relational intelligence platform designed specifically for mission-critical construction. It connects assets, schedules, issues, decisions, and testing requirements into a single, cohesive map of reality, ensuring absolute clarity from the executive suite to the field.",
  cta: "Schedule an Executive Discussion",
};

export const heroDiagramNodes: DiagramNode[] = [
  { label: "SCHEDULE", top: 8, left: 50 },
  { label: "QA/QC", top: 21, left: 27 },
  { label: "EVIDENCE", top: 23, left: 76 },
  { label: "ASSETS", top: 50, left: 10, dot: true },
  { label: "COMMISSIONING", top: 37, left: 84 },
  { label: "OPERATIONS", top: 50, left: 94, dot: true },
  { label: "DECISIONS", top: 65, left: 26 },
  { label: "READINESS", top: 80, left: 29 },
  { label: "ISSUES", top: 74, left: 82 },
  { label: "TURNOVER", top: 94, left: 50 },
];

// ---------- The Problem ----------
export const problemContent = {
  eyebrow: "THE PROBLEM",
  heading: "A Site Is More Than a Collection of Assets",
  paragraphs: [
    "In complex mission-critical environments, knowing an asset exists is insufficient. The critical path relies on understanding the relational dependencies of that asset. An electrical panel is not just steel and copper; it is tied to an energization schedule, constrained by pending RFIs, dependent on QA/QC sign-offs, and critical for downstream commissioning activities.",
    "When this data lives in disparate systems—schedules in P6, issues in Procore, QA/QC in spreadsheets—blind spots emerge. Decisions are made on fragmented information, leading to project drift and compromised delivery.",
  ],
  fragmentedRows: [
    ["Schedule", "Assets", "Issues"],
    ["QA/QC", "Commissioning", "Decisions"],
  ],
  fragmentedFullWidth: "Turnover",
  statement: "Atlas connects those relationships.",
  statementSub:
    "It transforms disconnected data points into actionable intelligence, revealing the true state of readiness across the entire project ecosystem.",
};

// ---------- Audience Grid ----------
export const audienceGroups = [
  {
    icon: "trending" as const,
    title: "Executive Intelligence",
    bullets: [
      "Unfiltered, objective reality of site progress.",
      "Early identification of systemic drift.",
      "Confidence in turnover dates based on relational facts, not optimistic projections.",
    ],
  },
  {
    icon: "clipboard" as const,
    title: "Project + Commissioning Leadership",
    bullets: [
      "Clear line of sight into prerequisite completion.",
      "Automated tracking of QA/QC required for functional testing.",
      "Accountability mapped to specific actions and owners.",
    ],
  },
  {
    icon: "users" as const,
    title: "MEP Coordination",
    bullets: [
      "Granular asset-level tracking.",
      "Immediate visibility into blocking issues.",
      "Structured workflow for resolving field coordination conflicts.",
    ],
  },
];

// ---------- Operational Process Flow ----------
export const processFlowSteps = [
  "Energization Readiness",
  "L1/L2 QA/QC",
  "L3 Startup",
  "L4 FPT",
  "L5 IST",
  "Punchlist Resolution",
  "Turnover Documentation",
];

export const processFlowFinal = "Operations Acceptance";

// ---------- Complete is Not Ready ----------
export const completeNotReady = {
  heading: "Complete is Not Ready",
  chain: [
    "Installed",
    "QA/QC Accepted",
    "Energized",
    "Startup Ready",
    "Controls Ready",
    "Commissioning Ready",
    "Operations Ready",
  ],
};

// ---------- Traditional vs Atlas comparison ----------
export const comparisonContent = {
  traditional: {
    title: "Traditional Schedule",
    items: [
      "Static milestone tracking",
      "Lagging progress updates",
      "Disconnected from field issues",
      "Assumes prerequisites complete",
    ],
  },
  atlas: {
    title: "Atlas Site Intelligence",
    items: [
      "Live relational mapping",
      "Real-time readiness states",
      "Directly tied to blocking constraints",
      "Verifies prerequisites automatically",
    ],
  },
  statement:
    "Atlas shifts project management from tracking what happened yesterday to knowing exactly what needs to happen today.",
};

// ---------- Meetings to Accountability ----------
export const accountabilityFlow = [
  "Discussion",
  "Decision",
  "Owner",
  "Action",
  "Due Date",
  "Affected System",
  "Schedule Consequence",
  "Verification",
];

// ---------- Intelligence Modules ----------
export const intelligenceModules = [
  {
    icon: "zap" as const,
    title: "Energization",
    description:
      "Mapping the exact prerequisites required to safely bring power to critical path systems.",
  },
  {
    icon: "gauge" as const,
    title: "Load-Bank",
    description:
      "Tracking equipment readiness and sequence planning for integrated system load testing.",
  },
  {
    icon: "thermometer" as const,
    title: "IR & Baseline",
    description:
      "Managing thermal scanning and baseline data collection against operational standards.",
  },
  {
    icon: "package" as const,
    title: "Turnover Intelligence",
    description:
      "Compiling all relational data into a comprehensive, verified handover package for operations.",
  },
];

// ---------- What Atlas Delivers ----------
export const deliverables = [
  {
    capability: "Asset Relational Mapping",
    description: "Connecting equipment to dependent systems, schedules, and issues.",
  },
  {
    capability: "Constraint Tracking",
    description: "Identifying specific blockers preventing progression of critical path items.",
  },
  {
    capability: "Readiness Verification",
    description: "Automated checks against required QA/QC documentation before next steps.",
  },
  {
    capability: "Executive Dashboarding",
    description: "High-level site intelligence aggregated from ground-level truths.",
  },
];

// ---------- Project Ecosystem ----------
export const ecosystemNodes: DiagramNode[] = [
  { label: "OWNER", top: 18, left: 16 },
  { label: "GC", top: 18, left: 84 },
  { label: "DESIGN", top: 50, left: 8 },
  { label: "OPERATIONS", top: 50, left: 92 },
  { label: "CXA", top: 82, left: 16 },
  { label: "CONTRACTORS", top: 82, left: 84 },
];

// ---------- FAQ ----------
export const faqItems = [
  {
    question: "What threatens turnover today?",
    answer: "Immediate surfacing of unresolved issues blocking critical path energization.",
  },
  {
    question: "Why is testing delayed?",
    answer: "Clear trace back to missing prerequisites or failed QA/QC checks.",
  },
  {
    question: "Who owns the next action?",
    answer: "Unambiguous assignment of accountability for every required task.",
  },
  {
    question: "Are we ready for operations?",
    answer: "Data-backed verification of system completeness, not just contractor claims.",
  },
  {
    question: "Where is the systemic drift?",
    answer: "Trend analysis highlighting recurring bottlenecks across the site ecosystem.",
  },
];

// ---------- Closing statement ----------
export const closingStatement = {
  heading: "Not another place to store project data.",
  sub: "An intelligence layer that makes your existing data mean something.",
};

// ---------- Bottom CTA ----------
export const atlasCta = {
  title: "See What Atlas Can Bring to Your Project",
  description:
    "Engage LMCS for a rigorous, independent assessment of your most critical initiatives. Replace assumption with evidence.",
};