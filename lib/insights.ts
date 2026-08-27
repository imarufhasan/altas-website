// src/lib/insights.ts

export type InsightContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "quote"; quote: string; attribution: string }
  | { type: "image"; src: string; caption?: string };

export type InsightSection = {
  heading: string;
  content: InsightContentBlock[];
};

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
  body?: InsightSection[];
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
    body: [
      {
        heading: "The Paradox of Collaborative Paralysis",
        content: [
          {
            type: "paragraph",
            text: "In stable environments, consensus-building is a virtue. It fosters inclusion, mitigates extreme risks, and builds collective ownership over strategic direction. However, when an organization encounters an acute, existential disruption, the very mechanics of consensus can become a liability.",
          },
          {
            type: "paragraph",
            text: "Executive teams conditioned by peacetime governance models instinctively convene to deliberate. They seek alignment, request more data, and attempt to synthesize competing viewpoints into a unified response. In doing so, they can sacrifice the most critical asset in any crisis: time.",
          },
          {
            type: "quote",
            quote:
              "In a mission-critical failure, the search for consensus can become the final symptom of a collapsing governance structure.",
            attribution: "LMCS Internal Analysis, 2023",
          },
          {
            type: "paragraph",
            text: "The dilution of accountability is another major casualty of consensus during a crisis. When decisions are made collectively, responsibility can become distributed so broadly that no individual feels fully accountable for the outcome.",
          },
          {
            type: "image",
            src: "/images/insight/1insight.png",
            caption:
              "Fig 1: A decentralized command environment exhibiting symptoms of informational overload and delayed decision-making.",
          },
        ],
      },
      {
        heading: "Authoritative Intervention",
        content: [
          {
            type: "paragraph",
            text: "Overcoming collaborative paralysis requires a structural shift, not merely a cultural one. At LMCS, this shift can be understood as moving toward commanded clarity: a governance model where responsibility, authority, and execution are explicitly connected.",
          },
          {
            type: "paragraph",
            text: "The intervention structure may be led by a single accountable executive or a tightly constrained decision group. Information flows inward, decisions are made quickly, and directives flow outward with clear ownership.",
          },
          {
            type: "quote",
            quote:
              "The objective is not to eliminate collaboration. It is to prevent collaboration from becoming an excuse for delayed accountability.",
            attribution: "LMCS Governance Review",
          },
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
        content: [
          {
            type: "paragraph",
            text: "A single status update is a snapshot; drift is a slope. Reviewed in isolation, a project can look green for months while the underlying trend line points toward failure.",
          },
          {
            type: "paragraph",
            text: "Schedule compression, deferred defects, quietly shifting scope, incomplete dependencies, and unresolved decisions often accumulate beneath apparently healthy reporting.",
          },
          {
            type: "quote",
            quote:
              "A project rarely fails at the moment the organization first discovers the problem. The failure usually began much earlier.",
            attribution: "LMCS Project Drift Analysis",
          },
        ],
      },
      {
        heading: "Recognizing Micro-Drift",
        content: [
          {
            type: "paragraph",
            text: "Micro-drift is rarely dramatic. It appears as small deviations that individually seem manageable but collectively change the condition of the project.",
          },
          {
            type: "paragraph",
            text: "The most effective assessment approach therefore looks beyond reported status and examines the evidence supporting that status: decisions, dependencies, readiness indicators, defects, milestones, and delivery artifacts.",
          },
          {
            type: "image",
            src: "/images/insight/2insight.png",
            caption:
              "Fig 1: Small deviations accumulating across multiple project dimensions.",
          },
        ],
      },
      {
        heading: "From Reporting to Condition Assessment",
        content: [
          {
            type: "paragraph",
            text: "LMCS assessments focus on the condition of the initiative rather than simply repeating management reporting. The objective is to expose divergence early enough for leadership to intervene while meaningful options still exist.",
          },
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
        content: [
          {
            type: "paragraph",
            text: "Seasoned leaders are not exempt from optimism bias. They are often better at constructing a plausible narrative around incomplete evidence.",
          },
          {
            type: "paragraph",
            text: "Years of successful delivery can create confidence in personal judgment, but complex programs introduce conditions that cannot always be understood through experience alone.",
          },
          {
            type: "quote",
            quote:
              "Confidence becomes dangerous when it is disconnected from the evidence that should justify it.",
            attribution: "LMCS Delivery Confidence Review",
          },
        ],
      },
      {
        heading: "The Evidence Gap",
        content: [
          {
            type: "paragraph",
            text: "The difference between subjective optimism and objective confidence is the quality of evidence supporting the conclusion. A confident forecast should be traceable to measurable conditions, validated dependencies, and observable delivery artifacts.",
          },
          {
            type: "paragraph",
            text: "LMCS replaces narrative confidence with structured evidence drawn from governance, readiness, execution, testing, and operational capability.",
          },
          {
            type: "image",
            src: "/images/insight/3insight.png",
            caption:
              "Fig 1: The relationship between reported confidence and evidence-supported delivery condition.",
          },
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
        content: [
          {
            type: "paragraph",
            text: "A steering committee built for routine change can lack the cadence and authority that mission-critical delivery demands. The result is an illusion of control: meetings are held, minutes are filed, and risks are discussed, while the underlying condition continues to deteriorate.",
          },
          {
            type: "paragraph",
            text: "Governance only creates value when it changes decisions and outcomes. A committee that observes without intervening may provide visibility without control.",
          },
          {
            type: "quote",
            quote:
              "Governance is not the existence of oversight. Governance is the ability to act on what oversight reveals.",
            attribution: "LMCS Governance Analysis",
          },
        ],
      },
      {
        heading: "Authority Must Match Accountability",
        content: [
          {
            type: "paragraph",
            text: "Effective governance requires a clear relationship between decision rights and accountability. If leaders are held responsible for outcomes but lack authority over the decisions that shape those outcomes, governance becomes structurally weak.",
          },
          {
            type: "paragraph",
            text: "Mission-critical initiatives require governance mechanisms designed around actual delivery conditions rather than organizational tradition.",
          },
          {
            type: "image",
            src: "/images/insight/4insight.png",
            caption:
              "Fig 1: Governance structures must connect oversight, authority, and accountability.",
          },
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
    body: [
      {
        heading: "How Optimism Enters the Dashboard",
        content: [
          {
            type: "paragraph",
            text: "Executive dashboards are designed to simplify complexity. That simplicity becomes a risk when important uncertainty is removed from the picture.",
          },
          {
            type: "paragraph",
            text: "Positive interpretations tend to survive longer than contradictory evidence, especially when teams have invested significant time, reputation, and political capital into a particular delivery narrative.",
          },
          {
            type: "quote",
            quote:
              "The dashboard can be accurate and still produce a misleading picture of project reality.",
            attribution: "LMCS Forensic Analysis",
          },
        ],
      },
      {
        heading: "Confirmation Bias in Delivery Reporting",
        content: [
          {
            type: "paragraph",
            text: "Confirmation bias can influence which metrics receive attention, how exceptions are explained, and which risks are considered temporary rather than structural.",
          },
          {
            type: "paragraph",
            text: "A forensic assessment therefore examines not only what is being reported but also what evidence is absent, delayed, or repeatedly explained away.",
          },
          {
            type: "image",
            src: "/images/insight/5insight.png",
            caption:
              "Fig 1: The gap between dashboard narrative and underlying delivery evidence.",
          },
        ],
      },
    ],
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
    body: [
      {
        heading: "Why Baselines Drift",
        content: [
          {
            type: "paragraph",
            text: "A baseline is intended to establish the reference point against which delivery performance can be evaluated. In practice, baselines can gradually change as assumptions are revised, scope is informally adjusted, and exceptions become normalized.",
          },
          {
            type: "paragraph",
            text: "Once the reference point becomes fluid, accountability becomes difficult because the organization can no longer agree on what success was originally supposed to mean.",
          },
          {
            type: "quote",
            quote:
              "If the baseline moves every time performance is questioned, it stops being a baseline.",
            attribution: "LMCS Governance Review",
          },
        ],
      },
      {
        heading: "Building an Immutable Reference",
        content: [
          {
            type: "paragraph",
            text: "An effective baseline should have clear ownership, explicit assumptions, controlled change mechanisms, and a documented rationale for material revisions.",
          },
          {
            type: "paragraph",
            text: "This creates a stable reference from which leadership can distinguish legitimate change from performance degradation disguised as change.",
          },
          {
            type: "image",
            src: "/images/insight/6insight.png",
            caption:
              "Fig 1: A controlled baseline provides a stable reference for delivery assessment.",
          },
        ],
      },
    ],
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
    body: [
      {
        heading: "Completion Is Not Operational Readiness",
        content: [
          {
            type: "paragraph",
            text: "Projects often treat technical completion as the natural endpoint of delivery. Operational readiness, however, requires more than the completion of planned development work.",
          },
          {
            type: "paragraph",
            text: "People, processes, support structures, training, documentation, environments, and operational ownership must all be capable of supporting the new capability under real conditions.",
          },
          {
            type: "quote",
            quote:
              "The final mile of delivery is often where technical completion meets operational reality.",
            attribution: "LMCS Readiness Assessment",
          },
        ],
      },
      {
        heading: "The Handover Risk",
        content: [
          {
            type: "paragraph",
            text: "Handover periods create a temporary concentration of risk. Delivery teams are preparing to exit while operational teams are preparing to assume responsibility.",
          },
          {
            type: "paragraph",
            text: "Without clear readiness criteria and accountable ownership, unresolved issues can move silently from the project into operations.",
          },
          {
            type: "image",
            src: "/images/insight/1insight.png",
            caption:
              "Fig 1: The transition from project completion to operational capability.",
          },
        ],
      },
    ],
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
    body: [
      {
        heading: "Small Changes Create Large Consequences",
        content: [
          {
            type: "paragraph",
            text: "Large project failures rarely originate from one dramatic decision. More commonly, a series of small deviations accumulates until the initiative is operating under conditions materially different from the original plan.",
          },
          {
            type: "paragraph",
            text: "Minor scope adjustments, deferred controls, incomplete requirements, and informal commitments can each appear manageable in isolation.",
          },
          {
            type: "quote",
            quote:
              "The significance of a deviation is not always visible when the deviation occurs.",
            attribution: "LMCS Analysis",
          },
        ],
      },
      {
        heading: "Tracking the Pattern",
        content: [
          {
            type: "paragraph",
            text: "The objective is not to prevent every change. Change is inevitable in complex delivery. The objective is to understand whether individual changes are accumulating into a new operating condition.",
          },
          {
            type: "paragraph",
            text: "Pattern recognition allows leadership to intervene before the combined effect of small deviations becomes irreversible.",
          },
          {
            type: "image",
            src: "/images/insight/2insight.png",
            caption:
              "Fig 1: Individual micro-deviations can combine into material delivery drift.",
          },
        ],
      },
    ],
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
    body: [
      {
        heading: "When Information Changes as It Moves Upward",
        content: [
          {
            type: "paragraph",
            text: "Information rarely moves through an organization without interpretation. Each layer can add context, simplify complexity, or unintentionally soften uncomfortable findings.",
          },
          {
            type: "paragraph",
            text: "By the time information reaches an executive decision-maker, the original condition may have been transformed into a narrative designed to be easier to communicate.",
          },
          {
            type: "quote",
            quote:
              "Transparency is not simply access to information. It is preservation of meaning as information moves through the organization.",
            attribution: "LMCS Governance Analysis",
          },
        ],
      },
      {
        heading: "Designing for Vertical Transparency",
        content: [
          {
            type: "paragraph",
            text: "A transparent governance architecture creates defined channels through which material risks, exceptions, and evidence can reach the appropriate decision-makers without unnecessary distortion.",
          },
          {
            type: "paragraph",
            text: "This does not require bypassing every management layer. It requires clear escalation criteria and mechanisms that preserve the original evidence when an issue becomes materially significant.",
          },
          {
            type: "image",
            src: "/images/insight/3insight.png",
            caption:
              "Fig 1: A vertical transparency model designed to preserve critical information.",
          },
        ],
      },
    ],
  },
];

export function getInsight(slug: string) {
  return INSIGHTS.find((insight) => insight.slug === slug);
}
