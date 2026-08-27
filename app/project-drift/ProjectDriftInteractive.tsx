"use client";

import { useState } from "react";

import Icon from "@/components/Icon";

type DriftItem = {
  title: string;
  desc: string;
  icon: React.ComponentProps<typeof Icon>["name"];
};

type ProjectDriftInteractiveProps = {
  reported: DriftItem[];
  evidence: DriftItem[];
};

export default function ProjectDriftInteractive({
  reported,
  evidence,
}: ProjectDriftInteractiveProps) {
  const [activeSide, setActiveSide] = useState<"reported" | "evidence">(
    "evidence",
  );

  return (
    <div
      className="
    relative
    overflow-hidden
    rounded-md
    border
    border-border
    bg-card
    shadow-[0_12px_40px_rgba(0,0,0,0.16)]
  "
    >
      {/* Main comparison card */}
      <div
        className="
          relative
          overflow-hidden
          rounded-md
          border
          border-border
          bg-card
          shadow-[0_12px_40px_rgba(0,0,0,0.16)]
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* =====================================================
              SIDE A — REPORTED CONDITION
          ====================================================== */}
          <button
            type="button"
            onClick={() => setActiveSide("reported")}
            className={`
              group
              relative
              w-full
              text-left
              outline-none
              focus:outline-none
              focus-visible:outline-none
              focus-visible:ring-0
              transition-colors
              duration-300
              p-6
              sm:p-8
              md:p-10
              ${
                activeSide === "reported"
                  ? "bg-[#171914]"
                  : "bg-transparent hover:bg-[#171914]/60"
              }
            `}
          >
            {/* Active accent */}
            <span
              aria-hidden="true"
              className={`
                pointer-events-none
                absolute
                left-0
                top-0
                h-full
                w-px
                bg-gold
                transition-opacity
                duration-300
                ${
                  activeSide === "reported"
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-30"
                }
              `}
            />

            {/* Side label */}
            <div className="flex items-center gap-2">
              <Icon
                name="clock"
                className="h-3.5 w-3.5 text-muted"
                strokeWidth={1.5}
              />

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-muted
                "
              >
                Side A
              </p>
            </div>

            {/* Heading */}
            <h3
              className="
                mt-3
                font-serif
                text-2xl
                leading-tight
                text-cream
              "
            >
              Reported Condition
            </h3>

            {/* Reported items */}
            <ul className="mt-8 space-y-7">
              {reported.map((item) => (
                <li
                  key={item.title}
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >
                  {/* Item icon */}
                  <div
                    className="
                      mt-0.5
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      text-muted
                    "
                  >
                    <Icon
                      name={item.icon}
                      className="h-3.75 w-3.75"
                      strokeWidth={1.45}
                    />
                  </div>

                  {/* Item content */}
                  <div className="min-w-0">
                    <p
                      className="
                        text-[13px]
                        font-semibold
                        leading-snug
                        text-cream
                      "
                    >
                      {item.title}
                    </p>

                    <p
                      className="
                        mt-1.5
                        text-[13px]
                        leading-relaxed
                        text-muted
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </button>

          {/* =====================================================
              SIDE B — EVIDENCE-SUPPORTED CONDITION
          ====================================================== */}
          <button
            type="button"
            onClick={() => setActiveSide("evidence")}
            className={`
              group
              relative
              w-full
              text-left
              border-t
              border-border
              outline-none
              focus:outline-none
              focus-visible:outline-none
              focus-visible:ring-0
              transition-colors
              duration-300
              p-6
              sm:p-8
              md:border-l
              md:border-t-0
              md:p-10
              ${
                activeSide === "evidence"
                  ? "bg-[#191b17]"
                  : "bg-transparent hover:bg-[#191b17]/60"
              }
            `}
          >
            {/* Active accent */}
            <span
              aria-hidden="true"
              className={`
                pointer-events-none
                absolute
                right-0
                top-0
                h-full
                w-px
                bg-gold
                transition-opacity
                duration-300
                ${
                  activeSide === "evidence"
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-30"
                }
              `}
            />

            {/* Side label */}
            <div className="flex items-center gap-2">
              <Icon
                name="shield-check"
                className="h-3.5 w-3.5 text-gold"
                strokeWidth={1.5}
              />

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-gold
                "
              >
                Side B
              </p>
            </div>

            {/* Heading */}
            <h3
              className="
                mt-3
                font-serif
                text-2xl
                leading-tight
                text-gold
              "
            >
              Evidence-Supported Condition
            </h3>

            {/* Evidence items */}
            <ul className="mt-8 space-y-7">
              {evidence.map((item) => (
                <li
                  key={item.title}
                  className="
                    flex
                    items-start
                    gap-3
                  "
                >
                  {/* Item icon */}
                  <div
                    className="
                      mt-0.5
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      text-gold
                    "
                  >
                    <Icon
                      name={item.icon}
                      className="h-3.75 w-3.75"
                      strokeWidth={1.45}
                    />
                  </div>

                  {/* Item content */}
                  <div className="min-w-0">
                    <p
                      className="
                        text-[13px]
                        font-semibold
                        leading-snug
                        text-gold
                      "
                    >
                      {item.title}
                    </p>

                    <p
                      className="
                        mt-1.5
                        text-[13px]
                        leading-relaxed
                        text-muted
                      "
                    >
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </button>
        </div>

        {/* =====================================================
            REALITY GAP
        ====================================================== */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            hidden
            -translate-x-1/2
            -translate-y-1/2
            md:block
          "
        >
          <div
            className="
              whitespace-nowrap
              rounded-sm
              border
              border-gold/70
              bg-bg-alt
              px-4
              py-2
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.12em]
              text-gold
              shadow-[0_4px_20px_rgba(0,0,0,0.25)]
            "
          >
            The Reality Gap
          </div>
        </div>
      </div>
    </div>
  );
}
