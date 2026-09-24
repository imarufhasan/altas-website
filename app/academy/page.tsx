import Image from "next/image";
import Container from "@/components/Container";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

/**
 * Figma tokens used on this page
 * bg #121411 · card / alt #1A1C19 · border #4D4639
 * gold #E8C177 · cream #E2E3DE · muted #D1C5B4
 */

const PILLARS = [
  {
    no: "01",
    tag: "Governance",
    title: "Disciplined Rhythm",
    desc: "Definitive milestone gating criteria and uncompromising escalation thresholds across executive sponsors and EPC contractor tiers.",
  },
  {
    no: "02",
    tag: "Ground Truth",
    title: "Empirical Baselines",
    desc: "Replacing narrative progress decks with unvarnished, physical site reality verified by forensic evidence.",
  },
  {
    no: "03",
    tag: "Continuity",
    title: "Institutional Resilience",
    desc: "Operational readiness frameworks engineered to survive restructurings and seamless handover phases.",
  },
];

const CAPABILITIES = [
  {
    tag: "01 • Governance",
    title: "Escalation Rigor",
    desc: "Decision trees that empower directors to enforce halt criteria without consensus delay.",
  },
  {
    tag: "02 • Schedule",
    title: "Float Interrogation",
    desc: "Interrogating artificial lead times, vendor logic links, and disguised bottlenecks.",
  },
  {
    tag: "03 • Capital",
    title: "Exposure Mapping",
    desc: "Translating qualitative risk logs into concrete quantitative liabilities and contingency profiles.",
  },
  {
    tag: "04 • Authority",
    title: "Mandate Mapping",
    desc: "Ensuring designated leads possess contractually recognized authority to intervene.",
  },
  {
    tag: "05 • Verification",
    title: "Truth Over Optimism",
    desc: "Forensic stage-gate testing and physical inspection proofs over checklist self-certification.",
  },
  {
    tag: "06 • Operational",
    title: "Turnover Readiness",
    desc: "Integrating downstream plant and facility operators directly into early commissioning.",
  },
];

