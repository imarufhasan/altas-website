import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import InsightCard from "@/components/InsightCard";
import { INSIGHTS } from "@/lib/insights";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";

export default function InsightsPage() {
  const latest = INSIGHTS.slice(1, 4);

  return (
    <>
      <PageHero
        label="Insights"
        heading="Perspectives on Mission-Critical Delivery."
        description="Explore LMCS perspectives on Project Drift, Delivery Confidence, readiness, leadership, governance, and project assessment. Empirical findings for executive oversight."
        buttonLabel="Schedule an Executive Discussion"
        image="/images/heroes/project_insights.png"
      />

      <section className="border-b border-border bg-bg py-24">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between">
              <h2 className="font-serif text-3xl text-cream md:text-4xl">
                Latest Analysis
              </h2>
              <Link
                href="/insights/all"
                className="text-[13px] font-semibold uppercase tracking-widest text-gold hover:text-gold-light"
              >
                View All →
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {latest.map((a) => (
                <InsightCard
                  key={a.slug}
                  href={`/insights/${a.slug}`}
                  tag={a.tag}
                  date={a.date}
                  title={a.title}
                  excerpt={a.excerpt}
                  tone="wide"
                  image={a.image}
                />
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border bg-bg-alt py-24 text-center">
        <Container>
          <Reveal>
            <span
              className="mx-auto mb-4 inline-flex text-3xl text-gold"
              aria-hidden
            >
              🏛
            </span>
            <h2 className="font-serif text-3xl text-cream md:text-4xl">
              Continue the Conversation.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-muted">
              Engage with LMCS to apply these perspectives to your
              mission-critical initiatives. We provide unbiased, empirical
              assessment for executive leadership.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/contact">Schedule an Executive Discussion</Button>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
