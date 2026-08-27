// FILE PATH: components/legal/LegalDocument.tsx

"use client";

import { useEffect, useRef, useState } from "react";

import Container from "@/components/Container";
import Button from "@/components/Button";
import Reveal from "@/components/Reveal";

import type { LegalDocument } from "@/lib/legal";

type LegalDocumentProps = {
  doc: LegalDocument;
};

export default function LegalDocumentBlock({ doc }: LegalDocumentProps) {
  const [activeId, setActiveId] = useState(doc.sections[0]?.id ?? "");

  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (!doc.sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (!visibleEntry) return;

        const id = visibleEntry.target.getAttribute("data-section-id");

        if (id) {
          setActiveId(id);
        }
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      },
    );

    Object.values(sectionRefs.current).forEach((node) => {
      if (node) {
        observer.observe(node);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [doc]);

  return (
    <div id={doc.id}>
      {/* Document Hero */}
      <section className="border-b border-border bg-bg-alt py-20 md:py-24">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <h1 className="font-serif text-4xl leading-tight text-cream md:text-5xl">
              {doc.title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-muted md:text-[15.5px]">
              {doc.subtitle}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Document Content */}
      <section className="border-b border-border bg-bg py-20 md:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[260px_1fr]">
          {/* Table of Contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-gold">
                Contents
              </p>

              <ul className="mt-5 space-y-1 border-l border-border">
                {doc.sections.map((section) => {
                  const isActive = activeId === section.id;

                  return (
                    <li key={section.id}>
                      <a
                        href={`#${doc.id}-${section.id}`}
                        aria-current={isActive ? "location" : undefined}
                        className={`block border-l-2 py-2 pl-4 text-[14px] transition-colors ${
                          isActive
                            ? "border-gold text-gold"
                            : "border-transparent text-muted hover:text-cream"
                        }`}
                      >
                        {section.n}. {section.shortTitle}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Sections */}
          <div className="divide-y divide-border">
            {doc.sections.map((section, index) => (
              <Reveal
                key={section.id}
                delay={index * 80}
                className={index === 0 ? "pb-12" : "py-12"}
              >
                <div
                  id={`${doc.id}-${section.id}`}
                  data-section-id={section.id}
                  ref={(node) => {
                    sectionRefs.current[section.id] = node;
                  }}
                  className="scroll-mt-28"
                >
                  {/* Section Heading */}
                  <div className="flex items-baseline gap-4">
                    <span className="font-serif text-4xl leading-none text-gold md:text-5xl">
                      {section.n}
                    </span>

                    <h2 className="font-serif text-2xl leading-tight text-cream md:text-3xl">
                      {section.title}
                    </h2>
                  </div>

                  {/* Paragraphs */}
                  <div className="mt-6 space-y-4">
                    {section.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        key={paragraphIndex}
                        className="text-[15px] leading-relaxed text-muted md:text-[15.5px]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Highlight */}
                  {section.highlight && (
                    <div className="mt-4 max-w-md border border-border bg-bg-alt p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                        {section.highlight.label}
                      </p>

                      <p className="mt-2 text-[15px] text-cream">
                        {section.highlight.value}
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  {section.cta && (
                    <div className="mt-6">
                      <Button href="/contact" variant="outline">
                        {section.cta.label}
                      </Button>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
