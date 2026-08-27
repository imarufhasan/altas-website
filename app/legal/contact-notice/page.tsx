// FILE PATH: app/legal/contact-notice/page.tsx

import { notFound } from "next/navigation";
import { getLegalDocument } from "@/lib/legal";
import LegalDocumentBlock from "@/components/legal/LegalContent";

export const metadata = {
  title: "Legal / Contact Notice | LMCS",
  description:
    "Company, registration, and contact information governing this website and its use.",
};

export default async function ContactNoticePage() {
  const doc = await getLegalDocument("contact-notice");
  if (!doc) return notFound();

  return <LegalDocumentBlock doc={doc} />;
}