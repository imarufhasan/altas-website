"use client";

import { useState } from "react";
import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";

type Domain = {
  title: string;
  desc: string;
};

type Props = {
  domains: Domain[];
};

export default function DomainsSection({ domains }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="border-b border-border bg-bg py-24">
      <Container>
        <SectionLabel>Methodology</SectionLabel>

        <h2 className="mt-3 max-w-xl font-serif text-3xl text-cream md:text-4xl">
          Understand the Condition Beneath the Commitment.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-0 md:grid-cols-3">
          {domains.map((domain, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={domain.title}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`group relative min-h-42.5 border-t p-0 py-6 text-left transition-all duration-300 md:min-h-42.5 ${
                  isActive
                    ? "border-gold"
                    : "border-[#3b3d35] hover:border-[#81704b]"
                }`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-px transition-all duration-300 ${
                    isActive ? "bg-gold" : "bg-transparent"
                  }`}
                />

                <div className="pr-5">
                  <h3
                    className={`font-serif text-xl transition-colors duration-300 ${
                      isActive
                        ? "text-cream"
                        : "text-[#d8d5cc] group-hover:text-cream"
                    }`}
                  >
                    {domain.title}
                  </h3>

                  <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                    {domain.desc}
                  </p>
                </div>

                <span
                  className={`absolute bottom-5 right-1 font-serif text-lg transition-all duration-300 ${
                    isActive
                      ? "translate-x-0 text-gold opacity-100"
                      : "translate-x-1 text-gold opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                >
                  →
                </span>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
