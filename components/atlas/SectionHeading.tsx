// src/components/atlas/SectionHeading.tsx
export default function SectionHeading({
  eyebrow,
  heading,
  className = "",
}: {
  eyebrow?: string;
  heading: string;
  className?: string;
}) {
  return (
    <div className={`text-center ${className}`}>
      {eyebrow && (
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-gold">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-serif text-3xl leading-tight text-cream md:text-4xl">
        {heading}
      </h2>
    </div>
  );
}