// FILE PATH: app/page.tsx

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
import Reveal from "@/components/Reveal";

import {
  getDomains,
  getDriftIndicators,
  getFramework,
  getPathSteps,
  getPillars,
} from "@/lib/api";

import { INSIGHTS } from "@/lib/insights";

export default async function HomePage() {
  const [framework, pillars, domains, driftIndicators, pathSteps] =
    await Promise.all([
      getFramework(),
      getPillars(),
      getDomains(),
      getDriftIndicators(),
      getPathSteps(),
    ]);

  const insights = INSIGHTS.slice(1, 4);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-[#0d0f0e]">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/insight/1insight.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-[#0d0f0e]/72" />

          <div className="absolute inset-0 bg-linear-to-r from-[#0d0f0e]/95 via-[#0d0f0e]/80 to-[#0d0f0e]/45" />

          <div className="absolute inset-0 bg-linear-to-t from-[#0d0f0e] via-transparent to-[#0d0f0e]/15" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(201,164,91,0.04),transparent_38%)]" />
        </div>

        <Container
          className="
      relative z-10
      grid grid-cols-1 items-center
      gap-12
      py-12
      sm:py-16
      md:gap-14 md:py-20
      lg:grid-cols-[1.08fr_0.92fr]
      lg:gap-16
      lg:py-14
      xl:gap-20
    "
        >
          <Reveal direction="right">
            <div className="max-w-2xl">
              <div className="mb-10">
                <Image
                  src="/images/lmcs_logo.png"
                  alt="LMCS — Leadership Mission Critical Solutions"
                  width={480}
                  height={240}
                  priority
                  className="
      block
      h-auto
      w-65
      object-contain
      object-left
      sm:w-70
      md:w-75
      lg:w-[320px]
      xl:w-85
    "
                />
              </div>

              <SectionLabel>Leadership Mission Critical Solutions</SectionLabel>

              <h1
                className="
            mt-5
            max-w-2xl
            font-serif
            text-[42px]
            leading-[1.03]
            tracking-[-0.02em]
            text-[#e7e3d9]
            sm:text-[50px]
            md:text-[58px]
            lg:text-[60px]
            xl:text-[64px]
          "
              >
                Leadership is
                <br />
                <span className="text-gold">Infrastructure.</span>
              </h1>

              <p
                className="
            mt-6
            max-w-xl
            text-[14px]
            leading-[1.7]
            text-[#b7b4aa]
            sm:text-[15px]
            md:text-[15.5px]
          "
              >
                Mission-critical delivery depends on more than technical
                systems. LMCS defines the leadership and delivery system. Atlas
                operationalize it as continuous project intelligence—connecting
                decisions, evidence, MEP execution, readiness, risk,
                commissioning preparation, and turnover from executive planning
                through Operations.
              </p>

              <div
                className="
            mt-7
            flex
            flex-col
            gap-3
            sm:flex-row
            sm:items-center
          "
              >
                <Button href="/contact">Explore Atlas</Button>

                <Button href="/how-lmcs-works" variant="outline">
                  Schedule Executive Discovery
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={150}>
            <div
              className="
          relative
          w-full
          max-w-md
          justify-self-center
          border
          border-[#46483f]
          bg-[#1a1d1a]/95
          p-5
          sm:p-6
          lg:max-w-90
          xl:max-w-95
        "
            >
              <div
                className="
            pointer-events-none
            absolute
            inset-1
            border
            border-[#30332d]
          "
              />

              <div className="relative">
                <SectionLabel>Core Methodology</SectionLabel>

                <h2
                  className="
              mt-3
              font-serif
              text-[25px]
              leading-[1.18]
              text-[#e7e3d9]
              sm:text-[27px]
            "
                >
                  The LMCS Assessment
                  <br />
                  Framework
                </h2>

                <div className="mt-5 h-px w-full bg-[#3a3c35]" />

                <ul className="mt-0">
                  {framework.map((f) => (
                    <li
                      key={f.title}
                      className="
                  flex
                  items-start
                  gap-3
                  border-b
                  border-[#3a3c35]
                  py-3.5
                  last:border-b-0
                  sm:gap-3.5
                  sm:py-4
                "
                    >
                      <Icon
                        name={f.icon}
                        className="
                    mt-0.5
                    h-4.25
                    w-4.25
                    shrink-0
                    text-[#c9a45b]
                  "
                        strokeWidth={1.75}
                      />

                      <div className="min-w-0">
                        <p
                          className="
                      text-[12px]
                      font-semibold
                      leading-tight
                      text-[#e7e3d9]
                      sm:text-[13px]
                    "
                        >
                          {f.title}
                        </p>

                        <p
                          className="
                      mt-1
                      text-[10px]
                      leading-[1.45]
                      text-[#a9a79e]
                      sm:text-[11px]
                    "
                        >
                          {f.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border bg-bg py-22 md:py-23">
        <Container>
          <Reveal className="mx-auto max-w-212.5 text-center">
            <h2 className="font-serif text-[36px] leading-[1.2] text-cream md:text-[40px]">
              Helping Leaders See What Others Miss.
            </h2>

            <p className="mx-auto mt-6 max-w-200 text-[15px] leading-[1.7] text-muted md:text-[15.5px]">
              We provide independent, unvarnished visibility into the actual
              state of mission-critical initiatives, replacing subjective
              reporting with objective condition assessments.
            </p>
          </Reveal>

          <div className="mt-17.5 grid grid-cols-1 gap-7 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.href} delay={i * 120}>
                <Link
                  href={p.href}
                  className="group block h-full rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
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

      <Reveal>
        <DomainsSection domains={domains} />
      </Reveal>

      <section className="border-b border-border bg-bg-alt py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal direction="right">
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
          </Reveal>

          <Reveal direction="left" delay={150}>
            <div className="divide-y divide-border">
              {driftIndicators.map((d, i) => (
                <Reveal key={d.title} delay={i * 90}>
                  <div className="py-5 first:pt-0">
                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gold">
                      {d.title}
                    </p>

                    <p className="mt-2 text-[15px] leading-relaxed text-muted">
                      {d.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border bg-bg py-24">
        <Container>
          <Reveal>
            <h2 className="text-center font-serif text-3xl text-cream md:text-4xl">
              The Path to Delivery Confidence
            </h2>
          </Reveal>

          <div className="relative mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {pathSteps.map((s, i) => (
              <Reveal key={s.n} delay={i * 120} className="relative lg:px-1.5">
                {s.n && Number(s.n) < pathSteps.length && (
                  <div className="pointer-events-none absolute left-[calc(50%+25px)] -right-px top-21.5 hidden h-px bg-[#3b3d35] lg:block" />
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
            relative flex flex-col items-center gap-3 rounded-sm border border-border
            bg-bg-alt px-6 py-8 text-center transition-all duration-300
            hover:border-[#4a4b43] hover:bg-[#1b1e1b]
            peer-checked:border-gold peer-checked:bg-[#1b1e1b]
            peer-focus-visible:ring-2 peer-focus-visible:ring-gold peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-bg
          "
                  >
                    <span
                      className="
              flex h-10 w-10 items-center justify-center rounded-full border border-[#4a4b43]
              text-[13px] font-semibold text-muted transition-colors duration-300
              peer-checked:border-gold group-[.peer-checked]:text-gold
              [.peer:checked~&]:border-gold [.peer:checked~&]:bg-gold [.peer:checked~&]:text-[#171613]
            "
                    >
                      {s.n}
                    </span>

                    <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-cream [.peer:checked~div_&]:text-gold">
                      {s.title}
                    </p>

                    <p className="text-[13px] leading-relaxed text-muted">
                      {s.desc}
                    </p>
                  </div>
                </label>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-bg py-24">
        <Container>
          <Reveal>
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
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {insights.map((a, i) => (
              <Reveal key={a.slug} delay={i * 120}>
                <InsightCard
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

      <Reveal>
        <CTASection
          title="Ready to Understand Your Project Condition?"
          description="Engage LMCS for a rigorous, independent assessment of your most critical initiatives. Replace assumption with evidence."
        />
      </Reveal>
    </>
  );
}
