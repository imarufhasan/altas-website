import { ReactNode } from "react";

export default function DomainCard({
  icon,
  title,
  description,
}: {
  icon?: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-sm border border-border bg-card p-7">
      {icon && (
        <div className="mb-4 text-gold" aria-hidden>
          {icon}
        </div>
      )}
      <h3 className="font-serif text-xl text-cream">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted">
        {description}
      </p>
    </div>
  );
}
