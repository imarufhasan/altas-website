// FILE PATH: app/legal/terms-of-use/page.tsx

import { notFound } from "next/navigation";
import { getLegalDocument } from "@/lib/legal";
import LegalDocumentBlock from "@/components/legal/LegalContent";

export const metadata = {
  title: "Terms of Use | LMCS",
  description: "Terms governing access to and use of the LMCS website.",
};

export default async function TermsOfUsePage() {
  const doc = await getLegalDocument("terms-of-use");
  if (!doc) return notFound();

  return <LegalDocumentBlock doc={doc} />;
}