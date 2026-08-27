// FILE PATH: app/legal/privacy-notice/page.tsx

import { notFound } from "next/navigation";
import { getLegalDocument } from "@/lib/legal";
import LegalDocumentBlock from "@/components/legal/LegalContent";

export const metadata = {
  title: "Privacy Notice | LMCS",
  description:
    "How LMCS handles information provided through this website and its inquiry channels.",
};

export default async function PrivacyNoticePage() {
  const doc = await getLegalDocument("privacy-notice");
  if (!doc) return notFound();

  return <LegalDocumentBlock doc={doc} />;
}