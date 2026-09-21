import {
  CalendarDays,
  ClipboardCheck,
  FileSearch,
  Gavel,
  Landmark,
  LayoutGrid,
  ListChecks,
  Rocket,
  ShieldCheck,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";

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

const DOMAINS: { title: string; desc: string; icon: LucideIcon }[] = [
  {
    title: "Governance",
    desc: "Interrogating whether escalation paths are clear, decisions are enforced, or the organization is substituting consensus for authoritative leadership during disruption.",
    icon: Landmark,
  },
  {
    title: "Schedule Readiness",
    desc: "Examining critical path validity beyond Gantt charts—testing sequence logic, resource actuals, and latent dependency compression.",
    icon: CalendarDays,
  },
  {
    title: "Risk & Constraints",
    desc: "Forensic analysis of unmitigated exposure and systemic bottlenecks, translating abstract risk registers into verified temporal and capital impacts.",
    icon: TriangleAlert,
  },
  {
    title: "Accountability",
    desc: "Verifying whether nominal owners possess both the formal mandate and operational capability to enforce delivery across critical paths.",
    icon: ShieldCheck,
  },
  {
    title: "Testing Readiness",
    desc: "Validating quality assurance frameworks against production realities, ensuring verification environments reflect operational conditions rather than synthetic optimism.",
    icon: ClipboardCheck,
  },
  {
    title: "Operational Readiness",
    desc: "Evaluating the operational absorption threshold—verifying that turnover documentation, training, and steady-state governance ensure sustainable adoption.",
    icon: Rocket,
  },
];

const EVIDENCE_STEPS = [
  "Evidence",
  "Review",
  "Acceptance",
  "Readiness",
  "Advancement",
];

const LIFECYCLE: {
  n: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}[] = [
  {
    n: "01",
    title: "Condition",
    desc: "Establish empirical project reality",
    icon: LayoutGrid,
  },
  {
    n: "02",
    title: "Evidence",
    desc: "Audit artifacts beyond dashboards",
    icon: FileSearch,
  },
  {
    n: "03",
    title: "Readiness",
    desc: "Evaluate operational gate criteria",
    icon: ListChecks,
  },
  {
    n: "04",
    title: "Accountability",
    desc: "Pinpoint critical path ownership",
    icon: ShieldCheck,
  },
  {
    n: "05",
    title: "Decision",
    desc: "Provide executive go/no-go basis",
    icon: Gavel,
  },
];

export default function HowLmcsWorksPage() {
  return (
    <>
      <PageHero
        label="How LMCS Works"
        heading="A Structured Approach to Project Condition."
        description="LMCS uses a structured assessment approach to understand project condition through governance, readiness, evidence, accountability, risks and constraints, testing, and operational readiness."
        buttonLabel="DISCUSS A PROJECT ASSESSMENT"
        image="/images/heroes/how-lmcs-works2.png"
      />

      {/* ───────────── Observation + Steps ───────────── */}
      <section className="border-b border-border bg-bg py-20 md:py-24 lg:py-32">
        <Container wide>
          <Reveal>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <h2 className="max-w-lg font-serif text-4xl leading-[1.15] text-cream/90 md:text-5xl">
                From Observation to Executive Understanding.
              </h2>

              <p className="self-start border-l border-gold/70 pl-5 text-[17px] leading-relaxed text-[#cfccc2] sm:pl-6 sm:text-lg lg:text-xl lg:leading-[1.6]">
                We examine the evidence behind project condition rather than
                relying on reported progress. True delivery confidence requires
                looking past the dashboard to the underlying reality.
              </p>
            </div>

            {/* Joined step cells: 1 col → 2 cols → 5 cols */}
            <div className="mt-12 grid grid-cols-1 gap-px border border-[#4a463c] bg-[#4a463c] md:grid-cols-2 lg:mt-16 xl:grid-cols-5">
              {STEPS.map((s) => (
                <div
                  key={s.n}
                  className="bg-[#0d0f0e] transition-colors duration-300 hover:bg-[#141613] md:last:col-span-2 xl:last:col-span-1"
                >
                  <StepCard number={s.n} title={s.title} description={s.desc} />
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ───────────── Six Domains ───────────── */}
      <section className="border-b border-border bg-bg-alt py-20 md:py-24 lg:py-32">
        <Container wide>
          <Reveal>
            <SectionLabel>Methodological Lens</SectionLabel>

            <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.12] text-cream md:text-5xl">
              The Six Domains: How We Examine Each One.
            </h2>

            <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted sm:text-[17px]">
              Across every engagement, LMCS evaluates the same six canonical
              domains. On this page, we examine the investigative questions and
              empirical verification applied to each.
            </p>

            {/* 1 col → 2 cols → 3 cols, cells share 1px dividers */}
            <div className="mt-12 grid grid-cols-1 gap-px border border-[#3b3d35] bg-[#3b3d35] sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {DOMAINS.map((d) => {
                const DomainIcon = d.icon;

                return (
                  <article
                    key={d.title}
                    className="bg-[#282826] p-8 transition-colors duration-300 hover:bg-[#2e2e2b] sm:p-10 xl:p-12"
                  >
                    <DomainIcon
                      className="h-6 w-6 text-gold"
                      strokeWidth={1.6}
                      aria-hidden
                    />

                    <h3 className="mt-8 font-serif text-[26px] leading-tight text-cream sm:text-[28px]">
                      {d.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-[1.65] text-muted">
                      {d.desc}
                    </p>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ───────────── Evidence + Lifecycle ───────────── */}
      <section className="border-b border-border bg-bg py-20 md:py-24 lg:py-32">
        <Container wide>
          <Reveal>
            <div className="grid grid-cols-1 gap-12 xl:grid-cols-2 xl:items-center xl:gap-16">
              <div>
                <h2 className="font-serif text-4xl leading-[1.15] text-cream sm:text-5xl lg:text-[64px]">
                  Evidence Before Advancement.
                </h2>

                <p className="mt-8 max-w-xl text-[17px] leading-relaxed text-muted sm:text-lg">
                  True readiness is not declared; it is proven. Advancement
                  through project phases must be supported by empirical
                  evidence, rigorous review, formal acceptance, clear ownership,
                  and the fulfillment of prerequisite conditions.
                </p>
              </div>

              {/* Progression principles */}
              <div className="border border-border bg-[#151714] p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                  <SectionLabel>Progression Principles</SectionLabel>

                  <p className="text-right text-[10px] uppercase tracking-[0.12em] text-muted">
                    Phase Gate Criteria
                  </p>
                </div>

                <ol className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:items-center sm:gap-0">
                  {EVIDENCE_STEPS.map((label, i) => {
                    const isFirst = i === 0;
                    const isLast = i === EVIDENCE_STEPS.length - 1;

                    return (
                      <li
                        key={label}
                        className="flex items-center sm:flex-1 sm:last:flex-none"
                      >
                        <div className="flex w-full flex-col items-center gap-2 bg-[#1a1c1a] px-3 py-2 text-center sm:w-auto">
                          <span
                            aria-hidden
                            className={`h-2 w-2 ${
                              isFirst
                                ? "bg-gold"
                                : isLast
                                  ? "bg-cream"
                                  : "border border-cream"
                            }`}
                          />

                          <span
                            className={`text-[10px] uppercase tracking-[0.1em] ${
                              isLast ? "text-cream" : "text-muted"
                            }`}
                          >
                            {label}
                          </span>
                        </div>

                        {!isLast && (
                          <span
                            aria-hidden
                            className="hidden h-px min-w-2 flex-1 bg-[#3b3d35] sm:block"
                          />
                        )}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>

            {/* Assessment lifecycle */}
            <div className="mt-16 border border-border bg-bg-alt p-6 sm:p-10 lg:mt-24 lg:p-14">
              <div className="flex flex-col gap-5 border-b border-border pb-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <SectionLabel>The Assessment Lifecycle</SectionLabel>

                  <p className="mt-2 text-[14px] leading-relaxed text-muted">
                    Structured framework from baseline observation to executive
                    certainty
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[10px] uppercase tracking-[0.12em] text-muted">
                    Terminal Synthesis:
                  </span>

                  <span className="inline-flex items-center gap-2 border border-cream/70 px-4 py-2.5 text-[12px] uppercase tracking-[0.06em] text-gold">
                    <span aria-hidden className="h-1.5 w-1.5 bg-gold" />
                    Delivery Confidence
                  </span>
                </div>
              </div>

              <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {LIFECYCLE.map((s, i) => {
                  const StepIcon = s.icon;
                  const isLast = i === LIFECYCLE.length - 1;

                  return (
                    <li
                      key={s.n}
                      className="border border-[#3d3d35] bg-bg p-5 transition-colors duration-300 hover:border-gold/70"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] tracking-[0.12em] text-gold">
                          {s.n}
                        </span>

                        <StepIcon
                          className={`h-4 w-4 ${
                            isLast ? "text-gold" : "text-muted"
                          }`}
                          strokeWidth={1.6}
                          aria-hidden
                        />
                      </div>

                      <h3 className="mt-6 font-serif text-[22px] leading-tight text-cream">
                        {s.title}
                      </h3>

                      <p className="mt-2 text-[13px] leading-relaxed text-muted">
                        {s.desc}
                      </p>
                    </li>
                  );
                })}
              </ol>
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
