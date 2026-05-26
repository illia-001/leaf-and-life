import Link from "next/link";

const footerLinks = [
  { href: "/sustainability", name: "Sustainability" },
  { href: "/faq", name: "FAQ" },
  { href: "/privacy", name: "Privacy" },
  { href: "/shipping-policy", name: "Shipping Policy" },
  { href: "/terms", name: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="flex sticky bottom-0 flex-col gap-6 px-4 py-12 bg-secondary lg:px-8">
      <Link href="/" className="font-semibold text-text text-2xl font-sans">
        Leaf & Life
      </Link>

      <span className="text-text">
        © 2024 Leaf & Life Botanical Co. Cultivating tranquility in every home.
      </span>
      <div className="grid grid-cols-2 gap-4">
        {footerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-text text-sm font-semibold"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
