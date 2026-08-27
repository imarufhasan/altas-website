import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import StepCard from "@/components/StepCard";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

const STEPS = [
  {
    n: "01",
    title: "Assess",
    desc: "Understand the current condition and available evidence.",
  },
  {
    n: "02",
    title: "Review",
    desc: "Examine governance, schedule readiness, risks, accountability, testing, and operational readiness.",
  },
  {
    n: "03",
    title: "Identify",
    desc: "Identify Project Drift indicators, unresolved conditions, constraints, and accountability gaps.",
  },
  {
    n: "04",
    title: "Evaluate",
    desc: "Evaluate readiness and conditions required before advancement.",
  },
  {
    n: "05",
    title: "Inform",
    desc: "Provide leadership with a clearer basis for decisions and Delivery Confidence.",
  },
];

const DOMAINS = [
  {
    title: "Governance",
    desc: "Evaluating the structures, processes, and authorities that direct and control the project. Ensuring decisions are made effectively and at the right level.",
  },
  {
    title: "Schedule Readiness",
    desc: "Validating the realism, critical path integrity, and resource alignment of the project timeline. Exposing hidden optimism bias.",
  },
  {
    title: "Risk & Constraints",
    desc: "Identifying unmitigated threats and systemic limitations that will impede progress, moving beyond performative risk registers.",
  },
  {
    title: "Accountability",
    desc: "Assessing clarity of roles, ownership of outcomes, and the cultural willingness to hold individuals and vendors to standard.",
  },
  {
    title: "Testing Readiness",
    desc: "Ensuring quality assurance frameworks are robust, environments are prepared, and testing strategy aligns to go-live criteria.",
  },
  {
    title: "Operational Readiness",
    desc: "Verifying the business is genuinely prepared to receive, operate, and maintain the delivered solution without disruption.",
  },
];

const EVIDENCE_STEPS = [
  "Evidence",
  "Review",
  "Acceptance",
  "Readiness",
  "Advancement",
];

const LIFECYCLE = [
  "Project Condition",
  "Assessment",
  "Evidence",
  "Readiness",
  "Accountability",
];

export default function HowLmcsWorksPage() {
  return (
    <>
      <PageHero
        label="How LMCS Works"
        heading="A Structured Approach to Project Condition."
        description="LMCS uses a structured assessment approach to understand project condition through governance, readiness, evidence, accountability, risks and constraints, testing, and operational readiness."
        buttonLabel="Discuss a Project Assessment"
        image="/images/heroes/how-lmcs-works2.png"
      />

      {/* Observation */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
              <h2 className="font-serif text-3xl leading-tight text-cream md:text-4xl">
                From Observation to Executive Understanding.
              </h2>

              <p className="border-l border-border pl-5 text-[15px] leading-relaxed text-muted sm:pl-8 sm:text-[16px]">
                We examine the evidence behind project condition rather than
                relying on reported progress. True delivery confidence requires
                looking past the dashboard to the underlying reality.
              </p>
            </div>

            {/* Steps */}
            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-5">
              {STEPS.map((s) => (
                <div key={s.n} className="group cursor-pointer" tabIndex={0}>
                  <StepCard number={s.n} title={s.title} description={s.desc} />
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Assessment domains */}
      <section className="border-b border-border bg-bg-alt py-20 md:py-24">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-serif text-3xl text-cream md:text-4xl">
                The Assessment Domains
              </h2>

              <p className="mt-5 text-[15px] leading-relaxed text-muted">
                Six areas provide a structured view of the conditions that
                influence delivery confidence.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
              {DOMAINS.map((d) => (
                <button
                  key={d.title}
                  type="button"
                  className="
                  group min-h-52.5 cursor-pointer
                  rounded-sm border border-border
                  bg-card p-6 text-left
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-gold
                  hover:bg-[#20231f]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-gold
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-bg-alt
                  active:translate-y-0
                  sm:p-7
                "
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl text-gold transition-colors group-hover:text-gold-light">
                      {d.title}
                    </h3>

                    <span
                      aria-hidden="true"
                      className="text-lg text-gold opacity-50 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                    >
                      →
                    </span>
                  </div>

                  <div className="mt-3 h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" />

                  <p className="mt-4 text-[14px] leading-relaxed text-muted sm:text-[15px]">
                    {d.desc}
                  </p>
                </button>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Evidence */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionLabel>Evidence Before Advancement</SectionLabel>

                <h2 className="mt-3 font-serif text-3xl leading-tight text-cream md:text-4xl">
                  Evidence Before Advancement.
                </h2>

                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted sm:text-[16px]">
                  True readiness is not declared; it is proven. Advancement
                  through project phases must be supported by empirical
                  evidence, rigorous review, formal acceptance, clear ownership,
                  and the fulfillment of prerequisite conditions.
                </p>
              </div>

              {/* Evidence flow */}
              <div className="rounded-sm border border-border bg-card p-5 sm:p-7">
                <div className="grid grid-cols-2 gap-5 sm:grid-cols-5 sm:gap-2">
                  {EVIDENCE_STEPS.map((label, i) => (
                    <button
                      key={label}
                      type="button"
                      className="
                      group flex cursor-pointer flex-col
                      items-center gap-2 text-center
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-gold
                      focus-visible:ring-offset-2
                      focus-visible:ring-offset-card
                      rounded-sm p-2
                    "
                    >
                      <span
                        className={`
                        h-3 w-3 rounded-full transition-all duration-300
                        ${
                          i === EVIDENCE_STEPS.length - 1
                            ? "bg-gold shadow-[0_0_0_4px_rgba(201,164,91,0.12)]"
                            : "border border-gold group-hover:bg-gold"
                        }
                      `}
                      />

                      <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-muted transition-colors group-hover:text-gold sm:text-[11px]">
                        {label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Lifecycle */}
            <div className="mt-12 rounded-sm border border-border bg-card p-6 sm:mt-14 sm:p-10">
              <SectionLabel>The Assessment Lifecycle</SectionLabel>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {LIFECYCLE.map((step, i) => (
                  <div key={step} className="flex items-center gap-2 sm:gap-3">
                    <button
                      type="button"
                      className="
                      cursor-pointer rounded-sm
                      border border-border
                      bg-bg-alt px-3 py-2
                      text-xs text-cream
                      transition-all duration-200
                      hover:border-gold
                      hover:bg-[#20231f]
                      hover:text-gold
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-gold
                    "
                    >
                      {step}
                    </button>

                    {i < LIFECYCLE.length - 1 && (
                      <span aria-hidden="true" className="text-gold">
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <button
                  type="button"
                  className="
                  cursor-pointer rounded-sm
                  border border-border
                  bg-bg-alt px-4 py-2
                  text-xs text-cream
                  transition-all duration-200
                  hover:border-gold
                  hover:bg-[#20231f]
                  hover:text-gold
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-gold
                "
                >
                  Decision
                </button>

                <span aria-hidden="true" className="text-gold">
                  →
                </span>

                <button
                  type="button"
                  className="
                  cursor-pointer rounded-sm
                  border border-gold
                  bg-bg-alt px-4 py-2
                  text-xs font-semibold text-gold
                  transition-all duration-200
                  hover:bg-gold
                  hover:text-[#171613]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-gold
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-card
                "
                >
                  Delivery Confidence
                </button>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Reveal>
        <CTASection
          title="Ready to Understand Your Project Condition?"
          description="Engage LMCS for a rigorous, independent assessment of your most critical initiatives. Replace assumption with evidence."
        />
      </Reveal>
    </>
  );
}
