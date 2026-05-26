import Link from "next/link";

export default function Header() {
  return (
    <header className="flex z-1 col-span-full justify-between items-center h-17 gap-4 w-full px-4 bg-[#FCF9F2CC]">
      <Link href="/" className="font-semibold text-text text-2xl">
        Leaf & Life
      </Link>
      <button className="bg-accent rounded-full px-4 py-2">
        <Link
          href="/quiz"
          className="font-semibold font-mono text-xstext-[14px] text-primary"
        >
          Start Quiz
        </Link>
      </button>
    </header>
  );
}
