import Image from "next/image";
import { ReactNode } from "react";

import Container from "./Container";
import Button from "./Button";
import SectionLabel from "./SectionLabel";

export default function PageHero({
  label,
  heading,
  description,
  buttonLabel,
  buttonHref = "/contact",
  image,
}: {
  label: string;
  heading: ReactNode;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-bg-alt">
      {/* Background image */}
      {/* {image && (
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-[0.14]"
          />

          <div className="absolute inset-0 bg-[#0d0f0e]/72" />

          <div className="absolute inset-0 bg-linear-to-r from-[#0d0f0e]/98 via-[#0d0f0e]/88 to-[#0d0f0e]/[0.55]" />

          <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-bg-alt to-transparent" />
        </div>
      )} */}

      {image && (
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      )}

      <Container className="relative z-10 py-24 md:py-28">
        <SectionLabel>{label}</SectionLabel>

        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-[1.15] text-cream md:text-[52px]">
          {heading}
        </h1>

        <p className="mt-6 max-w-2xl text-[17px] leading-relaxed text-muted">
          {description}
        </p>

        {buttonLabel && (
          <div className="mt-9">
            <Button href={buttonHref}>{buttonLabel}</Button>
          </div>
        )}
      </Container>
    </section>
  );
}
