import Image from "next/image";
import { ReactNode } from "react";

import Container from "./Container";
import Button from "./Button";
import SectionLabel from "./SectionLabel";

type PageHeroProps = {
  label: string;
  heading: ReactNode;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
  image?: string;
  /**
   * "default" = original hero (other pages stay untouched).
   * "large"   = newer Figma hero: 64/72 heading, wider heading, 17px/1.65 copy.
   */
  variant?: "default" | "large";
  /** Adds the → icon after the button label */
  buttonArrow?: boolean;
};

const STYLES = {
  default: {
    heading:
      "mt-5 max-w-3xl text-[40px] leading-[1.1] text-cream sm:text-5xl lg:text-6xl xl:text-[72px]",
    description:
      "mt-6 max-w-2xl text-[16px] leading-relaxed text-muted sm:text-[17px] lg:text-lg",
  },
  large: {
    heading:
      "mt-5 max-w-4xl text-[36px] leading-[1.15] text-[#E2E3DE] sm:text-[44px] lg:text-[56px] xl:text-[64px] xl:leading-[72px]",
    description:
      "mt-9 max-w-2xl text-[16px] leading-[1.65] text-[#D1C5B4] sm:text-[17px]",
  },
} as const;

function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      fill="none"
      className="h-4 w-4 shrink-0"
    >
      <path
        d="M2.5 8h11M9 3.5 13.5 8 9 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PageHero({
  label,
  heading,
  description,
  buttonLabel,
  buttonHref = "/contact",
  image,
  variant = "default",
  buttonArrow = false,
}: PageHeroProps) {
  const styles = STYLES[variant];

  return (
    <section className="relative overflow-hidden border-b border-border bg-bg-alt">
      {image && (
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center] opacity-30 grayscale"
          />

          {/* Left-heavy fade so the text always stays readable */}
          <div className="absolute inset-0 bg-linear-to-r from-bg via-bg/85 to-bg/20" />
          <div className="absolute inset-0 bg-linear-to-t from-bg/70 via-transparent to-transparent" />
        </div>
      )}

      <Container wide className="relative z-10 py-20 sm:py-24 lg:py-32">
        <SectionLabel>{label}</SectionLabel>

        <h1 className={`font-serif ${styles.heading}`}>{heading}</h1>

        <p className={styles.description}>{description}</p>

        {buttonLabel && (
          <div className="mt-9 lg:mt-12">
            <Button href={buttonHref}>
              {buttonArrow ? (
                <span className="inline-flex items-center gap-2">
                  {buttonLabel}
                  <ArrowRight />
                </span>
              ) : (
                buttonLabel
              )}
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