export default function AcademyPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-[#4D4639] bg-[#121411] py-12 sm:py-16 lg:py-24">
        <Container wide>
          <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Copy */}
            <Reveal>
              <div className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 bg-[#E8C177]"
                />
                <span className="text-[11px] font-medium uppercase leading-4 tracking-[0.14em] text-[#E8C177] sm:text-[12px]">
                  Organizational Capability &amp; Leadership
                </span>
              </div>

              <h1 className="mt-6 font-serif text-[36px] leading-[1.1] text-[#E2E3DE] sm:text-5xl lg:text-[56px] xl:text-[64px]">
                Build the Capability
                <br className="hidden sm:block" /> Inside the Organization.
              </h1>

              <p className="mt-6 max-w-xl text-[16px] leading-[1.65] text-[#E2E3DE] sm:text-[17px]">
                LMCS Academy embeds institutional governance, milestone
                discipline, and forensic delivery habits directly within capital
                owner teams.
              </p>

              <blockquote className="mt-8 border-l border-[#E8C177] py-1 pl-5 sm:mt-10 sm:pl-6">
                <p className="max-w-xl font-serif text-[16px] italic leading-[1.6] text-[#D1C5B4] sm:text-[18px]">
                  “Capability is not training; it is the institutional capacity
                  to govern and deliver without synthetic optimism.”
                </p>
              </blockquote>

              <Button
                href="/contact"
                className="mt-8 w-full justify-center sm:mt-10 sm:w-auto"
              >
                SCHEDULE EXECUTIVE DISCOVERY
              </Button>
            </Reveal>

            {/* Visual */}
            <Reveal>
              <div className="w-full">
                <div className="border border-[#4D4639] bg-[#1A1C19] p-2 sm:p-3">
                  <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/11]">
                    <Image
                      src="/images/heroes/academy.png"
                      alt="Milestone gating and float ledger documents on a desk"
                      fill
                      priority
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121411]/70 via-transparent to-transparent" />

                    <div className="absolute inset-x-3 bottom-3 border border-[#4D4639] bg-[#121411]/90 px-4 py-3 backdrop-blur-sm sm:inset-x-4 sm:bottom-4 sm:px-5 sm:py-4">
                      <p className="text-[10px] font-medium uppercase leading-4 tracking-[0.14em] text-[#E8C177] sm:text-[11px]">
                        Operating Discipline Artifact
                      </p>
                      <p className="mt-1 font-serif text-[14px] leading-5 text-[#E2E3DE] sm:text-[16px]">
                        Milestone Gating &amp; Float Ledger
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-2 grid grid-cols-2 border border-[#4D4639] bg-[#1A1C19] sm:mt-3">
                  <div className="border-r border-[#4D4639] px-3 py-4 text-center sm:py-5">
                    <p className="font-serif text-[20px] leading-7 text-[#E8C177] sm:text-[24px]">
                      $42B+
                    </p>
                    <p className="mt-1 text-[10px] uppercase leading-4 tracking-[0.08em] text-[#D1C5B4] sm:text-[11px]">
                      Megaproject Audits
                    </p>
                  </div>
                  <div className="px-3 py-4 text-center sm:py-5">
                    <p className="font-serif text-[20px] leading-7 text-[#E2E3DE] sm:text-[24px]">
                      Zero
                    </p>
                    <p className="mt-1 text-[10px] uppercase leading-4 tracking-[0.08em] text-[#D1C5B4] sm:text-[11px]">
                      Optimism Tolerance
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* The Critical Disconnect */}
      <section className="border-b border-[#4D4639] bg-[#121411] py-16 sm:py-20 lg:py-30">
        <Container wide>
          <Reveal>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-0">
              <div>
                <span className="text-[11px] font-medium uppercase leading-4 tracking-[0.14em] text-[#E8C177] sm:text-[12px]">
                  The Critical Disconnect
                </span>
                <h2 className="mt-4 max-w-md font-serif text-[32px] leading-[1.15] text-[#E2E3DE] sm:text-4xl lg:text-[40px]">
                  Advisory solves today&apos;s crisis. Academy prepares you for
                  tomorrow&apos;s.
                </h2>
              </div>

              <div className="lg:flex lg:items-start">
                <div className="border-[#4D4639] lg:ml-8 lg:border-l lg:pl-8">
                  <p className="max-w-2xl text-[16px] leading-[1.65] text-[#D1C5B4] sm:text-[17px]">
                    Consultants diagnose Project Drift. Enduring execution
                    demands internal leaders equipped with empirical rigor to
                    arrest variance before it compounds into public impairment.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 md:grid-cols-3 md:gap-5 lg:mt-16">
              {PILLARS.map((p) => (
                <article
                  key={p.no}
                  className="border border-[#4D4639] bg-[#1A1C19] p-6 transition-colors duration-300 hover:border-[#E8C177]/60 sm:p-7"
                >
                  <div className="flex items-baseline justify-between border-b border-[#4D4639] pb-4">
                    <span className="font-serif text-[16px] leading-6 text-[#E8C177]">
                      {p.no}
                    </span>
                    <span className="text-[10px] uppercase leading-4 tracking-[0.1em] text-[#D1C5B4]">
                      {p.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-[20px] leading-7 text-[#E2E3DE] sm:text-[22px]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.65] text-[#D1C5B4]">
                    {p.desc}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Six Core Capabilities */}
      <section className="border-b border-[#4D4639] bg-[#121411] py-16 sm:py-20 lg:py-30">
        <Container wide>
          <Reveal>
            <div className="flex flex-col gap-5 border-b border-[#4D4639] pb-8 md:flex-row md:items-end md:justify-between md:gap-10">
              <div>
                <span className="text-[11px] font-medium uppercase leading-4 tracking-[0.14em] text-[#E8C177] sm:text-[12px]">
                  Curricular Domains
                </span>
                <h2 className="mt-3 font-serif text-[32px] leading-[1.1] text-[#E2E3DE] sm:text-4xl lg:text-5xl">
                  Six Core Capabilities
                </h2>
              </div>

              <p className="max-w-sm text-[14px] leading-[1.65] text-[#D1C5B4] sm:text-[15px] md:text-right">
                Forensically derived from hyperscale infrastructure, energy
                grids, and mega-capital programs.
              </p>
            </div>

            {/* 1px gaps over the border colour = the thin grid lines */}
            <div className="mt-10 grid grid-cols-1 gap-px border border-[#4D4639] bg-[#4D4639] sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
              {CAPABILITIES.map((c) => (
                <article
                  key={c.title}
                  className="bg-[#1A1C19] p-6 transition-colors duration-300 hover:bg-[#1F221D] sm:p-7"
                >
                  <p className="text-[10px] font-medium uppercase leading-4 tracking-[0.08em] text-[#E8C177]">
                    {c.tag}
                  </p>
                  <h3 className="mt-4 font-serif text-[20px] leading-7 text-[#E2E3DE]">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#D1C5B4]">
                    {c.desc}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Faculty Pedigree */}
      <section className="border-b border-[#4D4639] bg-[#121411] py-16 sm:py-20 lg:py-30">
        <Container wide>
          <Reveal>
            <div className="grid grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="text-[11px] font-medium uppercase leading-4 tracking-[0.14em] text-[#E8C177] sm:text-[12px]">
                  Faculty Pedigree
                </span>
                <h2 className="mt-4 max-w-lg font-serif text-[32px] leading-[1.15] text-[#E2E3DE] sm:text-4xl lg:text-[44px]">
                  Practitioners Who Have Held Sovereign Accountability.
                </h2>

                <p className="mt-6 max-w-xl text-[15px] leading-[1.7] text-[#D1C5B4] sm:text-[16px]">
                  LMCS Academy instruction is delivered exclusively by veteran
                  directors and forensic analysts who have steered
                  multi-billion-dollar infrastructure. Every module is anchored
                  in real case forensics and stress-tested decision protocols.
                </p>

                <div className="mt-8 grid max-w-xl grid-cols-1 gap-6 border-t border-[#4D4639] pt-8 sm:grid-cols-2">
                  <div className="border-l border-[#E8C177] pl-4">
                    <p className="font-serif text-[20px] leading-7 text-[#E2E3DE]">
                      100%
                    </p>
                    <p className="mt-1 text-[11px] uppercase leading-4 tracking-[0.06em] text-[#D1C5B4]">
                      Field-Active Directorate
                    </p>
                  </div>
                  <div className="border-l border-[#E8C177] pl-4">
                    <p className="font-serif text-[20px] leading-7 text-[#E2E3DE]">
                      Direct
                    </p>
                    <p className="mt-1 text-[11px] uppercase leading-4 tracking-[0.06em] text-[#D1C5B4]">
                      Forensic Case Method
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-[#4D4639] bg-[#1A1C19] p-2 sm:p-3">
                <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/11]">
                  <Image
                    src="/images/academy/faculty.png"
                    alt="Industrial steel structure under construction"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121411]/80 via-transparent to-transparent" />

                  <figure className="absolute inset-x-3 bottom-3 border border-[#4D4639] bg-[#121411]/90 px-4 py-3 backdrop-blur-sm sm:inset-x-4 sm:bottom-4 sm:px-5 sm:py-4">
                    <blockquote className="font-serif text-[13px] italic leading-[1.5] text-[#E2E3DE] sm:text-[15px]">
                      “A project does not collapse in a single day. It degrades
                      over months of polite silence.”
                    </blockquote>
                    <figcaption className="mt-2 text-[10px] uppercase leading-4 tracking-[0.06em] text-[#E8C177]">
                      Senior Managing Director, LMCS Forensic Assurance
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1C19] py-16 sm:py-20 lg:py-30">
        <Container wide>
          <Reveal>
            <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <span className="border border-[#4D4639] px-3 py-1.5 text-[10px] font-medium uppercase leading-4 tracking-[0.14em] text-[#E8C177] sm:text-[11px]">
                Institutional Readiness
              </span>

              <h2 className="mt-8 font-serif text-[32px] leading-[1.1] text-[#E2E3DE] sm:text-5xl lg:text-[56px]">
                Ready to Build Enduring Delivery Capability?
              </h2>

              <p className="mt-6 max-w-xl text-[15px] leading-[1.65] text-[#D1C5B4] sm:text-[16px]">
                Equip your internal teams with unvarnished operational
                discipline and independent oversight protocols.
              </p>

              <Button
                href="/contact"
                className="mt-8 w-full justify-center sm:mt-10 sm:w-auto"
              >
                SCHEDULE EXECUTIVE DISCOVERY
              </Button>

              <p className="mt-8 text-[10px] uppercase leading-4 tracking-[0.12em] text-[#D1C5B4] sm:mt-10 sm:text-[11px]">
                Confidential Executive Consultations • Direct Advisory
                Discretion
              </p>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}