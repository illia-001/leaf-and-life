export const ROUTES = {
  HOME: "/",
  QUIZ: "/quiz",
  CHECKOUT: "/quiz/checkout",
  SUSTAINABILITY: "/sustainability",
  FAQ: "/faq",
  PRIVACY: "/privacy",
  SHIPPING_POLICY: "/shipping-policy",
  TERMS: "/terms",
} as const;

export const footerRouting = [
  { href: ROUTES.SUSTAINABILITY, name: "Sustainability" },
  { href: ROUTES.FAQ, name: "FAQ" },
  { href: ROUTES.PRIVACY, name: "Privacy" },
  { href: ROUTES.SHIPPING_POLICY, name: "Shipping Policy" },
  { href: ROUTES.TERMS, name: "Terms of Service" },
] as const;
