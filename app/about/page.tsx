import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";

/**
 * Color / type tokens used below assume these already exist in the project
 * (as in the original About page): bg, bg-alt, card, border, cream, gold, muted.
 * Two new one-off accents are used only inside the Forensic Evidence Artifact
 * card, where hex values are given directly since they don't have existing
 * tokens: a coral/red (#FFB4AB) for the "revoked" flag and a dark gold-on-gold
 * chip (#E8C177 / #513A00) for the audit score.
 */

const PRINCIPAL = {
  label: "Founder & Chief Architect",
  name: "Chandler Johnson",
  title: "Leadership Mission Critical Solutions",
  bio: [
    "Chandler Johnson brings 15 years of industry experience spanning project management, multi-city project coordination, commissioning planning, and operational readiness. His work connects schedules, equipment, resources, and people to help teams deliver complex mission-critical projects.",
    "His experience includes managing projects across multiple cities, building teams, and developing people through training and practical guidance. He emphasizes clear responsibilities, consistent communication, and coordination across locations so teams understand both their work and how it affects the broader project.",
    "Chandler founded Leadership Mission Critical Solutions to help organizations identify gaps earlier, strengthen leadership, and improve delivery practices. He also guides the vision and requirements for Atlas, bringing field experience into tools that help teams organize information, track commitments, and understand what needs to happen next.",
  ],
  principle: "Leadership is Infrastructure.",
};

const CREDENTIALS = [
  { name: "IEEE", sub: "Standards Assn" },
  { name: "ASHRAE", sub: "TC 9.9 Facilities" },
  { name: "Uptime Inst.", sub: "Tier Specialist (ATS)" },
  { name: "7x24 Exch.", sub: "International" },
  { name: "NFPA 70E", sub: "Electrical Safety" },
  { name: "BICSI & PE", sub: "Licensed Directorship" },
];

const ENGAGEMENT_STEPS = [
  {
    n: "1",
    title: "Situation",
    text: "Client executive leadership received unanimous bi-weekly green dashboards indicating commercial turnover in 14 weeks. Milestone sign-offs were proceeding routinely across all trade contractors.",
  },
  {
    n: "2",
    title: "What We Found (Forensic Audit)",
    text: "Schedule compression masked 38 unverified MEP dependencies. The project team had created synthetic float by deferring Level 4 and Level 5 Integrated Systems Testing (IST) into operational occupancy. Unresolved contractor interface disputes regarding medium-voltage energization permits were quietly buried off-schedule.",
  },
  {
    n: "3",
    title: "What Changed",
    text: "LMCS halted synthetic advancement, re-baselined executive milestones around physical equipment readiness instead of calendar assumptions, and expedited permit interface disputes with county utilities. Critical-path energization blockers were resolved 6 weeks ahead of turnover, avoiding an estimated $18.4M in liquidated delay damages and averting live-load power collapse.",
  },
];

