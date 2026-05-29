import Link from "next/link";
import { ROUTES } from "@/constants/Routing";

const footerRouting = [
  { href: ROUTES.SUSTAINABILITY, name: "Sustainability" },
  { href: ROUTES.FAQ, name: "FAQ" },
  { href: ROUTES.PRIVACY, name: "Privacy" },
  { href: ROUTES.shippingPolicy, name: "Shipping Policy" },
  { href: ROUTES.TERMS, name: "Terms of Service" },
] as const;

export default function Footer() {
  return (
    <footer className="flex sticky bottom-0 flex-col gap-6 px-4 py-12 bg-secondary lg:px-8">
      <Link href={ROUTES.HOME} className="font-semibold text-text text-2xl">
        Leaf & Life
      </Link>

      <span className="text-text">
        © 2026 Leaf & Life Botanical Co. Cultivating tranquility in every home.
      </span>
      <div className="grid grid-cols-2 gap-4">
        {footerRouting.map((link) => (
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
