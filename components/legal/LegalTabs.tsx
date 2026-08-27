// FILE PATH: components/legal/LegalTabs.tsx

"use client";

import { useEffect, useState, type ReactNode } from "react";
import Container from "@/components/Container";
import type { LegalDocument } from "@/lib/legal";
import LegalDocumentBlock from "./LegalContent";

type LegalTabsProps = {
  documents: LegalDocument[];
};

function FadeIn({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className={`transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

export default function LegalTabs({ documents }: LegalTabsProps) {
  const [activeId, setActiveId] = useState(documents[0]?.id ?? "");

  // Sync with URL hash on load, and when it changes (e.g. footer link clicks,
  // browser back/forward). This is what makes /legal#terms-of-use jump
  // straight to that document instead of scrolling past everything else.
  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && documents.some((d) => d.id === hash)) {
        setActiveId(hash);
      }
    };

    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [documents]);

  const activeDoc =
    documents.find((d) => d.id === activeId) ?? documents[0] ?? null;

  const handleSelect = (id: string) => {
    if (id === activeId) return;
    setActiveId(id);
    window.history.pushState(null, "", `#${id}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!activeDoc) return null;

  return (
    <>
      <section className="border-b border-border bg-bg-alt">
        <Container>
          <nav className="flex gap-1 overflow-x-auto py-4 sm:gap-2">
            {documents.map((doc) => {
              const isActive = doc.id === activeDoc.id;
              return (
                <button
                  key={doc.id}
                  type="button"
                  onClick={() => handleSelect(doc.id)}
                  className={`shrink-0 whitespace-nowrap border-b-2 px-4 py-2 text-[12.5px] font-semibold uppercase tracking-widest transition-colors ${
                    isActive
                      ? "border-gold text-gold"
                      : "border-transparent text-muted hover:text-cream"
                  }`}
                >
                  {doc.title}
                </button>
              );
            })}
          </nav>
        </Container>
      </section>

      <FadeIn key={activeDoc.id}>
        <LegalDocumentBlock doc={activeDoc} />
      </FadeIn>
    </>
  );
}