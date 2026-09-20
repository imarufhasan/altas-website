// FILE PATH: components/CTASection.tsx

import Container from "./Container";
import Button from "./Button";

export default function CTASection({
  title,
  description,
  buttonLabel = "Schedule an Executive Discussion",
  buttonHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-bg py-24 md:py-28">
      <Container>
        <div className="mx-auto max-w-4xl rounded-sm border border-t-2 border-border border-t-gold bg-card/60 px-6 py-14 text-center sm:px-10 md:px-20 md:py-16">
          <h2 className="mx-auto max-w-2xl font-serif text-4xl leading-[1.1] text-cream md:text-5xl">
            {title}
          </h2>

          {description && (
            <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-muted">
              {description}
            </p>
          )}

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href={buttonHref} square>
              {buttonLabel}
            </Button>

            {secondaryLabel && secondaryHref && (
              <Button href={secondaryHref} variant="ghost" square>
                {secondaryLabel}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}