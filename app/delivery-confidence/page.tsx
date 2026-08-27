import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

const CONDITIONS = [
  {
    n: "01",
    title: "Governance",
    desc: "Structured oversight mechanisms must be active, effective, and capable of enforcing decisions aligned with the strategic mandate.",
  },
  {
    n: "02",
    title: "Evidence",
    desc: "Progress and condition must be substantiated by hard data, artifacts, and verifiable metrics, not merely narrative updates.",
  },
  {
    n: "03",
    title: "Readiness",
    desc: "The organization, infrastructure, and resources must be fully prepared to receive and support the intended change.",
  },
  {
    n: "04",
    title: "Accountability",
    desc: "Clear ownership of outcomes, risks, and execution must be established, acknowledged, and enforceable at all levels.",
  },
  {
    n: "05",
    title: "Risk Awareness",
    desc: "Threats to delivery must be proactively identified, rigorously assessed, and actively managed with tangible mitigations.",
  },
  {
    n: "06",
    title: "Testing",
    desc: "Validation processes must be exhaustive, realistic, and directly tied to operational requirements to prevent post-launch failure.",
  },
];

const FLOW = [
  "Governance",
  "Evidence",
  "Readiness",
  "Accountability",
  "Risk Awareness",
  "Testing",
];

const CHECKLIST = [
  {
    title: "Understand Current Condition",
    desc: "Gain an unvarnished view of where the project truly stands, stripped of narrative bias.",
  },
  {
    title: "Identify Constraints",
    desc: "Pinpoint structural, resource, or governance bottlenecks impeding progress.",
  },
  {
    title: "Clarify Accountability",
    desc: "Ensure ownership is explicitly defined and actively managed across all workstreams.",
  },
  {
    title: "Evaluate Readiness",
    desc: "Assess whether the target environment is prepared to accept and sustain the delivered solution.",
  },
  {
    title: "Inform Decisions",
    desc: "Equip leadership with the factual basis required to make critical go/no-go or restructuring calls.",
  },
];

