// FILE PATH: components/InsightCard.tsx

import Image from "next/image";
import Link from "next/link";

type InsightCardProps = {
  href: string;
  tag: string;
  date?: string;
  title: string;
  excerpt: string;
  image: string;
  readTime?: string;
  tone?: "default" | "wide";
  /** "home" = compact editorial card used on the home page. */
  variant?: "default" | "home";
};

export default function InsightCard({
  href,
  tag,
  date,
  title,
  excerpt,
  image,
  readTime,
  tone = "default",
  variant = "default",
}: InsightCardProps) {
  if (variant === "home") {
    return (
      <article className="group h-full rounded-xl border border-gold/40 bg-[#0b0c0b] p-5 transition-colors duration-300 focus-within:border-gold hover:border-gold">
        <Link
          href={href}
          className="block h-full rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          <div className="relative aspect-5/4 overflow-hidden border border-border bg-bg">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="border border-gold px-2 py-1 text-[10px] font-semibold uppercase leading-none tracking-[0.12em] text-gold">
              {tag}
            </span>

            {date && (
              <span className="text-[10px] uppercase tracking-[0.12em] text-muted">
                {date}
              </span>
            )}
          </div>

          <h3 className="mt-4 font-serif text-[28px] leading-[1.15] text-cream transition-colors duration-300 group-hover:text-gold-light">
            {title}
          </h3>

          <p className="mt-4 text-[14px] leading-relaxed text-muted">
            {excerpt}
          </p>
        </Link>
      </article>
    );
  }

  return (
    <article
      className={`
        group overflow-hidden
        rounded-sm border border-border bg-bg-alt
        transition-all duration-300
        hover:border-gold/50
        focus-within:border-gold/50
        ${tone === "wide" ? "w-full" : ""}
      `}
    >
      <Link
        href={href}
        className="
          block h-full cursor-pointer
          rounded-sm outline-none
          focus-visible:ring-2
          focus-visible:ring-gold
          focus-visible:ring-offset-2
          focus-visible:ring-offset-bg
        "
      >
        {/* Image */}
        <div className="relative aspect-16/10 overflow-hidden bg-bg">
          {/* Skeleton */}
          <div
            aria-hidden="true"
            className="
              absolute inset-0
              animate-pulse
              bg-white/5
            "
          />

          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="
              relative object-cover
              transition-transform duration-500
              group-hover:scale-[1.03]
            "
          />
        </div>

        {/* Content */}
        <div className="flex flex-col p-6">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-gold">
              {tag}
            </span>

            {date && <span className="text-[10px] text-muted">{date}</span>}
          </div>

          <h3 className="mt-3 font-serif text-xl leading-tight text-cream">
            {title}
          </h3>

          <p className="mt-4 text-[13px] leading-relaxed text-muted">
            {excerpt}
          </p>

          <div className="mt-6 flex items-center justify-between">
            {readTime ? (
              <span className="text-[10px] text-muted">{readTime}</span>
            ) : (
              <span />
            )}

            <span
              className="
                cursor-pointer
                text-[10px]
                font-semibold
                uppercase
                tracking-widest
                text-gold
                transition-transform
                duration-200
                group-hover:translate-x-1
              "
            >
              Read Full Analysis →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
