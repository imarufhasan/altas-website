export type NavItem = {
  label: string;
  href: string;
};

// Single source of truth for the primary navigation.
// Every label here renders as a real, clickable Next.js <Link>.
export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/home" },
  { label: "How LMCS Works", href: "/how-lmcs-works" },
  { label: "Project Assessment", href: "/project-assessment" },
  { label: "ATLAS", href: "/atlas" },
  { label: "Project Drift", href: "/project-drift" },
  { label: "Delivery Confidence", href: "/delivery-confidence" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
];

export const CONTACT_HREF = "/contact";

export const FOOTER_SERVICES: NavItem[] = [
  { label: "Project Assessment", href: "/project-assessment" },
  { label: "Project Drift", href: "/project-drift" },
  { label: "Delivery Confidence", href: "/delivery-confidence" },
];

export const FOOTER_COMPANY: NavItem[] = [
  { label: "How LMCS Works", href: "/how-lmcs-works" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LEGAL: NavItem[] = [
  { label: "Privacy Notice", href: "/legal/privacy-notice" },
  { label: "Terms of Use", href: "/legal/terms-of-use" },
  { label: "Cookie / Analytics Notice", href: "/legal/cookie-notice" },
  { label: "Accessibility Statement", href: "/legal/accessibility" },
  { label: "Legal / Contact Notice", href: "/legal/contact-notice" },
];
