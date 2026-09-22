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
  subheading:
    "Know what is ready. Know what is at risk. Know what happens next.",
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

// ---------- Who Atlas Supports (section header) ----------
export const audienceContent = {
  eyebrow: "PERSPECTIVES",
  heading: "Who Atlas Supports",
  subheading:
    "From executive governance to field execution, Atlas structures site reality into an uninterrupted continuum: Executive Intelligence → Project Leadership → MEP Coordination → Commissioning Readiness → Operations / Organization / Lessons Applied.",
};

// ---------- Audience Grid ----------
export const audienceGroups = [
  {
    icon: "trending" as const,
    title: "Executive Intelligence",
    problem:
      "Late disclosure of systemic project drift, optimistic milestone projections, and unverified contractor progress claims masking true milestone exposure.",
    intelligence:
      "Asset-linked schedule intelligence synthesizing P6 timelines, pending commitments, QA/QC documentation, and critical path prerequisite completion.",
    outcome:
      "Unfiltered, objective site reality with high-confidence turnover dates and automated organizational lessons applied across the portfolio.",
    bullets: [
      "Macro drift detection across all building systems",
      "Governance-level turnover readiness verification",
    ],
  },
  {
    icon: "clipboard" as const,
    title: "Project + Commissioning Leadership",
    problem:
      "Fragmented tracking across L1–L5 testing gateways, opaque pre-functional dependencies, and disorganized turnover punchlists.",
    intelligence:
      "Commissioning entrance criteria tied directly to OEM/startup readiness, vendor sign-offs, test instrumentation, and energization prerequisites.",
    outcome:
      "Automated gating for L4 FPT and L5 IST, real-time load-bank infrastructure tracking, and verified operational turnover documentation.",
    bullets: [
      "Daily readiness, meeting minutes, and commitments mapped to owners",
      "Rigorous Cx entrance & test sequence verification",
    ],
  },
  {
    icon: "users" as const,
    title: "MEP & Field Coordination",
    problem:
      "Relying on tribal knowledge for energization safety, untracked point-to-point verifications, and uncoordinated MEP clash resolution.",
    intelligence:
      "Granular asset graph integrating energization plans, BMS/EPMS P2P checkouts, TAB mechanical balancing, and field coordination issues.",
    outcome:
      "Immediate visibility into blocking constraints before power-on, accelerating trade handover and eliminating field surprises.",
    bullets: [
      "Direct asset-level tracing to active field issues",
      "Structured safety prerequisites for live energization",
    ],
  },
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

// ---------- Operational Lifecycle Flow ----------
export const lifecycleFlowContent = {
  eyebrow: "FIELD EXECUTION & TURNOVER",
  heading: "Operational Lifecycle Flow",
  subheading:
    "A continuous, verified progression from executive strategy to live operations. Atlas enforces prerequisite gating and verification across every stage so milestones reflect true physical readiness, not optimistic schedules.",
};

export type LifecycleStage = {
  number: string;
  title: string;
  description: string;
  tag: string;
};

export const lifecycleStages: LifecycleStage[] = [
  {
    number: "01",
    title: "Executive Strategy",
    description: "Program gating & milestone governance.",
    tag: "GOVERNANCE",
  },
  {
    number: "02",
    title: "Project / Campus / Building / Suite",
    description: "Spatial & jurisdictional site hierarchy.",
    tag: "HIERARCHY",
  },
  {
    number: "03",
    title: "Systems & Assets",
    description: "Relational mapping & dependency tracking.",
    tag: "GRAPH",
  },
  {
    number: "04",
    title: "Design & Procurement",
    description: "Submittals, RFIs & long-lead readiness.",
    tag: "LONG-LEAD",
  },
  {
    number: "05",
    title: "QA / QC",
    description: "Quality Assurance & Quality Control static checks.",
    tag: "L1/L2 STATIC",
  },
  {
    number: "06",
    title: "Energization",
    description: "Electrical source coordination & safety lockouts.",
    tag: "POWER-ON GATE",
  },
  {
    number: "07",
    title: "OEM Startup",
    description: "Original Equipment Manufacturer vendor runs.",
    tag: "L3 STARTUP",
  },
  {
    number: "08",
    title: "Controls / BMS / EPMS",
    description: "Building Management & Power Monitoring integration.",
    tag: "AUTOMATION",
  },
  {
    number: "09",
    title: "TAB / Mechanical Performance",
    description: "Testing, Adjusting & Balancing airflow & hydronics.",
    tag: "BALANCING",
  },
  {
    number: "10",
    title: "Burn-In / IR / Test Infrastructure",
    description: "Infrared thermography & load bank infrastructure.",
    tag: "THERMAL SCAN",
  },
  {
    number: "11",
    title: "Commissioning Readiness",
    description: "Functional Performance & Integrated Systems Tests.",
    tag: "COMMISSIONING",
  },
  {
    number: "12",
    title: "Turnover",
    description: "Commissioning sign-offs & verified digital evidence.",
    tag: "HANDOVER",
  },
  {
    number: "13",
    title: "Operations",
    description: "Operations & Maintenance live facility acceptance.",
    tag: "DAY-1 READY",
  },
  {
    number: "14",
    title: "Lessons Applied",
    description: "Portfolio feedback loop & historical drift intelligence.",
    tag: "CONTINUOUS",
  },
];

export const acronymKey =
  "Acronym Key: QA/QC (Quality Assurance/Control) • OEM (Original Equipment Manufacturer) • BMS/EPMS (Building Management & Power Monitoring Systems) • TAB (Testing, Adjusting, Balancing) • IR (Infrared Thermography) • FPT (Functional Performance Testing) • IST (Integrated Systems Testing)";

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
    description:
      "Connecting equipment to dependent systems, schedules, and issues.",
  },
  {
    capability: "Constraint Tracking",
    description:
      "Identifying specific blockers preventing progression of critical path items.",
  },
  {
    capability: "Readiness Verification",
    description:
      "Automated checks against required QA/QC documentation before next steps.",
  },
  {
    capability: "Executive Dashboarding",
    description:
      "High-level site intelligence aggregated from ground-level truths.",
  },
];

