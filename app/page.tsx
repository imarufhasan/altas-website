import Link from "next/link";
import Image from "next/image";

import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import InsightCard from "@/components/InsightCard";
import CTASection from "@/components/CTASection";
import Icon from "@/components/Icon";
import DomainCardHome from "@/components/home/DomainCardHome";
import DomainsSection from "@/components/home/DomainsSection";
import PathSteps from "@/components/home/PathSteps";
import AcademyCard from "@/components/home/AcademyCard";
import Reveal from "@/components/Reveal";

import {
  getAcademyPillars,
  getDomains,
  getDriftIndicators,
  getFramework,
  getPathSteps,
  getPillars,
} from "@/lib/api";

import { INSIGHTS } from "@/lib/insights";

const H2 =
  "font-serif text-4xl leading-[1.12] text-cream md:text-5xl lg:text-[54px]";

export default async function HomePage() {
  const [framework, pillars, domains, driftIndicators, pathSteps, academy] =
    await Promise.all([
      getFramework(),
      getPillars(),
      getDomains(),
      getDriftIndicators(),
      getPathSteps(),
      getAcademyPillars(),
    ]);

  const insights = INSIGHTS.slice(1, 4);

  return (
    <>
      {/* ───────────── Hero ───────────── */}
      <section className="relative overflow-hidden border-b border-border bg-bg-alt">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/insight/1insight.png"
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

        <Container
          wide
          className="relative z-10 grid grid-cols-1 items-center gap-12 py-20 sm:py-24 lg:grid-cols-[minmax(0,1fr)_460px] lg:gap-16 lg:py-28"
        >
          <Reveal direction="right">
            <Image
              src="/images/lmcs_icon.png"
              alt="LMCS — Leadership Mission Critical Solutions"
              width={306}
              height={119}
              priority
              className="h-auto w-56 sm:w-72"
            />

            <div className="mt-12">
              <SectionLabel>Leadership is Infrastructure</SectionLabel>
            </div>

            <h1 className="mt-5 max-w-3xl font-serif text-5xl leading-[1.1] text-cream md:text-6xl lg:text-[64px]">
              Mission-critical leadership and project intelligence built around
              readiness.
            </h1>

            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-muted sm:text-lg">
              LMCS defines the leadership and delivery system. Atlas
              operationalizes it as continuous project intelligence—connecting
              decisions, evidence, MEP execution, readiness, risk, and turnover
              from executive planning through Operations.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button href="/atlas">EXPLORE ATLAS</Button>

              <Button href="/contact" variant="ghost">
                SCHEDULE EXECUTIVE DISCOVERY
              </Button>
            </div>
          </Reveal>

          <Reveal direction="left" delay={150}>
            <aside className="border border-[#4d4a42] bg-[#282826]/95 p-8 sm:p-10">
              <SectionLabel>The Delivery Ecosystem</SectionLabel>

              <h2 className="mt-4 font-serif text-[30px] leading-[1.15] text-cream sm:text-[32px]">
                System &amp; Readiness Domains
              </h2>

              <div className="mt-6 h-px w-full bg-[#4d4a42]" />

              <ul className="mt-6 space-y-5">
                {framework.map((f) => (
                  <li key={f.title} className="flex items-start gap-3.5">
                    <Icon
                      name={f.icon}
                      className="mt-0.5 h-4.5 w-4.5 shrink-0 text-gold"
                      strokeWidth={1.75}
                    />

                    <div className="min-w-0">
                      <p className="text-[13px] font-semibold uppercase leading-tight tracking-[0.06em] text-cream">
                        {f.title}
                      </p>

                      <p className="mt-1 text-xs leading-relaxed text-muted">
                        {f.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-[#4d4a42] pt-5">
                <p className="text-[11px] uppercase leading-relaxed tracking-[0.12em] text-muted">
                  Advisory · Software Intelligence · Academy
                </p>
              </div>
            </aside>
          </Reveal>
        </Container>
      </section>

      {/* ───────────── Pillars ───────────── */}
      <section className="border-b border-border bg-bg-alt py-24">
        <Container wide>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className={H2}>Helping Leaders See What Others Miss.</h2>

            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-[1.7] text-muted">
              We provide independent, unvarnished visibility into the actual
              state of mission-critical initiatives, replacing subjective
              reporting with objective condition assessments.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-7 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.href} delay={i * 120} className="h-full">
                <Link
                  href={p.href}
                  className="group block h-full rounded-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                >
                  <DomainCardHome
                    icon={p.icon}
                    title={p.title}
                    description={p.desc}
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────── Methodology ───────────── */}
      <Reveal>
        <DomainsSection domains={domains} />
      </Reveal>

      {/* ───────────── Project Drift ───────────── */}
      <section className="border-b border-border bg-[#282826] py-24">
        <Container
          wide
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16"
        >
          <Reveal direction="right" className="text-center">
            <SectionLabel>Project Drift</SectionLabel>

            <h2 className={`mt-4 ${H2}`}>
              See Drift Before It Becomes the Operating Model.
            </h2>

            <p className="mx-auto mt-6 max-w-md text-[16px] leading-relaxed text-muted">
              Project Drift indicators help identify gaps between reported
              project progress and the evidence-supported condition of the
              project.
            </p>
          </Reveal>

          <Reveal direction="left" delay={150}>
            <div className="divide-y divide-border border-t border-border text-center">
              {driftIndicators.map((d, i) => (
                <Reveal key={d.title} delay={i * 90}>
                  <div className="px-4 py-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                      {d.title}
                    </p>

                    <p className="mx-auto mt-2.5 max-w-md text-[15px] leading-relaxed text-muted">
                      {d.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ───────────── Path to Delivery Confidence ───────────── */}
      <section className="border-b border-border bg-bg py-24">
        <Container wide>
          <Reveal>
            <h2 className={`text-center ${H2}`}>
              The Path to Delivery Confidence
            </h2>
          </Reveal>

          <Reveal delay={150}>
            <PathSteps steps={pathSteps} />
          </Reveal>
        </Container>
      </section>

      {/* ───────────── LMCS Academy ───────────── */}
      <section className="border-b border-border bg-bg-alt py-24">
        <Container wide>
          <Reveal>
            <SectionLabel>Organizational Capability</SectionLabel>

            <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.1] text-cream md:text-5xl lg:text-[60px]">
              Build the Capability Inside the Organization.
            </h2>

            <p className="mt-6 max-w-3xl text-[17px] leading-relaxed text-muted sm:text-lg">
              LMCS Academy takes the same leadership principles and operating
              disciplines used in LMCS engagements and develops them inside
              project and organizational teams.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-7 md:grid-cols-3">
            {academy.map((a, i) => (
              <Reveal key={a.title} delay={i * 120} className="h-full">
                <AcademyCard
                  icon={a.icon}
                  title={a.title}
                  description={a.desc}
                />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 flex flex-col gap-6 border-t border-border pt-10 md:flex-row md:items-center md:justify-between">
              <Button href="/academy" square>
                EXPLORE LMCS ACADEMY
              </Button>

              <p className="max-w-md text-[15px] leading-relaxed text-muted md:max-w-lg">
                Advisory capability programs tailored for enterprise leadership
                and mission-critical project directors.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ───────────── Executive Insights ───────────── */}
      <section className="border-b border-border bg-bg py-24">
        <Container wide>
          <Reveal>
            <div className="flex items-end justify-between gap-4 border-b border-border pb-6">
              <h2 className={H2}>Executive Insights</h2>

              <Link
                href="/insights/all"
                className="shrink-0 pb-1 text-sm font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:text-gold-light md:text-base"
              >
                View All
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-3">
            {insights.map((a, i) => (
              <Reveal key={a.slug} delay={i * 120} className="h-full">
                <InsightCard
                  variant="home"
                  href={`/insights/${a.slug}`}
                  tag={a.tag}
                  date={a.date}
                  title={a.title}
                  excerpt={a.excerpt}
                  image={a.image}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ───────────── CTA ───────────── */}
      <Reveal>
        <CTASection
          title="What Condition Needs to Change?"
          description="Whether the issue is readiness, Project Drift, decision latency, MEP execution, commissioning preparation, or transition to Operations, LMCS starts with the condition—not a predetermined consulting package."
          buttonLabel="DISCUSS AN ASSESSMENT"
          buttonHref="/contact"
          secondaryLabel="EXPLORE ATLAS"
          secondaryHref="/atlas"
        />
      </Reveal>
    </>
  );
}
