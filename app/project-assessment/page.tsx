import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

const DOMAINS = [
  {
    title: "Governance",
    desc: "Assess governance structures, oversight, decision-making, controls, and accountability required to maintain project direction.",
  },
  {
    title: "Schedule Readiness",
    desc: "Review schedule credibility, dependencies, prerequisites, timing, and conditions required for advancement.",
  },
  {
    title: "Risk & Constraints",
    desc: "Identify risks, constraints, unresolved conditions, and downstream effects that may influence delivery.",
  },
  {
    title: "Accountability",
    desc: "Review ownership, responsibility, decision-making, evidence, and clarity of accountability.",
  },
  {
    title: "Testing Readiness",
    desc: "Assess testing readiness, required evidence, review, acceptance, and conditions before advancement.",
  },
  {
    title: "Operational Readiness",
    desc: "Review preparation for operational transition, resources, procedures, responsibilities, and supporting conditions.",
  },
];

const EVIDENCE = [
  {
    title: "Governance",
    items: ["Charter Documentation", "Decision Logs", "Escalation Pathways"],
  },
  {
    title: "Schedule",
    items: [
      "Baseline Validations",
      "Critical Path Analysis",
      "Dependency Matrices",
    ],
  },
  {
    title: "Risk",
    items: ["Mitigation Strategies", "Contingency Plans", "Impact Assessments"],
  },
  {
    title: "Accountability",
    items: ["RACI Matrices", "Ownership Sign-offs", "Performance Metrics"],
  },
  {
    title: "Testing",
    items: [
      "Test Coverage Reports",
      "Defect Resolution Logs",
      "Acceptance Criteria",
    ],
  },
  {
    title: "Operational",
    items: [
      "Transition Plans",
      "Resource Allocations",
      "Training Documentation",
    ],
  },
];

const PHASES = [
  { label: "Phase 1", title: "Assessment" },
  { label: "Phase 2", title: "Evidence" },
  { label: "Phase 3", title: "Readiness" },
  { label: "Phase 4", title: "Accountability" },
  { label: "Phase 5", title: "Decision" },
  { label: "Outcome", title: "Delivery Confidence", active: true },
];

