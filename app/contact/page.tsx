"use client";

import { FormEvent, useState } from "react";
import Container from "@/components/Container";
import SectionLabel from "@/components/SectionLabel";

const INQUIRIES = [
  {
    n: "01",
    title: "Project Assessment",
    desc: "Evaluate risk, infrastructure, and leadership readiness for specific initiatives.",
  },
  {
    n: "02",
    title: "Executive / Portfolio",
    desc: "Strategic discussions concerning portfolio-level governance and executive alignment.",
  },
  {
    n: "03",
    title: "Practitioner",
    desc: "Engagement queries regarding methodology implementation and practitioner support.",
  },
  {
    n: "04",
    title: "Partnership",
    desc: "Explore collaboration and partnership opportunities with LMCS.",
  },
  {
    n: "05",
    title: "General Inquiry",
    desc: "For all other questions, media inquiries, or general communications.",
  },
];

function Field({
  label,
  name,
  type = "text",
  optional = false,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  optional?: boolean;
  textarea?: boolean;
}) {
  const common =
    "mt-2 w-full rounded-[3px] border border-border bg-bg-alt px-4 py-3 text-[14px] text-cream placeholder:text-muted focus:border-gold focus:outline-none";
  return (
    <div>
      <label
        htmlFor={name}
        className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted"
      >
        {label} {optional && "(Optional)"}
      </label>
      {textarea ? (
        <textarea id={name} name={name} rows={4} className={common} />
      ) : (
        <input id={name} name={name} type={type} className={common} />
      )}
    </div>
  );
}

export default function ContactPage() {
  const [selected, setSelected] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="border-b border-border bg-bg py-20">
        <Container>
          <SectionLabel>Contact LMCS</SectionLabel>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl leading-tight text-cream md:text-5xl">
            Start the Conversation.
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-muted">
            Connect with LMCS to discuss a project assessment, executive or
            portfolio concerns, practitioner engagement, partnership
            opportunities, or a general inquiry.
          </p>
        </Container>
      </section>

      <section className="bg-bg py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.4fr]">
          {/* Inquiry type picker */}
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-gold">
              How Can We Help?
            </p>
            <h2 className="mt-2 font-serif text-2xl text-cream">
              Choose an Inquiry Type
            </h2>

            <div className="mt-8 space-y-4">
              {INQUIRIES.map((item, i) => (
                <button
                  key={item.n}
                  type="button"
                  onClick={() => setSelected(i)}
                  aria-pressed={selected === i}
                  className={`block w-full rounded-sm border-l-2 p-6 text-left transition-colors ${
                    selected === i
                      ? "border-gold bg-card-alt"
                      : "border-border bg-card hover:border-gold/60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[12px] font-semibold text-gold">
                      {item.n}
                    </span>
                    {selected === i && (
                      <span className="text-gold" aria-hidden>
                        →
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 font-serif text-xl text-cream">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-sm border border-border bg-card p-8 md:p-10">
            <h2 className="font-serif text-2xl text-cream">
              Contact Information
            </h2>
            <div className="mt-2 h-px w-full bg-border" />

            {submitted ? (
              <div className="mt-8 rounded-sm border border-gold bg-bg-alt p-6">
                <p className="font-serif text-xl text-gold">
                  Thank you — your inquiry has been received.
                </p>
                <p className="mt-2 text-[14px] text-muted">
                  An LMCS advisor will respond regarding your{" "}
                  {INQUIRIES[selected].title.toLowerCase()} inquiry shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="Name" name="name" />
                  <Field label="Organization" name="organization" />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Field label="Role" name="role" />
                  <Field label="Phone Number" name="phone" optional />
                </div>
                <Field label="Work Email" name="email" type="email" />

                <h2 className="pt-4 font-serif text-2xl text-cream">
                  Project Information
                </h2>
                <div className="h-px w-full bg-border" />

                <Field label="Project / Initiative Name" name="project" />
                <Field
                  label="Brief Project Context"
                  name="context"
                  textarea
                />
                <Field
                  label="Additional Message"
                  name="message"
                  textarea
                />

                <div className="h-px w-full bg-border" />

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-[3px] bg-gold px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#171613] transition-colors hover:bg-gold-light"
                >
                  Send Inquiry ▷
                </button>
                <p className="text-[13px] text-muted">
                  Your information will be used only to respond to your
                  inquiry.
                </p>
              </form>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