// ---------- Project Ecosystem ----------
export const ecosystemNodes: DiagramNode[] = [
  { label: "OWNER / CLIENT", top: 18, left: 16 },
  { label: "GC (GENERAL CONTRACTOR)", top: 18, left: 84 },
  { label: "DESIGN ENGINEERS", top: 50, left: 8 },
  { label: "OPERATIONS / FACILITIES", top: 50, left: 92 },
  { label: "CXA (COMMISSIONING AUTHORITY)", top: 82, left: 16 },
  { label: "CONTRACTORS / TRADES", top: 82, left: 84 },
];

export const ecosystemCenter = {
  label: "ATLAS",
  sublabel: "CENTRAL GRAPH",
};

// ---------- FAQ ----------
export const faqItems = [
  {
    question: "What threatens turnover today?",
    answer:
      "Immediate surfacing of unresolved issues blocking critical path energization.",
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
    answer:
      "Data-backed verification of system completeness, not just contractor claims.",
  },
  {
    question: "Where is the systemic drift?",
    answer:
      "Trend analysis highlighting recurring bottlenecks across the site ecosystem.",
  },
];

// ---------- LMCS & Atlas Integration ----------
export const integrationContent = {
  eyebrow: "LMCS & ATLAS INTEGRATION",
  heading: "The Assessment Tells You Where You Are. Atlas Keeps It Visible.",
  paragraph:
    "LMCS defines the leadership and delivery system. Atlas operationalizes it as project intelligence—connecting evidence, readiness, ownership, decisions, and turnover across the mission-critical project lifecycle.",
};

export const continuityCard = {
  eyebrow: "OPERATIONAL CONTINUITY",
  title: "Purpose-Built Site Intelligence, Not Generic Software",
  paragraphs: [
    "Atlas is not a generic AI layer or another disconnected project management repository. It is a purpose-built site intelligence engine developed through frontline mission-critical commissioning and project governance.",
    "Where traditional advisory leaves behind static binders and periodic audit slides, Atlas acts as the sustained operational layer deployed through LMCS engagements—converting diagnostic findings into active, continuous tracking across all critical path assets, prerequisites, and operational handovers.",
  ],
  footnote: "Direct continuum from executive oversight to field verification",
};

