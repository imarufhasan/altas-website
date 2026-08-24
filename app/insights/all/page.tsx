import Container from "@/components/Container";
import InsightCard from "@/components/InsightCard";
import SectionLabel from "@/components/SectionLabel";
import { INSIGHTS } from "@/lib/insights";

export default function InsightsAllPage() {
  return (
    <>
      <section className="border-b border-border bg-bg py-24 text-center">
        <Container>
          <SectionLabel>Archive / All Findings</SectionLabel>
          <h1 className="mx-auto mt-4 max-w-3xl font-serif text-4xl leading-tight text-cream md:text-5xl">
            Strategic Index of Mission-Critical Findings
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-muted">
            A living repository of definitive research, forensic analysis,
            and governance protocols designed to mitigate catastrophic
            project drift in complex environments.
          </p>
        </Container>
      </section>

      <section className="bg-bg py-16">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {INSIGHTS.map((a) => (
              <InsightCard
                key={a.slug}
                href={`/insights/${a.slug}`}
                tag={a.tag}
                title={a.title}
                excerpt={a.excerpt}
               image={a.image}
              />
            ))}
          </div>

          <nav
            aria-label="Pagination"
            className="mt-16 flex items-center justify-center gap-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted">
              ‹
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-gold text-gold">
              1
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted">
              2
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted">
              3
            </span>
            <span className="px-1 text-muted">…</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted">
              12
            </span>
            <span className="flex h-9 w-9 items-center justify-center rounded-sm border border-border text-muted">
              ›
            </span>
          </nav>
        </Container>
      </section>
    </>
  );
}
