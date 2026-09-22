import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ProjectDriftInteractive from "./ProjectDriftInteractive";
import Icon, { type IconName } from "@/components/Icon";
import Reveal from "@/components/Reveal";

const REVEALS: {
  title: string;
  desc: string;
  icon: IconName;
}[] = [
  {
    title: "Schedule Pressure",
    desc: "Compression of timelines masking an inability to execute critical path activities predictably.",
    icon: "clock",
  },
  {
    title: "Unresolved Conditions",
    desc: "Accumulation of technical or operational debt that is acknowledged but persistently deferred.",
    icon: "triangle-alert",
  },
  {
    title: "Accountability Gaps",
    desc: "Ambiguity in ownership where responsibilities are documented but not actively managed or enforced.",
    icon: "landmark",
  },
  {
    title: "Readiness Gaps",
    desc: "Proceeding through gates when underlying prerequisites, environments, or teams are demonstrably unprepared.",
    icon: "badge-check",
  },
  {
    title: "Risk and Constraints",
    desc: "Normalization of high-risk profiles where mitigation strategies exist only as administrative artifacts.",
    icon: "shield-check",
  },
  {
    title: "Downstream Dependencies",
    desc: "Failing to integrate or sequence critical handoffs, creating cascading delays across connected workstreams.",
    icon: "route-square",
  },
];

const REPORTED: {
  title: string;
  desc: string;
  icon: IconName;
}[] = [
  {
    title: "Reported Progress",
    desc: "Status reports indicating green or on-track delivery.",
    icon: "clock",
  },
  {
    title: "Expected Readiness",
    desc: "Assumptions that prior phases have met all quality gates.",
    icon: "badge-check",
  },
  {
    title: "Planned Completion",
    desc: "Optimistic projections based on uninterrupted execution.",
    icon: "route-square",
  },
  {
    title: "Assumed Accountability",
    desc: "Names in a matrix without validated operational control.",
    icon: "landmark",
  },
];

const EVIDENCE_SIDE: {
  title: string;
  desc: string;
  icon: IconName;
}[] = [
  {
    title: "Available Evidence",
    desc: "Tangible artifacts proving actual build vs stated progress.",
    icon: "shield-check",
  },
  {
    title: "Actual Readiness",
    desc: "Verified state of environments, data, and user capability.",
    icon: "badge-check",
  },
  {
    title: "Unresolved Conditions",
    desc: "Critical defects and debt actively hindering completion.",
    icon: "triangle-alert",
  },
  {
    title: "Confirmed Ownership",
    desc: "Individuals demonstrating active management of outcomes.",
    icon: "landmark",
  },
];

const INDICATORS: {
  title: string;
  desc: string;
  manifestation: string;
  icon: IconName;
}[] = [
  {
    title: "Governance Drift",
    desc: "Decision-making forums devolve into status updates. Key decisions are bypassed, deferred, or repeatedly revisited without resolution, undermining project authority.",
    manifestation:
      "Decision avoidance and authority erosion masking lack of institutional alignment.",
    icon: "landmark",
  },
  {
    title: "Schedule Drift",
    desc: "Milestones shift incrementally while critical path logic is abandoned in favor of optimistic concurrency, creating a fragile schedule highly susceptible to failure.",
    manifestation:
      "Schedule pressure and timeline compression concealing inability to execute critical path activities.",
    icon: "clock",
  },
  {
    title: "Risk Drift",
    desc: "Severe risks are downgraded without material mitigation. The project normalizes high-risk profiles where mitigation strategies exist only as administrative artifacts.",
    manifestation:
      "Normalization of critical exposure and acceptance of unmitigated technical vulnerabilities.",
    icon: "shield-check",
  },
  {
    title: "Accountability Drift",
    desc: "When issues arise, identifying operational ownership becomes an investigation. 'Shared ownership' morphs into collective inaction on critical delivery mandates.",
    manifestation:
      "Ambiguity in ownership where responsibilities are documented but not actively enforced or led.",
    icon: "landmark",
  },
  {
    title: "Readiness Drift",
    desc: "Gates are treated as administrative formalities rather than true quality checks. The project pushes into subsequent phases despite known foundational instability.",
    manifestation:
      "Gate bypassing when underlying prerequisites, environments, or teams are demonstrably unprepared.",
    icon: "badge-check",
  },
  {
    title: "Operational Drift",
    desc: "The gap between what the project is delivering and what the organization can reliably operate widens, compounding technical debt and downstream friction.",
    manifestation:
      "Accumulation of unresolved debt and downstream dependency friction across connected workstreams.",
    icon: "route-square",
  },
];

