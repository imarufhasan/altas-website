import Link from "next/link";
import Container from "@/components/Container";
import Button from "@/components/Button";
import SectionLabel from "@/components/SectionLabel";
import InsightCard from "@/components/InsightCard";
import { INSIGHTS } from "@/lib/insights";

export default function InsightsPage() {
  const latest = INSIGHTS.slice(1, 4);

  return (
    <>
      <section className="relative overflow-hidden border-b border-border bg-bg-alt py-24">
        <Container>
          <SectionLabel>Insights</SectionLabel>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-[1.15] text-cream md:text-[52px]">
            Perspectives on Mission-Critical Delivery.
          </h1>
          <p className="mt-6 max-w-xl border-l border-gold pl-6 text-[16px] leading-relaxed text-muted">
            Explore LMCS perspectives on Project Drift, Delivery Confidence,
            readiness, leadership, governance, and project assessment.
            Empirical findings for executive oversight.
          </p>
        </Container>
      </section>

      <section className="border-b border-border bg-bg py-24">
        <Container>
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
        </Container>
      </section>

      <section className="border-b border-border bg-bg-alt py-24 text-center">
        <Container>
          <span className="mx-auto mb-4 inline-flex text-3xl text-gold" aria-hidden>
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
        </Container>
      </section>
    </>
  );
}
