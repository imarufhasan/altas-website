import type { ReactNode } from "react";
import {
  ClipboardCheck,
  Gauge,
  PackageCheck,
  ShieldCheck,
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
  acronymKey,
  atlasCta,
  audienceGroups,
  boundariesContent,
  comparisonContent,
  completeNotReady,
  continuityCard,
  deliverables,
  deploymentContent,
  deploymentSteps,
  ecosystemNodes,
  faqItems,
  audienceContent,
  futureRoadmap,
  governanceCard,
  heroContent,
  heroDiagramNodes,
  integrationContent,
  intelligenceModules,
  currentCapabilities,
  lifecycleFlowContent,
  lifecycleStages,
  problemContent,
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
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm border border-border px-3 py-2 text-[10px] font-semibold uppercase tracking-widest text-muted transition-colors duration-300 hover:border-gold/50 hover:text-gold sm:px-4 sm:py-2.5 sm:text-[11px] ${className}`}
    >
      {children}
    </span>
  );
}

// Small uppercase badge used for "ACTIVE IN PRODUCTION" / "SUBJECT TO
// FOUNDER CONFIRMATION" style tags.
function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-sm border border-border px-3 py-1.5 text-[9px] font-semibold uppercase tracking-widest text-muted sm:text-[10px]">
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

          {/* Dark overlay — matches the design's exact background (#121411) */}
          <div className="absolute inset-0 bg-[#121411]/65" />

          {/* Left-to-right gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-[#121411]/95 via-[#121411]/75 to-[#121411]/40" />

          {/* Bottom fade */}
          <div className="absolute inset-0 bg-linear-to-t from-[#121411] via-transparent to-transparent" />
        </div>

        <Container
          wide
          className="relative z-10 grid max-w-7xl items-center gap-16 py-10 md:py-10 lg:grid-cols-2"
        >
          <Reveal direction="right">
            {/* <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
              {heroContent.eyebrow}
            </p> */}

            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.12] text-cream md:text-5xl lg:text-[56px]">
              <span className="text-gold">{heroContent.heading[0].text}</span>{" "}
              {heroContent.heading[1].text}
              <br />
              {heroContent.headingLine2}
            </h1>

            <p className="mt-7 text-[17px] font-semibold leading-8 text-cream/90 md:text-[18px]">
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

      {/* ---------------- The Problem ---------------- */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container wide className="max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow={problemContent.eyebrow}
              heading={problemContent.heading}
            />
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left side — paragraphs */}
            <Reveal direction="right" delay={100} className="space-y-5">
              {problemContent.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-8 text-muted md:text-[16px]"
                >
                  {p}
                </p>
              ))}
            </Reveal>

            {/* Right side — fragmented rows */}
            <Reveal
              direction="left"
              delay={200}
              className="rounded-lg border border-gold/25 bg-bg-alt/40 p-6 md:p-8"
            >
              <div className="space-y-3">
                {problemContent.fragmentedRows.map((row, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-2 gap-3 sm:grid-cols-3"
                  >
                    {row.map((item) => (
                      <Pill key={item}>{item}</Pill>
                    ))}
                  </div>
                ))}

                <Pill className="w-full">
                  {problemContent.fragmentedFullWidth}
                </Pill>
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

      {/* ---------------- Who Atlas Supports ---------------- */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container wide className="max-w-8xl">
          <Reveal>
            <SectionHeading
              eyebrow={audienceContent.eyebrow}
              heading={audienceContent.heading}
            />
          </Reveal>

          <Reveal delay={80} className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-[14px] leading-7 text-muted md:text-[15px]">
              {audienceContent.subheading}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {audienceGroups.map((group, i) => {
              const Icon = audienceIcons[group.icon];
              return (
                <Reveal key={group.title} delay={i * 120}>
                  <div className="flex h-full flex-col rounded-lg border border-border p-7 md:p-8">
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-4 w-4 text-gold" strokeWidth={2} />
                      <h3 className="font-serif text-lg font-semibold text-cream md:text-xl">
                        {group.title}
                      </h3>
                    </div>
                    <div className="mt-4 h-px w-full bg-border" />

                    <div className="mt-5 space-y-4">
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gold/80">
                          The Problem
                        </p>
                        <p className="mt-1.5 text-[13px] leading-6 text-gray-300">
                          {group.problem}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gold/80">
                          Connected Intelligence
                        </p>
                        <p className="mt-1.5 text-[13px] leading-6 text-gray-300">
                          {group.intelligence}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gold/80">
                          Actionable Outcome
                        </p>
                        <p className="mt-1.5 text-[13px] leading-6 text-gray-300">
                          {group.outcome}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 h-px w-full bg-border" />
                    <ul className="mt-4 space-y-3">
                      {group.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-2.5 text-[13px] leading-6 text-gray-300"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ---------------- Operational Lifecycle Flow ---------------- */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container wide className="max-w-7xl">
          <Reveal>
            <SectionHeading
              eyebrow={lifecycleFlowContent.eyebrow}
              heading={lifecycleFlowContent.heading}
            />
          </Reveal>

          <Reveal delay={80} className="mx-auto mt-5 max-w-3xl text-center">
            <p className="text-[14px] leading-7 text-muted md:text-[15px]">
              {lifecycleFlowContent.subheading}
            </p>
          </Reveal>

          <Reveal
            delay={100}
            className="mt-12 rounded-lg border border-gold/25 p-5 md:p-7"
          >
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
              {lifecycleStages.map((stage, i) => (
                <Reveal key={stage.number} delay={i * 40}>
                  <div className="flex h-full flex-col rounded-md border border-border p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                      {stage.number}
                    </p>
                    <h3 className="mt-2 font-serif text-base font-semibold leading-snug text-cream">
                      {stage.title}
                    </h3>
                    <p className="mt-2.5 text-[12.5px] leading-6 text-muted">
                      {stage.description}
                    </p>
                    <div className="mt-4 h-px w-full bg-border" />
                    <p className="mt-3 text-[9.5px] font-semibold uppercase tracking-[0.12em] text-gold/80">
                      {stage.tag}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal
            delay={150}
            className="mx-auto mt-6 max-w-4xl text-center text-[12px] leading-6 text-muted"
          >
            <p>{acronymKey}</p>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- Complete is Not Ready ---------------- */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container wide className="max-w-6xl">
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
        <Container wide className="max-w-6xl">
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
        <Container wide className="max-w-6xl">
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
        <Container wide className="max-w-6xl">
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
                      <h3 className="font-serif text-xl font-semibold text-gold">
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
        <Container wide className="max-w-6xl">
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
                <span className="font-serif text-[15px] font-semibold text-gold md:text-base">
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
        <Container wide className="max-w-6xl">
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

      {/* ---------------- LMCS & Atlas Integration ---------------- */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container wide className="max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow={integrationContent.eyebrow}
              heading={integrationContent.heading}
            />
          </Reveal>

          <Reveal
            delay={80}
            className="mx-auto mt-6 max-w-3xl text-center text-[15px] leading-7 text-muted md:text-[16px]"
          >
            <p>{integrationContent.paragraph}</p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Operational Continuity card */}
            <Reveal direction="right" delay={100}>
              <div className="flex h-full flex-col rounded-lg border border-border p-7 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                  {continuityCard.eyebrow}
                </p>
                <h3 className="mt-3 font-serif text-xl font-semibold text-cream md:text-2xl">
                  {continuityCard.title}
                </h3>
                <div className="mt-5 space-y-4">
                  {continuityCard.paragraphs.map((p, i) => (
                    <p key={i} className="text-[14px] leading-7 text-muted">
                      {p}
                    </p>
                  ))}
                </div>
                <div className="mt-6 h-px w-full bg-border" />
                <div className="mt-4 flex items-start gap-2.5">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                  <span className="text-[13px] text-muted">
                    {continuityCard.footnote}
                  </span>
                </div>
              </div>
            </Reveal>

            {/* Governance & Accountability card */}
            <Reveal direction="left" delay={150}>
              <div className="flex h-full flex-col rounded-lg border border-border p-7 md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                  {governanceCard.eyebrow}
                </p>
                <h3 className="mt-3 font-serif text-xl text-cream md:text-2xl">
                  {governanceCard.title}
                </h3>
                <div className="mt-5 rounded-sm border border-border bg-white/[0.03] p-4">
                  <p className="text-[14px] leading-7 text-cream/90">
                    {governanceCard.quote}
                  </p>
                </div>
                <p className="mt-5 text-[14px] leading-7 text-muted">
                  {governanceCard.paragraph}
                </p>
                <div className="mt-6 h-px w-full bg-border" />
                <div className="mt-4 flex items-start gap-2.5">
                  <ShieldCheck
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold"
                    strokeWidth={2}
                  />
                  <span className="text-[13px] text-gold">
                    {governanceCard.footnote}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------- Structured Access & Deployment Path ---------------- */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container wide className="max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow={deploymentContent.eyebrow}
              heading={deploymentContent.heading}
            />
          </Reveal>

          <Reveal
            delay={100}
            className="mt-12 rounded-lg border border-gold/25 bg-bg-alt/40 p-6 md:p-8"
          >
            <div className="grid gap-6 md:grid-cols-3">
              {deploymentSteps.map((step, i) => (
                <Reveal key={step.step} delay={i * 100}>
                  <div className="flex h-full flex-col rounded-md border border-border bg-bg p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gold">
                      {step.step}
                    </p>
                    <h3 className="mt-3 font-serif text-lg font-semibold text-cream">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-6 text-muted">
                      {step.description}
                    </p>
                    <div className="mt-5 h-px w-full bg-border" />
                    <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-gold/80">
                      {step.tag}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ---------------- Current Operational Boundaries vs. Roadmap ---------------- */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container wide className="max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow={boundariesContent.eyebrow}
              heading={boundariesContent.heading}
            />
          </Reveal>
          <Reveal delay={80} className="mx-auto mt-4 max-w-2xl text-center">
            <p className="text-[14px] leading-7 text-muted md:text-[15px]">
              {boundariesContent.subheading}
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {/* Current capabilities */}
            <Reveal direction="right" delay={100}>
              <div className="h-full rounded-lg border border-gold/30 p-6 md:p-7">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-serif text-lg font-semibold text-cream md:text-xl">
                    {currentCapabilities.title}
                  </h3>
                  <Badge>{currentCapabilities.badge}</Badge>
                </div>
                <div className="mt-5 h-px w-full bg-border" />
                <ul className="mt-5 space-y-4">
                  {currentCapabilities.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex gap-2.5 text-[13px] leading-6"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span className="text-muted">
                        <span className="font-semibold text-cream">
                          {item.label}:
                        </span>{" "}
                        {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Future roadmap */}
            <Reveal direction="left" delay={150}>
              <div className="h-full rounded-lg border border-border p-6 md:p-7">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-serif text-lg font-semibold text-cream md:text-xl">
                    {futureRoadmap.title}
                  </h3>
                  <Badge>{futureRoadmap.badge}</Badge>
                </div>
                <div className="mt-5 h-px w-full bg-border" />
                <ul className="mt-5 space-y-4">
                  {futureRoadmap.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex gap-2.5 text-[13px] leading-6"
                    >
                      <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border border-muted" />
                      <span className="text-muted">
                        <span className="font-semibold text-cream/80">
                          {item.label}:
                        </span>{" "}
                        {item.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ---------------- Bottom CTA ---------------- */}
      <div id="contact">
        <CTASection title={atlasCta.title} description={atlasCta.description} />
      </div>
    </>
  );
}
