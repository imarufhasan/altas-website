export default function StepCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="h-full p-6 sm:p-8">
      <span className="text-[12px] font-semibold tracking-[0.18em] text-gold">
        {number}
      </span>

      <h3 className="mt-4 font-serif text-xl uppercase tracking-[0.02em] text-cream sm:text-[22px]">
        {title}
      </h3>

      <p className="mt-4 max-w-56 text-[14px] leading-relaxed text-muted">
        {description}
      </p>
    </div>
  );
}