export default function ProjectAssessmentPage() {
  return (
    <>
      <PageHero
        label="Project Assessment"
        heading="Understand the Condition Beneath the Commitment."
        description="LMCS assesses project condition through a structured review of governance, schedule readiness, risks and constraints, accountability, testing readiness, and operational readiness."
        buttonLabel="Schedule an Executive Discussion"
        buttonHref="/contact"
        image="/images/heroes/project_assessment.png"
      />

      {/* Assessment Domains */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl text-cream md:text-4xl">
              Assessment Domains
            </h2>

            <div className="mt-3 h-px w-10 bg-gold transition-all duration-300 hover:w-16" />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {DOMAINS.map((d) => (
              <button
                key={d.title}
                type="button"
                className="
                  group relative min-h-[190px]
                  cursor-pointer overflow-hidden
                  rounded-sm border border-border
                  bg-card p-6 text-left
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:border-gold
                  hover:bg-[#20231f]
                  hover:shadow-[0_10px_30px_rgba(0,0,0,0.18)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-gold
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-bg
                  active:translate-y-0
                  sm:p-7
                "
              >
                {/* Top accent */}
                <span
                  aria-hidden="true"
                  className="
                    absolute left-0 top-0 h-full w-0.5
                    bg-gold opacity-70
                    transition-all duration-300
                    group-hover:w-1
                    group-hover:opacity-100
                  "
                />

                <div className="flex items-start justify-between gap-4">
                  <h3
                    className="
                      text-[12px] font-semibold uppercase
                      tracking-[0.14em] text-gold
                      transition-colors duration-300
                      group-hover:text-gold-light
                    "
                  >
                    {d.title}
                  </h3>

                  <span
                    aria-hidden="true"
                    className="
                      shrink-0 text-lg text-gold/50
                      transition-all duration-300
                      group-hover:translate-x-1
                      group-hover:text-gold
                    "
                  >
                    →
                  </span>
                </div>

                <p
                  className="
                    mt-4 text-[14px] leading-relaxed text-muted
                    transition-colors duration-300
                    group-hover:text-[#cbc8bd]
                    sm:text-[15px]
                  "
                >
                  {d.desc}
                </p>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Evidence Checklist */}
      <section className="border-b border-border bg-bg-alt py-20 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl text-cream md:text-4xl">
              Assessment Evidence
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-[16px]">
              Rigorous evidentiary requirements across all domains ensure
              objective evaluation rather than subjective assurance.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-10">
            {EVIDENCE.map((group) => (
              <div
                key={group.title}
                className="
                  rounded-sm border border-transparent
                  p-4 -m-4
                  transition-all duration-300
                  hover:border-border
                  hover:bg-[#171914]
                "
              >
                <p
                  className="
                    text-[12px] font-semibold uppercase
                    tracking-[0.14em] text-gold
                  "
                >
                  {group.title}
                </p>

                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        className="
                          group flex min-h-10 w-full
                          cursor-pointer items-center gap-3
                          rounded-sm px-2 py-2
                          text-left text-[14px] text-cream
                          transition-all duration-200
                          hover:bg-[#242720]
                          hover:text-gold
                          focus-visible:outline-none
                          focus-visible:ring-1
                          focus-visible:ring-gold
                          active:bg-[#2a2d26]
                        "
                      >
                        <span
                          aria-hidden="true"
                          className="
                            flex h-3.5 w-3.5 shrink-0
                            items-center justify-center
                            rounded-xs border border-muted
                            transition-all duration-200
                            group-hover:border-gold
                            group-hover:bg-gold
                          "
                        >
                          <span
                            className="
                              h-1.5 w-1.5 rounded-full
                              bg-[#171914]
                              opacity-0
                              transition-opacity duration-200
                              group-hover:opacity-100
                            "
                          />
                        </span>

                        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                          {item}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Assessment Phases */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl text-cream md:text-4xl">
              Project Assessment and Delivery Confidence
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-[16px]">
              The direct correlation between empirical assessment and actionable
              confidence.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {PHASES.map((p, index) => (
              <button
                key={p.label}
                type="button"
                className={`
                  group relative
                  min-h-[105px]
                  cursor-pointer
                  rounded-sm border
                  px-5 py-5 text-left
                  transition-all duration-300 ease-out
                  hover:-translate-y-1
                  hover:shadow-[0_10px_25px_rgba(0,0,0,0.16)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-gold
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-bg
                  active:translate-y-0
                  ${
                    p.active
                      ? "border-gold bg-[#1c1d18]"
                      : "border-border bg-card hover:border-gold hover:bg-[#1c1f1a]"
                  }
                `}
              >
                {/* Phase number */}
                <span
                  className={`
                    absolute right-4 top-4
                    text-[10px] font-semibold
                    tracking-[0.12em]
                    ${
                      p.active
                        ? "text-gold"
                        : "text-muted/50 group-hover:text-gold"
                    }
                  `}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p
                  className={`
                    text-[10px] uppercase tracking-[0.14em]
                    transition-colors duration-300
                    ${
                      p.active
                        ? "text-gold"
                        : "text-muted group-hover:text-gold"
                    }
                  `}
                >
                  {p.label}
                </p>

                <p
                  className={`
                    mt-2 text-[15px] font-semibold
                    transition-colors duration-300
                    ${
                      p.active
                        ? "text-gold"
                        : "text-cream group-hover:text-gold"
                    }
                  `}
                >
                  {p.title}
                </p>

                {/* Bottom progress line */}
                <span
                  aria-hidden="true"
                  className={`
                    absolute bottom-0 left-0 h-px
                    bg-gold transition-all duration-500
                    ${p.active ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </button>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Start With the Project Condition."
        description="Engage LMCS for a rigorous, independent assessment of your most critical initiatives. Replace assumption with evidence."
      />
    </>
  );
}
