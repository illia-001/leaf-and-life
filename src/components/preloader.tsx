import Image from "next/image";
import { useEffect } from "react";
import Loader from "./loader";
import { useRouter } from "next/navigation";

export const Preloader = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("quiz/checkout");
    }, 3000);

    return () => clearTimeout(timer);
  });
  return (
    <div className="flex flex-col items-center gap-10">
      <Image
        src="/preloading-image.png"
        width={250}
        height={250}
        alt="preloading-image"
        className="rounded-full object-contain lg:w-100 border border-accent"
      />
      <article className="flex flex-col gap-4">
        <h1 className="text-text font-sans text-3xl text-center">
          Curating your perfect botanical matches...
        </h1>
        <p className="text-accent text-center">
          We&apos;re analyzing your lighting, space, and care style to find
          plants that will thrive in your home.
        </p>
      </article>
      <Loader />
    </div>
  );
};
