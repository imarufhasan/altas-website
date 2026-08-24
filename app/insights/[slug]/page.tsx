import Image from "next/image";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { getInsight, INSIGHTS } from "@/lib/insights";

export function generateStaticParams() {
  return INSIGHTS.map((item) => ({
    slug: item.slug,
  }));
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const article = getInsight(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Hero */}
      <section className="border-b border-border bg-bg-alt py-20 md:py-24">
        <Container className="max-w-4xl">
          <div className="max-w-3xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
              {article.breadcrumb ?? article.tag ?? "Insights"}
            </p>

            <h1 className="mt-5 font-serif text-4xl leading-[1.12] text-cream md:text-5xl lg:text-[58px]">
              {article.title}
            </h1>

            <p className="mt-7 max-w-2xl border-l border-gold pl-6 text-[16px] leading-8 text-muted md:text-[17px]">
              {article.intro ?? article.excerpt}
            </p>

            {(article.date || article.readTime) && (
              <div className="mt-8 flex flex-wrap items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
                {article.date && <span>{article.date}</span>}

                {article.date && article.readTime && (
                  <span aria-hidden="true">•</span>
                )}

                {article.readTime && <span>{article.readTime}</span>}
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Featured Image */}
      <section className="border-b border-border bg-bg py-10 md:py-14">
        <Container className="max-w-5xl">
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-sm border border-border bg-bg-alt">
            {article.image ? (
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-[#2a2822] to-[#141311]" />
            )}
          </div>
        </Container>
      </section>

      {/* Article */}
      <article className="bg-bg py-16 md:py-20">
        <Container className="max-w-3xl">
          {article.body?.map((section, sectionIndex) => (
            <section
              key={`${section.heading}-${sectionIndex}`}
              className="mb-14 last:mb-0"
            >
              <h2 className="font-serif text-2xl leading-tight text-cream md:text-3xl">
                {section.heading}
              </h2>

              <div className="mt-6 space-y-5">
                {section.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-[16px] leading-8 text-muted md:text-[17px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}

          {/* Pull Quote */}
          {article.pullQuote && (
            <blockquote className="my-16 border-y border-border py-10">
              <p className="font-serif text-2xl italic leading-relaxed text-gold-light md:text-3xl">
                &ldquo;{article.pullQuote.quote}&rdquo;
              </p>

              <cite className="mt-5 block text-[11px] font-semibold not-italic uppercase tracking-[0.16em] text-muted">
                {article.pullQuote.attribution}
              </cite>
            </blockquote>
          )}
        </Container>
      </article>

      {/* Bottom CTA */}
      <CTASection
        title="Ready to restore clarity to your mission-critical initiative?"
        description="Implement LMCS's structured approach to navigate disruptions with evidence-based precision."
      />
    </>
  );
}
