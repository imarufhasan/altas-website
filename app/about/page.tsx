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

const PRINCIPALS = [
  {
    label: "Managing Principal",
    credentials: "PE, ATS",
    name: "Marcus Vance",
    title: "Mission Critical Commissioning & Critical Path Systems",
    bio: "22 years directing high-hazard MEP commissioning and utility interconnection. Led critical path delivery across $4.2B in Tier III/IV data center deployments and semiconductor cleanroom expansions.",
    stats: [
      { label: "Hyperscale Scope", value: "480MW / 6 Campuses" },
      {
        label: "Integrated Systems Testing",
        value: "Zero Post-Handover Outages",
      },
    ],
  },
  {
    label: "Partner & Technical Director",
    credentials: "IEEE, NFPA 70E",
    name: "Dr. Eleanor Ward",
    title: "High-Voltage Substations & Redundancy Governance",
    bio: "Former Mission-Critical Infrastructure Director overseeing 12 energized utility-scale substations (230kV/34.5kV) and 72-hour continuous IST burn-ins under zero-fault mandates.",
    stats: [
      { label: "Energized Grid Capacity", value: "1.2GW High-Voltage Assets" },
      { label: "Regulatory Clearance", value: "100% On-Schedule Energization" },
    ],
  },
  {
    label: "Partner, Forensic Advisory",
    credentials: "PMP, RCDD",
    name: "Julian Thorne",
    title: "Capital Program Recovery & Dispute Mitigation",
    bio: "Specialist in distress intervention for stalled mega-projects. Recovered schedule drift across 14 multi-prime contract architectures, mitigating $140M+ in contractor delay claim exposure.",
    stats: [
      { label: "Program Recovery Value", value: "$3.1B Recovered CapEx" },
      { label: "Arbitration Reduction", value: "94% Pre-Dispute Resolution" },
    ],
  },
];

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
        <Container wide className="grid grid-cols-1 gap-10 lg:grid-cols-[0.7fr_1.3fr]">
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

      {/* OPERATIONAL SCALE & PROVEN AUTHORITY */}
      <section className="border-b border-border bg-bg py-24">
        <Container wide>
          <Reveal>
            <SectionLabel>
              Operational Scale &amp; Proven Authority
            </SectionLabel>
            <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-cream md:text-4xl">
              Principals Who Have Held the Line.
            </h2>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
              LMCS is led exclusively by commissioning authorities and project
              directorship veterans who have carried personal balance-sheet and
              operational accountability for Tier III/IV hyperscale and
              high-voltage programs.
            </p>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {PRINCIPALS.map((p) => (
                <div
                  key={p.name}
                  className="flex flex-col rounded-sm border border-border bg-card p-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">
                      {p.label}
                    </span>
                    <span className="whitespace-nowrap text-[13px] text-muted">
                      {p.credentials}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-2xl text-cream">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[14px] font-medium leading-snug text-gold">
                    {p.title}
                  </p>
                  <p className="mt-4 text-[14.5px] leading-relaxed text-muted">
                    {p.bio}
                  </p>

                  <div className="mt-auto space-y-3 border-t border-border pt-5 text-[13.5px]">
                    {p.stats.map((s) => (
                      <div
                        key={s.label}
                        className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
                      >
                        <span className="text-muted">{s.label}</span>
                        <span className="font-semibold text-cream">
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
        <Container wide className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
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
        <Container wide className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
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