export default function ProjectDriftPage() {
  return (
    <>
      <PageHero
        label="Project Drift"
        heading="See Drift Before It Becomes the Operating Model."
        description="Project Drift identifies indicators that the actual condition of a project is moving away from expected progress, readiness, accountability, or delivery requirements."
        buttonLabel="Discuss Project Drift"
        image="/images/heroes/project_drift.png"
      />

      {/* What drift reveals */}
      <section className="border-b border-border bg-bg py-20 sm:py-24">
        <Container wide>
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl leading-[1.15] text-cream sm:text-4xl lg:text-[42px]">
                What Project Drift Reveals
              </h2>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-muted sm:text-[16px] sm:leading-8">
                Drift is rarely a sudden failure; it is a gradual erosion of
                control. We identify the subtle, systemic shifts where the
                reported condition diverges from reality.
              </p>
            </div>

            {/* Unified bordered grid — matches the design's single
                bordered table rather than separated gapped cards */}
            <div className="mt-12 overflow-hidden rounded-sm border border-border sm:mt-14">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {REVEALS.map((item, i) => {
                  const col = i % 3;
                  const isLastCol = col === 2;
                  const isLastRow = i >= 3;
                  const isLastColSm = i % 2 === 1;
                  const isLastRowSm = i >= 4;

                  return (
                    <div
                      key={item.title}
                      className={`
                        group relative
                        border-border bg-card
                        p-6 transition-colors duration-300 sm:p-7
                        hover:bg-[#1b1e1b]

                        ${!isLastRowSm ? "border-b" : "sm:border-b-0"}
                        ${!isLastRow ? "" : "md:border-b-0"}
                        ${!isLastColSm ? "sm:border-r" : "sm:border-r-0"}
                        ${!isLastCol ? "md:border-r" : "md:border-r-0"}
                      `}
                    >
                      <Icon
                        name={item.icon}
                        className="h-5 w-5 text-gold"
                        strokeWidth={1.6}
                      />

                      <h3 className="mt-4 font-serif text-xl text-cream transition-colors duration-300 group-hover:text-gold">
                        {item.title}
                      </h3>

                      <p className="mt-2.5 text-[14px] leading-relaxed text-muted">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Accent bar beneath the grid */}
            <div className="h-[3px] w-full bg-[#4d4639]" />
          </Reveal>
        </Container>
      </section>

      <section
        className="
    border-b
    border-border
    bg-bg-alt
    py-20
    sm:py-24
    lg:py-28
  "
      >
        <Container wide>
          <Reveal>
            <div className="text-center">
              <h2
                className="
          font-serif
          text-3xl
          leading-[1.15]
          text-cream
          md:text-4xl
          lg:text-[42px]
        "
              >
                Reported Progress vs Evidence-Supported Condition
              </h2>

              <div className="mx-auto mt-5 h-px w-12 bg-gold/60" />
            </div>

            <ProjectDriftInteractive
              reported={REPORTED}
              evidence={EVIDENCE_SIDE}
            />
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border bg-bg py-20 sm:py-24">
        <Container wide>
          <Reveal>
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl leading-tight text-cream md:text-4xl">
                Indicators Across the Project Condition
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-x-12 sm:mt-14 md:grid-cols-2">
              {INDICATORS.map((item, index) => (
                <article
                  key={item.title}
                  className={`
            group relative py-7
            ${index < 4 ? "border-b border-border" : ""}
            ${index === 4 ? "md:border-b-0" : ""}
            ${index === 5 ? "md:border-b-0" : ""}
            md:py-8
          `}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className="
                mt-0.5 flex h-8 w-8 shrink-0
                items-center justify-center
                text-gold
                transition-transform duration-300 ease-out
                group-hover:-translate-y-px
              "
                    >
                      <Icon
                        name={item.icon}
                        className="h-4.25 w-4.25"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <h3
                        className="
                  font-serif text-xl text-cream
                  transition-colors duration-300
                  group-hover:text-gold
                "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                  mt-3 max-w-xl
                  text-[14px] leading-[1.75]
                  text-muted
                "
                      >
                        {item.desc}
                      </p>

                      {/* Primary Manifestation */}
                      <div className="mt-5 max-w-xl border-t border-border pt-4">
                        <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-gold">
                          Primary Manifestation
                        </p>
                        <p className="mt-2 text-[14px] leading-[1.75] text-muted">
                          {item.manifestation}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Early detection */}
      <section className="border-b border-border bg-bg-alt py-20 sm:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <div
              tabIndex={0}
              className="
              cursor-default rounded-sm p-2
              outline-none
              transition-all duration-300
              focus-visible:bg-[#171914]
              focus-visible:ring-1
              focus-visible:ring-gold/30
              sm:p-4
            "
            >
              <p className="text-[12px] text-center font-semibold uppercase tracking-[0.14em] text-gold">
                The Value of Early Detection
              </p>

              <h2 className="mt-3 font-serif text-center text-3xl text-cream md:text-4xl">
                Identify Drift Early.
              </h2>

              <p className="mt-5 text-[16px] text-center leading-relaxed text-muted">
                Projects do not fail overnight; they drift into failure.
                Identifying deterioration earlier can provide leadership with
                better visibility before recovery becomes the operating model.
              </p>

              <p className="mt-4 text-[16px] text-center leading-relaxed text-muted">
                Our assessment zeroes in on the structural integrity of the
                project condition, stripping away optimism to reveal the raw,
                evidence-supported reality. This clarity is a prerequisite for
                authoritative intervention.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <Reveal>
        <CTASection
          title="Understand Where the Project Is Drifting."
          description="Identifying deterioration earlier can provide leadership with better visibility before recovery becomes the operating model."
        />
      </Reveal>
    </>
  );
}
