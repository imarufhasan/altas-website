import Container from "./Container";
import SectionLabel from "./SectionLabel";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-bg py-24">
      <Container className="max-w-3xl">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="mt-4 font-serif text-4xl text-cream">{title}</h1>
        <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-muted">
          {children}
        </div>
      </Container>
    </section>
  );
}
