// FILE PATH: app/legal/cookie-notice/page.tsx

import { notFound } from "next/navigation";
import { getLegalDocument } from "@/lib/legal";
import LegalDocumentBlock from "@/components/legal/LegalContent";

export const metadata = {
  title: "Cookie / Analytics Notice | LMCS",
  description: "How LMCS uses cookies and analytics tools on this website.",
};

export default async function CookieNoticePage() {
  const doc = await getLegalDocument("cookie-notice");
  if (!doc) return notFound();

  return <LegalDocumentBlock doc={doc} />;
}