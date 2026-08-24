import Container from "./Container";
import Button from "./Button";

export default function CTASection({
  title,
  description,
  buttonLabel = "Schedule an Executive Discussion",
  buttonHref = "/contact",
}: {
  title: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
}) {
  return (
    <section className="bg-bg py-24">
      <Container>
        <div className="mx-auto max-w-4xl rounded-sm border-t-2 border-gold bg-card/60 px-8 py-16 text-center md:px-20">
          <h2 className="font-serif text-3xl leading-tight text-cream md:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mt-5 max-w-5xl text-[16px] leading-relaxed text-muted">
              {description}
            </p>
          )}
          <div className="mt-8">
            <Button href={buttonHref}>{buttonLabel}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
