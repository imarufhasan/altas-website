"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Container from "./Container";
import Button from "./Button";
import { CONTACT_HREF, NAV_ITEMS } from "@/lib/nav";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur">
      <Container className="flex items-center justify-between py-5">
        <Link
          href="/home"
          className="flex items-center transition-opacity duration-200 hover:opacity-80"
        >
          <Image
            src="/images/logo.png"
            alt="ATLAS"
            width={100}
            height={40}
            priority
            className="h-auto w-30 object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active =
              item.href === "/home"
                ? pathname === "/home"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[15px] transition-colors duration-200 hover:text-gold focus-visible:outline-none focus-visible:text-gold ${
                  active ? "text-gold" : "text-cream"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href={CONTACT_HREF} variant="primary" className="px-6">
            Contact Us
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="h-[1.5px] w-6 bg-cream" />
          <span className="h-[1.5px] w-6 bg-cream" />
          <span className="h-[1.5px] w-4 bg-cream" />
        </button>
      </Container>

      {open && (
        <div className="border-t border-border lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-[15px] text-cream hover:text-gold"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={CONTACT_HREF}
              onClick={() => setOpen(false)}
              className="mt-2 inline-block rounded-[3px] bg-gold px-6 py-3 text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-[#171613]"
            >
              Contact Us
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
