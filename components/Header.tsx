// FILE PATH: components/Header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Button from "@/components/Button";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "How LMCS Works", href: "/how-lmcs-works" },
  { label: "Project Assessment", href: "/project-assessment" },
  { label: "ATLAS", href: "/atlas" },
  { label: "Project Drift", href: "/project-drift" },
  { label: "Delivery Confidence", href: "/delivery-confidence" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
      <Container className="flex h-17 items-center justify-between">
        {/* Logo — also routes home */}
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.08em] text-cream"
        >
          ATLAS
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative pb-1 text-[14px] transition-colors ${
                  isActive
                    ? "text-gold after:absolute after:-bottom-px after:left-0 after:h-px after:w-full after:bg-gold"
                    : "text-muted hover:text-cream"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Button href="/contact" className="hidden lg:inline-flex">
          Contact Us
        </Button>
      </Container>
    </header>
  );
}
