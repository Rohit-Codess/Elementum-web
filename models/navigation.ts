export interface NavItem {
  label: string;
  href: string;
  ariaLabel: string;
}

export const primaryNavigation: NavItem[] = [
  { label: "Home", href: "/", ariaLabel: "Go to Home" },
  { label: "Studio", href: "/studio", ariaLabel: "Go to Studio" },
  { label: "Services", href: "/services", ariaLabel: "Go to Services" },
  { label: "Contact", href: "/contact", ariaLabel: "Go to Contact" },
  { label: "FAQs", href: "/faqs", ariaLabel: "Go to FAQs" },
];