const FORENSIC_FIELDS = [
  {
    label: "Sub-System Discipline",
    value: "Medium-Voltage Intertie",
    caption: "Critical Path Drift: +41 Days",
  },
  {
    label: "Prerequisite Verification",
    value: "Chilled Water Plant L4 IST",
    caption: "Unverified Prerequisite",
  },
  {
    label: "Determination",
    value: "Go / No-Go Gate #4",
    caption: "Hold Mandate Issued",
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
      {/* HERO */}
      <section className="border-b border-border bg-bg py-24 text-center">
        <Container wide>
          <Reveal>
            <SectionLabel>About LMCS</SectionLabel>
            <h1 className="mx-auto mt-4 max-w-3xl font-serif text-5xl leading-[1.1] text-cream sm:text-6xl md:text-7xl">
              The reporting was
              <br />
              <span className="text-gold">always green.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-muted">
              Every derailed project we were called to fix had one thing in
              common: right up until the schedule broke, every status report
              said everything was on track. LMCS was founded on a simple truth:
              mission-critical delivery fails when leadership is fed synthetic
              optimism instead of unvarnished evidence.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* WHY LMCS EXISTS */}
      <section className="border-b border-border bg-bg py-24">
        <Container
          wide
          className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr]"
        >
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

      {/* FOUNDER */}
      <section className="border-b border-border bg-bg py-24">
        <Container wide>
          <Reveal>
            <SectionLabel>Leadership</SectionLabel>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-cream md:text-4xl">
              The Architect Behind LMCS.
            </h2>

            <div className="mx-auto mt-14 max-w-2xl rounded-sm border border-border bg-card p-8 md:p-10">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                {PRINCIPAL.label}
              </span>

              <h3 className="mt-4 font-serif text-2xl text-cream md:text-3xl">
                {PRINCIPAL.name}
              </h3>
              <p className="mt-2 text-[14px] font-medium leading-snug text-gold">
                {PRINCIPAL.title}
              </p>

              <div className="mt-5 space-y-4 text-[14.5px] leading-relaxed text-muted">
                {PRINCIPAL.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <p className="mt-6 border-t border-border pt-5 font-serif text-lg text-cream">
                {PRINCIPAL.principle}
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* STANDARDS GOVERNANCE & CREDENTIALS */}
      <section className="border-b border-border bg-bg py-16">
        <Container wide>
          <Reveal>
            <p className="text-center text-[13px] font-semibold uppercase tracking-wider text-gold">
              Standards Governance &amp; Institutional Credentials
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {CREDENTIALS.map((c) => (
                <div
                  key={c.name}
                  className="rounded-sm border border-border bg-card px-4 py-6 text-center"
                >
                  <p className="font-serif text-lg text-cream">{c.name}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-wider text-muted">
                    {c.sub}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* DE-IDENTIFIED ENGAGEMENT RECORD */}
      <section className="border-b border-border bg-bg py-24">
        <Container
          wide
          className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]"
        >
          <Reveal>
            <div>
              <SectionLabel>De-identified Engagement Record</SectionLabel>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-cream md:text-5xl">
                Hyperscale Phase 2 Intervention
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-muted">
                How unvarnished forensic scrutiny arrested unearned advancement
                and eliminated a catastrophic 14-week schedule collapse.
              </p>

              <div className="mt-8 rounded-sm border border-border p-6">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                  Project Metric Baseline
                </p>
                <ul className="mt-3 space-y-2 text-[14.5px] text-cream">
                  <li>Scale: 120MW Hyperscale Data Center Build</li>
                  <li>Capital Allocation: $840M</li>
                  <li>
                    Reported Status: 92% Complete / &quot;On-Track (Green)&quot;
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-6">
              {ENGAGEMENT_STEPS.map((s) => (
                <div key={s.n} className="border-l-2 border-gold bg-card p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                    {s.n}. {s.title}
                  </p>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted">
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* FORENSIC EVIDENCE ARTIFACT */}
      <section className="border-b border-border bg-bg pb-24">
        <Container wide>
          <Reveal>
            <div className="rounded-sm border border-border p-7 md:p-10">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                    Forensic Evidence Artifact // Excerpt
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-cream md:text-3xl">
                    Redacted Executive Condition Assessment
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="whitespace-nowrap rounded-sm border border-border bg-card px-3 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-[#FFB4AB]">
                    Synthetic Green Revoked
                  </span>
                  <span className="whitespace-nowrap rounded-sm bg-[#E8C177] px-3 py-1.5 text-[12px] font-semibold uppercase tracking-wide text-[#513A00]">
                    Audit Score: 51 / 100
                  </span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 border-t border-border pt-8 font-mono sm:grid-cols-3">
                {FORENSIC_FIELDS.map((f) => (
                  <div key={f.label}>
                    <p className="text-[11px] uppercase tracking-wider text-muted">
                      {f.label}
                    </p>
                    <p className="mt-2 text-[15px] font-semibold text-cream">
                      {f.value}
                    </p>
                    <p className="mt-1 text-[12px] uppercase tracking-wide text-[#FFB4AB]">
                      {f.caption}
                    </p>
                  </div>
                ))}
              </div>

              <blockquote className="mt-8 border-l-2 border-gold bg-card p-6 text-[14.5px] italic leading-relaxed text-muted">
                &quot;Advancing past Gate 4 without documented 72-hour
                concurrent maintainability verification transfers unquantified
                operational risk directly onto the hyperscale tenant. Synthetic
                green status is formally derecognized.&quot; &mdash; LMCS
                Forensic Condition Report (Artifact 10-B, Redacted)
              </blockquote>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* THE LMCS PERSPECTIVE */}
      <section className="border-b border-border bg-bg py-24">
        <Container
          wide
          className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]"
        >
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

      {/* CLOSING STATEMENT */}
      <section className="border-b border-border bg-bg py-24 text-center">
        <Container wide className="max-w-3xl">
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
