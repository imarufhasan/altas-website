// FILE PATH: components/CTASection.tsx

import Container from "./Container";
import Button from "./Button";

type CTASectionProps = {
  title: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  /**
   * "default" = original CTA (other pages stay untouched).
   * "large"   = newer Figma CTA: 896px solid card, 4px gold top bar,
   *             64px title, rounded button.
   */
  variant?: "default" | "large";
};

const STYLES = {
  default: {
    section: "py-24 md:py-28",
    box: "max-w-5xl border-t-2 border-border border-t-gold bg-card/60 px-6 py-14 sm:px-10 md:px-20 md:py-16",
    title: "max-w-2xl text-4xl leading-[1.1] text-cream md:text-5xl",
    description: "mt-6 max-w-2xl text-[16px] leading-relaxed text-muted",
    actions: "mt-9",
    square: true,
  },
  large: {
    section: "py-16 sm:py-24 lg:py-40",
    box: "max-w-4xl border-t-4 border-[#4D4639] border-t-[#E8C177] bg-[#1A1C19] px-6 py-14 sm:px-10 sm:py-16 lg:px-8 lg:py-20",
    title:
      "max-w-none text-[32px] leading-[1.1] text-[#E2E3DE] sm:text-5xl lg:text-[64px]",
    description:
      "mt-9 max-w-2xl text-[16px] leading-[1.65] text-[#D1C5B4] sm:text-[17px]",
    actions: "mt-12",
    square: false,
  },
} as const;

export default function CTASection({
  title,
  description,
  buttonLabel = "Schedule an Executive Discussion",
  buttonHref = "/contact",
  secondaryLabel,
  secondaryHref,
  variant = "default",
}: CTASectionProps) {
  const styles = STYLES[variant];

  return (
    <section className={`bg-bg ${styles.section}`}>
      <Container wide>
        <div
          className={`mx-auto w-full rounded-sm border text-center ${styles.box}`}
        >
          <h2 className={`mx-auto font-serif ${styles.title}`}>{title}</h2>

          {description && (
            <p className={`mx-auto ${styles.description}`}>{description}</p>
          )}

          <div
            className={`${styles.actions} flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4`}
          >
            <Button href={buttonHref} square={styles.square}>
              {buttonLabel}
            </Button>

            {secondaryLabel && secondaryHref && (
              <Button
                href={secondaryHref}
                variant="ghost"
                square={styles.square}
              >
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
