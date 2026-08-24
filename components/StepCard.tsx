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
    <div className="border-t border-border pt-5">
      <span className="text-[13px] font-semibold text-gold">{number}</span>
      <h3 className="mt-2 text-[13px] font-semibold uppercase tracking-[0.1em] text-cream">
        {title}
      </h3>
      <p className="mt-3 text-[14px] leading-relaxed text-muted">
        {description}
      </p>
    </div>
  );
}
