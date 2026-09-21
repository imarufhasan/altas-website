import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

/**
 * Figma tokens used on this page
 * bg #121411 · card / alt #1A1C19 · border #4D4639
 * gold #E8C177 · cream #E2E3DE · muted #D1C5B4
 */

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
        variant="large"
        buttonArrow
        label="Project Assessment"
        heading={
          <>
            Six Domains Examined Against Evidence.
            <br />
            The Independent Condition Report &amp; Evidence Register.
          </>
        }
        description="LMCS delivers an unvarnished Project Condition Report and comprehensive Evidence Register. Through an independent, rigorous examination of governance, schedule logic, constraints, accountability, testing, and operational readiness, we provide leadership with the empirical reality of their mission-critical initiative before capital and executive commitments advance."
        buttonLabel="SCHEDULE AN EXECUTIVE DISCUSSION"
        buttonHref="/contact"
        image="/images/heroes/project_assessment.png"
      />

      {/* Assessment Domains */}
      <section className="border-b border-[#4D4639] bg-[#121411] py-16 sm:py-20 lg:py-30">
        <Container wide>
          <Reveal>
            <h2 className="font-serif text-[36px] leading-[1.1] text-[#E2E3DE] sm:text-5xl lg:text-[64px]">
              Assessment Domains
            </h2>

            <div className="mt-4 h-px w-24 bg-[#E8C177]" />

            <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:mt-16 md:grid-cols-2 md:gap-y-16 lg:gap-y-24">
              {DOMAINS.map((d) => (
                <article
                  key={d.title}
                  className="group relative border-l border-[#4D4639] py-5 pl-8 sm:pl-12 lg:pl-16"
                >
                  {/* Gold accent on the left border */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-px top-0 h-16 w-1 bg-[#E8C177] transition-[height] duration-300 ease-out group-hover:h-full"
                  />

                  <h3 className="font-serif text-[24px] uppercase leading-none tracking-[0.1em] text-[#E8C177] sm:text-[28px] lg:text-[32px]">
                    {d.title}
                  </h3>

                  <p className="mt-5 text-[15px] leading-[1.65] text-[#D1C5B4] sm:text-[16px]">
                    {d.desc}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Assessment Evidence */}
      <section className="border-b border-[#4D4639] bg-[#1A1C19] py-16 sm:py-20 lg:py-30">
        <Container wide>
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="font-serif text-[32px] leading-[1.1] text-[#E2E3DE] sm:text-4xl lg:text-5xl">
                Assessment Evidence
              </h2>

              <p className="mt-4 text-[16px] leading-[1.65] text-[#D1C5B4] sm:text-[17px]">
                Rigorous evidentiary requirements across all domains ensure
                objective evaluation rather than subjective assurance.
              </p>
            </div>

            {/* 1px gaps over the border colour = the thin grid lines */}
            <div className="mt-12 grid grid-cols-1 gap-px bg-[#4D4639] sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
              {EVIDENCE.map((group) => (
                <div key={group.title} className="bg-[#1A1C19] p-6 sm:p-8">
                  <h3 className="text-[14px] font-semibold uppercase leading-4 tracking-[0.05em] text-[#E8C177]">
                    {group.title}
                  </h3>

                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex min-h-6 items-center gap-2 text-[15px] leading-6 text-[#D1C5B4]"
                      >
                        <span
                          aria-hidden="true"
                          className="relative top-[5px] h-2.5 w-2.5 shrink-0 border border-[#E8C177]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Assessment Phases */}
      <section className="border-b border-[#4D4639] bg-[#121411] py-16 sm:py-20 lg:py-30">
        <Container wide>
          <Reveal>
            <div className="max-w-4xl">
              <h2 className="font-serif text-[32px] leading-[1.1] text-[#E2E3DE] sm:text-4xl lg:text-5xl">
                Project Assessment and Delivery Confidence
              </h2>

              <p className="mt-4 text-[16px] leading-[1.65] text-[#D1C5B4] sm:text-[17px]">
                The direct correlation between empirical assessment and
                actionable confidence.
              </p>
            </div>

            <div className="relative mt-10 py-2 sm:mt-16 xl:py-12">
              {/* Connector line running behind the boxes */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-1/2 hidden h-px bg-[#4D4639] xl:block"
              />

              <ol className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-[repeat(5,minmax(0,1fr))_minmax(0,1.2fr)] xl:gap-8">
                {PHASES.map((p) => (
                  <li
                    key={p.label}
                    className={`flex min-h-[98px] flex-col items-center justify-center border bg-[#121411] px-3 text-center transition-colors duration-300 ${
                      p.active
                        ? "border-[#E8C177]"
                        : "border-[#4D4639] hover:border-[#E8C177]/60"
                    }`}
                  >
                    <span className="text-[12px] font-medium uppercase leading-4 tracking-[0.14em] text-[#E8C177]">
                      {p.label}
                    </span>

                    <span
                      className={`mt-2.5 text-[14px] font-medium leading-5 ${
                        p.active ? "text-[#E8C177]" : "text-[#E2E3DE]"
                      }`}
                    >
                      {p.title}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </Container>
      </section>

      <Reveal>
        <CTASection
          variant="large"
          title="Start With the Project Condition."
          description="Engage LMCS for a rigorous, independent assessment of your most critical initiatives. Replace assumption with evidence."
        />
      </Reveal>
    </>
  );
}
