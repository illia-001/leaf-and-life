import { ROUTES } from "@/constants/Routing";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="w-full bg-secondary h-screen justify-center flex flex-col items-center">
      <h1 className="text-accent text-5xl">404</h1>
      <h2 className="text-text text-2xl">This page could not be found</h2>
      <Link href={ROUTES.HOME} className="text-secondary font-semibold mt-4 font-sans px-4 py-2 rounded-3xl bg-accent">Return home</Link>
    </div>
  );
}
