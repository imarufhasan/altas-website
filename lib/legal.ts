// FILE PATH: lib/legal.ts

export type LegalSection = {
  id: string;
  n: string;
  title: string;
  shortTitle: string;
  paragraphs: string[];
  highlight?: { label: string; value: string };
  cta?: { label: string };
};

export type LegalDocument = {
  id: string;
  title: string;
  subtitle: string;
  sections: LegalSection[];
};

const LEGAL_DOCUMENTS: LegalDocument[] = [
  {
    id: "privacy-notice",
    title: "Privacy Notice",
    subtitle:
      "This Privacy Notice explains how LMCS handles information provided through this website and its inquiry channels.",
    sections: [
      {
        id: "01",
        n: "01",
        title: "Information We Collect",
        shortTitle: "Information We Collect",
        paragraphs: [
          "LMCS operates on a principle of strict operational necessity. We collect only the information required to facilitate initial contact, assess prospective engagements, and maintain the functional integrity of our digital presence.",
          "This includes basic contact information provided voluntarily, and transient technical data strictly necessary for secure website delivery.",
        ],
      },
      {
        id: "02",
        n: "02",
        title: "Information You Provide",
        shortTitle: "Information You Provide",
        paragraphs: [
          "When initiating contact through this platform, you may choose to provide professional identifiers including name, corporate email address, organizational affiliation, and relevant title.",
          "Submission of this information constitutes consent for LMCS to utilize these details solely for the purpose of corresponding regarding potential advisory services.",
        ],
      },
      {
        id: "03",
        n: "03",
        title: "Project and Inquiry Information",
        shortTitle: "Project & Inquiry Info",
        paragraphs: [
          "Preliminary details regarding project scope or operational challenges submitted through our inquiry forms are treated with the highest level of confidentiality. However, we advise against transmitting sensitive, proprietary, or classified materials prior to the execution of a formal Non-Disclosure Agreement (NDA).",
        ],
      },
      {
        id: "04",
        n: "04",
        title: "How We Use Information",
        shortTitle: "How We Use Information",
        paragraphs: [
          "Information is utilized exclusively to evaluate the suitability of LMCS advisory services for your specific context, to schedule preliminary consultations, and to respond to direct inquiries.",
          "LMCS does not engage in marketing automation, newsletter syndication, or speculative outreach based on submitted data.",
        ],
      },
      {
        id: "05",
        n: "05",
        title: "Data Minimization",
        shortTitle: "Data Minimization",
        paragraphs: [
          "In accordance with our ethos of restraint, we actively employ data minimization protocols. If an inquiry does not result in a formal engagement, or if the provided information is deemed unnecessary for preliminary assessment, it is scheduled for expedited deletion.",
        ],
      },
      {
        id: "06",
        n: "06",
        title: "Information Security",
        shortTitle: "Information Security",
        paragraphs: [
          "LMCS implements enterprise-grade cryptographic protocols for data in transit and at rest. Access to inquiry data is strictly partitioned and limited on a need-to-know basis among senior partners assessing the engagement.",
        ],
      },
      {
        id: "07",
        n: "07",
        title: "Data Retention",
        shortTitle: "Data Retention",
        paragraphs: [
          "Prospective client data is retained only for the duration of the preliminary assessment phase. Should formal engagement proceed, data retention falls under the superseding terms of the specific contractual agreement and NDA.",
        ],
      },
      {
        id: "08",
        n: "08",
        title: "Third-Party Services",
        shortTitle: "Third-Party Services",
        paragraphs: [
          "LMCS does not sell, lease, or otherwise monetize data. We utilize foundational infrastructure providers (e.g., secure hosting, encrypted email routing) bound by stringent data processing agreements.",
        ],
      },
      {
        id: "09",
        n: "09",
        title: "Cookies and Analytics",
        shortTitle: "Cookies & Analytics",
        paragraphs: [
          "This platform utilizes essential session tokens strictly necessary for site functionality and security routing. We deploy minimal, privacy-centric analytics devoid of cross-site tracking capabilities to monitor infrastructure performance.",
        ],
      },
      {
        id: "10",
        n: "10",
        title: "Your Rights",
        shortTitle: "Your Rights",
        paragraphs: [
          "Subject to applicable jurisdictional frameworks, you maintain rights regarding access, rectification, and erasure of submitted data. Requests may be directed to our designated compliance channel.",
        ],
      },
      {
        id: "11",
        n: "11",
        title: "Changes to This Notice",
        shortTitle: "Changes to Notice",
        paragraphs: [
          "LMCS reserves the right to modify this notice to reflect infrastructural or regulatory updates. Substantive changes will be reflected in the revision date appended to this document.",
        ],
      },
      {
        id: "12",
        n: "12",
        title: "Contact",
        shortTitle: "Contact",
        paragraphs: [
          "For matters concerning this Privacy Notice or the handling of provisional data, direct correspondence to:",
        ],
        highlight: {
          label: "Compliance Liaison",
          value: "legal@lmcs-advisory.com",
        },
      },
    ],
  },
  {
    id: "terms-of-use",
    title: "Terms of Use",
    subtitle:
      "These Terms of Use govern access to and use of the LMCS website. By continuing to use this site, you agree to these foundational principles.",
    sections: [
      {
        id: "01",
        n: "01",
        title: "Website Use",
        shortTitle: "Website Use",
        paragraphs: [
          "Access to this website is permitted on a temporary basis, and we reserve the right to withdraw or amend the service we provide on our website without notice. We will not be liable if for any reason our website is unavailable at any time or for any period.",
          "You are responsible for making all arrangements necessary for you to have access to our website. You are also responsible for ensuring that all persons who access our website through your internet connection are aware of these terms, and that they comply with them.",
        ],
      },
      {
        id: "02",
        n: "02",
        title: "Information on the Website",
        shortTitle: "Information on the Website",
        paragraphs: [
          "The content on our website is provided for general information only. It is not intended to amount to advice on which you should rely. You must obtain professional or specialist advice before taking, or refraining from, any action on the basis of the content on our website.",
          "Although we make reasonable efforts to update the information on our site, we make no representations, warranties or guarantees, whether express or implied, that the content on our site is accurate, complete or up-to-date.",
        ],
      },
      {
        id: "03",
        n: "03",
        title: "No Reliance on Website Content",
        shortTitle: "No Reliance",
        paragraphs: [
          "LMCS provides advisory frameworks and insights designed for executive decision-making. However, the generalized frameworks presented herein do not constitute bespoke legal, financial, or operational advice. Mission-critical engagements require customized consultation.",
        ],
      },
      {
        id: "04",
        n: "04",
        title: "Intellectual Property",
        shortTitle: "Intellectual Property",
        paragraphs: [
          "We are the owner or the licensee of all intellectual property rights in our website, and in the material published on it. Those works are protected by copyright laws and treaties around the world. All such rights are reserved.",
          "You may print off one copy, and may download extracts, of any page(s) from our website for your personal use and you may draw the attention of others within your organization to content posted on our website.",
        ],
      },
      {
        id: "05",
        n: "05",
        title: "User Conduct",
        shortTitle: "User Conduct",
        paragraphs: [
          "You may use our website only for lawful purposes. You may not use our website in any way that breaches any applicable local, national or international law or regulation, or in any way that is unlawful or fraudulent, or has any unlawful or fraudulent purpose or effect.",
        ],
      },
      {
        id: "06",
        n: "06",
        title: "External Links",
        shortTitle: "External Links",
        paragraphs: [
          "Where our website contains links to other sites and resources provided by third parties, these links are provided for your information only. We have no control over the contents of those sites or resources.",
        ],
      },
      {
        id: "07",
        n: "07",
        title: "Availability of the Website",
        shortTitle: "Availability",
        paragraphs: [
          "We do not guarantee that our website, or any content on it, will always be available or be uninterrupted. We may suspend or withdraw or restrict the availability of all or any part of our website for business and operational reasons.",
        ],
      },
      {
        id: "08",
        n: "08",
        title: "Limitation of Liability",
        shortTitle: "Limitation of Liability",
        paragraphs: [
          "To the extent permitted by law, we exclude all conditions, warranties, representations or other terms which may apply to our website or any content on it, whether express or implied. We will not be liable to any user for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, arising under or in connection with use of, or inability to use, our website.",
        ],
      },
      {
        id: "09",
        n: "09",
        title: "Changes to These Terms",
        shortTitle: "Changes to Terms",
        paragraphs: [
          "We may revise these terms of use at any time by amending this page. Please check this page from time to time to take notice of any changes we made, as they are binding on you.",
        ],
      },
      {
        id: "10",
        n: "10",
        title: "Governing Law",
        shortTitle: "Governing Law",
        paragraphs: [
          "These terms of use, their subject matter and their formation (and any non-contractual disputes or claims) are governed by [Jurisdiction Placeholder]. We both agree to the exclusive jurisdiction of the courts of [Jurisdiction Placeholder].",
        ],
      },
      {
        id: "11",
        n: "11",
        title: "Contact",
        shortTitle: "Contact",
        paragraphs: [
          "To contact us regarding these terms, please email legal@lmcs-advisory.com.",
        ],
      },
    ],
  },
  {
    id: "cookie-notice",
    title: "Cookie / Analytics Notice",
    subtitle:
      "This notice explains how LMCS uses cookies and analytics tools across this website.",
    sections: [
      {
        id: "01",
        n: "01",
        title: "What Are Cookies",
        shortTitle: "What Are Cookies",
        paragraphs: [
          "Cookies are small text files stored on your device that allow a website to recognize your browser across requests. LMCS uses a deliberately limited set of cookies, restricted to what is necessary for the site to function correctly and securely.",
        ],
      },
      {
        id: "02",
        n: "02",
        title: "Strictly Necessary Cookies",
        shortTitle: "Necessary Cookies",
        paragraphs: [
          "Strictly necessary cookies enable core functionality such as page navigation, session continuity, and security routing. These cookies cannot be disabled without materially affecting the operation of this website.",
        ],
      },
      {
        id: "03",
        n: "03",
        title: "Analytics and Performance",
        shortTitle: "Analytics & Performance",
        paragraphs: [
          "We use minimal analytics tooling to understand aggregate visitor behavior, such as which pages are most frequently reviewed by prospective clients. This data is used solely to inform content and structural improvements to the site.",
        ],
      },
      {
        id: "04",
        n: "04",
        title: "No Cross-Site Tracking",
        shortTitle: "No Cross-Site Tracking",
        paragraphs: [
          "LMCS does not deploy cookies or scripts designed to track your activity across unrelated third-party websites. Our analytics configuration is intentionally restricted to first-party, infrastructure-level performance monitoring.",
        ],
      },
      {
        id: "05",
        n: "05",
        title: "Third-Party Tools",
        shortTitle: "Third-Party Tools",
        paragraphs: [
          "Where third-party infrastructure providers are used (for example, secure hosting or content delivery), any cookies they set are limited to the technical function they perform and are governed by their respective data processing agreements with LMCS.",
        ],
      },
      {
        id: "06",
        n: "06",
        title: "Managing Your Preferences",
        shortTitle: "Managing Preferences",
        paragraphs: [
          "Most browsers allow you to control or disable cookies through their settings. Please note that disabling strictly necessary cookies may affect the functionality of parts of this website, including form submission and page rendering.",
        ],
      },
      {
        id: "07",
        n: "07",
        title: "Updates to This Notice",
        shortTitle: "Updates to This Notice",
        paragraphs: [
          "This notice may be revised periodically to reflect changes in our infrastructure or applicable regulation. The most current version will always be published on this page.",
        ],
      },
    ],
  },
  {
    id: "accessibility",
    title: "Accessibility Statement",
    subtitle:
      "LMCS is committed to making its website accessible and usable for people with different abilities.",
    sections: [
      {
        id: "01",
        n: "01",
        title: "Our Accessibility Commitment",
        shortTitle: "Commitment",
        paragraphs: [
          "We view accessibility not as a compliance checkbox, but as a fundamental aspect of high-quality digital architecture. Our commitment ensures that critical information remains unobstructed, prioritizing clarity, structure, and reliable interaction for all users, regardless of cognitive or physical differences.",
        ],
      },
      {
        id: "02",
        n: "02",
        title: "Accessibility Approach",
        shortTitle: "Approach",
        paragraphs: [
          "Our design system employs an \u201cAuthority through Restraint\u201d philosophy, which inherently supports accessibility. By eliminating decorative fluff and transient UI trends, we reduce cognitive load. The reliance on rigorous grid structures and substantial negative space helps focus attention on essential content and interactive elements.",
        ],
      },
      {
        id: "03",
        n: "03",
        title: "Keyboard Navigation",
        shortTitle: "Navigation",
        paragraphs: [
          "All critical pathways and interactive elements are designed to be navigable via keyboard. We utilize explicit focus states\u2014often manifested as high-contrast border shifts rather than disruptive shadows\u2014to ensure users always know their current position within the interface.",
        ],
      },
      {
        id: "04",
        n: "04",
        title: "Semantic Structure",
        shortTitle: "Structure",
        paragraphs: [
          "The architecture of our platform relies on strict HTML semantics. Headings are organized sequentially to maintain a logical document outline, mimicking the structural integrity of a traditional broadsheet. This ensures assistive technologies can accurately interpret and convey the page hierarchy.",
        ],
      },
      {
        id: "05",
        n: "05",
        title: "Color and Contrast",
        shortTitle: "Contrast",
        paragraphs: [
          "Operating primarily in a dark-themed environment, we ensure high contrast between our warm ivory typography and dark charcoal foundation. Important accents utilize muted gold tones that pass readability thresholds. Information is never conveyed through color alone; structural outlines and typography weight serve as primary indicators.",
        ],
      },
      {
        id: "06",
        n: "06",
        title: "Images and Alternative Text",
        shortTitle: "Imagery",
        paragraphs: [
          "Imagery serves to enhance context, not obscure it. Where appropriate, non-decorative images are provided with concise alternative text that describes the function or content of the image, ensuring users relying on screen readers receive a complete narrative experience.",
        ],
      },
      {
        id: "07",
        n: "07",
        title: "Forms and Interactive Elements",
        shortTitle: "Interactivity",
        paragraphs: [
          "Input fields and actionable components feature sharp, deliberate boundaries. Labels remain visible and associated with their respective inputs. Error states and validation messages are presented clearly in text, avoiding ambiguity in high-stakes interactions.",
        ],
      },
      {
        id: "08",
        n: "08",
        title: "Ongoing Improvements",
        shortTitle: "Improvements",
        paragraphs: [
          "Digital architecture is an evolving discipline. We regularly review our components and user flows, applying updates based on internal assessments and evolving best practices to progressively refine the accessibility of our platform.",
        ],
      },
      {
        id: "09",
        n: "09",
        title: "Feedback and Contact",
        shortTitle: "Contact",
        paragraphs: [
          "We recognize that barriers may still exist. If you encounter difficulties navigating or accessing content on this site, we welcome your feedback to help us address critical friction points.",
        ],
        cta: { label: "Contact Accessibility Team" },
      },
    ],
  },
  {
    id: "contact-notice",
    title: "Legal / Contact Notice",
    subtitle:
      "Company, registration, and contact information governing this website and its use.",
    sections: [
      {
        id: "01",
        n: "01",
        title: "Operator Information",
        shortTitle: "Operator Information",
        paragraphs: [
          "This website is owned and operated by Leadership Mission Critical Solutions (\u201cLMCS\u201d), an independent advisory practice specializing in project assessment, governance, and delivery-confidence engagements.",
        ],
      },
      {
        id: "02",
        n: "02",
        title: "Registered Office",
        shortTitle: "Registered Office",
        paragraphs: [
          "Registered Office: [Address Placeholder]. Company / Registration Number: [Registration Placeholder]. Jurisdiction of Incorporation: [Jurisdiction Placeholder].",
        ],
      },
      {
        id: "03",
        n: "03",
        title: "Regulatory Notices",
        shortTitle: "Regulatory Notices",
        paragraphs: [
          "LMCS operates in accordance with applicable advisory and professional services regulations within the jurisdictions in which it engages clients. Specific regulatory disclosures, where required, are provided directly within individual engagement agreements.",
        ],
      },
      {
        id: "04",
        n: "04",
        title: "Intellectual Property Notice",
        shortTitle: "IP Notice",
        paragraphs: [
          "All trademarks, service marks, and the LMCS name and mark are the property of Leadership Mission Critical Solutions. Unauthorized use of our marks or proprietary frameworks is strictly prohibited.",
        ],
      },
      {
        id: "05",
        n: "05",
        title: "Dispute Resolution",
        shortTitle: "Dispute Resolution",
        paragraphs: [
          "Any disputes arising from the use of this website that cannot be resolved informally will be subject to the governing law and jurisdiction provisions set out in our Terms of Use.",
        ],
      },
      {
        id: "06",
        n: "06",
        title: "Contact",
        shortTitle: "Contact",
        paragraphs: [
          "For legal notices, disputes, or formal correspondence relating to this website, please direct communications to:",
        ],
        highlight: {
          label: "Legal Department",
          value: "legal@lmcs-advisory.com",
        },
      },
    ],
  },
];

// Simulated data layer — swap the body for a real fetch()/DB call later.
export async function getLegalDocuments(): Promise<LegalDocument[]> {
  return LEGAL_DOCUMENTS;
}

// FILE PATH: lib/legal.ts (add this at the bottom, after getLegalDocuments)

export async function getLegalDocument(
  id: string,
): Promise<LegalDocument | null> {
  const documents = await getLegalDocuments();
  return documents.find((d) => d.id === id) ?? null;
}
