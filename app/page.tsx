// FILE PATH: app/page.tsx
import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import InsightCard from "@/components/InsightCard";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import {
  getDomains,
  getDriftIndicators,
  getFramework,
  getInsights,
  getPathSteps,
  getPillars,
} from "@/lib/api";
import Icon from "@/components/Icon";
import DomainCardHome from "@/components/home/DomainCardHome";
import DomainsSection from "@/components/home/DomainsSection";

export default async function HomePage() {
  const [framework, pillars, domains, driftIndicators, pathSteps, insights] =
    await Promise.all([
      getFramework(),
      getPillars(),
      getDomains(),
      getDriftIndicators(),
      getPathSteps(),
      getInsights(),
    ]);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-bg">
        <div className="absolute inset-0">
          <Image
            src="/images/heroes/home.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[#0d0f0e]/65" />
          <div className="absolute inset-0 bg-linear-to-r from-[#0d0f0e]/95 via-[#0d0f0e]/75 to-[#0d0f0e]/40" />
          <div className="absolute inset-0 bg-linear-to-t from-[#0d0f0e] via-transparent to-transparent" />
        </div>

        <Container className="relative z-10 grid grid-cols-1 items-center gap-10 py-16 sm:py-20 md:gap-14 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
          <div>
            <SectionLabel>Leadership Mission Critical Solutions</SectionLabel>

            <h1 className="mt-5 max-w-3xl font-serif text-4xl leading-[1.08] text-cream sm:text-5xl md:text-6xl">
              Leadership is
              <br />
              <span className="text-gold">Infrastructure.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-[17px]">
              LMCS helps organizations identify Project Drift, strengthen
              governance, improve accountability, and build confidence before
              advancing mission-critical projects.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button href="/contact">Schedule an Executive Discussion</Button>

              <Button href="/how-lmcs-works" variant="outline">
                Learn How LMCS Works
              </Button>
            </div>
          </div>

          <div className="relative border border-[#4a4b43] bg-[#1b1e1b]/95 p-6 sm:p-8">
            <div className="pointer-events-none absolute inset-1 border border-[#34362f]" />

            <div className="relative">
              <SectionLabel>Core Methodology</SectionLabel>

              <h2 className="mt-4 font-serif text-2xl leading-tight text-[#e7e3d9] sm:text-[30px]">
                The LMCS Assessment
                <br />
                Framework
              </h2>

              <div className="mt-6 h-px w-full bg-[#3b3d35]" />

              <ul className="mt-2">
                {framework.map((f) => (
                  <li
                    key={f.title}
                    className="flex items-start gap-3 border-b border-[#3b3d35] py-4 last:border-b-0 sm:gap-4 sm:py-5"
                  >
                    <Icon
                      name={f.icon}
                      className="mt-0.5 h-5 w-5 shrink-0 text-[#c9a45b]"
                      strokeWidth={1.75}
                    />

                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-tight text-[#e7e3d9]">
                        {f.title}
                      </p>

                      <p className="mt-1.5 text-xs leading-relaxed text-[#b1afa6]">
                        {f.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Pillars */}
      <section className="border-b border-border bg-bg py-22 md:py-23">
        <Container>
          {/* Section Heading */}
          <div className="mx-auto max-w-212.5 text-center">
            <h2 className="font-serif text-[36px] leading-[1.2] text-cream md:text-[40px]">
              Helping Leaders See What Others Miss.
            </h2>

            <p className="mx-auto mt-6 max-w-200 text-[15px] leading-[1.7] text-muted md:text-[15.5px]">
              We provide independent, unvarnished visibility into the actual
              state of mission-critical initiatives, replacing subjective
              reporting with objective condition assessments.
            </p>
          </div>

          {/* Pillar Cards */}
          <div className="mt-17.5 grid grid-cols-1 gap-7 md:grid-cols-3">
            {pillars.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group block h-full rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <DomainCardHome
                  icon={p.icon}
                  title={p.title}
                  description={p.desc}
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Domains */}
      <DomainsSection domains={domains} />

      {/* Project Drift */}
      <section className="border-b border-border bg-bg-alt py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>Project Drift</SectionLabel>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-cream md:text-4xl">
              See Drift Before It Becomes the Operating Model.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-muted">
              Project Drift indicators help identify gaps between reported
              project progress and the evidence-supported condition of the
              project.
            </p>
            <div className="mt-8">
              <Button href="/project-drift" variant="outline" arrow>
                Discuss Project Drift
              </Button>
            </div>
          </div>

          <div className="divide-y divide-border">
            {driftIndicators.map((d) => (
              <div key={d.title} className="py-5 first:pt-0">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gold">
                  {d.title}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">
                  {d.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Path to confidence */}
      <section className="border-b border-border bg-bg py-24">
        <Container>
          <h2 className="text-center font-serif text-3xl text-cream md:text-4xl">
            The Path to Delivery Confidence
          </h2>

          <div className="relative mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {pathSteps.map((s) => (
              <div key={s.n} className="relative lg:px-1.5">
                {/* Connector line */}
                {s.n && Number(s.n) < pathSteps.length && (
                  <div className="pointer-events-none absolute left-[calc(50%+25px)] -right-px top-[86px] hidden h-px bg-[#3b3d35] lg:block" />
                )}

                <label className="group relative block cursor-pointer">
                  <input
                    type="radio"
                    name="delivery-confidence"
                    value={s.n}
                    defaultChecked={s.active}
                    className="peer sr-only"
                  />

                  <div
                    className="
                      relative min-h-43.25 rounded-[9px]
                      border border-[#4a4b43]
                      bg-[#111310]
                      px-7 py-6
                      transition-all duration-300 ease-out
                      hover:-translate-y-1
                      hover:border-[#c9a45b]
                      hover:bg-[#171914]
                      peer-checked:border-[#c9a45b]
                      peer-checked:bg-[#171914]
                      peer-checked:shadow-[0_0_0_1px_rgba(201,164,91,0.12)]
                    "
                  >
                    <div
                      className="
                        pointer-events-none absolute inset-1
                        rounded-md
                        border border-transparent
                        transition-colors duration-300
                        group-hover:border-[#34362f]
                        peer-checked:border-[#34362f]
                      "
                    />

                    <div className="relative z-10">
                      {/* Number */}
                      <span
                        className="
                          flex h-12.5 w-12.5
                          items-center justify-center
                          rounded-[10px]
                          bg-[#353733]
                          text-[13px] font-normal text-[#e7e3d9]
                          transition-all duration-300
                          group-hover:bg-[#c9a45b]
                          group-hover:text-[#171613]
                          peer-checked:bg-[#c9a45b]
                          peer-checked:text-[#171613]
                        "
                      >
                        {s.n}
                      </span>

                      {/* Title */}
                      <p
                        className="
                          mt-5
                          text-[11px]
                          font-medium
                          uppercase
                          tracking-[0.12em]
                          text-[#e7e3d9]
                          transition-colors duration-300
                          group-hover:text-[#c9a45b]
                          peer-checked:text-[#c9a45b]
                        "
                      >
                        {s.title}
                      </p>

                      {/* Description */}
                      <p
                        className="
                          mt-2
                          max-w-[210px]
                          text-[12px]
                          leading-[1.45]
                          text-[#b1afa6]
                        "
                      >
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Executive Insights */}
      <section className="border-b border-border bg-bg py-24">
        <Container>
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-3xl text-cream md:text-4xl">
              Executive Insights
            </h2>
            <Link
              href="/insights/all"
              className="text-[13px] font-semibold uppercase tracking-widest text-gold hover:text-gold-light"
            >
              View All →
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {insights.map((a) => (
              <InsightCard
                key={a.slug}
                href={`/insights/${a.slug}`}
                tag={a.tag}
                date={a.date}
                title={a.title}
                excerpt={a.excerpt}
                image={a.image}
              />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Ready to Understand Your Project Condition?"
        description="Engage LMCS for a rigorous, independent assessment of your most critical initiatives. Replace assumption with evidence."
      />
    </>
  );
}
