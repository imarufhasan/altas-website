// FILE PATH: app/legal/accessibility/page.tsx

import { notFound } from "next/navigation";
import { getLegalDocument } from "@/lib/legal";
import LegalDocumentBlock from "@/components/legal/LegalContent";

export const metadata = {
  title: "Accessibility Statement | LMCS",
  description:
    "LMCS is committed to making its website accessible and usable for people with different abilities.",
};

export default async function AccessibilityPage() {
  const doc = await getLegalDocument("accessibility");
  if (!doc) return notFound();

  return <LegalDocumentBlock doc={doc} />;
}