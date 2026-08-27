import type { ReactNode } from "react";
import {
  ClipboardCheck,
  Gauge,
  PackageCheck,
  Thermometer,
  TrendingUp,
  Users2,
  Zap,
} from "lucide-react";

import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import RelationalDiagram from "@/components/atlas/RelationalDiagram";
import EcosystemDiagram from "@/components/atlas/EcosystemDiagram";
import SectionHeading from "@/components/atlas/SectionHeading";

import {
  accountabilityFlow,
  atlasCta,
  audienceGroups,
  closingStatement,
  comparisonContent,
  completeNotReady,
  deliverables,
  ecosystemNodes,
  faqItems,
  heroContent,
  heroDiagramNodes,
  intelligenceModules,
  problemContent,
  processFlowFinal,
  processFlowSteps,
} from "@/lib/atlas-content";
import Image from "next/image";

const audienceIcons = {
  trending: TrendingUp,
  clipboard: ClipboardCheck,
  users: Users2,
} as const;

const moduleIcons = {
  zap: Zap,
  gauge: Gauge,
  thermometer: Thermometer,
  package: PackageCheck,
} as const;

function Pill({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm border border-border px-4 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-muted transition-colors duration-300 hover:border-gold/50 hover:text-gold ${className}`}
    >
      {children}
    </span>
  );
}

export default function AtlasPage() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <section className="relative overflow-hidden border-b border-border bg-bg-alt">
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/insight/1insight.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-[#0d0f0e]/65" />

          {/* Left-to-right gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-[#0d0f0e]/95 via-[#0d0f0e]/75 to-[#0d0f0e]/40" />

          {/* Bottom fade */}
          <div className="absolute inset-0 bg-linear-to-t from-[#0d0f0e] via-transparent to-transparent" />
        </div>

        <Container className="relative z-10 grid max-w-6xl items-center gap-16 py-24 md:py-28 lg:grid-cols-2">
          <Reveal direction="right">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
              {heroContent.eyebrow}
            </p>

            <h1 className="mt-5 font-serif text-4xl leading-[1.12] text-cream md:text-5xl lg:text-[56px]">
              <span className="text-gold">{heroContent.heading[0].text}</span>{" "}
              {heroContent.heading[1].text}
              <br />
              {heroContent.headingLine2}
            </h1>

            <p className="mt-7 text-[17px] font-medium leading-8 text-cream/90 md:text-[18px]">
              {heroContent.subheading}
            </p>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-muted md:text-[16px]">
              {heroContent.paragraph}
            </p>

            <a
              href="/contact"
              className="mt-9 inline-flex items-center justify-center rounded-sm bg-gold px-7 py-3.5 text-[12px] font-semibold uppercase tracking-widest text-bg transition-transform duration-300 hover:-translate-y-0.5 hover:bg-gold-light"
            >
              {heroContent.cta}
            </a>
          </Reveal>

          <Reveal direction="left" delay={150}>
            <RelationalDiagram nodes={heroDiagramNodes} />
          </Reveal>
        </Container>
      </section>
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container className="max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow={problemContent.eyebrow}
              heading={problemContent.heading}
            />
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="right" delay={100}>
              <div className="space-y-5">
                {problemContent.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="text-[15px] leading-8 text-muted md:text-[16px]"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal direction="left" delay={200}>
              <div className="rounded-lg border border-gold/25 bg-bg-alt/40 p-6 md:p-8">
                <div className="space-y-3">
                  {problemContent.fragmentedRows.map((row, i) => (
                    <div key={i} className="grid grid-cols-3 gap-3">
                      {row.map((item) => (
                        <Pill key={item}>{item}</Pill>
                      ))}
                    </div>
                  ))}
                  <Pill className="w-full">
                    {problemContent.fragmentedFullWidth}
                  </Pill>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100} className="mx-auto mt-16 max-w-2xl text-center">
            <p className="font-serif text-2xl text-gold-light md:text-3xl">
              {problemContent.statement}
            </p>
            <p className="mt-4 text-[15px] leading-7 text-muted md:text-[16px]">
              {problemContent.statementSub}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- Audience Grid ---------------- */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container className="max-w-6xl">
          <Reveal>
            <div className="grid divide-y divide-border rounded-lg border border-border md:grid-cols-3 md:divide-x md:divide-y-0">
              {audienceGroups.map((group, i) => {
                const Icon = audienceIcons[group.icon];
                return (
                  <Reveal
                    key={group.title}
                    delay={i * 120}
                    className="p-8 md:p-9"
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-4 w-4 text-gold" strokeWidth={2} />
                      <h3 className="font-serif text-lg text-cream md:text-xl">
                        {group.title}
                      </h3>
                    </div>
                    <div className="mt-4 h-px w-full bg-border" />
                    <ul className="mt-5 space-y-3">
                      {group.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-2.5 text-[14px] leading-6 text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- Operational Process Flow ---------------- */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container className="max-w-6xl">
          <Reveal>
            <SectionHeading heading="Operational Process Flow" />
          </Reveal>

          <Reveal
            delay={100}
            className="mt-12 rounded-lg border border-border p-6 md:p-8"
          >
            <div className="flex flex-wrap items-center justify-center gap-3">
              {processFlowSteps.map((step) => (
                <Pill key={step}>{step}</Pill>
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <Pill>{processFlowFinal}</Pill>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- Complete is Not Ready ---------------- */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container className="max-w-6xl">
          <Reveal>
            <SectionHeading heading={completeNotReady.heading} />
          </Reveal>

          <Reveal
            delay={100}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-center"
          >
            {completeNotReady.chain.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                <span className="font-serif text-lg font-semibold text-gold md:text-xl">
                  {item}
                </span>
                {i < completeNotReady.chain.length - 1 && (
                  <span className="text-base text-muted/60">&ne;</span>
                )}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ---------------- Traditional vs Atlas ---------------- */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container className="max-w-6xl">
          <div className="grid overflow-hidden rounded-lg border border-border md:grid-cols-2">
            <Reveal direction="right" className="p-8 md:p-10">
              <h3 className="text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-cream">
                {comparisonContent.traditional.title}
              </h3>
              <div className="mt-4 h-px w-full bg-border" />
              <ul className="mt-6 space-y-5 text-center">
                {comparisonContent.traditional.items.map((item, i) => (
                  <li key={item}>
                    <span className="text-[14px] text-muted">{item}</span>
                    {i < comparisonContent.traditional.items.length - 1 && (
                      <div className="mx-auto mt-5 h-px w-full max-w-55 bg-border" />
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              direction="left"
              delay={120}
              className="relative border-t border-gold/60 p-8 md:border-l md:border-t-0 md:p-10"
            >
              <span className="absolute left-0 top-0 hidden h-full w-0.75 bg-gold md:block" />
              <h3 className="text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-gold">
                {comparisonContent.atlas.title}
              </h3>
              <div className="mt-4 h-px w-full bg-border" />
              <ul className="mt-6 space-y-5 text-center">
                {comparisonContent.atlas.items.map((item, i) => (
                  <li key={item}>
                    <span className="text-[14px] text-gold-light">{item}</span>
                    {i < comparisonContent.atlas.items.length - 1 && (
                      <div className="mx-auto mt-5 h-px w-full max-w-55 bg-border" />
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={150} className="mx-auto mt-10 max-w-2xl text-center">
            <p className="text-[15px] leading-7 text-muted md:text-[16px]">
              {comparisonContent.statement}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- Meetings to Accountability ---------------- */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container className="max-w-6xl">
          <Reveal>
            <SectionHeading heading="Meetings to Accountability" />
          </Reveal>

          <Reveal
            delay={100}
            className="mt-12 flex flex-wrap items-center justify-center gap-x-2 gap-y-4 rounded-lg border border-border p-6 md:p-8"
          >
            {accountabilityFlow.map((step, i) => {
              const isLast = i === accountabilityFlow.length - 1;
              return (
                <span key={step} className="flex items-center gap-2">
                  <span
                    className={`whitespace-nowrap rounded-sm border px-4 py-2 text-[12px] font-semibold ${
                      isLast
                        ? "border-gold/60 text-gold"
                        : "border-border text-cream"
                    }`}
                  >
                    {step}
                  </span>
                  {!isLast && <span className="text-muted/50">&rarr;</span>}
                </span>
              );
            })}
          </Reveal>
        </Container>
      </section>

      {/* ---------------- Intelligence Modules ---------------- */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container className="max-w-6xl">
          <Reveal>
            <SectionHeading heading="Intelligence Modules" />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {intelligenceModules.map((mod, i) => {
              const Icon = moduleIcons[mod.icon];
              return (
                <Reveal key={mod.title} delay={i * 100}>
                  <div className="group h-full rounded-lg border border-border p-7 transition-colors duration-300 hover:border-gold/50 md:p-8">
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-4 w-4 text-gold" strokeWidth={2} />
                      <h3 className="font-serif text-xl text-gold">
                        {mod.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-[14px] leading-7 text-muted">
                      {mod.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------------- What Atlas Delivers ---------------- */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container className="max-w-5xl">
          <Reveal>
            <SectionHeading heading="What Atlas Delivers" />
          </Reveal>

          <Reveal
            delay={100}
            className="mt-12 overflow-hidden rounded-lg border border-border"
          >
            <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] bg-bg-alt px-6 py-4 md:px-8">
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-cream">
                Capability
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-cream">
                Description
              </span>
            </div>
            {deliverables.map((row) => (
              <div
                key={row.capability}
                className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] gap-4 border-t border-border px-6 py-5 transition-colors duration-300 hover:bg-bg-alt/40 md:px-8"
              >
                <span className="font-serif text-[15px] text-gold md:text-base">
                  {row.capability}
                </span>
                <span className="text-[14px] leading-6 text-muted md:text-[15px]">
                  {row.description}
                </span>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* ---------------- Project Ecosystem ---------------- */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container className="max-w-5xl">
          <Reveal>
            <SectionHeading heading="The Project Ecosystem" />
          </Reveal>

          <Reveal delay={100} className="mt-12">
            <EcosystemDiagram nodes={ecosystemNodes} />
          </Reveal>
        </Container>
      </section>

      {/* ---------------- A Site That Can Explain Itself ---------------- */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container className="max-w-3xl">
          <Reveal>
            <SectionHeading heading="A Site That Can Explain Itself" />
          </Reveal>

          <div className="mt-12 space-y-4">
            {faqItems.map((item, i) => (
              <Reveal key={item.question} delay={i * 90}>
                <div className="rounded-lg border border-border p-6 transition-colors duration-300 hover:border-gold/40 md:p-7">
                  <p className="text-[13px] font-semibold text-gold">
                    {item.question}
                  </p>
                  <p className="mt-2 text-[15px] leading-7 text-muted">
                    {item.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ---------------- Closing statement ---------------- */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container className="max-w-3xl">
          <Reveal className="text-center">
            <h2 className="font-serif text-3xl leading-tight text-cream md:text-4xl">
              {closingStatement.heading}
            </h2>
            <p className="mt-4 text-[15px] leading-7 text-muted md:text-[16px]">
              {closingStatement.sub}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- Bottom CTA ---------------- */}
      <div id="contact">
        <CTASection title={atlasCta.title} description={atlasCta.description} />
      </div>
    </>
  );
}
