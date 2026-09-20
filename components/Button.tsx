// FILE PATH: components/Button.tsx

import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[13px] font-semibold tracking-[0.08em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold";

const variants: Record<Variant, string> = {
  primary: "bg-gold text-[#171613] hover:bg-gold-light",
  outline: "border border-gold text-gold hover:bg-gold hover:text-[#171613]",
  ghost: "border border-border text-cream hover:border-gold hover:text-gold",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = false,
  square = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  arrow?: boolean;
  /** Sharp-corner style used by the editorial sections (hero, CTA, academy). */
  square?: boolean;
}) {
  const radius = square ? "rounded-sm" : "rounded-[10px]";

  return (
    <Link
      href={href}
      className={`${base} ${radius} ${variants[variant]} ${className}`}
    >
      {children}
      {arrow && <span aria-hidden>→</span>}
    </Link>
  );
}
