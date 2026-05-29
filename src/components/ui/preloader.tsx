import Image from "next/image";
import { useEffect } from "react";
import Loader from "./loader";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/constants/Routing";

export const Preloader = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(ROUTES.CHECKOUT);
    }, 3000);

    return () => clearTimeout(timer);
  });
  return (
    <div className="flex flex-col items-center gap-10">
        <Image
          src="https://res.cloudinary.com/dryw0xncr/image/upload/v1779884675/A_lush_Monstera_Deliciosa_plant_kdtnmh.png"
          width={250}
          height={250}
        alt="preloading-image"
        loading="eager"
          className="rounded-full object-contain z-1 sm:w-75 md:w-100 border border-accent "
        />

      <article className="flex flex-col gap-4">
        <h1 className="text-text text-3xl text-center">
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