export default function DeliveryConfidencePage() {
  return (
    <>
      <PageHero
        label="Delivery Confidence"
        heading="Confidence Built on Evidence."
        description="Delivery Confidence provides a structured view of whether project conditions, readiness, accountability, governance, risk awareness, testing, and operational preparation support confidence in successful delivery."
        buttonLabel="Discuss Delivery Confidence"
        image="/images/heroes/delivery_confidence.png"
      />

      <section className="border-b border-border bg-bg py-20 sm:py-24 lg:py-28">
        <Container className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <h2
              className="
              max-w-xl
              font-serif
              text-3xl
              leading-tight
              text-gold
              transition-transform
              duration-500
              hover:translate-x-1
              md:text-4xl
            "
            >
              Confidence Is Not Optimism.
            </h2>

            <p
              className="
              max-w-3xl
              text-[16px]
              leading-[1.8]
              text-muted
              transition-colors
              duration-300
              hover:text-cream/80
            "
            >
              Delivery confidence should be informed by evidence and the
              condition of the project rather than optimism, assumptions, or
              reported progress alone. True executive assurance requires a
              rigorous examination of the underlying mechanics driving the
              initiative forward.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border bg-bg-alt py-20 sm:py-24 lg:py-28">
        <Container>
          <SectionLabel>The Framework</SectionLabel>
          <Reveal>
            <h2
              className="
              mt-3
              font-serif
              text-3xl
              text-cream
              md:text-4xl
            "
            >
              The Conditions Behind Confidence
            </h2>

            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
              {CONDITIONS.map((condition) => (
                <article
                  key={condition.n}
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-sm
                  border
                  border-border
                  bg-card
                  p-7
                  transition-all
                  duration-500
                  ease-out
                  hover:-translate-y-1
                  hover:border-gold/50
                  hover:shadow-[0_14px_35px_rgba(0,0,0,0.18)]
                "
                >
                  {/* Gold hover line */}
                  <span
                    aria-hidden="true"
                    className="
                    absolute
                    left-0
                    top-0
                    h-px
                    w-0
                    bg-gold
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                  />

                  <span
                    className="
                    font-serif
                    text-3xl
                    text-gold
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                  "
                  >
                    {condition.n}
                  </span>

                  <h3
                    className="
                    mt-3
                    font-serif
                    text-xl
                    text-cream
                    transition-colors
                    duration-300
                    group-hover:text-gold
                  "
                  >
                    {condition.title}
                  </h3>

                  <p
                    className="
                    mt-3
                    text-[14px]
                    leading-relaxed
                    text-muted
                  "
                  >
                    {condition.desc}
                  </p>

                  {/* Bottom accent */}
                  <span
                    aria-hidden="true"
                    className="
                    absolute
                    bottom-0
                    left-7
                    h-px
                    w-8
                    bg-gold/20
                    transition-all
                    duration-500
                    group-hover:w-16
                    group-hover:bg-gold/60
                  "
                  />
                </article>
              ))}
            </div>

            <article
              className="
              group
              relative
              mt-5
              overflow-hidden
              rounded-sm
              border
              border-border
              bg-card
              p-7
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-gold/50
              hover:shadow-[0_14px_35px_rgba(0,0,0,0.18)]
              md:mt-6
            "
            >
              <span
                aria-hidden="true"
                className="
                absolute
                left-0
                top-0
                h-px
                w-0
                bg-gold
                transition-all
                duration-500
                group-hover:w-full
              "
              />

              <span className="font-serif text-3xl text-gold">07</span>

              <h3
                className="
                mt-3
                font-serif
                text-xl
                text-cream
                transition-colors
                duration-300
                group-hover:text-gold
              "
              >
                Operational Readiness
              </h3>

              <p
                className="
                mt-3
                max-w-2xl
                text-[14px]
                leading-relaxed
                text-muted
              "
              >
                The end-state environment must be verified as capable of
                sustaining the new operating model, ensuring seamless transition
                from project delivery to business-as-usual operations without
                disruption.
              </p>
            </article>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border bg-bg py-20 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <h2
              className="
              text-center
              font-serif
              text-2xl
              text-cream
              md:text-3xl
            "
            >
              From Evidence to Confidence
            </h2>

            <div
              className="
              mt-10
              flex
              flex-wrap
              items-center
              justify-center
              gap-2
              md:gap-3
            "
            >
              {FLOW.map((step, index) => (
                <div key={step} className="flex items-center gap-2 md:gap-3">
                  <div
                    className="
                    group
                    rounded-sm
                    border
                    border-border
                    bg-card
                    px-4
                    py-2.5
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-gold/60
                    hover:bg-card-alt
                  "
                  >
                    <span
                      className="
                      text-[12px]
                      uppercase
                      tracking-[0.08em]
                      text-cream
                      transition-colors
                      duration-300
                      group-hover:text-gold
                    "
                    >
                      {step}
                    </span>
                  </div>

                  {index < FLOW.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="
                      text-lg
                      text-gold/70
                      transition-transform
                      duration-300
                      hover:translate-x-1
                    "
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-5 flex justify-center">
              <div
                className="
                group
                rounded-sm
                border
                border-border
                bg-card
                px-5
                py-2.5
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-gold/60
              "
              >
                <span
                  className="
                  text-[12px]
                  uppercase
                  tracking-[0.08em]
                  text-cream
                  transition-colors
                  duration-300
                  group-hover:text-gold
                "
                >
                  Operational Readiness
                </span>
              </div>
            </div>

            <div className="mt-8 flex flex-col items-center gap-4">
              <div
                className="
                h-10
                w-px
                bg-gold/60
                animate-pulse
              "
              />

              <div
                className="
                rounded-sm
                border
                border-gold
                bg-card-alt
                px-8
                py-4
                font-serif
                text-xl
                text-gold
                shadow-[0_0_28px_rgba(190,160,80,0.08)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:shadow-[0_0_35px_rgba(190,160,80,0.16)]
              "
              >
                Delivery Confidence
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border bg-bg-alt py-20 sm:py-24 lg:py-28">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2
              className="
              max-w-sm
              font-serif
              text-3xl
              leading-tight
              text-cream
              md:text-4xl
            "
            >
              A Clearer Basis for Executive Decisions
            </h2>

            <ul className="space-y-5">
              {CHECKLIST.map((item) => (
                <li
                  key={item.title}
                  className="
                  group
                  flex
                  gap-4
                  rounded-sm
                  border
                  border-transparent
                  p-3
                  -mx-3
                  transition-all
                  duration-300
                  hover:border-border
                  hover:bg-card/40
                "
                >
                  {/* Check icon */}
                  <span
                    className="
                    mt-1
                    flex
                    h-6
                    w-6
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-gold
                    text-[11px]
                    text-gold
                    transition-all
                    duration-300
                    group-hover:bg-gold
                    group-hover:text-bg
                  "
                  >
                    ✓
                  </span>

                  <div>
                    <p
                      className="
                      text-[13px]
                      font-semibold
                      uppercase
                      tracking-widest
                      text-gold
                      transition-transform
                      duration-300
                      group-hover:translate-x-0.5
                    "
                    >
                      {item.title}
                    </p>

                    <p
                      className="
                      mt-1.5
                      text-[14px]
                      leading-relaxed
                      text-muted
                    "
                    >
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <Reveal>
        <CTASection title="Build Confidence From the Condition of the Project." />
      </Reveal>
    </>
  );
}