export const governanceCard = {
  eyebrow: "GOVERNANCE & ACCOUNTABILITY",
  title: "Authority Boundary & Governance",
  quote:
    "Atlas provides intelligence—not authority. Engineering, construction, commissioning, safety, Owner, Operations, and risk-acceptance authority remain exclusively with accountable qualified parties.",
  paragraph:
    "Atlas does not certify equipment, grant safety exemptions, or override engineering judgments. It enforces transparency on prerequisites, unfulfilled verifications, and cross-discipline dependencies so authorized stakeholders act with defensible, verified site facts.",
  footnote: "Defensible auditability across all gated project milestones",
};

// ---------- Structured Access & Deployment Path ----------
export const deploymentContent = {
  eyebrow: "ENGAGEMENT MODEL",
  heading: "Structured Access & Deployment Path",
};

export const deploymentSteps = [
  {
    step: "STEP 01",
    title: "Project Assessment & Baseline",
    description:
      "LMCS evaluates site conditions, critical dependencies, organizational interfaces, and latent readiness drift before configuration.",
    tag: "DIAGNOSTIC BASELINE",
  },
  {
    step: "STEP 02",
    title: "Atlas Operational Deployment",
    description:
      "The relational intelligence layer is configured to map project constraints, gates, QA/QC evidence, and cross-system energization paths.",
    tag: "PLATFORM ACTIVATION",
  },
  {
    step: "STEP 03",
    title: "Sustained Executive & Field Clarity",
    description:
      "Active site intelligence maintained throughout testing, punchlist resolution, IST, operations acceptance, and organizational turnover.",
    tag: "ONGOING GOVERNANCE",
  },
];

// ---------- Current Operational Boundaries vs. Roadmap ----------
export const boundariesContent = {
  eyebrow: "CAPABILITY INTEGRITY",
  heading: "Current Operational Boundaries vs. Roadmap",
  subheading:
    "Transparent architectural discipline distinguishing proven live capabilities from forward research.",
};

export const currentCapabilities = {
  title: "Current Operational Capabilities",
  badge: "ACTIVE IN PRODUCTION",
  items: [
    {
      label: "Relational Asset Mapping",
      description:
        "Direct graphing of dependencies between MEP equipment and schedules.",
    },
    {
      label: "Milestone Constraint Tracking",
      description:
        "Real-time identification of upstream blockers threatening turnover.",
    },
    {
      label: "QA/QC Prerequisite Verification",
      description:
        "Automated enforcement of sign-offs prior to energization gates.",
    },
    {
      label: "Executive Decision Agendas",
      description:
        "Structured tracking converting discussions directly to accountable owners.",
    },
    {
      label: "Turnover Readiness Compilation",
      description:
        "Living turnover evidence assembly from static checkout to Day-1 ops.",
    },
  ],
};

export const futureRoadmap = {
  title: "Future / Advisory Roadmap",
  badge: "SUBJECT TO FOUNDER CONFIRMATION",
  items: [
    {
      label: "Cross-Portfolio Comparative ML",
      description:
        "Anonymized multi-campus pattern analysis for benchmarking contractor velocity.",
    },
    {
      label: "Autonomous Predictive Drift Forecasting",
      description:
        "Algorithmic lead-time anomaly models across submittal backlogs.",
    },
    {
      label: "Automated Dispute Reconciliation",
      description:
        "Algorithmic schedule delay allocation across concurrent trade claims.",
    },
  ],
};

// ---------- Closing statement ----------
// NOTE: this block does not appear anywhere in the design (SVG/PNG) —
// the page flows straight from the Roadmap section into the bottom CTA.
// Kept here (unused on the page) in case it's needed elsewhere; removed
// from page.tsx's render output. Remove this comment/export if you don't
// need it at all.
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
