// src/lib/insights.ts

export type Insight = {
  slug: string;
  tag: string;
  date?: string;
  title: string;
  excerpt: string;
  image: string;
  readTime?: string;
  breadcrumb?: string;
  intro?: string;
  body?: {
    heading: string;
    paragraphs: string[];
  }[];
  pullQuote?: {
    quote: string;
    attribution: string;
  };
};

export const INSIGHTS: Insight[] = [
  {
    slug: "the-cost-of-consensus-in-crisis",
    tag: "Leadership",
    date: "Published Q4 2023",
    readTime: "15 min read",
    breadcrumb: "Archive / Leadership / Crisis Governance",
    title: "The Cost of Consensus in Crisis",
    excerpt:
      "Why collaborative decision-making models fail during critical path disruptions, and the case for authoritative intervention structures.",
    image: "/images/insight/1insight.png",
    intro:
      "Why collaborative decision-making models fail during critical path disruptions, and the case for authoritative intervention structures.",
    pullQuote: {
      quote:
        "In a mission-critical failure, the search for consensus is often the final symptom of a collapsing governance structure.",
      attribution: "LMCS Internal Analysis, 2023",
    },
    body: [
      {
        heading: "The Paradox of Collaborative Paralysis",
        paragraphs: [
          "In stable environments, consensus-building is a virtue. It fosters inclusion, mitigates extreme risks, and builds collective ownership over strategic direction. However, when an organization encounters an acute, existential disruption, a critical path failure, a systemic breach, or a rapid market contraction, the very mechanics of consensus transform into a catastrophic liability.",
          "We observe this repeatedly in high-stakes environments. Executive teams, conditioned by peacetime governance models, instinctively convene to deliberate. They seek alignment. They request more data. They attempt to synthesize disparate viewpoints into a unified response. In doing so, they sacrifice the most critical asset in any crisis: time.",
          "The dilution of accountability is the second major casualty of consensus during a crisis. When decisions are made by committee, the responsibility for failure is shared, and therefore, paradoxically, owned by no one. This structural ambiguity encourages conservative, incremental actions precisely when decisive, potentially radical intervention is required to stabilize the system.",
        ],
      },
      {
        heading: "Authoritative Intervention: The LMCS Framework",
        paragraphs: [
          'Overcoming collaborative paralysis requires a structural shift, not merely a cultural one. At LMCS, we define this shift as moving toward "Commanded Clarity." This framework necessitates the immediate suspension of consensus-based bodies in favor of a singular, authoritative directive node.',
          "This node, whether an individual or a tightly constrained triad, operates with absolute mandate to diagnose, decide, and execute. Information flows inward; directives flow outward. Deliberation is aggressive but brief, prioritized strictly by mission-critical dependencies. It is an uncomfortable architecture for modern organizations, but it is the only structure proven to arrest cascading failures.",
        ],
      },
    ],
  },

  {
    slug: "the-anatomy-of-silent-failure",
    tag: "Project Drift",
    date: "Oct 13, 2024",
    readTime: "10 min read",
    breadcrumb: "Archive / Project Drift",
    title:
      "The Anatomy of Silent Failure: Identifying Micro-Drift Before Macro-Collapse",
    excerpt:
      "Traditional status reporting often masks the insidious accumulation of technical and operational debt. Our latest empirical study examines the leading indicators.",
    image: "/images/insight/2insight.png",
    intro:
      "Traditional status reporting often masks the insidious accumulation of technical and operational debt. Our latest empirical study examines the leading indicators executives consistently miss.",
    body: [
      {
        heading: "Status Reports Hide the Slope, Not the Point",
        paragraphs: [
          "A single status update is a snapshot; drift is a slope. Reviewed in isolation, a project can look green for months while the underlying trend line, schedule compression, deferred defects, quietly shifting scope, points toward failure.",
          "LMCS assessments track condition against baseline continuously, so the divergence is visible long before it becomes the operating model.",
        ],
      },
    ],
  },

  {
    slug: "subjective-optimism-vs-objective-reality",
    tag: "Delivery Confidence",
    date: "Sep 26, 2024",
    readTime: "8 min read",
    breadcrumb: "Archive / Delivery Confidence",
    title: "Subjective Optimism vs. Objective Reality in Mega-Projects",
    excerpt:
      "Why deeply experienced project directors often fall victim to optimism bias, and how to institute empirical delivery confidence.",
    image: "/images/insight/3insight.png",
    intro:
      "Why deeply experienced project directors often fall victim to optimism bias, and how to institute empirical delivery confidence in its place.",
    body: [
      {
        heading: "Experience Is Not Immunity",
        paragraphs: [
          "Seasoned leaders are not exempt from optimism bias, they are simply better at building a plausible narrative around it. LMCS replaces narrative confidence with evidence drawn from governance, readiness, and testing artifacts.",
        ],
      },
    ],
  },

  {
    slug: "the-illusion-of-control",
    tag: "Governance",
    date: "Sep 15, 2024",
    readTime: "9 min read",
    breadcrumb: "Archive / Governance",
    title: "The Illusion of Control: Re-evaluating Steering Committees",
    excerpt:
      "Governance structures designed for BAU operations are routinely misapplied to high-complexity transformations. Examining the failure modes.",
    image: "/images/insight/4insight.png",
    intro:
      "Governance structures designed for business-as-usual operations are routinely misapplied to high-complexity transformations. We examine where steering committees quietly stop steering.",
    body: [
      {
        heading: "When Oversight Becomes Theatre",
        paragraphs: [
          "A steering committee built for routine change lacks the cadence and authority mission-critical delivery demands. The result is an illusion of control, meetings held, minutes filed, risk unmanaged.",
        ],
      },
    ],
  },

  {
    slug: "the-psychology-of-subjective-optimism",
    tag: "Forensic Analysis",
    date: "Aug 30, 2024",
    readTime: "11 min read",
    breadcrumb: "Archive / Forensic Analysis",
    title: "The Psychology of Subjective Optimism",
    excerpt:
      "An examination of how confirmation bias and subjective optimism infect executive dashboards, leading to systemic delivery failures in multi-year infrastructure rollouts.",
    image: "/images/insight/5insight.png",
    intro:
      "An examination of how confirmation bias and subjective optimism infect executive dashboards, leading to systemic delivery failures in multi-year infrastructure rollouts.",
  },

  {
    slug: "architecting-the-immutable-baseline",
    tag: "Governance",
    date: "Aug 16, 2024",
    readTime: "12 min read",
    breadcrumb: "Archive / Governance",
    title: "Architecting the Immutable Baseline",
    excerpt:
      "Defining the parameters for a scope baseline that resists political dilution and enforces accountability across siloed engineering teams.",
    image: "/images/insight/6insight.png",
    intro:
      "Defining the parameters for a scope baseline that resists political dilution and enforces accountability across siloed engineering teams.",
  },

  {
    slug: "the-vulnerable-transition",
    tag: "Readiness",
    date: "Jul 28, 2024",
    readTime: "9 min read",
    breadcrumb: "Archive / Readiness",
    title: "The Vulnerable Transition",
    excerpt:
      "Navigating the critical juncture between project completion and full operational capability, mitigating risks during handover.",
    image: "/images/insight/1insight.png",
    intro:
      "Navigating the critical juncture between project completion and full operational capability, mitigating risks during handover.",
  },

  {
    slug: "identifying-micro-deviations",
    tag: "Analysis",
    date: "Jul 12, 2024",
    readTime: "7 min read",
    breadcrumb: "Archive / Analysis",
    title: "Identifying Micro-Deviations",
    excerpt:
      "An examination of how imperceptible scope changes compound over time, leading to systemic project failure.",
    image: "/images/insight/2insight.png",
    intro:
      "An examination of how imperceptible scope changes compound over time, leading to systemic project failure.",
  },

  {
    slug: "architectures-of-vertical-transparency",
    tag: "Governance",
    date: "Jun 21, 2024",
    readTime: "10 min read",
    breadcrumb: "Archive / Governance",
    title: "Architectures of Vertical Transparency",
    excerpt:
      "Structuring communication protocols to bypass middle-management dilution and deliver unfiltered truth to the executive board.",
    image: "/images/insight/3insight.png",
    intro:
      "Structuring communication protocols to bypass middle-management dilution and deliver unfiltered truth to the executive board.",
  },
];

export function getInsight(slug: string) {
  return INSIGHTS.find((insight) => insight.slug === slug);
}
