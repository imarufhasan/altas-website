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
  icon: IconName;
}[] = [
  {
    title: "Governance Drift",
    desc: "Decision-making forums devolve into status updates. Key decisions are bypassed, deferred, or repeatedly revisited without resolution, undermining project authority.",
    icon: "landmark",
  },
  {
    title: "Schedule Drift",
    desc: "Milestones shift incrementally. Critical path logic is abandoned in favor of concurrent execution hopes, creating a fragile schedule highly susceptible to failure.",
    icon: "clock",
  },
  {
    title: "Risk Drift",
    desc: "Severe risks are downgraded without material mitigation. The project begins accepting unacceptable levels of technical or operational exposure to maintain an illusion of progress.",
    icon: "shield-check",
  },
  {
    title: "Accountability Drift",
    desc: "When issues arise, finding the true owner becomes an investigation. 'Shared ownership' morphs into collective inaction on critical dependencies.",
    icon: "landmark",
  },
  {
    title: "Readiness Drift",
    desc: "Gates are treated as administrative hurdles rather than true quality checks. The project pushes into subsequent phases despite known foundational instability.",
    icon: "badge-check",
  },
  {
    title: "Operational Drift",
    desc: "The gap between what the project is building and what the business can actually operate widens, setting the stage for post-launch failure.",
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
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl text-cream md:text-4xl">
                What Project Drift Reveals
              </h2>

              <p className="mt-4 text-[16px] leading-relaxed text-muted">
                Drift is rarely a sudden failure; it is a gradual erosion of
                control. We identify the subtle, systemic shifts where the
                reported condition diverges from reality.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2 md:grid-cols-3">
              {REVEALS.map((item) => (
                <div
                  key={item.title}
                  tabIndex={0}
                  className="
            group relative cursor-pointer overflow-hidden
            rounded-sm border border-border bg-card
            p-6 sm:p-7
            outline-none
            transition-all duration-300 ease-out

            hover:-translate-y-1
            hover:border-gold
            hover:bg-[#1b1e1b]

            focus-visible:-translate-y-1
            focus-visible:border-gold
            focus-visible:bg-[#1b1e1b]
            focus-visible:ring-2
            focus-visible:ring-gold/30

            active:translate-y-0
            active:bg-[#24271f]
          "
                >
                  {/* Inner border */}
                  <div
                    className="
              pointer-events-none absolute inset-1
              rounded-sm border border-transparent
              transition-colors duration-300
              group-hover:border-[#34362f]
              group-focus-visible:border-[#34362f]
            "
                  />

                  {/* Top accent */}
                  <div
                    className="
              absolute left-0 top-0 h-px w-0
              bg-gold
              transition-all duration-500
              group-hover:w-full
              group-focus-visible:w-full
            "
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="
                flex h-11 w-11 items-center justify-center
                rounded-sm border border-border
                bg-bg-alt text-gold
                transition-all duration-300

                group-hover:border-gold
                group-hover:bg-[#25271f]
                group-hover:shadow-[0_0_20px_rgba(198,169,91,0.08)]

                group-focus-visible:border-gold
                group-focus-visible:bg-[#25271f]
              "
                    >
                      <Icon
                        name={item.icon}
                        className="
                  h-5 w-5
                  transition-transform duration-300
                  group-hover:scale-110
                  group-focus-visible:scale-110
                "
                        strokeWidth={1.7}
                      />
                    </div>

                    {/* Title */}
                    <h3
                      className="
                mt-6 font-serif text-xl text-cream
                transition-colors duration-300
                group-hover:text-gold
                group-focus-visible:text-gold
              "
                    >
                      {item.title}
                    </h3>

                    {/* Divider */}
                    <div
                      className="
                mt-4 h-px w-8 bg-gold/60
                transition-all duration-300
                group-hover:w-14
                group-focus-visible:w-14
              "
                    />

                    {/* Description */}
                    <p className="mt-4 text-[15px] leading-relaxed text-muted">
                      {item.desc}
                    </p>

                    {/* Interactive indicator */}
                    <div
                      className="
                mt-6 flex items-center gap-2
                text-[10px] font-semibold uppercase
                tracking-[0.14em] text-muted

                opacity-0
                transition-all duration-300

                group-hover:translate-x-1
                group-hover:opacity-100

                group-focus-visible:translate-x-1
                group-focus-visible:opacity-100
              "
                    >
                      <span>Examine Indicator</span>
                      <span className="text-gold">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
        <Container>
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
        <Container>
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
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gold">
                The Value of Early Detection
              </p>

              <h2 className="mt-3 font-serif text-3xl text-cream md:text-4xl">
                Identify Drift Early.
              </h2>

              <p className="mt-5 text-[16px] leading-relaxed text-muted">
                Projects do not fail overnight; they drift into failure.
                Identifying deterioration earlier can provide leadership with
                better visibility before recovery becomes the operating model.
              </p>

              <p className="mt-4 text-[16px] leading-relaxed text-muted">
                Our assessments zero in on the structural integrity of the
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
