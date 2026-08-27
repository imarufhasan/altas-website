import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

const CLARITY = [
  {
    icon: "🏛",
    title: "Governance",
    desc: "Establishing strict oversight and decision-making frameworks to guide complex execution.",
  },
  {
    icon: "📋",
    title: "Readiness",
    desc: "Ensuring all prerequisites, operational conditions, and resources are validated before advancement.",
  },
  {
    icon: "📄",
    title: "Evidence",
    desc: "Relying on empirical data and rigorous testing over subjective optimism or anecdotal progress.",
  },
  {
    icon: "⚖️",
    title: "Accountability",
    desc: "Enforcing clear ownership and absolute responsibility across all tiers of project delivery.",
  },
  {
    icon: "⚠️",
    title: "Project Drift",
    desc: "Identifying and arresting the subtle divergence from baseline objectives before failure occurs.",
  },
  {
    icon: "🛡",
    title: "Delivery Confidence",
    desc: "Providing executives with the unvarnished truth required to make critical go/no-go decisions.",
  },
];

const PERSPECTIVE = [
  { n: "01", text: "Replace optimism with evidence." },
  { n: "02", text: "Earn readiness before advancing." },
  { n: "03", text: "Preserve accountability with ownership." },
  {
    n: "04",
    text: "Every organization prepares the next organization for success.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-bg py-24 text-center">
        <Container>
          <Reveal>
            <SectionLabel>About LMCS</SectionLabel>
            <h1 className="mx-auto mt-4 max-w-2xl font-serif text-5xl leading-[1.1] text-cream md:text-6xl">
              Leadership is <span className="text-gold">Infrastructure.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-muted">
              LMCS focuses on project assessment, governance, readiness, Project
              Drift, and Delivery Confidence for organizations managing
              mission-critical projects.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border bg-bg py-24">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <h2 className="font-serif text-3xl text-gold">Why LMCS Exists</h2>
            <div className="space-y-5 text-[16px] leading-relaxed text-muted">
              <p>
                Mission-critical projects require more than progress reporting.
                They require visibility into governance, readiness, risks and
                constraints, accountability, evidence, testing, operational
                preparation, and the conditions that influence delivery.
              </p>
              <p>
                LMCS provides a structured assessment approach to help
                leadership understand those conditions, ensuring that optimism
                is replaced with empirical evidence before advancing to the next
                critical phase.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border bg-bg-alt py-24">
        <Container>
          <Reveal>
            <h2 className="text-center font-serif text-3xl text-cream md:text-4xl">
              Architectural Clarity
            </h2>
            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {CLARITY.map((c) => (
                <div
                  key={c.title}
                  className="rounded-sm border border-border bg-card p-7"
                >
                  <span className="text-2xl text-gold" aria-hidden>
                    {c.icon}
                  </span>
                  <h3 className="mt-4 font-serif text-xl text-cream">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border bg-bg py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div>
              <h2 className="font-serif text-3xl text-cream md:text-4xl">
                The LMCS Perspective
              </h2>
              <p className="mt-4 text-[15px] text-muted">
                Core tenets guiding our advisory methodology.
              </p>
            </div>
            <ul className="divide-y divide-border">
              {PERSPECTIVE.map((p) => (
                <li key={p.n} className="flex gap-6 py-5 first:pt-0">
                  <span className="text-[13px] font-semibold text-gold">
                    {p.n}
                  </span>
                  <p className="font-serif text-xl leading-snug text-cream">
                    {p.text}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border bg-bg-alt py-24 text-center">
        <Container className="max-w-3xl">
          <Reveal>
            <h2 className="font-serif text-3xl leading-tight text-gold md:text-4xl">
              Mission-Critical Delivery Requires Clarity.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-muted">
              Understanding project condition before advancement is a strict
              prerequisite for success. Executive commitment relies on the
              architectural clarity needed to anchor critical go/no-go
              decisions.
            </p>
            <p className="mt-4 text-[16px] font-semibold text-cream">
              Ambiguity is the enemy of execution.
            </p>
          </Reveal>
        </Container>
      </section>

      <CTASection title="Start a Conversation With LMCS." />
    </>
  );
}
