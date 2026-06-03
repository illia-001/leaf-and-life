import Link from "next/link";
import { ROUTES } from "@/constants/Routing";
import { footerRouting } from "@/constants/Routing";

export default function Footer() {
  return (
    <footer className="flex sticky bottom-0 flex-col gap-6 px-4 py-12 bg-secondary lg:px-8">
      <Link
        href={ROUTES.HOME}
        className="font-semibold font-serif text-text text-2xl"
      >
        Leaf & Life
      </Link>

      <span className="text-text">
        © 2026 Leaf & Life Botanical Co. Cultivating tranquility in every home.
      </span>
      <nav aria-label="Footer navigation">
        <ul className="grid grid-cols-2 gap-4">
          {footerRouting.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-text text-sm font-semibold"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
