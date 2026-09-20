// FILE PATH: components/home/PathSteps.tsx

"use client";

import { useState } from "react";
import type { PathStep } from "@/lib/api";

export default function PathSteps({ steps }: { steps: PathStep[] }) {
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.max(
      0,
      steps.findIndex((s) => s.active),
    ),
  );

  return (
    <div
      role="radiogroup"
      aria-label="The path to delivery confidence"
      className="relative mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
    >
      {/* Connector line: sits behind the cards, only visible in the gaps */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-16 hidden h-px bg-[#3b3d35] lg:block"
      />

      {steps.map((s, i) => {
        const isActive = i === activeIndex;

        return (
          <button
            key={s.n}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => setActiveIndex(i)}
            className={`relative flex flex-col items-center rounded-xl border bg-[#111411] px-6 pb-8 pt-8 text-center transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
              isActive
                ? "border-gold"
                : "border-[#3d3d35] hover:border-[#81704b]"
            }`}
          >
            <span
              className={`flex h-16 w-16 items-center justify-center rounded-xl border font-serif text-lg transition-colors duration-300 ${
                isActive
                  ? "border-gold bg-gold text-[#171613]"
                  : "border-[#4a493f] bg-[#30312e] text-cream"
              }`}
            >
              {s.n}
            </span>

            <span
              className={`mt-6 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 ${
                isActive ? "text-gold" : "text-cream"
              }`}
            >
              {s.title}
            </span>

            <span className="mt-2 max-w-56 text-[13px] leading-relaxed text-muted">
              {s.desc}
            </span>
          </button>
        );
      })}
    </div>
  );
}