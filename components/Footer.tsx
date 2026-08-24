import Link from "next/link";
import Container from "./Container";
import { FOOTER_COMPANY, FOOTER_LEGAL, FOOTER_SERVICES } from "@/lib/nav";

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-gold">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-[15px] text-muted transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="font-serif text-2xl text-gold">
            LMCS
          </Link>
          <p className="mt-4 font-serif text-lg italic text-cream">
            Leadership is Infrastructure.
          </p>
          <div className="mt-3 h-px w-10 bg-gold" />
          <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-muted">
            Project assessment, governance, readiness, and delivery confidence.
          </p>
        </div>

        <FooterColumn title="Services" items={FOOTER_SERVICES} />
        <FooterColumn title="Company" items={FOOTER_COMPANY} />
        <FooterColumn title="Legal" items={FOOTER_LEGAL} />
      </Container>

      <Container className="flex flex-col items-start justify-between gap-4 border-t border-border py-6 text-[13px] text-muted md:flex-row md:items-center">
        <p>© 2024 Leadership Mission Critical Solutions. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/legal/privacy-notice" className="hover:text-gold">
            Privacy Notice
          </Link>
          <Link href="/legal/terms-of-use" className="hover:text-gold">
            Terms of Use
          </Link>
        </div>
      </Container>
    </footer>
  );
}
