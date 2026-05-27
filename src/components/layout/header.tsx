"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const handleClickButton = () => {
    router.push("/quiz");
  };

  return (
    <header className="flex z-1 col-span-full justify-between items-center h-17 gap-4 w-full px-4 bg-[#FCF9F2CC]">
      <Link href="/" className="font-semibold font-sans text-text text-2xl">
        Leaf & Life
      </Link>

      <Button onClick={handleClickButton} className="bg-accent rounded-full">
        Start Quiz
      </Button>
    </header>
  );
}
